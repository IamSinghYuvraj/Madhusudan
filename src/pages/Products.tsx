import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Beaker, Factory, Home, Droplets, Settings } from 'lucide-react';

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const products = [
    {
      id: 1,
      category: 'residential',
      icon: Home,
      title: 'Home Water Purifiers',
      description: 'Compact and efficient water purification systems for residential use',
      features: ['Space-saving design', 'Easy installation', 'Smart monitoring', 'Affordable'],
      price: 'From $399',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      category: 'residential',
      icon: Filter,
      title: 'Reverse Osmosis Systems',
      description: 'Advanced RO technology for pure, clean water with 99.9% contaminant removal',
      features: ['Multi-stage filtration', 'Energy efficient', 'Low maintenance', 'NSF certified'],
      price: 'From $2,499',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      category: 'commercial',
      icon: Beaker,
      title: 'UV Sterilization Units',
      description: 'Chemical-free water disinfection using ultraviolet light technology',
      features: ['No chemicals required', 'Instant disinfection', 'Eco-friendly', 'Long-lasting'],
      price: 'From $899',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      category: 'industrial',
      icon: Factory,
      title: 'Industrial Water Treatment',
      description: 'Comprehensive solutions for large-scale water treatment and processing',
      features: ['Custom design', 'High capacity', 'Automated systems', '24/7 monitoring'],
      price: 'Custom Quote',
      image: 'https://images.pexels.com/photos/162568/water-treatment-plant-162568.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      category: 'commercial',
      icon: Droplets,
      title: 'Commercial Water Systems',
      description: 'Scalable water treatment solutions for offices, hotels, and restaurants',
      features: ['High capacity', 'Reliable performance', 'Easy maintenance', 'Cost-effective'],
      price: 'From $1,299',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      category: 'industrial',
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored water treatment systems designed for specific industrial needs',
      features: ['Bespoke design', 'Expert consultation', 'Full integration', 'Ongoing support'],
      price: 'Contact Us',
      image: 'https://images.pexels.com/photos/162568/water-treatment-plant-162568.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of water treatment solutions designed to meet every need, from residential to industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3"
                    >
                      <product.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-12 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts can design and implement tailored water treatment systems to meet your specific requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
            >
              Get Custom Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;