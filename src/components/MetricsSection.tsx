import MetricCard from './MetricCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MetricsSection = () => {
  const [activeConnection, setActiveConnection] = useState<number | null>(null);
  const [networkPulse, setNetworkPulse] = useState(0);
  const [systemHealth, setSystemHealth] = useState(98);
  const [throughput, setThroughput] = useState(1247);
  const [currentProcess, setCurrentProcess] = useState(0);
  const [documentsProcessed, setDocumentsProcessed] = useState(2847);
  const [activeAIAgents, setActiveAIAgents] = useState(12);

  // Procesos específicos en español relacionados con cada métrica
  const obsydianProcesses = [
    {
      id: 1,
      action: "Automatizando comparación de 15 cotizaciones",
      details: "Analizando DHL, FedEx, UPS • Ruta Madrid-Barcelona",
      type: "AUTOMATIZACIÓN",
      company: "Múltiples Transportistas",
      amount: "15 cotizaciones"
    },
    {
      id: 2,
      action: "Completando formulario DUA automáticamente",
      details: "Documento ES240125847 • Clasificación arancelaria 8471.30.00",
      type: "ADUANAS",
      company: "Agencia Tributaria",
      amount: "DUA ES240125847"
    },
    {
      id: 3,
      action: "Auditando factura contra contrato maestro",
      details: "Factura #INV-2024-0847 vs Contrato #CTR-2023-156",
      type: "AUDITORÍA",
      company: "Maersk Line España",
      amount: "€3,247.80"
    },
    {
      id: 4,
      action: "Validando términos contractuales",
      details: "Revisando cláusulas de penalización por retraso",
      type: "VALIDACIÓN",
      company: "DB Schenker",
      amount: "Contrato #DB-2024-089"
    },
    {
      id: 5,
      action: "Sincronizando inventario SAP ↔ WMS",
      details: "Actualizando 1,247 SKUs • Almacén Central Madrid",
      type: "INTEGRACIÓN",
      company: "SAP + Manhattan WMS",
      amount: "1,247 SKUs"
    },
    {
      id: 6,
      action: "Iniciando reclamación por retraso de 72h",
      details: "Envío #UPS789456123 • Compensación automática",
      type: "RECLAMACIÓN",
      company: "UPS Supply Chain",
      amount: "€1,890.50"
    }
  ];

  // Procesos de análisis en tiempo real para el panel inferior
  const analysisProcesses = [
    {
      id: 1,
      action: "Generando reporte mensual de ahorros",
      details: "Consolidando datos de 847 operaciones • Enero 2024",
      type: "ANÁLISIS",
      company: "Dashboard Ejecutivo",
      amount: "€284,750"
    },
    {
      id: 2,
      action: "Detectando patrón de sobrecostos",
      details: "Ruta BCN-MAD detectada • Desviación +15%",
      type: "ALERTAS",
      company: "Sistema de Monitoreo",
      amount: "€12,400"
    },
    {
      id: 3,
      action: "Prediciendo demanda Q2 2024",
      details: "Analizando tendencias históticas • ML Model v2.3",
      type: "PREDICCIÓN",
      company: "IA Predictiva",
      amount: "95% precisión"
    },
    {
      id: 4,
      action: "Optimizando red de distribución",
      details: "Evaluando 23 centros • Reducción CO2",
      type: "OPTIMIZACIÓN",
      company: "Green Logistics",
      amount: "18% reducción"
    },
    {
      id: 5,
      action: "Benchmarking competitivo automático",
      details: "Comparando vs 12 competidores • Actualización diaria",
      type: "BENCHMARK",
      company: "Market Intelligence",
      amount: "12 proveedores"
    },
    {
      id: 6,
      action: "Calculando ROI por cliente",
      details: "Segmentación por industria • Top 50 clientes",
      type: "ROI",
      company: "Business Intelligence",
      amount: "+340% ROI"
    }
  ];

  const [currentAnalysis, setCurrentAnalysis] = useState(0);

  // Simular datos en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkPulse(prev => (prev + 1) % 100);
      setSystemHealth(97 + Math.random() * 2);
      setThroughput(1200 + Math.random() * 100);
      setDocumentsProcessed(prev => prev + Math.floor(Math.random() * 5));
      setActiveAIAgents(10 + Math.floor(Math.random() * 6));
      setCurrentProcess(prev => (prev + 1) % obsydianProcesses.length);
      setCurrentAnalysis(prev => (prev + 1) % analysisProcesses.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Definir posiciones de las métricas
  const metricPositions = {
    1: { x: "25%", y: "40%" }, // Superior izquierda
    2: { x: "25%", y: "57%" }, // Central izquierda  
    3: { x: "25%", y: "74%" }, // Inferior izquierda
    4: { x: "75%", y: "40%" }, // Superior derecha
    5: { x: "75%", y: "57%" }, // Central derecha
    6: { x: "75%", y: "74%" }  // Inferior derecha
  };

  // Conexiones relacionadas entre métricas
  const metricConnections = {
    1: [2, 4], // Horas ahorradas se relaciona con Despacho y Precisión
    2: [1, 3, 5], // Despacho se relaciona con Horas, Facturas y Sincronización
    3: [2, 6], // Facturas se relaciona con Despacho y Reclamaciones
    4: [1, 5], // Precisión se relaciona con Horas y Sincronización
    5: [2, 4, 6], // Sincronización se relaciona con Despacho, Precisión y Reclamaciones
    6: [3, 5] // Reclamaciones se relaciona con Facturas y Sincronización
  };

  // Información contextual de cada métrica
  const metricContext = {
    1: { type: "EFICIENCIA", impact: "ALTO", trend: "+12%" },
    2: { type: "CUMPLIMIENTO", impact: "CRÍTICO", trend: "+8%" },
    3: { type: "AUTOMATIZACIÓN", impact: "ALTO", trend: "+45%" },
    4: { type: "PRECISIÓN", impact: "CRÍTICO", trend: "+3%" },
    5: { type: "INTEGRACIÓN", impact: "MEDIO", trend: "+15%" },
    6: { type: "RECUPERACIÓN", impact: "ALTO", trend: "+25%" }
  };

  const currentOProcess = obsydianProcesses[currentProcess];
  const currentAnalysisProcess = analysisProcesses[currentAnalysis];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 overflow-hidden">
      {/* Background lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-600/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
      
      {/* Efectos adicionales de iluminación para continuidad */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-300/10 rounded-full blur-2xl"></div>
      
      {/* Network Pulse Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.1) 0%, transparent 70%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent">
              Resultados que hablan por
            </span>{' '}
            <span 
              className="bg-clip-text text-transparent font-black"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0ea5e9 50%, #0369a1 75%, #0ea5e9 100%)',
                backgroundSize: '300% 300%',
                animation: 'gradient-x 3s ease-in-out infinite'
              }}
            >
              sí solos
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Métricas reales de nuestros clientes usando 
            <span 
              className="font-semibold bg-clip-text text-transparent ml-1"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
              }}
            >
              Obsydian
            </span>
          </p>
        </motion.div>

        {/* Sistema Integrado */}
        <div className="relative">
          
          {/* Panel Superior - Esquina superior derecha al límite */}
          <motion.div
            className="absolute bg-white/3 backdrop-blur-sm rounded-xl border border-white/10 px-3 py-2 z-[25] transition-all duration-300 w-[220px] hidden lg:block opacity-80"
            style={{
              top: '-3rem',       // Más al límite arriba
              right: '-4rem',     // Más a la derecha
            }}
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: 0
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Header minimalista */}
            <div className="text-left mb-2">
              <div className="text-primary-400 text-xs font-semibold flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-green-400 rounded-full"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Obsydian IA • Operaciones
              </div>
            </div>

            {/* Proceso activo súper limpio */}
            <motion.div 
              className="bg-white/5 rounded-lg p-2 border border-primary-500/20"
              key={currentProcess}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-1 mb-1">
                <span className="text-green-400 text-xs font-bold px-1.5 py-0.5 bg-green-400/20 rounded text-xs">
                  {currentOProcess.type}
                </span>
              </div>
              
              <div className="text-white text-xs font-medium mb-1">
                {currentOProcess.action}
              </div>
              
              <div className="text-cyan-400 font-mono text-xs font-bold">
                {currentOProcess.amount}
              </div>

              {/* Barra de progreso mini */}
              <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden mt-1">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-400 to-cyan-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Red de Conexiones Simplificada */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ zIndex: 10 }}>
            <defs>
              <linearGradient id="networkFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
              </linearGradient>
              
              <linearGradient id="activeFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="dimmedFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
              </linearGradient>

              {/* Gradientes para cables de luz */}
              <linearGradient id="cableLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="cableLightAnimated" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8">
                  <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1">
                  <animate attributeName="stop-opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8">
                  <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>

              <filter id="activeGlow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>

              <filter id="cableGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
            </defs>
            
            {/* Conexiones Principales */}
            {Object.entries(metricPositions).map(([id, pos]) => {
              const isActive = activeConnection === parseInt(id);
              const isRelated = activeConnection && metricConnections[activeConnection]?.includes(parseInt(id));
              const isDimmed = activeConnection && !isActive && !isRelated;
              
              return (
                <motion.line
                  key={`main-${id}`}
                  x1="50%" y1="22%" 
                  x2={pos.x} y2={pos.y}
                  stroke={isActive ? "url(#activeFlow)" : isDimmed ? "url(#dimmedFlow)" : "url(#networkFlow)"}
                  strokeWidth={isActive ? 3 : isRelated ? 2.5 : 1.5}
                  strokeDasharray="6,4"
                  filter={isActive ? "url(#activeGlow)" : "url(#glow)"}
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: 1,
                    opacity: isDimmed ? 0.3 : 1
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: 1.5 + parseInt(id) * 0.1
                  }}
                />
              );
            })}

            {/* Conexiones secundarias entre métricas relacionadas */}
            {activeConnection && metricConnections[activeConnection]?.map((relatedId, index) => {
              const startPos = metricPositions[activeConnection as keyof typeof metricPositions];
              const endPos = metricPositions[relatedId as keyof typeof metricPositions];
              
              return (
                <motion.line
                  key={`secondary-${activeConnection}-${relatedId}`}
                  x1={startPos.x} y1={startPos.y}
                  x2={endPos.x} y2={endPos.y}
                  stroke="url(#activeFlow)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  filter="url(#activeGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              );
            })}

            {/* Conexiones horizontales sutiles */}
            {["40%", "57%", "74%"].map((y, index) => (
              <motion.line
                key={`horizontal-${index}`}
                x1="25%" y1={y} x2="75%" y2={y}
                stroke="url(#networkFlow)"
                strokeWidth="1"
                strokeDasharray="4,8"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 2.5 + index * 0.2 }}
              />
            ))}

            {/* Nodos de interconexión */}
            {Object.entries(metricPositions).map(([id, pos]) => {
              const isActive = activeConnection === parseInt(id);
              const isRelated = activeConnection && metricConnections[activeConnection]?.includes(parseInt(id));
              const isDimmed = activeConnection && !isActive && !isRelated;
              
              return (
                <motion.circle
                  key={`node-${id}`}
                  cx={pos.x} cy={pos.y} 
                  r={isActive ? 6 : isRelated ? 5 : 3}
                  fill={isActive ? "#22d3ee" : isRelated ? "#0ea5e9" : "#0ea5e9"}
                  filter={isActive ? "url(#activeGlow)" : "url(#glow)"}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    opacity: isDimmed ? 0.4 : 1
                  }}
                  transition={{ delay: 3 + parseInt(id) * 0.1 }}
                />
              );
            })}

            {/* Partículas de datos dirigidas */}
            <AnimatePresence>
              {activeConnection && (
                <>
                  {/* Flujo principal hacia métrica activa */}
                  <motion.circle
                    key={`active-particle-${activeConnection}`}
                    r="3" fill="#22d3ee" filter="url(#activeGlow)"
                    initial={{ 
                      cx: "50%", 
                      cy: "22%",
                      opacity: 0 
                    }}
                    animate={{ 
                      cx: metricPositions[activeConnection as keyof typeof metricPositions]?.x,
                      cy: metricPositions[activeConnection as keyof typeof metricPositions]?.y,
                      opacity: [0, 1, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Partículas hacia métricas relacionadas */}
                  {metricConnections[activeConnection]?.map((relatedId, index) => (
                    <motion.circle
                      key={`related-particle-${relatedId}`}
                      r="2" fill="#0ea5e9" filter="url(#glow)"
                      initial={{ 
                        cx: metricPositions[activeConnection as keyof typeof metricPositions]?.x,
                        cy: metricPositions[activeConnection as keyof typeof metricPositions]?.y,
                        opacity: 0 
                      }}
                      animate={{ 
                        cx: metricPositions[relatedId as keyof typeof metricPositions]?.x,
                        cy: metricPositions[relatedId as keyof typeof metricPositions]?.y,
                        opacity: [0, 0.8, 0]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Partículas ambientales */}
            {!activeConnection && (
              <motion.circle
                r="2" fill="#22d3ee" filter="url(#glow)"
                initial={{ cx: "50%", cy: "22%" }}
                animate={{ 
                  cx: ["50%", "25%", "75%", "50%"],
                  cy: ["22%", "57%", "57%", "22%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />
            )}

          </svg>

          {/* Grid de Métricas - Protagonistas */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 px-4 lg:px-12 pt-20 pb-32 items-stretch">
            
            {/* Fila 1 */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onHoverStart={() => setActiveConnection(1)}
              onHoverEnd={() => setActiveConnection(null)}
            >
              <MetricCard 
                value="8+"
                label="horas ahorradas por semana por operador"
                description="AI agents automate tasks like document parsing, rate comparison, and shipment quoting."
              />
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onHoverStart={() => setActiveConnection(4)}
              onHoverEnd={() => setActiveConnection(null)}
            >
              <MetricCard 
                value="98%"
                label="precisión en revisión de facturas"
                description="Agent matches invoices to contracts and flags discrepancies with high precision."
              />
            </motion.div>

            {/* Fila 2 */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              onHoverStart={() => setActiveConnection(2)}
              onHoverEnd={() => setActiveConnection(null)}
            >
              <MetricCard 
                value="35%"
                label="más rápido en despacho aduanero"
                description="AI agent pre-fills forms, verifies compliance, and communicates with customs and brokers."
              />
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onHoverStart={() => setActiveConnection(5)}
              onHoverEnd={() => setActiveConnection(null)}
            >
              <MetricCard 
                value="90%"
                label="reducción en tareas manuales de sincronización"
                description="Connector agent integrates TMS, ERP, WMS, and carrier platforms to automate data exchange."
              />
            </motion.div>

            {/* Fila 3 */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              onHoverStart={() => setActiveConnection(3)}
              onHoverEnd={() => setActiveConnection(null)}
            >
              <MetricCard 
                value="92%"
                label="reducción en tiempo de procesamiento de facturas"
                description="AI audit agent automates matching, error detection, and claim initiation."
              />
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              onHoverStart={() => setActiveConnection(6)}
              onHoverEnd={() => setActiveConnection(null)}
            >
              <MetricCard 
                value="+72%"
                label="aumento en reclamaciones recuperadas"
                description="AI ensures no eligible claim is missed and follows up persistently."
              />
            </motion.div>
          </div>

          {/* Panel Inferior - Esquina inferior izquierda un pelín dentro */}
          <motion.div 
            className="absolute bg-white/3 backdrop-blur-sm rounded-xl border border-white/10 px-3 py-2 z-[25] transition-all duration-300 w-[220px] hidden lg:block opacity-80"
            style={{
              bottom: '-0.5rem',  // Un pelín más abajo
              left: '-1rem',      // Más a la izquierda
            }}
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: 0
            }}
            transition={{ delay: 4 }}
          >
            {/* Header */}
            <div className="text-left mb-2">
              <div className="text-primary-400 text-xs font-semibold flex items-center gap-2">
                <motion.div 
                  className="w-1.5 h-1.5 bg-green-400 rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                Obsydian IA • Inteligencia
              </div>
            </div>

            {/* Proceso de análisis activo */}
            <motion.div 
              className="bg-white/5 rounded-lg p-2 border border-primary-500/20"
              key={currentAnalysis}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-1 mb-1">
                <span className="text-green-400 text-xs font-bold px-1.5 py-0.5 bg-green-400/20 rounded text-xs">
                  {currentAnalysisProcess.type}
                </span>
              </div>
              
              <div className="text-white text-xs font-medium mb-1">
                {currentAnalysisProcess.action}
              </div>
              
              <div className="text-cyan-400 font-mono text-xs font-bold">
                {currentAnalysisProcess.amount}
              </div>

              {/* Barra de progreso mini con gradiente */}
              <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden mt-1">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-400 to-cyan-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 