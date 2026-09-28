import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export interface AccordionListItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionListItem[];
  /** Índices abiertos al montar el componente (ej. [0] para abrir el primero). */
  defaultOpenIndexes?: number[];
}

/** Acordeón numerado tipo timeline, para listas de FAQ, errores o términos. */
export const AccordionList: React.FC<AccordionListProps> = ({ items, defaultOpenIndexes = [] }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };

  return (
    <div>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex gap-3">
            {/* Numbered timeline column */}
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors cursor-pointer ${
                  isOpen ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {idx + 1}
              </button>
              {!isLast && <div className="w-px flex-1 bg-slate-200 my-1" />}
            </div>

            {/* Title + expandable content */}
            <div className={`flex-1 min-w-0 ${isLast ? 'pb-1' : 'pb-4'}`}>
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-3 text-left pt-0.5 pb-1 cursor-pointer group"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </span>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-red-600 shrink-0 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-300 shrink-0 transition-transform duration-200" />
                )}
              </button>
              {isOpen && (
                <div className="mt-1.5 p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-slate-600 leading-relaxed animate-fade-in">
                  {item.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
