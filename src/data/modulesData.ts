import { Module, QuizQuestion } from '../types/modules';

export const MODULES_DATA: Module[] = [
  {
    id: 'descarga-del-aplicativo',
    title: 'Descarga e Instalación del Aplicativo',
    shortDescription: 'Aprende a buscar, descargar e instalar la app oficial de Cinemark Colombia desde Google Play Store en Android.',
    fullDescription: 'Guía paso a paso para la instalación en dispositivos móviles Android: búsqueda en la tienda de apps de Google, validación del desarrollador oficial (SunDevs), instalación, permisos de notificaciones y primer ingreso.',
    category: 'Cuenta y Pagos',
    badge: 'Inicio / Instalación',
    durationMinutes: 3,
    difficulty: 'Principiante',
    totalSteps: 8,
    isAvailable: true,
    iconName: 'Download',
    steps: [
      {
        id: 101,
        stepNumber: 1,
        title: 'Abrir la Google Play Store',
        screenTitle: 'Menú de Aplicaciones / Carpeta Google',
        category: 'cartelera',
        summary: 'En tu dispositivo móvil Android, ingresa a la tienda oficial de aplicaciones para iniciar la búsqueda.',
        actionRequired: 'Toca el ícono de Google Play Store para abrir la tienda.',
        detailedInstructions: [
          'Desbloquea tu teléfono y abre el cajón de aplicaciones o la carpeta de Google.',
          'Localiza el ícono triangular multicolor de "Play Store".',
          'Púlsalo para ingresar a la tienda de apps.'
        ],
        tips: [
          'Asegúrate de contar con conexión a Wi-Fi o datos móviles activos.'
        ],
        hotspot: {
          x: 27,
          y: 82,
          label: 'Abrir Play Store',
          actionText: 'Tocar el ícono de Play Store',
          type: 'point'
        },
        keyDetails: [
          { label: 'Sistema Operativo', value: 'Android 8.0 o superior' },
          { label: 'Tienda Oficial', value: 'Google Play Store' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 102,
        stepNumber: 2,
        title: 'Buscar la Aplicación',
        screenTitle: 'Google Play Store - Explorador',
        category: 'cartelera',
        summary: 'Utiliza el buscador integrado en la parte superior para encontrar la app oficial de Cinemark.',
        actionRequired: 'Toca la barra superior "Buscar apps y juegos" y escribe "cinemark".',
        detailedInstructions: [
          'En la parte superior de la Play Store ubica la barra de búsqueda con el ícono de lupa.',
          'Toca sobre el campo de texto.',
          'Escribe la palabra "cinemark" y presiona la tecla de búsqueda.'
        ],
        tips: [
          'No es necesario escribir el nombre completo, con "cinemark" aparecerá de primera.'
        ],
        hotspot: {
          x: 42,
          y: 7.5,
          label: 'Barra de Búsqueda',
          actionText: 'Tocar barra para escribir "cinemark"',
          type: 'point'
        },
        keyDetails: [
          { label: 'Término de búsqueda', value: 'cinemark' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 103,
        stepNumber: 3,
        title: 'Seleccionar Cinemark Colombia',
        screenTitle: 'Resultados de Búsqueda',
        category: 'cartelera',
        summary: 'Verifica la versión correspondiente a Colombia desarrollada por SunDevs.',
        actionRequired: 'Toca el primer resultado oficial "Cinemark Colombia".',
        detailedInstructions: [
          'Observa el listado de resultados.',
          'Elige la opción que dice "Cinemark Colombia" con desarrollador "SunDevs" y el ícono del círculo rojo con la letra "C" blanca.',
          'Toca sobre el título para entrar a la ficha técnica de la app.'
        ],
        tips: [
          'Evita descargar versiones de otros países como Centroamérica o Chile.'
        ],
        hotspot: {
          x: 48,
          y: 17,
          label: 'Cinemark Colombia',
          actionText: 'Tocar el resultado oficial',
          type: 'point'
        },
        keyDetails: [
          { label: 'Desarrollador', value: 'SunDevs' },
          { label: 'Peso descarga', value: '17 MB' }
        ],
        imagePlaceholderName: '3.jpg'
      },
      {
        id: 104,
        stepNumber: 4,
        title: 'Descargar e Instalar',
        screenTitle: 'Ficha de Instalación - Cinemark Colombia',
        category: 'cartelera',
        summary: 'Inicia la instalación automática de la app oficial en tu dispositivo.',
        actionRequired: 'Presiona el botón azul "Instalar".',
        detailedInstructions: [
          'En la ficha de la aplicación confirma el nombre "Cinemark Colombia".',
          'Toca el botón azul "Instalar".',
          'Google Play verificará el archivo con Play Protect y comenzará la descarga.'
        ],
        tips: [
          'La app pesa solo 17 MB, por lo que la descarga tomará unos pocos segundos.'
        ],
        hotspot: {
          x: 44,
          y: 36.5,
          label: 'Botón Instalar',
          actionText: 'Pulsar en Instalar',
          type: 'point'
        },
        keyDetails: [
          { label: 'Licencia', value: 'Gratuita' }
        ],
        imagePlaceholderName: '4.jpg'
      },
      {
        id: 105,
        stepNumber: 5,
        title: 'Progreso de la Instalación',
        screenTitle: 'Instalando en el Dispositivo...',
        category: 'cartelera',
        summary: 'El sistema descarga los paquetes y los instala en la memoria del teléfono.',
        actionRequired: 'Espera a que el proceso complete el 100%. Toca la pantalla para continuar.',
        detailedInstructions: [
          'El círculo de progreso girará mientras finaliza la descarga.',
          'El estado cambiará de "Descargando..." a "Instalando...".'
        ],
        tips: [
          'No cierres la tienda hasta que termine la instalación.'
        ],
        hotspot: {
          x: 35,
          y: 18.5,
          label: 'Instalando...',
          actionText: 'Tocar para avanzar',
          type: 'point'
        },
        keyDetails: [
          { label: 'Estado', value: 'Instalando' }
        ],
        imagePlaceholderName: '5.jpg'
      },
      {
        id: 106,
        stepNumber: 6,
        title: 'Abrir la Aplicación',
        screenTitle: 'Instalación Finalizada',
        category: 'cartelera',
        summary: 'La aplicación se instaló correctamente y ya se encuentra en tu pantalla de inicio.',
        actionRequired: 'Pulsa el botón azul "Abrir" para iniciar Cinemark.',
        detailedInstructions: [
          'Verifica que el botón de instalación cambió a un botón azul llamado "Abrir".',
          'Púlsalo para iniciar la app por primera vez.'
        ],
        tips: [
          'También se habrá creado un acceso directo en tu menú de aplicaciones.'
        ],
        hotspot: {
          x: 74,
          y: 26.5,
          label: 'Botón Abrir',
          actionText: 'Pulsar en Abrir',
          type: 'point'
        },
        keyDetails: [
          { label: 'Estado', value: 'Listo para usar' }
        ],
        imagePlaceholderName: '6.jpg'
      },
      {
        id: 107,
        stepNumber: 7,
        title: 'Permisos de Notificaciones',
        screenTitle: 'Primer Inicio - Permisos del Sistema',
        category: 'cartelera',
        summary: 'Cinemark solicita autorización para enviarte avisos de tus funciones, reservas y promociones.',
        actionRequired: 'Toca en "Permitir" para recibir notificaciones sobre tus boletas.',
        detailedInstructions: [
          'Al abrir la app por primera vez, Android mostrará la ventana flotante de permisos.',
          'Toca el botón "Permitir" para que te avisen con antelación el inicio de tu película.'
        ],
        tips: [
          'Permitir notificaciones es útil para saber cuándo está lista tu confitería express.'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Pulsar Permitir',
          actionText: 'Tocar Permitir notificaciones',
          type: 'point'
        },
        keyDetails: [
          { label: 'Permiso', value: 'Notificaciones Push' }
        ],
        imagePlaceholderName: '7.jpg'
      },
      {
        id: 108,
        stepNumber: 8,
        title: 'Cerrar Pop-up de Bienvenida y Entrar a Cartelera',
        screenTitle: 'Pantalla de Inicio - Pop-up Promocional',
        category: 'cartelera',
        summary: 'Al cargar la cartelera se muestra el banner de bienvenida de Cine Club. Ciérralo para empezar a navegar.',
        actionRequired: 'Toca la "X" en la esquina superior derecha para cerrar el pop-up e ingresar a la cartelera.',
        detailedInstructions: [
          'Ubica el círculo blanco con la "X" roja en la esquina superior derecha.',
          'Púlsala para cerrar el anuncio y acceder a la cartelera de películas.'
        ],
        tips: [
          '¡Listo! La app ya está configurada.'
        ],
        hotspot: {
          x: 85,
          y: 24,
          label: 'Cerrar Pop-up (X)',
          actionText: 'Tocar la X para entrar a la app',
          type: 'point'
        },
        keyDetails: [
          { label: 'Estado', value: 'App lista' }
        ],
        imagePlaceholderName: '8.jpg'
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
          'Toca la pantalla o espera unos segundos para ingresar a la pantalla principal.'
        ],
        tips: [
          'Esta pantalla se presenta brevemente cada vez que la app se inicia desde cero.'
        ],
        hotspot: {
          x: 50,
          y: 48,
          label: 'Iniciar Cinemark',
          actionText: 'Tocar pantalla para continuar'
        },
        keyDetails: [
          { label: 'Aplicación', value: 'Cinemark Colombia Oficial' }
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
          'Ubica en la esquina superior derecha del recuadro promocional el botón circular blanco con la "X" roja.',
          'Toca firmemente la "X" para cerrar la publicidad y dejar al descubierto la pantalla de inicio.'
        ],
        tips: [
          'Cerrar este pop-up no anula tus beneficios; la promoción sigue disponible en la pestaña inferior "Cine Club".'
        ],
        hotspot: {
          x: 85,
          y: 23,
          label: 'Cerrar Pop-up (X)',
          actionText: 'Pulsar la "X" para cerrar el anuncio'
        },
        keyDetails: [
          { label: 'Promoción', value: 'Boletas gratis Cine Club Gold/Pro' }
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
          'Junto al ícono circular rojo "C", lee el rótulo "BIENVENIDO" y el subtítulo "Ingreso o registro".',
          'Toca directamente sobre esta área para abrir el panel inferior de inicio de sesión y registro.'
        ],
        tips: [
          'Iniciar sesión te permite acumular puntos Cine Club y guardar tus boletas digitales.'
        ],
        hotspot: {
          x: 35,
          y: 8.5,
          label: 'Tocar Ingreso o registro',
          actionText: 'Pulsar en "BIENVENIDO - Ingreso o registro"'
        },
        keyDetails: [
          { label: 'Encabezado', value: 'BIENVENIDO' }
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
          'Si ya estás registrado: digita tu "Email*" y "Contraseña*", y pulsa el botón rojo "INICIAR SESIÓN".',
          'Si eres un usuario nuevo: pulsa el botón blanco con borde rojo "CREAR UNA CUENTA".'
        ],
        tips: [
          'Tocar "CREAR UNA CUENTA" te llevará al formulario de registro.'
        ],
        hotspot: {
          x: 50,
          y: 90,
          label: 'Iniciar Sesión / Crear Cuenta',
          actionText: 'Pulsar botón de autenticación'
        },
        keyDetails: [
          { label: 'Botón principal', value: 'INICIAR SESIÓN' }
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
          'Ingresa tus "Nombres *" y "Apellidos *" tal como figuran en tu documento.',
          'Digita tu "Correo electrónico *" y confírmalo.',
          'Introduce tu Cédula de Ciudadanía, Ciudad (Cali) y Teatro de preferencia.',
          'Desplázate hacia la parte inferior del formulario para fijar tu contraseña y aceptar términos.'
        ],
        tips: [
          'Asegúrate de que el correo electrónico coincida exactamente en ambos campos.'
        ],
        hotspot: {
          x: 75,
          y: 76,
          label: 'Diligenciar Datos y Bajar',
          actionText: 'Llenar campos y desplazarse a la sección final'
        },
        keyDetails: [
          { label: 'Tipo persona', value: 'Natural' }
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
          'Introduce tu "Contraseña *".',
          'Marca la casilla obligatoria: "Acepto los términos y condiciones".',
          'Marca la segunda casilla obligatoria: "Acepto el tratamiento de datos personales".',
          'Pulsa el botón "CONTINUAR" para enviar tu registro.'
        ],
        tips: [
          'Ambos checkboxes son obligatorios por ley de protección de datos (Habeas Data).'
        ],
        hotspot: {
          x: 50,
          y: 96,
          label: 'Pulsar CONTINUAR',
          actionText: 'Tocar botón CONTINUAR para finalizar el registro'
        },
        keyDetails: [
          { label: 'Acción final', value: 'Botón CONTINUAR' }
        ],
        imagePlaceholderName: '6.jpeg'
      }
    ]
  },
  {
    id: 'cambio-seleccion-cine',
    title: 'Selección y Cambio de Cine / Teatros',
    shortDescription: 'Consulta los cines de Cinemark en Cali, filtra por cercanía GPS (MallPlaza o Pacific Mall), gestiona favoritos y usa el mapa.',
    fullDescription: 'Aprende a ubicar y cambiar de teatro en la aplicación de Cinemark Colombia. Descubre cómo acceder a la pestaña de Teatros, ver la distancia exacta en kilómetros desde tu ubicación actual, guardar cines en favoritos y explorar el mapa interactivo con las tecnologías de cada sede (XD, D-BOX, Bistro).',
    category: 'Boletas',
    badge: 'Sedes & Ubicación',
    durationMinutes: 2,
    difficulty: 'Principiante',
    totalSteps: 3,
    isAvailable: true,
    iconName: 'MapPin',
    steps: [
      {
        id: 201,
        stepNumber: 1,
        title: 'Acceder a la Selección de Cine',
        screenTitle: 'Pantalla de Inicio - Encabezado Superior',
        category: 'cartelera',
        summary: 'En la parte superior de la cartelera puedes cambiar de complejo cinematográfico con un solo toque.',
        actionRequired: 'Toca en "Seleccionar cine" en el encabezado superior (al lado de CARTELERA POR CINE).',
        detailedInstructions: [
          'En la parte superior de la pantalla principal ubica la franja de opciones.',
          'Al lado derecho de "CARTELERA POR CINE", toca sobre el botón "Seleccionar cine".',
          'Esto abrirá de inmediato la lista de teatros disponibles en tu ciudad.'
        ],
        tips: [
          'Este botón superior es la forma más rápida de cambiar de sala sin tener que salirte de la cartelera.'
        ],
        hotspot: {
          x: 76,
          y: 16,
          label: 'Seleccionar cine',
          actionText: 'Tocar en "Seleccionar cine" arriba a la derecha',
          type: 'point'
        },
        keyDetails: [
          { label: 'Ubicación', value: 'Encabezado superior (Subheader)' },
          { label: 'Ciudad predeterminada', value: 'Cali' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 202,
        stepNumber: 2,
        title: 'Explorar Sedes Cercanas y Vista de Mapa',
        screenTitle: 'Teatros - Lista de Sedes y Distancias',
        category: 'cartelera',
        summary: 'Visualiza las salas ordenadas por proximidad GPS (MallPlaza a 1.76 km, Pacific Mall a 5.65 km) o abre la vista de mapa.',
        actionRequired: 'Toca el ícono de mapa en la esquina superior derecha (junto a "Cali") para ver las sedes geolocalizadas.',
        detailedInstructions: [
          'Observa las opciones bajo "Cercanos a ti": MallPlaza (1.76 km) y Pacific Mall (5.65 km).',
          'En la sección "Favoritos" puedes pulsar el corazón ❤️ para fijar tu sede preferida.',
          'En la esquina superior derecha, junto al rótulo "Cali", toca el ícono del mapa plegado para abrir la vista satelital.'
        ],
        tips: [
          'MallPlaza se ubica sobre la Calle 5 en el sur de Cali, mientras que Pacific Mall está en el norte (Av. 6ta).'
        ],
        hotspot: {
          x: 93,
          y: 7.5,
          label: 'Ver en Mapa',
          actionText: 'Tocar ícono de mapa arriba a la derecha',
          type: 'point'
        },
        keyDetails: [
          { label: 'Cine más cercano', value: 'MallPlaza (1.76 km)' },
          { label: 'Cine Favorito', value: 'Pacific Mall (5.65 km)' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 203,
        stepNumber: 3,
        title: 'Seleccionar Teatro en el Mapa Interactivo',
        screenTitle: 'Teatros Cali - Mapa Interactivo con GPS',
        category: 'cartelera',
        summary: 'Navega en el mapa interactivo sobre Cali, identifica las tecnologías de sala (XD, D-BOX, Bistro) y elige tu complejo.',
        actionRequired: 'Toca la tarjeta del cine (MallPlaza) o su marcador en el mapa para seleccionarlo como tu teatro activo.',
        detailedInstructions: [
          'El mapa muestra las vías principales de Cali (Calle 5, Autopista Sur) y los marcadores rojos de Cinemark.',
          'En la tarjeta inferior se confirman las tecnologías de MallPlaza: salas XD de pantalla gigante, butacas con movimiento D-BOX y oferta gastronómica Movie Bistro.',
          'Toca sobre la tarjeta para fijar este complejo y que la cartelera te muestre sus horarios.'
        ],
        tips: [
          'Puedes deslizar horizontalmente la tarjeta inferior para alternar entre MallPlaza y Pacific Mall en el mapa.'
        ],
        hotspot: {
          x: 50,
          y: 76,
          label: 'Confirmar Sede',
          actionText: 'Tocar tarjeta para seleccionar este cine',
          type: 'point'
        },
        keyDetails: [
          { label: 'Teatro en mapa', value: 'Cinemark MallPlaza' },
          { label: 'Formatos disponibles', value: 'XD, D-BOX, Movie Bistro' },
          { label: 'Dirección', value: 'Calle 5 # 52-140 Local 442' }
        ],
        imagePlaceholderName: '3.jpg'
      }
    ]
  },
  {
    id: 'membresias-cine-club',
    title: 'Membresías y Planes Cine Club',
    shortDescription: 'Conoce los beneficios de Cine Club Gold y Pro, compara modalidades de suscripción (mensual, 3 meses, anual) y completa tu afiliación.',
    fullDescription: 'Guía oficial para afiliarte al programa de lealtad Cine Club de Cinemark Colombia. Descubre cómo comparar los planes Gold y Pro, revisar los descuentos en boletas y confitería, elegir tu modalidad de pago y finalizar la suscripción en línea.',
    category: 'Membresías',
    badge: 'Beneficios & Planes',
    durationMinutes: 5,
    difficulty: 'Principiante',
    totalSteps: 12,
    isAvailable: true,
    iconName: 'Crown',
    steps: [
      {
        id: 501,
        stepNumber: 1,
        title: 'Acceder a la Pestaña Cine Club',
        screenTitle: 'Pantalla de Inicio - Pestaña Cine Club',
        category: 'cartelera',
        summary: 'En la barra de navegación inferior ubica el ícono con la estrella titulado Cine Club para conocer las membresías oficiales.',
        actionRequired: 'Toca el ícono de "Cine Club" en la barra inferior (al lado de Menú).',
        detailedInstructions: [
          'En la barra inferior de navegación ubica la penúltima opción.',
          'Localiza el ícono del tiquete con estrella roja titulado "Cine Club".',
          'Púlsalo para ingresar al portal de membresías y beneficios exclusivos.'
        ],
        tips: [
          'Estar afiliado a Cine Club te permite acumular puntos y acceder a descuentos de hasta el 50% en entradas.'
        ],
        hotspot: {
          x: 70,
          y: 91,
          label: 'Pestaña Cine Club',
          actionText: 'Tocar ícono de Cine Club en barra inferior',
          type: 'point'
        },
        keyDetails: [
          { label: 'Pestaña', value: 'Cine Club' },
          { label: 'Ubicación', value: 'Barra inferior de navegación' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 502,
        stepNumber: 2,
        title: 'Explorar Planes Disponibles',
        screenTitle: 'Catálogo de Planes Cine Club',
        category: 'cartelera',
        summary: 'Cinemark ofrece dos categorías principales de membresía: Cine Club Pro (suscripción recurrente) y Cine Club Gold (anual con pago único).',
        actionRequired: 'Toca en "Ver beneficios" en la tarjeta de tu interés o desplázate para comparar.',
        detailedInstructions: [
          'Visualiza la tarjeta superior roja "CINE CLUB Pro" ($28.900 el primer mes, luego $32.500).',
          'Debajo se encuentra la tarjeta dorada "CINE CLUB Gold" ($28.900/año).',
          'Toca en "Ver beneficios" para desplegar la lista detallada de descuentos.'
        ],
        tips: [
          'Cine Club Gold es ideal para quienes van esporádicamente, mientras que Pro conviene a los cinéfilos frecuentes.'
        ],
        hotspot: {
          x: 50,
          y: 58,
          label: 'Ver Beneficios',
          actionText: 'Tocar para desplegar beneficios de la membresía',
          type: 'point'
        },
        keyDetails: [
          { label: 'Planes', value: 'Pro y Gold' },
          { label: 'Tarifa inicial Pro', value: '$28.900 COP' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 503,
        stepNumber: 3,
        title: 'Revisar Beneficios de Cine Club Gold',
        screenTitle: 'Detalle de Beneficios - Cine Club Gold',
        category: 'cartelera',
        summary: 'Conoce los descuentos de la membresía Gold: hasta 30% en boletas, 20% en combos de confitería, 10% en menú Premier y combo de cumpleaños.',
        actionRequired: 'Revisa las condiciones y presiona el botón dorado "QUIERO SER GOLD".',
        detailedInstructions: [
          'Despliega los beneficios Gold: hasta 30% off en boletas según día, hasta 20% en confitería seleccionada y regalo de cumpleaños.',
          'El costo es de solo $28.900 por un año completo.',
          'Presiona el botón "QUIERO SER GOLD" para avanzar a la contratación.'
        ],
        tips: [
          'El combo de cumpleaños es válido el día de tu cumpleaños con la compra de mínimo 1 boleta.'
        ],
        hotspot: {
          x: 50,
          y: 76.5,
          label: 'Quiero Ser Gold',
          actionText: 'Pulsar en botón "QUIERO SER GOLD"',
          type: 'point'
        },
        keyDetails: [
          { label: 'Plan', value: 'Cine Club Gold' },
          { label: 'Vigencia', value: '1 Año' },
          { label: 'Precio', value: '$28.900 COP/año' }
        ],
        imagePlaceholderName: '3.jpg'
      },
      {
        id: 504,
        stepNumber: 4,
        title: 'Revisar Beneficios de Cine Club Pro',
        screenTitle: 'Detalle de Beneficios - Cine Club Pro',
        category: 'cartelera',
        summary: 'Cine Club Pro incluye 2 boletas de regalo al mes, hasta 50% off en boletas diarias, 30% en combos, invitaciones a premieres y crispetas de bienvenida.',
        actionRequired: 'Pulsa el botón rojo "QUIERO SER PRO" para seleccionar tu plan.',
        detailedInstructions: [
          'Revisa las ventajas destacadas: 2 boletas gratis cada mes, hasta 50% de descuento en un máximo de 4 boletas por día y regalo de bienvenida.',
          'Además obtienes participación en concursos exclusivos y premieres.',
          'Toca el botón rojo "QUIERO SER PRO" para ver las modalidades de pago.'
        ],
        tips: [
          'Las 2 boletas gratis mensuales compensan con creces el valor de la suscripción.'
        ],
        hotspot: {
          x: 50,
          y: 82.5,
          label: 'Quiero Ser Pro',
          actionText: 'Pulsar en botón "QUIERO SER PRO"',
          type: 'point'
        },
        keyDetails: [
          { label: 'Plan', value: 'Cine Club Pro' },
          { label: 'Entradas gratis', value: '2 boletas/mes' }
        ],
        imagePlaceholderName: '4.jpg'
      },
      {
        id: 505,
        stepNumber: 5,
        title: 'Seleccionar Modalidad Cine Club Gold',
        screenTitle: 'Planes Cine Club Gold - Selección',
        category: 'cartelera',
        summary: 'En el plan Gold la membresía es única y anual por $28.900/año.',
        actionRequired: 'Verifica la opción "Suscripción Membresía Gold" y presiona el botón rojo "CONTINUAR".',
        detailedInstructions: [
          'Confirma la selección del plan Gold anual.',
          'En la barra inferior se refleja el valor de $28.900.',
          'Toca "CONTINUAR" para ingresar al resumen de compra.'
        ],
        tips: [
          'Esta membresía no se renueva automáticamente sin tu confirmación al cabo de un año.'
        ],
        hotspot: {
          x: 73,
          y: 92.5,
          label: 'Pulsar Continuar',
          actionText: 'Tocar CONTINUAR en la barra inferior',
          type: 'point'
        },
        keyDetails: [
          { label: 'Cobro', value: 'Anual único' },
          { label: 'Total', value: '$28.900 COP' }
        ],
        imagePlaceholderName: '5.jpg'
      },
      {
        id: 506,
        stepNumber: 6,
        title: 'Elegir Modalidad Cine Club Pro',
        screenTitle: 'Planes Cine Club Pro - Modalidades',
        category: 'cartelera',
        summary: 'Para el plan Pro puedes elegir entre varias modalidades de ahorro: 3 meses anticipados ($86.000), socio nuevo ($28.900), 6 meses ($165.000) o 1 año ($325.000).',
        actionRequired: 'Selecciona la modalidad de tu preferencia (ej: Promoción 3 meses anticipado) y pulsa "CONTINUAR".',
        detailedInstructions: [
          'Revisa las opciones: "Promoción 3 meses anticipado" ($86.000), "Socio Nuevo" ($28.900 primer mes), "Promoción 6 meses" o "Promoción 1 Año".',
          'Si tienes un código promocional, puedes ingresarlo en el campo correspondiente.',
          'Marca la opción deseada y presiona el botón rojo "CONTINUAR".'
        ],
        tips: [
          'Pagar 3 meses o 1 año por anticipado te protege contra variaciones de precio en tu suscripción.'
        ],
        hotspot: {
          x: 73,
          y: 96.5,
          label: 'Elegir y Continuar',
          actionText: 'Pulsar CONTINUAR con la opción seleccionada',
          type: 'point'
        },
        keyDetails: [
          { label: 'Modalidades', value: '1 mes, 3 meses, 6 meses, 1 año' },
          { label: 'Plan destacado', value: '3 meses anticipados ($86.000)' }
        ],
        imagePlaceholderName: '6.jpg'
      },
      {
        id: 507,
        stepNumber: 7,
        title: 'Revisión del Carrito de Compras',
        screenTitle: 'Carrito de Compras - Membresía',
        category: 'carrito',
        summary: 'Verifica el desglose oficial: Membresía Cine Club ($8.100) + Beneficios Pro ($20.800) = Total $28.900.',
        actionRequired: 'Verifica que los valores coincidan y presiona el botón rojo "CONTINUAR".',
        detailedInstructions: [
          'Se despliega el panel inferior con el resumen del pedido.',
          'Se desglosa el costo de la membresía y el valor de los beneficios del plan.',
          'Pulsa el botón "CONTINUAR" para proceder a los datos de facturación.'
        ],
        tips: [
          'Revisa que tu correo de cuenta coincida con el usuario donde deseas activar los beneficios.'
        ],
        hotspot: {
          x: 73,
          y: 92.5,
          label: 'Confirmar Carrito',
          actionText: 'Tocar CONTINUAR en el carrito',
          type: 'point'
        },
        keyDetails: [
          { label: 'Membresía base', value: '$8.100 COP' },
          { label: 'Beneficios', value: '$20.800 COP' },
          { label: 'Total final', value: '$28.900 COP' }
        ],
        imagePlaceholderName: '7.jpg'
      },
      {
        id: 508,
        stepNumber: 8,
        title: 'Datos de Facturación y Aceptación de Términos',
        screenTitle: 'Datos de Facturación',
        category: 'facturacion',
        summary: 'Ingreso obligatorio de tus datos personales para emisión del comprobante y vinculación de la membresía.',
        actionRequired: 'Diligencia tus datos, marca los dos checkboxes obligatorios de términos y presiona "CONTINUAR".',
        detailedInstructions: [
          'Ingresa tus Nombres, Apellidos, Tipo y Número de Documento (Cédula).',
          'Completa Ciudad, Dirección, Celular y Correo electrónico.',
          'Marca obligatoriamente: [✓] "Acepto los términos y condiciones" y [✓] "Acepto el tratamiento de datos personales".',
          'Presiona el botón rojo "CONTINUAR" en la barra inferior.'
        ],
        tips: [
          'Asegúrate de que el correo electrónico esté bien escrito, pues allí se te confirmará la activación de la membresía.'
        ],
        hotspot: {
          x: 78,
          y: 91.5,
          label: 'Pulsar Continuar',
          actionText: 'Completar datos y tocar CONTINUAR',
          type: 'point'
        },
        keyDetails: [
          { label: 'Campos requeridos', value: 'Nombres, Cédula, Correo, Celular' },
          { label: 'Habeas Data', value: 'Aceptación obligatoria' }
        ],
        imagePlaceholderName: '8.jpg'
      },
      {
        id: 509,
        stepNumber: 9,
        title: 'Selección de Medio de Pago',
        screenTitle: 'Medios de Pago Disponibles',
        category: 'pagos',
        summary: 'Elige tu método de pago preferido para pagar la membresía: Tarjeta de crédito/débito o PSE.',
        actionRequired: 'Toca sobre la opción de "PSE" (o "Tarjeta crédito / débito") y presiona "PAGAR".',
        detailedInstructions: [
          'Selecciona entre "Tarjeta crédito / débito" (para pago recurrente o plásticos Visa/Mastercard) o "PSE" (débito a cuenta de ahorros).',
          'Toca sobre la opción de tu preferencia.',
          'Presiona el botón "PAGAR" para abrir la pasarela correspondiente.'
        ],
        tips: [
          'Para membresías con cobro mensual recurrente, la tarjeta de crédito permite renovación automática sin cortes.'
        ],
        hotspot: {
          x: 50,
          y: 81.5,
          label: 'Elegir PSE / Tarjeta',
          actionText: 'Seleccionar método y tocar PAGAR',
          type: 'point'
        },
        keyDetails: [
          { label: 'Opciones', value: 'Tarjeta Crédito/Débito y PSE' }
        ],
        imagePlaceholderName: '9.jpg'
      },
      {
        id: 510,
        stepNumber: 10,
        title: 'Pago con Tarjeta de Crédito / Débito',
        screenTitle: 'Tarjeta Crédito / Débito',
        category: 'tarjetas',
        summary: 'Formulario seguro para procesar el pago con tarjeta bancaria.',
        actionRequired: 'Ingresa el nombre del titular, 16 dígitos, fecha de vencimiento (MM/AA), código CVV y cuotas.',
        detailedInstructions: [
          'Digita el nombre del titular exactamente como aparece en la tarjeta.',
          'Introduce los 16 dígitos y la fecha de expiración.',
          'Ingresa el código de seguridad (CVV) al reverso del plástico.',
          'Selecciona 1 cuota (sin intereses) y presiona "PAGAR".'
        ],
        tips: [
          'Puedes marcar "Quiero guardar esta tarjeta para mi próxima compra" para renovaciones en 1 solo clic.'
        ],
        hotspot: {
          x: 80,
          y: 91.5,
          label: 'Pulsar PAGAR',
          actionText: 'Tocar PAGAR para procesar la tarjeta',
          type: 'point'
        },
        keyDetails: [
          { label: 'Seguridad', value: 'Cifrado bancario PCI-DSS' }
        ],
        imagePlaceholderName: '10.jpg'
      },
      {
        id: 511,
        stepNumber: 11,
        title: 'Pago con PSE - Datos y Banco',
        screenTitle: 'PSE - Pagos Seguros en Línea',
        category: 'pse',
        summary: 'Configuración de pago directo a través de cuentas bancarias y billeteras virtuales de Colombia.',
        actionRequired: 'Toca sobre el selector "A continuación seleccione su banco" para desplegar la lista.',
        detailedInstructions: [
          'Deja marcada la casilla [✓] "Usar mismos datos de facturación".',
          'Toca el campo desplegable "Banco *" para seleccionar tu entidad financiera.',
          'Presiona el botón rojo "PAGAR" para conectar con la pasarela bancaria.'
        ],
        tips: [
          'Debes tener una cuenta registrada previamente en el portal de PSE con tu correo electrónico.'
        ],
        hotspot: {
          x: 50,
          y: 86.5,
          label: 'Selector de Banco',
          actionText: 'Tocar selector para abrir bancos',
          type: 'point'
        },
        keyDetails: [
          { label: 'Operador', value: 'ACH Colombia (PSE)' }
        ],
        imagePlaceholderName: '11.jpg'
      },
      {
        id: 512,
        stepNumber: 12,
        title: 'Seleccionar Entidad Bancaria y Finalizar',
        screenTitle: 'Listado de Bancos y Billeteras PSE',
        category: 'pse',
        summary: 'Elige tu entidad (Nequi, Nu, Davivienda, Bancolombia, etc.) y autoriza la transacción.',
        actionRequired: 'Toca sobre tu banco o billetera (ej: NEQUI o NU) y pulsa "PAGAR" para confirmar la suscripción.',
        detailedInstructions: [
          'Desplázate en la lista y pulsa sobre tu entidad (ej: NEQUI, NU, LULO, BANCOLOMBIA).',
          'Toca el botón rojo "PAGAR" en la parte inferior.',
          'Aprueba la notificación push en tu celular dentro de los 5 minutos siguientes.',
          '¡Listo! Tu membresía Cine Club quedará activa de inmediato y podrás disfrutar de boletas con descuento y combos exclusivos.'
        ],
        tips: [
          'Una vez aprobado el pago, tus beneficios de Cine Club se reflejarán automáticamente en tu perfil.'
        ],
        hotspot: {
          x: 35,
          y: 55.5,
          label: 'Elegir NEQUI / NU',
          actionText: 'Seleccionar entidad y presionar PAGAR',
          type: 'point'
        },
        keyDetails: [
          { label: 'Entidades disponibles', value: 'Lulo, Nequi, Nu, Bancolombia...' },
          { label: 'Resultado', value: 'Membresía Cine Club activa' }
        ],
        imagePlaceholderName: '12.jpg'
      }
    ]
  },
  {
    id: 'compra-boletas-confiteria',
    title: 'Compra de Boletas y Confitería',
    shortDescription: 'Aprende a elegir película, formato XD/Premier, asientos en sala, combos de comida y pagar con PSE o tarjeta.',
    fullDescription: 'Guía oficial interactiva paso a paso para la aplicación móvil de Cinemark. Domina todo el flujo de compra desde la cartelera hasta la pasarela de pagos segura.',
    category: 'Boletas',
    badge: 'Módulo Principal',
    durationMinutes: 6,
    difficulty: 'Principiante',
    totalSteps: 13,
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
        actionRequired: 'Desliza hacia abajo para explorar los estrenos y títulos en cartelera.',
        detailedInstructions: [
          'Al abrir la app de Cinemark te encontrarás en la pestaña principal de Cartelera.',
          'En la parte superior puedes elegir entre "Cartelera por cine" o "Seleccionar cine" para filtrar según tu teatro preferido.',
          'Haz scroll hacia abajo para descubrir los estrenos de la semana y contenido destacado.'
        ],
        tips: [
          'Si inicias sesión con tu cuenta de Cinemark guardas tu historial y agilizas tus compras.'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Desliza hacia abajo (Scroll)',
          actionText: 'Hacer scroll hacia abajo para ver estrenos',
          type: 'scroll-down'
        },
        keyDetails: [
          { label: 'Pestaña activa', value: 'Cartelera' },
          { label: 'Formato destacado', value: 'Salas XD y 2D' }
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
        actionRequired: 'Desliza hacia abajo para revisar la programación, preventas y formatos de proyección.',
        detailedInstructions: [
          'La app muestra la ficha con la carátula oficial y el estado (ESTRENO o PREVENTA).',
          'Al deslizar hacia abajo verás las preventas y títulos asociados.',
          'Continúa bajando para pasar a la cartelera y formatos.'
        ],
        tips: [
          'Los estrenos con alta demanda suelen habilitar salas XD y formatos especiales con días de anticipación.'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Desliza hacia abajo (Scroll)',
          actionText: 'Hacer scroll hacia abajo para ver preventas',
          type: 'scroll-down'
        },
        keyDetails: [
          { label: 'Estado', value: 'Estreno Oficial' }
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
          'Cada película cuenta con su distintivo de clasificación: "15-A", "12-A" o "Todos".',
          'Al desplazarte hacia abajo encontrarás la sección "PRÓXIMOS ESTRENOS" para agendar tus visitas futuras.'
        ],
        tips: [
          'Las clasificaciones 12-A y 15-A requieren que los menores ingresen acompañados de un adulto responsable.'
        ],
        hotspot: {
          x: 50,
          y: 40,
          label: 'Clasificaciones y Horas',
          actionText: 'Observar sellos informativos 12-A / 15-A',
          type: 'point'
        },
        keyDetails: [
          { label: 'Clasificaciones visibles', value: '15-A, 12-A, Todos' }
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
          'Se especifica el cine actual ("PACIFIC MALL").',
          'Cada función detalla sus formatos: "3D INFINITY VISION XD PREMIER" o "2D PREMIER", además del idioma.',
          'Toca el botón con la hora deseada (ej: [17:35]) para avanzar directamente a la selección de tarifas.'
        ],
        tips: [
          'Las salas XD cuentan con pantalla gigante de 4 pisos y sonido envolvente de alta potencia.'
        ],
        hotspot: {
          x: 15,
          y: 74,
          label: 'Horario [17:35]',
          actionText: 'Pulsar en el botón del horario 17:35',
          type: 'point'
        },
        keyDetails: [
          { label: 'Cine seleccionado', value: 'Pacific Mall (Cali)' },
          { label: 'Horario', value: '17:35 (5:35 PM)' }
        ],
        imagePlaceholderName: '4.jpg'
      },
      {
        id: 5,
        stepNumber: 5,
        title: 'Selección de Boletas y Tarifas',
        screenTitle: 'Avengers: Endgame Bon - Tarifas',
        category: 'boletas',
        summary: 'Configuración de tipos de boleta, promociones de tarjetas aliadas (AMEX 2x1) y descuentos de membresía.',
        actionRequired: 'Usa los botones (+) y (-) para seleccionar el número de boletas deseado y luego presiona "CONTINUAR".',
        detailedInstructions: [
          'Elige tu tipo de boleta (ej: "BOLETA XD PREMIER 3D" por $32.250 o tarifa 2x1 si cumples requisitos).',
          'Al seleccionar al menos 1 boleta, la barra inferior roja se iluminará mostrando el monto acumulado.',
          'Presiona el botón "CONTINUAR" para pasar a la selección de tus asientos en sala.'
        ],
        tips: [
          'Si vas en pareja y pagas con tarjeta American Express, la opción "2X1 AMEX" te permite pagar solo 1 entrada.'
        ],
        hotspot: {
          x: 80,
          y: 91.5,
          label: 'Pulsar Continuar',
          actionText: 'Tocar CONTINUAR en la barra inferior',
          type: 'point'
        },
        keyDetails: [
          { label: 'Tarifa seleccionada', value: 'BOLETA XD PREMIER 3D' }
        ],
        imagePlaceholderName: '5.jpg'
      },
      {
        id: 6,
        stepNumber: 6,
        title: 'Selección de Asientos en la Sala',
        screenTitle: 'Ubicación en sala - Pacific Mall Sala 5',
        category: 'asientos',
        summary: 'Mapa interactivo de la sala para elegir tus butacas frente a la pantalla con cronómetro de retención.',
        actionRequired: 'Toca la silla disponible que prefieras (aparecerá en verde con tu código de butaca, ej: A6) y pulsa "CONTINUAR".',
        detailedInstructions: [
          'En la parte superior se ilustra la curva de la "Pantalla" para orientar la vista.',
          'Código de colores: Gris (Ocupada), Verde (Tu selección actual), Borde dorado (Sillas Premier).',
          'En la sección inferior se confirma tu butaca elegida (ej: A6).'
        ],
        tips: [
          'Las butacas de las filas centrales ofrecen la mejor simetría visual y acústica.'
        ],
        warnings: [
          '¡Atención al cronómetro! Si se agotan los 10 minutos asignados, el sistema liberará los asientos.'
        ],
        timerNotice: '09:35 restantes',
        hotspot: {
          x: 40,
          y: 31.5,
          label: 'Butaca [A6]',
          actionText: 'Tocar la butaca A6 en el plano',
          type: 'point'
        },
        keyDetails: [
          { label: 'Sala', value: 'Sala 5 - Pacific Mall' },
          { label: 'Asiento seleccionado', value: 'A6 (Premier)' }
        ],
        imagePlaceholderName: '6.jpg'
      },
      {
        id: 7,
        stepNumber: 7,
        title: 'Confitería y Alimentos Premier',
        screenTitle: 'Avengers: Endgame Bon - Confitería',
        category: 'confiteria',
        summary: 'Menú gastronómico para añadir hamburguesas gourmet, combos de crispetas, gaseosas o coleccionables a tu orden.',
        actionRequired: 'Si deseas snacks o comida, pulsa el botón (+) en el producto deseado (ej: Hamburguesa Callejera) o presiona "CONTINUAR".',
        detailedInstructions: [
          'Cinemark cuenta con categorías: MENU, COLECCIONABLES, COMBOS y CRISPETAS.',
          'En salas Premier se ofrece cocina caliente directa a tu asiento.',
          'Este paso es opcional: si no deseas comida puedes simplemente presionar "CONTINUAR".'
        ],
        tips: [
          'Comprar comida desde la app te ahorra filas en la confitería tradicional.'
        ],
        hotspot: {
          x: 88.5,
          y: 45.5,
          label: 'Agregar Alimento (+)',
          actionText: 'Tocar (+) en Hamburguesa Callejera',
          type: 'point'
        },
        keyDetails: [
          { label: 'Plato sugerido', value: 'Hamburguesa Callejera ($38.000)' }
        ],
        imagePlaceholderName: '7.jpg'
      },
      {
        id: 8,
        stepNumber: 8,
        title: 'Resumen de Carrito y Cargos por Servicio',
        screenTitle: 'Carrito de compras - Pacific Mall',
        category: 'carrito',
        summary: 'Revisión final de ítems, fecha, hora, sala, sillas, cargos por servicio en línea y costo consolidado.',
        actionRequired: 'Verifica meticulosamente la fecha, hora, sala y asientos elegidos. Si todo es correcto, pulsa "CONTINUAR".',
        detailedInstructions: [
          'La ventana desglosa: Boleta XD Premier 3D ($32.250) + Hamburguesa ($38.000) = Subtotal $70.250.',
          'Transparencia tarifaria: Se detalla el cargo por servicio de confitería ($1.600) y de boleta ($1.600).',
          'El total consolidado es de $73.450 COP.'
        ],
        tips: [
          'Verifica dos veces la fecha y sala antes de proceder al pago.'
        ],
        hotspot: {
          x: 80,
          y: 91.5,
          label: 'Confirmar y Continuar',
          actionText: 'Tocar en CONTINUAR',
          type: 'point'
        },
        keyDetails: [
          { label: 'Total final a pagar', value: '$73.450 COP' }
        ],
        imagePlaceholderName: '8.jpg'
      },
      {
        id: 9,
        stepNumber: 9,
        title: 'Datos de Facturación y Términos',
        screenTitle: 'Avengers: Endgame Bon - Pago (Facturación)',
        category: 'facturacion',
        summary: 'Ingreso obligatorio de datos del titular para emisión de factura legal y envío de las entradas QR al correo.',
        actionRequired: 'Diligencia tus nombres, cédula, dirección, teléfono y correo electrónico. Marca las dos casillas obligatorias y pulsa "CONTINUAR".',
        detailedInstructions: [
          'Ingresa tus Nombres y Apellidos completos.',
          'Ingresa tu Cédula de Ciudadanía, Ciudad (Cali) y Celular.',
          'Revisa con especial cuidado el correo electrónico: allí se enviarán las boletas con código QR de acceso.',
          'Marca obligatoriamente las dos casillas de Términos y Tratamiento de datos personales.'
        ],
        warnings: [
          'Si escribes mal tu correo electrónico no recibirás el código QR de entrada a las salas.'
        ],
        tips: [
          'Si iniciaste sesión previamente, estos datos se rellenarán automáticamente.'
        ],
        hotspot: {
          x: 80,
          y: 91.5,
          label: 'Pulsar Continuar',
          actionText: 'Marcar casillas de términos y pulsar CONTINUAR',
          type: 'point'
        },
        keyDetails: [
          { label: 'Documento registrado', value: 'Cédula de ciudadanía' }
        ],
        imagePlaceholderName: '9.jpg'
      },
      {
        id: 10,
        stepNumber: 10,
        title: 'Selección del Medio de Pago',
        screenTitle: 'Medios de pago disponibles',
        category: 'pagos',
        summary: 'Menú con las alternativas autorizadas por Cinemark Colombia para procesar la transacción.',
        actionRequired: 'Toca sobre "Tarjeta crédito / débito" o sobre "PSE" según el método con el que desees pagar.',
        detailedInstructions: [
          '1. "Tarjeta crédito / débito": Visa, Mastercard, American Express o Diners.',
          '2. "PSE": Para pagos directos con débito a cuentas de ahorros colombianas o billeteras (Nequi, Daviplata, Nu).',
          'Pulsa sobre PSE para transferir de forma rápida sin costo de tarjeta.'
        ],
        tips: [
          'PSE no genera costos bancarios de comisión adicionales.'
        ],
        hotspot: {
          x: 50,
          y: 82,
          label: 'Opción PSE',
          actionText: 'Pulsar en la tarjeta de pago PSE',
          type: 'point'
        },
        keyDetails: [
          { label: 'Métodos disponibles', value: 'Tarjeta Crédito/Débito y PSE' }
        ],
        imagePlaceholderName: '10.jpg'
      },
      {
        id: 11,
        stepNumber: 11,
        title: 'Pago con Tarjeta de Crédito / Débito',
        screenTitle: 'Tarjeta crédito / débito',
        category: 'tarjetas',
        summary: 'Formulario seguro para procesar cobros con tarjeta bancaria nacional o internacional.',
        actionRequired: 'Escribe el nombre del titular, los 16 dígitos, fecha de vencimiento (MM/AA), código de seguridad (CVV) y cuotas.',
        detailedInstructions: [
          'Nombre del titular: tal como aparece en el plástico.',
          'Número de tarjeta: los 16 dígitos continuos.',
          'Fecha de vencimiento y CVV (código de 3 o 4 dígitos al respaldo).',
          'Selecciona 1 cuota para evitar intereses bancarios.',
          'Presiona el botón rojo "PAGAR" para procesar la transacción.'
        ],
        tips: [
          'Tu entidad bancaria puede solicitarte una clave dinámica o código SMS de confirmación.'
        ],
        hotspot: {
          x: 80,
          y: 91.5,
          label: 'Botón PAGAR',
          actionText: 'Tocar en PAGAR para procesar el débito',
          type: 'point'
        },
        keyDetails: [
          { label: 'Cuotas habituales', value: '1 cuota (sin intereses)' }
        ],
        imagePlaceholderName: '11.jpg'
      },
      {
        id: 12,
        stepNumber: 12,
        title: 'Pago con PSE (Pagos Seguros en Línea)',
        screenTitle: 'PSE - Pagos Seguros en Línea',
        category: 'pse',
        summary: 'Configuración para pago directo desde cuentas bancarias y billeteras de Colombia a través de ACH PSE.',
        actionRequired: 'Deja seleccionada la casilla "Usar mismos datos de facturación" y toca sobre el campo "Banco" para abrir el listado.',
        detailedInstructions: [
          'Se despliega el sello oficial de ACH PSE.',
          'La casilla [✓] "Usar mismos datos de facturación" traslada automáticamente tus datos a la pasarela bancaria.',
          'Toca el selector "A continuación seleccione su banco" para desplegar la lista de instituciones financieras.'
        ],
        tips: [
          'Debes estar registrado previamente en el portal de PSE con tu correo electrónico personal.'
        ],
        hotspot: {
          x: 50,
          y: 86,
          label: 'Selector de Banco',
          actionText: 'Tocar el campo para desplegar bancos',
          type: 'point'
        },
        keyDetails: [
          { label: 'Operador', value: 'ACH Colombia (PSE)' }
        ],
        imagePlaceholderName: '12.jpg'
      },
      {
        id: 13,
        stepNumber: 13,
        title: 'Selección de Banco o Billetera en PSE',
        screenTitle: 'Seleccionar Entidad Bancaria PSE',
        category: 'pse',
        summary: 'Listado de neobancos, billeteras y bancos colombianos (Nequi, Nu, Bancolombia, Davivienda, etc.).',
        actionRequired: 'Selecciona tu banco (ej: NEQUI o NU) y pulsa "PAGAR" para ser redirigido a la banca en línea y confirmar la transacción.',
        detailedInstructions: [
          'La lista incluye opciones como NEQUI, NU, LULO, BANCOLOMBIA, DAVIVIENDA, entre otros.',
          'Toca tu entidad para marcarla.',
          'Al pulsar el botón rojo "PAGAR", la app te redirige a tu banco para que apruebes el débito.',
          '¡Listo! Recibirás en pantalla y en tu correo el código QR para ingresar a la sala.'
        ],
        tips: [
          'En el caso de Nequi o Daviplata, aprueba la notificación push en tu celular dentro de los primeros 5 minutos.'
        ],
        hotspot: {
          x: 30,
          y: 55.5,
          label: 'Elegir NEQUI / NU',
          actionText: 'Tocar sobre la entidad y confirmar con PAGAR',
          type: 'point'
        },
        keyDetails: [
          { label: 'Paso final', value: 'Aprobación en tu banco y descarga de Boleta QR' }
        ],
        imagePlaceholderName: '13.jpg'
      }
    ]
  },
  {
    id: 'atencion-soporte-pqrsf',
    title: 'Atención al Cliente, PQRSF y Soporte',
    shortDescription: 'Aprende a radicar consultas, solicitar ayuda por boletas no recibidas y gestionar PQRSF desde el menú de la app.',
    fullDescription: 'Guía oficial para acceder al Centro de Ayuda y PQRSF integrado en Cinemark Colombia. Conoce cómo abrir el menú principal, ingresar a la opción de Soporte, desplegar el selector de solicitudes en Zendesk y radicar tu caso.',
    category: 'Cuenta y Pagos',
    badge: 'Ayuda & PQRSF',
    durationMinutes: 3,
    difficulty: 'Principiante',
    totalSteps: 4,
    isAvailable: true,
    iconName: 'Headphones',
    steps: [
      {
        id: 401,
        stepNumber: 1,
        title: 'Abrir el Menú Principal',
        screenTitle: 'Pantalla de Inicio - Pestaña Menú',
        category: 'cartelera',
        summary: 'En la pantalla de inicio ubica la barra de navegación inferior para desplegar las opciones generales de la aplicación.',
        actionRequired: 'Toca el ícono de "Menú" en la esquina inferior derecha.',
        detailedInstructions: [
          'En la barra inferior de la pantalla ubica la esquina derecha.',
          'Localiza el ícono con las tres líneas horizontales titulado "Menú".',
          'Púlsalo para desplegar las opciones de cuenta, formatos y servicio al cliente.'
        ],
        tips: [
          'Desde esta barra siempre puedes regresar a la Cartelera o a tus compras.'
        ],
        hotspot: {
          x: 90,
          y: 90.5,
          label: 'Tocar Menú',
          actionText: 'Pulsar Menú en la esquina inferior derecha',
          type: 'point'
        },
        keyDetails: [
          { label: 'Pestaña', value: 'Menú General' },
          { label: 'Ubicación', value: 'Esquina inferior derecha' }
        ],
        imagePlaceholderName: '1.jpg'
      },
      {
        id: 402,
        stepNumber: 2,
        title: 'Seleccionar la Opción de Soporte',
        screenTitle: 'Menú Desplegable - Opciones',
        category: 'cartelera',
        summary: 'El panel inferior muestra las opciones institucionales y de configuración de Cinemark.',
        actionRequired: 'Toca sobre la opción "Soporte" (la última opción con ícono de audífonos).',
        detailedInstructions: [
          'En la lista de opciones (Perfil/Registro, Formatos, Promociones, Marketing Empresarial, Soporte) desplázate hasta la última fila.',
          'Toca sobre la tarjeta "Soporte".',
          'La aplicación abrirá de forma segura el portal web de atención al cliente de Cinemark.'
        ],
        tips: [
          'Este canal está conectado directamente con el equipo de servicio al cliente de Cinemark Colombia.'
        ],
        hotspot: {
          x: 50,
          y: 81.5,
          label: 'Opción Soporte',
          actionText: 'Tocar la opción Soporte',
          type: 'point'
        },
        keyDetails: [
          { label: 'Servicio', value: 'Soporte y PQRSF' },
          { label: 'Canal', value: 'Portal de Ayuda Integrado' }
        ],
        imagePlaceholderName: '2.jpg'
      },
      {
        id: 403,
        stepNumber: 3,
        title: 'Seleccionar el Tipo de Formulario',
        screenTitle: 'Zendesk Cinemark - Enviar una Solicitud',
        category: 'cartelera',
        summary: 'El portal de soporte requiere categorizar tu solicitud para asignarla al departamento correspondiente.',
        actionRequired: 'Toca sobre el selector de formulario (la caja con el guion "-") para desplegar las opciones.',
        detailedInstructions: [
          'Revisa las notas importantes: verificar tu correo electrónico para que tu solicitud no quede suspendida.',
          'Ubica la caja de selección que muestra un guion "-".',
          'Tócala para abrir la lista desplegable con los tipos de inconvenientes.'
        ],
        tips: [
          'No olvides tener a la mano el correo electrónico con el que compraste tus entradas.'
        ],
        hotspot: {
          x: 50,
          y: 60,
          label: 'Selector de Formulario',
          actionText: 'Tocar selector para abrir opciones',
          type: 'point'
        },
        keyDetails: [
          { label: 'Plataforma', value: 'Zendesk Oficial Cinemark' },
          { label: 'Requisito', value: 'Verificar correo' }
        ],
        imagePlaceholderName: '3.jpg'
      },
      {
        id: 404,
        stepNumber: 4,
        title: 'Elegir el Motivo de la Solicitud',
        screenTitle: 'Opciones de Soporte Disponibles',
        category: 'cartelera',
        summary: 'Selecciona la categoría exacta de tu consulta para radicar tu caso.',
        actionRequired: 'Toca sobre la opción "No recibí las boletas." o "PQRSF Cinemark Colombia."',
        detailedInstructions: [
          'Entre las opciones verás: Cine Club PRO/GOLD, Soporte - Compras Online, No recibí las boletas, PQRSF Cinemark Colombia o Ventas Corporativas.',
          'Si realizaste el pago y no llegaron tus entradas digitales, selecciona "No recibí las boletas." para atención prioritaria.',
          '¡Listo! Luego solo deberás escribir tu número de transacción o cédula para que Cinemark te dé respuesta.'
        ],
        tips: [
          'Las solicitudes radicadas como "No recibí las boletas" cuentan con tiempo de respuesta prioritario.'
        ],
        hotspot: {
          x: 40,
          y: 67.5,
          label: 'No recibí las boletas',
          actionText: 'Elegir motivo de la solicitud',
          type: 'point'
        },
        keyDetails: [
          { label: 'Opciones clave', value: 'No recibí las boletas / PQRSF' },
          { label: 'Atención', value: 'Ticket digital con radicado' }
        ],
        imagePlaceholderName: '4.jpg'
      }
    ]
  }
];

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
    question: '¿Qué ventaja ofrece comprar la confitería directamente en la aplicación junto con las boletas?',
    options: [
      'La comida se envía a domicilio antes de salir de casa',
      'Permite reclamar en la barra express sin hacer filas tradicionales en el teatro',
      'Es obligatorio para poder ingresar a la sala',
      'Solo se pueden comprar crispetas de sal'
    ],
    correctIndex: 1,
    explanation: 'Al ordenar tus combos y confitería en la app, tu pedido se procesa previamente y puedes reclamarlo directamente en la barra rápida express del complejo.'
  },
  {
    id: 10,
    question: '¿Qué paso previo debes realizar si al abrir la aplicación aparece una publicidad emergente de Cine Club?',
    options: [
      'Apagar y reiniciar el teléfono',
      'Pulsar el botón "X" en la esquina superior derecha del anuncio para cerrarlo y acceder a las funciones',
      'Comprar obligatoriamente la membresía Gold',
      'Esperar 15 minutos a que desaparezca sola'
    ],
    correctIndex: 1,
    explanation: 'La aplicación muestra un pop-up inicial de Cine Club que debe cerrarse pulsando la "X" en la esquina superior derecha para poder acceder a la pantalla principal e inicio de sesión.'
  }
];