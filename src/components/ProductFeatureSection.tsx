import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FileCheck, Search, Send, BarChart3, Settings, TrendingUp, FileText, Link, Users, Package, Globe, MapPin, Receipt } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureData {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  image: string;
}

const featuresData: FeatureData[] = [
  {
    id: 1,
    titleKey: "feature1Title",
    descriptionKey: "feature1Desc",
    icon: <TrendingUp className="w-8 h-8" />,
    image: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    titleKey: "feature2Title",
    descriptionKey: "feature2Desc",
    icon: <FileText className="w-8 h-8" />,
    image: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    id: 3,
    titleKey: "feature3Title",
    descriptionKey: "feature3Desc",
    icon: <Link className="w-8 h-8" />,
    image: "bg-gradient-to-br from-amber-50 to-yellow-100"
  },
  {
    id: 4,
    titleKey: "feature4Title",
    descriptionKey: "feature4Desc",
    icon: <Users className="w-8 h-8" />,
    image: "bg-gradient-to-br from-purple-50 to-pink-100"
  },
  {
    id: 5,
    titleKey: "feature5Title",
    descriptionKey: "feature5Desc",
    icon: <Package className="w-8 h-8" />,
    image: "bg-gradient-to-br from-rose-50 to-red-100"
  },
  {
    id: 6,
    titleKey: "feature6Title",
    descriptionKey: "feature6Desc",
    icon: <Globe className="w-8 h-8" />,
    image: "bg-gradient-to-br from-cyan-50 to-blue-100"
  },
  {
    id: 7,
    titleKey: "feature7Title",
    descriptionKey: "feature7Desc",
    icon: <MapPin className="w-8 h-8" />,
    image: "bg-gradient-to-br from-violet-50 to-purple-100"
  },
  {
    id: 8,
    titleKey: "feature8Title",
    descriptionKey: "feature8Desc",
    icon: <Receipt className="w-8 h-8" />,
    image: "bg-gradient-to-br from-orange-50 to-amber-100"
  }
];

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, { feature: Feature; index: number; t: (key: string) => string }>(({ feature, index, t }, ref) => {
  return (
    <motion.div
      ref={ref}
      id={`feature-${feature.id}`}
      className="group w-full max-w-6xl mx-auto"
    >
      <div className="
        relative bg-white overflow-hidden
        rounded-2xl md:rounded-[32px] lg:rounded-[40px]
        border border-black/[0.05]
        shadow-md hover:shadow-xl
        transition-all duration-500
        hover:-translate-y-1
      ">
        {/* Contenedor Principal */}
        <div className="
          relative z-10 p-6 md:p-8 lg:p-10
          transition-transform duration-500
          group-hover:scale-[0.99]
        ">
          {/* 2-Column Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-4 md:space-y-6">
              {/* Icono */}
              <div className="
                inline-flex items-center justify-center
                w-12 h-12 md:w-14 md:h-14
                rounded-xl md:rounded-2xl bg-black/[0.04]
                transition-all duration-300
                group-hover:bg-black/[0.08]
                group-hover:scale-105
                group-hover:rotate-2
              ">
                {React.cloneElement(feature.icon as React.ReactElement, {
                  className: "w-6 h-6 md:w-7 md:h-7 text-gray-800"
                })}
              </div>

              {/* Contenido */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="
                  text-2xl md:text-3xl lg:text-4xl
                  font-semibold
                  text-gray-900
                  tracking-tight
                  transition-transform duration-300
                  group-hover:translate-x-1
                ">
                  {feature.title}
                </h3>
                <p className="
                  text-base md:text-lg
                  leading-relaxed
                  text-gray-600
                  max-w-lg
                  transition-transform duration-300
                  group-hover:-translate-x-0.5
                ">
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Right Column - Image/Illustration */}
            <div className="flex-1 w-full">
              <div className={`
                relative
                h-[300px] md:h-[350px] lg:h-[400px]
                w-full
                overflow-hidden rounded-lg md:rounded-xl
                ${feature.image}
                bg-opacity-60
                transition-all duration-700
                group-hover:scale-[1.03]
                group-hover:shadow-xl
              `}>
                {/* Botón de acción flotante */}
                <div className="absolute top-4 right-4 z-10">
                  <button className="
                    p-2 rounded-full
                    bg-white/90 hover:bg-white
                    shadow-lg hover:shadow-xl
                    transform transition-all duration-300
                    hover:scale-110
                    group/btn
                  ">
                    <div className="w-6 h-6 relative">
                      {feature.id === 1 && (
                        <TrendingUp className="w-full h-full text-blue-500 group-hover/btn:text-blue-400 transition-colors" />
                      )}
                      {feature.id === 2 && (
                        <FileText className="w-full h-full text-emerald-500 group-hover/btn:text-emerald-400 transition-colors" />
                      )}
                      {feature.id === 3 && (
                        <Link className="w-full h-full text-amber-500 group-hover/btn:text-amber-400 transition-colors" />
                      )}
                      {feature.id === 4 && (
                        <Users className="w-full h-full text-purple-500 group-hover/btn:text-purple-400 transition-colors" />
                      )}
                      {feature.id === 5 && (
                        <Package className="w-full h-full text-rose-500 group-hover/btn:text-rose-400 transition-colors" />
                      )}
                      {feature.id === 6 && (
                        <Globe className="w-full h-full text-cyan-500 group-hover/btn:text-cyan-400 transition-colors" />
                      )}
                      {feature.id === 7 && (
                        <MapPin className="w-full h-full text-violet-500 group-hover/btn:text-violet-400 transition-colors" />
                      )}
                      {feature.id === 8 && (
                        <Receipt className="w-full h-full text-orange-500 group-hover/btn:text-orange-400 transition-colors" />
                      )}
                    </div>
                  </button>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {feature.id === 1 && (
                    // AI-Powered Demand Forecasting
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="forecast-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="forecast-glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        {/* Trend Line */}
                        <g className="animate-float">
                          <path 
                            d="M50 150 Q100 120 150 100 T250 80 T350 60" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            fill="none" 
                            className="text-blue-400"
                          />
                          {/* Data Points */}
                          {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
                            <circle 
                              key={i}
                              cx={x} 
                              cy={150 - i * 15} 
                              r="4" 
                              fill="currentColor" 
                              className="text-blue-500 animate-pulse"
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </g>

                        {/* AI Brain */}
                        <g className="animate-bounce-slow">
                          <circle cx="320" cy="80" r="30" stroke="url(#forecast-gradient)" strokeWidth="2" fill="none" className="animate-spin-slow"/>
                          <path d="M310 80 L320 70 L330 80 L320 90 Z" fill="currentColor" className="text-blue-400"/>
                          <text x="320" y="120" textAnchor="middle" className="text-[10px] fill-blue-600 font-medium">AI</text>
                        </g>

                        {/* Stock Levels */}
                        <g className="animate-rise">
                          {[0, 1, 2, 3].map((i) => (
                            <g key={i} className={`animate-scale-slow [animation-delay:${i * 200}ms]`}>
                              <rect 
                                x={60 + i * 40} 
                                y={140 - (i + 1) * 20} 
                                width="25" 
                                height={(i + 1) * 20} 
                                fill="currentColor" 
                                className="text-blue-300 opacity-80"
                              />
                            </g>
                          ))}
                        </g>

                        {/* Prediction Arrow */}
                        <g className="animate-bounce-x">
                          <path 
                            d="M350 60 L380 60 M370 50 L380 60 L370 70" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            fill="none"
                            className="text-blue-400"
                          />
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M30 40 L35 35 L30 30 L25 35 Z" fill="currentColor" className="text-blue-300"/>
                          <path d="M370 160 L375 155 L370 150 L365 155 Z" fill="currentColor" className="text-blue-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 2 && (
                    // Logistics Document Interpreter
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="doc-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="doc-shadow">
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Documents Stack */}
                        <g className="animate-float">
                          {[0, 1, 2].map((i) => (
                            <g key={i} transform={`translate(${i * 8}, ${i * 5})`} className={`animate-fade-in [animation-delay:${i * 200}ms]`}>
                              <rect 
                                x="60" 
                                y="40" 
                                width="120" 
                                height="140" 
                                rx="8" 
                                fill="url(#doc-gradient)" 
                                className="text-emerald-100 shadow-lg"
                              />
                              {/* Document lines */}
                              {[60, 80, 100, 120, 140, 160].map((y, j) => (
                                <line 
                                  key={j}
                                  x1="70" 
                                  y1={y} 
                                  x2={170 - j * 3} 
                                  y2={y} 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  className="text-emerald-300"
                                />
                              ))}
                              {/* Document type icons */}
                              <circle 
                                cx="140" 
                                cy="70" 
                                r="8" 
                                fill="currentColor" 
                                className="text-emerald-400"
                              />
                            </g>
                          ))}
                        </g>

                        {/* AI Processing */}
                        <g className="animate-bounce-slow">
                          <circle cx="280" cy="100" r="35" stroke="url(#doc-gradient)" strokeWidth="2" fill="none" className="animate-spin-slow"/>
                          <path d="M270 100 L280 90 L290 100 L280 110 Z" fill="currentColor" className="text-emerald-400"/>
                          <text x="280" y="140" textAnchor="middle" className="text-[10px] fill-emerald-600 font-medium">AI</text>
                        </g>

                        {/* Data Flow */}
                        <g className="animate-bounce-x">
                          <path 
                            d="M200 100 L250 100 M240 90 L250 100 L240 110" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            fill="none"
                            className="text-emerald-400"
                          />
                        </g>

                        {/* System Update */}
                        <g className="animate-fade-in">
                          <rect 
                            x="300" 
                            y="60" 
                            width="80" 
                            height="80" 
                            rx="8" 
                            fill="currentColor" 
                            className="text-emerald-200 opacity-60"
                          />
                          <text x="340" y="85" textAnchor="middle" className="text-[8px] fill-emerald-700 font-bold">ERP</text>
                          <text x="340" y="100" textAnchor="middle" className="text-[8px] fill-emerald-700 font-bold">TMS</text>
                          <text x="340" y="115" textAnchor="middle" className="text-[8px] fill-emerald-700 font-bold">WMS</text>
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M30 60 L35 55 L30 50 L25 55 Z" fill="currentColor" className="text-emerald-300"/>
                          <path d="M370 140 L375 135 L370 130 L365 135 Z" fill="currentColor" className="text-emerald-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 3 && (
                    // Universal Integration Layer
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="integration-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#d97706" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="integration-shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Systems Grid */}
                        <g className="animate-float">
                          {[
                            { x: 60, y: 40, name: "ERP" },
                            { x: 200, y: 40, name: "TMS" },
                            { x: 340, y: 40, name: "WMS" },
                            { x: 60, y: 120, name: "PDF" },
                            { x: 200, y: 120, name: "CSV" },
                            { x: 340, y: 120, name: "API" }
                          ].map((system, i) => (
                            <g key={i} className={`animate-fade-in [animation-delay:${i * 100}ms]`}>
                              <rect 
                                x={system.x} 
                                y={system.y} 
                                width="60" 
                                height="40" 
                                rx="6" 
                                fill="url(#integration-gradient)" 
                                className="text-amber-100 shadow-lg"
                              />
                              <text 
                                x={system.x + 30} 
                                y={system.y + 25} 
                                textAnchor="middle" 
                                className="text-[8px] fill-amber-700 font-bold"
                              >
                                {system.name}
                              </text>
                            </g>
                          ))}
                        </g>

                        {/* AI Hub */}
                        <g className="animate-bounce-slow">
                          <circle cx="200" cy="100" r="40" stroke="url(#integration-gradient)" strokeWidth="3" fill="none" className="animate-spin-slow"/>
                          <path d="M190 100 L200 90 L210 100 L200 110 Z" fill="currentColor" className="text-amber-400"/>
                          <text x="200" y="150" textAnchor="middle" className="text-[10px] fill-amber-600 font-medium">AI Hub</text>
                        </g>

                        {/* Connection Lines */}
                        <g className="animate-pulse">
                          {[
                            { x1: 90, y1: 60, x2: 170, y2: 80 },
                            { x1: 230, y1: 60, x2: 170, y2: 80 },
                            { x1: 90, y1: 140, x2: 170, y2: 120 },
                            { x1: 230, y1: 140, x2: 170, y2: 120 },
                            { x1: 90, y1: 60, x2: 170, y2: 120 },
                            { x1: 230, y1: 60, x2: 170, y2: 120 }
                          ].map((line, i) => (
                            <line 
                              key={i}
                              x1={line.x1} 
                              y1={line.y1} 
                              x2={line.x2} 
                              y2={line.y2} 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              className="text-amber-300 opacity-60"
                            />
                          ))}
                        </g>

                        {/* Data Flow Indicators */}
                        <g className="animate-bounce-x">
                          {[0, 1, 2].map((i) => (
                            <circle 
                              key={i}
                              cx={120 + i * 40} 
                              cy={80 + i * 20} 
                              r="3" 
                              fill="currentColor" 
                              className="text-amber-400 animate-ping"
                              style={{ animationDelay: `${i * 200}ms` }}
                            />
                          ))}
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M30 50 L35 45 L30 40 L25 45 Z" fill="currentColor" className="text-amber-300"/>
                          <path d="M370 150 L375 145 L370 140 L365 145 Z" fill="currentColor" className="text-amber-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 4 && (
                    // Carrier Intelligence & Benchmarking
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="carrier-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="carrier-shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="4" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Carrier Comparison Chart */}
                        <g filter="url(#carrier-shadow)" className="animate-float">
                          <rect 
                            x="40" 
                            y="30" 
                            width="320" 
                            height="140" 
                            rx="16" 
                            fill="url(#carrier-gradient)" 
                            className="shadow-lg"
                          />
                          
                          {/* Performance Bars */}
                          <g className="animate-rise">
                            {[
                              { x: 80, height: 60, name: "A", color: "#22c55e" },
                              { x: 140, height: 45, name: "B", color: "#f59e0b" },
                              { x: 200, height: 80, name: "C", color: "#ef4444" },
                              { x: 260, height: 70, name: "D", color: "#8b5cf6" },
                              { x: 320, height: 55, name: "E", color: "#06b6d4" }
                            ].map((carrier, i) => (
                              <g key={i} className={`animate-scale-slow [animation-delay:${i * 150}ms]`}>
                                <rect 
                                  x={carrier.x} 
                                  y={140 - carrier.height} 
                                  width="40" 
                                  height={carrier.height} 
                                  fill={carrier.color} 
                                  className="opacity-80"
                                />
                                <text 
                                  x={carrier.x + 20} 
                                  y="155" 
                                  textAnchor="middle" 
                                  className="text-[8px] fill-purple-700 font-bold"
                                >
                                  {carrier.name}
                                </text>
                              </g>
                            ))}
                          </g>

                          {/* Metrics */}
                          <g className="animate-fade-in">
                            <text x="60" y="50" className="text-[10px] fill-purple-600 font-bold">Performance</text>
                            <text x="60" y="65" className="text-[8px] fill-purple-500">Score</text>
                            
                            <text x="60" y="85" className="text-[10px] fill-purple-600 font-bold">Pricing</text>
                            <text x="60" y="100" className="text-[8px] fill-purple-500">Analysis</text>
                            
                            <text x="60" y="120" className="text-[10px] fill-purple-600 font-bold">Claims</text>
                            <text x="60" y="135" className="text-[8px] fill-purple-500">History</text>
                          </g>
                        </g>

                        {/* AI Analysis */}
                        <g className="animate-bounce-slow">
                          <circle cx="350" cy="80" r="25" stroke="url(#carrier-gradient)" strokeWidth="2" fill="none" className="animate-spin-slow"/>
                          <path d="M345 80 L350 75 L355 80 L350 85 Z" fill="currentColor" className="text-purple-400"/>
                          <text x="350" y="110" textAnchor="middle" className="text-[8px] fill-purple-600 font-medium">AI</text>
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M20 60 L25 55 L20 50 L15 55 Z" fill="currentColor" className="text-purple-300"/>
                          <path d="M380 140 L385 135 L380 130 L375 135 Z" fill="currentColor" className="text-purple-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 5 && (
                    // Smart Shipment Manager
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="shipment-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="shipment-shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Shipment Description */}
                        <g filter="url(#shipment-shadow)" className="animate-float">
                          <rect 
                            x="40" 
                            y="40" 
                            width="120" 
                            height="100" 
                            rx="12" 
                            fill="url(#shipment-gradient)" 
                            className="text-rose-100 shadow-lg"
                          />
                          <text x="100" y="60" textAnchor="middle" className="text-[10px] fill-rose-700 font-bold">Shipment</text>
                          <text x="100" y="75" textAnchor="middle" className="text-[8px] fill-rose-600">Details</text>
                          {/* Package icon */}
                          <rect x="70" y="85" width="20" height="15" rx="2" fill="currentColor" className="text-rose-400"/>
                          <text x="100" y="105" textAnchor="middle" className="text-[8px] fill-rose-600">2kg, Fragile</text>
                        </g>

                        {/* AI Agent */}
                        <g className="animate-bounce-slow">
                          <circle cx="200" cy="100" r="35" stroke="url(#shipment-gradient)" strokeWidth="3" fill="none" className="animate-spin-slow"/>
                          <path d="M190 100 L200 90 L210 100 L200 110 Z" fill="currentColor" className="text-rose-400"/>
                          <text x="200" y="145" textAnchor="middle" className="text-[10px] fill-rose-600 font-medium">AI Agent</text>
                        </g>

                        {/* Quote Options */}
                        <g className="animate-fade-in">
                          {[
                            { x: 280, y: 60, name: "Express", price: "€45" },
                            { x: 280, y: 100, name: "Standard", price: "€28" },
                            { x: 280, y: 140, name: "Economy", price: "€18" }
                          ].map((option, i) => (
                            <g key={i} className={`animate-scale-slow [animation-delay:${i * 200}ms]`}>
                              <rect 
                                x={option.x} 
                                y={option.y} 
                                width="80" 
                                height="30" 
                                rx="6" 
                                fill="currentColor" 
                                className="text-rose-200 opacity-60"
                              />
                              <text x={option.x + 40} y={option.y + 15} textAnchor="middle" className="text-[8px] fill-rose-700 font-bold">{option.name}</text>
                              <text x={option.x + 40} y={option.y + 25} textAnchor="middle" className="text-[8px] fill-rose-600">{option.price}</text>
                            </g>
                          ))}
                        </g>

                        {/* Connection Lines */}
                        <g className="animate-pulse">
                          <path d="M160 90 L180 90 M170 80 L180 90 L170 100" stroke="currentColor" strokeWidth="2" fill="none" className="text-rose-400"/>
                          <path d="M235 100 L260 100 M250 90 L260 100 L250 110" stroke="currentColor" strokeWidth="2" fill="none" className="text-rose-400"/>
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M30 70 L35 65 L30 60 L25 65 Z" fill="currentColor" className="text-rose-300"/>
                          <path d="M370 130 L375 125 L370 120 L365 125 Z" fill="currentColor" className="text-rose-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 6 && (
                    // Customs Agent-as-a-Service
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="customs-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="customs-shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Global Map */}
                        <g className="animate-float">
                          <circle cx="200" cy="100" r="60" stroke="url(#customs-gradient)" strokeWidth="2" fill="none" className="text-cyan-300"/>
                          {/* Continents */}
                          <path d="M150 80 Q180 70 200 80 T250 90" stroke="currentColor" strokeWidth="3" fill="none" className="text-cyan-400"/>
                          <path d="M160 120 Q190 110 220 120" stroke="currentColor" strokeWidth="3" fill="none" className="text-cyan-400"/>
                          <path d="M180 140 Q200 130 220 140" stroke="currentColor" strokeWidth="3" fill="none" className="text-cyan-400"/>
                        </g>

                        {/* Customs Documents */}
                        <g filter="url(#customs-shadow)" className="animate-fade-in">
                          {[0, 1, 2].map((i) => (
                            <g key={i} transform={`translate(${i * 15}, ${i * 10})`} className={`animate-scale-slow [animation-delay:${i * 200}ms]`}>
                              <rect 
                                x="60" 
                                y="40" 
                                width="80" 
                                height="100" 
                                rx="6" 
                                fill="url(#customs-gradient)" 
                                className="text-cyan-100 shadow-lg"
                              />
                              <text x="100" y="60" textAnchor="middle" className="text-[8px] fill-cyan-700 font-bold">DOC</text>
                              <text x="100" y="75" textAnchor="middle" className="text-[6px] fill-cyan-600">{i + 1}</text>
                            </g>
                          ))}
                        </g>

                        {/* AI Customs Agent */}
                        <g className="animate-bounce-slow">
                          <circle cx="320" cy="100" r="30" stroke="url(#customs-gradient)" strokeWidth="2" fill="none" className="animate-spin-slow"/>
                          <path d="M315 100 L320 95 L325 100 L320 105 Z" fill="currentColor" className="text-cyan-400"/>
                          <text x="320" y="140" textAnchor="middle" className="text-[8px] fill-cyan-600 font-medium">Customs AI</text>
                        </g>

                        {/* Clearance Status */}
                        <g className="animate-pulse">
                          <circle cx="320" cy="160" r="15" fill="#22c55e" className="animate-ping"/>
                          <text x="320" y="165" textAnchor="middle" className="text-[8px] fill-white font-bold">✓</text>
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M40 50 L45 45 L40 40 L35 45 Z" fill="currentColor" className="text-cyan-300"/>
                          <path d="M360 150 L365 145 L360 140 L355 145 Z" fill="currentColor" className="text-cyan-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 7 && (
                    // Proactive Shipment Tracking & Alerts
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="tracking-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="tracking-shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Route Path */}
                        <g className="animate-float">
                          <path 
                            d="M50 150 Q150 100 250 80 T350 120" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            fill="none" 
                            className="text-violet-400"
                          />
                          {/* Location Points */}
                          {[
                            { x: 50, y: 150, name: "Origin" },
                            { x: 150, y: 100, name: "Hub" },
                            { x: 250, y: 80, name: "Transit" },
                            { x: 350, y: 120, name: "Dest" }
                          ].map((point, i) => (
                            <g key={i} className={`animate-fade-in [animation-delay:${i * 300}ms]`}>
                              <circle 
                                cx={point.x} 
                                cy={point.y} 
                                r="8" 
                                fill="currentColor" 
                                className="text-violet-500 animate-pulse"
                              />
                              <text 
                                x={point.x} 
                                y={point.y + 20} 
                                textAnchor="middle" 
                                className="text-[6px] fill-violet-700 font-bold"
                              >
                                {point.name}
                              </text>
                            </g>
                          ))}
                        </g>

                        {/* Moving Package */}
                        <g className="animate-bounce-x">
                          <circle cx="200" cy="90" r="12" fill="currentColor" className="text-violet-400"/>
                          <text x="200" y="95" textAnchor="middle" className="text-[8px] fill-white font-bold">📦</text>
                        </g>

                        {/* Alert System */}
                        <g className="animate-pulse">
                          <rect 
                            x="280" 
                            y="40" 
                            width="100" 
                            height="80" 
                            rx="8" 
                            fill="currentColor" 
                            className="text-violet-200 opacity-60"
                          />
                          <text x="330" y="60" textAnchor="middle" className="text-[8px] fill-violet-700 font-bold">Alerts</text>
                          <text x="330" y="75" textAnchor="middle" className="text-[6px] fill-violet-600">ETA: 2h</text>
                          <text x="330" y="90" textAnchor="middle" className="text-[6px] fill-violet-600">Status: OK</text>
                          <text x="330" y="105" textAnchor="middle" className="text-[6px] fill-violet-600">Weather: Clear</text>
                        </g>

                        {/* Real-time Updates */}
                        <g className="animate-bounce-slow">
                          <circle cx="330" cy="130" r="15" fill="#22c55e" className="animate-ping"/>
                          <text x="330" y="135" textAnchor="middle" className="text-[8px] fill-white font-bold">LIVE</text>
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M30 80 L35 75 L30 70 L25 75 Z" fill="currentColor" className="text-violet-300"/>
                          <path d="M370 160 L375 155 L370 150 L365 155 Z" fill="currentColor" className="text-violet-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                  {feature.id === 8 && (
                    // Freight Invoice Audit & Claim Agent
                    <div className="w-[85%] h-[70%] relative bg-transparent">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <linearGradient id="audit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1"/>
                          </linearGradient>
                          <filter id="audit-shadow">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                          </filter>
                        </defs>

                        {/* Invoice Stack */}
                        <g filter="url(#audit-shadow)" className="animate-float">
                          {[0, 1, 2].map((i) => (
                            <g key={i} transform={`translate(${i * 8}, ${i * 5})`} className={`animate-fade-in [animation-delay:${i * 200}ms]`}>
                              <rect 
                                x="60" 
                                y="40" 
                                width="120" 
                                height="140" 
                                rx="8" 
                                fill="url(#audit-gradient)" 
                                className="text-orange-100 shadow-lg"
                              />
                              {/* Invoice lines */}
                              {[60, 80, 100, 120, 140, 160].map((y, j) => (
                                <line 
                                  key={j}
                                  x1="70" 
                                  y1={y} 
                                  x2={170 - j * 3} 
                                  y2={y} 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  className="text-orange-300"
                                />
                              ))}
                              {/* Amount */}
                              <text x="120" y="80" textAnchor="middle" className="text-[10px] fill-orange-700 font-bold">€1,250</text>
                            </g>
                          ))}
                        </g>

                        {/* AI Audit */}
                        <g className="animate-bounce-slow">
                          <circle cx="280" cy="100" r="35" stroke="url(#audit-gradient)" strokeWidth="2" fill="none" className="animate-spin-slow"/>
                          <path d="M270 100 L280 90 L290 100 L280 110 Z" fill="currentColor" className="text-orange-400"/>
                          <text x="280" y="140" textAnchor="middle" className="text-[10px] fill-orange-600 font-medium">AI Audit</text>
                        </g>

                        {/* Error Detection */}
                        <g className="animate-pulse">
                          <circle cx="320" cy="60" r="20" fill="#ef4444" fillOpacity="0.2" className="animate-ping"/>
                          <text x="320" y="65" textAnchor="middle" className="text-[8px] fill-red-600 font-bold">!</text>
                          <text x="320" y="80" textAnchor="middle" className="text-[6px] fill-red-600">Error</text>
                        </g>

                        {/* Claim Status */}
                        <g className="animate-fade-in">
                          <rect 
                            x="280" 
                            y="140" 
                            width="80" 
                            height="40" 
                            rx="6" 
                            fill="currentColor" 
                            className="text-orange-200 opacity-60"
                          />
                          <text x="320" y="155" textAnchor="middle" className="text-[8px] fill-orange-700 font-bold">Claim</text>
                          <text x="320" y="170" textAnchor="middle" className="text-[6px] fill-orange-600">Filed</text>
                        </g>

                        {/* Elementos decorativos */}
                        <g className="animate-sparkle">
                          <path d="M30 60 L35 55 L30 50 L25 55 Z" fill="currentColor" className="text-orange-300"/>
                          <path d="M370 140 L375 135 L370 130 L365 135 Z" fill="currentColor" className="text-orange-300"/>
                        </g>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Indicador de interactividad */}
                <a
                  href="https://cal.com/Obsydian-demo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute bottom-4 right-4
                    px-3 py-1.5
                    bg-white/90 hover:bg-white
                    rounded-full
                    text-xs font-medium text-gray-600 hover:text-gray-900
                    transition-all duration-300
                    opacity-0 group-hover:opacity-100
                    translate-y-2 group-hover:translate-y-0
                    cursor-pointer
                    hover:shadow-md
                  "
                >
                  {t('cardActionText')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

const ProductFeatureSection: React.FC = () => {
  const { t } = useTranslation('ProductFeatureSection');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [canShowCard, setCanShowCard] = useState(false); // Start with false to ensure title is shown first
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = featuresData.map(f => ({
    ...f,
    title: t(f.titleKey),
    description: t(f.descriptionKey)
  }));

  // Set up scroll tracking for the sticky container
  const { scrollYProgress } = useScroll({
    target: stickyContainerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which card should be visible based on scroll progress
  // Start card progression after the title section (1 viewport) and end at 75% to make transitions more compact
  const cardProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, features.length - 1]);
  
  // Update current index based on scroll progress
  useEffect(() => {
    const unsubscribe = cardProgress.on("change", (latest) => {
      const newIndex = Math.round(latest);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < features.length) {
        setCurrentIndex(newIndex);
      }
    });
    
    return unsubscribe;
  }, [cardProgress, currentIndex, features.length]);

  // Handle title visibility and card display based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Show title until 15% of scroll (full viewport), then fade out gradually
      const titleThreshold = 0.15;
      setIsTitleVisible(latest < titleThreshold);
      
      // Show cards only after title is completely faded out (with small buffer)
      setCanShowCard(latest >= 0.18);
      
      // Track if user has started scrolling
      if (latest > 0.01) {
        setHasScrolled(true);
        setIsInitialLoad(false);
      }
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  // Handle direct navigation to section (anchor links)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#services') {
        // If user navigates directly to services, show the first card after a brief delay
        setTimeout(() => {
          setIsTitleVisible(false);
          setCanShowCard(true);
          setCurrentIndex(0);
          setIsInitialLoad(false);
        }, 500);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const cardVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0
    })
  };

  // Special variant for the first card to appear from bottom
  const firstCardVariants = {
    enter: {
      y: 100,
      opacity: 0,
      scale: 0.95
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0,
      scale: 0.95
    })
  };



  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative bg-black mt-24 md:mt-48"
      style={{ height: `${100 * features.length}vh` }}
    >
      {/* Scroll container that takes up full height for all cards */}
      <div 
        ref={stickyContainerRef}
        className="relative w-full"
        style={{ height: `${100 * features.length}vh` }}
      >
        {/* Sticky container that stays in viewport */}
        <div className="sticky top-0 h-screen w-full bg-black">
          {/* Header - Takes full viewport height */}
          <div className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center z-10 w-full bg-black">
            <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
              <motion.div 
                ref={titleContainerRef}
                className="text-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: isTitleVisible ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="
                  inline-flex items-center px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-8
                  rounded-full bg-white/10 text-white
                  text-xs md:text-sm font-medium tracking-wide
                  backdrop-blur-sm
                ">
                  <Settings className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  {t('sectionTag')}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
                  {t('title')}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto">
                  {t('paragraph')}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards Container - Only visible when title is gone */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
              <div className="relative h-full flex items-center justify-center">
                <AnimatePresence initial={false} custom={currentIndex}>
                  {canShowCard && (
                    <motion.div
                      key={currentIndex}
                      custom={currentIndex}
                      variants={currentIndex === 0 ? firstCardVariants : cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 300, damping: 30, duration: 0.8 },
                        opacity: { duration: 0.6 },
                        scale: { type: "spring", stiffness: 300, damping: 30, duration: 0.8 },
                        delay: currentIndex === 0 ? 0.2 : 0
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <FeatureCard 
                        feature={features[currentIndex]}
                        index={currentIndex}
                        t={t}
                        ref={currentIndex === 0 ? firstCardRef : undefined}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                    }
                  `}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureSection; 