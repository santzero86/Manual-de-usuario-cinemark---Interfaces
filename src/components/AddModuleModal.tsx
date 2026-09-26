import React, { useState } from 'react';
import { Module } from '../types/modules';
import { X, Upload, Plus, Film, Sparkles, FolderPlus, Check } from 'lucide-react';

interface AddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNewModule: (newModule: Partial<Module>, imageFiles?: File[]) => void;
}

export const AddModuleModal: React.FC<AddModuleModalProps> = ({
  isOpen,
  onClose,
  onAddNewModule,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Boletas' | 'Confitería' | 'Membresías' | 'Cuenta y Pagos'>('Boletas');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddNewModule(
      {
        id: `custom-${Date.now()}`,
        title,
        shortDescription: description || 'Módulo personalizado de aprendizaje.',
        fullDescription: description || 'Módulo añadido con capturas de la aplicación de Cinemark.',
        category,
        badge: 'Nuevo Módulo',
        durationMinutes: Math.max(3, selectedFiles.length || 5),
        difficulty: 'Principiante',
        totalSteps: Math.max(1, selectedFiles.length),
        isAvailable: true,
        iconName: 'Sparkles',
        steps: selectedFiles.map((file, idx) => ({
          id: Date.now() + idx,
          stepNumber: idx + 1,
          title: `Paso ${idx + 1}: ${file.name.replace(/\.[^/.]+$/, '')}`,
          screenTitle: `Captura ${idx + 1}`,
          category: 'cartelera',
          summary: `Instrucción correspondiente a la pantalla ${idx + 1}.`,
          actionRequired: `Observa la pantalla y sigue la indicación guiada.`,
          detailedInstructions: [
            `Paso importado desde ${file.name}.`,
            `Configurado para la guía paso a paso de Cinemark.`
          ],
          tips: ['Revisa atentamente los botones activos en esta pantalla.'],
          hotspot: { x: 50, y: 50, label: 'Acción', actionText: 'Tocar para continuar' },
          keyDetails: [{ label: 'Archivo', value: file.name }],
          customImageUrl: URL.createObjectURL(file)
        }))
      },
      selectedFiles
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#161821] border border-white/10 rounded-3xl max-w-lg w-full p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center">
            <FolderPlus className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Añadir Nuevo Módulo</h3>
            <p className="text-xs text-slate-400">
              Sube un nuevo lote de imágenes de Cinemark para crear un módulo interactivo.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-semibold text-slate-300 block mb-1">Título del Módulo *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Registro en Cine Club, Canje de Cupones, Reembolsos..."
              className="w-full bg-[#111218] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-slate-300 block mb-1">Categoría</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-[#111218] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-red-500 text-xs"
              >
                <option value="Boletas">Boletas</option>
                <option value="Confitería">Confitería</option>
                <option value="Membresías">Membresías</option>
                <option value="Cuenta y Pagos">Cuenta y Pagos</option>
              </select>
            </div>
            <div>
              <label className="font-semibold text-slate-300 block mb-1">Imágenes Seleccionadas</label>
              <div className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 font-medium">
                {selectedFiles.length} {selectedFiles.length === 1 ? 'archivo' : 'archivos'}
              </div>
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-300 block mb-1">Descripción Breve</label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="¿Qué aprenderá el usuario con este grupo de pantallas?"
              className="w-full bg-[#111218] border border-white/10 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-xs"
            />
          </div>

          {/* Image Uploader */}
          <div>
            <label className="font-semibold text-slate-300 block mb-1">
              Subir Capturas de Pantalla (JPG / PNG)
            </label>
            <label className="flex flex-col items-center justify-center p-5 border-2 border-dashed border-white/15 hover:border-red-500/50 rounded-2xl cursor-pointer bg-white/[0.02] hover:bg-white/[0.04] transition-all text-center">
              <Upload className="w-6 h-6 text-red-400 mb-2" />
              <span className="font-semibold text-slate-200 text-xs mb-0.5">
                Arrastra o haz clic para subir imágenes
              </span>
              <span className="text-[10px] text-slate-400">
                Puedes seleccionar varias imágenes a la vez en orden
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFiles}
                className="hidden"
              />
            </label>

            {selectedFiles.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1">
                {selectedFiles.map((file, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/10 rounded-md text-[10px] text-slate-200"
                  >
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                    <span className="truncate max-w-[120px]">{file.name}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              Crear Módulo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
