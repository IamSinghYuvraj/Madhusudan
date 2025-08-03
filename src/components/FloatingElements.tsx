import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

interface FloatingElementsProps {
  onNavigate: (section: string) => void;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ onNavigate }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => onNavigate('contact')}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 animate-bounce"
        >
          <Phone className="h-5 w-5" />
          <span className="hidden sm:inline">Get Quote</span>
        </button>
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          className="bg-white text-blue-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse"
          onClick={() => alert('Chat feature coming soon!')}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-24 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 opacity-80 hover:opacity-100"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingElements;