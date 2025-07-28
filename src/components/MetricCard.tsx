import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  subtitle?: string;
}

// Hook para animación de contador con intersection observer
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(end * easeOut));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
};

const MetricCard = ({ value, label, description, subtitle }: MetricCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;
  const prefix = value.match(/^\+/) ? '+' : '';
  const suffix = value.replace(/^\+?\d+/, '');
  
  const { count: animatedCount, ref } = useCountUp(numericValue, 2500);

  return (
    <motion.div
      ref={ref}
      className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-500 hover:shadow-2xl w-full h-full flex flex-col hover:bg-white/15"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        y: -4
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Layout principal - idéntico al HeroSection */}
      <div className="flex items-start gap-8 relative z-10 flex-1">
        
        {/* Número y label */}
        <div className="flex-shrink-0 relative">
          {/* Display principal */}
          <motion.div 
            className="text-6xl md:text-7xl font-black leading-none mb-3 relative"
            style={{ 
              color: '#0ea5e9',
              letterSpacing: '-0.02em',
              textShadow: isHovered ? '0 0 30px rgba(14, 165, 233, 0.6)' : '0 0 20px rgba(14, 165, 233, 0.3)'
            }}
            animate={{
              textShadow: isHovered ? 
                ['0 0 20px rgba(14, 165, 233, 0.3)', '0 0 30px rgba(14, 165, 233, 0.6)', '0 0 20px rgba(14, 165, 233, 0.3)'] :
                '0 0 20px rgba(14, 165, 233, 0.3)'
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          >
            {prefix}{animatedCount}{suffix}
          </motion.div>
          
          {/* Label descriptivo */}
          <motion.div 
            className="text-base font-medium leading-tight max-w-[180px] text-left text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {label}
          </motion.div>
          
          {/* Subtitle opcional */}
          {subtitle && (
            <div className="text-sm text-white/60 font-medium mt-2 text-left">
              {subtitle}
            </div>
          )}
        </div>

        {/* Descripción */}
        <div className="flex-1 pt-0 relative flex flex-col justify-between">
          <p className="text-base text-white/80 leading-relaxed mb-4 flex-1">
            {description}
          </p>

          {/* Indicadores de estado minimalistas */}
          <div className="flex items-center justify-end mt-auto">
            {/* Barra de progreso sutil */}
            <motion.div 
              className="w-16 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((numericValue / 100) * 100, 100)}%` }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Efectos de borde idénticos al HeroSection */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(2,132,199,0.1) 50%, rgba(14,165,233,0.2) 100%),
            radial-gradient(circle at 20% 20%, rgba(14,165,233,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(14,165,233,0.1) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%, 100% 100%, 100% 100%',
          animation: 'gradient-x 4s ease-in-out infinite',
          padding: '1px',
          zIndex: -1
        }}
      >
        <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-sm"></div>
      </div>

      {/* Efecto shimmer idéntico al HeroSection */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"
        style={{
          background: 'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.1) 40%, rgba(14,165,233,0.1) 60%, transparent 80%)',
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%', '0% 0%'] : '0% 0%'
        }}
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default MetricCard; 