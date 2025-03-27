
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    color?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Custom gradients based on project color
  const gradientMap = {
    blue: ["from-blue-50 to-blue-100", "bg-blue-50"],
    purple: ["from-purple-50 to-purple-100", "bg-purple-50"],
    green: ["from-green-50 to-green-100", "bg-green-50"],
  };
  
  // Default to blue if no color is specified or if the color is not in the map
  const gradientClass = gradientMap[project.color as keyof typeof gradientMap]?.[0] || "from-blue-50 to-blue-100";
  const bgClass = gradientMap[project.color as keyof typeof gradientMap]?.[1] || "bg-blue-50";
  
  // Custom clip path for geometric design
  const clipPaths = [
    "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)",
    "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)"
  ];
  
  const clipPathIndex = (project.id - 1) % clipPaths.length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Left Card: Project Info with Geometric Design */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] h-full"
        style={{ 
          clipPath: clipPaths[clipPathIndex],
        }}
      >
        {/* Card content */}
        <div className="p-10 h-full flex flex-col justify-between relative z-10 bg-white">
          {/* Top section with project details */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold mb-4"
            >
              {project.name}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 mb-8 text-lg"
            >
              {project.description}
            </motion.p>
          </div>
          
          {/* Bottom section with animation and button */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-24"
            >
              <AnimatedComponent projectId={project.id} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ x: 3 }}
            >
              <Button 
                variant="link" 
                className="p-0 h-auto font-medium flex items-center gap-2 text-black hover:no-underline group" 
                onClick={() => alert("Coming Soon")}
              >
                Learn More 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/60 via-gray-100/30 to-transparent rounded-full -mr-20 -mt-20 z-0"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-white/60 via-gray-100/30 to-transparent rounded-full -ml-30 -mb-30 z-0"></div>
          
          {/* Subtle border light effect */}
          <div className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Right Card: Phone Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden ${bgClass}`}
      >
        <div className={`h-full w-full bg-gradient-to-br ${gradientClass} p-10 flex items-center justify-center`}>
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Phone container with shadow */}
            <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white p-2 relative">
              {/* Shimmer effect */}
              <div className="absolute inset-0 w-full h-full shimmer pointer-events-none"></div>
              
              {/* Phone screen */}
              <img 
                src={project.imageSrc === "/placeholder.svg" ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" : project.imageSrc} 
                alt={`${project.name} screenshot`}
                className="w-full h-auto rounded-[1.5rem] object-cover aspect-[9/16] max-w-[280px]"
              />
              
              {/* Phone details */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-200 rounded-full"></div>
            </div>
            
            {/* Floating effect & glow */}
            <div className="absolute -inset-8 bg-white/30 rounded-full blur-2xl -z-10 opacity-70"></div>
            
            {/* Subtle reflections */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/30 rounded-full blur-lg"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
