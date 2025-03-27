import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ProjectCard from '@/components/ProjectCard';

// Project data
const projects = [
  {
    id: 1,
    name: "Saludneo",
    description: "Plataforma de salud digital que conecta asegurados con servicios médicos de manera eficiente y segura. Gestiona citas, historiales y trámites en un solo lugar.",
    imageSrc: "/placeholder.svg",
    color: "blue",
  },
  {
    id: 2,
    name: "Segurpay",
    description: "Sistema de pago digital inteligente diseñado específicamente para el sector asegurador. Simplifica transacciones y automatiza reconciliaciones.",
    imageSrc: "/placeholder.svg",
    color: "purple",
  },
  {
    id: 3,
    name: "Call Center AI",
    description: "Solución de inteligencia artificial que optimiza la atención al cliente en centros de llamadas. Reduce tiempos de espera y mejora la satisfacción.",
    imageSrc: "/placeholder.svg",
    color: "green",
  }
];

const SCROLL_SNAP_INTERVAL = 100; // vh units
const SCROLL_SNAP_THRESHOLD = 0.2; // 20% of the interval

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create a spring-animated version of scrollYProgress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform smooth progress into x position
  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 100}%`]
  );

  // Create opacity transforms for fade effects
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25],
    [1, 1, 0]
  );

  const projectsOpacity = useTransform(
    scrollYProgress,
    [0.9, 0.98],
    [1, 0]
  );

  // Snap scroll to nearest project
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!containerRef.current || isScrolling) return;
      
      clearTimeout(timeoutId);
      setIsScrolling(true);
      
      timeoutId = setTimeout(() => {
        const container = containerRef.current;
        if (!container) return;
        
        const scrollTop = window.scrollY - container.offsetTop;
        const containerHeight = container.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        const scrollProgress = scrollTop / (containerHeight - viewportHeight);
        const projectPosition = scrollProgress * projects.length;
        const nearestProject = Math.round(projectPosition);
        
        if (Math.abs(projectPosition - nearestProject) < SCROLL_SNAP_THRESHOLD) {
          const targetScroll = container.offsetTop + (nearestProject * viewportHeight);
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
          
          setActiveProject(nearestProject);
        }
        
        setIsScrolling(false);
      }, 150); // Debounce time
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolling]);

  // Update active project based on scroll position
  useEffect(() => {
    return scrollYProgress.on("change", latest => {
      const projectIndex = Math.min(
        Math.floor(latest * projects.length),
        projects.length - 1
      );
      setActiveProject(projectIndex);
    });
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-b from-white to-gray-50/50"
      style={{ 
        height: `${projects.length * SCROLL_SNAP_INTERVAL}vh`,
        scrollSnapType: 'y mandatory',
        scrollSnapPointsY: `repeat(${SCROLL_SNAP_INTERVAL}vh)`
      }}
    >
      {/* Header - Fixed at top with larger padding and gradient overlay */}
      <motion.div 
        style={{ opacity: headerOpacity }}
        className="sticky top-0 pt-24 pb-32 bg-gradient-to-b from-white via-white to-transparent z-10"
      >
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-px bg-gray-200 w-12"></div>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">Nuestros Proyectos</span>
              <div className="h-px bg-gray-200 w-12"></div>
            </motion.div>
            
            <TextReveal as="h2" className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Transformando el Sector Asegurador
            </TextReveal>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Exploramos soluciones innovadoras diseñadas para transformar la industria de seguros.
              Desde plataformas de salud hasta sistemas de pago y servicios automatizados.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Projects Container - Horizontal scroll controlled by vertical scroll */}
      <motion.div 
        style={{ opacity: projectsOpacity }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 0.1],
              [0, 0.75]
            )
          }}
        />
        
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none opacity-75"></div>
        
        <motion.div 
          className="flex w-full"
          style={{ x }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full px-6"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="container mx-auto">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
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
    </section>
  );
};

export default ProjectsSection;
