import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('HeroSection');

  const scrollToNextSection = () => {
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      <div className="section-container text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          {/* Animated Tag chip with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex relative overflow-hidden group"
          >
            <div className="z-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-gray-200 bg-white text-[0.65rem] sm:text-xs font-medium tracking-wide text-gray-800 shadow-sm">
              {t('tag')}
            </div>
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent z-20 shimmer"></div>
          </motion.div>

          {/* Main title with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.2] tracking-tight bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent pb-1 sm:pb-2 px-1"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          {/* Changing text component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-2 sm:py-4"
          >
            <div className="inline-flex flex-wrap justify-center items-center text-base sm:text-lg md:text-xl font-medium gap-2 px-1">
              <span className="text-gray-500">{t('changingTextPrefix')}</span>
              <div className="relative inline-block">
                <span className="text-black font-bold">logística</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 sm:mt-8"
          >
            <a
              href="#mission-section"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToNextSection();
              }}
            >
              {t('ctaButton')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs sm:text-sm mb-1 sm:mb-2">{t('scrollIndicator')}</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
