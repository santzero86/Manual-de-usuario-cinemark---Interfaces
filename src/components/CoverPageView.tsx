import React from 'react';
import { Module } from '../types/modules';
import { 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft,
  User,
  MapPin,
  Ticket,
  UtensilsCrossed,
  Headphones,
  Sparkles,
  Download
} from 'lucide-react';

interface CoverPageViewProps {
  modules: Module[];
  onOpenSimulator: (moduleId?: string) => void;
  onGoBack?: () => void;
  backLabel?: string;
}

export const CoverPageView: React.FC<CoverPageViewProps> = ({
  modules,
  onOpenSimulator,
  onGoBack,
  backLabel,
}) => {
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Download':
        return <Download className="w-6 h-6 text-red-600" />;
      case 'User':
      case 'LogIn':
        return <User className="w-6 h-6 text-red-600" />;
      case 'MapPin':
      case 'Building':
        return <MapPin className="w-6 h-6 text-red-600" />;
      case 'Ticket':
      case 'Film':
        return <Ticket className="w-6 h-6 text-red-600" />;
      case 'Popcorn':
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-red-600" />;
      case 'Headphones':
      case 'HelpCircle':
        return <Headphones className="w-6 h-6 text-red-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 pb-16 animate-fade-in text-slate-800">
      
      {/* Top Bar with Return to previous page option */}
      {onGoBack && (
        <div className="flex items-center">
          <button
            onClick={onGoBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer shadow-xs group hover:scale-[1.02]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-600 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a {backLabel}</span>
          </button>
        </div>
      )}

      {/* Section: Tutoriales disponibles */}
      <div className="space-y-4 pt-1">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Tutoriales disponibles
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Aquí encontrarás todo lo que necesitas para usar la app móvil de Cinemark.
            </p>
          </div>

          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            {modules.length} disponibles
          </span>
        </div>

        {/* Tutorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((mod, index) => (
            <div
              key={mod.id}
              style={{ animationDelay: `${index * 60}ms` }}
              className="animate-card-appear bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-400/80 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
              onClick={() => onOpenSimulator(mod.id)}
            >
              <div>
                {/* Top Badge & Chevron */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    CINEMARK
                  </span>
                  <div 
                    className="text-slate-300 group-hover:text-red-600 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Soft Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300 shadow-2xs">
                  {getModuleIcon(mod.iconName)}
                </div>

                {/* Title */}
                <h4 className="font-extrabold text-sm text-slate-900 tracking-tight leading-tight group-hover:text-red-600 transition-colors duration-200">
                  {mod.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">
                  {mod.shortDescription}
                </p>
              </div>

              {/* Bottom Footer: Capturas count and Red "Comenzar ->" Button */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {mod.steps.length} capturas reales
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenSimulator(mod.id);
                  }}
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold rounded-full shadow-sm shadow-red-600/20 flex items-center gap-1 hover:scale-105 hover:shadow-md hover:shadow-red-600/30 transition-all duration-200 cursor-pointer"
                >
                  <span>Comenzar</span>
                  <ArrowRight className="w-3 h-3 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
