import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, MessageCircle, Phone, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      path: '/products', 
      label: 'Products',
      dropdown: [
        { path: '/products/ro-plant', label: 'RO Plant' },
        { path: '/products/dm-plant', label: 'DM Plant' },
        { path: '/products/packaged-drinking-water', label: 'Packaged Drinking Water' },
        { path: '/products/water-softener', label: 'Water Softener' },
        { path: '/products/uv-sterilizer', label: 'UV Sterilizer' },
        { path: '/products/ozonator', label: 'Ozonator' }
      ]
    },
    { 
      path: '/services', 
      label: 'Services',
      dropdown: [
        { path: '/services/installation', label: 'Installation' },
        { path: '/services/maintenance', label: 'Maintenance' },
        { path: '/services/consultation', label: 'Consultation' },
        { path: '/services/water-testing', label: 'Water Testing' },
        { path: '/services/amc', label: 'AMC Services' }
      ]
    },
    { path: '/applications', label: 'Applications' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl"
            >
              <Droplets className="h-8 w-8 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Madhusudan Aqua
              </span>
              <span className="text-sm text-gray-600 font-medium">Industries</span>
            </div>
          </Link>

          {/* Desktop Navigation with Hover Chasing Animation */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {/* Hover Background Chaser */}
            <motion.div
              className="absolute bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg h-12"
              initial={false}
              animate={{
                x: hoveredItem ? 
                  navItems.findIndex(item => item.label === hoveredItem) * 120 : 
                  navItems.findIndex(item => item.path === location.pathname) * 120,
                width: hoveredItem || location.pathname !== '/' ? 120 : 0,
                opacity: hoveredItem || location.pathname !== '/' ? 1 : 0
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  if (item.dropdown) handleDropdownEnter(item.label);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  if (item.dropdown) handleDropdownLeave();
                }}
              >
                <Link
                  to={item.path}
                  className="relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 z-10 flex items-center"
                  style={{ width: '120px', textAlign: 'center', justifyContent: 'center' }}
                >
                  <span className={`relative z-10 flex items-center ${
                    location.pathname === item.path || hoveredItem === item.label
                      ? 'text-white'
                      : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}>
                    {item.label}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi, I'm interested in your water treatment solutions"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </motion.a>

            {/* Call Button */}
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
              title="Call Us"
            >
              <Phone className="h-5 w-5" />
            </motion.a>

            {/* Get Quote Button - Most Prominent */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg text-lg"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
            >
              <div className="py-2">
                {navItems.map((item, index) => (
                  <div key={item.path}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="pl-4 bg-gray-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="px-4 py-3 border-t border-gray-200 flex space-x-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi, I'm interested in your water treatment solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  >
                    Call
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-colors"
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;