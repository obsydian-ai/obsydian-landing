
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
          {/* Tag chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-4"
          >
            Corporate Venture Studio
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-balance"
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

          {/* Changing text component (like Attio's "We're changing the definition of CRM") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-4"
          >
            <div className="inline-flex items-center text-lg sm:text-xl font-medium">
              <span className="text-gray-500 mr-2">We're changing the definition of</span>
              <div className="relative inline-block">
                <span className="text-primary font-bold">InsurTech</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 rounded-full"></div>
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
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-colors"
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
