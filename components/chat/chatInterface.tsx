import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, X, MessageCircle } from "lucide-react";

type Message = {
  id: number;
  from: 'user' | 'bot';
  text: string;
  timestamp: string;
};

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function ChatInterface({ isOpen, onClose, className = "" }: ChatInterfaceProps) {
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
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now() + 1, 
          from: 'bot', 
          text: data.reply, 
          timestamp: new Date().toLocaleTimeString() 
        },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now() + 1, 
          from: 'bot', 
          text: 'Sorry, something went wrong. Please try again or contact us via WhatsApp at +2347037983163.', 
          timestamp: new Date().toLocaleTimeString() 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2347037983163', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-16 right-4 z-50 w-80 h-96 bg-white border-2 border-green-500 rounded-lg shadow-2xl animate-in slide-in-from-bottom-4 duration-300 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-green-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <span className="font-medium">O'Ben AI Assistant</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 h-64">
        {messages.length === 0 && (
          <div className="text-gray-600 text-sm bg-white p-3 rounded-lg border">
            <p className="font-medium text-green-700 mb-2">
              👋 Welcome to O'Ben Brands!
            </p>
            <p>
              I'm here to help you with questions about our products,
              pricing, delivery, or orders. How can I assist you today?
            </p>
            <div className="mt-3 pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-1">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-3 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              msg.from === 'user' 
                ? 'bg-green-600 text-white' 
                : 'bg-white border shadow-sm'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              <p className={`text-xs mt-1 ${
                msg.from === 'user' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start mb-3">
            <div className="bg-white border p-3 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={bottomRef} />
      </div>

      {/* Quick Actions - Only show when no messages */}
      {messages.length > 0 && (
        <div className="px-4 py-2 border-t bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {quickActions.slice(0, 3).map((action) => (
                <button
                  key={action}
                  onClick={() => sendMessage(action)}
                  className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
                  disabled={loading}
                >
                  {action}
                </button>
              ))}
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-1 px-2 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Ask about our products..."
            className="flex-1 text-sm"
            disabled={loading}
          />
          <Button
            onClick={() => sendMessage(input)}
            size="sm"
            disabled={loading || !input.trim()}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
          <span>Powered by AI</span>
          <span>Press Enter to send</span>
        </div>
      </div>
    </div>
  );
}