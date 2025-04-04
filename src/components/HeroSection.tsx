import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const ventureSection = document.getElementById('venture-section');
    if (ventureSection) {
      ventureSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-background pt-20 pb-16">
      <div className="section-container text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Animated Tag chip with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex relative overflow-hidden group"
          >
            <div className="z-10 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium tracking-wide text-gray-800 shadow-sm">
              Corporate Venture Studio
            </div>
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent z-20 shimmer"></div>
          </motion.div>

          {/* Main title with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent pb-2"
          >
            Impulsando la transformación digital en el sector asegurador
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance"
          >
            SegurNeo es un Corporate Venture Studio que construye, escala y co-funda soluciones innovadoras para 
            impulsar la transformación digital, la eficiencia operativa y nuevos modelos de negocio en el sector asegurador.
          </motion.p>

          {/* Changing text component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-4"
          >
            <div className="inline-flex items-center text-lg sm:text-xl font-medium">
              <span className="text-gray-500 mr-2">We're changing the definition of</span>
              <div className="relative inline-block">
                <span className="text-black font-bold">InsurTech</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="#venture-section"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToNextSection();
              }}
            >
              Descubre nuestras soluciones
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-sm mb-2">Scroll para explorar</span>
        <ChevronDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
