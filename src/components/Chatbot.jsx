import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon,
  PaperAirplaneIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm here to help you understand Louisiana's public adjuster services and how we can assist with your insurance claim. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about Louisiana public adjuster laws and services
  const knowledgeBase = {
    // Act 144 and Louisiana regulations
    act144: {
      keywords: ['act 144', 'act144', 'louisiana law', 'contractor', 'regulations', 'compliance'],
      response: "Act 144 is Louisiana law that took effect August 1, 2025. It prohibits contractors from handling insurance claims. As licensed public adjusters, we are authorized to assist with insurance claim documentation and work to secure fair settlements for policyholders. We partner with contractors who focus on repairs while we handle the claim process professionally."
    },
    
    // What public adjusters can do (compliant language)
    services: {
      keywords: ['what do you do', 'services', 'help', 'assist', 'how can you'],
      response: "As Louisiana licensed public adjusters, we provide professional claim assistance including:\n\n• Thorough damage documentation\n• Policy coverage evaluation\n• Claim preparation and presentation\n• Communication with insurance companies\n• Work toward fair settlements\n\nWe handle the entire claim process on your behalf. Would you like to schedule a free consultation?"
    },

    // Appointment booking
    appointment: {
      keywords: ['appointment', 'schedule', 'book', 'consultation', 'meet', 'visit'],
      response: "I'd be happy to help you schedule a free consultation! We offer:\n\n• In-person consultations\n• Virtual meetings\n• Emergency 24/7 response\n\nWould you like me to direct you to our booking page?"
    },

    // Claim types
    claims: {
      keywords: ['claim', 'damage', 'hurricane', 'flood', 'fire', 'wind', 'hail', 'water'],
      response: "We handle various types of property insurance claims:\n\n• Hurricane and wind damage\n• Flood damage\n• Fire and smoke damage\n• Water damage and leaks\n• Hail damage\n• Business interruption claims\n\nEach claim is professionally documented to support fair settlements. What type of claim do you need assistance with?"
    },

    // Fees and costs
    fees: {
      keywords: ['cost', 'fee', 'price', 'charge', 'pay', 'expensive'],
      response: "We work on a contingency fee basis, which means:\n\n• No upfront costs\n• We only get paid when you receive your settlement\n• Our fee is a percentage of the settlement (Louisiana law caps this at 10%)\n• Free initial consultation\n\nYou have nothing to lose by having us evaluate your claim. Would you like to schedule a consultation?"
    },

    // Denied or underpaid claims
    denied: {
      keywords: ['denied', 'rejected', 'underpaid', 'lowball', 'not enough', 'appeal'],
      response: "We frequently assist with denied or underpaid claims. As licensed public adjusters, we can:\n\n• Review your policy coverage\n• Re-document damages professionally\n• Prepare a comprehensive claim presentation\n• Communicate with the insurance company on your behalf\n\nMany denied claims can be reopened with proper documentation. Let's schedule a consultation to review your situation."
    },

    // Timeline
    timeline: {
      keywords: ['how long', 'time', 'duration', 'when', 'fast', 'quick'],
      response: "Claim timelines vary based on complexity and damage extent. Typically:\n\n• Initial assessment: Within 24-48 hours\n• Documentation: 1-2 weeks\n• Insurance review: 2-4 weeks\n• Settlement discussions: Ongoing\n\nWe work efficiently while ensuring thorough documentation. Emergency response available 24/7. Would you like to get started with a consultation?"
    },

    // Commercial claims
    commercial: {
      keywords: ['business', 'commercial', 'company', 'store', 'restaurant', 'warehouse'],
      response: "We specialize in complex commercial property claims including:\n\n• Business interruption claims (lost revenue)\n• Large-scale property damage\n• Equipment and inventory losses\n• Emergency response and documentation\n\nCommercial claims require detailed documentation and professional claim handling. Schedule a consultation to discuss your business claim needs."
    },

    // Contractor partnership
    contractors: {
      keywords: ['contractor', 'roofer', 'builder', 'repair', 'restoration'],
      response: "We have a professional partnership program with contractors:\n\n• Contractors focus on repairs\n• We handle all insurance claim documentation\n• Both parties operate independently\n• Full Act 144 compliance\n• No conflicts of interest\n\nThis ensures you get expert repairs and professional claim assistance. Are you a property owner or contractor?"
    },

    // General help
    help: {
      keywords: ['help', 'information', 'learn', 'tell me', 'explain'],
      response: "I can help you with information about:\n\n• Louisiana public adjuster services\n• Act 144 compliance\n• Types of claims we handle\n• Our process and fees\n• Scheduling consultations\n\nWhat specific information would you like to know?"
    }
  };

  const quickReplies = [
    'Schedule a consultation',
    'What types of claims do you handle?',
    'What are your fees?',
    'Tell me about Act 144'
  ];

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check each knowledge category
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default response if no match found
    return "I'd be happy to help! I can provide information about:\n\n• Our claim assistance services\n• Louisiana Act 144 compliance\n• Types of claims we handle\n• Scheduling a free consultation\n\nYou can also call us at (504) 252-8204 or schedule an appointment online. What would you like to know more about?";
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot "thinking" time
    setTimeout(() => {
      const botResponse = findResponse(text);
      const botMessage = {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // If response mentions booking, add a follow-up action
      if (botResponse.includes('booking page') || botResponse.includes('Schedule a consultation')) {
        setTimeout(() => {
          const actionMessage = {
            type: 'bot',
            text: 'Click the button below to book your free consultation:',
            timestamp: new Date(),
            action: 'book-appointment'
          };
          setMessages(prev => [...prev, actionMessage]);
        }, 1000);
      }
    }, 1000 + Math.random() * 1000); // Random delay for natural feel
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleActionClick = (action) => {
    if (action === 'book-appointment') {
      navigate('/book-appointment');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-cj-red hover:bg-cj-dark text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-cj-red focus:ring-offset-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl flex flex-col"
            style={{ height: '600px', maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-cj-red text-white px-4 py-3 rounded-t-lg">
              <h3 className="text-lg font-semibold">CJ Claim Services</h3>
              <p className="text-xs text-white/90">Louisiana Public Adjusters</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-cj-red text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    {message.action && (
                      <button
                        onClick={() => handleActionClick(message.action)}
                        className="mt-2 w-full bg-cj-red text-white px-4 py-2 rounded-lg hover:bg-cj-dark transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <CalendarIcon className="h-4 w-4" />
                        Book Free Consultation
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cj-red focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-cj-red text-white p-2 rounded-lg hover:bg-cj-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Or call us at (504) 252-8204
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
