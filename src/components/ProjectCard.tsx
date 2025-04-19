import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Theme {
  text: string;
  border: string;
  background: string;
  primary: string;
  accent: string;
}

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    color: string;
  };
  isActive: boolean;
  theme: Theme;
}

const springConfig = {
  stiffness: 150,
  damping: 25
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(10, springConfig);
  const rotateY = useSpring(-10, springConfig);
  const cardDepth = useSpring(0, {
    stiffness: 100,
    damping: 30
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    
    // Reducimos el multiplicador para un movimiento más suave
    const multiplier = 20;
    const centerX = width / 2;
    const centerY = height / 2;
    
    rotateX.set((y - centerY) / centerY * multiplier);
    rotateY.set((x - centerX) / centerX * multiplier);
    cardDepth.set(20);
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Posición inicial más sutil
    rotateX.set(10);
    rotateY.set(-10);
    cardDepth.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    rotateX.set(0);
    rotateY.set(0);
    cardDepth.set(20);
  };

  // Custom gradients based on project color
  const gradientMap = {
    blue: {
      primary: "from-blue-500/20 to-blue-600/20",
      secondary: "from-blue-400/10 to-blue-500/10",
      accent: "bg-blue-500",
      text: "text-blue-700",
      border: "border-blue-200/50"
    },
    purple: {
      primary: "from-purple-500/20 to-purple-600/20",
      secondary: "from-purple-400/10 to-purple-500/10",
      accent: "bg-purple-500",
      text: "text-purple-700",
      border: "border-purple-200/50"
    },
    green: {
      primary: "from-green-500/20 to-green-600/20",
      secondary: "from-green-400/10 to-green-500/10",
      accent: "bg-green-500",
      text: "text-green-700",
      border: "border-green-200/50"
    }
  };
  
  const cardTheme = gradientMap[project.color as keyof typeof gradientMap] || gradientMap.blue;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full px-6">
      {/* Left Card: Project Info with enhanced 3D effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full perspective-2000"
      >
        {/* Card layers and content */}
        <motion.div
          className="absolute inset-0 bg-gray-50 rounded-3xl transform-gpu"
          style={{
            rotateX,
            rotateY,
            z: -60,
            scale: 0.85,
            transformStyle: "preserve-3d",
            boxShadow: "0 50px 100px -20px rgba(0,0,0,0.12), 0 30px 60px -30px rgba(0,0,0,0.15)"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gray-100 rounded-3xl transform-gpu"
          style={{
            rotateX,
            rotateY,
            z: -30,
            scale: 0.92,
            transformStyle: "preserve-3d",
            boxShadow: "0 50px 100px -20px rgba(0,0,0,0.12), 0 30px 60px -30px rgba(0,0,0,0.15)"
          }}
        />
        
        {/* Main card */}
        <motion.div
          initial={{ rotateX: 10, rotateY: -10 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            scale: isHovered ? 1.01 : 1,
            boxShadow: useMotionTemplate`0 ${cardDepth}px 50px -15px rgba(0,0,0,0.15), 0 ${cardDepth}px 30px -15px rgba(0,0,0,0.1)`
          }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-3xl border border-gray-100/50 p-8 h-full transform-gpu"
        >
          {/* Spotlight effect más sutil */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  1200px circle at ${mouseX}px ${mouseY}px,
                  ${cardTheme.primary},
                  transparent 70%
                )
              `,
              opacity: isHovered ? 0.6 : 0
            }}
          />
          
          {/* Elementos internos con elevación ajustada */}
          <div className="relative z-10 h-full flex flex-col justify-between transform-gpu">
            <div className="space-y-6" style={{ transform: "translateZ(40px)" }}> {/* Reducimos la elevación */}
              <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className={`w-2 h-2 rounded-full ${cardTheme.accent}`}
                    animate={{ scale: isHovered ? 1.1 : 1 }} // Reducimos la escala
                    transition={{ duration: 0.4 }}
                  />
                  <h3 className={`text-3xl font-bold tracking-tight ${cardTheme.text}`}>{project.name}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
              </motion.div>
            </div>
            
            {/* Botón con elevación ajustada y mejor accesibilidad */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-8 relative z-20"
              style={{ transform: "translateZ(50px)" }}
            >
              <Button 
                variant="ghost"
                className={`group relative px-6 py-3 font-medium rounded-full border ${cardTheme.border} transition-all duration-400 hover:scale-105 hover:shadow-lg ${cardTheme.text} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${cardTheme.text} active:scale-95`}
                onClick={() => {
                  const element = document.getElementById(`project-${project.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    const element = document.getElementById(`project-${project.id}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                role="button"
                aria-label={`Learn more about ${project.name}`}
                tabIndex={0}
              >
                <span className="relative z-10 flex items-center justify-center w-full pointer-events-auto">
                  Coming soon
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-current"
                  style={{ opacity: 0.1 }}
                  initial={false}
                  animate={{ scale: isHovered ? 1 : 0.95, opacity: isHovered ? 0.15 : 0.1 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Right Card: Screenshot with enhanced floating effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full flex items-center justify-center perspective-1000"
      >
        <motion.div 
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`relative w-full h-full rounded-3xl bg-gradient-to-br ${cardTheme.primary} p-8 flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border ${cardTheme.border}`}
          style={{
            minHeight: project.name === "Call Center AI" ? "600px" : "auto"
          }}
        >
          {/* Dynamic background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
          
          {/* Phone/Desktop container with reflection effect */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${project.name === "Call Center AI" ? 'w-full max-w-[95%]' : 'max-w-[280px]'} mx-auto`}
          >
            <div className={`rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/90 backdrop-blur-sm ${
              project.name === "Call Center AI" ? 'p-3' : 'p-2'
            }`}>
              <div className="relative">
                <img 
                  src={
                    project.name === "Saludneo" 
                      ? "/lovable-uploads/saludneo-onboarding-new.webp"
                      : project.name === "Call Center AI"
                      ? "/lovable-uploads/call-center-ai.png"
                      : project.imageSrc === "/placeholder.svg" 
                        ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" 
                        : project.imageSrc
                  } 
                  alt={`${project.name} screenshot`}
                  className={`w-full h-auto rounded-[1.5rem] ${
                    project.name === "Call Center AI" 
                      ? 'aspect-[16/9] object-cover scale-105' 
                      : 'aspect-[9/19] object-contain'
                  }`}
                  style={{
                    maxHeight: project.name === "Call Center AI" ? "450px" : "calc(100vh - 200px)",
                    objectPosition: "top center"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 rounded-[1.5rem]"></div>
              </div>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-white/40 to-white/20 rounded-full blur-2xl -z-10 opacity-70"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
