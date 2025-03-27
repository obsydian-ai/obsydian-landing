
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const NavItems = [
  { name: 'Inicio', href: '#' },
  { 
    name: 'Servicios', 
    href: '#services',
    submenu: [
      { name: 'Our Projects', href: '#projects' },
      { name: 'Tech Consultancy', href: '#consultancy' }
    ]
  },
  { 
    name: 'Resources', 
    href: '#resources',
    submenu: [
      { name: 'Coming soon', href: '#coming-soon' }
    ]
  },
  { name: 'About us', href: '#about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-semibold tracking-tight text-black">
              Segurneo
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavItems.map((item, i) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown size={16} className="ml-1 text-gray-400 group-hover:text-gray-700 transition-colors" />
                  )}
                </a>

                {/* Submenu */}
                {item.submenu && hoveredItem === i && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              EN / ES
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors shadow-sm"
            >
              Hablemos
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <nav className="flex flex-col space-y-4 py-4 px-4">
              {NavItems.map((item) => (
                <div key={item.name} className="py-1">
                  <a
                    href={item.href}
                    className="block text-base font-medium text-gray-700 hover:text-black transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm font-medium text-gray-600 hover:text-black transition-colors py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <button className="text-base font-medium text-gray-700 hover:text-black transition-colors text-left py-1">
                EN / ES
              </button>
              
              {/* Mobile CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hablemos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
