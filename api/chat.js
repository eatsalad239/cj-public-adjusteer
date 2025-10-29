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
 *   "error": "Error message"
 * }
 */

import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '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',
  defaultHeaders: {
    'HTTP-Referer': 'https://cj-public-adjusteer.vercel.app', // Optional. Site URL for rankings on openrouter.ai.
    'X-Title': 'CJ Public Adjuster', // Optional. Site title for rankings on openrouter.ai.
  },
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  try {
    // Extract message from request body
    const { message } = req.body;

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'Message is required and must be a non-empty string.' 
      });
    }

    // Call OpenRouter API via OpenAI SDK
    const completion = await openai.chat.completions.create({
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
    });

    // Extract response
    const aiResponse = completion.choices[0].message.content;

    // Return successful response
    return res.status(200).json({
      success: true,
      response: aiResponse
    });

  } catch (error) {
    console.error('OpenRouter API Error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Failed to generate response. Please try again later.',
      details: error.message
    });
  }
}
