import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@aquatech.com', 'support@aquatech.com'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Water Street', 'Clean City, CC 12345'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      color: 'from-cyan-600 to-blue-600'
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
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your water treatment needs? Our team of experts is here to help you find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-r ${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 peer"
                        placeholder=" "
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formData.name
                            ? '-top-2 text-sm bg-white px-2 text-blue-600'
                            : 'top-4 text-gray-500'
                        }`}
                        animate={{
                          y: focusedField === 'name' || formData.name ? -24 : 0,
                          scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                          color: focusedField === 'name' ? '#2563eb' : '#6b7280'
                        }}
                      >
                        Full Name *
                      </motion.label>
                    </div>
                    
                    <div className="relative">
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder=" "
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email
                            ? '-top-2 text-sm bg-white px-2 text-blue-600'
                            : 'top-4 text-gray-500'
                        }`}
                        animate={{
                          y: focusedField === 'email' || formData.email ? -24 : 0,
                          scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                          color: focusedField === 'email' ? '#2563eb' : '#6b7280'
                        }}
                      >
                        Email Address *
                      </motion.label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder=" "
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.label
                        htmlFor="phone"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'phone' || formData.phone
                            ? '-top-2 text-sm bg-white px-2 text-blue-600'
                            : 'top-4 text-gray-500'
                        }`}
                        animate={{
                          y: focusedField === 'phone' || formData.phone ? -24 : 0,
                          scale: focusedField === 'phone' || formData.phone ? 0.85 : 1,
                          color: focusedField === 'phone' ? '#2563eb' : '#6b7280'
                        }}
                      >
                        Phone Number
                      </motion.label>
                    </div>
                    
                    <div className="relative">
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder=" "
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.label
                        htmlFor="company"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'company' || formData.company
                            ? '-top-2 text-sm bg-white px-2 text-blue-600'
                            : 'top-4 text-gray-500'
                        }`}
                        animate={{
                          y: focusedField === 'company' || formData.company ? -24 : 0,
                          scale: focusedField === 'company' || formData.company ? 0.85 : 1,
                          color: focusedField === 'company' ? '#2563eb' : '#6b7280'
                        }}
                      >
                        Company
                      </motion.label>
                    </div>
                  </div>

                  <div className="relative">
                    <motion.textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                      placeholder=" "
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-2 text-sm bg-white px-2 text-blue-600'
                          : 'top-4 text-gray-500'
                      }`}
                      animate={{
                        y: focusedField === 'message' || formData.message ? -24 : 0,
                        scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                        color: focusedField === 'message' ? '#2563eb' : '#6b7280'
                      }}
                    >
                      Message *
                    </motion.label>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Animated Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-8 h-64 flex items-center justify-center relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="text-center"
                  >
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-gray-600">Coming Soon</p>
                  </motion.div>
                  
                  {/* Animated Ripples */}
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400 rounded-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              </div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6 opacity-90">
                  Our support team is available 24/7 to help with urgent water treatment needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Live Chat</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;