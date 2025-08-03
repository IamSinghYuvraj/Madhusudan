import React from 'react';
import { Filter, Beaker, Factory, Home } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      icon: Filter,
      title: 'Reverse Osmosis Systems',
      description: 'Advanced RO technology for pure, clean water with 99.9% contaminant removal',
      features: ['Multi-stage filtration', 'Energy efficient', 'Low maintenance', 'NSF certified'],
      price: 'From $2,499',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Beaker,
      title: 'UV Sterilization Units',
      description: 'Chemical-free water disinfection using ultraviolet light technology',
      features: ['No chemicals required', 'Instant disinfection', 'Eco-friendly', 'Long-lasting'],
      price: 'From $899',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Factory,
      title: 'Industrial Water Treatment',
      description: 'Comprehensive solutions for large-scale water treatment and processing',
      features: ['Custom design', 'High capacity', 'Automated systems', '24/7 monitoring'],
      price: 'Custom Quote',
      image: 'https://images.pexels.com/photos/162568/water-treatment-plant-162568.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Home Water Purifiers',
      description: 'Compact and efficient water purification systems for residential use',
      features: ['Space-saving design', 'Easy installation', 'Smart monitoring', 'Affordable'],
      price: 'From $399',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of water treatment solutions designed to meet every need, from residential to industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Our team of experts can design and implement tailored water treatment systems to meet your specific requirements.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;