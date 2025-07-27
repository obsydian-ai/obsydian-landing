import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ProjectCard from '@/components/ProjectCard';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

// Project data now uses description keys and name keys
const projectsData = [
  {
    id: 1,
    nameKey: "case1",
    descriptionKey: "case1Desc",
    imageSrc: "/lovable-uploads/saludneo-onboarding.webp",
    color: "blue",
  },
  {
    id: 2,
    nameKey: "case2",
    descriptionKey: "case2Desc",
    imageSrc: "/lovable-uploads/segurpay-dashboard.webp",
    color: "purple",
  },
  {
    id: 3,
    nameKey: "case3",
    descriptionKey: "case3Desc",
    imageSrc: "/lovable-uploads/call-center-dashboard.png",
    color: "green",
  }
];

// Definimos el tipo de tema
interface Theme {
  text: string;
  border: string;
  background: string;
  primary: string;
  accent: string;
}

// Función para obtener el tema basado en el índice
const getTheme = (index: number): Theme => {
  const themes: Theme[] = [
    {
      text: 'text-primary-600',
      border: 'border-primary-200',
      background: 'bg-primary-50',
      primary: 'primary-600',
      accent: 'primary-400'
    },
    {
      text: 'text-accent-600',
      border: 'border-accent-200',
      background: 'bg-accent-50',
      primary: 'accent-600',
      accent: 'accent-400'
    },
    {
      text: 'text-success-600',
      border: 'border-success-200',
      background: 'bg-success-50',
      primary: 'success-600',
      accent: 'success-400'
    }
  ];
  return themes[index % themes.length];
};

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation('ProjectsSection');

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Movimiento más suave con spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Transformación del progreso en posición X ajustada
  const x = useTransform(
    smoothProgress,
    [0.25, 0.85],
    ["0%", `-${(projectsData.length - 1) * 100}%`]
  );

  // Efectos de opacidad ajustados
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25],
    [1, 1, 0]
  );

  const projectsOpacity = useTransform(
    scrollYProgress,
    [0.95, 1],
    [1, 0]
  );

  // Map projectsData to include translated description and name
  const projects = projectsData.map(p => ({
    ...p,
    name: t(`projectNames.${p.nameKey}`),
    description: t(p.descriptionKey)
  }));

  // Actualizar proyecto activo basado en la posición del scroll
  useEffect(() => {
    return scrollYProgress.on("change", latest => {
      const projectIndex = Math.min(
        Math.floor(latest * projectsData.length * 0.85),
        projectsData.length - 1
      );
      setActiveProject(projectIndex);
    });
  }, [scrollYProgress]);

  return (
    <section 
      id="projects"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white to-gray-50/50"
      style={{ height: isMobile ? 'auto' : `${projects.length * 150}vh` }}
    >
      {/* Header */}
      <div className={`${isMobile ? 'relative bg-white' : 'sticky top-0 bg-gradient-to-b from-white via-white to-transparent'}`}>
        <motion.div 
          style={{ opacity: isMobile ? 1 : headerOpacity }}
          className="pt-16 pb-8 md:pt-24 md:pb-32 z-10"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6"
              >
                <div className="h-px bg-gray-200 w-8 md:w-12"></div>
                <span className="text-neutral-500 text-xs sm:text-sm uppercase tracking-wider font-medium">
                  {t('sectionTag')}
                </span>
                <div className="h-px bg-gray-200 w-8 md:w-12"></div>
              </motion.div>
              
              <TextReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                {t('title')}
              </TextReveal>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-neutral-600 text-base md:text-lg leading-relaxed"
              >
                {t('paragraph')}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {isMobile ? (
        // Mobile layout - vertical scroll
        <div className="pt-8 px-4 pb-16">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.2,
                    ease: [0.21, 0.45, 0.27, 0.9]
                  } 
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full"
              >
                <ProjectCard
                  project={project}
                  isActive={true}
                  theme={getTheme(index)}
                  isMobile={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop layout - horizontal scroll
        <motion.div 
          style={{ opacity: projectsOpacity }}
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div 
            className="absolute inset-x-0 top-0 h-20 md:h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none opacity-75"
          />
          
          <div className="absolute inset-x-0 bottom-0 h-20 md:h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none opacity-75"></div>
          
          <motion.div 
            className="flex w-full"
            style={{ x }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="min-w-full px-4 md:px-6"
              >
                <div className="container mx-auto">
                  <ProjectCard
                    project={project}
                    isActive={activeProject === index}
                    theme={getTheme(index)}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Progress indicator - Only show on desktop */}
      {!isMobile && (
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3 z-20">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === activeProject ? 'bg-black' : 'bg-gray-300'
              }`}
              animate={{
                scale: index === activeProject ? 1.5 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
