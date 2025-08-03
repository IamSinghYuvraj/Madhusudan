import React from 'react';
import { Users, Award, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: '25+ Years Experience',
      description: 'Decades of expertise in water treatment and purification technologies'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Recognized as a trusted partner by leading organizations worldwide'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge filtration and purification systems for optimal results'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'ISO certified processes ensuring the highest standards of water quality'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">AquaTech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing innovative water treatment solutions that ensure clean, safe, and pure water for communities, industries, and homes worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              To revolutionize water treatment through innovative technologies that deliver exceptional purity, sustainability, and reliability. We believe access to clean water is a fundamental right, and we're committed to making it a reality for everyone.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Advanced filtration systems for industrial and residential use</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Sustainable water treatment solutions with minimal environmental impact</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">24/7 technical support and maintenance services</p>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up relative">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Cutting-edge technology and innovation</li>
                  <li>✓ Comprehensive quality assurance</li>
                  <li>✓ Sustainable and eco-friendly solutions</li>
                  <li>✓ Expert technical support team</li>
                  <li>✓ Competitive pricing and flexible plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;