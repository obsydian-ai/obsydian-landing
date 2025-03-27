
import { useEffect, useRef, useState } from 'react';
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
  const [visibilityPercentage, setVisibilityPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in the viewport
          if (entry.isIntersecting) {
            // Calculate how much of the element is visible
            const viewportHeight = window.innerHeight;
            const boundingRect = entry.boundingClientRect;
            
            // Calculate the visible height of the element
            const visibleHeight = Math.min(
              boundingRect.bottom,
              viewportHeight
            ) - Math.max(boundingRect.top, 0);
            
            // Calculate the percentage of the element that is visible
            const visiblePercentage = (visibleHeight / boundingRect.height) * 100;
            
            // Apply the delay before updating the visibility percentage
            setTimeout(() => {
              setVisibilityPercentage(Math.min(100, Math.max(0, visiblePercentage)));
            }, delay);
          } else {
            // If element is not in viewport, reset the visibility
            setVisibilityPercentage(0);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Create thresholds from 0 to 1 in 0.01 steps
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  // Calculate the color based on the visibility percentage
  const textColor = `rgba(0, 0, 0, ${visibilityPercentage / 100})`;

  return (
    <Component 
      ref={ref} 
      className={cn(
        'text-reveal',
        className
      )}
      style={{ 
        color: textColor,
        transition: 'color 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </Component>
  );
};

export default TextReveal;
