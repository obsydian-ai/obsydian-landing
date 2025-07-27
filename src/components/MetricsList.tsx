import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  value: string;
  description: string;
}

interface MetricsListProps {
  metrics: Metric[];
  className?: string;
}

const MetricsList: React.FC<MetricsListProps> = ({ metrics, className = '' }) => {
  return (
    <motion.div 
      className={`bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Animated Dot */}
            <motion.div 
              className="w-2 h-2 bg-[#0ea5e9] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
              whileHover={{ scale: 1.5 }}
            />
            
            {/* Value */}
            <span className="text-[#0ea5e9] font-semibold mr-2 group-hover:text-[#0284c7] transition-colors duration-300">
              {metric.value}
            </span>
            
            {/* Description */}
            <span className="group-hover:text-white transition-colors duration-300">
              {metric.description}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MetricsList; 