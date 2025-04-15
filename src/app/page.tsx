import React from 'react';
import ProductFeatureSection from '@/components/ProductFeatureSection';
import VentureStudioSection from '@/components/VentureStudioSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <main>
      <VentureStudioSection />
      <ProjectsSection />
      <ProductFeatureSection />
    </main>
  );
} 