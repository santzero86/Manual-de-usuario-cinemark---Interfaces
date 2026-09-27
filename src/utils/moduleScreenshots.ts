import { Module, Step } from '../types/modules';

const bundledImages = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const ASSET_FOLDER_BY_MODULE: Record<string, string> = {
  'compra-boletas-confiteria': 'Evento de compra de tiquetes',
  'login-registro-cuenta': 'Login-SignUp',
};

export function hasBundledScreenshots(moduleId: string): boolean {
  return Boolean(ASSET_FOLDER_BY_MODULE[moduleId]);
}

export function getBundledScreenshot(module: Module, step: Step): string | null {
  const folder = ASSET_FOLDER_BY_MODULE[module.id];
  if (!folder) return null;

  const candidates = [
    step.imagePlaceholderName,
    `${step.stepNumber}.jpg`,
    `${step.stepNumber}.jpeg`,
  ].filter(Boolean) as string[];

  for (const fileName of candidates) {
    const url = bundledImages[`../assets/${folder}/${fileName}`];
    if (url) return url;
  }
  return null;
}
