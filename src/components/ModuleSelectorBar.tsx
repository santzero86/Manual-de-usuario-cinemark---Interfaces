import React, { useRef, useState, useEffect } from 'react';
import { Module } from '../types/modules';
import { 
  Ticket, 
  Crown, 
  UtensilsCrossed, 
  Building, 
  MapPin, 
  QrCode, 
  CreditCard, 
  User, 
  LogIn, 
  Headphones, 
  HelpCircle,
  Sparkles,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ModuleSelectorBarProps {
  modules: Module[];
  activeModuleId: string;
  onSelectModule: (moduleId: string) => void;
}

export const ModuleSelectorBar: React.FC<ModuleSelectorBarProps> = ({
  modules,
  activeModuleId,
  onSelectModule,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Download': return <Download className="w-4 h-4" />;
      case 'Ticket': return <Ticket className="w-4 h-4" />;
      case 'Crown': return <Crown className="w-4 h-4" />;
      case 'Popcorn': return <UtensilsCrossed className="w-4 h-4" />;
      case 'Building': return <Building className="w-4 h-4" />;
      case 'MapPin': return <MapPin className="w-4 h-4" />;
      case 'QrCode': return <QrCode className="w-4 h-4" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4" />;
      case 'User': return <User className="w-4 h-4" />;
      case 'LogIn': return <LogIn className="w-4 h-4" />;
      case 'Headphones': return <Headphones className="w-4 h-4" />;
      case 'HelpCircle': return <HelpCircle className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [modules]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;
    const edgeRatio = 0.28;
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    
    if (maxScroll <= 0) return;

    if (mouseX < width * edgeRatio) {
      const intensity = (width * edgeRatio - mouseX) / (width * edgeRatio);
      containerRef.current.scrollBy({
        left: -intensity * 35,
        behavior: 'smooth'
      });
    } else if (mouseX > width * (1 - edgeRatio)) {
      const intensity = (mouseX - width * (1 - edgeRatio)) / (width * edgeRatio);
      containerRef.current.scrollBy({
        left: intensity * 35,
        behavior: 'smooth'
      });
    }
  };

  const scrollByAmount = (amount: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full bg-[#C4C4C4] border-b border-slate-300 relative group">
      {/* Scroll Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scrollByAmount(-260)}
          className="absolute left-0 top-0 bottom-0 z-20 px-2 bg-gradient-to-r from-[#C4C4C4] via-[#C4C4C4]/90 to-transparent flex items-center justify-center text-slate-700 hover:text-slate-900 transition-opacity"
          title="Desplazar a la izquierda"
        >
          <div className="w-7 h-7 rounded-full bg-white/60 hover:bg-red-600 hover:text-white flex items-center justify-center shadow-sm transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scrollByAmount(260)}
          className="absolute right-0 top-0 bottom-0 z-20 px-2 bg-gradient-to-l from-[#C4C4C4] via-[#C4C4C4]/90 to-transparent flex items-center justify-center text-slate-700 hover:text-slate-900 transition-opacity"
          title="Desplazar a la derecha"
        >
          <div className="w-7 h-7 rounded-full bg-white/60 hover:bg-red-600 hover:text-white flex items-center justify-center shadow-sm transition-colors">
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>
      )}

      {/* Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onScroll={checkScroll}
        className="w-full px-4 lg:px-8 py-3 overflow-x-auto scrollbar-none scroll-smooth"
      >
        <div className="flex items-center gap-2 max-w-7xl mx-auto min-w-max">
          <span className="text-xs font-black text-slate-700 uppercase tracking-wider mr-2 hidden md:inline-block">
            Módulos:
          </span>

          {modules.map((mod) => {
            const isActive = mod.id === activeModuleId;

            return (
              <button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all duration-200 transform hover:scale-[1.03] hover:-translate-y-0.5 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/30 ring-2 ring-red-400 scale-[1.02]'
                    : 'bg-white/80 hover:bg-white text-slate-800 hover:text-slate-900 border border-slate-300 shadow-xs'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-red-600'}>
                  {getIcon(mod.iconName)}
                </span>
                <span className="tracking-tight">{mod.title}</span>

                <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                  isActive ? 'bg-white/25 text-white font-bold' : 'bg-slate-200/90 text-slate-700'
                }`}>
                  {mod.steps.length} pasos
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};