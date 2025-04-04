import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Bot, Zap } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Centro de Operaciones 24/7",
    description: "Monitoreo continuo y respuesta inmediata ante amenazas. Nuestro equipo de expertos está disponible en todo momento.",
    icon: <Shield className="w-7 h-7" />,
    tags: ["SOC", "Threat Response", "24/7"]
  },
  {
    id: 2,
    title: "Cloud Protection",
    description: "Protección avanzada para tus servicios en la nube contra amenazas emergentes y ataques sofisticados.",
    icon: <Database className="w-7 h-7" />,
    tags: ["Cloud", "Security", "AWS"]
  },
  {
    id: 3,
    title: "AI Security",
    description: "Implementación de sistemas de seguridad potenciados por IA para detección predictiva de amenazas.",
    icon: <Bot className="w-7 h-7" />,
    tags: ["AI", "ML", "Predictive"]
  },
  {
    id: 4,
    title: "Safe BOX",
    description: "Sistema integral de protección contra phishing, malware y amenazas avanzadas.",
    icon: <Zap className="w-7 h-7" />,
    tags: ["Anti-Phishing", "Malware", "Zero-Day"]
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
      }}
      className="group"
    >
      <div 
        className={`
          relative bg-white rounded-[32px] h-full overflow-hidden
          transition-all duration-500
          border-2 border-[#E5E7EB]
          shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12)]
          hover:shadow-[0_32px_64px_-8px_rgba(0,0,0,0.25)]
          p-8
          group
        `}
      >
        {/* Fondo con Efecto Dramático */}
        <div className="
          absolute inset-0 
          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          scale-[1.5] rotate-[-15deg] translate-x-[100%] translate-y-[10%]
          group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0
          bg-gradient-to-br from-gray-900 via-gray-900 to-black
          after:absolute after:inset-0
          after:bg-gradient-to-br after:from-gray-800/10 after:to-black/10
          after:opacity-0 after:transition-opacity after:duration-700
          after:group-hover:opacity-100
          z-0
        "/>

        {/* Línea de Acento */}
        <div className="
          absolute top-0 left-[15%] right-[15%] h-[2px]
          bg-gradient-to-r from-transparent via-white/70 to-transparent
          transition-all duration-700 ease-out
          translate-y-[-100%] opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          z-10
        "/>

        {/* Contenido */}
        <div className="relative z-20 space-y-6">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            {/* Icon Container con Efecto */}
            <div className="relative">
              <div className="
                inline-flex items-center justify-center w-16 h-16 
                rounded-2xl
                border-2 transition-all duration-500
                bg-white text-gray-900
                border-[#E5E7EB]
                shadow-[0_4px_8px_-2px_rgba(0,0,0,0.12)]
                group-hover:scale-110
                group-hover:rotate-[5deg]
                group-hover:bg-white
                group-hover:text-gray-900
                group-hover:border-white
                group-hover:shadow-[0_8px_16px_-4px_rgba(255,255,255,0.3)]
              ">
                {React.cloneElement(service.icon as React.ReactElement, { 
                  className: "w-7 h-7 transition-all duration-500 group-hover:scale-110" 
                })}
              </div>
            </div>

            {/* Tags con Efecto */}
            {service.tags && (
              <div className="flex flex-wrap gap-2 justify-end">
                {service.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="
                      inline-flex items-center px-3 py-1 rounded-full 
                      transition-all duration-500
                      border-2
                      text-xs font-medium
                      bg-white text-gray-900 border-[#E5E7EB]
                      group-hover:scale-105
                      group-hover:bg-white
                      group-hover:text-gray-900
                      group-hover:border-white
                      group-hover:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.3)]
                      group-hover:-rotate-[5deg]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content con Efecto */}
          <div className="relative">
            {/* Texto Estado Normal */}
            <div className="
              space-y-3
              transition-all duration-500
              opacity-100 group-hover:opacity-0
              group-hover:translate-y-4
              group-hover:scale-95
            ">
              <h3 className="text-[22px] font-semibold tracking-tight text-gray-900">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>

            {/* Texto Estado Hover */}
            <div className="
              space-y-3
              absolute inset-0
              transition-all duration-500
              opacity-0 translate-y-[-1rem] scale-105
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
            ">
              <h3 className="
                text-[22px] font-semibold tracking-tight text-white
                [text-shadow:0_2px_10px_rgba(255,255,255,0.2)]
              ">
                {service.title}
              </h3>
              <p className="
                text-[15px] leading-relaxed text-white
                [text-shadow:0_1px_8px_rgba(255,255,255,0.1)]
              ">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Efecto de Brillo */}
        <div className="
          absolute inset-0
          bg-gradient-to-tr from-white/0 via-white/10 to-white/0
          opacity-0 transition-opacity duration-700
          group-hover:opacity-100
          pointer-events-none
          z-10
        "/>
      </div>
    </motion.div>
  );
};

const TechConsultancySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F9FA]">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-5 text-black/90 tracking-tight">
            Servicios de Seguridad
          </h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Protección completa para tu negocio con tecnología de última generación
          </p>
        </motion.div>

        <div className="relative">
          {/* Background Container */}
          <div className="absolute inset-0 -mx-6 bg-[#F4F4F5] rounded-[32px] 
            border-2 border-[#E5E7EB]
            before:absolute before:inset-0 before:rounded-[32px]
            before:shadow-[inset_0_2px_4px_rgba(255,255,255,0.95)]
            after:absolute after:inset-0 after:rounded-[32px]
            after:shadow-[0_8px_32px_-16px_rgba(0,0,0,0.15)]" 
          />

          <div className="relative p-6">
            <div className="grid grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechConsultancySection;
