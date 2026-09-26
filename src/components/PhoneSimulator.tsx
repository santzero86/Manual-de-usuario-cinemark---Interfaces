import React, { useState } from 'react';
import { Step } from '../types/modules';
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  CreditCard, 
  Sparkles, 
  Check, 
  Info, 
  Building, 
  Upload, 
  RefreshCw,
  Film,
  UtensilsCrossed,
  User,
  Heart,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Armchair,
  Map,
  LocateFixed,
  Compass,
  Plus,
  Minus,
  X,
  Eye,
  EyeOff,
  Calendar,
  ArrowLeft,
  Lock,
  Mail,
  FileText,
  Bell,
  Scale,
  Search,
  Share2,
  MoreVertical,
  HelpCircle,
  Headphones
} from 'lucide-react';

interface PhoneSimulatorProps {
  step: Step;
  onNextStep: () => void;
  onPrevStep: () => void;
  onSelectStep: (stepNumber: number) => void;
  customScreenshotUrl?: string | null;
  onUploadScreenshot: (file: File) => void;
  onOpenBatchUpload?: () => void;
  moduleId?: string;
  totalSteps?: number;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({
  step,
  onNextStep,
  onPrevStep,
  customScreenshotUrl,
  onUploadScreenshot,
  onOpenBatchUpload,
  moduleId,
  totalSteps,
}) => {
  // Default to 'screenshot' if image is present or user prefers real screenshots
  const [viewMode, setViewMode] = useState<'screenshot' | 'simulated'>(
    customScreenshotUrl ? 'screenshot' : 'screenshot'
  );
  const [isTapped, setIsTapped] = useState(false);
  const [activeTab, setActiveTab] = useState<'cartelera' | 'confiteria' | 'teatros' | 'cineclub' | 'menu'>('cartelera');
  const [seatSelected, setSeatSelected] = useState('A6');
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  const handleHotspotClick = () => {
    setIsTapped(true);
    setTimeout(() => {
      setIsTapped(false);
      onNextStep();
    }, 280);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadScreenshot(e.target.files[0]);
      setViewMode('screenshot');
    }
  };

