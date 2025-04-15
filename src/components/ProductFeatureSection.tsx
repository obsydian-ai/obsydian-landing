import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, BanknoteIcon, FileSearch, CreditCard, Settings } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Atención al cliente",
    description: "Respuestas instantáneas y personalizadas 24/7 vía voz, email y Whatsapp. Mejora la satisfacción del cliente y tus márgenes.",
    icon: <MessageCircle className="w-8 h-8" />,
    image: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    title: "Recuperación de impagos",
    description: "Automatiza y optimiza la gestión de cobros con IA, mejorando la tasa de recuperación hasta un 40%.",
    icon: <BanknoteIcon className="w-8 h-8" />,
    image: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    id: 3,
    title: "Gestión de siniestros",
    description: "Reduce el tiempo de gestión en un 70% con IA. Respuestas más rápidas y precisas para cada caso.",
    icon: <FileSearch className="w-8 h-8" />,
    image: "bg-gradient-to-br from-amber-50 to-yellow-100"
  },
  {
    id: 4,
    title: "Métodos de pago",
    description: "Permite a tus clientes pagar con su método de pago preferido, subiendo la conversión y reduciendo los costes operativos.",
    icon: <CreditCard className="w-8 h-8" />,
    image: "bg-gradient-to-br from-purple-50 to-pink-100"
  }
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 100,
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.2 }}
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
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-black/[0.02] before:to-black/[0.05]
            before:rounded-lg before:md:rounded-xl
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
                    <MessageCircle className="w-full h-full text-primary-500 group-hover/btn:text-primary-400 transition-colors" />
                  )}
                  {feature.id === 2 && (
                    <BanknoteIcon className="w-full h-full text-success-500 group-hover/btn:text-success-400 transition-colors" />
                  )}
                  {feature.id === 3 && (
                    <FileSearch className="w-full h-full text-warning-500 group-hover/btn:text-warning-400 transition-colors" />
                  )}
                  {feature.id === 4 && (
                    <CreditCard className="w-full h-full text-info-500 group-hover/btn:text-info-400 transition-colors" />
                  )}
                </div>
              </button>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              {feature.id === 1 && (
                // Ilustración mejorada para Atención al cliente
                <div className="w-[85%] h-[70%] relative">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chat-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.14"/>
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.09"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05"/>
                      </linearGradient>
                      <linearGradient id="chat-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Fondo con patrón animado */}
                    <rect width="400" height="200" fill="url(#gradient-dots)" className="animate-slide opacity-30"/>
                    
                    {/* Ondas de comunicación */}
                    <g className="animate-pulse-slow">
                      <circle cx="200" cy="100" r="80" stroke="url(#chat-accent)" strokeWidth="1" fill="none"/>
                      <circle cx="200" cy="100" r="60" stroke="url(#chat-accent)" strokeWidth="1" fill="none"/>
                      <circle cx="200" cy="100" r="40" stroke="url(#chat-accent)" strokeWidth="1" fill="none"/>
                    </g>

                    {/* Burbujas de chat con efectos mejorados */}
                    <g className="animate-bounce-slow">
                      <rect x="40" y="30" width="140" height="45" rx="22.5" fill="url(#chat-gradient-1)" className="text-primary-100"/>
                      <circle cx="60" cy="52.5" r="15" fill="currentColor" className="text-primary-200 animate-pulse"/>
                      <path d="M90 52.5 H160" stroke="currentColor" strokeWidth="2" className="text-primary-300"/>
                      {/* Indicador de escritura */}
                      <g className="animate-bounce-slow">
                        <circle cx="90" cy="52.5" r="2" fill="currentColor" className="text-primary-400 animate-ping-slow"/>
                        <circle cx="100" cy="52.5" r="2" fill="currentColor" className="text-primary-400 animate-ping-slow [animation-delay:150ms]"/>
                        <circle cx="110" cy="52.5" r="2" fill="currentColor" className="text-primary-400 animate-ping-slow [animation-delay:300ms]"/>
                      </g>
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M350 40 L355 35 L350 30 L345 35 Z" fill="currentColor" className="text-primary-300"/>
                      <path d="M50 160 L55 155 L50 150 L45 155 Z" fill="currentColor" className="text-primary-300"/>
                    </g>
                  </svg>
                </div>
              )}
              {feature.id === 2 && (
                // Ilustración mejorada para Recuperación de impagos
                <div className="w-[85%] h-[70%] relative">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chart-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1"/>
                      </filter>
                    </defs>

                    {/* Fondo con grid animado */}
                    <rect width="400" height="200" fill="url(#gradient-lines)" className="animate-slide opacity-20"/>

                    {/* Área del gráfico con gradiente */}
                    <path 
                      d="M40 160 Q150 120 260 40 L260 160 L40 160 Z" 
                      fill="url(#chart-gradient-2)" 
                      className="animate-fade-in"
                    />

                    {/* Barras con animación mejorada */}
                    <g filter="url(#shadow)" className="animate-rise">
                      {[0, 1, 2, 3].map((i) => (
                        <g key={i} className={`animate-scale-slow [animation-delay:${i * 100}ms]`}>
                          <rect 
                            x={50 + i * 70} 
                            y={140 - i * 40} 
                            width="50" 
                            height={40 + i * 40} 
                            fill={`rgb(var(--success-${300 + i * 100}))`} 
                            className="opacity-80"
                          />
                          <text 
                            x={75 + i * 70} 
                            y={135 - i * 40} 
                            textAnchor="middle" 
                            className="text-[12px] fill-success-700 font-medium animate-fade-in"
                          >
                            +{(i + 1) * 10}%
                          </text>
                        </g>
                      ))}
                    </g>

                    {/* Línea de tendencia animada */}
                    <path 
                      d="M40 160 Q150 120 260 40" 
                      stroke="#22c55e" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="5,5"
                      filter="url(#glow)"
                      className="animate-dash"
                    />

                    {/* Puntos de datos con efectos */}
                    {[0, 1, 2, 3].map((i) => (
                      <g key={i} className={`animate-pulse-slow [animation-delay:${i * 100}ms]`}>
                        <circle 
                          cx={75 + i * 70} 
                          cy={140 - i * 40} 
                          r="6" 
                          fill="#22c55e"
                          className="animate-ping-slow"
                        />
                        <circle 
                          cx={75 + i * 70} 
                          cy={140 - i * 40} 
                          r="12" 
                          stroke="#4ade80" 
                          fill="none"
                          className="animate-scale-slow"
                        />
                      </g>
                    ))}
                  </svg>
                </div>
              )}
              {feature.id === 3 && (
                // Ilustración mejorada para Gestión de siniestros
                <div className="w-[85%] h-[70%] relative">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="doc-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="paper-shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                      </filter>
                    </defs>

                    {/* Fondo con patrón */}
                    <rect width="400" height="200" fill="url(#gradient-dots)" className="animate-slide opacity-20"/>

                    {/* Documentos apilados con efecto 3D mejorado */}
                    <g filter="url(#paper-shadow)" className="animate-stack">
                      {[0, 1, 2].map((i) => (
                        <g key={i} transform={`translate(${i * 10}, ${15 - i * 7})`} className={`animate-float [animation-delay:${i * 200}ms]`}>
                          <rect 
                            x="80" 
                            y="20" 
                            width="240" 
                            height="160" 
                            rx="12" 
                            fill="url(#doc-gradient-3)" 
                            className="shadow-lg"
                          />
                          {[50, 80, 110].map((y, j) => (
                            <line 
                              key={j}
                              x1="100" 
                              y1={y} 
                              x2={280 - j * 20} 
                              y2={y} 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              className="text-warning-300"
                            />
                          ))}
                          <circle 
                            cx={260 - i * 20} 
                            cy={120} 
                            r="20" 
                            fill="currentColor" 
                            className="text-warning-200 animate-pulse"
                          />
                          <path 
                            d={`M${250 - i * 20} 120 L${270 - i * 20} 120 M${260 - i * 20} 110 L${260 - i * 20} 130`} 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            className="text-warning-400"
                          />
                        </g>
                      ))}

                      {/* Indicadores de estado */}
                      <g className="animate-bounce-x">
                        <circle cx="320" cy="40" r="8" fill="#22c55e" className="animate-ping-slow"/>
                        <path 
                          d="M316 40 L319 43 L324 38" 
                          stroke="white" 
                          strokeWidth="2" 
                          className="animate-fade-in"
                        />
                      </g>
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M30 100 L35 95 L30 90 L25 95 Z" fill="currentColor" className="text-warning-300"/>
                      <path d="M370 150 L375 145 L370 140 L365 145 Z" fill="currentColor" className="text-warning-300"/>
                    </g>
                  </svg>
                </div>
              )}
              {feature.id === 4 && (
                // Ilustración mejorada para Métodos de pago
                <div className="w-[85%] h-[70%] relative">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="card-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="card-shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="4" floodOpacity="0.1"/>
                      </filter>
                    </defs>

                    {/* Fondo con patrón */}
                    <rect width="400" height="200" fill="url(#gradient-lines)" className="animate-slide opacity-20"/>

                    {/* Tarjetas de pago con efectos mejorados */}
                    <g filter="url(#card-shadow)" className="animate-float">
                      {[0, 1, 2].map((i) => (
                        <g key={i} transform={`translate(${i * 20}, ${15 - i * 7})`} className={`animate-float [animation-delay:${i * 200}ms]`}>
                          <rect 
                            x="60" 
                            y="40" 
                            width="280" 
                            height="160" 
                            rx="16" 
                            fill="url(#card-gradient-4)" 
                            className="shadow-lg"
                          />
                          <rect 
                            x="80" 
                            y="70" 
                            width="240" 
                            height="30" 
                            fill="currentColor" 
                            className="text-info-200"
                          />
                          
                          {/* Chip de la tarjeta */}
                          <g className="animate-shimmer">
                            <rect 
                              x="80" 
                              y="140" 
                              width="40" 
                              height="40" 
                              rx="6" 
                              fill="currentColor" 
                              className="text-info-300"
                            />
                            {[150, 160, 170].map((y) => (
                              <path 
                                key={y}
                                d="M85 {y} h30" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                className="text-info-400"
                              />
                            ))}
                          </g>

                          {/* Número de tarjeta simulado */}
                          <g className="animate-pulse-slow">
                            {[0, 1, 2, 3].map((j) => (
                              <circle 
                                key={j}
                                cx={100 + j * 15} 
                                cy="160" 
                                r="4" 
                                fill="currentColor" 
                                className="text-info-300"
                              />
                            ))}
                          </g>
                        </g>
                      ))}

                      {/* Símbolos de pago flotantes */}
                      {[
                        { symbol: '€', y: 40 },
                        { symbol: '$', y: 80 },
                        { symbol: '£', y: 120 }
                      ].map((item, i) => (
                        <g key={i} className={`animate-float [animation-delay:${i * 200}ms]`}>
                          <circle 
                            cx="350" 
                            cy={item.y} 
                            r="15" 
                            fill="currentColor" 
                            className="text-info-200 animate-pulse"
                          />
                          <text 
                            x="350" 
                            y={item.y + 5} 
                            textAnchor="middle" 
                            className="text-[12px] fill-info-500 font-medium"
                          >
                            {item.symbol}
                          </text>
                        </g>
                      ))}
                    </g>

                    {/* Elementos decorativos */}
                    <g className="animate-sparkle">
                      <path d="M30 50 L35 45 L30 40 L25 45 Z" fill="currentColor" className="text-info-300"/>
                      <path d="M370 180 L375 175 L370 170 L365 175 Z" fill="currentColor" className="text-info-300"/>
                    </g>
                  </svg>
                </div>
              )}
            </div>

            {/* Indicador de interactividad */}
            <div className="
              absolute bottom-4 right-4
              px-3 py-1.5
              bg-white/90 rounded-full
              text-xs font-medium
              transform transition-all duration-300
              opacity-0 group-hover:opacity-100
              translate-y-2 group-hover:translate-y-0
            ">
              Click para más info
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductFeatureSection: React.FC = () => {
  return (
    <section className="relative bg-black mt-24 md:mt-48">
      {/* Header Fijo en el Centro */}
      <div className="sticky top-0 pt-20 pb-20 md:pt-32 md:pb-32 z-10 w-full bg-black">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="
              inline-flex items-center px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-8
              rounded-full bg-white/10 text-white
              text-xs md:text-sm font-medium tracking-wide
              backdrop-blur-sm
            ">
              <Settings className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Céntrate en lo importante
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
              Digitaliza tu negocio
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto">
              Automatiza el trabajo manual, para centrarte en hacer crecer tu negocio
            </p>
          </motion.div>
        </div>
      </div>

      {/* Espacio inicial para el scroll */}
      <div className="h-[20vh] md:h-[30vh] lg:h-[50vh]"/>

      {/* Contenedor de Cards */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="space-y-12 md:space-y-16 lg:space-y-24 py-16 md:py-24 lg:py-32">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.id} 
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureSection; 