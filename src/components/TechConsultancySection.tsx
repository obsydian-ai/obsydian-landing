
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Zap, Database, Headset } from 'lucide-react';
import TextReveal from '@/components/animations/TextReveal';

// Define the consultant service type
interface ConsultancyService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

// Define the services data
const services: ConsultancyService[] = [
  {
    id: 1,
    title: "Automatización de recobros e impagos",
    description: "Optimizamos los procesos de recobro y gestión de impagos mediante sistemas automatizados que mejoran la eficiencia y reducen costes operativos.",
    icon: <Database className="w-8 h-8" />,
    color: "bg-gradient-to-br from-blue-50 to-cyan-100"
  },
  {
    id: 2,
    title: "Automatización de atención al cliente",
    description: "Implementamos soluciones de atención al cliente basadas en IA que responden consultas y resuelven incidencias de forma inmediata y personalizada.",
    icon: <Headset className="w-8 h-8" />,
    color: "bg-gradient-to-br from-purple-50 to-indigo-100"
  },
  {
    id: 3,
    title: "Automatización de gestión de siniestros",
    description: "Desarrollamos sistemas que agilizan y optimizan la gestión completa de siniestros, desde la notificación hasta la resolución.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    id: 4,
    title: "Automatización de comunicaciones comerciales",
    description: "Creamos flujos automatizados para comunicaciones comerciales que mejoran la eficacia de las campañas y la personalización de los mensajes.",
    icon: <MessageSquareText className="w-8 h-8" />,
    color: "bg-gradient-to-br from-amber-50 to-yellow-100"
  }
];

// Card component for each consultancy service
const ConsultancyCard: React.FC<{ service: ConsultancyService; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`px-8 py-8 h-full flex flex-col ${service.color}`}>
        <div className="mb-6 p-3 bg-white w-fit rounded-xl shadow-sm">
          {service.icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mt-auto">
          <button className="text-sm font-medium text-gray-700 flex items-center hover:text-black transition-colors">
            Más información
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TechConsultancySection: React.FC = () => {
  return (
    <section id="consultancy" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-300 w-16"></div>
            <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">Consultoría</span>
          </div>
          
          <TextReveal as="h2" className="text-4xl md:text-5xl font-bold mb-6">
            Nuestra Experiencia en Consultoría Tecnológica
          </TextReveal>
          
          <p className="text-gray-600 max-w-2xl">
            Transformamos y optimizamos procesos críticos del sector asegurador a través de 
            soluciones tecnológicas innovadoras y personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ConsultancyCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechConsultancySection;
