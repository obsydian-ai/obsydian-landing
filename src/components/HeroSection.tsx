import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

// Array de palabras que van rotando para el título
const rotatingWords = [
  'Logística',
  'Facturación', 
  'Transporte',
  'Auditoría',
  'Aduanas'
];

const HeroSection = () => {
  const { t } = useTranslation('HeroSection');
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Efecto para rotar las palabras cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => 
        (prevIndex + 1) % rotatingWords.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      <div className="section-container text-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          {/* Animated Tag chip with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex relative overflow-hidden group cursor-pointer rounded-full"
          >
            <div 
              className="relative z-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-gray-200 text-[0.65rem] sm:text-xs font-medium tracking-wide text-gray-800 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(131,176,217,0.08) 50%, rgba(255,255,255,0.95) 100%)'
              }}
            >
              {t('tag')}
            </div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out shimmer-corporate z-20"></div>
          </motion.div>

          {/* Main title with simple animation - inspired by Route.com */}
          <div className="flex justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[1.8rem] xs:text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight text-gray-900 pb-1 sm:pb-2 px-2 text-center"
            >
              <span className="relative inline-block py-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ 
                      y: 30,
                      opacity: 0
                    }}
                    animate={{ 
                      y: 0,
                      opacity: 1
                    }}
                    exit={{ 
                      y: -30,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-clip-text text-transparent font-black animate-gradient-x"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #83B0D9 0%, #6FA0D6 25%, #83B0D9 50%, #5B95D3 75%, #83B0D9 100%)',
                      backgroundSize: '300% 300%'
                    }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible placeholder para mantener el espacio */}
                <span className="invisible font-black">Facturación</span>
              </span>
              <br />
              <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                fácil y rentable
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 sm:mt-8"
          >
            <div className="relative group">
              {/* Glow effect background - intenso pero menos ancho */}
              <div className="absolute -inset-y-1 inset-x-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 rounded-xl opacity-0 group-hover:opacity-70 transition-all duration-500 blur-lg group-hover:blur-xl"></div>
              
              <a
                href="#services"
                className="relative group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-0 text-sm sm:text-base font-semibold rounded-xl text-white overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/30 animate-gradient-x"
                style={{
                  background: 'linear-gradient(135deg, #83B0D9 0%, #6FA0D6 25%, #83B0D9 50%, #5B95D3 75%, #83B0D9 100%)',
                  backgroundSize: '300% 300%'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToNextSection();
                }}
              >
                {/* Shimmer effect overlay - always active but subtle */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-slow"></div>
                
                {/* Intense shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                  {t('ctaButton')}
                  <svg 
                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                {/* Animated background on hover - more intense */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #6FA0D6 0%, #83B0D9 20%, #5B95D3 40%, #83B0D9 60%, #6FA0D6 80%, #5B95D3 100%)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient-x 1s ease-in-out infinite'
                  }}
                ></div>
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
