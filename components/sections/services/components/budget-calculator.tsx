"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, DollarSign, Clock, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Card } from "@/components/ui/layout/card";
import { Badge } from "@/components/ui/display/badge";
import { 
  PROJECT_TYPES, 
  PROJECT_FEATURES, 
  COMPLEXITY_LEVELS, 
  TIMELINE_OPTIONS,
  type ProjectType,
  type ProjectFeature,
  type BudgetCalculation
} from "@/data/budget-calculator-data";

interface BudgetCalculatorProps {
  className?: string;
}

export function BudgetCalculator({ className = "" }: Readonly<BudgetCalculatorProps>) {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexityLevel, setComplexityLevel] = useState<string>("medium");
  const [timeline, setTimeline] = useState<number>(8);
  const [showResult, setShowResult] = useState(false);

  const calculation: BudgetCalculation = useMemo(() => {
    if (!selectedProject) {
      return {
        basePrice: 0,
        featuresTotal: 0,
        complexityMultiplier: 1,
        timelineMultiplier: 1,
        totalPrice: 0,
        breakdown: {
          project: 0,
          features: 0,
          complexity: 0,
          timeline: 0
        }
      };
    }

    const basePrice = selectedProject.basePrice;
    const featuresTotal = selectedFeatures.reduce((total, featureId) => {
      const feature = PROJECT_FEATURES.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    const complexity = COMPLEXITY_LEVELS.find(c => c.level === complexityLevel);
    const complexityMultiplier = complexity?.multiplier || 1;

    const timelineOption = TIMELINE_OPTIONS.find(t => t.weeks === timeline);
    const timelineMultiplier = timelineOption?.multiplier || 1;

    const projectTotal = basePrice * complexityMultiplier;
    const featuresTotalWithComplexity = featuresTotal * complexityMultiplier;
    const complexityAdjustment = (basePrice + featuresTotal) * (complexityMultiplier - 1);
    const timelineAdjustment = (projectTotal + featuresTotalWithComplexity) * (timelineMultiplier - 1);

    const totalPrice = projectTotal + featuresTotalWithComplexity + timelineAdjustment;

    return {
      basePrice,
      featuresTotal,
      complexityMultiplier,
      timelineMultiplier,
      totalPrice: Math.round(totalPrice),
      breakdown: {
        project: Math.round(projectTotal),
        features: Math.round(featuresTotalWithComplexity),
        complexity: Math.round(complexityAdjustment),
        timeline: Math.round(timelineAdjustment)
      }
    };
  }, [selectedProject, selectedFeatures, complexityLevel, timeline]);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const resetCalculator = () => {
    setSelectedProject(null);
    setSelectedFeatures([]);
    setComplexityLevel("medium");
    setTimeline(8);
    setShowResult(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Calculadora de Presupuestos</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Obtén una estimación personalizada para tu proyecto. Selecciona el tipo de proyecto, 
          características y plazos para recibir un presupuesto detallado.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Project Type Selection */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Tipo de Proyecto
            </h3>
            <div className="grid gap-3">
              {PROJECT_TYPES.map((project) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    selectedProject?.id === project.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <Badge variant="secondary" className="mt-2">
                        Desde {formatPrice(project.basePrice)}
                      </Badge>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </Card>

          {/* Features Selection */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Características Adicionales
                </h3>
                <div className="grid gap-3">
                  {PROJECT_FEATURES.map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        selectedFeatures.includes(feature.id)
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{feature.name}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                        <Badge variant="outline">
                          +{formatPrice(feature.price)}
                        </Badge>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}

          {/* Complexity and Timeline */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Complejidad
                </h3>
                <div className="space-y-2">
                  {COMPLEXITY_LEVELS.map((level) => (
                    <button
                      key={level.level}
                      onClick={() => setComplexityLevel(level.level)}
                      className={`w-full p-2 rounded text-left transition-colors ${
                        complexityLevel === level.level
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="font-medium">{level.label}</div>
                      <div className="text-sm text-muted-foreground">{level.description}</div>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Plazo de Entrega
                </h3>
                <div className="space-y-2">
                  {TIMELINE_OPTIONS.map((option) => (
                    <button
                      key={option.weeks}
                      onClick={() => setTimeline(option.weeks)}
                      className={`w-full p-2 rounded text-left transition-colors ${
                        timeline === option.weeks
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="font-medium">{option.label}</div>
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Results Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card className="p-6 sticky top-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Presupuesto Estimado
            </h3>

            {!selectedProject ? (
              <div className="text-center py-8 text-muted-foreground">
                <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Selecciona un tipo de proyecto para comenzar</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Total Price */}
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(calculation.totalPrice)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Precio total estimado
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Desglose del Presupuesto:</h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Proyecto base</span>
                      <span>{formatPrice(calculation.breakdown.project)}</span>
                    </div>
                    
                    {calculation.breakdown.features > 0 && (
                      <div className="flex justify-between">
                        <span>Características adicionales</span>
                        <span>{formatPrice(calculation.breakdown.features)}</span>
                      </div>
                    )}
                    
                    {calculation.breakdown.complexity > 0 && (
                      <div className="flex justify-between">
                        <span>Ajuste por complejidad</span>
                        <span>{formatPrice(calculation.breakdown.complexity)}</span>
                      </div>
                    )}
                    
                    {calculation.breakdown.timeline !== 0 && (
                      <div className="flex justify-between">
                        <span>Ajuste por plazo</span>
                        <span className={calculation.breakdown.timeline > 0 ? 'text-red-500' : 'text-green-500'}>
                          {calculation.breakdown.timeline > 0 ? '+' : ''}{formatPrice(calculation.breakdown.timeline)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={() => setShowResult(true)}
                    className="flex-1"
                    disabled={!selectedProject}
                  >
                    Solicitar Presupuesto
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetCalculator}
                  >
                    Reiniciar
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Los precios son estimaciones base</p>
                  <p>• Se requiere análisis detallado para precio final</p>
                  <p>• Incluye 3 meses de soporte técnico</p>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>

      {/* Result Modal */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowResult(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">¡Presupuesto Generado!</h3>
              <p className="text-muted-foreground mb-6">
                Tu presupuesto estimado es de <strong>{formatPrice(calculation.totalPrice)}</strong>. 
                ¿Te gustaría recibir una propuesta detallada?
              </p>
              <div className="flex gap-3">
                <Button className="flex-1">
                  Contactar Ahora
                </Button>
                <Button variant="outline" onClick={() => setShowResult(false)}>
                  Cerrar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
