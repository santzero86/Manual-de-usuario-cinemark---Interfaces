import { Module, Step } from '../types/modules';

const bundledImages = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const FOLDERS_BY_MODULE: Record<string, string[]> = {
  'descarga-del-aplicativo': ['descargar el aplicativo', 'descarga del aplicativo'],
  'login-registro-cuenta': ['login-signup'],
  'cambio-seleccion-cine': ['cambiar de cine', 'cambio de cine', 'teatros'],
  'membresias-cine-club': ['cine club', 'cineclub'],
  'atencion-soporte-pqrsf': ['soporte', 'soporte y pqrsf', 'atencion al cliente'],
  'compra-boletas-confiteria': ['evento de compra tiquetes', 'evento de compra de tiquetes', 'compra de tiquetes'],
};

export function hasBundledScreenshots(moduleId: string): boolean {
  return Boolean(FOLDERS_BY_MODULE[moduleId]);
}

export function getBundledScreenshot(module: Module, step: Step): string | null {
  const allowedFolders = FOLDERS_BY_MODULE[module.id];
  if (!allowedFolders) return null;

  // Filtra SOLO las imágenes de la carpeta correspondiente
  const moduleImages = Object.keys(bundledImages).filter((filePath) => {
    const lower = filePath.toLowerCase();
    return allowedFolders.some((folder) => lower.includes(`/assets/${folder.toLowerCase()}/`));
  });

  const stepNumber = String(step.stepNumber);

  // Busca exactamente 1.jpg, 2.jpg, ... 9.jpg, etc.
  const matchedPath = moduleImages.find((filePath) => {
    const fileNameWithExt = filePath.split('/').pop() || '';
    const baseName = fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf('.'));
    return (
      baseName === stepNumber ||
      fileNameWithExt.toLowerCase() === step.imagePlaceholderName?.toLowerCase()
    );
  });

  if (matchedPath && bundledImages[matchedPath]) {
    return bundledImages[matchedPath];
  }

  return null;
}