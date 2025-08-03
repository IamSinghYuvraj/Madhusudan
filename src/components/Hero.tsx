import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent">
          {/* Floating Particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-60 right-40 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Pure Water
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of advanced water treatment technologies and premium packaged drinking water solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(59, 130, 246, 0.1)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;