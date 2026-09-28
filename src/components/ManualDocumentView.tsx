import React, { useEffect, useRef, useState } from 'react';
import {
  Info,
  Cpu,
  Download,
  LayoutDashboard,
  Home as HomeIcon,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { AccordionList } from './AccordionList';
import homeTop from '../assets/Home/1.0.jpeg';
import homeFeatured from '../assets/Home/1.2.jpeg';
import homeCartelera from '../assets/Home/1.3.jpeg';
import homeEstrenos from '../assets/Home/1.4.jpeg';

/**
 * "Información de la app": agrupa los apartados Índice, Introducción,
 * Requisitos del sistema, Instalación, Descripción de la interfaz e Interfaz
 * Principal del manual de usuario. Los apartados de soporte, mantenimiento y
 * glosario viven en la pestaña "Soportes y ayudas" (MoreInfoView.tsx), y las
 * funciones y características se cubren con la pestaña "Manual" interactiva.
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
  subsections?: ManualSubsection[];
  /** Contenido a medida (imágenes, listas, etc.) en vez de subsecciones genéricas. */
  customContent?: React.ReactNode;
  ctas?: {
    label: string;
    onClick?: () => void;
  }[];
}

/** Cada captura real de la pantalla de inicio, con sus zonas explicadas. */
const HOME_SCREENS = [
  {
    id: 'home-1',
    image: homeTop,
    title: 'Parte 1 de 4 · Encabezado y destacado principal',
    callouts: [
      {
        title: 'Saludo y acceso al perfil',
        content:
          'Arriba aparece un saludo personalizado ("Hola, [tu nombre]") junto a tu ícono de iniciales. Al tocarlo entras a tu perfil de usuario.',
      },
      {
        title: 'Selector de cine',
        content:
          'La barra "Cartelera por cine" te permite elegir el teatro Cinemark del que quieres ver la cartelera y los horarios disponibles.',
      },
      {
        title: 'Banner de preventa',
        content:
          'Carrusel con preventas y anuncios especiales (conciertos, estrenos exclusivos). Los puntos debajo indican cuántas imágenes tiene.',
      },
      {
        title: 'Destacados',
        content:
          'Debajo del banner, la sección "Destacados" resalta una película en tendencia con su póster en grande.',
      },
      {
        title: 'Menú inferior',
        content:
          'La barra de navegación inferior te lleva a Cartelera, Confitería, Teatros, Cine Club o al Menú general de la app.',
      },
    ],
  },
  {
    id: 'home-2',
    image: homeFeatured,
    title: 'Parte 2 de 4 · Preventa y comienzo de cartelera',
    callouts: [
      {
        title: 'Detalle del destacado',
        content: 'Título de la película destacada, con la etiqueta "ESTRENO" cuando es un lanzamiento reciente.',
      },
      {
        title: 'Preventa',
        content:
          'Carrusel horizontal de películas en preventa; cada tarjeta muestra el póster y la duración de la función.',
      },
      {
        title: 'Inicio de Cartelera',
        content:
          'Comienza el listado de películas actualmente en cartelera, en formato de tarjetas con póster y duración.',
      },
    ],
  },
  {
    id: 'home-3',
    image: homeCartelera,
    title: 'Parte 3 de 4 · Cartelera completa',
    callouts: [
      {
        title: 'Cuadrícula de cartelera',
        content:
          'Todas las películas disponibles en el teatro seleccionado, cada una con su duración y clasificación por edades (ej. "12-A", "15-A").',
      },
      {
        title: 'Tocar una película',
        content: 'Al tocar cualquier póster entras al detalle de esa película para elegir función y comprar boletas.',
      },
    ],
  },
  {
    id: 'home-4',
    image: homeEstrenos,
    title: 'Parte 4 de 4 · Próximos estrenos',
    callouts: [
      {
        title: 'Próximos estrenos',
        content: 'Al final de la cartelera, esta sección muestra las películas que llegarán pronto al cine.',
      },
    ],
  },
];

const HomeInterfaceWalkthrough: React.FC = () => (
  <div className="space-y-8">
    <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
      Así se ve la pantalla de inicio de la app Cinemark al abrirla, explicada por partes según vas bajando.
    </p>
    {HOME_SCREENS.map((screen) => (
      <div key={screen.id} className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        <div className="md:col-span-4">
          <img
            src={screen.image}
            alt={screen.title}
            className="w-full max-w-[220px] mx-auto rounded-2xl border border-slate-200 shadow-md"
          />
        </div>
        <div className="md:col-span-8">
          <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-3">{screen.title}</h3>
          <AccordionList items={screen.callouts} />
        </div>
      </div>
    ))}
  </div>
);

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
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeId, setActiveId] = useState<string>('introduccion');

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
            'La app Cinemark Colombia es la aplicación oficial de la cadena de cines Cinemark en el país, que permite conocer las películas en cartelera y próximos estrenos, comprar boletas en cualquier teatro y a cualquier hora, encontrar teatros en tu ciudad y pedir confitería. También puedes crear tu cuenta y gestionar tu información, tus compras, tus medios de pago y tu suscripción a Cine Club.',
        },
        {
          id: 'introduccion-objetivo',
          number: '3.2',
          title: 'Objetivo del manual',
          placeholder:
            'Explicar paso a paso cómo usar las funciones principales de la app para que puedas navegar sin problemas dentro de ella y comprar boletas y confitería de forma rápida.',
        },
        {
          id: 'introduccion-alcance',
          number: '3.3',
          title: 'Alcance del documento: lo que cubre y lo que no cubre',
          placeholder:
            'Este manual cubre la descarga de la app, el inicio de sesión y registro, la consulta de teatros, la compra de boletas y confitería y la suscripción a Cine Club. Cualquier otra función de la app no mencionada en estos módulos queda fuera del alcance de este documento.',
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
            ' Tamaño aproximado cerca de 17 MB y los requisitos mínimos son: conexión a internet (Wi-Fi o datos móviles), un celular con espacio libre suficiente y permiso de ubicación si quieres que la app encuentre el teatro más cercano.',
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
      title: 'Proceso de instalación',
      icon: Download,
      subsections: [],
      ctas: [
        {
          label: 'Ir a Descarga e Instalación del Aplicativo',
          onClick: () => onGoToSimulator?.('descarga-del-aplicativo'),
        },
      ],
    },
    {
      id: 'interfaz-inicio',
      number: '6.4',
      title: 'Interfaz Principal (Pantalla de Inicio)',
      icon: HomeIcon,
      customContent: <HomeInterfaceWalkthrough />,
    },
  ];

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
          <nav className="sticky top-20 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 mb-2">
              Índice
            </span>
            {MANUAL_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center justify-between gap-2 text-left px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer group ${
                  activeId === section.id
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : 'text-slate-600 border-slate-200 hover:border-red-300 hover:bg-red-50/40 hover:text-red-700'
                }`}
              >
                <span className="truncate">{section.title}</span>
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 transition-all ${
                    activeId === section.id
                      ? 'text-red-500'
                      : 'text-slate-300 group-hover:text-red-500 group-hover:translate-x-0.5'
                  }`}
                />
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

                {section.customContent ? (
                  <div className="mt-4">{section.customContent}</div>
                ) : (
                  <div className="mt-4 space-y-5">
                    {section.subsections?.map((sub) => (
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
                )}

                {section.ctas && section.ctas.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                    {section.ctas.map((cta) => (
                      <button
                        key={cta.label}
                        onClick={cta.onClick}
                        disabled={!cta.onClick}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-sm transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                      >
                        <span>{cta.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ))}
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
