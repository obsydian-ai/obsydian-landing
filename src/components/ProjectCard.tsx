
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
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left side: Project info */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
          </div>
          
          <div className="space-y-6">
            <AnimatedComponent projectId={project.id} />
            
            <Button variant="link" className="p-0 h-auto font-medium flex items-center gap-2 text-black hover:no-underline" onClick={() => alert("Coming Soon")}>
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Right side: Project screenshot */}
        <div 
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gradientColors[colorIndex][0]}, ${gradientColors[colorIndex][1]})`,
          }}
        >
          <div className="flex items-center justify-center h-full p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-48 max-w-full"
            >
              <div className="rounded-xl overflow-hidden shadow-md bg-white p-1">
                <img 
                  src={project.imageSrc === "/placeholder.svg" ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" : project.imageSrc} 
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto rounded-lg object-cover aspect-[9/16]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
