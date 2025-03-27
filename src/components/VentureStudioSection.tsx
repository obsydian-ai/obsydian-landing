
import TextReveal from './animations/TextReveal';
import { Separator } from '@/components/ui/separator';

const VentureStudioSection = () => {
  return (
    <section id="venture-section" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
            {/* Left column - Title and text with improved layout */}
            <div className="md:col-span-3 space-y-12">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-0.5 bg-black"></div>
                <TextReveal as="h2" className="text-lg font-medium uppercase tracking-wide">
                  Nuestra Visión
                </TextReveal>
              </div>
              
              <TextReveal as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
                Desarrollamos soluciones tecnológicas que impulsan la eficiencia y transformación del sector asegurador
              </TextReveal>
              
              <div className="space-y-8">
                <TextReveal className="text-xl leading-relaxed" delay={100}>
                  <p>
                    En Segurneo, creamos un puente entre la tradición del sector asegurador y las posibilidades ilimitadas de la 
                    transformación digital. Nuestra misión es hacer converger la experiencia y el conocimiento profundo del sector 
                    con las tecnologías más disruptivas.
                  </p>
                </TextReveal>
                
                <TextReveal className="text-xl leading-relaxed" delay={200}>
                  <p>
                    Desarrollamos soluciones a medida que responden a necesidades concretas. Impulsamos la eficiencia operativa, 
                    la experiencia del cliente y la generación de nuevos modelos de negocio, colaborando estrechamente con compañías 
                    aseguradoras para co-crear el futuro del sector.
                  </p>
                </TextReveal>
                
                <TextReveal className="text-xl leading-relaxed" delay={300}>
                  <p>
                    Como venture studio, no solo diseñamos soluciones—construimos empresas. Compartimos el riesgo y la recompensa del 
                    proceso emprendedor y trabajamos mano a mano con nuestros partners para impulsar la transformación digital desde adentro.
                  </p>
                </TextReveal>
              </div>
            </div>

            {/* Right column for future illustration if needed */}
            <div className="md:col-span-1 hidden md:flex justify-center items-start">
              <div className="w-full aspect-square">
                <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 20V180M20 100H180" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="100" cy="100" r="80" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M100 20C144.183 20 180 55.8172 180 100C180 144.183 144.183 180 100 180" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Statistics section with text reveal */}
            <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <TextReveal delay={400}>
                  <div className="text-4xl font-bold mb-2">+15</div>
                  <div className="text-sm text-gray-600">Proyectos lanzados</div>
                </TextReveal>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <TextReveal delay={500}>
                  <div className="text-4xl font-bold mb-2">+30M€</div>
                  <div className="text-sm text-gray-600">Ahorro generado</div>
                </TextReveal>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <TextReveal delay={600}>
                  <div className="text-4xl font-bold mb-2">+5</div>
                  <div className="text-sm text-gray-600">Ventures co-fundadas</div>
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
