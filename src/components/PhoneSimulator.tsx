import React, { useState } from 'react';
import { Step } from '../types/modules';
import { Sparkles, Film, Upload, ChevronsDown } from 'lucide-react';

interface PhoneSimulatorProps {
  step: Step;
  onNextStep: () => void;
  onPrevStep: () => void;
  onSelectStep: (stepNumber: number) => void;
  customScreenshotUrl?: string | null;
  onUploadScreenshot?: (file: File) => void;
  onOpenBatchUpload?: () => void;
  moduleId?: string;
  totalSteps?: number;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({
  step,
  onNextStep,
  customScreenshotUrl,
  onUploadScreenshot,
  onOpenBatchUpload,
  moduleId,
  totalSteps,
}) => {
  const [isTapped, setIsTapped] = useState(false);

  const handleHotspotClick = () => {
    setIsTapped(true);
    setTimeout(() => {
      setIsTapped(false);
      onNextStep();
    }, 280);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && onUploadScreenshot) {
      onUploadScreenshot(e.target.files[0]);
    }
  };

  const showUploadControls = Boolean(onUploadScreenshot || onOpenBatchUpload)

  // Solo muestra flecha si el paso tiene configurado explícitamente 'scroll-down' (pasos 1 y 2)
  const isScrollIndicator = step.hotspot.type === 'scroll-down';

  return (
    <div className="flex flex-col items-center select-none">
      {/* Controles de carga solo si aplican */}
      {showUploadControls && (
        <div className="flex items-center justify-end w-full max-w-[380px] mb-3 px-1 text-xs gap-1.5">
          {onOpenBatchUpload && (
            <button
              onClick={onOpenBatchUpload}
              title={`Cargar las ${totalSteps || 3} capturas de una sola vez`}
              className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-700 hover:text-slate-900 border border-slate-300 text-[11px] font-medium transition-colors"
            >
              Cargar {totalSteps || 3} Fotos
            </button>
          )}

          {onUploadScreenshot && (
            <label className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 cursor-pointer transition-colors text-[11px]">
              <Upload className="w-3 h-3 text-red-600" />
              <span>Subir {step.stepNumber}.jpg</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageFileChange}
              />
            </label>
          )}
        </div>
      )}

      {/* Chasis del Smartphone */}
      <div className="relative w-[340px] sm:w-[370px] h-[720px] bg-[#000000] rounded-[44px] p-3 shadow-2xl border-[4px] border-[#2a2c36] ring-1 ring-white/10 flex flex-col justify-between overflow-hidden">
        {/* Notch superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-black rounded-b-xl z-50 flex items-center justify-center">
          <div className="w-12 h-1 bg-neutral-800 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full ml-3 border border-neutral-800"></div>
        </div>

        {/* Pantalla del Teléfono */}
        <div className="relative w-full h-full bg-black rounded-[34px] overflow-hidden flex flex-col text-slate-900 font-sans shadow-inner">
          <div className="relative flex-1 overflow-hidden bg-black flex flex-col">
            <div key={`screen-${step.id}`} className="w-full h-full flex flex-col items-center justify-center bg-black text-slate-300 relative overflow-hidden animate-fade-scale">
              {customScreenshotUrl ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <img
                    src={customScreenshotUrl}
                    alt={`Paso ${step.stepNumber} - ${step.title}`}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />

                  {/* Renderizado condicional: Flecha de Scroll vs Punto */}
                  <div
                    style={{
                      left: `${step.hotspot.x}%`,
                      top: `${step.hotspot.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={handleHotspotClick}
                    className="absolute z-40 cursor-pointer group flex flex-col items-center transition-all duration-300"
                  >
                    {isScrollIndicator ? (
                      /* === INDICADOR DE FLECHA DE SCROLL === */
                      <div className="flex flex-col items-center">
                        <span className="absolute -inset-2 rounded-full bg-red-600/30 animate-ping"></span>
                        
                        {/* Botón con flechas que rebotan hacia abajo */}
                        <div
                          className={`relative flex items-center justify-center w-11 h-11 rounded-full bg-[#d6001c] text-white border-2 border-white shadow-2xl transition-all duration-200 animate-bounce ${
                            isTapped ? 'scale-125 bg-emerald-600' : 'group-hover:scale-110'
                          }`}
                        >
                          <ChevronsDown className="w-6 h-6 stroke-[3]" />
                        </div>

                        {/* Etiqueta indicativa */}
                        <div className="mt-1 px-3 py-1 bg-black/90 text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap pointer-events-none opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 flex items-center gap-1.5 border border-white/20">
                          <span>{step.hotspot.label || 'Desliza hacia abajo'}</span>
                        </div>
                      </div>
                    ) : (
                      /* === INDICADOR CONVENCIONAL DE PUNTO === */
                      <>
                        <span className="absolute w-12 h-12 rounded-full bg-red-500/30 animate-ping"></span>
                        <span className="absolute w-8 h-8 rounded-full bg-red-500/50 animate-pulse"></span>
                        <div
                          className={`relative w-7 h-7 rounded-full bg-red-600 border-2 border-white shadow-lg flex items-center justify-center transition-all duration-200 ${
                            isTapped ? 'scale-125 bg-emerald-600' : 'group-hover:scale-115'
                          }`}
                        >
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div className="mt-1 px-2.5 py-0.5 bg-black/90 text-white text-[10px] font-medium rounded-full shadow-md whitespace-nowrap pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 flex items-center gap-1 border border-white/20">
                          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                          <span>{step.hotspot.label}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-red-500/40 rounded-2xl w-[90%] bg-slate-900/90 text-center shadow-lg">
                  <div className="w-14 h-14 rounded-full bg-red-600/20 text-red-500 border border-red-500/40 flex items-center justify-center mb-3">
                    <Film className="w-7 h-7" />
                  </div>
                  <span className="font-bold text-white text-sm mb-1">
                    Captura {step.stepNumber}.jpg
                  </span>
                  <p className="text-xs text-slate-300 mb-4 max-w-[220px]">
                    {onUploadScreenshot
                      ? 'Carga la captura de pantalla correspondiente para visualizar este paso:'
                      : 'Esta pantalla usa la imagen oficial incluida en el manual.'}
                  </p>
                  {onUploadScreenshot && (
                    <label className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Cargar {step.stepNumber}.jpg</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageFileChange}
                      />
                    </label>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};