  return (
    <div className="flex flex-col items-center select-none">
      {/* View Mode & Upload Controls */}
      <div className="flex items-center justify-between w-full max-w-[380px] mb-3 px-1 text-xs gap-1.5">
        <div className="flex items-center gap-1 bg-[#1a1c23] p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setViewMode('screenshot')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
              viewMode === 'screenshot'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📸 Tu Captura Real
          </button>
          <button
            onClick={() => setViewMode('simulated')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'simulated'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Simulador Vivo
          </button>
        </div>

        <div className="flex items-center gap-1">
          {onOpenBatchUpload && (
            <button
              onClick={onOpenBatchUpload}
              title={`Cargar las ${totalSteps || 3} capturas de una sola vez`}
              className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/10 text-[11px] font-medium transition-colors"
            >
              Cargar {totalSteps || 3} Fotos
            </button>
          )}

          <label className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#1a1c23] hover:bg-[#252834] text-slate-300 hover:text-white border border-white/10 cursor-pointer transition-colors text-[11px]">
            <Upload className="w-3 h-3 text-red-400" />
            <span>Subir {step.stepNumber}.jpg</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageFileChange}
            />
          </label>
        </div>
      </div>

      {/* Smartphone Chassis */}
      <div className="relative w-[340px] sm:w-[370px] h-[720px] bg-[#000000] rounded-[44px] p-3 shadow-2xl border-[4px] border-[#2a2c36] ring-1 ring-white/10 flex flex-col justify-between overflow-hidden">
        {/* Notch / Speaker Ear-piece */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-black rounded-b-xl z-50 flex items-center justify-center">
          <div className="w-12 h-1 bg-neutral-800 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full ml-3 border border-neutral-800"></div>
        </div>

        {/* Screen Bezel Container */}
        <div className="relative w-full h-full bg-[#f8f9fa] rounded-[34px] overflow-hidden flex flex-col text-slate-900 font-sans shadow-inner">
          
          {/* Mobile Status Bar (Android Style) */}
          <div className="h-7 bg-white px-4 flex items-center justify-between text-[11px] font-semibold text-slate-700 shrink-0 border-b border-slate-100 z-30">
            <span>10:24 a.m.</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-[9px] bg-slate-200 px-1 rounded">VoLTE</span>
              <span>4G</span>
              <div className="flex items-center gap-0.5">
                <div className="w-1 h-2 bg-slate-700 rounded-xs"></div>
                <div className="w-1 h-2.5 bg-slate-700 rounded-xs"></div>
                <div className="w-1 h-3 bg-slate-700 rounded-xs"></div>
              </div>
              <span className="text-slate-800">96%</span>
            </div>
          </div>

          {/* Screen Content: Either Custom Screenshot or High-Fidelity UI Simulator */}
          <div className="relative flex-1 overflow-y-auto bg-white flex flex-col">
            {viewMode === 'screenshot' ? (
              <div key={`screen-${step.id}`} className="w-full h-full flex flex-col items-center justify-center bg-black text-slate-300 relative overflow-hidden animate-fade-scale">
                {customScreenshotUrl ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                    <img
                      src={customScreenshotUrl}
                      alt={`Paso ${step.stepNumber} - ${step.title}`}
                      className="w-full h-full object-contain max-h-[620px] transition-transform duration-300"
                    />
                    {/* Hotspot overlay over the real screenshot as well */}
                    <div
                      style={{
                        left: `${step.hotspot.x}%`,
                        top: `${step.hotspot.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={handleHotspotClick}
                      className="absolute z-40 cursor-pointer group flex flex-col items-center transition-all duration-300"
                    >
                      <span className="absolute w-12 h-12 rounded-full bg-red-500/30 animate-ping"></span>
                      <span className="absolute w-8 h-8 rounded-full bg-red-500/50 animate-pulse"></span>
                      <div className={`relative w-7 h-7 rounded-full bg-red-600 border-2 border-white shadow-lg flex items-center justify-center transition-all duration-200 ${isTapped ? 'scale-125 bg-emerald-600' : 'group-hover:scale-115'}`}>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-1 px-2.5 py-0.5 bg-black/90 text-white text-[10px] font-medium rounded-full shadow-md whitespace-nowrap pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 flex items-center gap-1 border border-white/20">
                        <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                        <span>{step.hotspot.label}</span>
                      </div>
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
                      Para mostrar tu captura de pantalla real exactamente como la tomaste:
                    </p>
                    <label className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5 mb-2">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Cargar {step.stepNumber}.jpg ahora</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageFileChange}
                      />
                    </label>
                    <button
                      onClick={() => setViewMode('simulated')}
                      className="text-[11px] text-slate-400 hover:text-white underline mt-1"
                    >
                      O explorar en simulador vivo
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* High-Fidelity Interactive Screen Render */
              <div key={`sim-${step.id}`} className="flex-1 flex flex-col bg-[#fdfdfd] animate-fade-scale">
                {renderScreenContent(
                  step.stepNumber, 
                  seatSelected, 
                  setSeatSelected, 
                  ticketCount, 
                  setTicketCount, 
                  selectedBank, 
                  setSelectedBank,
                  handleHotspotClick,
                  moduleId
                )}
              </div>
            )}

            {/* Interactive Hotspot Overlay */}
            {viewMode === 'simulated' && (
              <div
                style={{
                  left: `${step.hotspot.x}%`,
                  top: `${step.hotspot.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={handleHotspotClick}
                className="absolute z-40 cursor-pointer group flex flex-col items-center transition-all duration-300"
              >
                {/* Pulsing Ripple Effect */}
                <span className="absolute w-12 h-12 rounded-full bg-red-500/30 animate-ping"></span>
                <span className="absolute w-8 h-8 rounded-full bg-red-500/50 animate-pulse"></span>
                <div className={`relative w-7 h-7 rounded-full bg-red-600 border-2 border-white shadow-lg flex items-center justify-center transition-all duration-200 ${isTapped ? 'scale-125 bg-emerald-600' : 'group-hover:scale-115'}`}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Hotspot Action Tooltip */}
                <div className="mt-1 px-2.5 py-0.5 bg-black/90 text-white text-[10px] font-medium rounded-full shadow-md whitespace-nowrap pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 flex items-center gap-1 border border-white/20">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  <span>{step.hotspot.label}</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom App Navigation Bar (Cinemark standard app tabs) */}
          <div className="h-14 bg-white border-t border-slate-200 px-2 flex items-center justify-around shrink-0 z-30">
            <button
              onClick={() => setActiveTab('cartelera')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-medium transition-colors ${
                activeTab === 'cartelera' ? 'text-red-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${activeTab === 'cartelera' ? 'bg-red-600 text-white' : ''}`}>
                <Film className="w-3.5 h-3.5" />
              </div>
              <span>Cartelera</span>
            </button>

            <button
              onClick={() => setActiveTab('confiteria')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-medium transition-colors ${
                activeTab === 'confiteria' ? 'text-red-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <UtensilsCrossed className="w-3.5 h-3.5" />
              </div>
              <span>Confitería</span>
            </button>

            <button
              onClick={() => setActiveTab('teatros')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-medium transition-colors ${
                activeTab === 'teatros' ? 'text-red-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <Building className="w-3.5 h-3.5" />
              </div>
              <span>Teatros</span>
            </button>

            <button
              onClick={() => setActiveTab('cineclub')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-medium transition-colors ${
                activeTab === 'cineclub' ? 'text-red-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <span>Cine Club</span>
            </button>

            <button
              onClick={() => setActiveTab('menu')}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-medium transition-colors ${
                activeTab === 'menu' ? 'text-red-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <User className="w-3.5 h-3.5" />
              </div>
              <span>Menú</span>
            </button>
          </div>

          {/* Android Navigation Bar (Home indicator) */}
          <div className="h-5 bg-white flex items-center justify-around px-8 border-t border-slate-100">
            <div className="w-4 h-0.5 bg-slate-300 rounded-full"></div>
            <div className="w-3 h-3 border border-slate-300 rounded-full"></div>
            <div className="w-3.5 h-2.5 border-l-2 border-t-2 border-slate-300 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Render Screen content according to the exact step from user's screenshots
function renderScreenContent(
  stepNumber: number,
  seatSelected: string,
  setSeatSelected: (s: string) => void,
  ticketCount: number,
  setTicketCount: (fn: (c: number) => number) => void,
  selectedBank: string | null,
  setSelectedBank: (b: string) => void,
  onHotspotTap: () => void,
  moduleId?: string
) {
  if (moduleId === 'confiteria-express') {
    return renderConfiteriaScreenContent(stepNumber, selectedBank, setSelectedBank, onHotspotTap);
  }

  if (moduleId === 'exploracion-teatros-cercanos' || moduleId === 'teatros-cercanos') {
    return renderTeatrosScreenContent(stepNumber, onHotspotTap);
  }

  if (moduleId === 'login-registro-cuenta' || moduleId === 'login-cuenta' || moduleId === 'login') {
    return renderLoginScreenContent(stepNumber, onHotspotTap);
  }

  if (moduleId === 'atencion-soporte-pqrsf' || moduleId === 'soporte-pqrsf' || moduleId === 'pqrsf') {
    return renderSoporteScreenContent(stepNumber, onHotspotTap);
  }

  switch (stepNumber) {
    case 1:
      // Screen 1: Welcome & Carousel & Destacados
      return (
        <div className="flex-1 flex flex-col p-3 text-slate-800 bg-white">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold text-base tracking-tighter shadow-sm">
              C
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 tracking-tight">BIENVENIDO</div>
              <div className="text-[11px] text-slate-500">Ingreso o registro</div>
            </div>
          </div>

          {/* Sub Header Tabs */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3 text-xs">
            <span className="font-bold text-red-600 border-b-2 border-red-600 pb-1">CARTELERA POR CINE</span>
            <span className="text-slate-600 hover:text-slate-900 cursor-pointer">Seleccionar cine</span>
          </div>

          {/* Banner Promo */}
          <div className="rounded-xl bg-gradient-to-r from-neutral-900 to-red-950 text-white p-3 mb-3 border border-red-500/30 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-red-400 font-semibold">Cinemark</span>
                <h4 className="text-sm font-extrabold text-white leading-tight">¡VIVE EL CINE!</h4>
                <p className="text-[10px] text-slate-300">Estrenos en salas XD y Butacas D-BOX</p>
              </div>
              <div className="bg-red-500/20 border border-red-400/40 rounded-lg px-2 py-0.5 text-right">
                <span className="text-[8px] text-red-200 block">DESDE</span>
                <span className="text-xs font-bold text-red-300">$14.500</span>
              </div>
            </div>
          </div>

          {/* Destacados Section */}
          <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">DESTACADOS</div>
          <div 
            onClick={onHotspotTap}
            className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer hover:border-red-400 transition-all"
          >
            <div className="h-48 bg-gradient-to-b from-slate-900 via-neutral-800 to-black relative flex flex-col justify-end p-3 text-white">
              <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-[9px] bg-red-600 px-1.5 py-0.5 rounded font-bold uppercase">Estreno</span>
                <h3 className="font-extrabold text-sm tracking-tight text-white mt-1">AVENGERS: ENDGAME BONUS</h3>
                <span className="text-[10px] text-slate-300">Marvel Studios · 3H 10M</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      // Screen 2: Movie detail & Preventas
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="relative rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm">
            <div className="h-44 bg-neutral-900 relative flex items-center justify-center p-3 text-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
              <div className="relative z-20 text-center">
                <h2 className="text-base font-black tracking-tight text-white">AVENGERS: ENDGAME BON</h2>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-0.5">ESTRENO</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">PREVENTA</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-center shadow-xs">
              <div className="h-20 bg-amber-900/30 rounded flex items-center justify-center text-[10px] font-bold text-amber-800 mb-1">
                QUEEN
              </div>
              <div className="text-[10px] font-bold text-slate-800 truncate">QUEEN BUDAPEST</div>
              <span className="text-[8px] text-slate-500">1H 35M</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-center shadow-xs">
              <div className="h-20 bg-yellow-900/30 rounded flex items-center justify-center text-[10px] font-bold text-yellow-800 mb-1">
                LINKIN PARK
              </div>
              <div className="text-[10px] font-bold text-slate-800 truncate">LINKIN PARK</div>
              <span className="text-[8px] text-slate-500">1H 50M</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-center shadow-xs">
              <div className="h-20 bg-red-900/30 rounded flex items-center justify-center text-[10px] font-bold text-red-800 mb-1">
                DIGGER
              </div>
              <div className="text-[10px] font-bold text-slate-800 truncate">DIGGER</div>
              <span className="text-[8px] text-slate-500">2H 10M</span>
            </div>
          </div>
        </div>
      );

    case 3:
      // Screen 3: Cartelera general with ratings
      return (
        <div className="flex-1 flex flex-col p-2.5 bg-white overflow-y-auto">
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1 flex flex-col">
              <div className="h-20 bg-slate-800 rounded flex items-center justify-center text-[9px] text-white font-semibold mb-1">
                RESIDENT EVIL
              </div>
              <span className="font-bold text-slate-800 truncate">RESIDENT EVIL</span>
              <span className="text-[8px] bg-red-600 text-white w-max px-1 rounded font-bold">15-A</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1 flex flex-col">
              <div className="h-20 bg-blue-900 rounded flex items-center justify-center text-[9px] text-white font-semibold mb-1">
                SPIDERMAN
              </div>
              <span className="font-bold text-slate-800 truncate">SPIDERMAN</span>
              <span className="text-[8px] bg-amber-500 text-white w-max px-1 rounded font-bold">12-A</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1 flex flex-col">
              <div className="h-20 bg-amber-700 rounded flex items-center justify-center text-[9px] text-white font-semibold mb-1">
                COYOTE VS ACME
              </div>
              <span className="font-bold text-slate-800 truncate">COYOTE ACME</span>
              <span className="text-[8px] bg-blue-500 text-white w-max px-1 rounded font-bold">7-A</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1 flex flex-col">
              <div className="h-20 bg-emerald-800 rounded flex items-center justify-center text-[9px] text-white font-semibold mb-1">
                PAW PATROL
              </div>
              <span className="font-bold text-slate-800 truncate">PAW PATROL</span>
              <span className="text-[8px] bg-emerald-600 text-white w-max px-1 rounded font-bold">Todos</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1 flex flex-col">
              <div className="h-20 bg-purple-900 rounded flex items-center justify-center text-[9px] text-white font-semibold mb-1">
                HECHIZO DE AMOR
              </div>
              <span className="font-bold text-slate-800 truncate">HECHIZO</span>
              <span className="text-[8px] bg-amber-500 text-white w-max px-1 rounded font-bold">12-A</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-1 flex flex-col">
              <div className="h-20 bg-slate-700 rounded flex items-center justify-center text-[9px] text-white font-semibold mb-1">
                LA ODISEA
              </div>
              <span className="font-bold text-slate-800 truncate">LA ODISEA</span>
              <span className="text-[8px] bg-amber-500 text-white w-max px-1 rounded font-bold">12-A</span>
            </div>
          </div>
          <div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-800">Próximos Estrenos</div>
        </div>
      );

    case 4:
      // Screen 4: Showtimes & Date selector & Pacific Mall
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-bold text-xs text-slate-900">Avengers: Endgame Bon</h3>
              <div className="flex items-center gap-1.5 mt-0.5 text-[9px]">
                <span className="bg-black text-white px-1 py-0.2 rounded font-bold">3H 10M</span>
                <span className="bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-medium">Mayores de 12 años</span>
                <span className="text-slate-500">Acción</span>
              </div>
            </div>
            <button className="text-[9px] bg-neutral-800 text-white px-2 py-1 rounded flex items-center gap-1">
              <span>Ver trailer</span>
            </button>
          </div>

          {/* Dates Bar */}
          <div className="flex gap-1.5 overflow-x-auto py-1 mb-3 border-y border-slate-100 text-center">
            <div className="bg-red-600 text-white rounded-md px-2 py-1 shrink-0">
              <div className="text-[9px] font-bold">HOY</div>
              <div className="text-[8px]">Sáb 26</div>
            </div>
            <div className="border border-slate-200 rounded-md px-2 py-1 shrink-0 text-slate-600">
              <div className="text-[9px] font-semibold">Dom 27</div>
              <div className="text-[8px]">Sept.</div>
            </div>
            <div className="border border-slate-200 rounded-md px-2 py-1 shrink-0 text-slate-600">
              <div className="text-[9px] font-semibold">Lun 28</div>
              <div className="text-[8px]">Sept.</div>
            </div>
            <div className="border border-slate-200 rounded-md px-2 py-1 shrink-0 text-slate-600">
              <div className="text-[9px] font-semibold">Mar 29</div>
              <div className="text-[8px]">Sept.</div>
            </div>
          </div>

          {/* Cinema Header */}
          <div className="flex items-center justify-between mb-2 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-200">
            <span className="text-xs font-black text-red-600 uppercase">PACIFIC MALL</span>
            <span className="text-[10px] text-slate-600 font-semibold cursor-pointer">Cambiar cine</span>
          </div>

          {/* Showtimes Formats */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <span className="text-blue-600 font-black">3D</span> XD PREMIER
                </span>
                <span className="text-slate-500">Doblada</span>
              </div>
              <button 
                onClick={onHotspotTap}
                className="px-3 py-1.5 border-2 border-slate-300 rounded-lg text-xs font-bold text-slate-800 bg-white hover:border-red-600 hover:text-red-600 shadow-xs transition-all"
              >
                17:35
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-bold text-slate-900">2D PREMIER</span>
                <span className="text-slate-500">Subtitulada</span>
              </div>
              <button className="px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 bg-white">
                20:00
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-bold text-slate-900">2D XD PREMIER</span>
                <span className="text-slate-500">Subtitulada</span>
              </div>
              <button className="px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 bg-white">
                21:45
              </button>
            </div>
          </div>
        </div>
      );

    case 5:
      // Screen 5: Theaters dropdown / nearby
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="text-xs font-bold text-slate-800 mb-2">SELECCIÓN DE TEATRO</div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg border-2 border-red-600 bg-red-50/50">
              <div className="flex justify-between items-center font-bold text-slate-900">
                <span className="text-red-600 font-extrabold">Pacific Mall (Cali)</span>
                <span className="text-[10px] text-red-600">Sede actual</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">Av. 6 Nte #36N-18, Cali</p>
            </div>

            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex justify-between items-center font-bold text-slate-800">
                <span>Unicentro Palmira</span>
                <span className="text-[10px] text-slate-500 flex items-center gap-0.5">
                  <Heart className="w-3 h-3 text-red-400" /> 29.24 km
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-medium">2D · 21:30</span>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-medium">3D · 17:20</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex justify-between items-center font-bold text-slate-800">
                <span>San Pedro Plaza</span>
                <span className="text-[10px] text-slate-500">+99.9 km</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 6:
      // Screen 6: Boletas, Tarifas & AMEX Promo
      return (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-3 flex-1 overflow-y-auto">
            {/* Promo Club Cards */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2 rounded-lg border border-amber-300 bg-amber-50/40 text-[10px]">
                <div className="font-extrabold text-amber-800 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> Gold
                </div>
                <div className="font-bold text-amber-900">$28.900/año</div>
                <p className="text-[8px] text-slate-500 mt-0.5">Hasta 30% off en boletas</p>
              </div>

              <div className="p-2 rounded-lg border border-red-300 bg-red-50/40 text-[10px]">
                <div className="font-extrabold text-red-800 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-red-500" /> Pro
                </div>
                <div className="font-bold text-red-900">$32.500/mes</div>
                <p className="text-[8px] text-slate-500 mt-0.5">2 boletas gratis al mes</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-1 mb-2 border-b border-slate-200">
              <span className="text-red-600 border-b-2 border-red-600 pb-1">TARIFAS</span>
              <span className="text-slate-500">CINEBONO</span>
            </div>

            {/* Ticket Options */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-100">
                <div>
                  <div className="font-semibold text-slate-800">Tarifa de estreno</div>
                  <div className="text-[10px] font-bold text-slate-900">$31.750</div>
                </div>
                <button className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">+</button>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-slate-100">
                <div>
                  <div className="font-semibold text-slate-800">2X1 AMEX 3DXD PREMIER</div>
                  <div className="text-[9px] text-slate-500">Paga 1 y lleva la 2da gratis</div>
                  <div className="text-[10px] font-bold text-slate-900">$32.200</div>
                </div>
                <button className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">+</button>
              </div>

              <div className="flex justify-between items-center py-1 bg-red-50/50 p-2 rounded-lg border border-red-200">
                <div>
                  <div className="font-bold text-slate-900">BOLETA XD PREMIER 3D</div>
                  <div className="text-[9px] text-slate-500">Tarifa de estreno</div>
                  <div className="text-xs font-black text-red-600">$32.250</div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setTicketCount(c => Math.max(1, c - 1))}
                    className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-bold text-xs">{ticketCount}</span>
                  <button 
                    onClick={() => setTicketCount(c => c + 1)}
                    className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Bottom Cart Bar */}
          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                {ticketCount}
              </span>
              <span className="font-bold">${(ticketCount * 32250).toLocaleString('es-CO')}</span>
            </div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 7:
      // Screen 7: Seat Map (Ubicación en sala)
      return (
        <div className="flex-1 flex flex-col bg-white">
          {/* Header with timer */}
          <div className="px-3 py-1.5 bg-white border-b border-slate-100 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800">Ubicación en sala</span>
            <div className="flex items-center gap-1 text-red-600 font-black text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>09:35</span>
            </div>
          </div>

          <div className="p-2.5 flex-1 flex flex-col items-center overflow-y-auto">
            <div className="text-center mb-1">
              <h4 className="font-bold text-xs text-slate-900">Avengers: Endgame Bon</h4>
              <p className="text-[10px] text-red-600 font-semibold">Cine: Pacific Mall. Sala 5 · Hoy, 17:35</p>
            </div>

            {/* Screen Arc */}
            <div className="w-full my-2 flex flex-col items-center">
              <div className="w-48 h-3 border-t-4 border-blue-600 rounded-t-full"></div>
              <span className="text-[9px] font-bold uppercase text-slate-400 tracking-widest -mt-1">PANTALLA</span>
            </div>

            {/* Seat Grid Graphic */}
            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 mb-2">
              <div className="grid grid-cols-10 gap-1 text-[8px] font-bold text-center">
                {['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'].map(seat => {
                  const isSelected = seat === seatSelected;
                  const isOccupied = ['A1','A2','A10'].includes(seat);
                  return (
                    <button
                      key={seat}
                      onClick={() => setSeatSelected(seat)}
                      className={`h-5 rounded flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 font-extrabold' 
                          : isOccupied 
                          ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                          : 'bg-white border border-amber-400 text-slate-800 hover:bg-amber-50'
                      }`}
                    >
                      {seat}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-10 gap-1 text-[8px] font-bold text-center mt-1">
                {['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10'].map(seat => (
                  <div key={seat} className="h-5 rounded bg-slate-300 text-slate-500 flex items-center justify-center">
                    {seat}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] text-slate-600 mb-2">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-slate-400 rounded-xs"></span> Ocupada
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-xs"></span> Tu selección
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 border border-amber-500 rounded-xs"></span> Premier
              </span>
            </div>

            {/* Selected Seat Box */}
            <div className="text-center p-1.5 bg-slate-100 rounded-lg w-full mb-1">
              <span className="text-[10px] text-slate-500 block">Tus asientos son:</span>
              <span className="text-xs font-bold text-slate-800">BOLETA XD PREMIER 3D</span>
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-md text-xs font-extrabold mt-1">
                <Armchair className="w-3.5 h-3.5" />
                <span>{seatSelected}</span>
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between cursor-pointer hover:bg-neutral-800"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
              <span className="font-bold">$32.250</span>
            </div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 8:
      // Screen 8: Confitería Premier
      return (
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-3 py-1.5 bg-white border-b border-slate-100 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800">Confitería Premier</span>
            <span className="text-red-600 font-black">09:29</span>
          </div>

          <div className="bg-neutral-950 text-amber-400 py-1 text-center font-serif text-[11px] tracking-widest uppercase">
            P R E M I E R
          </div>

          <div className="flex border-b border-slate-200 text-[10px] font-bold text-slate-700 px-2">
            <span className="py-1.5 px-2 text-red-600 border-b-2 border-red-600">MENU</span>
            <span className="py-1.5 px-2 text-slate-500">COLECCIONABLES</span>
            <span className="py-1.5 px-2 text-slate-500">COMBOS</span>
            <span className="py-1.5 px-2 text-slate-500">CRISPETAS</span>
          </div>

          <div className="p-3 flex-1 overflow-y-auto space-y-2.5 text-xs">
            <div className="flex justify-between items-center p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-lg bg-amber-100 flex items-center justify-center text-lg">🍔</div>
                <div>
                  <span className="text-[8px] bg-amber-200 text-amber-900 px-1 rounded font-bold">PREMIER</span>
                  <div className="font-bold text-slate-900">Hamburguesa Callejera</div>
                  <div className="text-xs font-black text-red-600">$38.000</div>
                </div>
              </div>
              <button 
                onClick={onHotspotTap}
                className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm"
              >
                +
              </button>
            </div>

            <div className="flex justify-between items-center p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-lg bg-amber-100 flex items-center justify-center text-lg">🍔</div>
                <div>
                  <span className="text-[8px] bg-amber-200 text-amber-900 px-1 rounded font-bold">PREMIER</span>
                  <div className="font-bold text-slate-900">Hamburguesa Mexicana</div>
                  <div className="text-xs font-black text-red-600">$38.000</div>
                </div>
              </div>
              <button className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm">+</button>
            </div>

            <div className="flex justify-between items-center p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-lg bg-amber-100 flex items-center justify-center text-lg">🍔</div>
                <div>
                  <span className="text-[8px] bg-amber-200 text-amber-900 px-1 rounded font-bold">PREMIER</span>
                  <div className="font-bold text-slate-900">Hamburguesa de Pollo</div>
                  <div className="text-xs font-black text-red-600">$38.000</div>
                </div>
              </div>
              <button className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm">+</button>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between cursor-pointer hover:bg-neutral-800"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
              <span className="font-bold">$70.250</span>
            </div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 9:
      // Screen 9: Cart summary with service fees
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="text-center pb-2 border-b border-slate-100">
            <h3 className="font-black text-sm text-slate-900">Carrito de compras</h3>
            <p className="text-[11px] font-bold text-red-600">Cine: Pacific Mall</p>
          </div>

          <div className="py-2.5 space-y-2 text-xs flex-1 overflow-y-auto">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900">Avengers: Endgame Bon</div>
              <div className="text-[10px] text-slate-600">Sala: 5 · Asientos: {seatSelected}</div>
              <div className="flex justify-between items-center mt-1 text-[10px]">
                <span>BOLETA XD PREMIER 3D x1</span>
                <span className="font-bold text-slate-900">$32.250</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900">Hamburguesa Premier</div>
              <div className="flex justify-between items-center mt-1 text-[10px]">
                <span>Hamburguesa Callejera x1</span>
                <span className="font-bold text-slate-900">$38.000</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-1 text-[11px]">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">$70.250</span>
              </div>
              <div className="flex justify-between text-slate-600 text-[10px]">
                <span>Cargo por servicio confitería</span>
                <span className="font-semibold text-slate-900">$1.600</span>
              </div>
              <div className="flex justify-between text-slate-600 text-[10px]">
                <span>Cargo por servicio por boleta</span>
                <span className="font-semibold text-slate-900">$1.600</span>
              </div>
              <div className="flex justify-between font-black text-sm text-slate-900 pt-1 border-t border-slate-200">
                <span>Total</span>
                <span className="text-red-600">$73.450</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-[10px] text-red-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Con <strong>Cine Club Pro</strong> ahorrarías hasta un 53%</span>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer hover:bg-neutral-800 shadow-md"
          >
            <div className="text-xs font-bold">$73.450</div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 10:
      // Screen 10: Billing info
      return (
        <div className="flex-1 flex flex-col p-3 bg-white text-slate-800 overflow-y-auto">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100 text-xs mb-2">
            <span className="font-bold text-slate-900">Datos de facturación</span>
            <span className="text-red-600 font-black">08:49</span>
          </div>

          <div className="space-y-2 text-[10px]">
            <div>
              <label className="text-slate-600 font-semibold block">Tipo de Persona *</label>
              <div className="p-1.5 border border-slate-300 rounded bg-slate-50 font-medium">Natural</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-600 font-semibold block">Nombres *</label>
                <div className="p-1.5 border border-slate-300 rounded font-medium">Santiago</div>
              </div>
              <div>
                <label className="text-slate-600 font-semibold block">Apellidos *</label>
                <div className="p-1.5 border border-slate-300 rounded font-medium">Guerrero</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-600 font-semibold block">Tipo de documento *</label>
                <div className="p-1.5 border border-slate-300 rounded text-[9px] font-medium">Cédula ciudadanía</div>
              </div>
              <div>
                <label className="text-slate-600 font-semibold block">Número documento *</label>
                <div className="p-1.5 border border-slate-300 rounded font-medium">1107541099</div>
              </div>
            </div>

            <div>
              <label className="text-slate-600 font-semibold block">Ciudad *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">CALI, VALLE</div>
            </div>

            <div>
              <label className="text-slate-600 font-semibold block">Dirección *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">Calle 3 #45-12</div>
            </div>

            <div>
              <label className="text-slate-600 font-semibold block">Correo electrónico *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium text-blue-700">santzer5153@gmail.com</div>
            </div>

            <div className="pt-2 space-y-1.5 text-[9px]">
              <div className="flex items-center gap-1.5">
                <input type="checkbox" defaultChecked className="accent-red-600 rounded" />
                <span className="text-slate-700 font-medium">Acepto los términos y condiciones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <input type="checkbox" defaultChecked className="accent-red-600 rounded" />
                <span className="text-slate-700 font-medium">Acepto el tratamiento de datos personales</span>
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="mt-3 p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer hover:bg-neutral-800"
          >
            <div className="text-xs font-bold">$73.450</div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 11:
      // Screen 11: Medios de pago disponibles modal
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="text-center py-2 border-b border-slate-100 mb-3">
            <h3 className="font-extrabold text-xs text-slate-900">Medios de pago disponibles</h3>
            <span className="text-[10px] text-slate-500">Selecciona tu método preferido</span>
          </div>

          <div className="space-y-3 flex-1">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-500 cursor-pointer flex items-center gap-3 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Tarjeta crédito / débito</div>
                <div className="text-[10px] text-slate-500">Visa, Mastercard, Amex, Diners</div>
              </div>
            </div>

            <div 
              onClick={onHotspotTap}
              className="p-3.5 rounded-xl border-2 border-red-500 bg-red-50/30 cursor-pointer flex items-center gap-3 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center text-white font-black text-xs">
                pse
              </div>
              <div>
                <div className="font-extrabold text-xs text-slate-900">PSE (Cuentas y Billeteras)</div>
                <div className="text-[10px] text-slate-600">Nequi, Nu, Daviplata, Bancolombia...</div>
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer"
          >
            <div className="text-xs font-bold">$73.450</div>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              PAGAR
            </button>
          </div>
        </div>
      );

    case 12:
      // Screen 12: Tarjeta crédito / débito form
      return (
        <div className="flex-1 flex flex-col p-3 bg-white text-[10px] space-y-2">
          <div className="font-extrabold text-xs text-slate-900 border-b pb-1.5">
            Tarjeta crédito / débito
          </div>

          <div>
            <label className="text-slate-600 font-semibold block">Nombre del titular de la tarjeta *</label>
            <div className="p-1.5 border border-slate-300 rounded font-medium">SANTIAGO GUERRERO</div>
          </div>

          <div>
            <label className="text-slate-600 font-semibold block">Número de tarjeta *</label>
            <div className="p-1.5 border border-slate-300 rounded font-mono font-medium">4532 •••• •••• 8892</div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-slate-600 font-semibold block">Fecha de vencimiento *</label>
              <div className="p-1.5 border border-slate-300 rounded font-mono">08/28</div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Código de seguridad (CVV) *</label>
              <div className="p-1.5 border border-slate-300 rounded font-mono">•••</div>
            </div>
          </div>

          <div>
            <label className="text-slate-600 font-semibold block">Número de cuotas *</label>
            <div className="p-1.5 border border-slate-300 rounded font-medium">1 cuota (Sin interés)</div>
          </div>

          <div className="flex items-center gap-1.5 pt-1 text-[9px]">
            <input type="checkbox" className="accent-red-600" />
            <span>Quiero guardar esta tarjeta para mi próxima compra</span>
          </div>

          <div 
            onClick={onHotspotTap}
            className="mt-auto p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer"
          >
            <div className="text-xs font-bold">$73.450</div>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              PAGAR
            </button>
          </div>
        </div>
      );

    case 13:
      // Screen 13: PSE Form with logo
      return (
        <div className="flex-1 flex flex-col p-3 bg-white text-slate-800">
          <div className="flex flex-col items-center py-2 border-b border-slate-100 mb-3">
            <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex flex-col items-center justify-center font-black shadow-md mb-1">
              <span className="text-[8px] font-sans">ach</span>
              <span className="text-base tracking-tighter -mt-1">pse</span>
            </div>
            <h3 className="font-extrabold text-xs text-slate-900">Pagos Seguros en Línea (PSE)</h3>
          </div>

          <div className="space-y-3 flex-1 text-xs">
            <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-lg">
              <input type="checkbox" defaultChecked className="accent-red-600 rounded" />
              <span className="text-[11px] font-semibold text-slate-800">Usar mismos datos de facturación</span>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-800 block mb-1">Banco *</label>
              <div 
                onClick={onHotspotTap}
                className="p-2 border-2 border-red-500 rounded-lg bg-white flex justify-between items-center cursor-pointer shadow-xs hover:bg-slate-50"
              >
                <span className="text-[11px] text-slate-700 font-medium">A continuación seleccione su banco</span>
                <ChevronRight className="w-4 h-4 text-red-600 rotate-90" />
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer"
          >
            <div className="text-xs font-bold">$73.450</div>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              PAGAR
            </button>
          </div>
        </div>
      );

    case 14:
      // Screen 14: Colombian Bank Selection Modal
      return (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-2.5 bg-slate-900 text-white flex items-center justify-between text-xs">
            <span className="font-bold">Selecciona tu Entidad Financiera</span>
            <span className="text-[10px] text-slate-300">ACH Colombia</span>
          </div>

          <div className="p-2 flex-1 overflow-y-auto space-y-1 text-xs">
            {[
              'LULO BANK',
              'MOVII S.A.',
              'NEQUI',
              'NU COLOMBIA',
              'PAYCASH',
              'POWWI',
              'RAPPIPAY',
              'UALÁ',
              'BANCOLOMBIA',
              'DAVIVIENDA / DAVIPLATA'
            ].map(bank => {
              const isSelected = selectedBank === bank || (bank === 'NEQUI' && !selectedBank);
              return (
                <div
                  key={bank}
                  onClick={() => setSelectedBank(bank)}
                  className={`p-2 rounded-lg cursor-pointer flex items-center justify-between text-[11px] transition-colors ${
                    isSelected 
                      ? 'bg-red-50 border border-red-500 text-red-700 font-bold' 
                      : 'hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <span>{bank}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-red-600" />}
                </div>
              );
            })}
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between cursor-pointer"
          >
            <div className="text-xs font-bold">Banco: {selectedBank || 'NEQUI'}</div>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1">
              <span>PAGAR</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex-1 flex items-center justify-center p-4 text-center text-xs text-slate-500">
          Paso no disponible
        </div>
      );
  }
}

// Render screens specifically for the Confitería y Acompañantes module (9 steps)
function renderConfiteriaScreenContent(
  stepNumber: number,
  selectedBank: string | null,
  setSelectedBank: (b: string) => void,
  onHotspotTap: () => void
) {
  switch (stepNumber) {
    case 1:
      // Screen 1: Welcome & Bottom tab pointing to Confitería
      return (
        <div className="flex-1 flex flex-col p-3 text-slate-800 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold text-base tracking-tighter shadow-sm">
              C
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 tracking-tight">BIENVENIDO</div>
              <div className="text-[11px] text-slate-500">Ingreso o registro</div>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3 text-xs">
            <span className="font-bold text-red-600 border-b-2 border-red-600 pb-1">CARTELERA POR CINE</span>
            <span className="text-slate-600">Seleccionar cine</span>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-neutral-900 to-amber-950 text-white p-3 mb-3 border border-amber-500/30 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-amber-300 font-semibold">Cinemark</span>
                <h4 className="text-sm font-extrabold text-amber-400 leading-tight">¡BOLETA GRATIS!</h4>
                <p className="text-[10px] text-slate-300">Por comprar o renovar tu Cine Club Gold</p>
              </div>
              <div className="bg-amber-500/20 border border-amber-400/40 rounded-lg px-2 py-0.5 text-right">
                <span className="text-[8px] text-amber-200 block">POR SOLO</span>
                <span className="text-xs font-bold text-amber-300">$28.900/año</span>
              </div>
            </div>
          </div>
          <div 
            onClick={onHotspotTap}
            className="p-3.5 bg-red-50 border-2 border-red-500/60 rounded-xl text-xs text-red-950 flex items-center gap-3 mt-3 cursor-pointer shadow-sm hover:bg-red-100/60 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-xs block text-red-900">Pide tus alimentos y snacks</span>
              <span className="text-[11px] text-slate-600">Toca la pestaña Confitería en la barra inferior para entrar al menú express.</span>
            </div>
          </div>
        </div>
      );

    case 2:
      // Screen 2: Cali - Pacific Mall / Confitería - COLECCIONABLES
      return (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-3 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-bold text-xs text-slate-900">
                <span>Cali - Pacific Mall</span>
              </div>
              <MapPin className="w-3.5 h-3.5 text-red-600" />
            </div>
            <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-between">
              <span>Código promocional para confitería</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>
          <div className="flex border-b border-slate-200 text-[10px] font-bold text-slate-700 px-3">
            <span className="py-2 px-2 text-red-600 border-b-2 border-red-600">COLECCIONABLES</span>
            <span className="py-2 px-2 text-slate-500">COMBOS</span>
            <span className="py-2 px-2 text-slate-500">PROMOCIONES</span>
          </div>
          <div className="p-3 flex-1 overflow-y-auto space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">COLECCIONABLES</div>
            <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-14 bg-amber-100 rounded-lg flex flex-col items-center justify-center text-xs font-bold text-amber-900 border border-amber-300">
                  <span className="text-[8px] bg-yellow-400 text-black px-1 rounded font-black">BT21</span>
                  🥤🍿
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Combo Minimark BT21 Coleccionable</div>
                  <div className="text-xs font-black text-red-600 mt-0.5">$39.900</div>
                  <div className="text-[9px] text-slate-500">1 Minimark Coleccionable BT21 con gaseosa 798 m...</div>
                </div>
              </div>
              <button 
                onClick={onHotspotTap}
                className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0"
              >
                +
              </button>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-14 bg-yellow-50 rounded-lg flex items-center justify-center text-lg border border-yellow-200">
                  🥤
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">MINIMARK BT21 COLECCIONABLE.</div>
                  <div className="text-xs font-black text-red-600 mt-0.5">$30.900</div>
                  <div className="text-[9px] text-slate-500">1 Minimark Coleccionable BT21 con gaseosa de 79...</div>
                </div>
              </div>
              <button className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">+</button>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[10px]">
              <span className="text-[8px] bg-neutral-900 text-white px-1.5 py-0.2 rounded font-bold uppercase mr-1">EXCLUSIVO CINE CLUB</span>
              <div className="font-bold text-slate-800 mt-1">Preventa Cine Club Combo Avengers</div>
              <div className="text-xs font-bold text-slate-600">$130.000</div>
            </div>
          </div>
          <div className="p-2.5 bg-neutral-900 text-white flex items-center justify-between">
            <span className="text-xs font-bold">$0</span>
            <button className="bg-neutral-700 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-300">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 3:
      // Screen 3: Bebidas y Tamaños
      return (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-3 border-b border-slate-100 flex items-center justify-between">
            <span className="font-bold text-xs text-slate-900">Cali - Pacific Mall</span>
            <MapPin className="w-3.5 h-3.5 text-red-600" />
          </div>
          <div className="flex border-b border-slate-200 text-[10px] font-bold text-slate-700 px-2 overflow-x-auto">
            <span className="py-2 px-2 text-slate-500">ANTOJOS</span>
            <span className="py-2 px-2 text-slate-500">CRISPETAS</span>
            <span className="py-2 px-2 text-red-600 border-b-2 border-red-600 whitespace-nowrap">BEBIDAS</span>
            <span className="py-2 px-2 text-slate-500 whitespace-nowrap">BEBIDAS CALIENTES</span>
          </div>
          <div className="p-3 flex-1 overflow-y-auto space-y-2.5 text-xs">
            <div className="p-2 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-12 bg-red-100 rounded-lg flex items-center justify-center text-sm font-bold text-red-700">🥤</div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Gaseosa Grande + Mini Botella</div>
                  <div className="text-xs font-bold text-red-600">$17.800</div>
                  <div className="text-[9px] text-slate-500">1 Gaseosa Grande 798 ml + 1 Mini Botella Coca Co...</div>
                </div>
              </div>
              <button className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base">+</button>
            </div>

            <div className="p-2 rounded-xl border-2 border-red-500 bg-red-50/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-12 bg-red-100 rounded-lg flex items-center justify-center text-sm font-bold text-red-700">🥤</div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Gaseosa Mediana</div>
                  <div className="text-xs font-black text-red-600">$16.800</div>
                  <div className="text-[9px] text-slate-600">1 Gaseosa Mediana de 532 ml</div>
                </div>
              </div>
              <button 
                onClick={onHotspotTap}
                className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm"
              >
                +
              </button>
            </div>

            <div className="p-2 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-12 bg-red-100 rounded-lg flex items-center justify-center text-sm font-bold text-red-700">🥤</div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Gaseosa Pequeña</div>
                  <div className="text-xs font-bold text-red-600">$13.200</div>
                  <div className="text-[9px] text-slate-500">1 Gaseosa Pequeña 384 ml</div>
                </div>
              </div>
              <button className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base">+</button>
            </div>
          </div>
          <div className="p-2.5 bg-neutral-900 text-white flex items-center justify-between">
            <span className="text-xs font-bold">$0</span>
            <button className="bg-neutral-700 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-300">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 4:
      // Screen 4: Carrito de compras Confitería (Snickers $6.000 + Cargo $1.600 = $7.600)
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="text-center pb-2 border-b border-slate-100">
            <h3 className="font-black text-sm text-slate-900">Carrito de compras</h3>
            <p className="text-[11px] font-bold text-red-600">Cine: Pacific Mall</p>
          </div>
          <div className="py-3 space-y-3 text-xs flex-1">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-6 bg-amber-900 rounded text-[9px] text-white flex items-center justify-center font-black">
                  SNICKERS
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Snickers</div>
                  <div className="text-[10px] text-slate-500">1 Chocolate Snickers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-5 h-5 rounded-full bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs">-</button>
                <span className="font-bold text-xs">1</span>
                <button className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">+</button>
                <span className="font-bold text-slate-900 text-xs ml-1">$6.000</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">$6.000</span>
              </div>
              <div className="flex justify-between text-slate-600 text-[11px]">
                <span>Cargo por servicio por transacción de confitería</span>
                <span className="font-semibold text-slate-900">$1.600</span>
              </div>
              <div className="flex justify-between font-black text-sm text-slate-900 pt-2 border-t border-slate-200">
                <span>Total</span>
                <span className="text-red-600">$7.600</span>
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer hover:bg-neutral-800 shadow-md"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
              <span className="font-bold">$7.600</span>
            </div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 5:
      // Screen 5: Facturación $7.600
      return (
        <div className="flex-1 flex flex-col p-3 bg-white text-slate-800 overflow-y-auto">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100 text-xs mb-2">
            <span className="font-bold text-slate-900">Confitería - Pago</span>
            <span className="text-red-600 font-black">09:34</span>
          </div>
          <div className="text-xs font-bold mb-1 text-slate-800">Datos de facturación</div>
          <div className="space-y-2 text-[10px]">
            <div>
              <label className="text-slate-600 font-semibold block">Tipo de Persona *</label>
              <div className="p-1.5 border border-slate-300 rounded bg-slate-50 font-medium">Natural</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-600 font-semibold block">Nombres *</label>
                <div className="p-1.5 border border-slate-300 rounded font-medium">Santiago</div>
              </div>
              <div>
                <label className="text-slate-600 font-semibold block">Apellidos *</label>
                <div className="p-1.5 border border-slate-300 rounded font-medium">Guerrero</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-600 font-semibold block">Tipo de documento *</label>
                <div className="p-1.5 border border-slate-300 rounded text-[9px] font-medium">Cédula de ciudadanía</div>
              </div>
              <div>
                <label className="text-slate-600 font-semibold block">Número de documento *</label>
                <div className="p-1.5 border border-slate-300 rounded font-medium">1107541099</div>
              </div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Ciudad *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">CALI, VALLE</div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Dirección *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">calle 3</div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Número telefónico *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">3154507049</div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Correo electrónico *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium text-blue-700">santzer5153@gmail.com</div>
            </div>
            <div className="pt-1.5 space-y-1 text-[9px]">
              <div className="flex items-center gap-1.5">
                <input type="checkbox" defaultChecked className="accent-red-600 rounded" />
                <span className="text-slate-700 font-medium">Acepto los términos y condiciones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <input type="checkbox" defaultChecked className="accent-red-600 rounded" />
                <span className="text-slate-700 font-medium">Acepto el tratamiento de datos personales</span>
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="mt-3 p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer hover:bg-neutral-800"
          >
            <div className="text-xs font-bold">$7.600</div>
            <button className="bg-red-600 px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              CONTINUAR
            </button>
          </div>
        </div>
      );

    case 6:
      // Screen 6: Medios de pago disponibles ($7.600)
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="text-center py-2 border-b border-slate-100 mb-3">
            <h3 className="font-extrabold text-xs text-slate-900">Medios de pago disponibles</h3>
            <span className="text-[10px] text-slate-500">Selecciona para pagar $7.600</span>
          </div>

          <div className="space-y-3 flex-1">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-500 cursor-pointer flex items-center gap-3 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Tarjeta crédito / débito</div>
                <div className="text-[10px] text-slate-500">Visa, Mastercard, Amex, Diners</div>
              </div>
            </div>

            <div 
              onClick={onHotspotTap}
              className="p-3.5 rounded-xl border-2 border-red-500 bg-red-50/40 hover:bg-red-50/70 cursor-pointer flex items-center justify-between transition-colors shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-extrabold text-[10px] tracking-tight">
                  PSE
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">PSE</div>
                  <div className="text-[10px] text-slate-600">Nequi, Daviplata, Bancolombia, Nu...</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-red-500" />
            </div>
          </div>

          <div className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl">
            <span className="text-xs font-bold">$7.600</span>
            <button className="bg-neutral-600 px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300">
              PAGAR
            </button>
          </div>
        </div>
      );

    case 7:
      // Screen 7: Tarjeta de crédito ($7.600)
      return (
        <div className="flex-1 flex flex-col p-3 bg-white text-slate-800">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 mb-2">
            <CreditCard className="w-4 h-4 text-red-600" />
            <span className="font-bold text-xs">Tarjeta crédito / débito</span>
          </div>

          <div className="space-y-2 text-[10px] flex-1">
            <div>
              <label className="text-slate-600 font-semibold block">Nombre del titular de la tarjeta *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">Santiago Guerrero</div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Número de tarjeta *</label>
              <div className="p-1.5 border border-slate-300 rounded font-mono text-slate-500">XXXX-XXXX-XXXX-XXXX</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-600 font-semibold block">Fecha de vencimiento *</label>
                <div className="p-1.5 border border-slate-300 rounded text-slate-500">MM/YY</div>
              </div>
              <div>
                <label className="text-slate-600 font-semibold block">Código de seguridad *</label>
                <div className="p-1.5 border border-slate-300 rounded text-slate-500">CVV</div>
              </div>
            </div>
            <div>
              <label className="text-slate-600 font-semibold block">Número de cuotas *</label>
              <div className="p-1.5 border border-slate-300 rounded font-medium">1 cuota (sin intereses)</div>
            </div>
            <div className="flex items-center gap-1.5 pt-1 text-[9px]">
              <input type="checkbox" className="accent-red-600 rounded" />
              <span>Quiero guardar esta tarjeta para mi próxima compra</span>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer hover:bg-neutral-800 shadow-md"
          >
            <div className="text-xs font-bold">$7.600</div>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              PAGAR
            </button>
          </div>
        </div>
      );

    case 8:
      // Screen 8: Modal PSE ($7.600)
      return (
        <div className="flex-1 flex flex-col p-3 bg-white">
          <div className="flex flex-col items-center py-2 mb-3">
            <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center text-white font-extrabold text-sm mb-1 shadow-md">
              pse
            </div>
            <span className="text-[10px] text-slate-500">ach colombia</span>
          </div>

          <div className="space-y-3 flex-1 text-xs">
            <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
              <input type="checkbox" defaultChecked className="accent-red-600 rounded" />
              <span className="text-[11px] font-medium text-slate-800">Usar mismos datos de facturación</span>
            </div>

            <div 
              onClick={onHotspotTap}
              className="p-2.5 rounded-xl border-2 border-red-500 bg-red-50/20 cursor-pointer shadow-xs"
            >
              <label className="text-[10px] font-bold text-red-600 block mb-1">Banco *</label>
              <div className="text-xs text-slate-800 font-semibold flex items-center justify-between">
                <span>A continuación seleccione su banco</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between rounded-xl cursor-pointer"
          >
            <span className="text-xs font-bold">$7.600</span>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
              PAGAR
            </button>
          </div>
        </div>
      );

    case 9:
      // Screen 9: Selector de bancos PSE ($7.600)
      return (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-2.5 bg-slate-900 text-white flex items-center justify-between text-xs">
            <span className="font-bold">Seleccionar Entidad PSE</span>
            <span className="text-[10px] text-slate-300">Total: $7.600</span>
          </div>

          <div className="p-2 flex-1 overflow-y-auto space-y-1 text-xs">
            {[
              'LULO BANK',
              'MOVII S.A.',
              'NEQUI',
              'NU',
              'PAYCASH',
              'POWWI',
              'RAPPIPAY',
              'UALÁ',
              'BANCOLOMBIA',
              'DAVIVIENDA'
            ].map(bank => {
              const isSelected = selectedBank === bank || (bank === 'NEQUI' && !selectedBank);
              return (
                <div
                  key={bank}
                  onClick={() => setSelectedBank(bank)}
                  className={`p-2 rounded-lg cursor-pointer flex items-center justify-between text-[11px] transition-colors ${
                    isSelected 
                      ? 'bg-red-50 border border-red-500 text-red-700 font-bold' 
                      : 'hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <span>{bank}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-red-600" />}
                </div>
              );
            })}
          </div>

          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between cursor-pointer"
          >
            <div className="text-xs font-bold">Banco: {selectedBank || 'NEQUI'}</div>
            <button className="bg-red-600 px-5 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1">
              <span>PAGAR $7.600</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex-1 flex items-center justify-center p-4 text-center text-xs text-slate-500">
          Paso no disponible
        </div>
      );
  }
}

// Render screens specifically for the Teatros y Cines Cercanos module (3 steps)
function renderTeatrosScreenContent(
  stepNumber: number,
  onHotspotTap: () => void
) {
  switch (stepNumber) {
    case 1:
      // Screen 1: Welcome screen with TOP button to change/select cinema
      return (
        <div className="flex-1 flex flex-col p-3 text-slate-800 bg-white">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold text-base tracking-tighter shadow-sm">
              C
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 tracking-tight">BIENVENIDO</div>
              <div className="text-[11px] text-slate-500">Ingreso o registro</div>
            </div>
          </div>

          {/* Sub Header: Cartelera tab + TOP button to change/select cinema */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5 text-xs">
            <span className="font-bold text-red-600 border-b-2 border-red-600 pb-1">
              CARTELERA POR CINE
            </span>
            
            {/* The TOP button to change/select cinema */}
            <button
              onClick={onHotspotTap}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all ring-2 ring-red-400 ring-offset-1 animate-pulse group cursor-pointer"
              title="Toca aquí arriba para cambiar o seleccionar cine"
            >
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>Seleccionar cine</span>
              <ChevronDown className="w-3 h-3 text-white" />
            </button>
          </div>

          {/* Helper callout pointing directly to the top button */}
          <div 
            onClick={onHotspotTap}
            className="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs flex items-center gap-2.5 mb-3 cursor-pointer hover:bg-amber-100/70 transition-colors shadow-xs"
          >
            <div className="w-7 h-7 rounded-full bg-amber-400/30 flex items-center justify-center text-amber-900 font-extrabold text-sm shrink-0">
              👆
            </div>
            <div>
              <span className="font-extrabold text-xs block text-amber-950">¡El botón está aquí arriba!</span>
              <span className="text-[11px] text-amber-800 leading-tight block">
                Pulsa <strong>"Seleccionar cine"</strong> en la parte superior para desplegar las sedes y abrir el mapa de la app.
              </span>
            </div>
          </div>

          {/* Promo banner Cine Club Gold */}
          <div className="rounded-xl bg-gradient-to-r from-neutral-900 to-amber-950 text-white p-3 mb-3 border border-amber-500/30 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-amber-300 font-semibold">Cinemark</span>
                <h4 className="text-sm font-extrabold text-amber-400 leading-tight">¡BOLETA GRATIS!</h4>
                <p className="text-[10px] text-slate-300">Por comprar o renovar tu Cine Club Gold</p>
              </div>
              <div className="bg-amber-500/20 border border-amber-400/40 rounded-lg px-2 py-0.5 text-right">
                <span className="text-[8px] text-amber-200 block">POR SOLO</span>
                <span className="text-xs font-bold text-amber-300">$28.900/año</span>
              </div>
            </div>
          </div>

          {/* Destacados movie card */}
          <div className="rounded-xl border border-slate-200 p-2.5 bg-slate-50 flex items-center gap-2.5 mb-3">
            <div className="w-12 h-16 bg-neutral-900 rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold shrink-0 shadow-xs">
              <span className="text-[9px] text-red-500 font-bold">ESTRENO</span>
              <Film className="w-5 h-5 text-slate-400 mt-1" />
            </div>
            <div>
              <div className="font-extrabold text-xs text-slate-900">Avengers: Endgame Bonus</div>
              <div className="text-[10px] text-slate-500">3H 02M · Clasif. 12-A</div>
              <div className="text-[10px] text-red-600 font-bold mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Cali · Pacific Mall</span>
              </div>
            </div>
          </div>

          {/* Quick Notice Card */}
          <div 
            onClick={onHotspotTap}
            className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-center justify-between mt-auto mb-1 cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-red-600 shrink-0" />
              <span className="text-[11px]">¿Deseas cambiar de cine? Toca el botón <strong>Seleccionar cine</strong> arriba.</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      );

    case 2:
      // Screen 2: Teatros - Cali (Lista de teatros con botón para VER EN MAPA)
      return (
        <div className="flex-1 flex flex-col bg-white">
          {/* Header with City & View Toggle (Lista / Mapa) */}
          <div className="p-3 border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-slate-900 tracking-tight">Teatros - Cali</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
              </div>

              {/* View switch: Lista vs Ver en mapa */}
              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                <span className="px-2 py-1 text-[10px] font-bold text-slate-600 rounded">
                  Lista
                </span>
                <button
                  onClick={onHotspotTap}
                  className="flex items-center gap-1 px-2.5 py-1 bg-red-600 text-white rounded-md text-[10px] font-bold shadow-xs hover:bg-red-700 transition-all ring-2 ring-red-400 animate-pulse"
                  title="Toca para ver los cines en el mapa interactivo de la app"
                >
                  <Map className="w-3 h-3" />
                  <span>Ver en mapa</span>
                </button>
              </div>
            </div>

            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                readOnly
                placeholder="Buscar teatro en Cali..."
                value="Pacific Mall"
                className="w-full bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Section: Cercanos a ti */}
          <div className="p-3 flex-1 overflow-y-auto space-y-3">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <span>Cercanos a ti</span>
              <span className="text-red-600 lowercase text-[10px] font-semibold">2 complejos</span>
            </div>

            {/* Sede Card 1: Pacific Mall */}
            <div className="p-3 rounded-2xl border-2 border-red-500/80 bg-gradient-to-br from-red-50/40 to-white shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-slate-900">
                      Pacific Mall
                    </span>
                    <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                      Tu Sede
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>Cl. 36 Nte. # 6A-65 (Piso 5)</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>0.8 km · Abierto hoy hasta 11:30 p.m.</span>
                  </div>
                </div>

                <button 
                  className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center"
                  title="Sede Favorita"
                >
                  <Heart className="w-4 h-4 fill-red-600 text-red-600" />
                </button>
              </div>

              {/* Technologies Available */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1">
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-neutral-900 text-white tracking-wider">XD</span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-600 text-white tracking-wider">PREMIER</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">3D</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">2D</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-700">D-BOX</span>
              </div>
            </div>

            {/* Sede Card 2: Unicentro Palmira */}
            <div className="p-3 rounded-2xl border border-slate-200 bg-white shadow-xs opacity-75">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-xs text-slate-900">
                    Unicentro Palmira
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    Cl. 42 # 35-15, Palmira, Valle
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    29.24 km de tu ubicación
                  </div>
                </div>
                <button className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">2D</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">3D</span>
              </div>
            </div>
          </div>

          {/* Interactive banner calling to open the application's map */}
          <div 
            onClick={onHotspotTap}
            className="p-3 bg-red-50 border-t-2 border-red-500 flex items-center justify-between cursor-pointer hover:bg-red-100/80 transition-colors shadow-md"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm animate-bounce">
                <Map className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs text-red-900 block">Opción de Mapa Interactivo</span>
                <span className="text-[10px] text-slate-600">Toca para abrir el mapa suministrado por la aplicación y elegir tu cine.</span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shrink-0">
              Abrir Mapa
            </button>
          </div>
        </div>
      );

    case 3:
      // Screen 3: Interactive MAP supplied by the Cinemark application to choose a cinema
      return (
        <div className="flex-1 flex flex-col bg-slate-100 relative overflow-hidden">
          {/* Top Floating Map Header */}
          <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between bg-white/95 backdrop-blur-xs p-2 rounded-xl border border-slate-200 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-extrabold text-xs">
                C
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 leading-tight">Mapa de Teatros · Cali</h4>
                <span className="text-[9px] text-slate-500">2 sedes Cinemark en el mapa</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-red-50 border border-red-200 px-2 py-1 rounded-lg">
              <Map className="w-3 h-3 text-red-600" />
              <span className="text-[9px] font-bold text-red-700">Vista Mapa</span>
            </div>
          </div>

          {/* Interactive Simulated Map Canvas */}
          <div className="flex-1 w-full h-full relative bg-[#e8ecef] overflow-hidden">
            {/* Map Roads & Geography (SVG Vector Map Simulation) */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="urbanGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d5dcde" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#urbanGrid)" />

              {/* Green Park Areas */}
              <path d="M 10 40 Q 60 70 80 120 L 20 160 Z" fill="#d4edda" opacity="0.7" />
              <path d="M 180 80 Q 230 110 240 180 L 190 200 Z" fill="#d4edda" opacity="0.6" />

              {/* Blue River (Río Cali) */}
              <path 
                d="M -20 280 Q 80 250 140 190 T 260 120 T 320 60" 
                fill="none" 
                stroke="#9ec5fe" 
                strokeWidth="10" 
                strokeLinecap="round" 
              />
              <path 
                d="M -20 280 Q 80 250 140 190 T 260 120 T 320 60" 
                fill="none" 
                stroke="#6ea8fe" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />

              {/* Main Avenues / Roads */}
              {/* Av. 6 Norte */}
              <line x1="20" y1="30" x2="260" y2="350" stroke="#ffffff" strokeWidth="12" />
              <line x1="20" y1="30" x2="260" y2="350" stroke="#f6c23e" strokeWidth="2.5" strokeDasharray="6 4" />

              {/* Cl. 36 Norte */}
              <line x1="0" y1="130" x2="300" y2="170" stroke="#ffffff" strokeWidth="10" />
              <line x1="0" y1="130" x2="300" y2="170" stroke="#e0e0e0" strokeWidth="2" />

              {/* Av. Las Américas */}
              <line x1="120" y1="20" x2="30" y2="360" stroke="#ffffff" strokeWidth="8" />

              {/* Street Labels */}
              <text x="50" y="95" fill="#6c757d" fontSize="8" fontWeight="bold" transform="rotate(50 50,95)">
                Av. 6 Norte
              </text>
              <text x="12" y="145" fill="#6c757d" fontSize="8" fontWeight="bold">
                Cl. 36 Norte
              </text>
              <text x="150" y="165" fill="#4a7ebb" fontSize="7" fontWeight="bold">
                Río Cali ~
              </text>
            </svg>

            {/* GPS User Location Marker (Blue pulsing circle) */}
            <div className="absolute top-[185px] left-[75px] z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75"></span>
                <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md z-10"></div>
              </div>
              <div className="mt-1 bg-neutral-900/80 backdrop-blur-xs text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">
                Tu ubicación
              </div>
            </div>

            {/* Target Cinema Pin: CINEMARK PACIFIC MALL (Interactive on Map) */}
            <div 
              onClick={onHotspotTap}
              className="absolute top-[120px] left-[135px] z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            >
              {/* Speech bubble badge over pin */}
              <div className="relative -top-1 bg-red-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1 border border-white whitespace-nowrap animate-bounce">
                <span>Pacific Mall (0.8 km)</span>
                <Heart className="w-3 h-3 fill-white text-white" />
              </div>

              {/* Pin Icon with Radar Pulse */}
              <div className="relative flex items-center justify-center mx-auto w-10 h-10">
                <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-red-400 opacity-60"></span>
                <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-white text-white flex items-center justify-center font-black text-sm shadow-xl z-10 group-hover:scale-110 transition-transform">
                  C
                </div>
              </div>

              {/* Pin point */}
              <div className="w-2 h-2 bg-red-600 rotate-45 mx-auto -mt-1 shadow-sm"></div>
            </div>

            {/* Secondary Cinema Pin: Cinemark Palmira (at margin) */}
            <div className="absolute bottom-[170px] right-[15px] z-10 opacity-70 flex flex-col items-center">
              <div className="bg-neutral-800 text-white text-[8px] font-semibold px-1.5 py-0.5 rounded">
                Unicentro Palmira (29 km)
              </div>
              <div className="w-6 h-6 rounded-full bg-neutral-700 text-white flex items-center justify-center text-[10px] font-bold border border-white mt-0.5">
                C
              </div>
            </div>

            {/* Floating Map Controls (Right side) */}
            <div className="absolute top-14 right-2 z-20 flex flex-col gap-1.5">
              <button className="w-7 h-7 bg-white rounded-lg shadow border border-slate-200 flex items-center justify-center text-slate-700 font-bold hover:bg-slate-50">
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 bg-white rounded-lg shadow border border-slate-200 flex items-center justify-center text-slate-700 font-bold hover:bg-slate-50">
                <Minus className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 bg-white rounded-lg shadow border border-slate-200 flex items-center justify-center text-blue-600 hover:bg-slate-50">
                <LocateFixed className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 bg-white rounded-lg shadow border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50">
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Floating Bottom Card: The Theater Selected with the Map */}
          <div className="absolute bottom-2 left-2 right-2 z-30 bg-white rounded-2xl border-2 border-red-500 p-3 shadow-2xl">
            <div className="flex items-start justify-between mb-1.5">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                    SEDE EN MAPA
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700">0.8 km de ti</span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 mt-0.5">
                  Cinemark Pacific Mall
                </h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600" />
              </div>
            </div>

            <div className="text-[10px] text-slate-500 mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-600 shrink-0" />
              <span className="truncate">Cl. 36 Nte. # 6A-65 (Centro Comercial Pacific Mall, Piso 5)</span>
            </div>

            {/* Formats badges available */}
            <div className="flex items-center gap-1 mb-2.5">
              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-neutral-900 text-white">XD</span>
              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-600 text-white">PREMIER</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-700">3D</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-700">2D</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-700">D-BOX</span>
            </div>

            {/* Primary Action Button: SELECCIONAR ESTE CINE from Map */}
            <button
              onClick={onHotspotTap}
              className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] ring-2 ring-red-400 cursor-pointer animate-pulse"
            >
              <MapPin className="w-4 h-4 text-white" />
              <span>SELECCIONAR ESTE CINE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex-1 flex items-center justify-center p-4 text-center text-xs text-slate-500">
          Paso no disponible
        </div>
      );
  }
}

// Render screens specifically for the Login y Registro de Cuenta module (6 steps)
function renderLoginScreenContent(
  stepNumber: number,
  onHotspotTap: () => void
) {
  switch (stepNumber) {
    case 1:
      // Screen 1: Splash Screen - Official Cinemark opening screen (1.jpeg)
      return (
        <div 
          onClick={onHotspotTap}
          className="flex-1 flex flex-col items-center justify-center p-6 bg-white relative cursor-pointer select-none"
        >
          {/* Top Status Bar Representation */}
          <div className="absolute top-2 left-4 right-4 flex items-center justify-between text-[10px] text-slate-500 font-medium">
            <span>10:22 a. m.</span>
            <div className="flex items-center gap-1">
              <span>VoLTE</span>
              <span>4G</span>
              <span className="font-bold">96%</span>
            </div>
          </div>

          {/* Centered CINEMARK logo exactly as in 1.jpeg */}
          <div className="text-center my-auto">
            <h1 className="text-4xl font-black tracking-tight text-[#d6001c] flex items-center justify-center">
              <span>CINEMARK</span>
              <span className="text-[12px] font-bold text-[#d6001c] self-start -mt-1 ml-0.5">TM</span>
            </h1>
          </div>

          {/* Bottom Tap to Proceed Indicator */}
          <div className="w-full p-3 bg-red-50 border border-red-200 rounded-xl text-center text-xs text-red-800 shadow-xs animate-pulse">
            <span className="font-bold block">Apertura de la App Cinemark</span>
            <span className="text-[10px] text-slate-500">Toca en la pantalla para avanzar al inicio</span>
          </div>
        </div>
      );

    case 2:
      // Screen 2: Initial Pop-up Modal with Top-Right Close "X" Button (2.jpeg)
      return (
        <div className="flex-1 flex flex-col bg-slate-900/60 relative overflow-hidden p-3 justify-center items-center">
          {/* Pop-up Promotional Modal Container */}
          <div className="w-full max-w-[280px] bg-[#111215] text-white rounded-2xl border border-amber-500/40 p-3.5 shadow-2xl relative">
            {/* The Top-Right Close "X" Button as in 2.jpeg */}
            <button
              onClick={onHotspotTap}
              className="absolute -top-3.5 -right-3.5 w-8 h-8 rounded-full bg-white text-red-600 border-2 border-slate-200 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform animate-pulse ring-2 ring-red-400 cursor-pointer z-30"
              title="Toca la X para cerrar el anuncio publicitario"
            >
              <X className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-2">
              <span className="text-[10px] font-black tracking-wider text-slate-300 uppercase block">CINEMARK</span>
              <h3 className="text-base font-black leading-tight text-amber-400 mt-0.5">
                BOLETAS GRATIS
              </h3>
              <p className="text-[10px] font-bold text-slate-100 uppercase tracking-wide">
                POR COMPRAR O RENOVAR
              </p>
            </div>

            {/* Cine Club Gold & Pro Badges */}
            <div className="flex items-center justify-center gap-1.5 mb-2.5">
              <div className="border border-amber-400/80 rounded-md px-1.5 py-0.5 text-center bg-amber-950/40">
                <span className="text-[8px] font-extrabold text-amber-300 block">⭐ CINE CLUB</span>
                <span className="text-[9px] font-black text-amber-400 italic">Gold</span>
              </div>
              <div className="border border-pink-500/80 rounded-md px-1.5 py-0.5 text-center bg-pink-950/40">
                <span className="text-[8px] font-extrabold text-pink-300 block">⭐ CINE CLUB</span>
                <span className="text-[9px] font-black text-pink-400 italic">Pro</span>
              </div>
            </div>

            <div className="text-center text-[10px] font-extrabold text-white uppercase tracking-widest mb-2">
              Y DISFRUTAR
            </div>

            {/* Two Movie Posters: Resident Evil & El Corazon de la Bestia */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="rounded-lg overflow-hidden border border-slate-700 bg-black relative flex flex-col justify-end p-1.5 h-28">
                <div className="absolute top-1 left-1 bg-red-600 text-white text-[7px] font-bold px-1 rounded">
                  +15
                </div>
                <div className="text-center z-10">
                  <div className="text-[9px] font-black text-white leading-tight uppercase">
                    RESIDENT EVIL:
                  </div>
                  <div className="text-[8px] font-bold text-red-500">NOCHE CERO</div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-slate-700 bg-neutral-900 relative flex flex-col justify-end p-1.5 h-28">
                <div className="text-center z-10">
                  <span className="text-[7px] text-amber-300 block font-semibold">BRAD PITT</span>
                  <div className="text-[9px] font-black text-white leading-tight uppercase">
                    EL CORAZÓN
                  </div>
                  <div className="text-[8px] font-bold text-amber-400">DE LA BESTIA</div>
                </div>
              </div>
            </div>

            <div className="text-[8px] text-slate-500 text-center">
              Aplican T&C
            </div>
          </div>

          {/* Action Helper Tooltip */}
          <div 
            onClick={onHotspotTap}
            className="mt-4 p-2.5 bg-white/95 rounded-xl text-center text-xs text-slate-900 shadow-lg cursor-pointer hover:bg-white transition-colors"
          >
            <span className="text-red-600 font-bold block">👆 Toca la "X" arriba a la derecha</span>
            <span className="text-[10px] text-slate-600">Cierra el pop-up de Cine Club para ver la pantalla principal</span>
          </div>
        </div>
      );

    case 3:
      // Screen 3: Welcome Home Screen - Access to "BIENVENIDO - Ingreso o registro" (3.jpeg)
      return (
        <div className="flex-1 flex flex-col p-3 text-slate-800 bg-white">
          {/* Header with Prominent Button "BIENVENIDO - Ingreso o registro" */}
          <div 
            onClick={onHotspotTap}
            className="p-2 -ml-1 rounded-2xl bg-red-50 border-2 border-red-500/80 cursor-pointer hover:bg-red-100/80 transition-all flex items-center justify-between mb-3 shadow-sm animate-pulse"
            title="Toca aquí para iniciar sesión o registrarte"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold text-base tracking-tighter shadow-sm">
                C
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 tracking-tight flex items-center gap-1">
                  <span>BIENVENIDO</span>
                  <ChevronRight className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div className="text-[11px] font-semibold text-red-600">
                  Ingreso o registro
                </div>
              </div>
            </div>

            <span className="text-[9px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-full uppercase">
              Tocar
            </span>
          </div>

          {/* Tabs Subheader */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3 text-xs">
            <span className="font-bold text-red-600 border-b-2 border-red-600 pb-1">
              CARTELERA POR CINE
            </span>
            <span className="text-slate-600">Seleccionar cine</span>
          </div>

          {/* Promo Banner */}
          <div className="rounded-xl bg-gradient-to-r from-neutral-900 to-red-950 text-white p-3 mb-3 border border-red-500/30 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-red-400 font-semibold">CINEMARK</span>
                <h4 className="text-sm font-extrabold text-white leading-tight">¡VIVE EL CINE!</h4>
                <p className="text-[10px] text-slate-300">ESTRENOS EN SALAS XD Y BUTACAS D-BOX</p>
              </div>
              <div className="bg-red-500/20 border border-red-400/40 rounded-lg px-2 py-0.5 text-right">
                <span className="text-[8px] text-red-200 block">DESDE</span>
                <span className="text-xs font-bold text-red-300">$14.500</span>
              </div>
            </div>
          </div>

          {/* Destacados Movie Section */}
          <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">DESTACADOS</div>
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-neutral-900 p-2.5 flex items-center gap-3">
            <div className="w-14 h-20 bg-black rounded-lg flex flex-col items-center justify-center text-white shrink-0 shadow-sm">
              <span className="text-[8px] font-bold text-red-500">ESTRENO</span>
              <Film className="w-6 h-6 text-slate-300 mt-1" />
            </div>
            <div>
              <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded font-bold uppercase">
                Estreno
              </span>
              <h4 className="font-black text-xs text-white mt-1">AVENGERS: ENDGAME BONUS</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">3H 02M · Marvel Studios · Clasif. 12-A</p>
            </div>
          </div>

          {/* Helper Instruction Banner */}
          <div 
            onClick={onHotspotTap}
            className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 flex items-center gap-2.5 mt-auto cursor-pointer hover:bg-red-100 transition-colors shadow-xs"
          >
            <User className="w-4 h-4 text-red-600 shrink-0" />
            <span className="text-[11px] leading-tight">
              Toca <strong>"BIENVENIDO - Ingreso o registro"</strong> arriba para abrir el panel de login o crear tu cuenta.
            </span>
          </div>
        </div>
      );

    case 4:
      // Screen 4: Login Bottom Sheet Modal with Email, Password, and "CREAR UNA CUENTA" (4.jpeg)
      return (
        <div className="flex-1 flex flex-col justify-end bg-black/60 relative overflow-hidden">
          {/* Dimmed Background App View */}
          <div className="p-3 opacity-40">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-600"></div>
              <div>
                <div className="h-3 w-20 bg-slate-300 rounded mb-1"></div>
                <div className="h-2 w-16 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Bottom Sheet Slide-up Modal */}
          <div className="bg-white rounded-t-3xl p-4 shadow-2xl border-t border-slate-200 space-y-3 z-30">
            <h3 className="font-black text-base text-slate-900 tracking-tight uppercase">
              INICIAR SESIÓN
            </h3>

            {/* Email Field */}
            <div>
              <input
                type="email"
                readOnly
                placeholder="Email*"
                value="santiago.guerrero@correo.com"
                className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                readOnly
                placeholder="Contraseña*"
                value="••••••••••••"
                className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none font-medium pr-10"
              />
              <button className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-800">
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Olvidé mi contraseña */}
            <div className="text-center pt-0.5">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[11px] font-bold text-red-600 underline">
                Olvidé mi contraseña
              </a>
            </div>

            {/* Button 1: INICIAR SESIÓN */}
            <button
              onClick={onHotspotTap}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer animate-pulse ring-2 ring-red-400"
            >
              INICIAR SESIÓN
            </button>

            {/* Button 2: CREAR UNA CUENTA */}
            <button
              onClick={onHotspotTap}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-red-50 text-red-600 border-2 border-red-600 font-black text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer"
            >
              CREAR UNA CUENTA
            </button>
          </div>
        </div>
      );

    case 5:
      // Screen 5: Registration Form - Part 1: Personal Data & Document (5.jpeg)
      return (
        <div className="flex-1 flex flex-col bg-[#faf9f6] text-slate-800">
          {/* Header: <- Registrarse */}
          <div className="p-3 border-b border-slate-200 bg-white flex items-center gap-2 shrink-0">
            <ArrowLeft className="w-4 h-4 text-red-600 font-bold cursor-pointer" />
            <h3 className="font-black text-base text-slate-900 tracking-tight">
              Registrarse
            </h3>
          </div>

          {/* Form Scrollable Container */}
          <div className="p-3 flex-1 overflow-y-auto space-y-2.5 text-xs">
            {/* Tipo de persona */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Tipo de persona *</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs font-medium text-slate-800">
                <span>Natural</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            {/* Nombres & Apellidos */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Nombres *</label>
              <input
                type="text"
                readOnly
                value="Santiago David"
                className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium text-slate-800"
              />
            </div>

            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Apellidos *</label>
              <input
                type="text"
                readOnly
                value="Guerrero"
                className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium text-slate-800"
              />
            </div>

            {/* Correo y Confirmación */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Correo electrónico *</label>
              <input
                type="email"
                readOnly
                value="santiago.guerrero@correo.com"
                className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium text-blue-700"
              />
            </div>

            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Confirmación correo electrónico *</label>
              <input
                type="email"
                readOnly
                value="santiago.guerrero@correo.com"
                className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium text-blue-700"
              />
            </div>

            {/* Celular y Dirección */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Celular *</label>
                <input
                  type="text"
                  readOnly
                  value="3154507049"
                  className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Dirección *</label>
                <input
                  type="text"
                  readOnly
                  value="Calle 36 Nte #6A"
                  className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium"
                />
              </div>
            </div>

            {/* Fecha de nacimiento */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Fecha de nacimiento (opcional)</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs text-slate-700">
                <span>15/08/1998</span>
                <Calendar className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            {/* Tipo y Número de Documento */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Tipo de documento *</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs font-medium text-slate-800">
                <span>Cédula de Ciudadanía</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Número de documento *</label>
              <input
                type="text"
                readOnly
                value="1107541099"
                className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-medium"
              />
            </div>

            {/* Ciudad y Teatro de preferencia */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Ciudad *</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Cali</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Teatro de preferencia *</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs font-bold text-red-600">
                <span>Pacific Mall</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </div>

          {/* Action Footer: Proceed to Password & Terms */}
          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between shrink-0 cursor-pointer hover:bg-neutral-800 transition-colors shadow-md"
          >
            <span className="text-[11px] text-slate-300">Desplazarse a Contraseña y Términos</span>
            <button className="bg-red-600 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1">
              <span>Continuar</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      );

    case 6:
      // Screen 6: Registration Form - Part 2: Password, Terms Checkboxes, and CONTINUAR (6.jpeg)
      return (
        <div className="flex-1 flex flex-col bg-[#faf9f6] text-slate-800 justify-between">
          {/* Header */}
          <div className="p-3 border-b border-slate-200 bg-white flex items-center gap-2 shrink-0">
            <ArrowLeft className="w-4 h-4 text-red-600 font-bold cursor-pointer" />
            <h3 className="font-black text-base text-slate-900 tracking-tight">
              Registrarse
            </h3>
          </div>

          {/* Scrolled Down Form Fields Container as in 6.jpeg */}
          <div className="p-3 flex-1 overflow-y-auto space-y-2.5 text-xs">
            {/* Ciudad y Teatro de preferencia */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Ciudad *</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Cali</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Teatro de preferencia *</label>
              <div className="p-2 border border-slate-300 rounded-lg bg-white flex items-center justify-between text-xs font-bold text-red-600">
                <span>Pacific Mall</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            {/* Contraseña with Eye icon */}
            <div>
              <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">Contraseña *</label>
              <div className="relative">
                <input
                  type="password"
                  readOnly
                  value="CineSeguro2026*"
                  className="w-full p-2 border border-slate-300 rounded-lg bg-white text-xs font-mono font-medium pr-10"
                />
                <button className="absolute right-2.5 top-2.5 text-slate-600 hover:text-slate-900">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mandatory Checkboxes */}
            <div className="pt-2 space-y-2 text-[10px]">
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  defaultChecked 
                  className="mt-0.5 accent-red-600 rounded cursor-pointer w-4 h-4" 
                />
                <span className="text-slate-700 leading-tight">
                  Acepto los <a href="#" onClick={(e) => e.preventDefault()} className="text-red-600 font-semibold underline">términos y condiciones</a>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  defaultChecked 
                  className="mt-0.5 accent-red-600 rounded cursor-pointer w-4 h-4" 
                />
                <span className="text-slate-700 leading-tight">
                  Acepto el <a href="#" onClick={(e) => e.preventDefault()} className="text-red-600 font-semibold underline">tratamiento de datos personales</a>
                </span>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 pt-1">
              Los campos marcados con * son obligatorios
            </div>
          </div>

          {/* Bottom CONTINUAR Button exactly as in 6.jpeg */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <button
              onClick={onHotspotTap}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all animate-pulse ring-2 ring-red-400 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>CONTINUAR</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex-1 flex items-center justify-center p-4 text-center text-xs text-slate-500">
          Paso no disponible
        </div>
      );
  }
}

// Render screens specifically for the Atención al Cliente, PQRSF y Soporte module (4 steps)
function renderSoporteScreenContent(
  stepNumber: number,
  onHotspotTap: () => void
) {
  switch (stepNumber) {
    case 1:
      // Screen 1: Home Screen with active session "HOLA, SANTIAGO!" and pointing to Menú tab (1.jpg)
      return (
        <div className="flex-1 flex flex-col p-3 text-slate-800 bg-white">
          {/* Header with user avatar SG + HOLA, SANTIAGO! */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xs tracking-tight shadow-sm shrink-0">
              SG
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 tracking-tight leading-tight">
                HOLA, SANTIAGO!
              </div>
              <div className="text-[11px] text-slate-500 hover:text-slate-800 cursor-pointer">
                Acceder a mi perfil
              </div>
            </div>
          </div>

          {/* Subheader: Cartelera por Cine | Seleccionar cine */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3 text-xs">
            <span className="font-bold text-red-600 border-b-2 border-red-600 pb-1">
              CARTELERA POR CINE
            </span>
            <span className="text-slate-600">Seleccionar cine</span>
          </div>

          {/* Promo Banner */}
          <div className="rounded-xl bg-gradient-to-r from-neutral-900 to-red-950 text-white p-3 mb-3 border border-red-500/30 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-red-400 font-semibold">CINEMARK</span>
                <h4 className="text-sm font-extrabold text-white leading-tight">¡VIVE EL CINE!</h4>
                <p className="text-[10px] text-slate-300">ESTRENOS EN SALAS XD Y BUTACAS D-BOX</p>
              </div>
              <div className="bg-red-500/20 border border-red-400/40 rounded-lg px-2 py-0.5 text-right">
                <span className="text-[8px] text-red-200 block">DESDE</span>
                <span className="text-xs font-bold text-red-300">$14.500</span>
              </div>
            </div>
          </div>

          {/* Destacados Section */}
          <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">DESTACADOS</div>
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-neutral-900 p-2.5 flex items-center gap-3 mb-3">
            <div className="w-14 h-20 bg-black rounded-lg flex flex-col items-center justify-center text-white shrink-0 shadow-sm">
              <span className="text-[8px] font-bold text-red-500">ESTRENO</span>
              <Film className="w-6 h-6 text-slate-300 mt-1" />
            </div>
            <div>
              <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded font-bold uppercase">
                Estreno
              </span>
              <h4 className="font-black text-xs text-white mt-1">AVENGERS: ENDGAME BONUS</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">3H 02M · Marvel Studios · Clasif. 12-A</p>
            </div>
          </div>

          {/* Helper Banner pointing to "Menú" in the bottom bar */}
          <div 
            onClick={onHotspotTap}
            className="p-3 bg-red-50 border-2 border-red-500 rounded-xl flex items-center justify-between cursor-pointer hover:bg-red-100/80 transition-colors shadow-sm mt-auto animate-pulse"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs text-red-900 block">Atención al Cliente y Soporte</span>
                <span className="text-[11px] text-slate-600">
                  Toca la pestaña <strong>"Menú"</strong> (abajo a la derecha) para ver las opciones de contacto.
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-red-600 shrink-0" />
          </div>
        </div>
      );

    case 2:
      // Screen 2: Slide-up Bottom Sheet Menu with "Contáctanos" (2.jpg)
      return (
        <div className="flex-1 flex flex-col justify-end bg-black/60 relative overflow-hidden">
          {/* Dimmed Background App */}
          <div className="p-3 opacity-30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">SG</div>
              <div className="font-bold text-xs">HOLA, SANTIAGO!</div>
            </div>
          </div>

          {/* Slide-up Menu Sheet as in 2.jpg */}
          <div className="bg-white rounded-t-3xl p-3 shadow-2xl border-t border-slate-200 space-y-2 z-30">
            {/* Row 1: Contáctanos (TARGET OPTION) */}
            <div 
              onClick={onHotspotTap}
              className="p-3 rounded-xl border-2 border-red-500 bg-red-50/50 hover:bg-red-100 flex items-center justify-between cursor-pointer transition-all shadow-sm animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-bold text-xs text-slate-900">Contáctanos</span>
              </div>
              <ChevronRight className="w-4 h-4 text-red-600" />
            </div>

            {/* Row 2: Términos y Condiciones */}
            <div className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="font-medium text-xs text-slate-800">Términos y Condiciones</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* Row 3: Notificaciones */}
            <div className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="font-medium text-xs text-slate-800">Notificaciones</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* Row 4: SIC */}
            <div className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="font-medium text-xs text-slate-800">SIC</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* Row 5: Acerca de */}
            <div className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Info className="w-4 h-4" />
                </div>
                <span className="font-medium text-xs text-slate-800">Acerca de</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      );

    case 3:
      // Screen 3: Integrated Zendesk Help Center - "Enviar una solicitud" (3.jpg)
      return (
        <div className="flex-1 flex flex-col bg-white overflow-hidden text-slate-900">
          {/* In-app Browser / Webview Top Bar exactly as in 3.jpg */}
          <div className="px-3 py-2 bg-slate-900 text-white flex items-center justify-between text-xs shrink-0">
            <div className="flex items-center gap-3">
              <X className="w-4 h-4 text-slate-300 cursor-pointer" />
              <ChevronDown className="w-4 h-4 text-slate-300" />
              <div className="flex items-center gap-1 text-[11px] text-slate-300 truncate max-w-[140px]">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>as.zendesk.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Share2 className="w-4 h-4 cursor-pointer" />
              <MoreVertical className="w-4 h-4 cursor-pointer" />
            </div>
          </div>

          {/* Webview Content Header */}
          <div className="p-3 border-b border-slate-100 flex items-center justify-between shrink-0">
            <span className="font-black text-sm text-red-600 tracking-wider">CINEMARK</span>
            <div className="flex items-center gap-2 text-xs text-red-600 font-semibold">
              <span>Iniciar sesión</span>
            </div>
          </div>

          {/* Breadcrumb & Search */}
          <div className="p-3 flex-1 overflow-y-auto space-y-3">
            <div className="text-[10px] text-slate-500">
              <span className="text-red-600 hover:underline">Preguntas Cinemark</span> &gt; <span>Enviar una solicitud</span>
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                readOnly
                placeholder="Buscar"
                className="w-full pl-9 pr-3 py-2 rounded-full border border-slate-300 bg-white text-xs placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Heading */}
            <h2 className="text-xl font-black text-slate-900 tracking-tight pt-1">
              Enviar una solicitud
            </h2>

            {/* Warning / Important Box exactly as in 3.jpg */}
            <div className="p-3 bg-red-50/80 border-l-4 border-red-600 rounded-r-xl text-[11px] text-slate-800 space-y-1.5 shadow-xs">
              <p className="font-bold text-red-900 flex items-center gap-1.5">
                <span className="text-base leading-none">❗</span>
                <span>Importante.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold">✅</span>
                <span>Seleccione el Formulario de acuerdo a su consulta.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold">✅</span>
                <span>No olvide verificar su correo electrónico, de lo contrario su solicitud quedará suspendida.</span>
              </p>
            </div>

            {/* Dropdown Field (Closed state '-') */}
            <div>
              <div 
                onClick={onHotspotTap}
                className="p-3 border-2 border-red-500 rounded-lg bg-white flex items-center justify-between cursor-pointer hover:border-red-600 transition-all shadow-sm animate-pulse"
              >
                <span className="text-xs text-slate-500 font-bold">-</span>
                <ChevronDown className="w-4 h-4 text-red-600" />
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div 
            onClick={onHotspotTap}
            className="p-2.5 bg-neutral-900 text-white flex items-center justify-between text-xs cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <span className="text-[11px] text-slate-300">Toca el selector para abrir las categorías de consulta</span>
            <ChevronRight className="w-4 h-4 text-red-500" />
          </div>
        </div>
      );

    case 4:
      // Screen 4: Dropdown Menu Options Opened (4.jpg)
      return (
        <div className="flex-1 flex flex-col bg-white overflow-hidden text-slate-900 relative">
          {/* In-app Browser / Webview Top Bar */}
          <div className="px-3 py-2 bg-slate-900 text-white flex items-center justify-between text-xs shrink-0">
            <div className="flex items-center gap-3">
              <X className="w-4 h-4 text-slate-300" />
              <ChevronDown className="w-4 h-4 text-slate-300" />
              <div className="flex items-center gap-1 text-[11px] text-slate-300 truncate max-w-[140px]">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>as.zendesk.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Share2 className="w-4 h-4" />
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          {/* Webview Content Header */}
          <div className="p-3 border-b border-slate-100 flex items-center justify-between shrink-0">
            <span className="font-black text-sm text-red-600 tracking-wider">CINEMARK</span>
            <span className="text-xs text-red-600 font-semibold">Iniciar sesión</span>
          </div>

          {/* Breadcrumb & Search */}
          <div className="p-3 flex-1 overflow-y-auto space-y-3">
            <div className="text-[10px] text-slate-500">
              <span className="text-red-600">Preguntas Cinemark</span> &gt; <span>Enviar una solicitud</span>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Enviar una solicitud
            </h2>

            {/* Warning Box */}
            <div className="p-2.5 bg-red-50/80 border-l-4 border-red-600 rounded-r-xl text-[10px] text-slate-800 space-y-1">
              <p className="font-bold text-red-900">❗ Importante.</p>
              <p>✅ Seleccione el Formulario de acuerdo a su consulta.</p>
              <p>✅ No olvide verificar su correo electrónico, de lo contrario su solicitud quedará suspendida.</p>
            </div>

            {/* Opened Dropdown Menu Container exactly as in 4.jpg */}
            <div className="border border-slate-300 rounded-lg bg-white shadow-xl overflow-hidden divide-y divide-slate-100 text-xs">
              {/* Option 1 */}
              <div 
                onClick={onHotspotTap}
                className="p-2.5 hover:bg-slate-50 cursor-pointer text-slate-800 transition-colors font-medium"
              >
                Cine Club PRO - GOLD
              </div>

              {/* Option 2 */}
              <div 
                onClick={onHotspotTap}
                className="p-2.5 hover:bg-slate-50 cursor-pointer text-slate-800 transition-colors font-medium"
              >
                Soporte - Compras Online
              </div>

              {/* Option 3: TARGET (No recibí las boletas) */}
              <div 
                onClick={onHotspotTap}
                className="p-2.5 bg-red-50 hover:bg-red-100 cursor-pointer text-red-700 font-bold transition-colors flex items-center justify-between border-l-4 border-red-600 animate-pulse"
              >
                <span>No recibí las boletas.</span>
                <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded font-bold uppercase">Urgente</span>
              </div>

              {/* Option 4: PQRSF */}
              <div 
                onClick={onHotspotTap}
                className="p-2.5 hover:bg-slate-50 cursor-pointer text-slate-800 transition-colors font-medium"
              >
                PQRSF Cinemark Colombia.
              </div>

              {/* Option 5: Ventas Corporativas */}
              <div 
                onClick={onHotspotTap}
                className="p-2.5 hover:bg-slate-50 cursor-pointer text-slate-800 transition-colors font-medium"
              >
                Ventas Corporativas
              </div>
            </div>
          </div>

          {/* Floating Action Button (Red circular question mark as in 4.jpg) */}
          <div className="absolute bottom-4 right-4 z-20">
            <button 
              onClick={onHotspotTap}
              className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
              title="Centro de Ayuda y Preguntas Frecuentes"
            >
              <HelpCircle className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex-1 flex items-center justify-center p-4 text-center text-xs text-slate-500">
          Paso no disponible
        </div>
      );
  }
}
