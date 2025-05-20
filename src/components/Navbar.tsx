import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect' : 'bg-gradient-to-b from-black-true/90 via-black-deep/80 to-gray-dark/70 shadow-lg'
      }`}
      style={{background: scrolled ? undefined : 'linear-gradient(90deg, #070709 60%, #19191d 100%)', boxShadow: scrolled ? undefined : '0 4px 24px 0 rgba(0,0,0,0.75)'}}>

      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="h-6 w-6 mr-2 text-blue-electric" />
            <span className="font-bold text-xl text-white">CareerPilot</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-medium hover:text-blue-electric transition duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-electric group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <motion.a
              href="#sign-in"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="#try-free"
              className="btn btn-primary animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try For Free
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black-100 py-4 px-4"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-medium hover:text-white transition duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 mt-4">
              <a href="#sign-in" className="btn btn-secondary text-center">
                Sign In
              </a>
              <a href="#try-free" className="btn btn-primary text-center animate-glow">
                Try For Free
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;