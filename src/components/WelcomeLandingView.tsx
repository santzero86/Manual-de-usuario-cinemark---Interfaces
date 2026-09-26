import React from 'react';
import { FileText, Calendar, BookOpen, Users, User, ArrowRight, Smartphone } from 'lucide-react';

interface WelcomeLandingViewProps {
  onContinue: () => void;
}

export const WelcomeLandingView: React.FC<WelcomeLandingViewProps> = ({ onContinue }) => {
  const authors = [
    { name: 'Astaiza Gutierrez Jeremy Andres', code: '202415667' },
    { name: 'Candela Isaza Brayan Steven', code: '202415014' },
    { name: 'Escamilla Juan Pablo', code: '202420580' },
    { name: 'Guerrero Jaramillo Santiago David', code: '202419030' },
  ];

  return (
    <div className="min-h-[85vh] w-full bg-white rounded-3xl relative overflow-hidden border border-slate-200/80 shadow-2xl p-6 sm:p-10 lg:p-14 flex items-center justify-center animate-fade-in text-slate-800">
      {/* Decorative Red Waves/Swooshes matching the reference screenshot */}
      <div 
        className="absolute -top-16 -right-16 w-72 h-72 sm:w-96 sm:h-96 bg-[#d6001c] rounded-bl-[200px] pointer-events-none z-0 shadow-lg"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#d6001c] rounded-tr-[160px] pointer-events-none z-0 opacity-90 shadow-lg"
        aria-hidden="true"
      />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Information, Authors and Continue Button */}
        <div className="lg:col-span-7 space-y-4 text-left">
          
          {/* Brand Logo Emblem matching reference */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#d6001c] flex flex-col items-center justify-center text-white shadow-xl shadow-red-950/20 ring-4 ring-red-100">
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
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm font-mono">1.0.0.00</span>
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
            <span>Guía interactiva • Cinemark Academy</span>
          </div>

          {/* AUTORES Card matching reference screenshot */}
          <div className="rounded-2xl bg-rose-50/70 border border-red-100 p-4 space-y-2 max-w-lg shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#d6001c] uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>AUTORES</span>
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
              className="w-full py-3.5 px-8 rounded-full bg-[#d6001c] hover:bg-red-700 active:scale-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-600/40 group"
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Right Column: Red Cinema 3D Mascot Waving Hello (Matching the Claro Robot Mascot) */}
        <div className="lg:col-span-5 flex justify-center items-center py-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            
            {/* Soft pink/red background circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-100/70 via-red-50 to-pink-50/40 shadow-inner border border-red-100/50" />

            {/* High-Fidelity 3D Glossy Cinema Mascot Waving Hello */}
            <div className="relative z-10 flex flex-col items-center animate-float">
              
              {/* Mascot Head */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#ff334b] via-[#d6001c] to-[#990014] shadow-2xl flex items-center justify-center p-3.5 border border-red-400/40">
                {/* Specular Highlight on head */}
                <div className="absolute top-2 left-6 w-16 h-8 rounded-full bg-white/40 blur-xs rotate-[-25deg]" />

                {/* White Glossy Faceplate */}
                <div className="w-full h-24 sm:h-28 rounded-[36px] bg-white shadow-inner flex items-center justify-center gap-6 px-4 relative overflow-hidden border border-slate-100">
                  {/* Left Big Black Eye */}
                  <div className="w-7 h-9 sm:w-8 sm:h-11 bg-slate-950 rounded-full relative flex items-start justify-end p-1 shadow-sm">
                    {/* Eye Sparkle */}
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white mr-0.5 mt-0.5 shadow-xs" />
                  </div>

                  {/* Right Big Black Eye */}
                  <div className="w-7 h-9 sm:w-8 sm:h-11 bg-slate-950 rounded-full relative flex items-start justify-end p-1 shadow-sm">
                    {/* Eye Sparkle */}
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white mr-0.5 mt-0.5 shadow-xs" />
                  </div>
                </div>

                {/* Left Waving Arm (Glossy Red Hand waving) */}
                <div className="absolute -left-7 top-4 sm:-left-9 sm:top-6 rotate-[-30deg] animate-bounce duration-1000">
                  <div className="w-12 h-14 sm:w-14 sm:h-16 rounded-full bg-gradient-to-tr from-[#990014] via-[#d6001c] to-[#ff3b53] shadow-lg flex items-center justify-center relative border border-red-400/40">
                    {/* Fingers waving */}
                    <div className="absolute -top-1 left-2 w-3.5 h-5 rounded-full bg-[#d6001c]" />
                    <div className="absolute -top-2 left-5 w-3.5 h-6 rounded-full bg-[#d6001c]" />
                    <div className="absolute -top-1 left-8 w-3.5 h-5 rounded-full bg-[#d6001c]" />
                  </div>
                </div>

                {/* Right Relaxed Arm */}
                <div className="absolute -right-3 bottom-2 w-7 h-10 rounded-full bg-gradient-to-b from-[#d6001c] to-[#880012] rotate-[20deg]" />
              </div>

              {/* Mascot Body */}
              <div className="relative -mt-3 w-28 h-20 sm:w-32 sm:h-24 rounded-[32px] bg-gradient-to-b from-[#ff2a44] via-[#d6001c] to-[#800010] shadow-xl flex items-center justify-center border border-red-400/30">
                {/* Cinema Logo Emblem on Chest */}
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#d6001c] font-black text-xs shadow-md">
                  C
                </div>
              </div>

              {/* Cute Feet */}
              <div className="flex gap-4 -mt-1">
                <div className="w-10 h-7 rounded-full bg-gradient-to-b from-[#d6001c] to-[#66000c] shadow-md" />
                <div className="w-10 h-7 rounded-full bg-gradient-to-b from-[#d6001c] to-[#66000c] shadow-md" />
              </div>

              {/* Floating Soft Shadow underneath */}
              <div className="w-36 h-4 bg-slate-900/15 rounded-full blur-sm mt-2" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
