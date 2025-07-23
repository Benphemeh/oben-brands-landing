import React, { useState, useEffect, useRef } from 'react';

type Message = {
  id: number;
  from: 'user' | 'bot';
  text: string;
  timestamp: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const quickActions = ['Hi', 'Price', 'Order', 'Contact'];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      from: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const { reply } = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: 'bot', text: reply, timestamp: new Date().toLocaleTimeString() },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: 'bot', text: 'Sorry, something went wrong.', timestamp: new Date().toLocaleTimeString() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendMessage(input);
      e.preventDefault();
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="brand">🐷 O'Ben Brands Chat</div>
        <div className="actions">
          <a href="https://oben-brands.vercel.app/" target="_blank">Website</a>
          <a href="https://wa.me/2347037983163" target="_blank">WhatsApp</a>
        </div>
      </header>

      <div className="chat-history">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-msg ${msg.from}`}>
            <div className="bubble">{msg.text}</div>
            <div className="time">{msg.timestamp}</div>
          </div>
        ))}
        {loading && <div className="loading">...</div>}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-area">
        {quickActions.map((act) => (
          <button key={act} onClick={() => sendMessage(act)} className="quick-btn">
            {act}
          </button>
        ))}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message"
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>

      <style jsx>{`
        .chat-container {
          max-width: 600px;
          margin: auto;
          display: flex;
          flex-direction: column;
          height: 100vh;
          border: 1px solid #ccc;
        }
        .chat-header {
          padding: 12px;
          background: #075e54;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-history {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          background: #e5ddd5;
        }
        .chat-msg {
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          max-width: 70%;
        }
        .chat-msg.user {
          align-self: flex-end;
          text-align: right;
        }
        .chat-msg.bot {
          align-self: flex-start;
          text-align: left;
        }
        .bubble {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 16px;
          background: white;
        }
        .chat-msg.user .bubble {
          background: #dcf8c6;
        }
        .time {
          font-size: 10px;
          color: gray;
          margin-top: 2px;
        }
        .loading {
          text-align: center;
          color: gray;
          margin: 10px 0;
        }
        .chat-input-area {
          padding: 8px;
          background: white;
          border-top: 1px solid #ccc;
        }
        .chat-input-area textarea {
          width: calc(100% - 100px);
          height: 40px;
          resize: none;
        }
        .chat-input-area button {
          width: 80px;
          margin-left: 8px;
        }
        .quick-btn {
          margin: 4px;
          padding: 4px 8px;
          background: #25d366;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
