'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { generateResponse } from '../config/gemini';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const JoshChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to clean and format text
  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
      .replace(/\*(.*?)\*/g, '$1') // Remove italic markdown
      .replace(/`(.*?)`/g, '$1') // Remove code markdown
      .trim();
  };
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Yo! I'm Josh Khovick Fermano 👋 Your friendly neighborhood Full Stack Dev from the Philippines! Ask me anything about my life, coding journey, or whatever's on your mind. Let's vibe! 🚀",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await generateResponse(inputMessage);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: formatMessage(response),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: formatMessage(
          'Yo, sorry bro! My brain had a glitch there. Try asking me again!'
        ),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <motion.div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}>
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with Josh">
          {/* Profile Picture */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-primary shadow-md hover:shadow-lg transition-all duration-300 bg-primary">
            <Image
              src="/profile-icon.png"
              alt="Josh Khovick Fermano"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Online Indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>

          {/* Chat Bubble Tooltip - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with Josh! 💬
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-primary"></div>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-4 sm:bottom-6 sm:right-6 sm:inset-auto z-50 sm:w-80 sm:h-[480px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border/50 bg-primary/90 text-primary-foreground">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-primary-foreground/20">
                    <Image
                      src="/profile-icon.png"
                      alt="Josh Khovick Fermano"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border border-primary"></div>
                </div>
                <div>
                  <h3 className="font-medium text-xs sm:text-sm">
                    Josh Khovick Fermano
                  </h3>
                  <p className="text-xs opacity-80 hidden sm:block">Digital Twin 🚀</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 sm:p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                aria-label="Close chat">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-background/50 to-secondary/20">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}>
                  {!message.isUser && (
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-primary/30 flex-shrink-0 mt-1">
                      <Image
                        src="/profile-icon.png"
                        alt="Josh"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] sm:max-w-[75%] px-3 py-2 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-background/80 backdrop-blur-sm border border-border/30'
                    }`}>
                    <p className="whitespace-pre-wrap break-words">
                      {formatMessage(message.text)}
                    </p>
                    <p
                      className={`text-xs mt-1 opacity-60 ${
                        message.isUser
                          ? 'text-primary-foreground/60'
                          : 'text-muted-foreground'
                      }`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {message.isUser && (
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-accent/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-primary/30 flex-shrink-0 mt-1">
                    <Image
                      src="/profile-icon.png"
                      alt="Josh"
                      width={28}
                      height={28}
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm border border-border/30 px-3 py-2 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin text-primary" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Josh is thinking...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-border/50 bg-background/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Josh anything..."
                  className="flex-1 resize-none bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 max-h-16 min-h-[36px] transition-all"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0"
                  aria-label="Send message">
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-2 text-center">
                Powered by Gemini AI ✨
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JoshChatbot;
