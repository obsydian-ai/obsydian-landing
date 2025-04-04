import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className, 
  delay = 0,
  as: Component = 'div' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Esperar al delay si es necesario
    const timerId = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    }, delay);
    
    return () => clearTimeout(timerId);
  }, [delay]);
  
  return (
    <Component 
      ref={containerRef}
      className={cn('text-reveal', className)}
      style={{ opacity: delay > 0 ? '0' : '1', transition: 'opacity 0.5s ease-in-out' }}
    >
      {children}
    </Component>
  );
};

export default TextReveal;
