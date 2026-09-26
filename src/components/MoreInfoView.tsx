import React, { useState } from 'react';
import { 
  Info, 
  HelpCircle, 
  Mail, 
  Phone, 
  Clock, 
  Globe, 
  ShieldCheck, 
  Smartphone, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  MapPin,
  RefreshCw,
  QrCode
} from 'lucide-react';

interface MoreInfoViewProps {
  onGoToTutorials: () => void;
  onGoToSimulator: (moduleId?: string) => void;
}

export const MoreInfoView: React.FC<MoreInfoViewProps> = ({
  onGoToTutorials,
  onGoToSimulator,
}) => {
  // Contact ticket simulator state
  const [ticketSubject, setTicketSubject] = useState('no-recibi-boletas');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [ticketSent, setTicketSent] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSendTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) {
      alert('Por favor diligencia al menos tu nombre y correo electrónico.');
      return;
    }
    const generatedCode = `CMK-PQRSF-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketCode(generatedCode);
    setTicketSent(true);
  };

  const handleResetForm = () => {
    setTicketSent(false);
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setUserMessage('');
    setTicketCode('');
  };

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
      
      {/* Hero Banner: Application Overview & Purpose */}
      <div 
        style={{ animationDelay: '50ms' }}
        className="animate-card-appear bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-70" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Centro de Información y Soporte Oficial</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Información de la App Cinemark & Ayuda al Usuario
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Conoce las características técnicas de la aplicación móvil de Cinemark Colombia, los canales autorizados para atención de solicitudes (PQRSF) y resuelve tus inquietudes sobre compras, confitería y cuentas de usuario.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onGoToTutorials}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-900/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Ver Módulos Guiados</span>
              </button>
              
              <button
                onClick={() => onGoToSimulator('compra-boletas-confiteria')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <Smartphone className="w-4 h-4 text-red-600" />
                <span>Abrir Simulador Interactivo</span>
              </button>
            </div>
          </div>

          {/* Quick Technical Specs Badge Box */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shrink-0 w-full lg:w-72 space-y-3 shadow-xs">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">
              Ficha Técnica de la App
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                <span className="text-slate-500">Versión:</span>
                <span className="font-bold text-slate-900 font-mono">v4.8.x Oficial</span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                <span className="text-slate-500">Sistemas:</span>
                <span className="font-semibold text-slate-900">Android & iOS</span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                <span className="text-slate-500">Operador:</span>
                <span className="font-semibold text-slate-900">Cinemark Colombia</span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                <span className="text-slate-500">NIT:</span>
                <span className="font-mono text-slate-700">830.054.492-4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Tipo de Entrada:</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR 100% Digital</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Official Contact Channels (Cards) */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-5 bg-red-600 rounded-full"></div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Canales Oficiales de Contacto y Soporte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Portal PQRSF en Línea */}
          <div 
            style={{ animationDelay: '120ms' }}
            className="animate-card-appear bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Portal Web de Ayuda (PQRSF)</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Canal oficial para radicar solicitudes, quejas, reclamos o consultar el estado de tu compra con confirmación vía ticket digital.
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">soporte.cinemark.com.co</span>
              <a
                href="https://soporte.cinemark.com.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 hover:underline"
              >
                <span>Visitar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Correo Electrónico */}
          <div 
            style={{ animationDelay: '200ms' }}
            className="animate-card-appear bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Correo Electrónico de Atención</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Envía tus comprobantes de pago de PSE o reportes de fallas técnicas directamente a nuestro equipo de atención al cliente.
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-700">servicioalcliente@cinemark.com.co</span>
              <a
                href="mailto:servicioalcliente@cinemark.com.co"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                <span>Escribir</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Atención Telefónica y Horarios */}
          <div 
            style={{ animationDelay: '280ms' }}
            className="animate-card-appear bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Línea Telefónica Nacional</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Atención telefónica directa para orientaciones inmediatas sobre funciones y novedades en los complejos de cine.
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Línea Gratuita:</span>
                <span className="font-bold text-slate-900 font-mono">01 8000 123 246</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Lun a Dom:</span>
                </span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Support Ticket Simulator + FAQ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Contact Form Simulator */}
        <div 
          style={{ animationDelay: '340ms' }}
          className="animate-card-appear lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-red-600" />
                <span>Radicar Solicitud a Soporte</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Simula el envío de una consulta prioritaria para recibir orientación
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Activo
            </span>
          </div>

          {ticketSent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-fade-in text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-slate-900">¡Solicitud Radicada con Éxito!</h4>
                <p className="text-xs text-slate-600">
                  Hemos generado tu número de radicado oficial para el seguimiento de tu caso.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-200/80 inline-block font-mono text-sm font-bold text-slate-900">
                Radicado: <span className="text-red-600">{ticketCode}</span>
              </div>

              <p className="text-[11px] text-slate-500">
                Se ha enviado una notificación de confirmación al correo <strong className="text-slate-800">{userEmail}</strong> con tiempo estimado de respuesta menor a 24 horas.
              </p>

              <button
                onClick={handleResetForm}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Radicar otra solicitud</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendTicket} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Motivo de la Consulta <span className="text-red-500">*</span>
                </label>
                <select
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 font-medium"
                >
                  <option value="no-recibi-boletas">No recibí las boletas tras el pago (Prioritario)</option>
                  <option value="fallo-pse">Problema en la pasarela PSE / Tarjeta</option>
                  <option value="confiteria-express">Duda sobre reclamo de Confitería Express</option>
                  <option value="inicio-sesion">Inconveniente al Iniciar Sesión o Crear Cuenta</option>
                  <option value="cambio-funcion">Consulta sobre Cambio de Sala o Función</option>
                  <option value="otro">Otro Requerimiento / Felicitación</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Teléfono / WhatsApp de Contacto
                </label>
                <input
                  type="tel"
                  placeholder="Ej. 315 123 4567"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Detalles del Inconveniente o Pregunta
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe qué ocurrió, número de transacción si aplica o sala donde te encuentras..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Datos protegidos bajo política Habeas Data</span>
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-md shadow-red-900/20 transition-all cursor-pointer hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitud</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Frequently Asked Questions Accordion */}
        <div className="lg:col-span-6 space-y-4">
          <div 
            style={{ animationDelay: '400ms' }}
            className="animate-card-appear bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <HelpCircle className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-base text-slate-900">
                Preguntas Frecuentes de la Aplicación
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-800 hover:text-red-600 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-red-600 shrink-0 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Notice Card: Sede Oficial */}
          <div 
            style={{ animationDelay: '460ms' }}
            className="animate-card-appear bg-gradient-to-r from-red-50 to-slate-50 rounded-2xl border border-red-200/80 p-4.5 flex items-start gap-3 shadow-2xs hover:shadow-sm transition-shadow"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-xs space-y-0.5">
              <h4 className="font-bold text-slate-900">Complejo Objeto de Estudio: Cinemark Pacific Mall</h4>
              <p className="text-slate-600">
                Calle 36N #6A-65, Cali, Valle del Cauca. Salas Premier, XD y Confitería Express con soporte integrado en app.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
