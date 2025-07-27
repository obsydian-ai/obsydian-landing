import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Define a type for NavItem including submenus
type SubMenuItem = {
  nameKey: string; // Key for translation
  href?: string;
  disabled?: boolean;
};

type NavItem = {
  nameKey: string; // Key for translation
  href?: string;
  submenu?: SubMenuItem[];
};

// NavItems now uses translation keys
const NavItemsData: NavItem[] = [
  { nameKey: 'home', href: '#' },
  { 
    nameKey: 'services', 
    href: '#services',
    submenu: [
      { nameKey: 'features', href: '#services' },
      { nameKey: 'benefits', href: '#benefits' }
    ]
  },
  { 
    nameKey: 'solution', 
    href: '#solution',
    submenu: [
      { nameKey: 'soon', disabled: true } // Assuming 'soon' key exists
    ]
  }
];

const Navbar = () => {
  const { t, i18n } = useTranslation('Navbar');
  const currentLanguage = i18n.language as 'en' | 'es'; // Type assertion
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Generate NavItems with translated names
  const NavItems = NavItemsData.map(item => ({
    ...item,
    name: t(item.nameKey),
    submenu: item.submenu?.map(subItem => ({
      ...subItem,
      name: t(subItem.nameKey)
    }))
  }));

  // Function to handle locale change
  const handleLocaleChange = () => {
    const otherLocale = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(otherLocale);
  };

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
          scrolled ? 'py-3' : 'py-4'
        )}
      >
        {/* Capa base del borde energético - flujo principal más sutil */}
        <div 
          className="absolute inset-0 rounded-2xl p-[2px] animate-[border-flow_3s_linear_infinite]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.08) 25%, rgba(14,165,233,0.2) 50%, rgba(14,165,233,0.08) 75%, transparent 100%)',
            backgroundSize: '250% 100%'
          }}
        >
          <div className="w-full h-full rounded-2xl bg-white/90 backdrop-blur-sm"></div>
        </div>

        {/* Destello sutil que se mueve */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div 
            className="absolute w-32 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg"
            style={{
              animation: 'glow 5s ease-in-out infinite'
            }}
          />
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
              <a href="#" className="text-2xl font-semibold tracking-tight text-neutral-900">
                Obsydian<span style={{ color: '#0ea5e9' }}>.</span>
              </a>
            </motion.div>

            {/* Container for Right-side items on Mobile */} 
            <div className="flex items-center space-x-2">
              {/* Language Toggle Button - Visible on Mobile */} 
              <motion.button 
                onClick={handleLocaleChange}
                className="relative flex items-center h-7 px-1 rounded-full bg-neutral-200/80 cursor-pointer shadow-inner md:hidden" // Show only on mobile (<=md)
                aria-label={`Switch to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
                style={{ width: '64px' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
              >
                {/* Indicator */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                  className="absolute left-0.5 top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm z-0"
                  animate={{ left: currentLanguage === 'en' ? 'calc(50% + 1px)' : '2px' }}
                />
                {/* Labels */}
                <div className="relative z-10 flex justify-around w-full">
                  <span className={cn("px-1.5 text-xs font-semibold transition-colors duration-300", currentLanguage === 'es' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600')}>ES</span>
                  <span className={cn("px-1.5 text-xs font-semibold transition-colors duration-300", currentLanguage === 'en' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600')}>EN</span>
                </div>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden rounded-lg p-2 text-neutral-600 hover:bg-neutral-50/80 hover:text-neutral-900 transition-colors" // Only show on mobile (<=md)
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />} 
              </motion.button>
            </div>

            {/* Desktop Navigation (includes desktop toggle) */}
            <nav className="hidden md:flex items-center space-x-1"> {/* Hide on mobile (<=md) */}
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
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center py-2 px-3 rounded-lg hover:bg-neutral-50/80"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown size={16} className="ml-1 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
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
                        className="relative mt-2 w-48 bg-white/80 backdrop-blur-sm border border-neutral-100 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-2"
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
                                ? 'text-neutral-400 cursor-not-allowed' 
                                : 'text-neutral-600 hover:bg-neutral-50/80 hover:text-neutral-900 transition-colors cursor-pointer'
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

              {/* CTA Button - Ahora primero */}
              <motion.a
                href="https://cal.com/Obsydian-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-gradient-x ml-6"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0ea5e9 50%, #0369a1 75%, #0ea5e9 100%)',
                  backgroundSize: '300% 300%'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                {/* Button content */}
                <span className="relative z-10">
                  {t('cta')}
                </span>
              </motion.a>

              {/* Language Toggle Button - Ahora segundo */}
              <motion.button
                onClick={handleLocaleChange}
                className="relative flex items-center h-7 px-1 rounded-full bg-neutral-200/80 cursor-pointer shadow-inner"
                aria-label={`Switch to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
                style={{ 
                  width: '64px',
                  marginLeft: '16px'
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
              >
                {/* Indicator */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                  className="absolute left-0.5 top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm z-0"
                  animate={{ left: currentLanguage === 'en' ? 'calc(50% + 1px)' : '2px' }}
                />
                {/* Labels */}
                <div className="relative z-10 flex justify-around w-full">
                  <span className={cn("px-1.5 text-xs font-semibold transition-colors duration-300", currentLanguage === 'es' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600')}>ES</span>
                  <span className={cn("px-1.5 text-xs font-semibold transition-colors duration-300", currentLanguage === 'en' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600')}>EN</span>
                </div>
              </motion.button>
            </nav>
          </div>
        </motion.div>

        {/* Mobile Navigation Menu (Dropdown) */} 
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div className="md:hidden border-t border-neutral-100 relative z-10">
              <nav className="flex flex-col space-y-4 py-4 px-6 bg-white/95">
                {/* Mobile NavItems mapping */}
                {NavItems.map((item, i) => (
                  <motion.div key={item.name} className="space-y-2">
                    <motion.a
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
                      className="block text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.a>
                    
                    {/* Mobile submenu */}
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem, j) => (
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
                            className={`block text-sm ${
                              subItem.disabled 
                                ? 'text-neutral-400 cursor-not-allowed' 
                                : 'text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (i * 0.1) + (j * 0.05) }}
                            whileHover={!subItem.disabled ? { x: 4 } : {}}
                          >
                            {subItem.name}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.a
                  href="https://cal.com/Obsydian-demo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group inline-flex items-center justify-center px-5 py-3 rounded-lg text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-gradient-x"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0ea5e9 50%, #0369a1 75%, #0ea5e9 100%)',
                    backgroundSize: '300% 300%'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10">
                    {t('cta')}
                  </span>
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
