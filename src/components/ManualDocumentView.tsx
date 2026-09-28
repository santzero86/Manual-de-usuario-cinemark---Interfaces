import React, { useEffect, useRef, useState } from 'react';
import {
  Info,
  Cpu,
  Download,
  LayoutDashboard,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

/**
 * "Información de la app": agrupa los apartados 3 (Introducción), 4
 * (Requisitos del sistema), 5 (Instalación) y 6 (Descripción de la interfaz)
 * del manual de usuario. Los apartados 8-11 (soporte, mantenimiento, glosario)
 * viven en la pestaña "Soportes y ayudas" (MoreInfoView.tsx), y el apartado 7
 * (Funciones y características) se cubre con la pestaña "Manual" interactiva.
 *
 * CÓMO COMPLETAR ESTE ARCHIVO:
 * Cada subsección tiene un campo `placeholder` con la guía de qué información
 * de la app Cinemark debe ir ahí. Para llenar el manual, reemplaza el texto de
 * `placeholder` (y agrega imágenes/capturas donde se indique).
 */

interface ManualSubsection {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  /** TODO: reemplazar por el contenido real de la app Cinemark. */
  placeholder: string;
}

interface ManualSection {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  subsections: ManualSubsection[];
  cta?: {
    label: string;
    onClick?: () => void;
  };
}

interface ManualDocumentViewProps {
  onGoBack?: () => void;
  backLabel?: string;
  onGoToTutorials?: () => void;
  onGoToSimulator?: (moduleId?: string) => void;
}

export const ManualDocumentView: React.FC<ManualDocumentViewProps> = ({
  onGoBack,
  backLabel,
  onGoToTutorials,
  onGoToSimulator,
}) => {
  const MANUAL_SECTIONS: ManualSection[] = [
    {
      id: 'introduccion',
      number: '3',
      title: 'Introducción',
      icon: Info,
      subsections: [
        {
          id: 'introduccion-descripcion',
          number: '3.1',
          title: 'Descripción breve del producto',
          placeholder:
            'La app Cinemark Colombia es la aplicación oficial de la cadena de cines Cinemark en el país. Permite conocer las películas en cartelera y próximos estrenos, comprar boletas en cualquier teatro y a cualquier hora, encontrar teatros en tu ciudad y pedir confitería. También puedes crear tu cuenta y gestionar tu información, tus compras, tus medios de pago y tu suscripción a Cine Club. La descarga es gratuita.',
        },
        {
          id: 'introduccion-objetivo',
          number: '3.2',
          title: 'Objetivo del manual',
          placeholder:
            'Explicar paso a paso cómo usar las funciones principales de la app para que puedas comprar boletas y confitería de forma rápida, sin errores y sin hacer filas.',
        },
        {
          id: 'introduccion-alcance',
          number: '3.3',
          title: 'Alcance del documento: lo que cubre y lo que no cubre',
          placeholder:
            'Este manual cubre la descarga de la app, el inicio de sesión y registro, la consulta de teatros, la compra de boletas y confitería, la suscripción a Cine Club y la atención al cliente. Cualquier otra función de la app no mencionada en estos módulos queda fuera del alcance de este documento.',
        },
        {
          id: 'introduccion-publico',
          number: '3.4',
          title: 'Público al que está dirigido',
          placeholder:
            'Usuarios principiantes e intermedios: personas que van al cine y quieren comprar sus boletas desde el celular. No se necesitan conocimientos técnicos.',
        },
      ],
    },
    {
      id: 'requisitos',
      number: '4',
      title: 'Requisitos del sistema',
      icon: Cpu,
      subsections: [
        {
          id: 'requisitos-especificaciones',
          number: '4.1',
          title: 'Especificaciones mínimas y recomendadas para el uso del software',
          placeholder:
            'Compatibilidad: la app está disponible para Android 9 y versiones posteriores (Google Play). Tamaño aproximado: cerca de 16.52 MB. Requisitos mínimos: conexión a internet (Wi-Fi o datos móviles), un celular con espacio libre suficiente y permiso de ubicación si quieres que la app encuentre el teatro más cercano. Recomendado: mantener la app actualizada y usar una conexión estable al momento de pagar.',
        },
        {
          id: 'requisitos-compatibilidad',
          number: '4.2',
          title: 'Compatibilidad con sistemas operativos u otras plataformas',
          placeholder:
            'La app está disponible únicamente para dispositivos Android (Google Play), a partir de la versión 9.',
        },
      ],
    },
    {
      id: 'instalacion',
      number: '5',
      title: 'Instalación',
      icon: Download,
      subsections: [
        {
          id: 'instalacion-pasos',
          number: '5.1',
          title: 'Pasos detallados para instalar',
          // TODO: reemplazar por el paso a paso real de instalación desde la tienda de apps.
          placeholder:
            'Explica paso a paso cómo descargar e instalar la app Cinemark desde Google Play, incluyendo capturas de pantalla.',
        },
        {
          id: 'instalacion-plataformas',
          number: '5.2',
          title: 'Instrucciones para diferentes plataformas',
          placeholder:
            'No aplica: la app es exclusiva para Android y el proceso de instalación es el mismo tanto en celulares como en tablets.',
        },
      ],
    },
    {
      id: 'interfaz',
      number: '6',
      title: 'Descripción de la interfaz',
      icon: LayoutDashboard,
      subsections: [
        {
          id: 'interfaz-principal',
          number: '6.1',
          title: 'Presentar la interfaz principal del producto',
          // TODO: reemplazar por una captura y descripción de la pantalla principal de la app.
          placeholder:
            'Muestra una captura de la pantalla principal de la app Cinemark y describe brevemente qué se ve al abrirla.',
        },
        {
          id: 'interfaz-menus',
          number: '6.2',
          title: 'Explicar menús, botones y paneles principales',
          // TODO: reemplazar por la explicación real de los menús/botones principales (cartelera, boletas, confitería, cuenta).
          placeholder:
            'Explica los menús y botones principales de la app: navegación inferior, menú de cuenta, buscador de cine, etc.',
        },
        {
          id: 'interfaz-areas',
          number: '6.3',
          title: 'Descripción de las áreas de trabajo',
          // TODO: reemplazar por la descripción de zonas específicas de trabajo dentro de la app.
          placeholder:
            'Si la app tiene "áreas de trabajo" específicas (ej. panel de mis boletas, panel de confitería), descríbelas aquí.',
        },
      ],
      cta: {
        label: 'Ir al Manual interactivo',
        onClick: onGoToTutorials ?? (() => onGoToSimulator?.()),
      },
    },
  ];

  const [activeId, setActiveId] = useState<string>(MANUAL_SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto pb-16 animate-fade-in text-slate-800">
      {/* Top Bar with Return to previous page option */}
      {onGoBack && (
        <div className="flex items-center mb-6">
          <button
            onClick={onGoBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer shadow-xs group hover:scale-[1.02]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-600 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a {backLabel}</span>
          </button>
        </div>
      )}

      {/* Page Header */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-red-600 rounded-full" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Información de la App Cinemark
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Introducción, requisitos del sistema, instalación y descripción de la interfaz, organizados por
          secciones para facilitar la navegación.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Sidebar Table of Contents (desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-20 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 mb-2">
              Contenido de esta sección
            </span>
            {MANUAL_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeId === section.id
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'text-slate-600 hover:bg-slate-100 border border-transparent'
                }`}
              >
                <span className="truncate">{section.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Table of Contents (horizontal chips) */}
        <div className="lg:hidden -mx-1 px-1 flex gap-2 overflow-x-auto pb-2">
          {MANUAL_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                activeId === section.id
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-10">
          {MANUAL_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <span className="text-[11px] font-semibold text-slate-400">({section.subtitle})</span>
                  )}
                </div>

                <div className="mt-4 space-y-5">
                  {section.subsections.map((sub) => (
                    <div key={sub.id} className="space-y-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5 flex-wrap">
                        <span>{sub.title}</span>
                        {sub.subtitle && (
                          <span className="text-[10px] font-semibold text-slate-400">({sub.subtitle})</span>
                        )}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sub.placeholder}</p>
                    </div>
                  ))}
                </div>

                {section.cta && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={section.cta.onClick}
                      disabled={!section.cta.onClick}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-sm transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                    >
                      <span>{section.cta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
