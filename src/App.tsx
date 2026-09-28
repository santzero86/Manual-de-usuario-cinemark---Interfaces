import React, { useState, useEffect } from 'react';
import { MODULES_DATA } from './data/modulesData';
import { Module, Step } from './types/modules';
import { Header, AppViewMode } from './components/Header';
import { ModuleSelectorBar } from './components/ModuleSelectorBar';
import { PhoneSimulator } from './components/PhoneSimulator';
import { StepGuidePanel } from './components/StepGuidePanel';
import { CoverPageView } from './components/CoverPageView';
import { WelcomeLandingView } from './components/WelcomeLandingView';
import { ManualDocumentView } from './components/ManualDocumentView';
import { MoreInfoView } from './components/MoreInfoView';
import { AddModuleModal } from './components/AddModuleModal';
import { BatchUploadModal } from './components/BatchUploadModal';
import { 
  getStoredProgress, 
  saveStoredProgress, 
  saveScreenshotForStep, 
  getScreenshotForStep,
  UserProgress 
} from './utils/storage';
import { getBundledScreenshot, hasBundledScreenshots } from './utils/moduleScreenshots';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  Smartphone, 
  Info, 
  CheckCircle2, 
  Film
} from 'lucide-react';

const VIEW_LABELS: Record<AppViewMode, string> = {
  landing: 'Inicio',
  manual: 'Información de la app',
  cover: 'Manual',
  simulator: 'Manual',
  info: 'Soportes y ayudas',
};

export default function App() {
  const [modules, setModules] = useState<Module[]>(MODULES_DATA);
  const [activeModuleId, setActiveModuleId] = useState<string>('login-registro-cuenta');
  const [activeStepNumber, setActiveStepNumber] = useState<number>(1);
  const [viewMode, setViewMode] = useState<AppViewMode>('landing');
  const [previousViewMode, setPreviousViewMode] = useState<AppViewMode>('landing');
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [isBatchUploadOpen, setIsBatchUploadOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);
  const [showCompletionBanner, setShowCompletionBanner] = useState(false);

  // Navigates between tabs while remembering the view we came from, so
  // "back" buttons can return to the previous page instead of always Inicio.
  const navigateTo = (view: AppViewMode) => {
    setPreviousViewMode(viewMode);
    setViewMode(view);
  };

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

  // Modules with bundled screenshots use src/assets/ images instead of user uploads
  const usesBundledScreenshots = hasBundledScreenshots(activeModule.id);
  const currentScreenshot =
    getBundledScreenshot(activeModule, activeStep) ||
    activeStep.customImageUrl ||
    getScreenshotForStep(activeModule.id, activeStepNumber);

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-800 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Bar Header */}
      <Header
        currentView={viewMode}
        onChangeView={navigateTo}
        modules={modules}
        onSelectTutorial={(modId, stepNum) => {
          setActiveModuleId(modId);
          setActiveStepNumber(stepNum || 1);
          setShowCompletionBanner(false);
          navigateTo('simulator');
        }}
        onOpenAddModule={() => setIsAddModuleOpen(true)}
        onOpenBatchUpload={usesBundledScreenshots ? undefined : () => setIsBatchUploadOpen(true)}
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  {activeModule.badge}
                </span>
                <span className="text-slate-400 text-xs">·</span>
                <span className="text-xs text-slate-600">
                  {activeModule.steps.length} pantallas interactivas
                </span>
                <span className="text-slate-400 text-xs">·</span>
                <span className="text-xs text-slate-600">
                  {activeModule.durationMinutes} min de aprendizaje
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeModule.title}
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                {activeModule.shortDescription}
              </p>
            </div>
          </div>
        )}

        {/* View Mode Switching */}
        <div key={viewMode} className="animate-fade-scale">
          {viewMode === 'landing' && (
            <WelcomeLandingView
              onContinue={() => navigateTo('cover')}
            />
          )}

          {viewMode === 'manual' && (
            <ManualDocumentView
              onGoBack={() => navigateTo(previousViewMode)}
              backLabel={VIEW_LABELS[previousViewMode]}
              onGoToTutorials={() => navigateTo('cover')}
              onGoToSimulator={(modId) => {
                if (modId) setActiveModuleId(modId);
                setActiveStepNumber(1);
                navigateTo('simulator');
              }}
            />
          )}

          {viewMode === 'cover' && (
            <CoverPageView
              modules={modules}
              onOpenSimulator={(modId) => {
                if (modId) setActiveModuleId(modId);
                setActiveStepNumber(1);
                navigateTo('simulator');
              }}
              onGoBack={() => navigateTo(previousViewMode)}
              backLabel={VIEW_LABELS[previousViewMode]}
            />
          )}

          {viewMode === 'info' && (
            <MoreInfoView />
          )}

          {viewMode === 'simulator' && (
            <div className="space-y-6">
              {/* Top Return Button matching reference image */}
              <div className="flex items-center justify-between pb-1">
                <button
                  onClick={() => navigateTo(previousViewMode)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all duration-200 border border-slate-300 cursor-pointer shadow-xs group hover:scale-[1.02] active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4 text-red-600 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span>Volver a {VIEW_LABELS[previousViewMode]}</span>
                </button>

                <span className="text-xs text-slate-600 hidden sm:inline-block">
                  Módulo actual: <strong className="text-slate-900">{activeModule.title}</strong> ({activeModule.steps.length} pasos)
                </span>
              </div>

              {/* Completion Dialog / Alert if finished all steps */}
              {showCompletionBanner && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-[#12231c] border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-scale">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md animate-pulse">
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
                      onClick={() => navigateTo('cover')}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold shadow-md transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer hover:scale-105"
                    >
                      <span>Ver Otros Tutoriales</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setShowCompletionBanner(false)}
                      className="px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold transition-colors duration-150 cursor-pointer"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}

              {/* Two-Column Layout: Mobile Simulator + Step Guidance */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Interactive Mobile Phone Simulator */}
                <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
                  <PhoneSimulator
                    step={activeStep}
                    onNextStep={handleNextStep}
                    onPrevStep={handlePrevStep}
                    onSelectStep={handleSelectStep}
                    customScreenshotUrl={currentScreenshot}
                    onUploadScreenshot={usesBundledScreenshots ? undefined : handleUploadScreenshotForCurrentStep}
                    onOpenBatchUpload={usesBundledScreenshots ? undefined : () => setIsBatchUploadOpen(true)}
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
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-300/80 py-6 px-4 text-xs text-slate-600 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span className="font-semibold text-slate-700">Cinemark · Manual Educativo Interactivo</span>
          </div>

          {/* Centered Version Badge */}
          <div className="text-slate-500">
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
      {!usesBundledScreenshots && (
        <BatchUploadModal
          isOpen={isBatchUploadOpen}
          onClose={() => setIsBatchUploadOpen(false)}
          onSaveBatch={handleSaveBatchScreenshots}
          totalSteps={activeModule.steps.length}
          moduleTitle={activeModule.title}
        />
      )}
    </div>
  );
}
