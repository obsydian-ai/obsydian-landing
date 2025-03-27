
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  { name: 'Resources', href: '#resources' },
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
        scrolled ? 'navbar-blur py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              Segurneo
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavItems.map((item, i) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>

                {/* Submenu */}
                {item.submenu && hoveredItem === i && (
                  <div className="absolute left-0 mt-2 w-48 glass-card rounded-md py-1 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/50 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              EN / ES
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
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
      {mobileMenuOpen && (
        <div className="md:hidden glass-card animate-fade-in px-4 py-3 mt-2 mx-4 rounded-lg">
          <nav className="flex flex-col space-y-4 py-2">
            {NavItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                
                {/* Mobile Submenu */}
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
            <button className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors text-left">
              EN / ES
            </button>
            
            {/* Mobile CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
