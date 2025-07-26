import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
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
      <ProjectsSection />
      <ProductFeatureSection />
      <ContactSection />
      <FooterNew />
    </div>
  );
};

export default Index;
