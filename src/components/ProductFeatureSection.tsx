import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart3, Wallet, Settings } from 'lucide-react';

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
    title: "Momentum",
    description: "Transforma el valor invisible de la IA en métricas ROI tangibles. Muestra a los clientes exactamente lo que obtienen de sus agentes, facilitando las conversaciones de renovación.",
    icon: <LineChart className="w-8 h-8" />,
    image: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    title: "Gestión de Márgenes",
    description: "Más que solo facturación. Hacemos seguimiento de los costos de cada acción y flujo de trabajo de agentes para ayudarte a calcular el precio óptimo.",
    icon: <BarChart3 className="w-8 h-8" />,
    image: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    id: 3,
    title: "Monetización",
    description: "Combina modelos de facturación por asiento, actividad y resultados sin complicaciones. ¿Quieres cobrar por resultados en lugar de entradas? Hecho.",
    icon: <Wallet className="w-8 h-8" />,
    image: "bg-gradient-to-br from-amber-50 to-yellow-100"
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
            transition-all duration-500
            group-hover:scale-[1.02]
            group-hover:shadow-lg
          `}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[60%]">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <rect width="400" height="200" fill="currentColor" className="text-black/[0.03]"/>
                  <line x1="50" y1="150" x2="350" y2="50" stroke="currentColor" strokeWidth="2" className="text-black/[0.05]"/>
                  <circle cx="150" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/[0.05]"/>
                </svg>
              </div>
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
              Monetiza como lo planeas
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
              Monetiza como quieres.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto">
              La plataforma todo en uno que maneja tu facturación, suscripciones, márgenes y renovaciones con solo 5 líneas de código.
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