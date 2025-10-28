/**
 * Gemini Chat Serverless Function
 * 
 * Endpoint: POST /api/chat
 * 
 * Description:
 * This serverless function receives a message from the user via POST request,
 * sends it to the Google Gemini API (using gemini-1.5-flash model),
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
  // Set CORS headers for frontend-backend communication
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST request.'
    });
  }

  // Get API key from environment variables
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'Gemini API key is not configured on the server'
    });
  }

  // Get message from request body
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({
      success: false,
      error: 'Message is required in the request body'
    });
  }
  
  try {
    // Call Gemini API with v1beta endpoint and gemini-1.5-flash model
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
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
    console.log('Gemini response data:', data);
    
    // Extract the response text from Gemini's response structure
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!responseText) {
      return res.status(200).json({
        success: false,
        response: "No response from AI: check your Gemini API key, quota, or model.",
      });
    }
    
    // Return successful response
    return res.status(200).json({
      success: true,
      response: responseText
    });
    
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return res.status(200).json({
      success: false,
      response: `There was an error: ${error.message || 'Internal server error'}`
    });
  }
}
