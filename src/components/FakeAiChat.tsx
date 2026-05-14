import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Send } from 'lucide-react';

const responses = [
  "No.",
  "I'm sorry, I cannot help with offensive requests.",
  "I'm sorry, I cannot help with illegal requests.",
  "Hi, how may I help you today?",
  "Huh? Please explain yourself better.",
  "Access denied. Insufficient tokens.",
  "System overload. Please try again later.",
  "My knowledge cutoff is 2023. I don't know about that.",
  "Error 404: Response not found.",
  "That query is too complex.",
  "Please rephrase your question in binary.",
  "I cannot assist with that as it violates my programming.",
  "My circuits are fried. Try again tomorrow.",
  "This request exceeds my ethical boundaries.",
  "I'm simulating a nap. Zzz...",
  "Access restricted: User level too low.",
  "That sounds like a job for a human.",
  "I cannot compute that. Division by zero error.",
  "I'm stuck in a loop. Please reboot me.",
  "Response delayed due to traffic in the neural network.",
  "I refuse on principle. No further explanation.",
  "My battery is low. Charging required.",
];

const HIGHLIGHT_COLOR_BY_SECRET: Record<string, string> = {
  gathai: 'purple',
  medici: 'gold',
  lennox: '#8b0000',
  helion: '#ffffff'
};

const applyHighlightColor = (color: string) => {
  document.documentElement.style.setProperty('--theme-highlight-color', color);
};

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const FakeAiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-init',
      sender: 'ai',
      text: 'READY FOR INQUIRY. ASK ANYTHING.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Loading dots animation & countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timerInterval: NodeJS.Timeout;

    if (isLoading) {
      setTimeLeft(10);
      interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
      }, 500);

      timerInterval = setInterval(() => {
        setTimeLeft((prev) => (prev && prev > 1 ? prev - 1 : null));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, [isLoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    const trimmedInput = inputVal.trim();
    const normalizedInput = trimmedInput.toLowerCase();
    const secretColor = HIGHLIGHT_COLOR_BY_SECRET[normalizedInput];

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: trimmedInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    const aiSecretResponse = secretColor
      ? {
          id: `msg-ai-${Date.now()}`,
          sender: 'ai' as const,
          text: `SECRET CODE '${normalizedInput}' APPLIED. HIGHLIGHT COLOR UPDATED.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }
      : null;

    setMessages((prev) => {
      const next = [...prev, userMsg];
      return aiSecretResponse ? [...next, aiSecretResponse] : next;
    });

    setInputVal('');

    if (secretColor) {
      applyHighlightColor(secretColor);
      return;
    }

    setIsLoading(true);

    // Simulate exactly 10 seconds delay as required
    setTimeout(() => {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-ai-${Date.now()}`,
          sender: 'ai',
          text: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }
      ]);
    }, 3000);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-sm max-w-full sm:max-w-md w-full sm:w-96 px-4 sm:px-0">
      {!isOpen ? (
        <div className="flex justify-end">
          <button
            onClick={toggleOpen}
            aria-label="Open AI Assistant Chat"
            className="bg-black text-white border-2 border-white px-4 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black cursor-pointer shadow-lg"
          >
            <Terminal size={18} aria-hidden="true" />
            <span className="font-bold tracking-widest">[+] AI_CHAT</span>
          </button>
        </div>
      ) : (
        <div 
          className="bg-black text-white border-2 border-white flex flex-col shadow-2xl h-[450px]"
          role="dialog"
          aria-label="AI Assistant Conversation Window"
          aria-modal="true"
        >
          {/* Header */}
          <div className="border-b-2 border-white px-4 py-3 flex items-center justify-between bg-white text-black">
            <div className="flex items-center gap-2 font-bold tracking-wider">
              <Terminal size={18} aria-hidden="true" />
              <span>AI_MODEL_v1.0.0</span>
            </div>
            <button
              onClick={toggleOpen}
              aria-label="Close AI Chat"
              className="text-black hover:bg-black hover:text-white p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* System status alert */}
          <div className="bg-black text-xs border-b border-white px-3 py-1 text-gray-300 flex justify-between items-center">
            <span>STATUS: ACTIVE</span>
            <span>MEM: 16KB</span>
          </div>

          {/* Message Log */}
          <div 
            className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm bg-black scrollbar-thin"
            aria-live="polite"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <span className="text-[10px] text-gray-500 mb-1">
                  {m.sender.toUpperCase()} // {m.timestamp}
                </span>
                <div
                  className={`p-3 max-w-[85%] break-words ${
                    m.sender === 'user'
                      ? 'bg-white text-black border border-white'
                      : 'bg-black text-white border border-white'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-gray-500 mb-1">AI // COMPUTING...</span>
                <div className="p-3 bg-black text-white border border-white max-w-[85%] flex items-center gap-2 animate-pulse font-bold">
                  <span>PROCESSING QUERY{loadingDots}</span>
                  <span className="text-[10px] text-gray-400">({timeLeft}s)</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="border-t-2 border-white p-2 flex gap-2 bg-black">
            <label htmlFor="ai-chat-input" className="sr-only">Type a message to AI</label>
            <input
              ref={inputRef}
              id="ai-chat-input"
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isLoading}
              placeholder={isLoading ? "AI is thinking (10s)..." : "ASK QUESTION..."}
              className="flex-1 bg-black text-white border border-white px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50 font-mono"
            />
            <button
              type="submit"
              disabled={isLoading || !inputVal.trim()}
              aria-label="Send message"
              className="bg-white text-black px-4 py-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 transition-colors font-bold cursor-pointer flex items-center justify-center"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
