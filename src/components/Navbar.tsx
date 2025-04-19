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
      { name: 'Nuestros proyectos', href: '#projects' },
      { name: 'Consultoría tecnológica', href: '#services' }
    ]
  },
  { 
    name: 'Recursos', 
    href: '#resources',
    submenu: [
      { name: 'Próximamente', disabled: true }
    ]
  }
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <motion.div 
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          scale: { delay: 0.2 }
        }}
        className={cn(
          'mx-auto max-w-5xl rounded-2xl transition-all duration-300 relative',
          'bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
          scrolled ? 'py-3' : 'py-4',
          // Capa base del borde energético
          'before:absolute before:inset-0 before:rounded-2xl before:p-[2px]',
          'before:bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.05)_20%,rgba(0,0,0,0.95)_50%,rgba(0,0,0,0.05)_80%,transparent_100%)]',
          'before:bg-[length:200%_100%]',
          'before:animate-[border-flow_3s_linear_infinite]',
          // Capa de brillo
          'after:absolute after:inset-[1px] after:rounded-2xl after:bg-white/90',
          'after:backdrop-blur-sm'
        )}
      >
        {/* Efecto de destello que se mueve */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute w-32 h-full bg-gradient-to-r from-transparent via-white to-transparent 
                        opacity-30 blur-xl transform -translate-x-full animate-[glow_3s_ease-in-out_infinite]" />
        </div>

        {/* Contenido del Navbar */}
        <motion.div 
          className="px-6 relative z-10"
          initial={false}
          animate={scrolled ? { scale: 0.98 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#" className="text-2xl font-semibold tracking-tight text-black">
                Segurneo<span className="text-blue-500">.</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {NavItems.map((item, i) => (
                <motion.div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href) {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center py-2 px-3 rounded-lg hover:bg-gray-50/80"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown size={16} className="ml-1 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    )}
                  </a>

                  {/* Submenu */}
                  {item.submenu && hoveredItem === i && (
                    <div className="absolute left-0 z-[999]" style={{ top: '100%' }}>
                      <motion.div 
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative mt-2 w-48 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-2"
                      >
                        {item.submenu.map((subItem) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => {
                              if (!subItem.disabled && subItem.href) {
                                e.preventDefault();
                                const element = document.querySelector(subItem.href);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                  setHoveredItem(null);
                                }
                              }
                            }}
                            className={`block px-4 py-2 text-sm ${
                              subItem.disabled 
                                ? 'text-gray-400 cursor-not-allowed' 
                                : 'text-gray-600 hover:bg-gray-50/80 hover:text-black transition-colors cursor-pointer'
                            }`}
                            whileHover={!subItem.disabled ? { x: 4 } : {}}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {subItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Language Switcher */}
              <motion.button 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-gray-50/80"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                EN / ES
              </motion.button>

              {/* CTA Button */}
              <motion.a
                href="https://cal.com/adolfo-guell-dominguez-yamc61/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-black hover:bg-gray-900 transition-colors shadow-sm ml-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Hablemos
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-50/80 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 relative z-10"
            >
              <nav className="flex flex-col space-y-4 py-4 px-6 bg-white/95">
                {NavItems.map((item) => (
                  <motion.div 
                    key={item.name} 
                    className="py-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href) {
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                            setMobileMenuOpen(false);
                          }
                        }
                      }}
                      className="block text-base font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      {item.name}
                    </a>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <motion.div 
                        className="pl-4 mt-2 space-y-2 border-l border-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.submenu.map((subItem) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => {
                              if (!subItem.disabled && subItem.href) {
                                e.preventDefault();
                                const element = document.querySelector(subItem.href);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                  setMobileMenuOpen(false);
                                }
                              }
                            }}
                            className={`block text-sm font-medium ${
                              subItem.disabled 
                                ? 'text-gray-400 cursor-not-allowed' 
                                : 'text-gray-500 hover:text-black transition-colors cursor-pointer'
                            }`}
                            whileHover={!subItem.disabled ? { x: 4 } : {}}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {subItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile Language Switcher */}
                <motion.button 
                  className="text-base font-medium text-gray-600 hover:text-black transition-colors text-left py-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  EN / ES
                </motion.button>
                
                {/* Mobile CTA Button */}
                <motion.a
                  href="https://cal.com/adolfo-guell-dominguez-yamc61/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-base font-medium text-white bg-black hover:bg-gray-900 transition-colors shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hablemos
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
