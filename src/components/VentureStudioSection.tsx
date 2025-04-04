import TextReveal from './animations/TextReveal';
import MarkerTextReveal from './animations/MarkerTextReveal';
import { motion } from 'framer-motion';

const VentureStudioSection = () => {
  return (
    <section id="venture-section" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column with title and description - taking more space to match Paid.ai */}
            <div className="md:col-span-8 space-y-12">
              {/* Section label with horizontal line - matching Paid.ai */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-black"></div>
                <MarkerTextReveal as="h2" className="text-base font-medium uppercase tracking-wide">
                  Nuestra Visión
                </MarkerTextReveal>
              </div>
              
              {/* Large title with improved typography to match Paid.ai */}
              <MarkerTextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <div>Desarrollamos soluciones</div>
                <div>tecnológicas que impulsan</div>
                <div>la eficiencia y</div>
                <div>transformación del sector</div>
                <div>asegurador</div>
              </MarkerTextReveal>
              
              {/* Text paragraphs with improved spacing and marker reveal effect */}
              <div className="space-y-6 mt-8">
                <MarkerTextReveal className="text-xl md:text-2xl leading-relaxed">
                  <p>
                    En Segurneo, creamos un puente entre la tradición del sector asegurador y las posibilidades ilimitadas de la 
                    transformación digital. Nuestra misión es hacer converger la experiencia y el conocimiento profundo del sector 
                    con las tecnologías más disruptivas.
                  </p>
                </MarkerTextReveal>
                
                <MarkerTextReveal className="text-xl md:text-2xl leading-relaxed">
                  <p>
                    Desarrollamos soluciones a medida que responden a necesidades concretas. Impulsamos la eficiencia operativa, 
                    la experiencia del cliente y la generación de nuevos modelos de negocio, colaborando estrechamente con compañías 
                    aseguradoras para co-crear el futuro del sector.
                  </p>
                </MarkerTextReveal>
                
                <MarkerTextReveal className="text-xl md:text-2xl leading-relaxed">
                  <p>
                    Como venture studio, no solo diseñamos soluciones—construimos empresas. Compartimos el riesgo y la recompensa del 
                    proceso emprendedor y trabajamos mano a mano con nuestros partners para impulsar la transformación digital desde adentro.
                  </p>
                </MarkerTextReveal>
              </div>
            </div>

            {/* Right column for illustration, similar to Paid.ai style */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full">
                <div className="relative h-full flex items-center justify-center">
                  {/* Simple illustration similar to Paid.ai style */}
                  <svg className="w-full max-w-xs" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Coin symbol */}
                    <circle cx="200" cy="120" r="70" stroke="black" strokeWidth="6" />
                    <text x="200" y="140" textAnchor="middle" fontSize="90" fontWeight="bold" fill="black">$</text>
                    
                    {/* Steps/blocks like in Paid.ai */}
                    <rect x="70" y="200" width="60" height="20" fill="black" />
                    <rect x="90" y="180" width="60" height="20" fill="black" />
                    <rect x="110" y="160" width="60" height="20" fill="black" />
                    <rect x="130" y="140" width="60" height="20" fill="black" />
                    
                    {/* Simple character */}
                    <circle cx="70" cy="120" r="25" fill="black" /> {/* Head */}
                    <rect x="50" y="145" width="40" height="60" fill="black" /> {/* Body */}
                    <rect x="40" y="165" width="15" height="40" fill="black" /> {/* Left arm */}
                    <rect x="85" y="165" width="15" height="30" transform="rotate(-30 85 165)" fill="black" /> {/* Right arm */}
                    <rect x="50" y="205" width="15" height="40" fill="black" /> {/* Left leg */}
                    <rect x="75" y="205" width="15" height="40" fill="black" /> {/* Right leg */}
                  </svg>
                </div>
              </div>
            </div>

            {/* Statistics section with larger numbers and improved layout */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 text-center">
                <TextReveal delay={500}>
                  <div className="text-5xl md:text-6xl font-bold mb-3">+15</div>
                  <div className="text-lg text-gray-600">Proyectos lanzados</div>
                </TextReveal>
              </div>
              <div className="bg-white p-6 text-center">
                <TextReveal delay={600}>
                  <div className="text-5xl md:text-6xl font-bold mb-3">+30M€</div>
                  <div className="text-lg text-gray-600">Ahorro generado</div>
                </TextReveal>
              </div>
              <div className="bg-white p-6 text-center">
                <TextReveal delay={700}>
                  <div className="text-5xl md:text-6xl font-bold mb-3">+5</div>
                  <div className="text-lg text-gray-600">Ventures co-fundadas</div>
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureStudioSection;
