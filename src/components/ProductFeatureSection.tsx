import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FileCheck, Search, Send, BarChart3, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureData {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  image: string;
}

const featuresData: FeatureData[] = [
  {
    id: 1,
    titleKey: "feature1Title",
    descriptionKey: "feature1Desc",
    icon: <FileCheck className="w-8 h-8" />,
    image: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    titleKey: "feature2Title",
    descriptionKey: "feature2Desc",
    icon: <Search className="w-8 h-8" />,
    image: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    id: 3,
    titleKey: "feature3Title",
    descriptionKey: "feature3Desc",
    icon: <Send className="w-8 h-8" />,
    image: "bg-gradient-to-br from-amber-50 to-yellow-100"
  },
  {
    id: 4,
    titleKey: "feature4Title",
    descriptionKey: "feature4Desc",
    icon: <BarChart3 className="w-8 h-8" />,
    image: "bg-gradient-to-br from-purple-50 to-pink-100"
  }
];

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, { feature: Feature; index: number; t: (key: string) => string }>(({ feature, index, t }, ref) => {
  return (
    <motion.div
      ref={ref}
      id={`feature-${feature.id}`}
      className={`
        group w-full max-w-3xl mx-auto
        ${index % 2 === 0 ? 'lg:mr-[40%]' : 'lg:ml-[40%]'}
      `}
    >
      <div className="
        relative bg-white overflow-hidden
        rounded-2xl md:rounded-[32px] lg:rounded-[40px]
        border border-black/[0.05]
        shadow-md hover:shadow-xl
        transition-all duration-500
        hover:-translate-y-1
      ">
        {/* Contenedor Principal */}
        <div className="
          relative z-10 p-6 md:p-8 lg:p-10
          transition-transform duration-500
          group-hover:scale-[0.99]
        ">
          {/* Header */}
          <div className="flex flex-col space-y-3 md:space-y-4">
            {/* Icono */}
            <div className="
              inline-flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-xl md:rounded-2xl bg-black/[0.04]
              transition-all duration-300
              group-hover:bg-black/[0.08]
              group-hover:scale-105
              group-hover:rotate-2
            ">
              {React.cloneElement(feature.icon as React.ReactElement, {
                className: "w-5 h-5 text-gray-800"
              })}
            </div>

            {/* Contenido */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="
                text-xl md:text-2xl lg:text-3xl
                font-semibold
                text-gray-900
                tracking-tight
                transition-transform duration-300
                group-hover:translate-x-1
              ">
                {feature.title}
              </h3>
              <p className="
                text-sm md:text-[15px]
                leading-relaxed
                text-gray-600
                max-w-lg
                transition-transform duration-300
                group-hover:-translate-x-0.5
              ">
                {feature.description}
              </p>
            </div>
          </div>

          {/* Imagen del Dashboard */}
          <div className={`
            relative mt-4 md:mt-6
            aspect-video w-full
            overflow-hidden rounded-lg md:rounded-xl
            ${feature.image}
            bg-opacity-60
            transition-all duration-700
            group-hover:scale-[1.03]
            group-hover:shadow-xl
          `}>
            {/* Botón de acción flotante */}
            <div className="absolute top-4 right-4 z-10">
              <button className="
                p-2 rounded-full
                bg-white/90 hover:bg-white
                shadow-lg hover:shadow-xl
                transform transition-all duration-300
                hover:scale-110
                group/btn
              ">
                <div className="w-6 h-6 relative">
                  {feature.id === 1 && (
                    <FileCheck className="w-full h-full text-primary-500 group-hover/btn:text-primary-400 transition-colors" />
                  )}
                  {feature.id === 2 && (
                    <Search className="w-full h-full text-success-500 group-hover/btn:text-success-400 transition-colors" />
                  )}
                  {feature.id === 3 && (
                    <Send className="w-full h-full text-warning-500 group-hover/btn:text-warning-400 transition-colors" />
                  )}
                  {feature.id === 4 && (
                    <BarChart3 className="w-full h-full text-info-500 group-hover/btn:text-info-400 transition-colors" />
                  )}
                </div>
              </button>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              {feature.id === 1 && (
                // Ilustración para Auditoría Automática
                <div className="w-[85%] h-[70%] relative -mt-16 bg-transparent">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="audit-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.14"/>
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.09"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05"/>
                      </linearGradient>
                      <linearGradient id="invoice-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Documentos de facturas */}
                    <g className="animate-float">
                      {[0, 1, 2].map((i) => (
                        <g key={i} transform={`translate(${i * 15}, ${i * 10})`} className={`animate-fade-in [animation-delay:${i * 200}ms]`}>
                          <rect 
                            x="50" 
                            y="30" 
                            width="120" 
                            height="140" 
                            rx="8" 
                            fill="url(#audit-gradient-1)" 
                            className="text-primary-100 shadow-lg"
                          />
                          {/* Líneas de texto simulando factura */}
                          {[60, 80, 100, 120, 140].map((y, j) => (
                            <line 
                              key={j}
                              x1="60" 
                              y1={y} 
                              x2={140 - j * 5} 
                              y2={y} 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              className="text-primary-300"
                            />
                          ))}
                          {/* Checkmark de validación */}
                          <circle 
                            cx={150} 
                            cy={70} 
                            r="12" 
                            fill="#22c55e" 
                            className="animate-pulse"
                          />
                          <path 
                            d="M145 70 L149 74 L155 68" 
                            stroke="white" 
                            strokeWidth="2" 
                            className="animate-fade-in"
                          />
                        </g>
                      ))}
                    </g>

                    {/* IA procesando */}
                    <g className="animate-bounce-slow">
                      <circle cx="280" cy="100" r="40" stroke="url(#invoice-accent)" strokeWidth="2" fill="none" className="animate-spin-slow"/>
                      <path d="M270 100 L280 90 L290 100 L280 110 Z" fill="currentColor" className="text-primary-400"/>
                      <text x="280" y="140" textAnchor="middle" className="text-[10px] fill-primary-600 font-medium">IA</text>
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M320 60 L325 55 L320 50 L315 55 Z" fill="currentColor" className="text-primary-300"/>
                      <path d="M30 160 L35 155 L30 150 L25 155 Z" fill="currentColor" className="text-primary-300"/>
                    </g>
                  </svg>
                </div>
              )}
              {feature.id === 2 && (
                // Ilustración para Detección Inteligente
                <div className="w-[85%] h-[70%] relative bg-transparent">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="detect-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1"/>
                      </filter>
                    </defs>

                    {/* Lupa de búsqueda */}
                    <g className="animate-float">
                      <circle 
                        cx="120" 
                        cy="80" 
                        r="30" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        fill="none" 
                        className="text-success-400"
                      />
                      <line 
                        x1="143" 
                        y1="103" 
                        x2="160" 
                        y2="120" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        className="text-success-400"
                      />
                    </g>

                    {/* Errores detectados */}
                    <g className="animate-pulse">
                      {[
                        { x: 200, y: 60, type: "duplicate" },
                        { x: 280, y: 90, type: "overcharge" },
                        { x: 320, y: 130, type: "incorrect" }
                      ].map((error, i) => (
                        <g key={i} className={`animate-fade-in [animation-delay:${i * 300}ms]`}>
                          <circle 
                            cx={error.x} 
                            cy={error.y} 
                            r="20" 
                            fill="#ef4444" 
                            fillOpacity="0.2"
                            className="animate-ping"
                          />
                          <text 
                            x={error.x} 
                            y={error.y + 3} 
                            textAnchor="middle" 
                            className="text-[8px] fill-red-600 font-bold"
                          >
                            !
                          </text>
                        </g>
                      ))}
                    </g>

                    {/* Datos de comparación */}
                    <g filter="url(#shadow)" className="animate-rise">
                      {[0, 1, 2].map((i) => (
                        <g key={i} className={`animate-scale-slow [animation-delay:${i * 100}ms]`}>
                          <rect 
                            x={50 + i * 30} 
                            y={140 - i * 20} 
                            width="20" 
                            height={20 + i * 15} 
                            fill={`rgb(34, 197, 94)`} 
                            className="opacity-80"
                          />
                        </g>
                      ))}
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M50 40 L55 35 L50 30 L45 35 Z" fill="currentColor" className="text-success-300"/>
                      <path d="M350 170 L355 165 L350 160 L345 165 Z" fill="currentColor" className="text-success-300"/>
                    </g>
                  </svg>
                </div>
              )}
              {feature.id === 3 && (
                // Ilustración para Reclamaciones Automáticas
                <div className="w-[85%] h-[70%] relative bg-transparent">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="claim-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#d97706" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="email-shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                      </filter>
                    </defs>

                    {/* Email siendo enviado */}
                    <g filter="url(#email-shadow)" className="animate-float">
                      <rect 
                        x="60" 
                        y="40" 
                        width="180" 
                        height="120" 
                        rx="12" 
                        fill="url(#claim-gradient-3)" 
                        className="shadow-lg"
                      />
                      {/* Líneas del email */}
                      {[70, 90, 110, 130].map((y, j) => (
                        <line 
                          key={j}
                          x1="80" 
                          y1={y} 
                          x2={220 - j * 10} 
                          y2={y} 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          className="text-warning-300"
                        />
                      ))}
                      {/* Adjunto */}
                      <rect 
                        x="180" 
                        y="140" 
                        width="40" 
                        height="10" 
                        rx="2" 
                        fill="currentColor" 
                        className="text-warning-400"
                      />
                    </g>

                    {/* Flecha de envío */}
                    <g className="animate-bounce-x">
                      <path 
                        d="M260 100 L300 100 M290 90 L300 100 L290 110" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        fill="none"
                        className="text-warning-400"
                      />
                    </g>

                    {/* Destinatario (transportista) */}
                    <g className="animate-fade-in">
                      <circle 
                        cx="340" 
                        cy="100" 
                        r="25" 
                        fill="currentColor" 
                        className="text-warning-200"
                      />
                      <path 
                        d="M330 95 L340 85 L350 95 L340 105 Z" 
                        fill="currentColor" 
                        className="text-warning-500"
                      />
                      <text 
                        x="340" 
                        y="135" 
                        textAnchor="middle" 
                        className="text-[8px] fill-warning-600 font-medium"
                      >
                        Transportista
                      </text>
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M30 80 L35 75 L30 70 L25 75 Z" fill="currentColor" className="text-warning-300"/>
                      <path d="M370 140 L375 135 L370 130 L365 135 Z" fill="currentColor" className="text-warning-300"/>
                    </g>
                  </svg>
                </div>
              )}
              {feature.id === 4 && (
                // Ilustración para Panel de Control
                <div className="w-[85%] h-[70%] relative bg-transparent">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="dashboard-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="dashboard-shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="4" floodOpacity="0.1"/>
                      </filter>
                    </defs>

                    {/* Dashboard principal */}
                    <g filter="url(#dashboard-shadow)" className="animate-float">
                      <rect 
                        x="40" 
                        y="30" 
                        width="320" 
                        height="140" 
                        rx="16" 
                        fill="url(#dashboard-gradient-4)" 
                        className="shadow-lg"
                      />
                      
                      {/* Gráfico de barras */}
                      <g className="animate-rise">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <rect 
                            key={i}
                            x={70 + i * 25} 
                            y={140 - (i + 1) * 15} 
                            width="15" 
                            height={(i + 1) * 15} 
                            fill="currentColor" 
                            className="text-purple-400 animate-scale-slow"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </g>

                      {/* Métricas */}
                      <g className="animate-fade-in">
                        <text x="220" y="60" className="text-[12px] fill-purple-600 font-bold">€45.2K</text>
                        <text x="220" y="75" className="text-[8px] fill-purple-500">Ahorrado</text>
                        
                        <text x="220" y="100" className="text-[12px] fill-purple-600 font-bold">87%</text>
                        <text x="220" y="115" className="text-[8px] fill-purple-500">Precisión</text>
                        
                        <text x="280" y="60" className="text-[12px] fill-purple-600 font-bold">234</text>
                        <text x="280" y="75" className="text-[8px] fill-purple-500">Facturas</text>
                        
                        <text x="280" y="100" className="text-[12px] fill-purple-600 font-bold">12</text>
                        <text x="280" y="115" className="text-[8px] fill-purple-500">Errores</text>
                      </g>

                      {/* Indicadores de estado */}
                      {[
                        { x: 320, y: 50, color: "#22c55e" },
                        { x: 320, y: 70, color: "#f59e0b" },
                        { x: 320, y: 90, color: "#ef4444" }
                      ].map((indicator, i) => (
                        <circle 
                          key={i}
                          cx={indicator.x} 
                          cy={indicator.y} 
                          r="4" 
                          fill={indicator.color} 
                          className="animate-pulse"
                        />
                      ))}
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M20 50 L25 45 L20 40 L15 45 Z" fill="currentColor" className="text-purple-300"/>
                      <path d="M380 150 L385 145 L380 140 L375 145 Z" fill="currentColor" className="text-purple-300"/>
                    </g>
                  </svg>
                </div>
              )}
            </div>

            {/* Indicador de interactividad */}
            <a
              href="https://cal.com/Obsydian-demo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute bottom-4 right-4
                px-3 py-1.5
                bg-white/90 hover:bg-white
                rounded-full
                text-xs font-medium text-gray-600 hover:text-gray-900
                transition-all duration-300
                opacity-0 group-hover:opacity-100
                translate-y-2 group-hover:translate-y-0
                cursor-pointer
                hover:shadow-md
              "
            >
              {t('cardActionText')}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

const ProductFeatureSection: React.FC = () => {
  const { t } = useTranslation('ProductFeatureSection');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [canShowCard, setCanShowCard] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = featuresData.map(f => ({
    ...f,
    title: t(f.titleKey),
    description: t(f.descriptionKey)
  }));

  // Set up scroll tracking for the sticky container
  const { scrollYProgress } = useScroll({
    target: stickyContainerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which card should be visible based on scroll progress
  const cardProgress = useTransform(scrollYProgress, [0, 1], [0, features.length - 1]);
  
  // Update current index based on scroll progress
  useEffect(() => {
    const unsubscribe = cardProgress.on("change", (latest) => {
      const newIndex = Math.round(latest);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < features.length) {
        setCurrentIndex(newIndex);
      }
    });
    
    return unsubscribe;
  }, [cardProgress, currentIndex, features.length]);

  // Handle title visibility based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Show title only in the first 30% of the scroll
      const titleThreshold = 0.3;
      setIsTitleVisible(latest < titleThreshold);
      
      // Show cards after 30% scroll
      setCanShowCard(latest >= titleThreshold);
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  const cardVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0
    })
  };

  // Special variant for the first card to appear from bottom
  const firstCardVariants = {
    enter: {
      y: 1000,
      opacity: 0
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0
    })
  };



  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative bg-black mt-24 md:mt-48"
      style={{ height: `${100 * features.length}vh` }}
    >
      {/* Scroll container that takes up full height for all cards */}
      <div 
        ref={stickyContainerRef}
        className="relative w-full"
        style={{ height: `${100 * features.length}vh` }}
      >
        {/* Sticky container that stays in viewport */}
        <div className="sticky top-0 h-screen w-full bg-black">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 pt-20 pb-20 md:pt-32 md:pb-32 z-10 w-full bg-black">
            <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
              <motion.div 
                ref={titleContainerRef}
                className="text-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: isTitleVisible ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="
                  inline-flex items-center px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-8
                  rounded-full bg-white/10 text-white
                  text-xs md:text-sm font-medium tracking-wide
                  backdrop-blur-sm
                ">
                  <Settings className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  {t('sectionTag')}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
                  {t('title')}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto">
                  {t('paragraph')}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
              <div className="relative h-full flex items-center justify-center">
                <AnimatePresence initial={false} custom={currentIndex}>
                  {!canShowCard ? null : (
                    <motion.div
                      key={currentIndex}
                      custom={currentIndex}
                      variants={currentIndex === 0 ? firstCardVariants : cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 200, damping: 40, duration: 1.2 },
                        opacity: { duration: 0.8 }
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <FeatureCard 
                        feature={features[currentIndex]}
                        index={currentIndex}
                        t={t}
                        ref={currentIndex === 0 ? firstCardRef : undefined}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                    }
                  `}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureSection; 