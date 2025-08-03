import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Award, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/applications', label: 'Applications' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const productLinks = [
    { path: '/products/ro-plant', label: 'RO Plant' },
    { path: '/products/dm-plant', label: 'DM Plant' },
    { path: '/products/packaged-drinking-water', label: 'Packaged Drinking Water' },
    { path: '/products/water-softener', label: 'Water Softener' },
    { path: '/products/uv-sterilizer', label: 'UV Sterilizer' }
  ];

  const serviceLinks = [
    { path: '/services/installation', label: 'Installation' },
    { path: '/services/maintenance', label: 'Maintenance' },
    { path: '/services/consultation', label: 'Consultation' },
    { path: '/services/water-testing', label: 'Water Testing' },
    { path: '/services/amc', label: 'AMC Services' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-xl">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Madhusudan Aqua</span>
                <span className="block text-lg text-gray-300">Industries</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of water treatment plants, RO systems, and packaged drinking water machines. 
              ISO certified with 25+ years of experience in delivering premium water solutions across India.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">BIS Approved</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p>info@madhusudanaqua.com</p>
                  <p>sales@madhusudanaqua.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p>Industrial Area, Phase-II</p>
                  <p>Chandigarh - 160002</p>
                  <p>Punjab, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Madhusudan Aqua Industries. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;