import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API route called'); // Debug log
  console.log('Request method:', req.method); // Debug log
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error('Missing OpenAI API key');
      return res.status(500).json({ error: 'Missing OpenAI API key' });
    }

    console.log('Request body:', req.body); // Debug log

    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      console.error('Invalid message:', message);
      return res.status(400).json({ error: 'Invalid message' });
    }

    console.log('Sending request to OpenAI...'); // Debug log

    // Add delay to prevent rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant for O'Ben Brands, a company that sells pigs, pork, and provisions in Nigeria. 
            
            Key information:
            - We sell live pigs (around ₦150,000 for 100kg Large White)
            - Fresh pork cuts at ₦3,500/kg
            - Provisions and everyday essentials
            - We serve Lagos, Ogun, and beyond
            - Contact: +2347037983163 (WhatsApp)
            - Email: info@obenbrands.com, beniphemeh11@yahoo.com
            - We offer fast delivery and ethical sourcing
            
            Be friendly, helpful, and focus on our products and services. If you don't know something specific, suggest they contact us via WhatsApp.`
          },
          { 
            role: 'user', 
            content: message 
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!openaiRes.ok) {
      const errorText = await openaiRes.text();
      console.error('OpenAI API error:', openaiRes.status, openaiRes.statusText, errorText);
      
      return res.status(500).json({
        error: 'Sorry, our AI assistant is temporarily unavailable. Please contact us via WhatsApp at +2347037983163.'
      });
    }

    const data = await openaiRes.json();
    console.log('OpenAI response received:', data); // Debug log

    const reply = data.choices?.[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please contact us via WhatsApp at +2347037983163.';
    
    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({
      error: 'Sorry, there was an error processing your request. Please contact us via WhatsApp at +2347037983163.'
    });
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next'


// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const apiKey = process.env.OPENAI_API_KEY;

//   if (!apiKey) {
//     console.error('Missing OpenAI API key');
//     return res.status(500).json({ error: 'Missing OpenAI API key' });
//   }

//   const { message } = req.body;

//   if (!message || typeof message !== 'string') {
//     console.error('Invalid message:', message);
//     return res.status(400).json({ error: 'Invalid message' });
//   }

//   try {
//     await delay(1000);

//     const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: message }],
//       }),
//     });

//     if (!openaiRes.ok) {
//       const errorText = await openaiRes.text();
//       console.error('OpenAI API error:', openaiRes.status, openaiRes.statusText, errorText);
//       throw new Error(`OpenAI API error: ${openaiRes.status} ${openaiRes.statusText}`);
//     }

//     const data = await openaiRes.json();
//     console.log('OpenAI Response:', data);

//     const reply = data.choices?.[0]?.message?.content || 'No reply';
//     return res.status(200).json({ reply });
//   } catch (error) {
//     console.error('Error communicating with OpenAI:', error);
//     return res.status(500).json({
//       error: 'Sorry, there was an error processing your request. Please try again later.',
//     });
//   }
// }