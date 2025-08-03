import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Phone, MessageCircle } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { slug } = useParams();

  const products = {
    'ro-plant': {
      title: 'RO Plant Systems',
      price: 'From ₹2,50,000',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Industrial and commercial reverse osmosis plants with advanced membrane technology for superior water purification.',
      features: [
        'Advanced RO membrane technology',
        'Automated control systems',
        'Energy efficient operation',
        'Low maintenance design',
        'Stainless steel construction',
        'Pre and post filtration',
        'Digital monitoring system',
        'Customizable capacity'
      ],
      specifications: {
        'Capacity': '500 LPH to 50,000 LPH',
        'Recovery Rate': '75-85%',
        'TDS Reduction': 'Up to 99%',
        'Operating Pressure': '150-250 PSI',
        'Power Consumption': '1-15 kW',
        'Material': 'SS 304/316',
        'Automation': 'PLC Based',
        'Warranty': '2 Years'
      },
      applications: [
        'Pharmaceutical Industry',
        'Food & Beverage',
        'Chemical Processing',
        'Power Plants',
        'Hospitals',
        'Hotels & Resorts',
        'Manufacturing Units',
        'Commercial Buildings'
      ]
    },
    'dm-plant': {
      title: 'DM Plant',
      price: 'From ₹3,50,000',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Demineralization plants for ultra-pure water production in industries requiring high-quality water.',
      features: [
        'Ion exchange technology',
        'Automatic regeneration',
        'High purity output',
        'Continuous operation',
        'Resin bed monitoring',
        'Chemical dosing system',
        'Quality control instruments',
        'Remote monitoring capability'
      ],
      specifications: {
        'Capacity': '1000 LPH to 100,000 LPH',
        'Conductivity': '<1 µS/cm',
        'Silica Content': '<0.02 ppm',
        'Operating Temperature': '5-40°C',
        'Regeneration': 'Automatic',
        'Resin Type': 'Nuclear Grade',
        'Control System': 'PLC/SCADA',
        'Warranty': '2 Years'
      },
      applications: [
        'Power Generation',
        'Boiler Feed Water',
        'Electronics Industry',
        'Pharmaceutical',
        'Chemical Industry',
        'Textile Industry',
        'Laboratory Use',
        'Process Industries'
      ]
    },
    'packaged-drinking-water': {
      title: 'Packaged Drinking Water Plant',
      price: 'From ₹15,00,000',
      image: 'https://images.pexels.com/photos/162568/water-treatment-plant-162568.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete bottling plants with automated filling and packaging systems for packaged drinking water production.',
      features: [
        'Fully automated operation',
        'Multi-stage water treatment',
        'Bottle washing system',
        'Automatic filling & capping',
        'Quality control systems',
        'Batch coding & labeling',
        'Conveyor systems',
        'Packaging solutions'
      ],
      specifications: {
        'Capacity': '500 BPH to 12,000 BPH',
        'Bottle Size': '200ml to 20L',
        'Treatment': 'Multi-barrier approach',
        'Automation Level': 'Fully Automatic',
        'Power Requirement': '25-150 kW',
        'Space Requirement': '2000-10000 sq ft',
        'Compliance': 'BIS/FSSAI',
        'Warranty': '2 Years'
      },
      applications: [
        'Bottled Water Companies',
        'Beverage Industry',
        'Hotels & Restaurants',
        'Educational Institutions',
        'Corporate Offices',
        'Event Management',
        'Retail Distribution',
        'Export Business'
      ]
    },
    'water-softener': {
      title: 'Water Softener',
      price: 'From ₹45,000',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ion exchange water softening systems for residential and commercial use to remove hardness.',
      features: [
        'Ion exchange process',
        'Automatic regeneration',
        'Salt efficient operation',
        'Compact design',
        'Easy maintenance',
        'Digital control valve',
        'Corrosion resistant',
        'Long service life'
      ],
      specifications: {
        'Capacity': '500 LPH to 10,000 LPH',
        'Hardness Removal': 'Up to 99%',
        'Resin Volume': '25L to 500L',
        'Salt Consumption': '150-200 gm/L',
        'Regeneration': 'Time/Volume based',
        'Operating Pressure': '1-6 kg/cm²',
        'Material': 'FRP/MS/SS',
        'Warranty': '1 Year'
      },
      applications: [
        'Residential Buildings',
        'Hotels & Restaurants',
        'Laundries',
        'Hospitals',
        'Swimming Pools',
        'Boiler Feed',
        'Cooling Towers',
        'Process Industries'
      ]
    }
  };

  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-sm"
          >
            <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-blue-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </motion.div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                {product.price}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Quote
                </motion.a>
                <motion.a
                  href="https://wa.me/919876543210?text=Hi, I'm interested in your RO Plant Systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-2 border-b border-gray-100"
                  >
                    <span className="font-medium text-gray-900">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
              <div className="space-y-3">
                {product.applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{application}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Interested in {product.title}?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get a customized quote for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Detailed Quote
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;