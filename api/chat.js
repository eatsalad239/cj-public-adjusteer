/**
 * Gemini Chat Serverless Function
 * 
 * Endpoint: POST /api/chat
 * 
 * Description:
 * This serverless function receives a message from the user via POST request,
 * sends it to the Google Gemini API (using gemini-pro model),
 * and returns the AI-generated response in English.
 * 
 * Environment Variables:
 * - GEMINI_API_KEY: Your Google Gemini API key (required)
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

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST.'
    });
  }

  // Check for GEMINI_API_KEY
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'GEMINI_API_KEY environment variable is not set'
    });
  }

  // Extract message from request body
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: 'Message is required in the request body'
    });
  }

  try {
    // Call Gemini API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    
    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: message
          }]
        }]
      })
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      throw new Error(`Gemini API error: ${errorData.error?.message || geminiResponse.statusText}`);
    }

    const data = await geminiResponse.json();
    
    // Extract the response text from Gemini's response structure
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      throw new Error('No response text received from Gemini API');
    }

    // Return successful response
    return res.status(200).json({
      success: true,
      response: responseText
    });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
}
