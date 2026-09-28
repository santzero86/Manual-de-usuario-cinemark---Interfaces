import { Module, Step } from '../types/modules';

const bundledImages = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const ASSET_FOLDER_BY_MODULE: Record<string, string> = {
  'descarga-del-aplicativo': 'descargar el aplicativo',
  'login-registro-cuenta': 'Login-SignUp',
  'compra-boletas-confiteria': 'Evento de compra de tiquetes',
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
    `${step.stepNumber}.png`,
    `${step.stepNumber}.JPG`,
    `${step.stepNumber}.PNG`,
  ].filter(Boolean) as string[];

  for (const fileName of candidates) {
    // Busca en la ruta exacta y variantes por si tiene mayúsculas
    const possiblePaths = [
      `../assets/${folder}/${fileName}`,
      `../assets/descargar el aplicativo/${fileName}`,
      `../assets/Descargar el aplicativo/${fileName}`,
      `../assets/Descarga del aplicativo/${fileName}`,
    ];

    for (const path of possiblePaths) {
      if (bundledImages[path]) {
        return bundledImages[path];
      }
    }
  }
  return null;
}