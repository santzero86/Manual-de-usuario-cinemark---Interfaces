import React, { useState, useRef, useEffect } from 'react';
import {
  Info,
  Home,
  Search,
  X,
  ChevronRight,
  Sparkles,
  Ticket,
  User,
  ArrowRight,
  BookOpen,
  Headphones
} from 'lucide-react';
import { Module } from '../types/modules';

export type AppViewMode = 'landing' | 'manual' | 'cover' | 'simulator' | 'info';

interface HeaderProps {
  currentView: AppViewMode;
  onChangeView: (view: AppViewMode) => void;
  modules?: Module[];
  onSelectTutorial?: (moduleId: string, stepNumber?: number) => void;
  onOpenAddModule?: () => void;
  onOpenBatchUpload?: () => void;
  completedCount?: number;
  totalCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onChangeView,
  modules = [],
  onSelectTutorial,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filter modules and steps based on search query
  const query = searchQuery.trim().toLowerCase();
  
  const filteredResults = modules.map(mod => {
    const titleMatch = mod.title.toLowerCase().includes(query);
    const descMatch = mod.shortDescription?.toLowerCase().includes(query) || mod.fullDescription?.toLowerCase().includes(query);
    const categoryMatch = mod.category?.toLowerCase().includes(query) || mod.badge?.toLowerCase().includes(query);
    
    // Check matching steps
    const matchingSteps = mod.steps.filter(step => 
      step.title.toLowerCase().includes(query) ||
      step.summary?.toLowerCase().includes(query) ||
      step.actionRequired?.toLowerCase().includes(query)
    );

    const isMatch = !query || titleMatch || descMatch || categoryMatch || matchingSteps.length > 0;

    return {
      module: mod,
      isMatch,
      matchingSteps: query ? matchingSteps : []
    };
  }).filter(item => item.isMatch);

  const handleSelect = (moduleId: string, stepNumber: number = 1) => {
    setIsOpen(false);
    setSearchQuery('');
    if (onSelectTutorial) {
      onSelectTutorial(moduleId, stepNumber);
    } else {
      onChangeView('simulator');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs px-3 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
      {/* Zone 1: Brand Wordmark */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button 
          onClick={() => onChangeView('landing')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
          title="Cinemark"
        >
          <div className="w-8 h-8 rounded-full bg-[#d6001c] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-md shadow-red-900/20 group-hover:scale-105 transition-transform shrink-0">
            C
          </div>
          <div className="hidden sm:block">
            <div className="text-sm sm:text-base font-bold tracking-tight text-slate-900 flex items-center gap-1.5 group-hover:text-red-600 transition-colors">
              <span>Cinemark</span>
            </div>
            <div className="text-[10px] text-slate-500">Guía Interactiva</div>
          </div>
        </button>
      </div>

      {/* Zone 2: Center Search Bar */}
      <div ref={containerRef} className="flex-1 max-w-xs sm:max-w-md lg:max-w-lg mx-auto relative group">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none transition-colors group-focus-within:text-red-600" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Buscar en el Manual..."
            className="w-full pl-9 pr-8 py-1.5 bg-neutral-100 hover:bg-neutral-200/80 focus:bg-white border border-neutral-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 rounded-full text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 transition-all outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setIsOpen(false);
              }}
              className="absolute right-2.5 text-neutral-400 hover:text-neutral-700 p-0.5 rounded-full cursor-pointer"
              title="Limpiar búsqueda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden z-50 animate-fade-scale max-h-[75vh] flex flex-col">
            <div className="px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-semibold">
              <span className="flex items-center gap-1.5 text-neutral-800">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span>
                  {query
                    ? `Resultados (${filteredResults.length})`
                    : `Módulos del Manual (${modules.length})`
                  }
                </span>
              </span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                {query ? 'Filtrado' : 'Oficial'}
              </span>
            </div>

            <div className="overflow-y-auto divide-y divide-neutral-100 p-1.5 space-y-1">
              {filteredResults.length === 0 ? (
                <div className="py-8 px-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto">
                    <Search className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-neutral-800">
                    No se encontraron resultados en el manual con "{searchQuery}"
                  </p>
                  <p className="text-[11px] text-neutral-500 max-w-xs mx-auto">
                    Prueba buscando términos como <span className="font-semibold text-red-600">"boletas"</span>, <span className="font-semibold text-red-600">"asientos"</span>, <span className="font-semibold text-red-600">"registro"</span> o <span className="font-semibold text-red-600">"pse"</span>.
                  </p>
                </div>
              ) : (
                filteredResults.map(({ module: mod, matchingSteps }) => (
                  <div
                    key={mod.id}
                    className="p-2.5 rounded-xl hover:bg-neutral-100/80 transition-colors group cursor-pointer"
                    onClick={() => handleSelect(mod.id, 1)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          {mod.id === 'compra-boletas-confiteria' ? (
                            <Ticket className="w-4 h-4" />
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-red-600 transition-colors leading-snug">
                              {mod.title}
                            </h4>
                            <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.2 rounded-md shrink-0">
                              {mod.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                            {mod.shortDescription}
                          </p>
                          <div className="text-[10px] text-neutral-400 mt-1 flex items-center gap-2">
                            <span>{mod.steps.length} pantallas interactivas</span>
                            <span>·</span>
                            <span>{mod.durationMinutes} min</span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all text-xs font-bold pt-1">
                        <span className="hidden sm:inline text-[11px]">Abrir</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Specific matching steps (if matched by query) */}
                    {matchingSteps.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-100 pl-10 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                          Pasos coincidentes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {matchingSteps.slice(0, 3).map(s => (
                            <button
                              key={s.stepNumber}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelect(mod.id, s.stepNumber);
                              }}
                              className="text-[10px] font-semibold text-neutral-700 hover:text-red-600 bg-white hover:bg-red-50 border border-neutral-200 hover:border-red-300 rounded-lg px-2 py-0.5 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <span>Paso {s.stepNumber}: {s.title}</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Zone 3: Navigation Links */}
      <nav className="flex items-center gap-1 sm:gap-2 text-xs font-semibold shrink-0">
        <button
          onClick={() => onChangeView('landing')}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95 ${
            currentView === 'landing'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/20 ring-1 ring-red-400 scale-[1.02]'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:scale-[1.02]'
          }`}
          title="Inicio"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Inicio</span>
        </button>

        <button
          onClick={() => onChangeView('manual')}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95 ${
            currentView === 'manual'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/20 ring-1 ring-red-400 scale-[1.02]'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:scale-[1.02]'
          }`}
          title="Información de la app"
        >
          <Info className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Información de la app</span>
        </button>

        <button
          onClick={() => onChangeView('cover')}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95 ${
            currentView === 'cover'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/20 ring-1 ring-red-400 scale-[1.02]'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:scale-[1.02]'
          }`}
          title="Manual"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Manual</span>
        </button>

        <button
          onClick={() => onChangeView('info')}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95 ${
            currentView === 'info'
              ? 'bg-[#d6001c] text-white shadow-md shadow-red-950/20 ring-1 ring-red-400 scale-[1.02]'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:scale-[1.02]'
          }`}
          title="Soportes y ayudas"
        >
          <Headphones className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Soportes y ayudas</span>
        </button>
      </nav>
    </header>
  );
};
