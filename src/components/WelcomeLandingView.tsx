import React from 'react';
import { FileText, Calendar, BookOpen, Users, User, ArrowRight, Smartphone, ShieldCheck } from 'lucide-react';

interface WelcomeLandingViewProps {
  onContinue: () => void;
}

export const WelcomeLandingView: React.FC<WelcomeLandingViewProps> = ({ onContinue }) => {
  const authors = [
    { name: 'Astaiza Gutierrez Jeremy Andres', code: '202415667' },
    { name: 'Candela Isaza Brayan Steven', code: '202415014' },
    { name: 'Escamilla Juan Pablo', code: '202420580' },
    { name: 'Guerrero Jaramillo Santiago David', code: '202419030' },
    { name: 'Brandon Lasprilla Aristizabal', code: '202417592' },
  ];

  return (
    <div className="min-h-[85vh] w-full bg-white rounded-3xl relative overflow-hidden border border-slate-200/80 shadow-2xl p-6 sm:p-10 lg:p-14 flex items-center justify-center animate-fade-in text-slate-800">
      {/* Decorative Red Curves/Swooshes */}
      <div 
        className="absolute -top-16 -right-16 w-72 h-72 sm:w-96 sm:h-96 bg-[#d6001c] rounded-bl-[200px] pointer-events-none z-0 shadow-lg"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#d6001c] rounded-tr-[160px] pointer-events-none z-0 opacity-90 shadow-lg"
        aria-hidden="true"
      />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Information, 5 Authors and Continue Button */}
        <div className="lg:col-span-7 space-y-4 text-left">
          
          {/* Brand Logo Emblem */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d6001c] flex flex-col items-center justify-center text-white shadow-xl shadow-red-950/20 ring-4 ring-red-100">
            <span className="font-black text-2xl tracking-tighter leading-none">C</span>
            <span className="text-[7px] font-black tracking-widest uppercase mt-0.5 opacity-90">CINEMARK</span>
          </div>

          {/* Red Accent Bar */}
          <div className="w-12 h-1.5 bg-[#d6001c] rounded-full" />

          {/* Main Title Hierarchy */}
          <div className="space-y-0.5">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-none uppercase">
              MANUAL DE USUARIO
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-none uppercase">
              DE LA APP
            </h2>
            <div className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#d6001c] tracking-tight leading-tight">
              Cinemark™
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg leading-relaxed">
            Consulta cartelera, reserva tus boletas, confitería y gestiona tus requerimientos desde la app Cinemark
          </p>

          {/* Android Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs">
              <span className="text-sm">🤖</span>
              <span>Para sistemas Android</span>
            </div>
          </div>

          {/* Metadata Grid (Version 1.0.0.00 & Año 2026) */}
          <div className="flex items-center gap-6 py-1">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#d6001c]" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Versión</span>
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm font-mono">1.0.0</span>
              </div>
            </div>

            <div className="h-7 w-px bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-[#d6001c]" />
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Año</span>
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm font-mono">2026</span>
              </div>
            </div>
          </div>

          {/* Interactive Guide Label */}
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <BookOpen className="w-4 h-4 text-[#d6001c]" />
            <span>Guía interactiva • Cinemark Academy (Univalle - 750040C)</span>
          </div>

          {/* AUTORES Card with the 5 students */}
          <div className="rounded-2xl bg-rose-50/70 border border-red-100 p-4 space-y-2 max-w-lg shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-black text-[#d6001c] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>AUTORES</span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">5 Integrantes</span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              {authors.map((author, index) => (
                <div key={index} className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-800">{author.name}</span>
                  <span className="text-slate-400 font-mono text-[11px]">- {author.code}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Continuar Button */}
          <div className="pt-2 max-w-md">
            <button
              onClick={onContinue}
              className="w-full py-3.5 px-8 rounded-full bg-[#d6001c] hover:bg-red-700 active:scale-98 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Right Column: Replaced mascot with the official Cinemark Logo from user image */}
        <div className="lg:col-span-5 flex justify-center items-center py-6">
          <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center">
            
            {/* Soft subtle glow in the background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-100/60 via-red-50/40 to-white/10 blur-xl" />

            {/* Official Logo Card matching image.png exactly */}
            <div className="relative z-10 w-72 sm:w-80 p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xl flex flex-col items-center justify-center space-y-6 group hover:shadow-red-950/15 transition-all">
              
              {/* Big Red Circle with White 'C' */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#d6001c] flex items-center justify-center shadow-xl shadow-red-900/30 transition-transform group-hover:scale-105 duration-300">
                <span className="text-white font-sans font-black text-7xl sm:text-8xl tracking-tight select-none leading-none -translate-y-0.5">
                  C
                </span>
              </div>

              {/* CINEMARK Wordmark underneath in Bold Red Sans-Serif */}
              <div className="flex items-center justify-center">
                <span className="text-[#d6001c] font-black text-2xl sm:text-3xl tracking-tight uppercase select-none">
                  CINEMARK
                </span>
                <span className="text-[#d6001c] text-[10px] font-bold align-top ml-0.5 -mt-3">
                  ™
                </span>
              </div>

              {/* Verified Emblem Pill */}
              <div className="pt-1 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Aplicación Móvil Oficial · Colombia</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
