
import React from 'react';
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
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-4 md:basis-2/3 lg:basis-3/5">
              <div className="p-1">
                <ProjectCard project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-8">
          <CarouselPrevious className="relative static left-auto translate-y-0 rounded-full" />
          <CarouselNext className="relative static right-auto translate-y-0 rounded-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
