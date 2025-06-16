import type { NextApiRequest, NextApiResponse } from 'next'


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('Missing OpenAI API key');
    return res.status(500).json({ error: 'Missing OpenAI API key' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    console.error('Invalid message:', message);
    return res.status(400).json({ error: 'Invalid message' });
  }

  try {
    await delay(1000); // Add a 1-second delay before making the request

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!openaiRes.ok) {
      const errorText = await openaiRes.text();
      console.error('OpenAI API error:', openaiRes.status, openaiRes.statusText, errorText);
      throw new Error(`OpenAI API error: ${openaiRes.status} ${openaiRes.statusText}`);
    }

    const data = await openaiRes.json();
    console.log('OpenAI Response:', data);

    const reply = data.choices?.[0]?.message?.content || 'No reply';
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    return res.status(500).json({
      error: 'Sorry, there was an error processing your request. Please try again later.',
    });
  }
}