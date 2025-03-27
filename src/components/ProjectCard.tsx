
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
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Animated gradient colors for background
  const gradientColors = [
    ["#f5f5f5", "#e5e5e5"],
    ["#f0f0ff", "#e0e0ff"],
    ["#fff5f5", "#ffe5e5"]
  ];
  
  // Select gradient based on project ID
  const colorIndex = (project.id - 1) % gradientColors.length;
  
  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),0_0px_1px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08),0_0px_2px_rgb(0,0,0,0.1)] transition-all duration-500 bg-white relative">
      {/* Subtle border light effect */}
      <div className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left side: Project info */}
        <div className="p-8 md:p-12 flex flex-col justify-between relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
            <p className="text-gray-600 mb-8 text-lg">{project.description}</p>
          </motion.div>
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedComponent projectId={project.id} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="link" className="p-0 h-auto font-medium flex items-center gap-2 text-black hover:no-underline group" onClick={() => alert("Coming Soon")}>
                Learn More 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
          
          {/* Subtle background shine effect */}
          <div className="absolute -top-[200px] -left-[100px] w-[500px] h-[500px] bg-gradient-to-br from-white via-gray-50 to-transparent rounded-full opacity-40 blur-3xl pointer-events-none"></div>
        </div>
        
        {/* Right side: Project screenshot */}
        <div 
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gradientColors[colorIndex][0]}, ${gradientColors[colorIndex][1]})`,
          }}
        >
          <div className="flex items-center justify-center h-full p-6 md:p-12">
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 max-w-full"
            >
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-1 relative">
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 w-full h-full shimmer pointer-events-none"></div>
                
                <img 
                  src={project.imageSrc === "/placeholder.svg" ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" : project.imageSrc} 
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto rounded-lg object-cover aspect-[9/16]"
                />
              </div>
              
              {/* Subtle glow effect behind the phone */}
              <div className="absolute -inset-4 bg-white/30 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
