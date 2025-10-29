/**
 * OpenRouter Chat Serverless Function
 * 
 * Endpoint: POST /api/chat
 * 
 * Description:
 * This serverless function receives a message from the user via POST request,
 * sends it to OpenRouter API (using openai/gpt-4o model),
 * and returns the AI-generated response in English.
 * 
 * Environment Variables:
 * - OPENROUTER_API_KEY: Your OpenRouter API key (required)
 * 
 * Request Example:
 * POST /api/chat
 * Content-Type: application/json
 * 
 * {
 *   "message": "Hello, how can you help me with insurance claims?"
 * }
 * 
 * Response Example (Success):
 * Status: 200
 * Content-Type: application/json
 * 
 * {
 *   "success": true,
 *   "response": "I can help you with various aspects of insurance claims..."
 * }
 * 
 * Response Example (Error):
 * Status: 400/500
 * Content-Type: application/json
 * 
 * {
 *   "success": false,
 *   "error": "Error message",
 *   "details": {...} // OpenRouter specific error details
 * }
 */

import OpenAI from 'openai';

// Validate environment variables
if (!process.env.OPENROUTER_API_KEY) {
  console.error('CRITICAL ERROR: OPENROUTER_API_KEY environment variable is not set');
}

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY, // FIXED: Use environment variable instead of hardcoded key
  defaultHeaders: {
    'HTTP-Referer': 'https://cj-public-adjusteer.vercel.app', // Optional. Site URL for rankings on openrouter.ai.
    'X-Title': 'CJ Public Adjuster', // Optional. Site title for rankings on openrouter.ai.
  },
});

// Helper function to extract detailed error information from OpenRouter
function extractOpenRouterError(error) {
  console.log('=== OPENROUTER ERROR ANALYSIS ===');
  console.log('Error type:', typeof error);
  console.log('Error constructor:', error.constructor.name);
  console.log('Error message:', error.message);
  console.log('Error stack:', error.stack);
  
  // Check if it's an OpenAI API error (which wraps OpenRouter errors)
  if (error.response) {
    console.log('HTTP Status:', error.response.status);
    console.log('Response headers:', error.response.headers);
    console.log('Response data:', JSON.stringify(error.response.data, null, 2));
    
    const responseData = error.response.data;
    
    // Extract specific error types
    if (error.response.status === 401) {
      return {
        type: 'authentication_error',
        message: 'Invalid API key or authentication failed',
        details: responseData,
        httpStatus: 401
      };
    }
    
    if (error.response.status === 402) {
      return {
        type: 'quota_exceeded',
        message: 'API quota exceeded or insufficient credits',
        details: responseData,
        httpStatus: 402
      };
    }
    
    if (error.response.status === 429) {
      return {
        type: 'rate_limit',
        message: 'Rate limit exceeded',
        details: responseData,
        httpStatus: 429
      };
    }
    
    if (error.response.status === 400) {
      return {
        type: 'invalid_request',
        message: 'Invalid request format or parameters',
        details: responseData,
        httpStatus: 400
      };
    }
    
    if (error.response.status >= 500) {
      return {
        type: 'server_error',
        message: 'OpenRouter server error',
        details: responseData,
        httpStatus: error.response.status
      };
    }
    
    // Generic HTTP error
    return {
      type: 'http_error',
      message: `HTTP ${error.response.status} error`,
      details: responseData,
      httpStatus: error.response.status
    };
  }
  
  // Network or other errors
  if (error.code) {
    console.log('Error code:', error.code);
    return {
      type: 'network_error',
      message: `Network error: ${error.code}`,
      details: {
        code: error.code,
        message: error.message,
        stack: error.stack
      }
    };
  }
  
  // Generic error
  return {
    type: 'unknown_error',
    message: error.message || 'Unknown error occurred',
    details: {
      message: error.message,
      stack: error.stack,
      name: error.name
    }
  };
}

