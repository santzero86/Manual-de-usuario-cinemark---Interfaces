import React, { useState } from 'react';
import { Upload, X, Check, Image as ImageIcon, Trash2 } from 'lucide-react';

interface BatchUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveBatch: (filesMap: Record<number, string>) => void;
  totalSteps: number;
  moduleTitle?: string;
}

export const BatchUploadModal: React.FC<BatchUploadModalProps> = ({
  isOpen,
  onClose,
  onSaveBatch,
  totalSteps,
  moduleTitle,
}) => {
  const [selectedPreviews, setSelectedPreviews] = useState<Record<number, { name: string; url: string }>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleFilesChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    
    // Sort files by number in filename (e.g., 1.jpg, 2.jpg... or by natural name)
    files.sort((a, b) => {
      const numA = parseInt(a.name.match(/\d+/)?.[0] || '0', 10);
      const numB = parseInt(b.name.match(/\d+/)?.[0] || '0', 10);
      if (numA !== 0 && numB !== 0) return numA - numB;
      return a.name.localeCompare(b.name);
    });

    setIsProcessing(true);
    const newMap: Record<number, { name: string; url: string }> = { ...selectedPreviews };

    let loadedCount = 0;
    files.forEach((file, index) => {
      // Try to match file number (e.g. "1.jpg" -> 1) or fallback to index + 1
      const detectedNum = parseInt(file.name.match(/\d+/)?.[0] || `${index + 1}`, 10);
      const targetStep = detectedNum > 0 && detectedNum <= totalSteps ? detectedNum : index + 1;

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          newMap[targetStep] = {
            name: file.name,
            url: base64
          };
        }
        loadedCount++;
        if (loadedCount === files.length) {
          setSelectedPreviews(newMap);
          setIsProcessing(false);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleApply = () => {
    const output: Record<number, string> = {};
    Object.entries(selectedPreviews).forEach(([stepStr, item]) => {
      output[parseInt(stepStr, 10)] = item.url;
    });
    onSaveBatch(output);
    onClose();
  };

  const handleRemove = (stepNum: number) => {
    setSelectedPreviews(prev => {
      const copy = { ...prev };
      delete copy[stepNum];
      return copy;
    });
  };

  const loadedCount = Object.keys(selectedPreviews).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#161821] border border-white/10 rounded-3xl max-w-2xl w-full p-6 text-white shadow-2xl relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">
              Cargar Capturas Originales (1.jpg - {totalSteps}.jpg)
            </h3>
            <p className="text-xs text-slate-400">
              {moduleTitle ? `Módulo: ${moduleTitle}. ` : ''}
              Selecciona tus {totalSteps} capturas de pantalla de Cinemark para vincularlas a cada paso.
            </p>
          </div>
        </div>

        {/* Upload Zone */}
        <div className="mb-4">
          <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-red-500/40 hover:border-red-500 rounded-2xl cursor-pointer bg-red-950/20 hover:bg-red-950/30 transition-all text-center">
            <Upload className="w-7 h-7 text-red-400 mb-2" />
            <span className="font-semibold text-white text-sm">
              Haz clic para seleccionar tus {totalSteps} imágenes (1.jpg a {totalSteps}.jpg)
            </span>
            <span className="text-xs text-slate-400 mt-1">
              Se asociarán automáticamente al paso correspondiente según su número de archivo (1.jpg, 2.jpg...)
            </span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFilesChosen}
              className="hidden"
            />
          </label>
        </div>

        {/* Slot Grid 1 to 14 */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/10">
            <span>Asignación por Paso ({loadedCount} de {totalSteps} asignados):</span>
            {loadedCount > 0 && (
              <button 
                onClick={() => setSelectedPreviews({})}
                className="text-red-400 hover:text-red-300 text-[11px]"
              >
                Limpiar todas
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
            {Array.from({ length: totalSteps }).map((_, idx) => {
              const stepNum = idx + 1;
              const hasFile = !!selectedPreviews[stepNum];

              return (
                <div
                  key={stepNum}
                  className={`p-2 rounded-xl border flex flex-col justify-between transition-all ${
                    hasFile
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-[11px]">Paso {stepNum}</span>
                    {hasFile ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                        <Check className="w-3 h-3" />
                        Listo
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-500">{stepNum}.jpg</span>
                    )}
                  </div>

                  {hasFile ? (
                    <div className="relative group rounded-lg overflow-hidden h-20 bg-black/60 border border-white/10 flex items-center justify-center">
                      <img
                        src={selectedPreviews[stepNum].url}
                        alt={`Paso ${stepNum}`}
                        className="w-full h-full object-contain"
                      />
                      <button
                        onClick={() => handleRemove(stepNum)}
                        className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-red-400 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="h-20 rounded-lg border border-dashed border-white/20 hover:border-red-400 flex flex-col items-center justify-center cursor-pointer text-slate-500 hover:text-white transition-colors">
                      <Upload className="w-4 h-4 mb-1" />
                      <span className="text-[9px]">Subir {stepNum}.jpg</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const f = e.target.files[0];
                            const r = new FileReader();
                            r.onload = (ev) => {
                              setSelectedPreviews(p => ({
                                ...p,
                                [stepNum]: { name: f.name, url: ev.target?.result as string }
                              }));
                            };
                            r.readAsDataURL(f);
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {loadedCount === 0 
              ? 'No has cargado imágenes aún.' 
              : `${loadedCount} captura(s) listas para integrarse.`}
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleApply}
              disabled={loadedCount === 0 || isProcessing}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                loadedCount > 0
                  ? 'bg-red-600 hover:bg-red-700 text-white cursor-pointer'
                  : 'bg-white/10 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isProcessing ? 'Procesando...' : `Aplicar ${loadedCount} Capturas`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
