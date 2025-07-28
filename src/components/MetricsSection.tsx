import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, TrendingUp, FileText, CheckCircle, Zap, Target } from 'lucide-react';

interface Metric {
  id: string;
  value: string;
  suffix?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const MetricsSection = () => {
  const { t } = useTranslation('MetricsSection');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  const metrics: Metric[] = [
    {
      id: 'hours-saved',
      value: '8+',
      suffix: ' Hours',
      description: 'Hours Saved per Week per Operator',
      icon: <Clock className="w-4 h-4" />,
      color: 'text-neutral-700',
      gradient: 'from-neutral-600 to-neutral-700'
    },
    {
      id: 'customs-clearance',
      value: '35',
      suffix: '%',
      description: 'Faster Customs Clearance Processing by',
      icon: <TrendingUp className="w-4 h-4" />,
      color: 'text-emerald-600',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'invoice-processing',
      value: '92',
      suffix: '%',
      description: 'Reduction in Invoice Processing Time by',
      icon: <FileText className="w-4 h-4" />,
      color: 'text-amber-600',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      id: 'invoice-accuracy',
      value: '98',
      suffix: '%',
      description: 'Accuracy Rate in Invoice Validation by',
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'text-slate-700',
      gradient: 'from-slate-600 to-slate-700'
    },
    {
      id: 'manual-tasks',
      value: '90',
      suffix: '%',
      description: 'Reduction in Manual Data Entry Tasks by',
      icon: <Zap className="w-4 h-4" />,
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'claims-recovered',
      value: '+72',
      suffix: '%',
      description: 'Increase in Claims Recovery Rate by',
      icon: <Target className="w-4 h-4" />,
      color: 'text-indigo-600',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  // Animate counters when in view
  useEffect(() => {
    if (isInView) {
      metrics.forEach((metric) => {
        const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ''));
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [metric.id]: Math.floor(current)
          }));
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Modern grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            color: '#0ea5e9'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Unified Metrics Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative bg-black/95 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800/50 shadow-lg overflow-hidden"
          >
            {/* Unified background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 to-black/80 rounded-2xl"></div>
            
            {/* Grid layout for metrics */}
            <div className="relative z-10 grid grid-cols-2 grid-rows-3 gap-6 h-full">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  variants={cardVariants}
                  className="group relative bg-neutral-800/90 rounded-xl p-5 border border-neutral-700/50 hover:bg-neutral-800/95 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-xl"></div>
                  
                  {/* Header with icon and title */}
                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <h3 className="text-white text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-300 flex-1 mr-2">{metric.description}</h3>
                    <div className="text-white group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      {metric.icon}
                    </div>
                  </div>

                  {/* Number with glow effect - aligned to bottom */}
                  <motion.div
                    variants={numberVariants}
                    className="relative z-10 mt-auto"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:drop-shadow-lg transition-all duration-300">
                      {counters[metric.id] || 0}{metric.suffix}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-primary-600 to-neutral-900 bg-clip-text text-transparent"
            >
              Real Value,<br />
              Real Fast.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-600 leading-relaxed"
            >
              Drive operational excellence and reduce costs in 90 days with AI agents for supply chain.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 