export default async function handler(req, res) {
  console.log('=== CHAT API REQUEST START ===');
  console.log('Method:', req.method);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('ERROR: Method not allowed:', req.method);
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.',
      details: { receivedMethod: req.method }
    });
  }

  // Validate API key configuration
  console.log('=== API KEY VALIDATION ===');
  if (!process.env.OPENROUTER_API_KEY) {
    console.error('CRITICAL: OPENROUTER_API_KEY environment variable is missing');
    return res.status(500).json({
      success: false,
      error: 'Server configuration error: API key not configured',
      details: { type: 'missing_api_key' }
    });
  }
  
  const apiKeyMasked = process.env.OPENROUTER_API_KEY.substring(0, 10) + '...' + process.env.OPENROUTER_API_KEY.substring(-4);
  console.log('API Key configured (masked):', apiKeyMasked);
  console.log('API Key length:', process.env.OPENROUTER_API_KEY.length);
  
  try {
    console.log('=== REQUEST BODY VALIDATION ===');
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    // Extract message from request body
    const { message } = req.body;
    
    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      console.log('ERROR: Invalid message:', { message, type: typeof message });
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a non-empty string.',
        details: {
          received: { message, type: typeof message },
          validation: 'Message must be a non-empty string'
        }
      });
    }
    
    console.log('Message validated, length:', message.trim().length);
    
    // Prepare request for OpenRouter
    const requestPayload = {
      model: 'openai/gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant for CJ Public Adjuster, specializing in insurance claims. Respond in English.'
        },
        {
          role: 'user',
          content: message
        }
      ],
    };
    
    console.log('=== OPENROUTER API CALL ===');
    console.log('Request payload:', JSON.stringify(requestPayload, null, 2));
    console.log('Base URL:', openai.baseURL);
    console.log('Default headers:', JSON.stringify(openai.defaultHeaders, null, 2));
    
    // Call OpenRouter API via OpenAI SDK
    const completion = await openai.chat.completions.create(requestPayload);
    
    console.log('=== OPENROUTER API RESPONSE ===');
    console.log('Response received successfully');
    console.log('Usage:', JSON.stringify(completion.usage, null, 2));
    console.log('Model used:', completion.model);
    console.log('Choices count:', completion.choices.length);
    
    // Extract response
    const aiResponse = completion.choices[0].message.content;
    console.log('AI Response length:', aiResponse?.length);
    
    // Return successful response
    console.log('=== SENDING SUCCESS RESPONSE ===');
    return res.status(200).json({
      success: true,
      response: aiResponse,
      metadata: {
        model: completion.model,
        usage: completion.usage,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('=== OPENROUTER API ERROR ===');
    
    // Extract detailed error information
    const errorDetails = extractOpenRouterError(error);
    console.log('Extracted error details:', JSON.stringify(errorDetails, null, 2));
    
    // Determine appropriate HTTP status based on error type
    let httpStatus = 500;
    if (errorDetails.httpStatus) {
      httpStatus = errorDetails.httpStatus;
    } else if (errorDetails.type === 'authentication_error') {
      httpStatus = 401;
    } else if (errorDetails.type === 'quota_exceeded') {
      httpStatus = 402;
    } else if (errorDetails.type === 'rate_limit') {
      httpStatus = 429;
    } else if (errorDetails.type === 'invalid_request') {
      httpStatus = 400;
    }
    
    // Prepare user-friendly error message
    let userMessage = 'Failed to generate response. Please try again later.';
    
    switch (errorDetails.type) {
      case 'authentication_error':
        userMessage = 'Authentication failed. Please contact support.';
        break;
      case 'quota_exceeded':
        userMessage = 'Service temporarily unavailable due to quota limits. Please try again later.';
        break;
      case 'rate_limit':
        userMessage = 'Too many requests. Please wait a moment and try again.';
        break;
      case 'invalid_request':
        userMessage = 'Invalid request format. Please check your message and try again.';
        break;
      case 'network_error':
        userMessage = 'Network connection error. Please check your connection and try again.';
        break;
    }
    
    console.log('=== SENDING ERROR RESPONSE ===');
    console.log('HTTP Status:', httpStatus);
    console.log('User message:', userMessage);
    
    return res.status(httpStatus).json({
      success: false,
      error: userMessage,
      details: {
        type: errorDetails.type,
        openRouterError: errorDetails.details,
        message: errorDetails.message,
        timestamp: new Date().toISOString()
      }
    });
  }
}
