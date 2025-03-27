import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    blue: "bg-gradient-to-br from-blue-50/80 to-blue-100/50",
    purple: "bg-gradient-to-br from-purple-50/80 to-purple-100/50",
    green: "bg-gradient-to-br from-green-50/80 to-green-100/50",
  };
  
  const gradientClass = gradientMap[project.color as keyof typeof gradientMap] || gradientMap.blue;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full px-6">
      {/* Left Card: Project Info with Geometric Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl transform rotate-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl transform -rotate-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"></div>
        <div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-gray-100/50 p-8 h-full">
          {/* Geometric shapes */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full -mr-12 -mt-12 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100/50 to-transparent rounded-full -ml-16 -mb-16 blur-2xl"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Project details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <h3 className="text-3xl font-bold tracking-tight">{project.name}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
              </motion.div>
            </div>
            
            {/* Learn More button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-8"
            >
              <Button 
                variant="ghost"
                className="group px-0 font-medium text-gray-900 hover:text-gray-900 hover:bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Right Card: Phone Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full flex items-center justify-center"
      >
        <div className={`relative w-full h-full rounded-3xl ${gradientClass} p-8 flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-gray-100/50`}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
          
          {/* Phone container */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[280px] mx-auto"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/90 backdrop-blur-sm p-2">
              <img 
                src={project.imageSrc === "/placeholder.svg" ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" : project.imageSrc} 
                alt={`${project.name} screenshot`}
                className="w-full h-auto rounded-[1.5rem] object-cover aspect-[9/16]"
              />
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-200/80 rounded-full"></div>
            </div>
            
            {/* Floating effect & glow */}
            <div className="absolute -inset-8 bg-white/30 rounded-full blur-2xl -z-10 opacity-70"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
