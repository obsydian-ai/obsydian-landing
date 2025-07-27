import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VentureStudioSection = () => {
  const { t } = useTranslation('VentureStudioSection');

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Ajustamos los rangos para que el efecto sea más suave y legible
  // const titleProgress1 = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  // const titleProgress2 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  // const titleProgress3 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  // const titleProgress4 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  // const titleProgress5 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  // const paragraph1Progress = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  // const paragraph2Progress = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  // const paragraph3Progress = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  const statsOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  // const RevealWord = ({ word, progress }: { word: string; progress: any }) => { ... };

  const RevealLine = ({ textKey, className, isTitle = false }: { textKey: string; className?: string; isTitle?: boolean }) => {
    const revealedText = t(textKey);
    const lineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: lineScrollYProgress } = useScroll({
      target: lineRef,
      offset: ["start end", "end end"]
    });

    const clipProgress = useTransform(lineScrollYProgress, v => Math.max(0, Math.min(1, v)));

    return (
      <div ref={lineRef} className={`${className} relative overflow-hidden ${isTitle ? 'h-[1.1em]' : 'leading-tight'}`}>
                    <span className="text-neutral-300 block" aria-hidden="true">{revealedText}</span>
        <motion.span
          className="absolute left-0 top-0 right-0 text-black"
          style={{
            clipPath: useTransform(clipProgress, [0, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']),
            WebkitClipPath: useTransform(clipProgress, [0, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'])
          }}
          aria-hidden="true"
        >
          {revealedText}
        </motion.span>
        <span className="sr-only">{revealedText}</span>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef} 
      id="mission-section" 
      className="relative bg-white"
    >
      <div className="md:sticky md:top-0 md:min-h-screen flex items-center">
        <div className="w-full py-12 sm:py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Columna izquierda con texto */}
              <div className="md:col-span-8 space-y-6 md:space-y-8">
                {/* Etiqueta de sección */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 md:space-x-4"
                >
                  <div className="w-8 md:w-12 h-0.5 bg-black"></div>
                  <span className="text-sm md:text-base font-medium uppercase tracking-wide">
                    {t('sectionTag')}
                  </span>
                </motion.div>

                {/* Título principal con revelado progresivo */}
                <div className="space-y-0">
                  <RevealLine 
                    textKey="titlePart1"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    isTitle={true}
                  />
                  <RevealLine 
                    textKey="titlePart2"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    isTitle={true}
                  />
                  <RevealLine 
                    textKey="titlePart3"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    isTitle={true}
                  />
                  <RevealLine 
                    textKey="titlePart4"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    isTitle={true}
                  />
                </div>

                {/* Párrafos con revelado progresivo */}
                <div className="mt-4 md:mt-6 space-y-[1.35rem]">
                  <RevealLine 
                    textKey="paragraph1"
                    className="text-base md:text-lg lg:text-xl text-neutral-700"
                    isTitle={false}
                  />
                  <RevealLine 
                    textKey="paragraph2"
                    className="text-base md:text-lg lg:text-xl text-neutral-700"
                    isTitle={false}
                  />
                  <RevealLine 
                    textKey="paragraph3"
                    className="text-base md:text-lg lg:text-xl text-neutral-700"
                    isTitle={false}
                  />
                </div>
              </div>

              {/* Columna derecha con ilustración */}
              <div className="md:col-span-4 relative mt-8 md:mt-0">
                <motion.div 
                  style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [20, -20]),
                    rotate: useTransform(scrollYProgress, [0, 1], [3, -3]),
                    scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
                  }}
                  className="md:sticky md:top-1/2 md:-translate-y-1/2 w-3/4 mx-auto md:w-full"
                >
                  {/* Nueva ilustración con diseño moderno */}
                  <div className="relative w-full aspect-square">
                    {/* Círculos decorativos */}
                    <div className="absolute inset-0">
                      <motion.div 
                        style={{
                          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.15, 0.05])
                        }}
                        className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-full blur-lg md:blur-xl"
                      />
                      <motion.div 
                        style={{
                          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.15, 0.05])
                        }}
                        className="absolute bottom-0 left-0 w-28 h-28 md:w-40 md:h-40 bg-accent-100 rounded-full blur-lg md:blur-xl"
                      />
                      <motion.div 
                        style={{
                          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 bg-neutral-100 rounded-full blur-lg md:blur-xl"
                      />
                    </div>

                    {/* Elementos geométricos */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-2/3 md:w-3/4 h-2/3 md:h-3/4">
                        <motion.div 
                          style={{
                            rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
                          }}
                          className="absolute inset-0 border-2 md:border-4 border-black rounded-2xl md:rounded-3xl"
                        />
                        <motion.div 
                          style={{
                            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])
                          }}
                          className="absolute inset-2 md:inset-4 border-2 md:border-4 border-primary-500 rounded-full"
                        />
                        <motion.div 
                          style={{
                            rotate: useTransform(scrollYProgress, [0, 1], [45, 225])
                          }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-1/2 h-1/2 bg-accent-500 opacity-10 md:opacity-20 transform rotate-45" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureStudioSection;
