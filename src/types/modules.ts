export type StepCategory = 
  | 'cartelera' 
  | 'pelicula' 
  | 'horarios' 
  | 'teatros' 
  | 'boletas' 
  | 'asientos' 
  | 'confiteria' 
  | 'carrito' 
  | 'facturacion' 
  | 'pagos' 
  | 'pse' 
  | 'tarjetas'
  | 'login'
  | 'registro'
  | 'soporte'
  | 'pqrsf';

export interface Hotspot {
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  label: string;
  actionText: string;
  targetElement?: string;
}

export interface Step {
  id: number;
  stepNumber: number;
  title: string;
  screenTitle: string;
  category: StepCategory;
  summary: string;
  actionRequired: string;
  detailedInstructions: string[];
  tips: string[];
  warnings?: string[];
  timerNotice?: string;
  hotspot: Hotspot;
  keyDetails: { label: string; value: string }[];
  imagePlaceholderName?: string;
  customImageUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Boletas' | 'Confitería' | 'Membresías' | 'Cuenta y Pagos' | 'Teatros' | 'Soporte y PQRSF';
  badge: string;
  durationMinutes: number;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  totalSteps: number;
  isAvailable: boolean;
  steps: Step[];
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Hotspot {
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  label: string;
  actionText: string;
  targetElement?: string;
  type?: 'point' | 'scroll-down';
}