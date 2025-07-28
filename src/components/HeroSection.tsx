import { ChevronDown, Star, TrendingUp, Package, Clock, Users, Zap, CheckCircle, Truck, Home, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t } = useTranslation('HeroSection');
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Get rotating words from translations
  const rotatingWords = t('rotatingWords', { returnObjects: true }) as string[];

  // Efecto para rotar las palabras cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => 
        (prevIndex + 1) % rotatingWords.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
      {/* Background lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
      
      <div className="section-container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Animated Tag chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex relative overflow-hidden group cursor-pointer rounded-full"
            >
              <div 
                className="relative z-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 text-[0.65rem] sm:text-xs font-medium tracking-wide text-white/90 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(14,165,233,0.2) 50%, rgba(255,255,255,0.1) 100%)'
                }}
              >
                {t('tag')}
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out shimmer-corporate z-20"></div>
            </motion.div>

            {/* Main title with rotating words */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
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
                        backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0ea5e9 50%, #0369a1 75%, #0ea5e9 100%)',
                        backgroundSize: '300% 300%'
                      }}
                    >
                      {rotatingWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  {/* Use the longest word to set the container width */}
                  <span className="invisible font-black">
                    {rotatingWords.reduce((longest, current) => 
                      current.length > longest.length ? current : longest, ''
                    )}
                  </span>
                </span>
                <br />
                <span className="bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent">
                  {t('titleSuffix')}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
                {t('subtitle')}
              </p>
            </motion.div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative group">
                
                              <a
                href="#services"
                className="relative group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-0 text-sm sm:text-base font-semibold rounded-xl text-white overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 animate-gradient-x"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0ea5e9 50%, #0369a1 75%, #0ea5e9 100%)',
                    backgroundSize: '300% 300%'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToNextSection();
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-slow"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  
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
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 20%, #0369a1 40%, #0ea5e9 60%, #0284c7 80%, #0369a1 100%)',
                      backgroundSize: '400% 400%',
                      animation: 'gradient-x 1s ease-in-out infinite'
                    }}
                  ></div>
                  
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Buyer Satisfaction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-sm font-medium">{t('analytics.buyerSatisfaction')}</h3>
                <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
              </div>
              <div className="text-2xl font-bold text-white">96%</div>
            </motion.div>

            {/* Analytics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 col-span-2"
            >
              <h3 className="text-white text-sm font-medium mb-3">{t('analytics.analytics')}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300 text-xs">{t('analytics.impressions')}</span>
                  <span className="text-white text-sm font-medium">31,827</span>
                </div>
                <div className="w-full bg-neutral-600/30 rounded-full h-1">
                  <div className="bg-primary-400 h-1 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300 text-xs">{t('analytics.trackingPage')}</span>
                  <span className="text-white text-sm font-medium">9,473</span>
                </div>
                <div className="w-full bg-neutral-600/30 rounded-full h-1">
                  <div className="bg-accent-400 h-1 rounded-full" style={{ width: '60%' }}></div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300">{t('analytics.avgVisits')}</span>
                  <span className="text-white font-medium">4.3</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300">{t('analytics.marketingCTR')}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                    <span className="text-white font-medium">4%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carriers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <h3 className="text-white text-sm font-medium mb-3">{t('analytics.carriers')}</h3>
              <div className="grid grid-cols-3 gap-2">
                {['DHL', 'UPS', 'FedEx', 'TNT', 'DPD', 'GLS', 'Colissimo', 'Chronopost', 'Mondial Relay'].map((carrier, index) => (
                  <div key={carrier} className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{carrier.charAt(0)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Order Timeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <h3 className="text-white text-sm font-medium mb-3">{t('analytics.orderTimeline')}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <RefreshCw className="w-3 h-3 text-primary-400" />
                  <span className="text-neutral-300">{t('analytics.orderCreated')}</span>
                  <span className="text-white ml-auto">{t('analytics.dates.orderCreated')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Home className="w-3 h-3 text-success-400" />
                  <span className="text-neutral-300">{t('analytics.orderPrepared')}</span>
                  <span className="text-white ml-auto">{t('analytics.dates.orderPrepared')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Truck className="w-3 h-3 text-warning-400" />
                  <span className="text-neutral-300">{t('analytics.orderOnWay')}</span>
                  <span className="text-white ml-auto">{t('analytics.dates.orderOnWay')}</span>
                </div>
              </div>
            </motion.div>

            {/* Live from warehouse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 col-span-2"
            >
              <h3 className="text-white text-sm font-medium mb-3">{t('analytics.liveFromWarehouse')}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300">{t('analytics.pending')}</span>
                  <span className="text-white font-medium">19</span>
                </div>
                <div className="w-full bg-neutral-600/30 rounded-full h-1">
                  <div className="bg-warning-400 h-1 rounded-full" style={{ width: '15%' }}></div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300">{t('analytics.inPreparation')}</span>
                  <span className="text-white font-medium">130</span>
                </div>
                <div className="w-full bg-neutral-600/30 rounded-full h-1">
                  <div className="bg-primary-400 h-1 rounded-full" style={{ width: '65%' }}></div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300">{t('analytics.preparedToday')}</span>
                  <span className="text-white font-medium">29</span>
                </div>
                <div className="w-full bg-neutral-600/30 rounded-full h-1">
                  <div className="bg-success-400 h-1 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 col-span-2"
            >
              <h3 className="text-white text-sm font-medium mb-3">{t('analytics.integrations')}</h3>
              <div className="grid grid-cols-6 gap-2">
                {['Shopify', 'WooCommerce', 'Magento', 'PrestaShop', 'BigCommerce', 'Klaviyo'].map((platform, index) => (
                  <div key={platform} className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{platform.charAt(0)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
