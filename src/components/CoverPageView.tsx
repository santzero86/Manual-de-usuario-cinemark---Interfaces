import React, { useState } from 'react';
import { Module } from '../types/modules';
import { 
  Smartphone, 
  MapPin, 
  ChevronRight, 
  Building, 
  Calendar, 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  ArrowRight, 
  Layers, 
  Sparkles,
  Ticket,
  UtensilsCrossed,
  Headphones,
  Lock,
  Compass,
  ArrowLeft,
  BookOpen,
  Info,
  HelpCircle,
  Download,
  Settings,
  AlertTriangle,
  RefreshCw,
  FileCheck,
  FileText,
  CreditCard,
  ListOrdered
} from 'lucide-react';

interface CoverPageViewProps {
  modules: Module[];
  onOpenSimulator: (moduleId?: string) => void;
  onBackToLanding?: () => void;
}

export const CoverPageView: React.FC<CoverPageViewProps> = ({
  modules,
  onOpenSimulator,
  onBackToLanding,
}) => {
  const [activeTab, setActiveTab] = useState<'tutoriales' | 'normativa'>('tutoriales');
  const [selectedSection, setSelectedSection] = useState<number>(3);
  const totalCapturas = modules.reduce((acc, m) => acc + m.steps.length, 0);

  const authorsList = [
    { name: 'Astaiza Gutierrez Jeremy Andres', code: '202415667' },
    { name: 'Candela Isaza Brayan Steven', code: '202415014' },
    { name: 'Escamilla Juan Pablo', code: '202420580' },
    { name: 'Guerrero Jaramillo Santiago David', code: '202419030' },
    { name: 'Brandon Lasprilla Aristizabal', code: '202417592' },
  ];

  const documentMetadata = {
    code: 'MN-CMK-CALI-2026-V1',
    courseCode: '750040C - Interacción Humano-Computador',
    researchGroup: 'Grupo de Investigación Camaleón',
    version: '1.0.0.00 (Edición Oficial)',
    date: 'Año 2026',
    authors: 'Astaiza G., Candela I., Escamilla J.P., Guerrero J.S., Lasprilla B.',
    institution: 'Universidad del Valle',
    faculty: 'Facultad de Ingeniería · Escuela de Ingeniería de Sistemas y Computación',
    entity: 'Cinemark Colombia S.A.S.',
    location: 'Cali, Valle del Cauca, Colombia',
    status: 'Vigente y Verificado (36 capturas reales)',
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
      case 'LogIn':
        return <User className="w-6 h-6 text-[#d6001c]" />;
      case 'MapPin':
      case 'Building':
        return <MapPin className="w-6 h-6 text-[#d6001c]" />;
      case 'Ticket':
      case 'Film':
        return <Ticket className="w-6 h-6 text-[#d6001c]" />;
      case 'Popcorn':
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#d6001c]" />;
      case 'Headphones':
      case 'HelpCircle':
        return <Headphones className="w-6 h-6 text-[#d6001c]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d6001c]" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 pb-16 animate-fade-in text-slate-800">
      
      {/* Top Bar with Return to Landing option */}
      {onBackToLanding && (
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToLanding}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer shadow-xs group hover:scale-[1.02]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#d6001c] group-hover:-translate-x-1 transition-transform" />
            <span>Volver a la portada de bienvenida</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-mono bg-white px-2.5 py-1 rounded-full border border-slate-200">
              Versión {documentMetadata.version}
            </span>
          </div>
        </div>
      )}

      {/* Top Header Card: Institutional & Version Information */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          {/* Cinemark Logo Card */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center p-2 shadow-md shadow-red-950/10 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#d6001c] flex items-center justify-center text-white font-black text-lg">
              C
            </div>
            <span className="text-[7px] font-black text-[#d6001c] tracking-widest mt-0.5">CINEMARK</span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black tracking-widest text-[#d6001c] uppercase">
                {documentMetadata.entity}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-semibold">
                {documentMetadata.code}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[10px] text-slate-500 font-medium">
                {documentMetadata.courseCode}
              </span>
            </div>

            <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-tight mt-0.5">
              Manual de Usuario e Instrucción Técnica · App Móvil Cinemark
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {documentMetadata.institution} · {documentMetadata.faculty} · {documentMetadata.researchGroup}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start md:self-center shrink-0">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            title="Imprimir manual"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Imprimir</span>
          </button>

          <button
            onClick={() => onOpenSimulator(modules[0]?.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#d6001c] hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-950/20 transition-all cursor-pointer hover:scale-105"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Abrir Simulador</span>
          </button>
        </div>
      </div>

      {/* Main Tabs Navigation (Tutoriales vs 12 Capítulos del Manual Univalle) */}
      <div className="flex border-b border-slate-200 gap-2">
        <button
          onClick={() => setActiveTab('tutoriales')}
          className={`flex items-center gap-2 px-5 py-3 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
            activeTab === 'tutoriales'
              ? 'border-[#d6001c] text-[#d6001c]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>Tutoriales Interactivos ({modules.length} Módulos · 36 Capturas)</span>
        </button>

        <button
          onClick={() => setActiveTab('normativa')}
          className={`flex items-center gap-2 px-5 py-3 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
            activeTab === 'normativa'
              ? 'border-[#d6001c] text-[#d6001c]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Estructura Oficial del Manual (12 Secciones EISC)</span>
        </button>
      </div>

      {/* TAB 1: TUTORIALES Y SIMULADOR (Matching Reference Image) */}
      {activeTab === 'tutoriales' && (
        <div className="space-y-8 animate-fade-in">
          {/* Hero Section: "Conoce el manual" */}
          <div className="w-full rounded-3xl bg-gradient-to-r from-red-50/90 via-rose-50/80 to-pink-50/60 border border-red-200/80 p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Folded Map Illustration with Pin */}
              <div className="relative shrink-0">
                <div className="w-20 h-16 sm:w-24 sm:h-20 bg-white/90 border border-red-200 rounded-2xl shadow-sm flex items-center justify-center p-2 relative overflow-hidden">
                  <svg viewBox="0 0 100 80" className="w-full h-full text-slate-400">
                    <path d="M5,10 L35,20 L65,10 L95,20 L95,70 L65,60 L35,70 L5,60 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <path d="M35,20 L35,70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M65,10 L65,60" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M15,45 Q50,25 85,35" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />
                  </svg>
                  <div className="absolute top-2 left-3 w-4 h-4 rounded-full bg-[#d6001c] flex items-center justify-center text-white shadow-md">
                    <MapPin className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Red Circle with Total Steps Badge */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#d6001c] text-white font-black text-xs flex items-center justify-center shadow-lg border-2 border-white">
                  {modules.length}
                </div>
              </div>

              {/* Text block */}
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Conoce el manual
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  Haz un recorrido rápido por las principales secciones del manual y aprende dónde encontrar cada información de la app Cinemark Colombia.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-red-200 text-slate-700 text-xs font-semibold shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#d6001c]" />
                  <span>{modules.length} módulos oficiales · {totalCapturas} capturas reales</span>
                </div>
              </div>
            </div>

            {/* Big Red Empezar Button */}
            <button
              onClick={() => onOpenSimulator(modules[0]?.id)}
              className="w-full md:w-auto px-7 py-3.5 bg-[#d6001c] hover:bg-red-700 active:scale-95 text-white font-extrabold text-sm rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 shrink-0"
            >
              <span>Empezar</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Section: Secciones del Manual (5 Main Sections Horizontal Cards) */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#d6001c] rounded-full"></div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Secciones del manual
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {modules.map((mod, index) => (
                <div
                  key={mod.id}
                  onClick={() => onOpenSimulator(mod.id)}
                  className="group bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-red-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-8 h-8 rounded-xl bg-red-50 text-[#d6001c] flex items-center justify-center group-hover:bg-[#d6001c] group-hover:text-white transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#d6001c] group-hover:translate-x-0.5 transition-all" />
                    </div>

                    <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-[#d6001c] transition-colors leading-snug">
                      {index + 1}. {mod.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {mod.shortDescription}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{mod.steps.length} pasos</span>
                    <span className="text-[#d6001c] font-bold group-hover:underline">Ver guía</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Tutoriales disponibles */}
          <div className="space-y-3.5 pt-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 bg-[#d6001c] rounded-full"></div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
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

            {/* 5 Tutorial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {modules.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-400/80 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Badge & Chevron */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                        CINEMARK
                      </span>
                      <button 
                        onClick={() => onOpenSimulator(mod.id)}
                        className="text-slate-300 group-hover:text-[#d6001c] transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* Soft Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-red-100 transition-all">
                      {getModuleIcon(mod.iconName)}
                    </div>

                    {/* Title */}
                    <h4 className="font-extrabold text-sm text-slate-900 tracking-tight leading-tight group-hover:text-[#d6001c] transition-colors">
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
                      onClick={() => onOpenSimulator(mod.id)}
                      className="px-4 py-1.5 bg-[#d6001c] hover:bg-red-700 active:scale-95 text-white text-xs font-bold rounded-full shadow-sm shadow-red-600/20 flex items-center gap-1 hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Comenzar</span>
                      <ArrowRight className="w-3 h-3 stroke-[3]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ESTRUCTURA COMPLETA DEL MANUAL (Cumplimiento de las 12 Secciones del PDF EISC) */}
      {activeTab === 'normativa' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Header Description of the Rubric */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-black text-[#d6001c] uppercase tracking-wider block">
                Lineamientos de Interacción Humano-Computador (750040C)
              </span>
              <h3 className="text-base font-extrabold text-slate-900">
                Estructura Formal y Técnica del Manual de Usuario
              </h3>
              <p className="text-xs text-slate-500">
                Cumplimiento de los 12 capítulos obligatorios definidos por la Escuela de Ingeniería de Sistemas y Computación (Univalle).
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>12 / 12 Secciones Completas</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Quick Interactive TOC of the 12 Sections */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-4 border border-slate-200 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-3 py-1">
                Capítulos del Documento
              </span>

              {[
                { id: 1, title: '1. Portada y Ficha Técnica', icon: <FileText className="w-4 h-4" /> },
                { id: 2, title: '2. Índice de Contenido', icon: <ListOrdered className="w-4 h-4" /> },
                { id: 3, title: '3. Introducción y Alcance', icon: <BookOpen className="w-4 h-4" /> },
                { id: 4, title: '4. Requisitos del Sistema', icon: <Settings className="w-4 h-4" /> },
                { id: 5, title: '5. Instalación (Google Play)', icon: <Download className="w-4 h-4" /> },
                { id: 6, title: '6. Descripción de Interfaz', icon: <Layers className="w-4 h-4" /> },
                { id: 7, title: '7. Funciones Principales', icon: <Sparkles className="w-4 h-4" /> },
                { id: 8, title: '8. Solución de Problemas (FAQ)', icon: <HelpCircle className="w-4 h-4" /> },
                { id: 9, title: '9. Mantenimiento y Caché', icon: <RefreshCw className="w-4 h-4" /> },
                { id: 10, title: '10. Soporte Técnico y PQRSF', icon: <Headphones className="w-4 h-4" /> },
                { id: 11, title: '11. Glosario de Términos', icon: <FileCheck className="w-4 h-4" /> },
                { id: 12, title: '12. Apéndices y Políticas', icon: <CreditCard className="w-4 h-4" /> },
              ].map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedSection === sec.id
                      ? 'bg-[#d6001c] text-white shadow-sm shadow-red-950/20'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={selectedSection === sec.id ? 'text-white' : 'text-[#d6001c]'}>
                      {sec.icon}
                    </span>
                    <span>{sec.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 ${selectedSection === sec.id ? 'text-white' : 'text-slate-300'}`} />
                </button>
              ))}
            </div>

            {/* Right Column: Detailed Chapter View */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              {/* Chapter 1 */}
              {selectedSection === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 1</span>
                    <h2 className="text-xl font-black text-slate-900">Portada y Datos de Identificación</h2>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Identificación formal del producto de software, versión de lanzamiento y equipo responsable de la redacción técnica.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Título Oficial</span>
                      <strong className="text-slate-900">Manual de Usuario de la Aplicación Móvil Cinemark Colombia</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Versión del Software</span>
                      <strong className="text-slate-900 font-mono">1.0.0.00</strong> (Producción Android)
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Fecha de Publicación</span>
                      <strong className="text-slate-900">Septiembre 2026</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Entidad y Ubicación</span>
                      <strong className="text-slate-900">Cinemark Colombia S.A.S. · Cali</strong>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-2">
                    <span className="text-xs font-black text-[#d6001c] uppercase tracking-wider block">Autores y Códigos Estudiantiles</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {authorsList.map((a, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-slate-700">
                          <User className="w-3.5 h-3.5 text-[#d6001c]" />
                          <span className="font-semibold">{a.name}</span>
                          <span className="text-slate-400 font-mono text-[11px]">({a.code})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 2 */}
              {selectedSection === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 2</span>
                    <h2 className="text-xl font-black text-slate-900">Índice General de Contenidos</h2>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Estructura secuencial para permitir una rápida localización de los tópicos del manual.
                  </p>

                  <div className="space-y-2 text-xs">
                    {[
                      { p: 'Pág. 1-2', t: '1. Portada, Autores y Ficha Técnica' },
                      { p: 'Pág. 3', t: '2. Índice General y Tabla de Contenidos' },
                      { p: 'Pág. 4-5', t: '3. Introducción, Objetivo General y Alcance Operativo' },
                      { p: 'Pág. 6', t: '4. Requisitos del Sistema y Permisos de Dispositivo' },
                      { p: 'Pág. 7-8', t: '5. Proceso de Instalación y Primer Arranque' },
                      { p: 'Pág. 9-11', t: '6. Descripción General de la Interfaz y Áreas de Trabajo' },
                      { p: 'Pág. 12-25', t: '7. Funciones Principales (5 Módulos Interactivos con 36 Capturas Reales)' },
                      { p: 'Pág. 26-28', t: '8. Solución de Problemas (FAQ y Gestión de Fallas Comunes)' },
                      { p: 'Pág. 29', t: '9. Mantenimiento, Actualizaciones y Borrado de Caché' },
                      { p: 'Pág. 30-31', t: '10. Soporte Técnico, Formulario Zendesk y PQRSF' },
                      { p: 'Pág. 32', t: '11. Glosario de Términos Cinematográficos y Técnicos' },
                      { p: 'Pág. 33-34', t: '12. Apéndices (Políticas de Boletas y Medios de Pago)' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="font-semibold text-slate-800">{item.t}</span>
                        <span className="font-mono text-slate-400 text-[11px]">{item.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapter 3 */}
              {selectedSection === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 3</span>
                    <h2 className="text-xl font-black text-slate-900">Introducción y Alcance del Manual</h2>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Descripción del Producto</h4>
                      <p>
                        La aplicación móvil oficial de <strong>Cinemark Colombia</strong> permite a los espectadores consultar la cartelera cinematográfica nacional en tiempo real, filtrar teatros por geolocalización o ciudad, reservar asientos numerados (estándar, XD y Premier), adquirir productos de confitería express y gestionar boletas digitales sin necesidad de impresión física.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Objetivo del Manual</h4>
                      <p>
                        Instruir y guiar a los usuarios en el uso eficiente y seguro de la app móvil, minimizando la curva de aprendizaje y reduciendo fricciones en transacciones financieras como PSE o compras de confitería.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-amber-800">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Alcance del Documento: Lo que cubre y lo que NO cubre</span>
                      </div>
                      <p className="text-[11px]">
                        <strong>Cubre:</strong> Registro y login de usuario, navegación por sedes (Cali y nacional), compra completa de boletas con selección de butaca, confitería en combo, pagos digitales y radicación de tickets de soporte/PQRSF.
                      </p>
                      <p className="text-[11px]">
                        <strong>No cubre:</strong> Compras en taquillas físicas de teatro, contratos corporativos para eventos masivos o desarrollo interno de servidores bancarios.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Público Objetivo</h4>
                      <p>
                        Desde usuarios principiantes que adquieren su primera entrada digital, hasta clientes habituales que requieren gestionar reembolsos, resolver problemas de boletas no recibidas o agilizar filas mediante código QR.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 4 */}
              {selectedSection === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 4</span>
                    <h2 className="text-xl font-black text-slate-900">Requisitos del Sistema (Android)</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider block">Especificaciones Mínimas</span>
                      <ul className="space-y-1 text-slate-700">
                        <li>• <strong>Sistema Operativo:</strong> Android 8.0 (Oreo) o superior.</li>
                        <li>• <strong>Memoria RAM:</strong> 2 GB mínimo.</li>
                        <li>• <strong>Almacenamiento Libre:</strong> 120 MB disponibles.</li>
                        <li>• <strong>Conectividad:</strong> Red móvil 3G estable o Wi-Fi.</li>
                        <li>• <strong>Resolución de Pantalla:</strong> 720 × 1280 px.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Especificaciones Recomendadas</span>
                      <ul className="space-y-1 text-slate-700">
                        <li>• <strong>Sistema Operativo:</strong> Android 12, 13 o 14.</li>
                        <li>• <strong>Memoria RAM:</strong> 4 GB o más.</li>
                        <li>• <strong>Almacenamiento Libre:</strong> 500 MB libres para caché de pósters.</li>
                        <li>• <strong>Conectividad:</strong> Red 4G LTE / 5G o Wi-Fi de alta velocidad.</li>
                        <li>• <strong>Seguridad:</strong> Bloqueo por huella digital o PIN habilitado.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <strong className="text-slate-900 block font-bold">Permisos Requeridos del Dispositivo:</strong>
                    <p>• <strong>Ubicación (GPS):</strong> Para sugerir automáticamente los teatros más cercanos (ej. Pacific Mall Cali).</p>
                    <p>• <strong>Notificaciones Push:</strong> Para avisos de inicio de función y confirmación de pago.</p>
                  </div>
                </div>
              )}

              {/* Chapter 5 */}
              {selectedSection === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 5</span>
                    <h2 className="text-xl font-black text-slate-900">Instalación y Primer Arranque</h2>
                  </div>

                  <ol className="space-y-2.5 text-xs text-slate-700">
                    <li className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">Paso 1: Abrir Google Play Store</strong>
                      Accede a la tienda de aplicaciones de Android y en el buscador escribe: <em>"Cinemark Colombia"</em>.
                    </li>
                    <li className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">Paso 2: Verificar el Editor Oficial</strong>
                      Asegúrate de que el desarrollador sea <strong>Cinemark Colombia S.A.S.</strong> y pulsa el botón <strong>Instalar</strong>.
                    </li>
                    <li className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">Paso 3: Conceder Permisos en el Primer Inicio</strong>
                      Al abrir la app, acepta el permiso de <em>"Permitir acceso a la ubicación"</em> para cargar la cartelera de tu ciudad sin necesidad de búsquedas manuales continuas.
                    </li>
                  </ol>
                </div>
              )}

              {/* Chapter 6 */}
              {selectedSection === 6 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 6</span>
                    <h2 className="text-xl font-black text-slate-900">Descripción de la Interfaz y Áreas de Trabajo</h2>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    La interfaz está organizada para permitir una compra en menos de 4 minutos a través de 5 puntos clave en la barra inferior:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#d6001c]">1. Cartelera:</strong> Pantalla principal con estrenos, preventas y selección por película o formato (XD, D-BOX, 2D).
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#d6001c]">2. Próximamente:</strong> Catálogo de futuros estrenos con sinopsis, trailers y botón de alerta.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#d6001c]">3. Cines:</strong> Listado y mapa interactivo con ubicación de teatros, horarios y servicios de accesibilidad.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#d6001c]">4. Confitería:</strong> Menú de combos, crispetas gigantes, gaseosas y snacks con retiro express.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                      <strong className="text-[#d6001c]">5. Menú (Institucional):</strong> Acceso directo a Mi Perfil, Notificaciones, Contáctanos (Zendesk / PQRSF), Términos y SIC.
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 7 */}
              {selectedSection === 7 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 7</span>
                    <h2 className="text-xl font-black text-slate-900">Funciones y Módulos Principales</h2>
                  </div>

                  <p className="text-xs text-slate-600">
                    El manual documenta 5 flujos de interacción basados en 36 capturas reales. Puedes probar cada uno directamente en el simulador:
                  </p>

                  <div className="space-y-2 text-xs">
                    {modules.map((m, idx) => (
                      <div key={m.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                        <div>
                          <strong className="text-slate-900 block font-bold">
                            Módulo {idx + 1}: {m.title}
                          </strong>
                          <span className="text-slate-500 text-[11px]">{m.shortDescription}</span>
                        </div>
                        <button
                          onClick={() => onOpenSimulator(m.id)}
                          className="px-3 py-1.5 bg-[#d6001c] hover:bg-red-700 text-white rounded-xl font-bold text-[11px] shrink-0 cursor-pointer shadow-xs"
                        >
                          Simular ({m.steps.length} pasos)
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapter 8 */}
              {selectedSection === 8 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 8</span>
                    <h2 className="text-xl font-black text-slate-900">Solución de Problemas (FAQ y Errores Frecuentes)</h2>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <strong className="text-slate-900 block font-bold">¿Qué hago si realicé el pago pero no recibí las boletas al correo?</strong>
                      <p>
                        Ingresa a <em>Menú &gt; Contáctanos</em>, selecciona la tipificación <strong>"No recibí las boletas"</strong> e ingresa el correo exacto con el que compraste y el comprobante del banco. El soporte atiende prioritariamente antes del inicio de la función.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <strong className="text-slate-900 block font-bold">El débito en PSE fue exitoso pero la app mostró "Transacción rechazada"</strong>
                      <p>
                        El sistema de compensación bancaria PSE reversa automáticamente los fondos en un plazo máximo de 24 a 48 horas hábiles. No intentes pagar repetidamente sin verificar previamente el estado en tu banco.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <strong className="text-slate-900 block font-bold">Error: "Asientos ya no disponibles" durante la compra</strong>
                      <p>
                        Cinemark bloquea los asientos seleccionados durante 10 minutos. Si el tiempo expira, la reserva se libera y deberás volver al mapa de la sala a seleccionar nuevas butacas.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 9 */}
              {selectedSection === 9 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 9</span>
                    <h2 className="text-xl font-black text-slate-900">Mantenimiento, Actualizaciones y Caché</h2>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-700">
                    <p>
                      Para asegurar que las promociones y los mapas de butacas carguen sin demoras, sigue estas buenas prácticas:
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">1. Actualizaciones continuas:</strong>
                      Mantén activada la actualización automática en Play Store para recibir parches de seguridad y compatibilidad bancaria.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block mb-0.5">2. Borrado de Caché en caso de pantalla en blanco:</strong>
                      Ve a <em>Ajustes de Android &gt; Aplicaciones &gt; Cinemark &gt; Almacenamiento &gt; Borrar Caché</em>. Esto no eliminará tus compras guardadas.
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 10 */}
              {selectedSection === 10 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 10</span>
                    <h2 className="text-xl font-black text-slate-900">Soporte Técnico Oficial y Radicación de PQRSF</h2>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700">
                    <p>
                      Cinemark Colombia dispone de canales digitales integrados directamente en la aplicación para atender peticiones, quejas, reclamos y sugerencias:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-red-50/70 border border-red-100">
                        <strong className="text-[#d6001c] block font-bold mb-1">Portal Oficial Zendesk</strong>
                        <span className="font-mono text-slate-800 text-[11px] block">as.zendesk.com / Cinemark</span>
                        <p className="text-[10px] text-slate-500 mt-1">Disponible 24/7 desde la opción "Contáctanos" en el menú de la app.</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-1">Protección al Consumidor (SIC)</strong>
                        <span className="text-slate-800 text-[11px] block">Superintendencia de Industria y Comercio</span>
                        <p className="text-[10px] text-slate-500 mt-1">Vínculo directo en la app para radicación legal de quejas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 11 */}
              {selectedSection === 11 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 11</span>
                    <h2 className="text-xl font-black text-slate-900">Glosario de Términos</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block font-bold">Salas XD (Extreme Digital):</strong> Pantalla de gran formato de pared a pared con sonido envolvente Auro 11.1.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block font-bold">Butacas D-BOX:</strong> Asientos programados con movimiento sincronizado a los efectos de la película.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block font-bold">Asientos Premier:</strong> Butacas reclinables de cuero con espacio y confort superior.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block font-bold">PSE (Pagos Seguros en Línea):</strong> Pasarela bancaria que debita directamente de tu cuenta de ahorros o corriente en Colombia.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                      <strong className="text-slate-900 block font-bold">PQRSF:</strong> Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones (mecanismo formal de atención al usuario).
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter 12 */}
              {selectedSection === 12 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold text-[#d6001c] uppercase tracking-wider">Capítulo 12</span>
                    <h2 className="text-xl font-black text-slate-900">Apéndices y Políticas Generales</h2>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block font-bold mb-1">Medios de Pago Habilitados:</strong>
                      Tarjetas de Crédito y Débito (Visa, Mastercard, Amex, Diners), PSE (todos los bancos de Colombia), Billeteras digitales (Nequi, Daviplata mediante PSE).
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block font-bold mb-1">Política de Cambios y Cancelaciones:</strong>
                      Las solicitudes de anulación deben realizarse al menos 2 horas antes de la función a través del canal oficial de "Contáctanos".
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Academic & Production Verification Footer Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
              DOCUMENTO TÉCNICO VERIFICADO · UNIVALLE
            </span>
            <h4 className="text-base font-bold text-white mt-0.5">
              Certificación Académica y Relevamiento de Software (750040C)
            </h4>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
            {documentMetadata.code}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-[10px] text-slate-400 font-semibold block uppercase">Autores / Estudiantes (5)</span>
            <div className="space-y-0.5 mt-0.5">
              {authorsList.map((a, i) => (
                <div key={i} className="text-white text-[11px] font-medium leading-tight">
                  {a.name} <span className="text-slate-400 font-mono text-[10px]">({a.code})</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 font-semibold block uppercase">Institución</span>
            <span className="text-white font-bold">{documentMetadata.institution}</span>
            <span className="text-slate-400 text-[10px] block">Facultad de Ingeniería · EISC</span>
            <span className="text-slate-400 text-[10px] block font-mono">Curso 750040C</span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 font-semibold block uppercase">Empresa Objeto</span>
            <span className="text-white font-bold">{documentMetadata.entity}</span>
            <span className="text-slate-400 text-[10px] block">Complejo Pacific Mall Cali</span>
            <span className="text-slate-400 text-[10px] block">Versión {documentMetadata.version}</span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 font-semibold block uppercase">Validación de Interfaz</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>36 Capturas Reales</span>
            </span>
            <span className="text-slate-400 text-[10px] block">Android Production App</span>
            <span className="text-emerald-400 text-[10px] block">12 Secciones Completas</span>
          </div>
        </div>
      </div>

    </div>
  );
};
