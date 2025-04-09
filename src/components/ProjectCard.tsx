import React, { useState, useEffect } from 'react';
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Simplified touch detection, omitting passive option for TS compatibility
    const onTouchStart = () => {
      setIsTouchDevice(true);
      // Remove listener without options object
      window.removeEventListener('touchstart', onTouchStart);
    };
    
    // Add listener without options object
    window.addEventListener('touchstart', onTouchStart);
    
    // Cleanup listener without options object
    return () => window.removeEventListener('touchstart', onTouchStart);
  }, []);

  // Conditional Spring setup based on device type
  const rotateX = useSpring(isTouchDevice ? 0 : 10, springConfig);
  const rotateY = useSpring(isTouchDevice ? 0 : -10, springConfig);
  const cardDepth = useSpring(0, { stiffness: 100, damping: 30 });

  // Event handlers only active on non-touch devices
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
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
    if (isTouchDevice) return;
    setIsHovered(false);
    rotateX.set(10);
    rotateY.set(-10);
    cardDepth.set(0);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
    rotateX.set(0);
    rotateY.set(0);
    cardDepth.set(20);
  };

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
      {/* Left Card: Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
        onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
        onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
        className="relative h-full md:perspective-2000"
      >
        {!isTouchDevice && (
          <>
            <motion.div
              className="absolute inset-0 bg-gray-50 rounded-2xl md:rounded-3xl transform-gpu hidden md:block"
              style={{ rotateX, rotateY, z: -60, scale: 0.85, transformStyle: "preserve-3d", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.12), 0 30px 60px -30px rgba(0,0,0,0.15)" }}
            />
            <motion.div
              className="absolute inset-0 bg-gray-100 rounded-2xl md:rounded-3xl transform-gpu hidden md:block"
              style={{ rotateX, rotateY, z: -30, scale: 0.92, transformStyle: "preserve-3d", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.12), 0 30px 60px -30px rgba(0,0,0,0.15)" }}
            />
          </>
        )}
        
        <motion.div
          initial={isTouchDevice ? {} : { rotateX: 10, rotateY: -10 }}
          style={{
            rotateX: isTouchDevice ? 0 : rotateX,
            rotateY: isTouchDevice ? 0 : rotateY,
            transformStyle: "preserve-3d",
            scale: isHovered && !isTouchDevice ? 1.01 : 1,
            boxShadow: isTouchDevice 
              ? '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
              : useMotionTemplate`0 ${cardDepth}px 50px -15px rgba(0,0,0,0.15), 0 ${cardDepth}px 30px -15px rgba(0,0,0,0.1)`
          }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-2xl md:rounded-3xl border border-gray-100/50 p-6 md:p-8 h-full transform-gpu overflow-hidden"
        >
          {!isTouchDevice && (
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-3xl opacity-0 transition duration-300"
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
          )}
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-4 md:space-y-6" style={{ transform: isTouchDevice ? 'none' : "translateZ(40px)" }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 md:space-y-4"
              >
                <div className="flex items-center space-x-2 md:space-x-3">
                  <motion.div 
                    className={`w-2 h-2 rounded-full ${cardTheme.accent}`}
                    animate={{ scale: isHovered && !isTouchDevice ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${cardTheme.text}`}>{project.name}</h3>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{project.description}</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 md:pt-8 relative z-20"
              style={{ transform: isTouchDevice ? 'none' : "translateZ(50px)" }}
            >
              <Button 
                variant="ghost"
                className={`group relative px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-full border ${cardTheme.border} transition-all duration-400 md:hover:scale-105 md:hover:shadow-lg ${cardTheme.text} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${theme.primary} active:scale-95`}
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
                <span className="relative z-10 flex items-center">
                  Learn More 
                  <motion.div
                    animate={{ x: isHovered && !isTouchDevice ? 6 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center"
                  >
                    <ArrowRight className="ml-1.5 md:ml-2 h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-current"
                  style={{ opacity: 0.1 }}
                  initial={false}
                  animate={{ scale: isHovered && !isTouchDevice ? 1 : 0.95, opacity: isHovered && !isTouchDevice ? 0.15 : 0.1 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Right Card: Phone Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full flex items-center justify-center" 
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`relative w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-br ${cardTheme.primary} p-6 md:p-8 flex items-center justify-center overflow-hidden shadow-lg md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border ${cardTheme.border}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.6),transparent)] opacity-70 md:opacity-100"></div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 md:bg-white/20 rounded-full blur-xl md:blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 md:bg-white/20 rounded-full blur-xl md:blur-3xl"
          />
          
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[240px] sm:max-w-[280px] mx-auto"
          >
            <div className="rounded-2xl md:rounded-[2rem] overflow-hidden shadow-md md:shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/95 md:bg-white/90 backdrop-blur-sm p-1.5 md:p-2">
              <div className="relative">
                <img 
                  src={project.imageSrc === "/placeholder.svg" ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" : project.imageSrc} 
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto rounded-xl md:rounded-[1.5rem] object-cover aspect-[9/16]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-xl md:rounded-[1.5rem]"></div>
              </div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/4 md:w-1/3 h-0.5 md:h-1 bg-black/10 rounded-full backdrop-blur-sm"></div>
            </div>
            
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-br from-white/30 to-white/10 rounded-full blur-lg md:blur-2xl -z-10 opacity-50 md:opacity-70"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
