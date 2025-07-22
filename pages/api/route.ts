import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('API route called'); // Debug log
  
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error('Missing OpenAI API key');
      return NextResponse.json(
        { error: 'Missing OpenAI API key' }, 
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log('Request body:', body); // Debug log
    
    const { message } = body;

    if (!message || typeof message !== 'string') {
      console.error('Invalid message:', message);
      return NextResponse.json(
        { error: 'Invalid message' }, 
        { status: 400 }
      );
    }

    console.log('Sending request to OpenAI...'); // Debug log

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
      
      return NextResponse.json(
        { 
          error: 'Sorry, our AI assistant is temporarily unavailable. Please contact us via WhatsApp at +2347037983163.' 
        }, 
        { status: 500 }
      );
    }

    const data = await openaiRes.json();
    console.log('OpenAI response received:', data); // Debug log

    const reply = data.choices?.[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please contact us via WhatsApp at +2347037983163.';
    
    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { 
        error: 'Sorry, there was an error processing your request. Please contact us via WhatsApp at +2347037983163.' 
      }, 
      { status: 500 }
    );
  }
}
// import { NextResponse } from 'next/server'

// export async function POST(req: Request) {
//   const apiKey = process.env.OPENAI_API_KEY

//   if (!apiKey) {
//     return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 })
//   }

//   const { message } = await req.json()

//   if (!message || typeof message !== 'string') {
//     return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
//   }

//   try {
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
//     })

//     const data = await openaiRes.json()
//     const reply = data.choices?.[0]?.message?.content || 'No reply'

//     return NextResponse.json({ reply })
//   } catch (error) {
//     console.error('OpenAI error:', error)
//     return NextResponse.json({ error: 'OpenAI API request failed' }, { status: 500 })
//   }
// }
