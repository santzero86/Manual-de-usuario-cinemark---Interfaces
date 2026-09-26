export interface UserProgress {
  completedSteps: number[]; // step IDs
  completedModules: string[]; // module IDs
  lastActiveModuleId: string;
  lastActiveStepId: number;
  quizScore?: number;
  customScreenshots?: Record<string, string>; // key: `${moduleId}_${stepNumber}` -> base64 or URL
}

const STORAGE_KEY = 'cinemark_academy_progress_v1';

export function getStoredProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error reading progress from localStorage', e);
  }
  return {
    completedSteps: [1],
    completedModules: [],
    lastActiveModuleId: 'compra-boletas-confiteria',
    lastActiveStepId: 1,
    customScreenshots: {}
  };
}

export function saveStoredProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving progress to localStorage', e);
  }
}

export function saveScreenshotForStep(moduleId: string, stepNumber: number, dataUrl: string): void {
  const current = getStoredProgress();
  const key = `${moduleId}_${stepNumber}`;
  const customScreenshots = { ...current.customScreenshots, [key]: dataUrl };
  saveStoredProgress({ ...current, customScreenshots });
}

export function getScreenshotForStep(moduleId: string, stepNumber: number): string | null {
  const current = getStoredProgress();
  return current.customScreenshots?.[`${moduleId}_${stepNumber}`] || null;
}
