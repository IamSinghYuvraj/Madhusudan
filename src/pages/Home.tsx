import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, CheckCircle, Users, Award, Zap, Shield, Globe, MapPin, Filter, Beaker, Factory, Home as HomeIcon, Star, MessageCircle, Phone, Building, Droplets, Leaf, Guitar as Hospital, GraduationCap } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: '25+ Years Experience',
      description: 'Decades of expertise in water treatment technologies'
    },
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'Quality assured manufacturing processes'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge filtration and purification systems'
    },
    {
      icon: Shield,
      title: 'BIS Approved',
      description: 'Government certified quality standards'
    }
  ];

  const benefits = [
    'Advanced RO and DM plant manufacturing with latest technology',
    'Packaged drinking water machines with automated systems',
    '24/7 technical support and maintenance services',
    'Comprehensive quality assurance and water testing',
    'Custom solutions for industrial and commercial applications'
  ];

  const globalPresence = [
    { state: 'Punjab', projects: '500+', cities: '25+' },
    { state: 'Haryana', projects: '300+', cities: '20+' },
    { state: 'Himachal Pradesh', projects: '200+', cities: '15+' },
    { state: 'Rajasthan', projects: '250+', cities: '18+' },
    { state: 'Delhi NCR', projects: '400+', cities: '12+' },
    { state: 'Uttar Pradesh', projects: '350+', cities: '30+' }
  ];

  const clients = [
    { name: 'Tata Steel', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Steel Industry' },
    { name: 'Reliance Industries', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Petrochemical' },
    { name: 'ITC Limited', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'FMCG' },
    { name: 'Mahindra Group', logo: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Automotive' },
    { name: 'Godrej Group', logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Consumer Goods' },
    { name: 'L&T Construction', logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Construction' },
    { name: 'BHEL', logo: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Heavy Engineering' },
    { name: 'ONGC', logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=200', sector: 'Oil & Gas' }
  ];

  const featuredProducts = [
    {
      icon: Filter,
      title: 'RO Plant Systems',
      description: 'Industrial and commercial reverse osmosis plants with advanced membrane technology',
      price: 'From ₹2,50,000',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'ro-plant'
    },
    {
      icon: Beaker,
      title: 'DM Plant',
      description: 'Demineralization plants for ultra-pure water production in industries',
      price: 'From ₹3,50,000',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'dm-plant'
    },
    {
      icon: Factory,
      title: 'Packaged Drinking Water',
      description: 'Complete bottling plants with automated filling and packaging systems',
      price: 'From ₹15,00,000',
      image: 'https://images.pexels.com/photos/162568/water-treatment-plant-162568.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'packaged-drinking-water'
    },
    {
      icon: HomeIcon,
      title: 'Water Softener',
      description: 'Ion exchange water softening systems for residential and commercial use',
      price: 'From ₹45,000',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'water-softener'
    }
  ];

  const industriesServed = [
    {
      icon: Building,
      title: 'Manufacturing',
      description: 'Water treatment for steel, textile, chemical, and pharmaceutical industries'
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Ultra-pure water systems for hospitals and medical facilities'
    },
    {
      icon: GraduationCap,
      title: 'Educational',
      description: 'Safe drinking water solutions for schools and universities'
    },
    {
      icon: Droplets,
      title: 'Municipal',
      description: 'Large-scale water treatment for cities and townships'
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Irrigation water treatment and livestock water solutions'
    },
    {
      icon: HomeIcon,
      title: 'Residential',
      description: 'Home water purification and apartment complex solutions'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tata Steel',
      position: 'Plant Manager',
      content: 'Madhusudan Aqua Industries delivered an excellent RO plant for our facility. The quality and service are outstanding.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'ITC Limited',
      position: 'Operations Head',
      content: 'Their packaged drinking water plant has been running flawlessly for 3 years. Highly recommended for industrial applications.',
      rating: 5
    },
    {
      name: 'Amit Singh',
      company: 'Mahindra Group',
      position: 'Facility Manager',
      content: 'Professional installation and excellent after-sales support. The DM plant quality exceeded our expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background with Particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
          {/* Animated Wave Background */}
          <div className="absolute inset-0">
            <motion.svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 800"
              preserveAspectRatio="xMidYMid slice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
            >
              <motion.path
                d="M0,400 C320,300 420,500 740,400 C1060,300 1120,500 1440,400 L1440,800 L0,800 Z"
                fill="rgba(255,255,255,0.1)"
                animate={{
                  d: [
                    "M0,400 C320,300 420,500 740,400 C1060,300 1120,500 1440,400 L1440,800 L0,800 Z",
                    "M0,450 C320,350 420,550 740,450 C1060,350 1120,550 1440,450 L1440,800 L0,800 Z",
                    "M0,400 C320,300 420,500 740,400 C1060,300 1120,500 1440,400 L1440,800 L0,800 Z"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.svg>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}

          {/* Glassmorphic Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        </div>

        {/* Glassmorphic Hero Card */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 lg:p-16 text-center shadow-2xl"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Purifying the Nation,
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                One Drop at a Time
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-medium"
            >
              Leading Manufacturer of Water Treatment Plants, RO Systems & Packaged Drinking Water Machines
            </motion.p>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-cyan-300" />
                <span className="text-sm md:text-base font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-cyan-300" />
                <span className="text-sm md:text-base font-medium">BIS Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-cyan-300" />
                <span className="text-sm md:text-base font-medium">25+ Years Experience</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              {/* Primary CTA - Get a Quote (More Prominent) */}
              <motion.div
                whileHover={{ 
                  scale: 1.08, 
                  boxShadow: '0 25px 50px rgba(255, 165, 0, 0.5)',
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-2xl border-2 border-white/20"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl"
                >
                  See Our Products
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-white/80 text-sm mb-2 font-medium">Scroll to explore</span>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30"
            >
              <ArrowDown className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">We Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing specialized water treatment solutions across diverse industries with customized approaches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4"
                >
                  <industry.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-12 w-12 text-cyan-300 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold">Regional Presence</h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Serving customers across North India with our world-class water treatment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalPresence.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-cyan-300 mr-3" />
                  <h3 className="text-2xl font-bold">{location.state}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">Projects Completed:</span>
                    <span className="font-bold text-cyan-300">{location.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Cities Served:</span>
                    <span className="font-bold text-cyan-300">{location.cities}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/applications"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              View All Applications
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading corporations across industries trust Madhusudan Aqua Industries for their water treatment needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.sector}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-500 mr-2" />
              <Star className="h-8 w-8 text-yellow-500 mr-2" />
              <Star className="h-8 w-8 text-yellow-500 mr-2" />
              <Star className="h-8 w-8 text-yellow-500 mr-2" />
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Client Satisfaction Rate</h3>
            <p className="text-gray-600 mb-6">Join our growing family of satisfied customers across India</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Become Our Client
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular water treatment solutions designed for every industrial need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                      <product.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <Link
                    to={`/products/${product.slug}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about our water treatment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Madhusudan Aqua</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing innovative water treatment solutions that ensure clean, safe, and pure water for industries across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4"
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h3>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize water treatment through innovative manufacturing that delivers exceptional purity, sustainability, and reliability. We believe access to clean water is a fundamental right for every industry.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h4>
                  <p className="text-gray-700 mb-6">
                    Join hundreds of satisfied customers who trust Madhusudan Aqua Industries for their water treatment needs.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919876543210?text=Hi, I'm interested in your water treatment solutions"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-600"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+919876543210"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-600"
        >
          <Phone className="h-6 w-6" />
        </motion.a>

        {/* Get Quote Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.4, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-orange-600 hover:to-red-600 font-bold text-sm"
          >
            Get Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;