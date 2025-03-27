
import TextReveal from './animations/TextReveal';
import { Separator } from '@/components/ui/separator';

const VentureStudioSection = () => {
  return (
    <section id="venture-section" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Section title with text reveal */}
            <div className="space-y-4">
              <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Nuestra Visión como Corporate Venture Studio
              </TextReveal>
              <Separator className="bg-gray-200" />
            </div>

            {/* Paragraph with text reveal - with cascading delays */}
            <div className="space-y-8">
              <TextReveal className="text-lg sm:text-xl leading-relaxed" delay={100}>
                <p>
                  En Segurneo, creamos un puente entre la tradición del sector asegurador y las posibilidades ilimitadas de la 
                  transformación digital. Nuestra misión es hacer converger la experiencia y el conocimiento profundo del sector 
                  con las tecnologías más disruptivas.
                </p>
              </TextReveal>
              
              <TextReveal className="text-lg sm:text-xl leading-relaxed" delay={200}>
                <p>
                  Desarrollamos soluciones a medida que responden a necesidades concretas. Impulsamos la eficiencia operativa, 
                  la experiencia del cliente y la generación de nuevos modelos de negocio, colaborando estrechamente con compañías 
                  aseguradoras para co-crear el futuro del sector.
                </p>
              </TextReveal>
              
              <TextReveal className="text-lg sm:text-xl leading-relaxed" delay={300}>
                <p>
                  Como venture studio, no solo diseñamos soluciones—construimos empresas. Compartimos el riesgo y la recompensa del 
                  proceso emprendedor y trabajamos mano a mano con nuestros partners para impulsar la transformación digital desde adentro.
                </p>
              </TextReveal>
            </div>

            {/* Statistics section with text reveal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
