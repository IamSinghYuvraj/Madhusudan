import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Droplets, Leaf, Guitar as Hospital, GraduationCap, Factory, Hotel } from 'lucide-react';

const Applications: React.FC = () => {
  const applications = [
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Comprehensive water treatment for offices, hotels, and commercial complexes',
      benefits: ['Improved water quality', 'Reduced maintenance costs', 'Energy efficiency', 'Compliance with regulations'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Residential Solutions',
      description: 'Pure water systems for homes and residential communities',
      benefits: ['Safe drinking water', 'Better taste and odor', 'Skin and hair health', 'Appliance protection'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Droplets,
      title: 'Municipal Water',
      description: 'Large-scale water treatment for cities and municipalities',
      benefits: ['Population-wide coverage', 'Cost-effective solutions', 'Regulatory compliance', 'Public health protection'],
      image: 'https://images.pexels.com/photos/162568/water-treatment-plant-162568.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Specialized water treatment for irrigation and livestock',
      benefits: ['Crop yield improvement', 'Soil health protection', 'Sustainable farming', 'Resource conservation'],
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Hospital,
      title: 'Healthcare Facilities',
      description: 'Ultra-pure water systems for hospitals and medical centers',
      benefits: ['Sterile water supply', 'Patient safety', 'Equipment protection', 'Infection control'],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Safe water solutions for schools and universities',
      benefits: ['Student health', 'Cafeteria compliance', 'Laboratory applications', 'Campus-wide coverage'],
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial water treatment for manufacturing processes',
      benefits: ['Process optimization', 'Quality control', 'Equipment longevity', 'Waste reduction'],
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Premium water solutions for hotels and restaurants',
      benefits: ['Guest satisfaction', 'Food safety', 'Equipment protection', 'Brand reputation'],
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Applications</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our water treatment solutions serve diverse industries and applications, ensuring clean, safe water wherever it's needed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl"
                  >
                    <app.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {app.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {app.description}
                  </motion.p>
                  
                  <div className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-blue-600 rounded-full mr-3"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.7 + idx * 0.1 }}
                          viewport={{ once: true }}
                        />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Water Quality?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust AquaTech for their water treatment needs across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Applications;