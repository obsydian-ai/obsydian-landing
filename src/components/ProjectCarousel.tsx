
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    name: "Saludneo",
    description: "Plataforma de salud digital para asegurados",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Segurpay",
    description: "Sistema de pago digital para servicios de seguros",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Call Center AI",
    description: "Proyecto de Automatización de Call Center",
    imageSrc: "/placeholder.svg",
  }
];

const ProjectCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Enable horizontal scrolling with trackpad
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!carouselRef.current || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaX;
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative" ref={carouselRef}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-4 basis-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="p-1"
              >
                <ProjectCard project={project} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-end gap-4 mt-8">
          <CarouselPrevious className="relative static left-auto translate-y-0 rounded-full h-12 w-12 border-black/10 bg-white hover:bg-gray-50 transition-all" />
          <CarouselNext className="relative static right-auto translate-y-0 rounded-full h-12 w-12 border-black/10 bg-white hover:bg-gray-50 transition-all" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
