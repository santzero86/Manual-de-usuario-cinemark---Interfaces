import React from 'react';
import { Step } from '../types/modules';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle, 
  Clock, 
  Lightbulb, 
  Check, 
  ChevronRight,
  Bookmark
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
    <div className="flex flex-col h-full bg-[#13141a] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-xl">
      {/* Top Step Pill & Progress */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
            Paso {step.stepNumber} de {totalSteps}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {step.screenTitle}
          </span>
        </div>

        <button
          onClick={onToggleComplete}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
            isCompleted
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
          }`}
        >
          <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : 'text-slate-400'}`} />
          <span>{isCompleted ? 'Paso Aprendido' : 'Marcar como aprendido'}</span>
        </button>
      </div>

      {/* Step Header */}
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
          {step.title}
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          {step.summary}
        </p>
      </div>

      {/* Action Required Box */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/60 to-[#1e1317] border border-red-500/40 mb-5 relative overflow-hidden shadow-sm">
        <div className="flex items-start gap-3 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-300 mb-1">
              Acción que debes realizar:
            </h4>
            <p className="text-sm font-semibold text-white leading-snug">
              {step.actionRequired}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Content & Scrollable Body */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Step Instructions */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <span>Guía detallada en pantalla</span>
          </h4>
          <ul className="space-y-2">
            {step.detailedInstructions.map((instruction, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <span className="w-4 h-4 rounded-full bg-white/10 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{instruction}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key details table */}
        {step.keyDetails && step.keyDetails.length > 0 && (
          <div className="rounded-xl bg-black/40 border border-white/5 p-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {step.keyDetails.map((detail, idx) => (
                <div key={idx} className="border-b border-white/5 pb-1">
                  <span className="text-[10px] text-slate-400 block">{detail.label}</span>
                  <span className="font-semibold text-slate-200">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Box */}
        {step.tips && step.tips.length > 0 && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
            <div className="flex items-center gap-2 font-bold text-amber-300 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Consejos Cinemark</span>
            </div>
            <ul className="space-y-1.5 text-slate-300">
              {step.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 text-xs">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Warnings Box */}
        {step.warnings && step.warnings.length > 0 && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs">
            <div className="flex items-center gap-2 font-bold text-rose-300 mb-1">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Importante tener en cuenta</span>
            </div>
            <ul className="space-y-1 text-slate-300">
              {step.warnings.map((warn, idx) => (
                <li key={idx}>⚠️ {warn}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Step Quick Jump Bar */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Pasos del módulo:</span>
          <span>{step.stepNumber} de {totalSteps}</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-2">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const num = i + 1;
            const isCurrent = num === step.stepNumber;
            return (
              <button
                key={num}
                onClick={() => onSelectStep(num)}
                className={`h-7 px-2.5 rounded-md text-xs font-semibold shrink-0 transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-400'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
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
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              step.stepNumber === 1
                ? 'opacity-40 cursor-not-allowed border-white/5 text-slate-500'
                : 'border-white/10 hover:border-white/20 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Paso Anterior</span>
          </button>

          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-950/50 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>{step.stepNumber === totalSteps ? '¡Finalizar Módulo!' : 'Siguiente Paso'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
