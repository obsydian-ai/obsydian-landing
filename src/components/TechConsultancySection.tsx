import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Bot, Zap } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const services: Service[] = [
  {
    id: 1,
    title: "Recuperación de impagos",
    description: "Automatiza y optimiza la gestión de cobros con IA, mejorando la tasa de recuperación hasta un 40%.",
    icon: <Shield className="w-8 h-8" />,
    colors: {
      primary: "from-zinc-900 to-black",
      secondary: "from-zinc-800 to-zinc-900",
      tertiary: "from-zinc-700 to-zinc-800"
    }
  },
  {
    id: 2,
    title: "Atención inteligente",
    description: "Respuestas instantáneas y personalizadas 24/7. Mejora la satisfacción de tus clientes en un 60%.",
    icon: <Database className="w-8 h-8" />,
    colors: {
      primary: "from-blue-50 to-[#EEF6FF]",
      secondary: "from-blue-100 to-blue-50",
      tertiary: "from-white to-blue-50"
    }
  },
  {
    id: 3,
    title: "Gestión de siniestros",
    description: "Reduce el tiempo de gestión en un 70% con IA. Respuestas más rápidas y precisas para cada caso.",
    icon: <Bot className="w-8 h-8" />,
    colors: {
      primary: "from-slate-400 via-zinc-300 to-gray-200",
      secondary: "from-slate-500 via-zinc-400 to-gray-300",
      tertiary: "from-slate-300 via-zinc-200 to-gray-100"
    }
  },
  {
    id: 4,
    title: "Marketing inteligente",
    description: "Optimiza tus comunicaciones con IA. Aumenta la conversión y engagement de tus campañas en un 50%.",
    icon: <Zap className="w-8 h-8" />,
    colors: {
      primary: "from-neutral-400 via-stone-300 to-zinc-200",
      secondary: "from-neutral-500 via-stone-400 to-zinc-300",
      tertiary: "from-neutral-300 via-stone-200 to-zinc-100"
    }
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const isBlack = service.id === 1;
  const isDark = service.id === 3 || service.id === 4;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        transition: { 
          type: "spring",
          duration: 0.4,
          bounce: 0.2
        }
      }}
      className="group relative perspective-[2000px]"
    >
      {/* Borde Exterior Animado con Morphing */}
      <div className={`
        absolute -inset-0.5
        rounded-[42px]
        bg-gradient-to-r
        ${isBlack 
          ? 'from-white/20 via-white/10 to-white/20' 
          : isDark
            ? 'from-black/10 via-black/5 to-black/10'
            : 'from-black/[0.04] via-black/[0.02] to-black/[0.04]'}
        opacity-40 group-hover:opacity-100
        blur
        transition-all duration-500
        group-hover:duration-200
      `}/>

      <div className={`
        relative
        rounded-[40px]
        aspect-[1.1/1]
        overflow-hidden
        shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)]
        hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)]
        transition-all duration-500
        border-2
        ${isBlack 
          ? 'border-white/20' 
          : isDark
            ? 'border-black/10'
            : 'border-black/[0.05]'}
        transform-style-preserve-3d
        group-hover:[transform:rotateX(10deg)]
      `}>
        {/* Fondo con Efectos */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Círculos con Morphing */}
          <div className={`
            absolute w-[120%] aspect-square
            rounded-full
            bg-gradient-to-br ${service.colors.primary}
            -top-[60%] -right-[10%]
            blur-[64px]
            opacity-80 group-hover:opacity-90
            transition-all duration-500
            group-hover:scale-110
            group-hover:rotate-12
            group-hover:translate-x-6
          `}/>
          
          <div className={`
            absolute w-[90%] aspect-square
            rounded-full
            bg-gradient-to-br ${service.colors.secondary}
            -bottom-[40%] -left-[20%]
            blur-[64px]
            opacity-80 group-hover:opacity-90
            transition-all duration-500
            group-hover:scale-125
            group-hover:-rotate-12
            group-hover:-translate-x-6
          `}/>

          <div className={`
            absolute w-[70%] aspect-square
            rounded-full
            bg-gradient-to-br ${service.colors.tertiary}
            top-[20%] left-[20%]
            blur-[64px]
            opacity-80 group-hover:opacity-90
            transition-all duration-500
            group-hover:scale-150
            group-hover:rotate-45
          `}/>

          {/* Overlay Dinámico */}
          <div className={`
            absolute inset-0
            backdrop-blur-[32px]
            ${isBlack 
              ? 'bg-black/40' 
              : isDark
                ? 'bg-white/30'
                : 'bg-white/40'}
            transition-all duration-500
            group-hover:opacity-90
          `}/>
        </div>

        {/* Contenido Interior */}
        <div className="
          relative z-10
          h-full w-full 
          flex flex-col 
          justify-between 
          p-10 md:p-12
          transition-all duration-500
          transform-style-preserve-3d
          [transform:translateZ(40px)]
          group-hover:[transform:translateZ(80px)]
        ">
          {/* Icono con Rotación 3D */}
          <div className={`
            inline-flex items-center justify-center
            w-16 h-16
            rounded-2xl
            ${isBlack 
              ? 'bg-white/10' 
              : isDark
                ? 'bg-black/10'
                : 'bg-black/[0.03]'}
            transition-all duration-500
            group-hover:scale-110
            group-hover:-rotate-12
            group-hover:shadow-lg
            relative
            overflow-hidden
          `}>
            {React.cloneElement(service.icon as React.ReactElement, {
              className: `
                w-8 h-8 
                ${isBlack ? 'text-white' : isDark ? 'text-gray-800' : 'text-gray-900'} 
                relative z-10
                transition-transform duration-500
                group-hover:scale-110
                group-hover:rotate-12
              `
            })}
          </div>

          {/* Texto con Animación Mejorada */}
          <div className="
            space-y-4 
            transition-all duration-500
          ">
            <div className="overflow-hidden">
              <h3 className={`
                text-[28px] md:text-[32px]
                font-semibold
                leading-[1.15]
                tracking-[-0.02em]
                ${isBlack ? 'text-white' : isDark ? 'text-gray-800' : 'text-gray-900'}
                transition-all duration-500
                group-hover:translate-x-2
                mb-2
              `}>
                {service.title}
              </h3>
            </div>

            <div className="
              relative
              transition-all duration-500
            ">
              <p className={`
                text-[17px]
                leading-relaxed
                ${isBlack ? 'text-white/90' : isDark ? 'text-gray-700' : 'text-gray-600'}
                max-w-[95%]
                transition-all duration-500
                group-hover:translate-y-1
                relative
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:w-full
                after:h-[2px]
                after:bg-gradient-to-r
                after:${isBlack 
                  ? 'from-white/0 via-white/20 to-white/0' 
                  : isDark
                    ? 'from-black/0 via-black/10 to-black/0'
                    : 'from-black/0 via-black/5 to-black/0'}
                after:opacity-0
                after:transition-all
                after:duration-500
                group-hover:after:opacity-100
              `}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechConsultancySection: React.FC = () => {
  return (
    <section id="tech-consultancy" className="py-24">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[40px] md:text-[48px] font-bold mb-4 tracking-tight">
            Soluciones que transforman tu negocio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tecnología de vanguardia para automatizar y optimizar tus procesos clave
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechConsultancySection;
