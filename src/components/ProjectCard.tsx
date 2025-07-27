import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Package, Factory } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

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
  isMobile?: boolean;
}

const springConfig = {
  stiffness: 150,
  damping: 25
};

// Icon mapping for each case
const getProjectIcon = (projectName: string) => {
  if (projectName.toLowerCase().includes('retail')) {
    return <Package className="w-16 h-16" />;
  } else if (projectName.toLowerCase().includes('logístic')) {
    return <TrendingUp className="w-16 h-16" />;
  } else if (projectName.toLowerCase().includes('industrial')) {
    return <Factory className="w-16 h-16" />;
  }
  return <Package className="w-16 h-16" />;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, theme, isMobile = false }) => {
  const { t } = useTranslation('ProjectsSection');
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
      primary: "from-primary-500/20 to-primary-600/20",
      secondary: "from-primary-400/10 to-primary-500/10",
      accent: "bg-primary-500",
      text: "text-primary-700",
      border: "border-primary-200/50",
      icon: "text-primary-600"
    },
    purple: {
      primary: "from-accent-500/20 to-accent-600/20",
      secondary: "from-accent-400/10 to-accent-500/10",
      accent: "bg-accent-500",
      text: "text-accent-700",
      border: "border-accent-200/50",
      icon: "text-accent-600"
    },
    green: {
      primary: "from-success-500/20 to-success-600/20",
      secondary: "from-success-400/10 to-success-500/10",
      accent: "bg-success-500",
      text: "text-success-700",
      border: "border-success-200/50",
      icon: "text-success-600"
    }
  };
  
  const cardTheme = gradientMap[project.color as keyof typeof gradientMap] || gradientMap.blue;
  
  if (isMobile) {
    return (
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Card container */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
          {/* Header with abstract design instead of image */}
          <div className="relative overflow-hidden rounded-t-[24px]">
            <div className="aspect-[3/2] relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${cardTheme.primary.replace('/20', '/30')}`}>
                {/* Geometric patterns */}
                <div className="absolute inset-0">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      color: project.color === 'blue' ? '#0ea5e9' : project.color === 'purple' ? '#e879f9' : '#22c55e'
                    }}
                  />
                  
                  {/* Floating geometric shapes */}
                  <div className={`absolute top-6 right-6 w-12 h-12 rounded-full ${cardTheme.accent} opacity-20`} />
                  <div className={`absolute bottom-8 left-8 w-6 h-6 ${cardTheme.accent} opacity-30 rotate-45`} />
                  <div className={`absolute top-1/2 left-1/2 w-16 h-16 border-2 ${cardTheme.border.replace('/50', '')} opacity-40 rounded-lg rotate-12`} />
                </div>
                
                {/* Central icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`${cardTheme.icon} opacity-60`}>
                    {getProjectIcon(project.name)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header with dot indicator */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className={`w-2 h-2 rounded-full ${theme.accent}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h3 className={`text-2xl font-bold tracking-tight ${theme.text}`}>
                {project.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {project.description}
            </p>

            {/* CTA Button */}
            <Button 
              variant="ghost"
              className={`
                group relative w-full py-4 font-medium
                rounded-2xl border transition-all duration-200
                ${theme.border} ${theme.text}
                active:scale-[0.98]
              `}
              onClick={() => {
                window.open('https://cal.com/Obsydian-demo/30min', '_blank');
              }}
              role="button"
              aria-label={`${t('requestDemo')} para ${project.name}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-base font-medium">
                {t('requestDemo')}
                <ArrowRight className="w-5 h-5" />
              </span>
              <motion.div
                className={`absolute inset-0 rounded-2xl ${theme.background}`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Desktop layout
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
        {/* Card layers */}
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
          {/* Spotlight effect */}
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
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between transform-gpu">
            <div className="space-y-6" style={{ transform: "translateZ(40px)" }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className={`w-2 h-2 rounded-full ${cardTheme.accent}`}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <h3 className={`text-3xl font-bold tracking-tight ${cardTheme.text}`}>{project.name}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
              </motion.div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-8 relative z-20"
              style={{ transform: "translateZ(50px)" }}
            >
              <Button 
                variant="ghost"
                className={`group relative px-6 py-3 font-medium rounded-full border ${cardTheme.border} transition-all duration-400 hover:scale-105 hover:shadow-lg ${cardTheme.text} focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95`}
                onClick={() => {
                  window.open('https://cal.com/Obsydian-demo/30min', '_blank');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open('https://cal.com/Obsydian-demo/30min', '_blank');
                  }
                }}
                role="button"
                aria-label={`${t('requestDemo')} para ${project.name}`}
                tabIndex={0}
              >
                <span className="relative z-10 flex items-center justify-center w-full pointer-events-auto">
                  {t('requestDemo')}
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
      
      {/* Right Card: Abstract Visual Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full flex items-center justify-center perspective-1000 min-h-[500px]"
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
          className={`relative w-full h-full rounded-3xl bg-gradient-to-br ${cardTheme.primary} p-12 flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border ${cardTheme.border}`}
        >
          {/* Background patterns */}
          <div className="absolute inset-0">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                color: project.color === 'blue' ? '#0ea5e9' : project.color === 'purple' ? '#e879f9' : '#22c55e'
              }}
            />
            
            {/* Geometric shapes */}
            <div className={`absolute top-12 right-12 w-24 h-24 rounded-full ${cardTheme.accent} opacity-10`} />
            <div className={`absolute bottom-20 left-16 w-16 h-16 ${cardTheme.accent} opacity-20 rotate-45`} />
            <div className={`absolute top-1/3 left-1/4 w-32 h-32 border-4 ${cardTheme.border.replace('/50', '')} opacity-30 rounded-2xl rotate-12`} />
            <div className={`absolute bottom-1/3 right-1/4 w-20 h-20 border-2 ${cardTheme.border.replace('/50', '')} opacity-40 rounded-full`} />
          </div>

          {/* Central icon with animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <motion.div 
              className={`${cardTheme.icon} opacity-70`}
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {getProjectIcon(project.name)}
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className={`absolute w-8 h-8 rounded-full ${cardTheme.accent} opacity-30`}
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '20%', left: '70%' }}
          />
          
          <motion.div
            className={`absolute w-6 h-6 ${cardTheme.accent} opacity-40 rotate-45`}
            animate={{
              x: [0, -15, 25, 0],
              y: [0, 20, -5, 0],
              rotate: [45, 90, 135, 45]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ bottom: '30%', left: '20%' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
