/**
 * OpenAI Chat Serverless Function
 * 
 * Endpoint: POST /api/chat
 * 
 * Description:
 * This serverless function receives a message from the user via POST request,
 * sends it to the OpenAI API (using gpt-3.5-turbo model by default),
 * and returns the AI-generated response.
 * 
 * Environment Variables:
 * - OPENAI_API_KEY: Your OpenAI API key (required)
 * 
 * Request Example:
 * POST /api/chat
 * Content-Type: application/json
 * 
 * {
 *   "message": "Hello, how can you help me with insurance claims?",
 *   "model": "gpt-3.5-turbo" // optional, defaults to gpt-3.5-turbo
 * }
 * 
 * Response Example (Success):
 * Status: 200
 * Content-Type: application/json
 * 
 * {
 *   "success": true,
 *   "response": "I can help you with various aspects of insurance claims...",
 *   "model": "gpt-3.5-turbo",
 *   "usage": {
 *     "prompt_tokens": 15,
 *     "completion_tokens": 50,
 *     "total_tokens": 65
 *   }
 * }
 * 
 * Response Example (Error):
 * Status: 400/500
 * Content-Type: application/json
 * 
 * {
 *   "success": false,
 *   "error": "Error message description"
 * }
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST request.'
    });
  }

  try {
    // Validate API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.'
      });
    }

    // Extract and validate request body
    const { message, model = 'gpt-3.5-turbo' } = req.body;

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Invalid request. "message" field is required and must be a non-empty string.'
      });
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant for CJ Claim Services, a public insurance adjuster company. You help users understand insurance claims, damage assessment, and the claims process.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    // Parse OpenAI response
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: data.error?.message || 'Failed to get response from OpenAI API'
      });
    }

    // Extract the assistant's message
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      return res.status(500).json({
        success: false,
        error: 'Invalid response from OpenAI API'
      });
    }

    // Return successful response
    return res.status(200).json({
      success: true,
      response: aiResponse,
      model: data.model,
      usage: data.usage
    });

  } catch (error) {
    console.error('Error in chat handler:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'An unexpected error occurred'
    });
  }
}
