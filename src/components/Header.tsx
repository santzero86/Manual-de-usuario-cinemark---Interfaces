import React from 'react';
import { Smartphone, FileText, Home } from 'lucide-react';

export type AppViewMode = 'landing' | 'cover' | 'simulator';

interface HeaderProps {
  currentView: AppViewMode;
  onChangeView: (view: AppViewMode) => void;
  onOpenAddModule: () => void;
  onOpenBatchUpload?: () => void;
  completedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onChangeView,
  onOpenAddModule,
  onOpenBatchUpload,
  completedCount,
  totalCount,
}) => {
  const percentage = Math.round((completedCount / (totalCount || 1)) * 100);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3 flex items-center justify-between">
      {/* Zone 1: Brand Wordmark */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#d6001c] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-md shadow-red-900/40">
          C
        </div>
        <button 
          onClick={() => onChangeView('landing')}
          className="text-left group cursor-pointer"
        >
          <div className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-1.5 group-hover:text-red-400 transition-colors">
            <span>Cinemark Academy</span>
            <span className="hidden sm:inline-block text-[10px] font-semibold text-red-500 uppercase tracking-wider ml-1 bg-red-950/60 px-2 py-0.5 rounded-full border border-red-500/30">
              v1.0.0.00
            </span>
          </div>
          <div className="text-[10px] text-slate-400">Guía Interactiva de Usuario · Cali</div>
        </button>
      </div>

      {/* Zone 2: Navigation Links */}
      <nav className="flex items-center gap-1 sm:gap-2 text-xs font-semibold">
        <button
          onClick={() => onChangeView('landing')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            currentView === 'landing'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/50 ring-1 ring-red-400'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Inicio</span>
        </button>

        <button
          onClick={() => onChangeView('cover')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            currentView === 'cover'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/50 ring-1 ring-red-400'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Tutoriales</span>
        </button>

        <button
          onClick={() => onChangeView('simulator')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            currentView === 'simulator'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/50 ring-1 ring-red-400'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Simulador</span>
        </button>
      </nav>

      {/* Zone 3: Actions & Progress */}
      <div className="flex items-center gap-2 sm:gap-3">
        {onOpenBatchUpload && currentView === 'simulator' && (
          <button
            onClick={onOpenBatchUpload}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-300 hover:text-white text-xs font-semibold rounded-xl border border-red-500/30 transition-colors whitespace-nowrap"
          >
            <span>📸 Cargar Capturas</span>
          </button>
        )}

        {/* Progress Display */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs">
          <div className="w-14 sm:w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <span className="font-semibold text-emerald-400 text-[11px] whitespace-nowrap">
            {completedCount}/{totalCount}
          </span>
        </div>
      </div>
    </header>
  );
};
