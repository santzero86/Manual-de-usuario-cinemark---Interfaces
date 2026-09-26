import { Module, QuizQuestion } from '../types/modules';

const SCREENSHOT_ASSETS = import.meta.glob('../assets/**/*.{jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const MODULE_SCREENSHOT_FOLDERS: Record<string, string> = {
  'compra-boletas-confiteria': 'Evento de compra de tiquetes',
  'confiteria-express': 'Evento de compra de aperitivos',
  'exploracion-teatros-cercanos': 'Cambiar de cine',
  'login-registro-cuenta': 'Login-SignUp',
  'atencion-soporte-pqrsf': 'Soporte',
};

const MODULES_DATA_BASE: Module[] = [
  {
    id: 'compra-boletas-confiteria',
    title: 'Compra de Boletas y Confitería',
    shortDescription: 'Aprende a elegir película, formato XD/Premier, asientos en sala, combos de comida y pagar con PSE o tarjeta.',
    fullDescription: 'Guía oficial interactiva paso a paso para la aplicación móvil de Cinemark. Domina todo el flujo de compra desde la cartelera hasta la pasarela de pagos segura.',
    category: 'Boletas',
    badge: 'Módulo Principal',
    durationMinutes: 7,
    difficulty: 'Principiante',
    totalSteps: 14,
    isAvailable: true,
    iconName: 'Ticket',
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: 'Inicio y Cartelera Principal',
        screenTitle: 'BIENVENIDO - Ingreso o registro',
        category: 'cartelera',
        summary: 'Pantalla principal de la app de Cinemark. Permite explorar la cartelera, promociones activas y estrenos destacados.',
        actionRequired: 'Toca en la película destacada "Avengers: Endgame Bonus" o pulsa en "Cartelera por cine" para ver los títulos en proyección.',
        detailedInstructions: [
          'Al abrir la app de Cinemark te encontrarás en la pestaña principal de Cartelera.',
          'En la parte superior puedes elegir entre "Cartelera por cine" o "Seleccionar cine" para filtrar según tu teatro preferido.',
          'Revisa el carrusel superior con beneficios y promociones activas de cartelera.',
          'En la sección "DESTACADOS" podrás ver los grandes estrenos actuales.'
        ],
        tips: [
          'Si inicias sesión con tu cuenta de Cinemark guardas tu historial y agilizas tus compras.',
          'No es estrictamente obligatorio iniciar sesión: puedes continuar el flujo y completar tus datos en el paso de facturación.'
        ],
        hotspot: {
          x: 50,
          y: 68,
          label: 'Película Destacada',
          actionText: 'Tocar sobre el póster de Avengers Endgame'
        },
        keyDetails: [
          { label: 'Pestaña activa', value: 'Cartelera' },
          { label: 'Formato destacado', value: 'Salas XD y 2D' },
          { label: 'Película destacada', value: 'Avengers: Endgame Bonus' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 2,
        stepNumber: 2,
        title: 'Ficha de Película y Preventas',
        screenTitle: 'AVENGERS: ENDGAME BON - ESTRENO',
        category: 'pelicula',
        summary: 'Vista previa de la película seleccionada con etiqueta de ESTRENO y cartelera de próximas funciones y preventas.',
        actionRequired: 'Toca sobre el título o póster de "Avengers: Endgame Bon" para acceder a la selección de fechas, salas y horarios.',
        detailedInstructions: [
          'La app muestra la ficha con la carátula oficial y el estado (ESTRENO o PREVENTA).',
          'En la parte inferior puedes ver la sección de preventas especiales (como conciertos de Queen Budapest, Linkin Park o películas próximas).',
          'Tocar sobre la película seleccionada te llevará a la programación de funciones disponibles.'
        ],
        tips: [
          'Los estrenos con alta demanda suelen habilitar salas XD y formatos especiales con días de anticipación.',
          'Verifica si el evento es un reestreno especial con contenido adicional ("Bonus").'
        ],
        hotspot: {
          x: 50,
          y: 46,
          label: 'Seleccionar Estreno',
          actionText: 'Tocar sobre el título para abrir funciones'
        },
        keyDetails: [
          { label: 'Estado', value: 'Estreno Oficial' },
          { label: 'Eventos adicionales', value: 'Preventas Linkin Park & Queen' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 3,
        stepNumber: 3,
        title: 'Exploración de Cartelera y Clasificaciones',
        screenTitle: 'CARTELERA GENERAL - Películas y Clasificación',
        category: 'cartelera',
        summary: 'Catálogo con toda la oferta cinematográfica y sus clasificaciones por edad (15-A, 12-A, Todos).',
        actionRequired: 'Revisa las clasificaciones de edad y duración antes de comprar boletas para menores de edad o grupos.',
        detailedInstructions: [
          'Cinemark organiza las películas en una cuadrícula con duración exacta (ej: 1H 45M, 2H 50M).',
          'Cada película cuenta con su distintivo de clasificación: "15-A" (mayores de 15 años), "12-A" (mayores de 12 años) o "Todos" (apta para todo público).',
          'Al desplazarte hacia abajo encontrarás la sección "PRÓXIMOS ESTRENOS" para agendar tus visitas futuras.'
        ],
        tips: [
          'Las clasificaciones 12-A y 15-A requieren que los menores ingresen acompañados de un adulto responsable.',
          'Ten presente la duración total de la película para organizar tu transporte y parqueadero.'
        ],
        hotspot: {
          x: 50,
          y: 28,
          label: 'Clasificaciones y Horas',
          actionText: 'Observar sellos informativos 12-A / 15-A'
        },
        keyDetails: [
          { label: 'Clasificaciones visibles', value: '15-A, 12-A, Todos' },
          { label: 'Duración promedio', value: '1H 30M a 2H 50M' }
        ],
        imagePlaceholderName: '3.jpg'
      },
      {
        id: 4,
        stepNumber: 4,
        title: 'Selección de Fecha, Formato y Horario',
        screenTitle: 'Avengers: Endgame Bon - Funciones',
        category: 'horarios',
        summary: 'Elección del día de la función, cine asignado y formato de proyección (2D, 3D, XD, Premier, Doblada o Subtitulada).',
        actionRequired: 'Selecciona la fecha deseada (ej: HOY Sáb. 26) y pulsa en la hora deseada, como el botón [17:35].',
        detailedInstructions: [
          'En el carrusel de fechas puedes elegir entre "HOY" o los días consecutivos de la semana.',
          'Se especifica el cine actual ("PACIFIC MALL"). Si no es tu cine, tienes el botón "Cambiar cine".',
          'Cada función especifica sus tecnologías: "3D INFINITY VISION XD PREMIER" o "2D PREMIER", además del idioma: Doblada o Subtitulada.',
          'Toca el botón con la hora deseada (ej: [17:35]) para reservar tus boletas.'
        ],
        tips: [
          'Las salas XD cuentan con pantalla gigante de 4 pisos y sonido envolvente de alta potencia.',
          'Las funciones Premier cuentan con silletería de cuero reclinable y servicio a la sala.'
        ],
        hotspot: {
          x: 35,
          y: 74,
          label: 'Horario [17:35]',
          actionText: 'Pulsar en el botón del horario 17:35'
        },
        keyDetails: [
          { label: 'Cine seleccionado', value: 'Pacific Mall (Cali)' },
          { label: 'Formato elegido', value: '3D Infinity Vision XD Premier' },
          { label: 'Idioma', value: 'Doblada al español' },
          { label: 'Horario', value: '17:35 (5:35 PM)' }
        ],
        imagePlaceholderName: '4.jpg'
      },
      {
        id: 5,
        stepNumber: 5,
        title: 'Cambio de Cine o Ver Teatros Cercanos',
        screenTitle: 'Avengers: Endgame Bon - Teatros',
        category: 'teatros',
        summary: 'Cómo verificar salas alternativas y distancias si los horarios de tu cine favorito no se ajustan a tu plan.',
        actionRequired: 'Si deseas cambiar de ubicación, pulsa "Cambiar cine" para desplegar otros teatros como Unicentro Palmira o San Pedro Plaza.',
        detailedInstructions: [
          'La app muestra cines alternos con la distancia en kilómetros (ej: Unicentro Palmira a 29.24 km).',
          'Cada cine alternativo detalla sus propios horarios disponibles (ej: 2D Doblada 21:30, 3D Doblada 17:20).',
          'Puedes tocar el ícono de corazón para guardar tu teatro como favorito y que aparezca siempre de primero.'
        ],
        tips: [
          'Activar la geolocalización en tu celular permite que Cinemark ordene automáticamente los cines por cercanía.',
          'Si un horario está agotado en un centro comercial, revisa las sedes vecinas.'
        ],
        hotspot: {
          x: 48,
          y: 65,
          label: 'Sede Cercana',
          actionText: 'Verificar distancias y funciones alternas'
        },
        keyDetails: [
          { label: 'Cine principal', value: 'Pacific Mall' },
          { label: 'Cine alterno', value: 'Unicentro Palmira (29.24 km)' }
        ],
        imagePlaceholderName: '5.jpg'
      },
      {
        id: 6,
        stepNumber: 6,
        title: 'Selección de Boletas y Tarifas',
        screenTitle: 'Avengers: Endgame Bon - Tarifas',
        category: 'boletas',
        summary: 'Configuración de tipos de boleta, promociones de tarjetas aliadas (AMEX 2x1) y descuentos de membresía.',
        actionRequired: 'Usa los botones (+) y (-) para seleccionar el número de boletas deseado y luego presiona "CONTINUAR".',
        detailedInstructions: [
          'En la parte superior se destacan las membresías Cine Club Gold ($28.900/año) y Pro ($32.500/mes) para obtener hasta 50% de descuento.',
          'Puedes activar el interruptor "Ver tarifas promocionales" si cuentas con convenios bancarios.',
          'Elige tu tipo de boleta (ej: "BOLETA XD PREMIER 3D" por $32.250 o tarifa 2x1 si cumples requisitos).',
          'Al seleccionar al menos 1 boleta, la barra inferior roja se iluminará mostrando el monto y el botón "CONTINUAR".'
        ],
        tips: [
          'Si vas en pareja y pagas con tarjeta American Express, la opción "2X1 AMEX 3DXD PREMIER" te permite pagar solo 1 entrada.',
          'En la pestaña "CINEBONO" puedes canjear códigos corporativos o tarjetas de regalo.'
        ],
        hotspot: {
          x: 91,
          y: 81,
          label: 'Añadir Boleta (+)',
          actionText: 'Tocar el botón (+) en BOLETA XD PREMIER 3D'
        },
        keyDetails: [
          { label: 'Tarifa seleccionada', value: 'BOLETA XD PREMIER 3D' },
          { label: 'Precio unitario', value: '$32.250 COP' },
          { label: 'Cantidad', value: '1 boleta' }
        ],
        imagePlaceholderName: '6.jpg'
      },
      {
        id: 7,
        stepNumber: 7,
        title: 'Selección de Asientos en la Sala',
        screenTitle: 'Ubicación en sala - Pacific Mall Sala 5',
        category: 'asientos',
        summary: 'Mapa interactivo de la sala para elegir tus butacas frente a la pantalla. Cuenta con cronómetro de reserva.',
        actionRequired: 'Toca la silla disponible que prefieras (aparecerá en verde con tu código de butaca, ej: A6) y pulsa "CONTINUAR".',
        detailedInstructions: [
          'En la parte superior se ilustra la curva de la "Pantalla" para orientarte.',
          'Código de colores: Gris (Ocupada), Negro (No disponible), Verde (Tu selección), Borde dorado (Sillas Premier), Ícono azul (Discapacidad / Acompañante).',
          'En la sección inferior se confirma tu selección con el ícono del sillón rojo: "Tus asientos son: BOLETA XD PREMIER 3D -> A6".',
          'Tienes un contador regresivo visible (ej: 09:35 min) para finalizar la reserva antes de que el asiento se libere.'
        ],
        tips: [
          'Las butacas de las filas centrales (filas E a G) ofrecen la mejor simetría acústica y visual.',
          'Para personas en condición de movilidad reducida o sillas de ruedas, los asientos azules tienen rampas de acceso directo.'
        ],
        warnings: [
          '¡Atención al cronómetro! Si se acaban los 10 minutos asignados, el sistema liberará los asientos automáticamente.'
        ],
        timerNotice: '09:35 restantes',
        hotspot: {
          x: 48,
          y: 31,
          label: 'Butaca [A6]',
          actionText: 'Tocar la butaca deseada en el plano'
        },
        keyDetails: [
          { label: 'Sala', value: 'Sala 5 - Pacific Mall' },
          { label: 'Asiento seleccionado', value: 'A6 (Premier)' },
          { label: 'Tiempo de retención', value: '10 minutos' }
        ],
        imagePlaceholderName: '7.jpg'
      },
      {
        id: 8,
        stepNumber: 8,
        title: 'Confitería y Alimentos Premier',
        screenTitle: 'Avengers: Endgame Bon - Confitería',
        category: 'confiteria',
        summary: 'Menú gastronómico para añadir hamburguesas gourmet, combos de crispetas, gaseosas y coleccionables a tu orden.',
        actionRequired: 'Si deseas snacks o cena, pulsa el botón (+) en el producto deseado (ej: Hamburguesa Callejera) o presiona "CONTINUAR".',
        detailedInstructions: [
          'Cinemark cuenta con categorías: MENU, COLECCIONABLES, COMBOS y CRISPETAS.',
          'En las salas Premier se ofrece cocina caliente: Hamburguesa Callejera ($38.000), Hamburguesa Mexicana ($38.000) o de Pollo ($38.000).',
          'Puedes aplicar un "Código promocional para confitería" si tienes cupones de descuento.',
          'La barra inferior sumará tus boletas y alimentos de manera automática.'
        ],
        tips: [
          'Comprar la comida desde la app te ahorra filas extensas en el mostrador del cine.',
          'Al llegar a la sala Premier, el personal de atención llevará tu pedido directamente a tu butaca.'
        ],
        hotspot: {
          x: 88,
          y: 45,
          label: 'Agregar Alimento (+)',
          actionText: 'Tocar (+) en Hamburguesa Callejera'
        },
        keyDetails: [
          { label: 'Categoría activa', value: 'Menú Premier Gourmet' },
          { label: 'Plato sugerido', value: 'Hamburguesa Callejera ($38.000)' },
          { label: 'Paso opcional', value: 'Puedes omitir pulsando Continuar' }
        ],
        imagePlaceholderName: '8.jpg'
      },
      {
        id: 9,
        stepNumber: 9,
        title: 'Resumen de Carrito y Cargos por Servicio',
        screenTitle: 'Carrito de compras - Pacific Mall',
        category: 'carrito',
        summary: 'Revisión final de ítems, fecha, hora, sala, sillas, cargos por servicio en línea y costo total.',
        actionRequired: 'Verifica meticulosamente la fecha, hora, sala y asientos elegidos. Si todo es correcto, pulsa "CONTINUAR".',
        detailedInstructions: [
          'La ventana emergente desglosa: Boleta XD Premier 3D ($32.250), Hamburguesa Premier ($38.000) = Subtotal $70.250.',
          'Transparencia tarifaria: Se detalla el "Cargo por servicio por transacción de confitería ($1.600)" y el "Cargo por servicio por boleta ($1.600)".',
          'El total consolidado de la compra en este ejemplo es de $73.450 COP.',
          'Se muestra una notificación de Cine Club Pro indicando el ahorro potencial de hasta el 53%.'
        ],
        tips: [
          'Una vez realizada la compra en línea, los cambios de función o cancelaciones están sujetos a políticas estrictas de taquilla.',
          'Verifica dos veces la fecha para evitar comprar por error para el día siguiente.'
        ],
        hotspot: {
          x: 82,
          y: 91,
          label: 'Confirmar y Continuar',
          actionText: 'Tocar en CONTINUAR'
        },
        keyDetails: [
          { label: 'Subtotal productos', value: '$70.250 COP' },
          { label: 'Cargos por servicio', value: '$3.200 COP (1.600 x 2)' },
          { label: 'Total final a pagar', value: '$73.450 COP' }
        ],
        imagePlaceholderName: '9.jpg'
      },
      {
        id: 10,
        stepNumber: 10,
        title: 'Datos de Facturación y Términos',
        screenTitle: 'Avengers: Endgame Bon - Pago (Facturación)',
        category: 'facturacion',
        summary: 'Ingreso obligatorio de datos del titular para emisión de factura legal colombiana y envío de boletas al correo.',
        actionRequired: 'Diligencia tus nombres, cédula, dirección, teléfono y correo electrónico. Marca las dos casillas obligatorias y pulsa "CONTINUAR".',
        detailedInstructions: [
          'Selecciona tipo de persona: "Natural" o "Jurídica".',
          'Ingresa tus Nombres y Apellidos completos.',
          'Elige tu documento (Cédula de ciudadanía, extranjería, pasaporte) e ingresa el número.',
          'Completa Ciudad (ej: CALI, VALLE), Dirección física y Número telefónico celular.',
          'Verifica cuidadosamente el Correo Electrónico: a este buzón llegarán las boletas digitales con código QR para ingresar a la sala.',
          'Es indispensable marcar: [✓] "Acepto los términos y condiciones" y [✓] "Acepto el tratamiento de datos personales".'
        ],
        warnings: [
          'Si escribes mal tu correo electrónico no recibirás el código QR de acceso ni el comprobante de compra.'
        ],
        tips: [
          'Si guardas tu sesión en la app, estos datos se llenarán automáticamente en tus próximas visitas.'
        ],
        hotspot: {
          x: 48,
          y: 72,
          label: 'Casillas de Aceptación',
          actionText: 'Marcar casillas de términos y pulsar CONTINUAR'
        },
        keyDetails: [
          { label: 'Documento registrado', value: 'Cédula de ciudadanía' },
          { label: 'Ciudad', value: 'Cali, Valle del Cauca' },
          { label: 'Canal de entrega', value: 'Correo Electrónico (Boleta QR)' }
        ],
        imagePlaceholderName: '10.jpg'
      },
      {
        id: 11,
        stepNumber: 11,
        title: 'Selección del Medio de Pago',
        screenTitle: 'Medios de pago disponibles',
        category: 'pagos',
        summary: 'Menú con las alternativas autorizadas por Cinemark Colombia para procesar la transacción.',
        actionRequired: 'Toca sobre "Tarjeta crédito / débito" o sobre "PSE" según el método con el que desees transferir tus fondos.',
        detailedInstructions: [
          'Cinemark ofrece dos canales primordiales de pago seguro:',
          '1. "Tarjeta crédito / débito": Para plásticos con código CVV (Visa, Mastercard, Amex, Diners).',
          '2. "PSE": Para pagos directos con débito a cuentas de ahorro colombianas o billeteras virtuales (Nequi, Daviplata, Dale, bancos tradicionales).',
          'En la parte inferior se muestra el total y el botón "PAGAR".'
        ],
        tips: [
          'PSE no genera cobros por comisiones bancarias adicionales al usuario.',
          'Si utilizas tarjeta de crédito puedes diferir el pago a cuotas en el siguiente paso.'
        ],
        hotspot: {
          x: 50,
          y: 80,
          label: 'Opción PSE',
          actionText: 'Pulsar en la tarjeta de pago PSE'
        },
        keyDetails: [
          { label: 'Métodos disponibles', value: 'Tarjeta Crédito/Débito y PSE' },
          { label: 'Seguridad', value: 'Protocolo cifrado ACH / Pasarela PCI-DSS' }
        ],
        imagePlaceholderName: '11.jpg'
      },
      {
        id: 12,
        stepNumber: 12,
        title: 'Pago con Tarjeta de Crédito / Débito',
        screenTitle: 'Tarjeta crédito / débito',
        category: 'tarjetas',
        summary: 'Formulario seguro para procesar cobros con tarjeta bancaria nacional o internacional.',
        actionRequired: 'Escribe el nombre del titular, los 16 dígitos de la tarjeta, fecha de vencimiento (MM/AA), código de seguridad (CVV) y cuotas.',
        detailedInstructions: [
          'Nombre del titular de la tarjeta: exactamente como aparece impreso en el plástico.',
          'Número de tarjeta: los 16 dígitos sin guiones ni espacios.',
          'Fecha de vencimiento: mes y año de expiración.',
          'Código de seguridad: los 3 o 4 dígitos al respaldo del plástico (CVV/CVC).',
          'Número de cuotas: selecciona 1 cuota si deseas evitar intereses, o la cantidad que prefieras.',
          'Opcional: Marca "Quiero guardar esta tarjeta para mi próxima compra" para futuras compras en 1 solo clic.'
        ],
        tips: [
          'Muchas tarjetas de débito actuales con chip (Visa/Mastercard Débito) pueden ingresarse aquí siempre que tengan código de seguridad.',
          'Tu banco podría solicitarte una clave dinámica o validación por SMS/OTP.'
        ],
        hotspot: {
          x: 82,
          y: 91,
          label: 'Botón PAGAR',
          actionText: 'Tocar en PAGAR para procesar el débito'
        },
        keyDetails: [
          { label: 'Franquicias aceptadas', value: 'Visa, Mastercard, American Express' },
          { label: 'Cuotas habituales', value: '1 cuota (sin intereses)' }
        ],
        imagePlaceholderName: '12.jpg'
      },
      {
        id: 13,
        stepNumber: 13,
        title: 'Pago con PSE (Pagos Seguros en Línea)',
        screenTitle: 'PSE - Pagos Seguros en Línea',
        category: 'pse',
        summary: 'Configuración para pago directo desde cuentas bancarias y billeteras de Colombia a través del botón PSE.',
        actionRequired: 'Deja seleccionada la casilla "Usar mismos datos de facturación" y toca sobre el campo "Banco" para abrir el listado.',
        detailedInstructions: [
          'Se despliega el sello oficial de "ach pse".',
          'La casilla [✓] "Usar mismos datos de facturación" traslada automáticamente tu correo y cédula a la plataforma de ACH.',
          'Toca la caja de texto "Banco * - A continuación seleccione su banco" para desplegar la lista de instituciones financieras.',
          'Al escoger el banco, se habilitará el botón rojo "PAGAR".'
        ],
        tips: [
          'Debes estar previamente registrado en el portal de PSE con tu correo electrónico personal.',
          'Ten a la mano la aplicación de tu banco o billetera en el teléfono para autorizar la notificación push.'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Selector de Banco',
          actionText: 'Tocar el campo para desplegar bancos'
        },
        keyDetails: [
          { label: 'Operador', value: 'ACH Colombia (PSE)' },
          { label: 'Requisito', value: 'Cuenta de ahorros o billetera activa' }
        ],
        imagePlaceholderName: '13.jpg'
      },
      {
        id: 14,
        stepNumber: 14,
        title: 'Selección de Banco o Billetera en PSE',
        screenTitle: 'Seleccionar Entidad Bancaria PSE',
        category: 'pse',
        summary: 'Listado de neobancos, billeteras y bancos colombianos (Nequi, Nu, Lulo, Movii, Bancolombia, Davivienda, etc.).',
        actionRequired: 'Selecciona tu banco (ej: NEQUI o NU) y pulsa "PAGAR" para ser redirigido a la banca en línea y confirmar la transacción.',
        detailedInstructions: [
          'La lista incluye neobancos modernos como: LULO BANK, MOVII S.A., NEQUI, NU, PAYCASH, POWWI, RAPPIPAY, UALÁ, así como BANCOLOMBIA, DAVIVIENDA, BBVA y BANCO DE BOGOTÁ.',
          'Toca el nombre de tu entidad financiera para seleccionarla.',
          'Al pulsar el botón rojo "PAGAR", la aplicación te redirigirá a la pasarela bancaria o abrirá la app de tu billetera (ej: Nequi) para que apruebes el débito.',
          '¡Listo! Una vez aprobado el pago, recibirás en tu pantalla y correo el código QR para entrar directo a la sala sin pasar por taquilla.'
        ],
        tips: [
          'En el caso de Nequi o Daviplata, recibirás una notificación de cobro en tu celular que debes aceptar antes de 5 minutos.',
          'Guarda una captura de pantalla del código QR generado o ábrelo desde la sección "Mis Boletas" en el menú de la app.'
        ],
        hotspot: {
          x: 48,
          y: 53,
          label: 'Elegir NEQUI / NU',
          actionText: 'Tocar sobre la entidad y confirmar con PAGAR'
        },
        keyDetails: [
          { label: 'Entidades visibles', value: 'Nequi, Nu, Lulo, Movii, RappiPay, Ualá...' },
          { label: 'Paso final', value: 'Aprobación en tu banco y descarga de Boleta QR' }
        ],
        imagePlaceholderName: '14.jpg'
      }
    ]
  },
  {
    id: 'cine-club-gold-pro',
    title: 'Cine Club Gold & Pro (Membresías)',
    shortDescription: 'Descubre cómo suscribirte para obtener boletas gratis, hasta 50% de descuento y martes/miércoles a mitad de precio.',
    fullDescription: 'Tutorial especializado para sacar el máximo rendimiento a las membresías de Cinemark Colombia. Comparativa Gold vs Pro, redención de entradas de cortesía y acumulación de puntos.',
    category: 'Membresías',
    badge: 'Beneficios',
    durationMinutes: 5,
    difficulty: 'Principiante',
    totalSteps: 5,
    isAvailable: false,
    iconName: 'Crown',
    steps: []
  },
  {
    id: 'confiteria-express',
    title: 'Compra de Comida y Confitería',
    shortDescription: 'Pide combos coleccionables BT21, crispetas, gaseosas y snacks desde la app para reclamar en barra sin filas.',
    fullDescription: 'Manual completo paso a paso para la compra de alimentos y acompañantes en la app móvil de Cinemark. Desde la selección de confitería hasta el pago por PSE con Nequi o tarjeta.',
    category: 'Confitería',
    badge: 'Acompañantes & Snacks',
    durationMinutes: 5,
    difficulty: 'Principiante',
    totalSteps: 9,
    isAvailable: true,
    iconName: 'Popcorn',
    steps: [
      {
        id: 101,
        stepNumber: 1,
        title: 'Acceso a la Sección de Confitería',
        screenTitle: 'BIENVENIDO - Cartelera y Navegación',
        category: 'cartelera',
        summary: 'Desde la pantalla de inicio de la aplicación, accede al catálogo gastronómico pulsando la pestaña de Confitería en la barra inferior.',
        actionRequired: 'Toca el ícono de "Confitería" (la cubeta de crispetas/palomitas) en la barra de navegación inferior de la app.',
        detailedInstructions: [
          'Abre la aplicación de Cinemark en tu teléfono.',
          'En lugar de seleccionar una película, ubica la barra de navegación en la parte inferior de la pantalla.',
          'Identifica el segundo ícono con forma de cubeta de crispetas etiquetado como "Confitería".',
          'Toca sobre este ícono para ingresar directamente a la tienda de alimentos de tu teatro preferido.'
        ],
        tips: [
          'Comprar tu comida por la app antes de llegar al cine te permite retirar en la fila preferencial express.',
          'No es indispensable tener boleta comprada en la misma transacción para ordenar confitería.'
        ],
        hotspot: {
          x: 30,
          y: 89,
          label: 'Tocar Confitería',
          actionText: 'Pulsar en la pestaña Confitería'
        },
        keyDetails: [
          { label: 'Pestaña', value: 'Confitería (Barra inferior)' },
          { label: 'Cine detectado', value: 'Pacific Mall (Cali)' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 102,
        stepNumber: 2,
        title: 'Catálogo de Coleccionables y Combos',
        screenTitle: 'Cali - Pacific Mall / Confitería - COLECCIONABLES',
        category: 'confiteria',
        summary: 'Explora los coleccionables de edición especial, combos exclusivos y preventas de películas disponibles en tu sede.',
        actionRequired: 'Observa las opciones disponibles (ej: Combo Minimark BT21 Coleccionable por $39.900) y pulsa en el botón (+) para agregarlo.',
        detailedInstructions: [
          'Verifica que el cine indicado en la parte superior sea tu sede habitual (ej: Cali - Pacific Mall).',
          'En la barra superior encontrarás las secciones: "COLECCIONABLES", "COMBOS" y "PROMOCIONES".',
          'Si dispones de un bono de descuento, pulsa en "Código promocional para confitería".',
          'Para sumar un producto a tu pedido, pulsa el botón rojo circular con el signo más (+).'
        ],
        tips: [
          'Los vasos y baldes coleccionables tienen unidades limitadas hasta agotar inventario.',
          'Los socios de Cine Club tienen acceso a preventas exclusivas (como el Combo Avengers por $130.000).'
        ],
        hotspot: {
          x: 88,
          y: 40,
          label: 'Añadir Combo BT21 (+)',
          actionText: 'Tocar (+) para agregar coleccionable'
        },
        keyDetails: [
          { label: 'Sede', value: 'Pacific Mall (Cali)' },
          { label: 'Combo BT21 Coleccionable', value: '$39.900 COP (con gaseosa 798 ml)' },
          { label: 'Vaso BT21 individual', value: '$30.900 COP' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 103,
        stepNumber: 3,
        title: 'Selección de Bebidas y Tamaños',
        screenTitle: 'Cali - Pacific Mall / Confitería - BEBIDAS',
        category: 'confiteria',
        summary: 'Elige el tamaño ideal de tus bebidas (Pequeña, Mediana o Grande) y refrescos para acompañar tu función.',
        actionRequired: 'Navega a la categoría "BEBIDAS" y toca el botón (+) en la bebida deseada (ej: Gaseosa Mediana de 532 ml por $16.800).',
        detailedInstructions: [
          'Desplaza las pestañas horizontales para explorar: "ANTOJOS", "CRISPETAS" y "BEBIDAS".',
          'Selecciona entre los tamaños ofrecidos: Gaseosa Pequeña 384 ml ($13.200), Gaseosa Mediana 532 ml ($16.800) o Gaseosa Grande 798 ml + Mini Botella ($17.800).',
          'Al agregar un producto, la barra inferior actualizará el importe total de tu carrito.'
        ],
        tips: [
          'Los combos suelen ser más económicos que comprar la crispeta y la gaseosa por separado.',
          'Puedes pedir hielo y tus sabores de gaseosa favoritos al momento de recoger en mostrador.'
        ],
        hotspot: {
          x: 88,
          y: 49,
          label: 'Agregar Gaseosa Mediana (+)',
          actionText: 'Tocar (+) en Gaseosa Mediana'
        },
        keyDetails: [
          { label: 'Gaseosa Mediana', value: '$16.800 COP (532 ml)' },
          { label: 'Gaseosa Pequeña', value: '$13.200 COP (384 ml)' },
          { label: 'Gaseosa Grande + Mini', value: '$17.800 COP (798 ml)' }
        ],
        imagePlaceholderName: '3.jpg'
      },
      {
        id: 104,
        stepNumber: 4,
        title: 'Revisión del Carrito de Confitería y Cargo de Servicio',
        screenTitle: 'Carrito de compras - Pacific Mall',
        category: 'carrito',
        summary: 'Comprueba el desglose de tus productos añadidos (ej: Chocolate Snickers por $6.000), el cargo de servicio y el total final.',
        actionRequired: 'Verifica los ítems de tu orden (Subtotal $6.000 + Cargo $1.600 = $7.600) y pulsa el botón rojo "CONTINUAR".',
        detailedInstructions: [
          'La app despliega la ventana flotante "Carrito de compras - Cine: Pacific Mall".',
          'Verifica las cantidades con los controles (-) y (+) si deseas sumar o quitar unidades.',
          'Revisa la transparencia de costos: Subtotal ($6.000) más el "Cargo por servicio por transacción de confitería ($1.600)".',
          'Presiona la barra roja inferior "CONTINUAR" para avanzar a la pasarela de pagos.'
        ],
        tips: [
          'El cargo por servicio de confitería en línea ($1.600 COP) cubre el procesamiento digital y la reserva de inventario prioritario.'
        ],
        hotspot: {
          x: 80,
          y: 82,
          label: 'Pulsar CONTINUAR',
          actionText: 'Confirmar carrito y continuar'
        },
        keyDetails: [
          { label: 'Producto seleccionado', value: 'Snickers x1 ($6.000)' },
          { label: 'Cargo servicio confitería', value: '$1.600 COP' },
          { label: 'Total a pagar', value: '$7.600 COP' }
        ],
        imagePlaceholderName: '4.jpg'
      },
      {
        id: 105,
        stepNumber: 5,
        title: 'Datos de Facturación y Correo de Notificación',
        screenTitle: 'Confitería - Pago / Datos de facturación',
        category: 'facturacion',
        summary: 'Ingreso legal de los datos del titular para expedición de la tirilla de caja electrónica y recepción del código de reclamo.',
        actionRequired: 'Diligencia tus datos (Nombres, Cédula, Ciudad, Celular, Correo), marca las casillas de términos y pulsa "CONTINUAR".',
        detailedInstructions: [
          'Tipo de persona: Selecciona "Natural".',
          'Ingresa tus nombres completos (Santiago Guerrero), cédula de ciudadanía (1107541099) y ciudad (Cali, Valle).',
          'Escribe tu dirección y teléfono celular de contacto.',
          'Asegúrate de escribir correctamente tu correo electrónico (ej: santzer5153@gmail.com): a este correo se enviará el código de barras/QR para reclamar la comida en la barra del cine.',
          'Marca las dos casillas reglamentarias: [✓] Términos y condiciones y [✓] Tratamiento de datos personales.',
          'Presiona el botón "CONTINUAR".'
        ],
        warnings: [
          'Si digitas mal tu correo electrónico no podrás recibir el comprobante con el código de retiro para la confitería.'
        ],
        tips: [
          'Verifica minuciosamente tu correo electrónico personal, ya que es el único canal por donde recibirás el comprobante con código QR para reclamar tu comida en barra.'
        ],
        hotspot: {
          x: 50,
          y: 72,
          label: 'Aceptar Términos & Continuar',
          actionText: 'Marcar casillas y pulsar CONTINUAR'
        },
        keyDetails: [
          { label: 'Titular', value: 'Santiago Guerrero' },
          { label: 'Documento', value: 'CC 1107541099' },
          { label: 'Destino del pedido', value: 'santzer5153@gmail.com' }
        ],
        imagePlaceholderName: '5.jpg'
      },
      {
        id: 106,
        stepNumber: 6,
        title: 'Selección del Canal de Pago',
        screenTitle: 'Medios de pago disponibles',
        category: 'pagos',
        summary: 'Menú de opciones para abonar el valor de la orden: Tarjeta de crédito/débito o transferencia directa por PSE.',
        actionRequired: 'Pulsa sobre "PSE" si deseas pagar con Nequi o tu cuenta de ahorros, o en "Tarjeta crédito / débito" para pagar con plástico bancario.',
        detailedInstructions: [
          'Se abrirá la ventana emergente con los canales de pago habilitados.',
          'Opción 1: "Tarjeta crédito / débito" (Visa, Mastercard, AMEX).',
          'Opción 2: "PSE" (Permite pagar con saldo de Nequi, Nu, Daviplata y todos los bancos nacionales).',
          'Toca la opción con la que vayas a pagar para ingresar al formulario correspondiente.'
        ],
        tips: [
          'PSE es la opción más popular y rápida en Colombia si usas billeteras móviles como Nequi o Daviplata.'
        ],
        hotspot: {
          x: 50,
          y: 79,
          label: 'Seleccionar PSE',
          actionText: 'Tocar opción PSE'
        },
        keyDetails: [
          { label: 'Medios disponibles', value: 'Tarjetas Bancarias / PSE' },
          { label: 'Total orden', value: '$7.600 COP' }
        ],
        imagePlaceholderName: '6.jpg'
      },
      {
        id: 107,
        stepNumber: 7,
        title: 'Formulario de Tarjeta de Crédito / Débito',
        screenTitle: 'Tarjeta crédito / débito - Pago Seguro',
        category: 'tarjetas',
        summary: 'Ingreso de datos de tarjeta bancaria, fecha de expiración, código de seguridad (CVV) y selección de cuotas.',
        actionRequired: 'Escribe los 16 dígitos de tu tarjeta, fecha MM/AA, CVV, elige 1 cuota (para no pagar intereses) y presiona "PAGAR ($7.600)".',
        detailedInstructions: [
          'Titular de la tarjeta: Nombre como aparece grabado en el plástico.',
          'Número de tarjeta: 16 números continuos.',
          'Fecha de vencimiento y Código de seguridad (3 dígitos al respaldo).',
          'Número de cuotas: Se recomienda seleccionar "1 cuota" para consumos de confitería.',
          'Opcional: Marcar "Quiero guardar esta tarjeta para mi próxima compra" si compras con frecuencia.',
          'Pulsa "PAGAR" para procesar el débito.'
        ],
        tips: [
          'Las tarjetas de débito modernas con números en relieve y código CVV funcionan perfectamente como tarjetas de crédito en esta pasarela.'
        ],
        hotspot: {
          x: 80,
          y: 91,
          label: 'Botón PAGAR ($7.600)',
          actionText: 'Pulsar en PAGAR'
        },
        keyDetails: [
          { label: 'Monto a debitar', value: '$7.600 COP' },
          { label: 'Cuotas sugeridas', value: '1 cuota' }
        ],
        imagePlaceholderName: '7.jpg'
      },
      {
        id: 108,
        stepNumber: 8,
        title: 'Configuración de PSE (Pagos Seguros en Línea)',
        screenTitle: 'PSE - Plataforma ACH Colombia',
        category: 'pse',
        summary: 'Conexión con el sistema interbancario de ACH Colombia para débito inmediato sin comisiones adicionales.',
        actionRequired: 'Mantén marcada la casilla "Usar mismos datos de facturación" y toca en la caja "Banco *" para desplegar el selector de instituciones.',
        detailedInstructions: [
          'Al seleccionar PSE, verás el logo oficial de ACH PSE.',
          'Verifica que la casilla [✓] "Usar mismos datos de facturación" esté activa para no reescribir tus datos en el portal bancario.',
          'Toca en el campo de texto: "Banco * - A continuación seleccione su banco".',
          'Se abrirá el listado interactivo con todas las opciones financieras del país.'
        ],
        tips: [
          'Asegúrate de tener saldo disponible en tu cuenta o disponible en Nequi antes de confirmar.'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Tocar Selector de Bancos',
          actionText: 'Desplegar lista de bancos'
        },
        keyDetails: [
          { label: 'Pasarela', value: 'ACH Colombia (PSE)' },
          { label: 'Importe', value: '$7.600 COP' }
        ],
        imagePlaceholderName: '8.jpg'
      },
      {
        id: 109,
        stepNumber: 9,
        title: 'Selección de Entidad (Nequi / Bancos) y Aprobación',
        screenTitle: 'Seleccionar Banco PSE / Pago Final',
        category: 'pse',
        summary: 'Escoge tu entidad (ej: Nequi, Nu, Bancolombia), pulsa PAGAR y aprueba la notificación push en tu celular para recibir tu código de retiro.',
        actionRequired: 'Selecciona tu entidad financiera (ej: NEQUI o NU) de la lista y pulsa el botón rojo "PAGAR ($7.600)".',
        detailedInstructions: [
          'En el listado desplegable encontrarás todas las billeteras y bancos: LULO BANK, MOVII, NEQUI, NU, PAYCASH, POWWI, RAPPIPAY, UALÁ, BANCOLOMBIA, DAVIVIENDA, etc.',
          'Toca sobre "NEQUI" (o el banco de tu preferencia).',
          'Presiona el botón rojo "PAGAR ($7.600)".',
          'La app de Cinemark te redirigirá a tu banco o te enviará una notificación push a tu teléfono.',
          'Abre la app de tu banco, autoriza el cobro con tu clave o biometría.',
          '¡Listo! La app generará tu código QR de confitería. Al llegar a Cinemark Pacific Mall, acércate directamente a la barra express, muestra tu pantalla y recibe tus crispetas y bebidas calientes sin hacer fila general.'
        ],
        tips: [
          'Si pagas con Nequi, recuerda revisar la sección "Notificaciones / Mensajes" en tu app Nequi para autorizar el cobro antes de que venza el tiempo.',
          'Puedes hacer una captura de pantalla del código de reclamo o buscarlo en la app en Menú > Mis Compras.'
        ],
        hotspot: {
          x: 50,
          y: 55,
          label: 'Elegir NEQUI / NU & PAGAR',
          actionText: 'Seleccionar entidad y pulsar PAGAR'
        },
        keyDetails: [
          { label: 'Billeteras rápidas', value: 'Nequi, Nu, Daviplata, Dale' },
          { label: 'Reclamo', value: 'Fila express de confitería con código QR' },
          { label: 'Monto final', value: '$7.600 COP' }
        ],
        imagePlaceholderName: '9.jpg'
      }
    ]
  },
  {
    id: 'exploracion-teatros-cercanos',
    title: 'Selección de Cine y Exploración con Mapa',
    shortDescription: 'Aprende a cambiar de sede desde el botón superior de la app, consultar cines cercanos y elegir tu complejo usando el mapa interactivo.',
    fullDescription: 'Manual interactivo oficial de 3 pasos para seleccionar tu cine en la aplicación de Cinemark. Descubre cómo acceder al selector de teatros desde la barra superior, revisar las sedes cercanas en Cali y utilizar la vista de mapa que suministra la app para elegir tu complejo preferido.',
    category: 'Teatros',
    badge: 'Mapa & Ubicación',
    durationMinutes: 3,
    difficulty: 'Principiante',
    totalSteps: 3,
    isAvailable: true,
    iconName: 'Building',
    steps: [
      {
        id: 201,
        stepNumber: 1,
        title: 'Botón Superior para Cambiar o Seleccionar Cine',
        screenTitle: 'BIENVENIDO - Seleccionar Cine (Botón Superior)',
        category: 'teatros',
        summary: 'Desde la pantalla principal (Bienvenido), el acceso directo para cambiar o elegir tu cine se encuentra en la parte superior ("Seleccionar cine"), no en la barra inferior.',
        actionRequired: 'Toca el botón "Seleccionar cine" (con ícono de pin de ubicación) ubicado en la parte superior derecha de la pantalla de inicio.',
        detailedInstructions: [
          'Abre la aplicación móvil de Cinemark en tu dispositivo.',
          'En la pantalla de inicio ("BIENVENIDO"), observa la franja de encabezado superior justo debajo de tu perfil.',
          'Junto a la pestaña "CARTELERA POR CINE", ubica el botón destacado "Seleccionar cine" (o el selector con el pin de ubicación).',
          'Toca directamente sobre el botón "Seleccionar cine" en la parte superior para abrir el directorio de complejos.'
        ],
        tips: [
          'El botón para cambiar de complejo está ubicado arriba en la pantalla principal para un acceso rápido sin tener que navegar por la barra inferior.',
          'Al pulsar este botón, la app te permite cambiar entre ciudades y complejos disponibles según tu conveniencia.'
        ],
        hotspot: {
          x: 75,
          y: 13,
          label: 'Tocar Seleccionar cine (Arriba)',
          actionText: 'Pulsar botón superior "Seleccionar cine"'
        },
        keyDetails: [
          { label: 'Ubicación botón', value: 'Parte superior derecha (Header)' },
          { label: 'Acción', value: 'Cambiar / Seleccionar cine' },
          { label: 'Pantalla', value: 'Bienvenido / Cartelera por Cine' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 202,
        stepNumber: 2,
        title: 'Lista de Teatros y Alternar a Vista en Mapa',
        screenTitle: 'Teatros - Cali (Cercanos a ti y Botón Ver en Mapa)',
        category: 'teatros',
        summary: 'Visualiza la lista de complejos en tu ciudad (Cali) ordenados por cercanía y pulsa el botón "Ver en mapa" para cambiar al mapa cartográfico que suministra la aplicación.',
        actionRequired: 'Toca el botón "Ver en mapa" (con ícono de mapa) en el encabezado superior para desplegar la visualización geográfica interactiva.',
        detailedInstructions: [
          'En el encabezado confirmas tu ciudad activa ("Teatros - Cali").',
          'La app muestra la lista de complejos bajo la sección "Cercanos a ti" con información de distancia (ej: Pacific Mall a 0.8 km) y formatos tecnológicos (XD, Premier, 2D, 3D).',
          'En la parte superior derecha, ubica el botón de alternancia "Ver en mapa" situado junto al selector de ciudad.',
          'Toca sobre el botón "Ver en mapa" para abrir la visualización cartográfica completa provista por la aplicación.'
        ],
        tips: [
          'La vista en mapa es ideal para ubicar geográficamente el complejo más conveniente si te estás desplazando por la ciudad.',
          'En la lista también puedes tocar el corazón para marcar tu cine favorito permanente.'
        ],
        hotspot: {
          x: 79,
          y: 11,
          label: 'Tocar Ver en mapa',
          actionText: 'Pulsar botón "Ver en mapa" de la aplicación'
        },
        keyDetails: [
          { label: 'Ciudad', value: 'Cali, Valle del Cauca' },
          { label: 'Vista actual', value: 'Lista de teatros cercanos' },
          { label: 'Botón clave', value: 'Ver en mapa (encabezado superior)' },
          { label: 'Sedes listadas', value: 'Pacific Mall (0.8 km), Unicentro Palmira' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 203,
        stepNumber: 3,
        title: 'Elegir un Cine con el Mapa que Suministra la Aplicación',
        screenTitle: 'Mapa Interactivo de Cines - Cinemark Cali',
        category: 'teatros',
        summary: 'Explora la ubicación geográfica de los complejos en el mapa interactivo suministrado por la app, pulsa el pin de Pacific Mall y confirma la elección de tu sede.',
        actionRequired: 'En el mapa interactivo suministrado por la app, toca el pin o marcador de Pacific Mall y pulsa "SELECCIONAR ESTE CINE".',
        detailedInstructions: [
          'Observa el mapa interactivo de Cali provisto por la aplicación de Cinemark con tu ubicación GPS en tiempo real (punto azul).',
          'Identifica los pines oficiales de Cinemark distribuidos en la cartografía de la ciudad.',
          'Toca sobre el pin de "Pacific Mall" ubicado en la zona norte (Cl. 36 Nte con Av. 6A).',
          'Al tocar el marcador, se despliega la tarjeta flotante inferior con la distancia exacta (0.8 km), dirección y formatos disponibles (XD, Premier, 2D, 3D, D-BOX).',
          'Pulsa el botón rojo destacado "SELECCIONAR ESTE CINE" para fijar este complejo y ver su cartelera personalizada.'
        ],
        tips: [
          'El mapa suministrado por la app cuenta con controles de zoom (+/-) y recentrado GPS para encontrar rápidamente cualquier sede.',
          'Seleccionar el cine desde el mapa te garantiza elegir con total certeza la ubicación física a la que deseas asistir.'
        ],
        hotspot: {
          x: 50,
          y: 89,
          label: 'Seleccionar este cine en el Mapa',
          actionText: 'Pulsar "SELECCIONAR ESTE CINE" en la tarjeta del mapa'
        },
        keyDetails: [
          { label: 'Herramienta', value: 'Mapa suministrado por la app' },
          { label: 'Sede en mapa', value: 'Cinemark Pacific Mall (Pin activo)' },
          { label: 'Distancia GPS', value: '0.8 km de tu ubicación' },
          { label: 'Confirmación', value: 'Botón "SELECCIONAR ESTE CINE"' }
        ],
        imagePlaceholderName: '3.jpg'
      }
    ]
  },
  {
    id: 'login-registro-cuenta',
    title: 'Inicio de Sesión y Registro de Cuenta',
    shortDescription: 'Guía de 6 pasos desde el splash screen y cierre de pop-up hasta el modal de login y formulario de registro con términos.',
    fullDescription: 'Manual interactivo oficial de 6 pasos para la autenticación en la app de Cinemark. Aprende el flujo completo desde la apertura de la app, el cierre del anuncio emergente de Cine Club, el acceso a "Ingreso o registro", la autenticación por correo/contraseña y el diligenciamiento del formulario de registro con aceptación de términos.',
    category: 'Cuenta y Pagos',
    badge: 'Autenticación & Perfil',
    durationMinutes: 4,
    difficulty: 'Principiante',
    totalSteps: 6,
    isAvailable: true,
    iconName: 'User',
    steps: [
      {
        id: 301,
        stepNumber: 1,
        title: 'Apertura de la App y Pantalla de Carga (Splash Screen)',
        screenTitle: 'CINEMARK - Pantalla de Carga Inicial',
        category: 'login',
        summary: 'Al abrir la aplicación móvil de Cinemark se presenta la pantalla blanca oficial con el logotipo CINEMARK™ mientras cargan los servicios y configuraciones iniciales.',
        actionRequired: 'Espera a que cargue la aplicación o toca en cualquier parte de la pantalla para avanzar.',
        detailedInstructions: [
          'Inicia la aplicación de Cinemark en tu teléfono.',
          'Visualiza la pantalla de bienvenida / carga con el logotipo corporativo oficial CINEMARK™ centrado.',
          'La app sincroniza en segundo plano tu ciudad, versión y ofertas vigentes.',
          'Toca la pantalla o espera unos segundos para ingresar a la pantalla principal.'
        ],
        tips: [
          'Esta pantalla se presenta brevemente cada vez que la app se inicia desde cero.',
          'Asegúrate de contar con conexión a internet para que las carteleras y promociones carguen correctamente.'
        ],
        hotspot: {
          x: 50,
          y: 48,
          label: 'Iniciar Cinemark',
          actionText: 'Tocar pantalla para continuar'
        },
        keyDetails: [
          { label: 'Aplicación', value: 'Cinemark Colombia Oficial' },
          { label: 'Estado', value: 'Carga inicial (Splash Screen)' },
          { label: 'Transición', value: 'Automática al inicio' }
        ],
        imagePlaceholderName: '1.jpeg'
      },
      {
        id: 302,
        stepNumber: 2,
        title: 'Cerrar Pop-up Publicitario Inicial',
        screenTitle: 'Cine Club - Anuncio Emergente con Botón X',
        category: 'login',
        summary: 'Antes de navegar, la app despliega un pop-up con la promoción de Cine Club ("Boletas gratis por comprar o renovar"). Para acceder al menú de login debes cerrarlo con la "X".',
        actionRequired: 'Toca la "X" roja dentro del círculo blanco en la esquina superior derecha del banner promocional.',
        detailedInstructions: [
          'Al cargar la pantalla principal, se superpone una ventana emergente publicitaria con beneficios de membresía Cine Club Gold y Cine Club Pro.',
          'Ubica en la esquina superior derecha del recuadro promocional el botón circular blanco con la "X" roja.',
          'Toca firmemente la "X" para cerrar la publicidad y dejar al descubierto la pantalla de inicio.'
        ],
        tips: [
          'Cerrar este pop-up no anula tus beneficios; la promoción sigue disponible en la pestaña inferior "Cine Club".',
          'Si no tocas la "X", el contenido de la app permanecerá bloqueado bajo la capa oscura semitransparente.'
        ],
        hotspot: {
          x: 85,
          y: 23,
          label: 'Cerrar Pop-up (X)',
          actionText: 'Pulsar la "X" para cerrar el anuncio'
        },
        keyDetails: [
          { label: 'Promoción', value: 'Boletas gratis Cine Club Gold/Pro' },
          { label: 'Botón de cierre', value: 'Círculo blanco con "X" roja' },
          { label: 'Ubicación botón', value: 'Esquina superior derecha del banner' }
        ],
        imagePlaceholderName: '2.jpeg'
      },
      {
        id: 303,
        stepNumber: 3,
        title: 'Acceso a Ingreso o Registro de Cuenta',
        screenTitle: 'BIENVENIDO - Ingreso o registro',
        category: 'login',
        summary: 'En la parte superior de la pantalla principal, junto al logo de Cinemark, pulsa la sección "BIENVENIDO - Ingreso o registro" para desplegar las opciones de cuenta.',
        actionRequired: 'Toca sobre el texto "BIENVENIDO - Ingreso o registro" en la barra superior izquierda de la app.',
        detailedInstructions: [
          'Una vez en la pantalla de inicio ("Cartelera por Cine"), observa el encabezado superior.',
          'Junto al ícono circular rojo "C", lee el rótulo "BIENVENIDO" y el subtítulo "Ingreso o registro".',
          'Toca directamente sobre esta área para abrir el panel inferior de inicio de sesión y registro.'
        ],
        tips: [
          'Iniciar sesión te permite acumular puntos Cine Club, guardar métodos de pago y recibir tus entradas digitales sin reingresar datos.',
          'Puedes comprar boletos como invitado, pero registrarte te brinda acceso a promociones exclusivas.'
        ],
        hotspot: {
          x: 35,
          y: 8.5,
          label: 'Tocar Ingreso o registro',
          actionText: 'Pulsar en "BIENVENIDO - Ingreso o registro"'
        },
        keyDetails: [
          { label: 'Encabezado', value: 'BIENVENIDO' },
          { label: 'Acción', value: 'Ingreso o registro' },
          { label: 'Estado usuario', value: 'No autenticado / Invitado' }
        ],
        imagePlaceholderName: '3.jpeg'
      },
      {
        id: 304,
        stepNumber: 4,
        title: 'Modal de Inicio de Sesión o Crear Cuenta',
        screenTitle: 'INICIAR SESIÓN - Panel Inferior',
        category: 'login',
        summary: 'En el modal inferior ingresa tu correo y contraseña para acceder, o pulsa el botón blanco "CREAR UNA CUENTA" para registrarte por primera vez.',
        actionRequired: 'Ingresa tus credenciales y pulsa "INICIAR SESIÓN", o toca "CREAR UNA CUENTA" si no tienes usuario.',
        detailedInstructions: [
          'Se despliega el panel inferior modal titulado "INICIAR SESIÓN".',
          'Si ya estás registrado: digita tu "Email*" y "Contraseña*", y pulsa el botón rojo "INICIAR SESIÓN".',
          'Si olvidaste tu clave, utiliza el enlace rojo "Olvidé mi contraseña".',
          'Si eres un usuario nuevo: pulsa el botón blanco con borde rojo "CREAR UNA CUENTA" para abrir el formulario de registro.'
        ],
        tips: [
          'El campo contraseña cuenta con un ícono de ojo para verificar que escribiste los caracteres correctamente.',
          'Tocar "CREAR UNA CUENTA" te llevará al formulario de registro en dos secciones.'
        ],
        hotspot: {
          x: 50,
          y: 80,
          label: 'Iniciar Sesión / Crear Cuenta',
          actionText: 'Pulsar botón de autenticación'
        },
        keyDetails: [
          { label: 'Campos', value: 'Email*, Contraseña*' },
          { label: 'Botón principal', value: 'INICIAR SESIÓN (Rojo)' },
          { label: 'Botón secundario', value: 'CREAR UNA CUENTA (Blanco)' }
        ],
        imagePlaceholderName: '4.jpeg'
      },
      {
        id: 305,
        stepNumber: 5,
        title: 'Formulario de Registro: Datos Personales (Parte 1)',
        screenTitle: 'Registrarse - Datos Personales y Documento',
        category: 'registro',
        summary: 'Completa la primera parte del formulario con tu información básica: nombres, apellidos, correo de confirmación, celular, dirección, cédula y ciudad (Cali).',
        actionRequired: 'Rellena los campos obligatorios marcados con asterisco (*) y desplázate hacia abajo para ver la sección de contraseña y términos.',
        detailedInstructions: [
          'En el encabezado confirma que estás en la pantalla "<- Registrarse".',
          'Verifica el "Tipo de persona *" (por defecto "Natural").',
          'Ingresa tus "Nombres *" y "Apellidos *" tal como figuran en tu documento.',
          'Digita tu "Correo electrónico *" y confírmalo en "Confirmación correo electrónico *".',
          'Escribe tu número de "Celular *" y "Dirección *".',
          'Selecciona tu "Tipo de documento *" (Cédula de Ciudadanía) e introduce tu número.',
          'Confirma tu "Ciudad *" (Cali) y selecciona tu "Teatro de preferencia *".',
          'Desplázate hacia la parte inferior del formulario para fijar tu contraseña y aceptar términos.'
        ],
        tips: [
          'Asegúrate de que el correo electrónico coincida exactamente en ambos campos para evitar rechazos de registro.',
          'El teatro de preferencia se guardará como tu sede predeterminada para futuras compras.'
        ],
        hotspot: {
          x: 50,
          y: 75,
          label: 'Diligenciar Datos y Bajar',
          actionText: 'Llenar campos y desplazarse a la sección final'
        },
        keyDetails: [
          { label: 'Tipo persona', value: 'Natural' },
          { label: 'Documento', value: 'Cédula de Ciudadanía' },
          { label: 'Ciudad', value: 'Cali' },
          { label: 'Teatro', value: 'Pacific Mall (Preferente)' }
        ],
        imagePlaceholderName: '5.jpeg'
      },
      {
        id: 306,
        stepNumber: 6,
        title: 'Finalización de Registro y Aceptación de Términos (Parte 2)',
        screenTitle: 'Registrarse - Contraseña y Aceptación de Políticas',
        category: 'registro',
        summary: 'Crea tu contraseña, marca obligatoriamente las casillas de Términos y Condiciones y Tratamiento de Datos Personales, y pulsa CONTINUAR para activar tu cuenta.',
        actionRequired: 'Ingresa tu contraseña, marca los dos checkboxes requeridos y pulsa el botón "CONTINUAR" para finalizar el registro.',
        detailedInstructions: [
          'En la parte inferior del formulario, introduce tu "Contraseña *".',
          'Marca la casilla obligatoria: "Acepto los términos y condiciones" (enlace rojo de consulta).',
          'Marca la segunda casilla obligatoria: "Acepto el tratamiento de datos personales".',
          'Verifica que no queden campos con advertencia de error.',
          'Pulsa el botón "CONTINUAR" para enviar tu registro y acceder a la sesión activa en Cinemark.'
        ],
        tips: [
          'Ambos checkboxes son obligatorios por ley de protección de datos (Habeas Data en Colombia).',
          'Al pulsar CONTINUAR, tu cuenta quedará vinculada automáticamente a la app y se cerrará el modal de bienvenida.'
        ],
        hotspot: {
          x: 50,
          y: 91,
          label: 'Pulsar CONTINUAR',
          actionText: 'Tocar botón CONTINUAR para finalizar el registro'
        },
        keyDetails: [
          { label: 'Seguridad', value: 'Contraseña encriptada' },
          { label: 'Términos', value: 'Aceptación obligatoria (2 casillas)' },
          { label: 'Acción final', value: 'Botón CONTINUAR' }
        ],
        imagePlaceholderName: '6.jpeg'
      }
    ]
  },
  {
    id: 'atencion-soporte-pqrsf',
    title: 'Atención al Cliente, PQRSF y Soporte',
    shortDescription: 'Cómo acceder a Contáctanos desde el Menú, radicar solicitudes en Zendesk y tipificar casos como "No recibí las boletas" o PQRSF.',
    fullDescription: 'Manual oficial interactivo de 4 pasos para la atención al cliente en la app de Cinemark Colombia. Aprende a ingresar a "Contáctanos" en el menú, cargar el centro de ayuda de Zendesk y tipificar solicitudes para compras online, membresías y PQRSF.',
    category: 'Soporte y PQRSF',
    badge: 'Atención & PQRSF',
    durationMinutes: 3,
    difficulty: 'Principiante',
    totalSteps: 4,
    isAvailable: true,
    iconName: 'Headphones',
    steps: [
      {
        id: 401,
        stepNumber: 1,
        title: 'Acceso al Menú de Ayuda y Soporte',
        screenTitle: 'HOLA, SANTIAGO! - Inicio con sesión activa',
        category: 'soporte',
        summary: 'Desde la pantalla de inicio con tu sesión activa ("HOLA, SANTIAGO!"), accede a las opciones de soporte tocando la pestaña Menú en la barra inferior.',
        actionRequired: 'Toca el ícono de "Menú" (con las 3 líneas horizontales) en la esquina inferior derecha de la barra de navegación.',
        detailedInstructions: [
          'Verifica que tu sesión esté iniciada con tu avatar y saludo personalizado ("HOLA, SANTIAGO!").',
          'En la barra de navegación inferior, ubica el quinto ícono rotulado como "Menú".',
          'Toca sobre el ícono "Menú" para desplegar la lista de opciones legales, notificaciones y canales de contacto directo.'
        ],
        tips: [
          'El menú inferior contiene tanto opciones de configuración como los canales de soporte al usuario.',
          'También puedes acceder a tu perfil completo tocando en "Acceder a mi perfil" bajo tu saludo.'
        ],
        hotspot: {
          x: 90,
          y: 92,
          label: 'Tocar Menú',
          actionText: 'Pulsar en la pestaña Menú en la barra inferior'
        },
        keyDetails: [
          { label: 'Perfil activo', value: 'Santiago Guerrero (SG)' },
          { label: 'Pestaña', value: 'Menú (Barra inferior derecha)' },
          { label: 'Función', value: 'Acceso a canales de soporte' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 402,
        stepNumber: 2,
        title: 'Selección de la Opción "Contáctanos"',
        screenTitle: 'Menú de Ayuda y Legal - Panel Desplegable',
        category: 'soporte',
        summary: 'En el menú desplegado, selecciona la primera opción "Contáctanos" para acceder al portal oficial de atención y radicación de solicitudes de Cinemark.',
        actionRequired: 'Toca la opción "Contáctanos" (con ícono de sobre de carta y flecha a la derecha).',
        detailedInstructions: [
          'En el panel emergente observarás opciones como: "Contáctanos", "Términos y Condiciones", "Notificaciones", "SIC" (Superintendencia de Industria y Comercio) y "Acerca de".',
          'Ubica en la parte superior la opción "Contáctanos".',
          'Toca sobre la fila de "Contáctanos" para abrir el navegador integrado de soporte técnico.'
        ],
        tips: [
          'La app integra directamente el portal de Zendesk para que no tengas que abrir un navegador externo ni perder tu sesión.',
          'En este mismo menú encuentras el enlace oficial a la SIC para temas de protección al consumidor.'
        ],
        hotspot: {
          x: 50,
          y: 52,
          label: 'Tocar Contáctanos',
          actionText: 'Pulsar en la opción "Contáctanos"'
        },
        keyDetails: [
          { label: 'Opción', value: 'Contáctanos (Zendesk Help Desk)' },
          { label: 'Entidad regulatoria', value: 'SIC (Superintendencia Industria y Comercio)' },
          { label: 'Destino', value: 'Portal oficial de tickets y PQRSF' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 403,
        stepNumber: 3,
        title: 'Centro de Ayuda y Formulario "Enviar una solicitud"',
        screenTitle: 'as.zendesk.com - Enviar una solicitud',
        category: 'pqrsf',
        summary: 'En el centro de ayuda oficial integrado (zendesk.com), lee las advertencias obligatorias de correo y pulsa el selector para desplegar los tipos de consulta.',
        actionRequired: 'Toca en el campo de selección desplegable debajo del aviso de advertencia para ver los formularios disponibles.',
        detailedInstructions: [
          'Confirma que estás en el entorno seguro oficial de Cinemark (as.zendesk.com / Preguntas Cinemark > Enviar una solicitud).',
          'Lee atentamente la indicación en rojo: "❗ Importante. Seleccione el Formulario de acuerdo a su consulta. No olvide verificar su correo electrónico, de lo contrario su solicitud quedará suspendida."',
          'Toca el selector desplegable (marcado con un recuadro y flecha hacia abajo) para desplegar las categorías de PQRSF.'
        ],
        tips: [
          'Verificar tu correo electrónico es indispensable para recibir la respuesta oficial de los asesores de Cinemark.',
          'En la parte superior dispones del botón "X" para regresar a la aplicación cuando lo desees.'
        ],
        hotspot: {
          x: 50,
          y: 60,
          label: 'Abrir Selector de Consulta',
          actionText: 'Tocar el campo desplegable de formulario'
        },
        keyDetails: [
          { label: 'Plataforma', value: 'Cinemark Help Desk (Zendesk)' },
          { label: 'Requisito', value: 'Verificación obligatoria de correo' },
          { label: 'Campo activo', value: 'Selector de Formulario de Consulta' }
        ],
        imagePlaceholderName: '3.jpg'
      },
      {
        id: 404,
        stepNumber: 4,
        title: 'Tipificación de Consulta / "No recibí las boletas" / PQRSF',
        screenTitle: 'Categorías de Solicitud y PQRSF',
        category: 'pqrsf',
        summary: 'Selecciona el motivo exacto de tu contacto entre las opciones oficiales: Cine Club, Soporte Compras Online, No recibí las boletas, PQRSF o Ventas Corporativas.',
        actionRequired: 'Elige la opción que corresponde a tu necesidad (ej: "No recibí las boletas." o "PQRSF Cinemark Colombia.") para cargar el formulario específico.',
        detailedInstructions: [
          'Observa las 5 categorías disponibles en el menú desplegable:',
          '1. "Cine Club PRO - GOLD" (problemas de membresía, puntos o beneficios).',
          '2. "Soporte - Compras Online" (errores en pasarela de pagos o cobros duplicados).',
          '3. "No recibí las boletas." (caso urgente si el correo con el código QR no llegó a tu bandeja).',
          '4. "PQRSF Cinemark Colombia." (radicación formal de Peticiones, Quejas, Reclamos, Sugerencias o Felicitaciones).',
          '5. "Ventas Corporativas" (cotizaciones para empresas y eventos).',
          'Toca sobre la opción deseada para habilitar los campos de radicación del caso.'
        ],
        tips: [
          'La opción "No recibí las boletas" tiene prioridad de atención rápida para compras con funciones próximas.',
          'Puedes usar el botón flotante rojo con el signo de interrogación (?) en la esquina inferior derecha para soporte contextual adicional.'
        ],
        hotspot: {
          x: 45,
          y: 67,
          label: 'Elegir Categoría de Reclamo',
          actionText: 'Seleccionar "No recibí las boletas." o "PQRSF"'
        },
        keyDetails: [
          { label: 'Casos críticos', value: 'No recibí las boletas / Compras Online' },
          { label: 'Régimen legal', value: 'PQRSF Cinemark Colombia' },
          { label: 'Soporte flotante', value: 'Botón de ayuda (?) disponible' }
        ],
        imagePlaceholderName: '4.jpg'
      }
    ]
  }
];

export const MODULES_DATA: Module[] = MODULES_DATA_BASE.map((module) => {
  const folder = MODULE_SCREENSHOT_FOLDERS[module.id];

  if (!folder) return module;

  return {
    ...module,
    steps: module.steps.map((step) => ({
      ...step,
      customImageUrl:
        SCREENSHOT_ASSETS[`../assets/${folder}/${step.imagePlaceholderName}`] ||
        step.customImageUrl,
    })),
  };
});

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cuánto tiempo aproximadamente retiene la app de Cinemark tus asientos en sala antes de liberarlos?',
    options: [
      '30 minutos',
      '10 minutos cronometrados',
      'No hay tiempo límite',
      'Hasta medianoche'
    ],
    correctIndex: 1,
    explanation: 'Cinemark otorga una ventana de 10 minutos (visible en el cronómetro superior rojo) para seleccionar comida, rellenar datos y pagar antes de que los asientos se liberen al público.'
  },
  {
    id: 2,
    question: '¿Qué significa el color VERDE en el mapa interactivo de asientos de la sala?',
    options: [
      'Butaca para persona con discapacidad',
      'Asiento ocupado por otro usuario',
      'Tu selección actual de asiento',
      'Silla doble premier reservada'
    ],
    correctIndex: 2,
    explanation: 'El color verde indica la butaca específica que estás seleccionando actualmente. Los asientos grises están ocupados y los que tienen contorno dorado son salas tipo Premier.'
  },
  {
    id: 3,
    question: '¿Por qué es sumamente crítico ingresar tu correo electrónico de forma correcta en el formulario de facturación?',
    options: [
      'Solo se usa para publicidad',
      'Allí llegará la boleta digital con el código QR para entrar a la sala',
      'Porque si no, te cobran una penalidad bancaria',
      'Para que el teatro te llame por teléfono'
    ],
    correctIndex: 1,
    explanation: 'El correo electrónico es el canal oficial donde Cinemark despacha el código QR de entrada que debes mostrar al acomodador de sala para entrar sin hacer fila en taquilla.'
  },
  {
    id: 4,
    question: '¿Qué método de pago permite transferir fondos directamente desde Nequi, Nu o bancos colombianos sin costo de tarjeta?',
    options: [
      'Cinebono físico únicamente',
      'PSE (Pagos Seguros en Línea)',
      'Cheque de gerencia',
      'Efectivo contra entrega en sala'
    ],
    correctIndex: 1,
    explanation: 'El botón PSE conecta con el sistema bancario colombiano (ACH), admitiendo billeteras como Nequi, Daviplata, Nu, Lulo y todos los bancos del país con débito seguro a tu cuenta.'
  },
  {
    id: 5,
    question: '¿Dónde se encuentra ubicado el botón para cambiar de cine en la pantalla principal de la app de Cinemark?',
    options: [
      'En la barra de navegación inferior únicamente',
      'En la parte superior (Header / Cartelera por cine)',
      'En los ajustes del teléfono',
      'No se puede cambiar una vez instalado'
    ],
    correctIndex: 1,
    explanation: 'El botón para cambiar o seleccionar cine se encuentra en la parte superior derecha de la pantalla principal, permitiendo cambiar de sede con un solo toque.'
  },
  {
    id: 6,
    question: '¿Qué ventaja te brinda usar el mapa interactivo suministrado por la aplicación para elegir tu cine?',
    options: [
      'Solo sirve para pedir taxi',
      'Permite visualizar geográficamente todos los complejos, ver tu distancia GPS y seleccionar la sede tocando su pin',
      'Permite reservar sin pagar las entradas',
      'Descarga películas a tu teléfono'
    ],
    correctIndex: 1,
    explanation: 'El mapa suministrado por la aplicación de Cinemark muestra los teatros geolocalizados respecto a tu posición actual, permitiéndote tocar el pin de tu cine preferido y seleccionarlo directamente.'
  },
  {
    id: 7,
    question: '¿Cómo se accede al panel de inicio de sesión o creación de cuenta desde la pantalla principal de Cinemark?',
    options: [
      'Esperando 1 hora sin tocar la pantalla',
      'Tocando en el encabezado superior sobre "BIENVENIDO - Ingreso o registro"',
      'Llamando a soporte telefónico',
      'Desinstalando la app'
    ],
    correctIndex: 1,
    explanation: 'En la parte superior de la pantalla principal, justo junto al ícono de Cinemark, se encuentra la sección "BIENVENIDO - Ingreso o registro" que despliega el panel de autenticación.'
  },
  {
    id: 8,
    question: '¿Qué requisitos son obligatorios para finalizar con éxito el registro de una cuenta nueva en la app?',
    options: [
      'Pagar una suscripción mensual obligatoria',
      'Llenar los datos requeridos (*) y marcar las casillas de Términos y Tratamiento de datos personales',
      'Presentar la cédula física en taquilla primero',
      'Tener más de 50 compras previas'
    ],
    correctIndex: 1,
    explanation: 'El registro exige diligenciar los campos con asterisco (*) y aceptar obligatoriamente los términos y el tratamiento de datos personales conforme a la ley de Habeas Data antes de pulsar CONTINUAR.'
  },
  {
    id: 9,
    question: '¿Cómo se accede al portal oficial de atención al cliente (Contáctanos) en la app de Cinemark?',
    options: [
      'Únicamente acudiendo físicamente a las oficinas principales',
      'Desde la pestaña Menú en la barra inferior, seleccionando la opción "Contáctanos"',
      'No hay canal de contacto en la app',
      'Esperando un mensaje de texto de confirmación'
    ],
    correctIndex: 1,
    explanation: 'Al pulsar la pestaña "Menú" en la barra de navegación inferior, se despliega el menú institucional donde la primera opción es "Contáctanos", abriendo el centro de ayuda oficial.'
  },
  {
    id: 10,
    question: '¿Qué tipificación de formulario debes seleccionar si realizaste el pago de tus entradas pero el correo no llegó?',
    options: [
      'Ventas Corporativas',
      'No recibí las boletas.',
      'Cine Club PRO - GOLD',
      'SIC'
    ],
    correctIndex: 1,
    explanation: 'La categoría "No recibí las boletas." es el canal prioritario habilitado por Cinemark en su centro de ayuda para resolver fallas de despacho de entradas digitales antes de que inicie la función.'
  }
];
