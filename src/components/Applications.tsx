import React from 'react';
import { Building, Home, Droplets, Leaf, Guitar as Hospital, GraduationCap } from 'lucide-react';

const Applications: React.FC = () => {
  const applications = [
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Comprehensive water treatment for offices, hotels, and commercial complexes',
      benefits: ['Improved water quality', 'Reduced maintenance costs', 'Energy efficiency', 'Compliance with regulations']
    },
    {
      icon: Home,
      title: 'Residential Solutions',
      description: 'Pure water systems for homes and residential communities',
      benefits: ['Safe drinking water', 'Better taste and odor', 'Skin and hair health', 'Appliance protection']
    },
    {
      icon: Droplets,
      title: 'Municipal Water',
      description: 'Large-scale water treatment for cities and municipalities',
      benefits: ['Population-wide coverage', 'Cost-effective solutions', 'Regulatory compliance', 'Public health protection']
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Specialized water treatment for irrigation and livestock',
      benefits: ['Crop yield improvement', 'Soil health protection', 'Sustainable farming', 'Resource conservation']
    },
    {
      icon: Hospital,
      title: 'Healthcare Facilities',
      description: 'Ultra-pure water systems for hospitals and medical centers',
      benefits: ['Sterile water supply', 'Patient safety', 'Equipment protection', 'Infection control']
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Safe water solutions for schools and universities',
      benefits: ['Student health', 'Cafeteria compliance', 'Laboratory applications', 'Campus-wide coverage']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Applications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our water treatment solutions serve diverse industries and applications, ensuring clean, safe water wherever it's needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:from-blue-100 hover:to-cyan-100 transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <app.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{app.description}</p>
              
              <div className="space-y-2">
                {app.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Water Quality?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied customers who trust AquaTech for their water treatment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;