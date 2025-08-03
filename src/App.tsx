import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import PageTransition from './components/PageTransition';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/products" element={
              <PageTransition>
                <Products />
              </PageTransition>
            } />
            <Route path="/products/:slug" element={
              <PageTransition>
                <ProductDetail />
              </PageTransition>
            } />
            <Route path="/applications" element={
              <PageTransition>
                <Applications />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
        <BackToTop />
      </Layout>
    </Router>
  );
}

export default App;