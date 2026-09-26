import React, { useState, useEffect } from 'react';
import { MODULES_DATA } from './data/modulesData';
import { Module, Step } from './types/modules';
import { Header, AppViewMode } from './components/Header';
import { ModuleSelectorBar } from './components/ModuleSelectorBar';
import { PhoneSimulator } from './components/PhoneSimulator';
import { StepGuidePanel } from './components/StepGuidePanel';
import { CoverPageView } from './components/CoverPageView';
import { WelcomeLandingView } from './components/WelcomeLandingView';
import { AddModuleModal } from './components/AddModuleModal';
import { BatchUploadModal } from './components/BatchUploadModal';
import { 
  getStoredProgress, 
  saveStoredProgress, 
  saveScreenshotForStep, 
  getScreenshotForStep,
  UserProgress 
} from './utils/storage';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  Smartphone, 
  Info, 
  CheckCircle2, 
  RotateCcw,
  Film
} from 'lucide-react';

export default function App() {
  const [modules, setModules] = useState<Module[]>(MODULES_DATA);
  const [activeModuleId, setActiveModuleId] = useState<string>('login-registro-cuenta');
  const [activeStepNumber, setActiveStepNumber] = useState<number>(1);
  const [viewMode, setViewMode] = useState<AppViewMode>('landing');
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [isBatchUploadOpen, setIsBatchUploadOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);
  const [showCompletionBanner, setShowCompletionBanner] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = getStoredProgress();
    if (saved.completedSteps && saved.completedSteps.length > 0) {
      setCompletedSteps(saved.completedSteps);
    }
  }, []);

  // Save progress whenever completedSteps changes
  const markStepComplete = (stepId: number) => {
    setCompletedSteps(prev => {
      const next = prev.includes(stepId) ? prev : [...prev, stepId];
      saveStoredProgress({
        completedSteps: next,
        completedModules: [],
        lastActiveModuleId: activeModuleId,
        lastActiveStepId: stepId
      });
      return next;
    });
  };

  const toggleStepComplete = (stepId: number) => {
    setCompletedSteps(prev => {
      const next = prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId];
      saveStoredProgress({
        completedSteps: next,
        completedModules: [],
        lastActiveModuleId: activeModuleId,
        lastActiveStepId: stepId
      });
      return next;
    });
  };

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];
  const activeStep = activeModule.steps.find(s => s.stepNumber === activeStepNumber) || activeModule.steps[0] || {
    id: 1,
    stepNumber: 1,
    title: 'Paso 1',
    screenTitle: 'Pantalla',
    category: 'cartelera',
    summary: 'Instrucciones para este paso.',
    actionRequired: 'Toca en pantalla para continuar.',
    detailedInstructions: ['Sigue las instrucciones del manual.'],
    tips: ['Revisa la pantalla.'],
    hotspot: { x: 50, y: 50, label: 'Acción', actionText: 'Tocar' },
    keyDetails: []
  };

  const handleNextStep = () => {
    markStepComplete(activeStep.id);
    if (activeStepNumber < activeModule.steps.length) {
      setActiveStepNumber(n => n + 1);
    } else {
      // Completed all steps in the module!
      setShowCompletionBanner(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const handlePrevStep = () => {
    if (activeStepNumber > 1) {
      setActiveStepNumber(n => n - 1);
    }
  };

  const handleSelectStep = (stepNum: number) => {
    setActiveStepNumber(stepNum);
    setShowCompletionBanner(false);
  };

  const handleSelectModule = (moduleId: string) => {
    const mod = modules.find(m => m.id === moduleId);
    if (mod && !mod.isAvailable) {
      alert(`El módulo "${mod.title}" estará disponible pronto con tu nuevo lote de imágenes.`);
      return;
    }
    setActiveModuleId(moduleId);
    setActiveStepNumber(1);
    setShowCompletionBanner(false);
  };

  const handleAddNewModule = (newModuleData: Partial<Module>) => {
    const created: Module = {
      id: newModuleData.id || `mod-${Date.now()}`,
      title: newModuleData.title || 'Nuevo Módulo',
      shortDescription: newModuleData.shortDescription || 'Módulo personalizado.',
      fullDescription: newModuleData.fullDescription || '',
      category: newModuleData.category || 'Boletas',
      badge: 'Personalizado',
      durationMinutes: newModuleData.durationMinutes || 5,
      difficulty: 'Principiante',
      totalSteps: newModuleData.steps?.length || 1,
      isAvailable: true,
      steps: newModuleData.steps || [],
      iconName: 'Sparkles'
    };

    setModules(prev => [...prev, created]);
    setActiveModuleId(created.id);
    setActiveStepNumber(1);
  };

  const handleUploadScreenshotForCurrentStep = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        saveScreenshotForStep(activeModule.id, activeStepNumber, dataUrl);
        // Force refresh component
        setModules(prev => [...prev]);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUploadScreenshotForStep = (stepNumber: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        saveScreenshotForStep(activeModule.id, stepNumber, dataUrl);
        setModules(prev => [...prev]);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveBatchScreenshots = (filesMap: Record<number, string>) => {
    Object.entries(filesMap).forEach(([stepStr, dataUrl]) => {
      const stepNum = parseInt(stepStr, 10);
      saveScreenshotForStep(activeModule.id, stepNum, dataUrl);
    });
    setModules(prev => [...prev]);
  };

  const currentScreenshot = getScreenshotForStep(activeModule.id, activeStepNumber) || activeStep.customImageUrl;

  return (
    <div className="min-h-screen bg-[#0c0d10] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Bar Header */}
      <Header
        currentView={viewMode}
        onChangeView={setViewMode}
        onOpenAddModule={() => setIsAddModuleOpen(true)}
        onOpenBatchUpload={() => setIsBatchUploadOpen(true)}
        completedCount={completedSteps.length}
        totalCount={activeModule.steps.length}
      />

      {/* Module Selector Bar (Only in simulator view) */}
      {viewMode === 'simulator' && (
        <ModuleSelectorBar
          modules={modules}
          activeModuleId={activeModuleId}
          onSelectModule={handleSelectModule}
          onOpenAddModule={() => setIsAddModuleOpen(true)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Module Sub-Header & Info Banner (Only in simulator view) */}
        {viewMode === 'simulator' && (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                  {activeModule.badge}
                </span>
                <span className="text-slate-500 text-xs">·</span>
                <span className="text-xs text-slate-400">
                  {activeModule.steps.length} pantallas interactivas
                </span>
                <span className="text-slate-500 text-xs">·</span>
                <span className="text-xs text-slate-400">
                  {activeModule.durationMinutes} min de aprendizaje
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeModule.title}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                {activeModule.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => {
                  setCompletedSteps([]);
                  saveStoredProgress({
                    completedSteps: [],
                    completedModules: [],
                    lastActiveModuleId: activeModuleId,
                    lastActiveStepId: 1
                  });
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Progreso</span>
              </button>
            </div>
          </div>
        )}

        {/* View Mode Switching */}
        {viewMode === 'landing' && (
          <WelcomeLandingView
            onContinue={() => setViewMode('cover')}
          />
        )}

        {viewMode === 'cover' && (
          <CoverPageView
            modules={modules}
            onOpenSimulator={(modId) => {
              if (modId) setActiveModuleId(modId);
              setActiveStepNumber(1);
              setViewMode('simulator');
            }}
            onBackToLanding={() => setViewMode('landing')}
          />
        )}

        {viewMode === 'simulator' && (
          <div className="space-y-6">
            {/* Top Return Button matching reference image */}
            <div className="flex items-center justify-between pb-1">
              <button
                onClick={() => setViewMode('cover')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/15 cursor-pointer shadow-sm group hover:scale-[1.02]"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Volver a la bienvenida / Portada</span>
              </button>

              <span className="text-xs text-slate-400 hidden sm:inline-block">
                Módulo actual: <strong className="text-white">{activeModule.title}</strong> ({activeModule.steps.length} pasos)
              </span>
            </div>

            {/* Completion Dialog / Alert if finished all steps */}
            {showCompletionBanner && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-[#12231c] border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      ¡Excelente trabajo! Has completado los {activeModule.steps.length} pasos
                    </h3>
                    <p className="text-xs text-emerald-300">
                      Has finalizado exitosamente este recorrido interactivo en la app de Cinemark.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setViewMode('cover')}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Ver Otros Tutoriales</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setShowCompletionBanner(false)}
                    className="px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}

            {/* Two-Column Layout: Mobile Simulator + Step Instructions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Interactive Mobile Phone Simulator */}
              <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
                <PhoneSimulator
                  step={activeStep}
                  moduleSteps={activeModule.steps}
                  onNextStep={handleNextStep}
                  onPrevStep={handlePrevStep}
                  onSelectStep={handleSelectStep}
                  customScreenshotUrl={currentScreenshot}
                  onUploadScreenshot={handleUploadScreenshotForCurrentStep}
                  onOpenBatchUpload={() => setIsBatchUploadOpen(true)}
                  moduleId={activeModule.id}
                  totalSteps={activeModule.steps.length}
                />
              </div>

              {/* Right Column: Step Guidance & Learning Panel */}
              <div className="lg:col-span-7 xl:col-span-7 h-full min-h-[600px] flex flex-col">
                <StepGuidePanel
                  step={activeStep}
                  totalSteps={activeModule.steps.length}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                  onSelectStep={handleSelectStep}
                  isCompleted={completedSteps.includes(activeStep.id)}
                  onToggleComplete={() => toggleStepComplete(activeStep.id)}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 py-6 px-4 text-center text-xs text-slate-500 bg-[#0c0d10]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Cinemark Academy · Manual Educativo Interactivo</span>
          </div>
          <div>
            Diseñado para aprendizaje paso a paso por módulos · Cinemark Colombia
          </div>
        </div>
      </footer>

      {/* Add Module Modal */}
      <AddModuleModal
        isOpen={isAddModuleOpen}
        onClose={() => setIsAddModuleOpen(false)}
        onAddNewModule={handleAddNewModule}
      />

      {/* Batch Upload Modal for Module Screenshots */}
      <BatchUploadModal
        isOpen={isBatchUploadOpen}
        onClose={() => setIsBatchUploadOpen(false)}
        onSaveBatch={handleSaveBatchScreenshots}
        totalSteps={activeModule.steps.length}
        moduleTitle={activeModule.title}
      />
    </div>
  );
}
