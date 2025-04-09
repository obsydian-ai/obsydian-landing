import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, theme }) => {
  const gradientMap = {
    blue: {
      primary: "from-blue-500/20 to-blue-600/20",
      accent: "bg-blue-500",
      text: "text-blue-700",
      border: "border-blue-200/50"
    },
    purple: {
      primary: "from-purple-500/20 to-purple-600/20",
      accent: "bg-purple-500",
      text: "text-purple-700",
      border: "border-purple-200/50"
    },
    green: {
      primary: "from-green-500/20 to-green-600/20",
      accent: "bg-green-500",
      text: "text-green-700",
      border: "border-green-200/50"
    }
  };
  
  const cardTheme = gradientMap[project.color as keyof typeof gradientMap] || gradientMap.blue;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
      {/* Left Card: Project Info */}
      <div className="relative h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="relative bg-white rounded-2xl lg:rounded-3xl border border-gray-100/50 p-4 sm:p-6 lg:p-8 h-full overflow-hidden shadow-sm"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${cardTheme.accent}`} />
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight ${cardTheme.text}`}>
                    {project.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <Button 
                variant="ghost"
                className={`group relative px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base font-medium rounded-full border ${cardTheme.border} transition-colors ${cardTheme.text} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${theme.primary} active:scale-95`}
                onClick={() => {
                  const element = document.getElementById(`project-${project.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                role="button"
                aria-label={`Learn more about ${project.name}`}
              >
                <span className="flex items-center">
                  Learn More 
                  <ArrowRight className="ml-1 sm:ml-1.5 lg:ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Right Card: Phone Screenshot - Only visible on desktop */}
      <div className="relative h-full hidden lg:block">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="h-full flex items-center justify-center"
        >
          <div className={`relative w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-br ${cardTheme.primary} p-6 md:p-8 flex items-center justify-center overflow-hidden shadow-lg border ${cardTheme.border}`}>
            <div className="relative max-w-[240px] sm:max-w-[280px] mx-auto">
              <div className="rounded-2xl md:rounded-[2rem] overflow-hidden shadow-md bg-white/95 p-1.5 md:p-2">
                <div className="relative">
                  <img 
                    src={project.imageSrc === "/placeholder.svg" ? "/lovable-uploads/284ec182-b2fd-4316-9df7-2f1e0ba87234.png" : project.imageSrc} 
                    alt={`${project.name} screenshot`}
                    className="w-full h-auto rounded-xl md:rounded-[1.5rem] object-cover aspect-[9/16]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
