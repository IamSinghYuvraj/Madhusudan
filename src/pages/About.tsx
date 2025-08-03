import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Zap, Shield, Target, Eye, Heart } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const About: React.FC = () => {
  const timeline = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'Started as a small water treatment consultancy with a vision to provide clean water solutions.'
    },
    {
      year: '2005',
      title: 'First Major Contract',
      description: 'Secured our first industrial water treatment project, marking our entry into large-scale operations.'
    },
    {
      year: '2012',
      title: 'International Expansion',
      description: 'Expanded operations globally, bringing our expertise to water treatment challenges worldwide.'
    },
    {
      year: '2018',
      title: 'Innovation Center',
      description: 'Opened our state-of-the-art research and development facility for next-generation technologies.'
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Leading the industry in eco-friendly water treatment solutions and sustainable practices.'
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 25, suffix: '+', label: 'Years Experience' },
    { number: 50, suffix: '+', label: 'Countries Served' },
    { number: 99, suffix: '%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide innovative, sustainable water treatment solutions that ensure access to clean, safe water for communities worldwide.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the global leader in water treatment technology, creating a world where clean water is accessible to everyone.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Innovation, sustainability, integrity, and commitment to excellence in everything we do for our customers and communities.'
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">AquaTech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 25 years, we've been at the forefront of water treatment innovation, providing cutting-edge solutions that transform how the world accesses clean water.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and driven by a clear mission to make clean water accessible to all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global leadership in water treatment technology.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AquaTech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the water treatment industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Expert Team', desc: 'Highly skilled professionals with decades of experience' },
              { icon: Award, title: 'Industry Recognition', desc: 'Multiple awards for innovation and service excellence' },
              { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Latest technology and sustainable solutions' },
              { icon: Shield, title: 'Quality Guarantee', desc: 'ISO certified processes and quality assurance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;