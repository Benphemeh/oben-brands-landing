'use client'

import { useState } from 'react'

export default function AssistantChat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([])

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { from: 'user' as const, text: input }]
    setMessages(newMessages)
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()
      setMessages([...newMessages, { from: 'bot' as const, text: data.reply || 'No reply' }])
    } catch (error) {
      setMessages([...newMessages, { from: 'bot' as const, text: 'Something went wrong.' }])
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-[300px] bg-white shadow-lg rounded-lg p-4 z-50 border">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm my-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span className={`${msg.from === 'user' ? 'bg-green-100' : 'bg-gray-100'} p-2 rounded`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="border rounded-l px-2 py-1 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-green-600 text-white px-3 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  )
}
