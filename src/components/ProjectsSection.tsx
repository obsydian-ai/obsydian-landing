
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ProjectCarousel from '@/components/ProjectCarousel';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-200 w-16"></div>
            <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">Projects</span>
          </div>
          <TextReveal as="h2" className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </TextReveal>
          <p className="text-gray-600 max-w-2xl">
            Explore our innovative solutions designed to transform the insurance industry. 
            From health platforms to payment systems and automated services.
          </p>
        </div>

        <ProjectCarousel />
      </div>
    </section>
  );
};

export default ProjectsSection;
