import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 })
  }

  const { message } = await req.json()

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
  }

  try {
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
    })

    const data = await openaiRes.json()
    const reply = data.choices?.[0]?.message?.content || 'No reply'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('OpenAI error:', error)
    return NextResponse.json({ error: 'OpenAI API request failed' }, { status: 500 })
  }
}
