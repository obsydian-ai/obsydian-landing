import React from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

const ContactSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:hi@segurneo.com';
  };

  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Curva de ease personalizada para animaciones más suaves
  const customEase = cubicBezier(0.32, 0, 0.67, 0);

  // Animaciones de las tarjetas con transformaciones más suaves y más lentas
  const card1Transform = {
    y: useTransform(scrollYProgress, [0.3, 0.45], [0, -1200], {
      ease: customEase
    })
  };
  
  const card2Transform = {
    y: useTransform(scrollYProgress, [0.4, 0.55], [0, -1200], {
      ease: customEase
    }),
    rotate: -3
  };
  
  const card3Transform = {
    y: useTransform(scrollYProgress, [0.5, 0.65], [0, -1200], {
      ease: customEase
    }),
    rotate: -6
  };

  // Componente de botón reutilizable
  const ContactButton = ({ style, className = "", delay = 0 }) => (
    <motion.button
      onClick={handleContactClick}
      className={`
        relative
        w-full
        bg-white/95
        backdrop-blur-sm
        rounded-[32px]
        py-8 md:py-10
        px-12 md:px-16
        text-2xl md:text-3xl
        font-medium
        text-black
        shadow-lg
        transition-all
        duration-300
        cursor-pointer
        overflow-hidden
        group
        ${className}
      `}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        ...style,
        transform: `${style?.transform || ''} translateZ(0)`,
        willChange: 'transform'
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {/* Efecto de hover */}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      {/* Efecto de click */}
      <motion.div
        className="absolute inset-0 bg-black/5 rounded-[32px] opacity-0 group-active:opacity-100 transition-opacity duration-150"
        initial={false}
      />

      {/* Contenido del botón */}
      <div className="relative flex items-center justify-center gap-2">
        <span>Contact us</span>
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="group-hover:translate-x-1 transition-transform duration-200"
        >
          →
        </motion.span>
      </div>
    </motion.button>
  );

  return (
    <section ref={sectionRef} className="relative bg-black min-h-[200vh]">
      {/* Contenedor principal sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Texto de fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-8">
          <motion.h2 
            className="text-[18vw] font-bold text-white select-none leading-[0.85] text-center whitespace-nowrap"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contacta
            <br />
            con nosotros
          </motion.h2>
        </div>

        {/* Mazo de botones */}
        <div className="relative w-full max-w-md mx-auto px-8 [perspective:1000px]">
          {/* Botón 3 (fondo) */}
          <div className="absolute top-4 left-4 w-full origin-top [transform-style:preserve-3d]">
            <ContactButton 
              style={card3Transform}
              delay={0.4}
            />
          </div>

          {/* Botón 2 (medio) */}
          <div className="absolute top-2 left-2 w-full origin-top [transform-style:preserve-3d]">
            <ContactButton 
              style={card2Transform}
              delay={0.2}
            />
          </div>

          {/* Botón 1 (frente) */}
          <div className="relative w-full [transform-style:preserve-3d]">
            <ContactButton 
              style={card1Transform}
              delay={0}
            />
          </div>
        </div>
      </div>

      {/* Espacio para scroll - reducido para que los botones desaparezcan antes */}
      <div className="h-[100vh]" />
    </section>
  );
};

export default ContactSection; 