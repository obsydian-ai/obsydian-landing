import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VentureStudioSection from '@/components/VentureStudioSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechConsultancySection from '@/components/TechConsultancySection';
import ProductFeatureSection from '@/components/ProductFeatureSection';
import ContactSection from '@/components/ContactSection';
import FooterNew from '@/components/FooterNew';
import { motion } from 'framer-motion';

const Index = () => {
  // Smooth reveal effect for page load
  useEffect(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <VentureStudioSection />
      <ProjectsSection />
      <TechConsultancySection />
      <ProductFeatureSection />
      <ContactSection />
      <FooterNew />
    </div>
  );
};

export default Index;
