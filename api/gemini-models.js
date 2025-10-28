/**
 * Gemini Models List Endpoint (Temporary)
 * 
 * Endpoint: GET /api/gemini-models
 * 
 * Description:
 * This temporary endpoint lists all available Gemini models
 * for your API key to help debug which models you can use.
 * 
 * Environment Variables:
 * - GEMINI_API_KEY: Your Google Gemini API key (required)
 * 
 * Request Example:
 * GET /api/gemini-models
 * 
 * Response Example (Success):
 * Status: 200
 * Content-Type: application/json
 * 
 * {
 *   "success": true,
 *   "totalModels": 10,
 *   "models": [
 *     {
 *       "name": "models/gemini-1.5-flash",
 *       "displayName": "Gemini 1.5 Flash",
 *       "supportedGenerationMethods": ["generateContent", "countTokens"]
 *     },
 *     ...
 *   ]
 * }
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use GET to list models.'
    });
  }

  // Get the Gemini API key from environment variables
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({
      success: false,
      error: 'GEMINI_API_KEY environment variable is not set'
    });
  }

  try {
    // Call Gemini API to list all available models
    const modelsUrl = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;
    
    console.log('Fetching available Gemini models...');
    
    const modelsResponse = await fetch(modelsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!modelsResponse.ok) {
      const errorData = await modelsResponse.json().catch(() => ({}));
      console.error('Gemini API error:', errorData);
      return res.status(modelsResponse.status).json({
        success: false,
        error: `Gemini API error: ${errorData.error?.message || modelsResponse.statusText}`,
        status: modelsResponse.status,
        statusText: modelsResponse.statusText
      });
    }

    const modelsData = await modelsResponse.json();
    console.log('Available Gemini models:', JSON.stringify(modelsData, null, 2));

    // Filter models that support generateContent
    const generateContentModels = modelsData.models?.filter(model => 
      model.supportedGenerationMethods?.includes('generateContent')
    ) || [];

    return res.status(200).json({
      success: true,
      totalModels: modelsData.models?.length || 0,
      generateContentModels: generateContentModels.length,
      models: modelsData.models || [],
      modelsForChat: generateContentModels.map(model => ({
        name: model.name,
        displayName: model.displayName,
        description: model.description,
        supportedMethods: model.supportedGenerationMethods
      }))
    });

  } catch (error) {
    console.error('Error fetching Gemini models:', error);
    return res.status(500).json({
      success: false,
      error: `Error fetching models: ${error.message}`,
      stack: error.stack
    });
  }
}
