import React, { useRef, useState, useEffect } from 'react';
import { Module } from '../types/modules';
import { 
  Ticket, 
  Crown, 
  UtensilsCrossed, 
  QrCode, 
  CreditCard, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  Building, 
  MapPin, 
  User, 
  LogIn, 
  Headphones, 
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ModuleSelectorBarProps {
  modules: Module[];
  activeModuleId: string;
  onSelectModule: (moduleId: string) => void;
  onOpenAddModule: () => void;
}

export const ModuleSelectorBar: React.FC<ModuleSelectorBarProps> = ({
  modules,
  activeModuleId,
  onSelectModule,
  onOpenAddModule,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
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

  // Check scroll positions
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

  // Smooth scroll with mouse movement over the container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;
    
    // Determine edge zones (first 25% scrolls left, last 25% scrolls right)
    const edgeRatio = 0.28;
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    
    if (maxScroll <= 0) return;

    if (mouseX < width * edgeRatio) {
      // Near left edge - scroll left proportional to proximity
      const intensity = (width * edgeRatio - mouseX) / (width * edgeRatio);
      containerRef.current.scrollBy({
        left: -intensity * 35,
        behavior: 'smooth'
      });
    } else if (mouseX > width * (1 - edgeRatio)) {
      // Near right edge - scroll right proportional to proximity
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
    <div 
      className="w-full bg-[#C4C4C4] border-b border-slate-300 relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Left Scroll Button / Gradient */}
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

      {/* Right Scroll Button / Gradient */}
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

      {/* Scrollable Container with mouse-move displacement */}
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
                onMouseEnter={(e) => {
                  // Bring button smoothly toward center on hover
                  e.currentTarget.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'nearest',
                    block: 'nearest'
                  });
                }}
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

          <button
            onClick={onOpenAddModule}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 bg-white/40 hover:bg-white/80 border border-dashed border-slate-400 transition-all hover:scale-105 shrink-0"
          >
            <span>+ Nuevo Módulo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
