import React from 'react';
import { Step } from '../types/modules';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb, 
} from 'lucide-react';

interface StepGuidePanelProps {
  step: Step;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectStep: (stepNumber: number) => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const StepGuidePanel: React.FC<StepGuidePanelProps> = ({
  step,
  totalSteps,
  onNext,
  onPrev,
  onSelectStep,
  isCompleted,
  onToggleComplete,
}) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm">
      {/* Top Step Pill & Progress */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider">
            Paso {step.stepNumber} de {totalSteps}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {step.screenTitle}
          </span>
        </div>
      </div>

      {/* Step Header */}
      <div key={`header-${step.id}`} className="mb-5 animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          {step.title}
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          {step.summary}
        </p>
      </div>

      {/* Action Required Box */}
      <div key={`action-${step.id}`} className="p-4 rounded-xl bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 border border-red-200/90 mb-5 relative overflow-hidden shadow-xs animate-fade-in">
        <div className="flex items-start gap-3 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-200" />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-red-700 mb-1">
              Acción que debes realizar:
            </h4>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              {step.actionRequired}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Content & Scrollable Body */}
      <div key={`body-${step.id}`} className="flex-1 overflow-y-auto space-y-4 pr-1 animate-fade-in">
        {/* Step Instructions */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
            <span>Guía detallada en pantalla</span>
          </h4>
          <ul className="space-y-2">
            {step.detailedInstructions.map((instruction, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed transition-all hover:translate-x-1">
                <span className="w-4 h-4 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{instruction}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key details table */}
        {step.keyDetails && step.keyDetails.length > 0 && (
          <div className="rounded-xl bg-slate-50 border border-slate-200/90 p-3 shadow-2xs">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {step.keyDetails.map((detail, idx) => (
                <div key={idx} className="border-b border-slate-200/80 pb-1">
                  <span className="text-[10px] text-slate-500 block">{detail.label}</span>
                  <span className="font-semibold text-slate-800">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Box */}
        {step.tips && step.tips.length > 0 && (
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-amber-800 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Consejos Cinemark</span>
            </div>
            <ul className="space-y-1.5 text-slate-700">
              {step.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 text-xs">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Warnings Box */}
        {step.warnings && step.warnings.length > 0 && (
          <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 text-xs shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-rose-800 mb-1">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Importante tener en cuenta</span>
            </div>
            <ul className="space-y-1 text-slate-700">
              {step.warnings.map((warn, idx) => (
                <li key={idx}>⚠️ {warn}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Step Quick Jump Bar */}
      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
          <span>Pasos del módulo:</span>
          <span className="font-semibold text-slate-700">{step.stepNumber} de {totalSteps}</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-2">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const num = i + 1;
            const isCurrent = num === step.stepNumber;
            return (
              <button
                key={num}
                onClick={() => onSelectStep(num)}
                className={`h-7 px-2.5 rounded-md text-xs font-semibold shrink-0 transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-90 ${
                  isCurrent
                    ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-400 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 hover:scale-105'
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>

        {/* Navigation CTAs */}
        <div className="flex items-center justify-between gap-3 mt-3">
          <button
            onClick={onPrev}
            disabled={step.stepNumber === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 active:scale-95 ${
              step.stepNumber === 1
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50'
                : 'border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 shadow-xs cursor-pointer hover:-translate-x-0.5'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Paso Anterior</span>
          </button>

          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-md shadow-red-900/20 transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            <span>{step.stepNumber === totalSteps ? '¡Finalizar Módulo!' : 'Siguiente Paso'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
