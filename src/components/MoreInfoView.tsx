import React from 'react';
import {
  HelpCircle,
  Globe,
  Smartphone,
  AlertCircle,
  RefreshCw,
  Headphones,
  BookMarked,
  ExternalLink
} from 'lucide-react';
import { AccordionList } from './AccordionList';

const SUPPORT_FORM_URL = 'https://preguntas.zendesk.com/hc/es/requests/new';

/**
 * "Soportes y ayudas": agrupa los apartados de Solución de problemas y
 * preguntas frecuentes, Mantenimiento y actualizaciones, Soporte técnico
 * y canales de ayuda, y Glosario del manual de usuario.
 *
 * Cinemark solo tiene un canal oficial de soporte: un formulario de
 * solicitud, disponible tanto en la app como en el sitio web
 * (SUPPORT_FORM_URL). Las etiquetas "App" / "Sitio web" son solo
 * informativas; el enlace real al formulario siempre está visible.
 */
export const MoreInfoView: React.FC = () => {
  const errorMessages = [
    {
      problem: 'La app no abre o va muy lenta',
      solution: 'Ciérrala y ábrela de nuevo; revisa tu internet; actualiza la app; reinicia el celular.',
    },
    {
      problem: 'No puedo iniciar sesión',
      solution: 'Revisa tu correo y contraseña; usa la opción de recuperar contraseña.',
    },
    {
      problem: 'El pago fue rechazado',
      solution: 'Revisa los datos y el cupo de la tarjeta; prueba con otra tarjeta; consulta con tu banco.',
    },
    {
      problem: 'Pagué pero no recibí mi boleta',
      solution: 'Revisa "Mis compras" y tu correo; contacta a soporte con tu comprobante de pago.',
    },
    {
      problem: 'La app no encuentra teatros cercanos',
      solution: 'Activa el permiso de ubicación en la configuración del celular.',
    },
    {
      problem: 'Ya no están las sillas que quería',
      solution: 'Elige otro horario u otras sillas; las sillas se ocupan y liberan en tiempo real.',
    },
    {
      problem: 'No aparece el descuento de Cine Club',
      solution: 'Verifica que tu membresía esté activa y vuelve a iniciar sesión.',
    },
  ];

  const glossaryTerms = [
    { term: 'Cine Club', definition: 'Programa de membresía de Cinemark con descuentos en boletas y combos.' },
    { term: 'Gold / Pro', definition: 'Los dos planes de Cine Club, con distintos niveles de descuento.' },
    { term: 'Confitería', definition: 'Zona o sección donde se compran comida y bebidas.' },
    { term: 'Preventa', definition: 'Venta anticipada de boletas antes del estreno oficial de una película.' },
    { term: 'Formato', definition: 'Tipo de proyección, como 2D, 3D o XD.' },
    { term: 'Boleta / entrada', definition: 'Tiquete para entrar a una película.' },
    { term: 'Combo', definition: 'Paquete de comida y bebida a un precio fijo.' },
    { term: 'Código QR', definition: 'Código cuadrado que se escanea para entrar al teatro.' },
    { term: 'Notificaciones push', definition: 'Mensajes que la app envía a tu celular.' },
    { term: 'Cuenta / perfil', definition: 'Tu espacio personal dentro de la app.' },
  ];

  const faqs = [
    {
      q: '¿Qué hago si realicé el pago por PSE o Tarjeta y no recibí las boletas al correo?',
      a: '1. Revisa tu carpeta de correo no deseado (Spam) o Promociones buscando "Cinemark Colombia". 2. Abre la aplicación de Cinemark, inicia sesión y entra a la sección "Mis Compras" / "Mis Boletas" en el menú inferior; las entradas con código QR aparecerán allí activas. 3. Si la transacción fue debitada pero no aparece compra, radica una solicitud inmediata con tu código de transacción CUS de PSE.'
    },
    {
      q: '¿Es necesario imprimir las boletas físicas en la taquilla del cine?',
      a: 'No. La aplicación oficial de Cinemark genera un código QR digital seguro para cada boleta y combo de confitería. Puedes presentarlo directamente desde la pantalla de tu celular en el punto de acceso a las salas o en la barra express de confitería.'
    },
    {
      q: '¿Cuánto tiempo antes debo llegar al cine para reclamar mi confitería comprada en la app?',
      a: 'Recomendamos llegar entre 15 y 20 minutos antes de la hora de la función. Dirígete a la fila señalizada como "Barra Express / Compras por App" y muestra el código QR de tu pedido de confitería para que te entreguen tus productos recién preparados.'
    },
    {
      q: '¿Cómo puedo cambiar el teatro seleccionado si me equivoqué de ciudad o complejo?',
      a: 'En la parte superior de la cartelera principal de la aplicación móvil pulsa sobre el nombre del cine actual (por ejemplo: "Pacific Mall"). Podrás elegir cualquier otro teatro de Cinemark en Colombia mediante la lista desplegable o el mapa satelital.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 pb-16 animate-fade-in text-slate-800">

      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-red-600 rounded-full" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Soportes y Ayudas
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          Resuelve problemas comunes, consulta cómo mantener actualizada tu app, encuentra el canal
          oficial de atención (PQRSF) y revisa el glosario de términos usados en este manual.
        </p>
      </div>

      {/* Solución de problemas y preguntas frecuentes */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Solución de problemas y preguntas frecuentes
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1 ml-3.5">(FAQ - Problemas comunes)</p>
        </div>

        {/* 8.1 Preguntas Frecuentes de la Aplicación */}
        <div
          style={{ animationDelay: '120ms' }}
          className="animate-card-appear bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
            <HelpCircle className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-base text-slate-900">
              Preguntas Frecuentes de la Aplicación
            </h3>
          </div>

          <AccordionList
            items={faqs.map((faq) => ({ title: faq.q, content: faq.a }))}
            defaultOpenIndexes={[0]}
          />
        </div>

        {/* 8.2 Mensajes de error frecuentes y cómo abordarlos */}
        <div
          style={{ animationDelay: '200ms' }}
          className="animate-card-appear bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-1.5 pb-4 mb-4 border-b border-slate-100">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
              Mensajes de error frecuentes y cómo abordarlos
            </h3>
          </div>

          <AccordionList
            items={errorMessages.map((item) => ({ title: item.problem, content: item.solution }))}
          />
        </div>
      </div>

      {/* Mantenimiento y actualizaciones */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <RefreshCw className="w-4.5 h-4.5 text-red-600" />
            <span>Mantenimiento y actualizaciones</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
              Instrucciones para actualizar el software
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ve a Google Play, busca "Cinemark Colombia" y toca Actualizar. También puedes activar las
              actualizaciones automáticas. Las actualizaciones traen mejoras y corrección de errores; por
              ejemplo, una actualización reciente mejoró el orden de las boletas y añadió el cálculo de ahorro
              con Cine Club Pro.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
              Procedimientos para realizar copias de seguridad
              <span className="text-[10px] font-semibold text-slate-400 ml-1.5">(si es necesario)</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No son necesarias. Tus datos están vinculados a tu cuenta, así que si inicias sesión en otro
              celular los recuperas.{' '}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
              Mantenimiento del producto o software
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deja espacio libre en el celular, borra la caché de la app si se pone lenta y no compartas tu
              contraseña.
            </p>
          </div>
        </div>
      </div>

      {/* Soporte técnico */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Headphones className="w-4.5 h-4.5 text-red-600" />
              <span>Soporte técnico</span>
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1 ml-3.5">Información de contacto y canales de ayuda</p>
        </div>

        <div
          style={{ animationDelay: '120ms' }}
          className="animate-card-appear bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5"
        >
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cinemark no cuenta con canales de soporte independientes (línea telefónica, correo directo,
              portal aparte). El único canal oficial es un{' '}
              <strong className="text-slate-900">formulario de solicitud</strong>, disponible tanto en la
              app como en el sitio web de Cinemark: dejas tu consulta y tus datos de contacto, y el equipo
              de soporte te responde directamente por esos medios.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold bg-red-50 text-red-700 border-red-200 opacity-70 cursor-not-allowed"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Disponible en la App</span>
              </button>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold bg-slate-100 text-slate-700 border-slate-200 opacity-70 cursor-not-allowed"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Disponible en el sitio web</span>
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-800">Formulario de soporte en el sitio web</p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5 break-all">{SUPPORT_FORM_URL}</p>
              </div>
              <a
                href={SUPPORT_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer hover:scale-105 shrink-0"
              >
                <span>Abrir formulario</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glosario */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BookMarked className="w-4.5 h-4.5 text-red-600" />
            <span>Glosario</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xs sm:text-sm font-bold text-slate-800 pb-4 mb-4 border-b border-slate-100">
            Definición de términos técnicos o poco comunes
          </h3>
          <AccordionList
            items={glossaryTerms.map((item) => ({ title: item.term, content: item.definition }))}
          />
        </div>
      </div>

    </div>
  );
};
