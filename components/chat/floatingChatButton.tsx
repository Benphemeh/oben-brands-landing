import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle } from "lucide-react";

interface FloatingChatButtonProps {
  onClick: () => void;
  isActive?: boolean;
  className?: string;
}

export default function FloatingChatButton({ 
  onClick, 
  isActive = false, 
  className = "" 
}: FloatingChatButtonProps) {
  return (
    <div className={`fixed bottom-20 right-4 z-40 group ${className}`}>
      <Button
        onClick={onClick}
        size="lg"
        className={`rounded-full shadow-lg transition-all duration-300 ${
          isActive 
            ? 'bg-blue-600 hover:bg-blue-700 scale-110' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        <Bot className="w-6 h-6" />
        {isActive && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        )}
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {isActive ? 'Close AI Chat' : 'Chat with AI Assistant'}
        <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
}