import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MarkerTextRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const MarkerTextReveal: React.FC<MarkerTextRevealProps> = ({ 
  children, 
  className, 
  as: Component = 'div'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Función para dividir texto en líneas reales basadas en el ancho
    function splitIntoLines(element: HTMLElement) {
      const words = element.innerText.split(/\s+/);
      const lines: HTMLElement[] = [];
      const computedStyle = window.getComputedStyle(element);
      
      // Crear elemento temporal para medir
      const temp = document.createElement('span');
      temp.style.position = 'absolute';
      temp.style.visibility = 'hidden';
      temp.style.whiteSpace = 'nowrap';
      temp.style.fontSize = computedStyle.fontSize;
      temp.style.fontFamily = computedStyle.fontFamily;
      temp.style.fontWeight = computedStyle.fontWeight;
      temp.style.letterSpacing = computedStyle.letterSpacing;
      document.body.appendChild(temp);
      
      let currentLine = '';
      const maxWidth = element.offsetWidth;
      
      words.forEach((word, i) => {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        temp.textContent = testLine;
        
        if (temp.offsetWidth > maxWidth && currentLine) {
          // Crear nueva línea
          const lineEl = document.createElement('span');
          lineEl.className = 'marker-line';
          lineEl.style.display = 'block';
          lineEl.textContent = currentLine;
          lines.push(lineEl);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
        
        // Última línea
        if (i === words.length - 1 && currentLine) {
          const lineEl = document.createElement('span');
          lineEl.className = 'marker-line';
          lineEl.style.display = 'block';
          lineEl.textContent = currentLine;
          lines.push(lineEl);
        }
      });
      
      document.body.removeChild(temp);
      return lines;
    }
    
    // Procesar todas las líneas
    function processLines() {
      const allLines: HTMLElement[] = [];
      
      // Procesar cada elemento de texto
      const textElements = Array.from(container.querySelectorAll('div, p'));
      
      textElements.forEach(element => {
        const el = element as HTMLElement;
        
        // Si es un div (título), tratarlo como una línea
        if (el.tagName === 'DIV') {
          allLines.push(el);
        }
        // Si es un párrafo, dividirlo en líneas reales
        else if (el.tagName === 'P') {
          const lines = splitIntoLines(el);
          el.innerHTML = ''; // Limpiar contenido original
          lines.forEach(line => {
            el.appendChild(line);
            allLines.push(line);
          });
        }
      });
      
      // Aplicar estilos base a todas las líneas
      allLines.forEach(line => {
        line.style.color = 'transparent';
        line.style.backgroundImage = 'linear-gradient(to right, black 50%, rgba(0,0,0,0.1) 50%)';
        line.style.backgroundSize = '200% 100%';
        line.style.backgroundPosition = '100% 0';
        line.style.webkitBackgroundClip = 'text';
        line.style.backgroundClip = 'text';
        line.style.transition = 'background-position 0.4s ease-out';
      });
      
      return allLines;
    }
    
    const lines = processLines();
    let lastRevealedIndex = -1;
    
    function updateLines() {
      const viewportHeight = window.innerHeight;
      
      lines.forEach((line, index) => {
        const rect = line.getBoundingClientRect();
        
        // Si la línea anterior no está revelada, esta no puede empezar
        if (index > lastRevealedIndex + 1) {
          line.style.backgroundPosition = '100% 0';
          return;
        }
        
        // Si la línea está en el viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const progress = 1 - (rect.top / viewportHeight);
          const position = Math.max(0, Math.min(100, 100 - (progress * 150)));
          
          line.style.backgroundPosition = `${position}% 0`;
          
          // Si esta línea está casi completamente revelada
          if (position <= 5) {
            lastRevealedIndex = index;
          }
        }
        // Si la línea ya pasó
        else if (rect.bottom <= 0) {
          line.style.backgroundPosition = '0% 0';
          lastRevealedIndex = index;
        }
        // Si la línea aún no es visible
        else {
          line.style.backgroundPosition = '100% 0';
        }
      });
    }
    
    // Iniciar actualización
    updateLines();
    
    // Eventos de scroll y resize
    window.addEventListener('scroll', updateLines);
    window.addEventListener('resize', updateLines);
    
    return () => {
      window.removeEventListener('scroll', updateLines);
      window.removeEventListener('resize', updateLines);
    };
  }, []);
  
  return (
    <Component 
      ref={containerRef}
      className={cn('marker-text-reveal', className)}
    >
      {children}
    </Component>
  );
};

export default MarkerTextReveal; 