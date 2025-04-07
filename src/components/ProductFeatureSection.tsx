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
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 100,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, margin: "-10%" }}
      className={`
        group w-full max-w-3xl mx-auto
        ${index % 2 === 0 ? 'lg:mr-[40%]' : 'lg:ml-[40%]'}
      `}
    >
      <div className="
        relative bg-white overflow-hidden
        rounded-[32px] md:rounded-[40px]
        border-2 border-black/[0.03]
        shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)]
        transition-all duration-700
        hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)]
        hover:border-black/[0.08]
        hover:-translate-y-1
        group-hover:scale-[1.02]
        before:content-['']
        before:absolute
        before:inset-0
        before:rounded-[32px] md:before:rounded-[40px]
        before:border-2
        before:border-black/[0.03]
        before:transition-all
        before:duration-700
        before:scale-[1.01]
        hover:before:scale-[1.02]
        before:opacity-0
        hover:before:opacity-100
        after:content-['']
        after:absolute
        after:inset-[2px]
        after:rounded-[30px] md:after:rounded-[38px]
        after:border-2
        after:border-black/[0.03]
        after:transition-all
        after:duration-700
        after:scale-[0.99]
        hover:after:scale-[1.01]
        after:opacity-0
        hover:after:opacity-100
      ">
        {/* Brillo en Esquinas */}
        <div className="
          absolute -right-20 -top-20
          w-40 h-40
          bg-white
          rounded-full
          blur-3xl
          opacity-0
          transition-opacity duration-700
          group-hover:opacity-20
          pointer-events-none
        "/>
        <div className="
          absolute -left-20 -bottom-20
          w-40 h-40
          bg-white
          rounded-full
          blur-3xl
          opacity-0
          transition-opacity duration-700
          group-hover:opacity-20
          pointer-events-none
        "/>

        {/* Contenedor Principal */}
        <div className="
          relative z-10 p-8 md:p-10
          transition-transform duration-700
          group-hover:scale-[0.99]
        ">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            {/* Icono */}
            <div className="
              inline-flex items-center justify-center
              w-12 h-12
              rounded-2xl bg-black/[0.03]
              transition-all duration-500
              group-hover:bg-black/[0.06]
              group-hover:scale-110
              group-hover:rotate-3
              group-hover:shadow-lg
              relative
              overflow-hidden
            ">
              <div className="
                absolute inset-0
                bg-gradient-to-r from-black/[0.02] via-black/[0.01] to-black/[0.02]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "/>
              {React.cloneElement(feature.icon as React.ReactElement, {
                className: "w-5 h-5 text-gray-900 relative z-10"
              })}
            </div>

            {/* Contenido */}
            <div className="space-y-3">
              <h3 className="
                text-2xl md:text-3xl
                font-semibold
                text-gray-900
                tracking-tight
                transition-all duration-500
                group-hover:translate-x-2
              ">
                {feature.title}
              </h3>
              <p className="
                text-[15px]
                leading-relaxed
                text-gray-600
                max-w-lg
                transition-all duration-500
                group-hover:-translate-x-1
              ">
                {feature.description}
              </p>
            </div>
          </div>

          {/* Imagen del Dashboard */}
          <div className={`
            relative mt-6
            aspect-[16/7] w-full
            overflow-hidden rounded-2xl
            ${feature.image}
            bg-opacity-50
            transition-all duration-700
            group-hover:scale-[1.03]
            group-hover:shadow-xl
          `}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] h-3/5">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <path
                    d="M 0 100 C 100 80, 200 120, 300 100 S 400 80, 500 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-black/[0.07]"
                  />
                  <path
                    d="M 0 120 C 100 100, 200 140, 300 120 S 400 100, 500 120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-black/[0.07]"
                  />
                </svg>
              </div>
            </div>
            <div className="
              absolute inset-0
              bg-gradient-to-t from-white/60 to-transparent
              transition-opacity duration-700
              group-hover:opacity-80
            "/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductFeatureSection: React.FC = () => {
  return (
    <section className="relative bg-black mt-48">
      {/* Header Fijo en el Centro */}
      <div className="sticky top-1/2 -translate-y-1/2 z-10 w-full">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="
              inline-flex items-center px-6 py-2 mb-8
              rounded-full bg-white/10 text-white
              text-sm font-medium tracking-wide
              backdrop-blur-sm
            ">
              <Settings className="w-4 h-4 mr-2" />
              Monetiza como lo planeas
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Monetiza como quieres.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              La plataforma todo en uno que maneja tu facturación, suscripciones, márgenes y renovaciones con solo 5 líneas de código.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Espacio inicial para el scroll */}
      <div className="h-screen"/>

      {/* Contenedor de Cards */}
      <div className="relative z-20">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="space-y-24 py-32">
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