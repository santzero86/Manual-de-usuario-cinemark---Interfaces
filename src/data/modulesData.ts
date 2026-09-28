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
          'Asegúrate de contar con conexión a Wi-Fi o datos móviles activos.',
          'Verifica tener espacio suficiente de almacenamiento (aprox. 50 MB libres).'
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
          { label: 'Término de búsqueda', value: 'cinemark' },
          { label: 'Categoría', value: 'Entretenimiento' }
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
          'Evita descargar versiones de otros países como Centroamérica o Chile para que puedas consultar las salas de Cali y Colombia.'
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
          { label: 'Peso descarga', value: '17 MB' },
          { label: 'Calificación', value: '4.3 estrellas' }
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
          { label: 'Acción', value: 'Descarga e Instalación' },
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
          'El estado cambiará de "Descargando..." a "Instalando...".',
          'No cierres la tienda hasta que termine la instalación.'
        ],
        tips: [
          'Puedes activar la casilla "Abrir automáticamente al terminar" si lo deseas.'
        ],
        hotspot: {
          x: 35,
          y: 18.5,
          label: 'Instalando...',
          actionText: 'Tocar para avanzar',
          type: 'point'
        },
        keyDetails: [
          { label: 'Estado', value: 'Instalando en segundo plano' }
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
          'Púlsalo para iniciar la app por primera vez.',
          'También se habrá creado un acceso directo en tu menú de aplicaciones.'
        ],
        tips: [
          'A partir de ahora podrás ingresar directamente tocando el ícono de Cinemark en tu pantalla de inicio.'
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
          'Lee el mensaje: "¿Permitir que Cinemark Colombia te envíe notificaciones?".',
          'Toca el botón "Permitir" para que te avisen con antelación el inicio de tu película o promociones de combos.'
        ],
        tips: [
          'Permitir notificaciones es muy útil para recibir alertas si hay cambios de sala o cuando tu pedido de confitería express esté listo.'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Pulsar Permitir',
          actionText: 'Tocar Permitir notificaciones',
          type: 'point'
        },
        keyDetails: [
          { label: 'Permiso', value: 'Notificaciones Push' },
          { label: 'Recomendación', value: 'Permitir' }
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
          'Se mostrará la ventana emergente de bienvenida con la promoción de "Boletas Gratis por Comprar o Renovar".',
          'Ubica el círculo blanco con la "X" roja en la esquina superior derecha.',
          'Púlsala firmemente para cerrar el anuncio y acceder a la cartelera de películas de Cinemark.'
        ],
        tips: [
          '¡Listo! Ya tienes la app instalada y configurada. Ahora puedes continuar con los módulos de Registro de Cuenta o Compra de Boletas.'
        ],
        hotspot: {
          x: 85,
          y: 24,
          label: 'Cerrar Pop-up (X)',
          actionText: 'Tocar la X para entrar a la app',
          type: 'point'
        },
        keyDetails: [
          { label: 'Estado final', value: 'App lista y navegable' },
          { label: 'Siguiente paso sugerido', value: 'Iniciar sesión o elegir película' }
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
          y: 90,
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
          x: 75,
          y: 76,
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
          y: 96,
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
    id: 'atencion-soporte-pqrsf',
    title: 'Atención al Cliente, PQRSF y Soporte',
    shortDescription: 'Aprende a radicar consultas, solicitar reembolsos y resolver inquietudes sobre boletas desde el menú de la app.',
    fullDescription: 'Guía oficial para acceder al Centro de Ayuda y PQRSF integrado en Cinemark Colombia. Conoce cómo abrir el menú principal, ingresar al soporte Zendesk oficial, seleccionar tu requerimiento (No recibí las boletas, compras online) y radicar tu caso.',
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
        actionRequired: 'Toca sobre la opción "Soporte" (con ícono de diadema/auriculares).',
        detailedInstructions: [
          'En la lista de opciones (Perfil, Formatos, Promociones, Marketing Empresarial, Soporte) desplázate hasta la última fila.',
          'Toca sobre "Soporte".',
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
        imagePlaceholderName: '2.jpeg'
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
          y: 59.5,
          label: 'Selector de Formulario',
          actionText: 'Tocar selector para abrir opciones',
          type: 'point'
        },
        keyDetails: [
          { label: 'Plataforma', value: 'Zendesk Oficial Cinemark' },
          { label: 'Requisito', value: 'Verificar correo' }
        ],
        imagePlaceholderName: '3.jpeg'
      },
      {
        id: 404,
        stepNumber: 4,
        title: 'Elegir el Motivo de la Solicitud',
        screenTitle: 'Opciones de Soporte Disponibles',
        category: 'cartelera',
        summary: 'Selecciona la categoría exacta de tu consulta para radicar tu caso.',
        actionRequired: 'Toca sobre la opción correspondiente a tu caso, por ejemplo "No recibí las boletas." o "PQRSF Cinemark Colombia."',
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
          'Si inicias sesión con tu cuenta de Cinemark guardas tu historial y agilizas tus compras.',
          'No es estrictamente obligatorio iniciar sesión: puedes continuar el flujo y completar tus datos en el paso de facturación.'
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
        actionRequired: 'Desliza hacia abajo para revisar la programación, preventas y formatos de proyección.',
        detailedInstructions: [
          'La app muestra la ficha con la carátula oficial y el estado (ESTRENO o PREVENTA).',
          'Al deslizar hacia abajo verás las preventas y títulos asociados.',
          'Continúa bajando para pasar a la cartelera y formatos.'
        ],
        tips: [
          'Los estrenos con alta demanda suelen habilitar salas XD y formatos especiales con días de anticipación.',
          'Verifica si el evento es un reestreno especial con contenido adicional ("Bonus").'
        ],
        hotspot: {
          x: 50,
          y: 84,
          label: 'Desliza hacia abajo (Scroll)',
          actionText: 'Hacer scroll hacia abajo para ver preventas',
          type: 'scroll-down'
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
          'Cada película cuenta con su distintivo de clasificación: "15-A", "12-A" o "Todos".',
          'Al desplazarte hacia abajo encontrarás la sección "PRÓXIMOS ESTRENOS" para agendar tus visitas futuras.'
        ],
        tips: [
          'Las clasificaciones 12-A y 15-A requieren que los menores ingresen acompañados de un adulto responsable.',
          'Ten presente la duración total de la película para organizar tu transporte y parqueadero.'
        ],
        hotspot: {
          x: 58,
          y: 42,
          label: 'Clasificaciones y Horas',
          actionText: 'Observar sellos informativos 12-A / 15-A',
          type: 'point'
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
          'Se especifica el cine actual ("PACIFIC MALL").',
          'Cada función detalla sus formatos: "3D INFINITY VISION XD PREMIER" o "2D PREMIER", además del idioma.',
          'Toca el botón con la hora deseada (ej: [17:35]) para avanzar directamente a la selección de tarifas.'
        ],
        tips: [
          'Las salas XD cuentan con pantalla gigante de 4 pisos y sonido envolvente de alta potencia.',
          'Las funciones Premier cuentan con silletería de cuero reclinable.'
        ],
        hotspot: {
          x: 33,
          y: 77.5,
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
        id: 6,
        stepNumber: 5,
        title: 'Selección de Boletas y Tarifas',
        screenTitle: 'Avengers: Endgame Bon - Tarifas',
        category: 'boletas',
        summary: 'Configuración de tipos de boleta, promociones de tarjetas aliadas (AMEX 2x1) y descuentos de membresía.',
        actionRequired: 'Usa los botones (+) y (-) para seleccionar el número de boletas deseado y luego presiona "CONTINUAR".',
        detailedInstructions: [
          'En la parte superior se destacan las membresías Cine Club Gold y Pro para obtener tarifas preferenciales.',
          'Elige tu tipo de boleta (ej: "BOLETA XD PREMIER 3D" por $32.250 o tarifa 2x1 si cumples requisitos).',
          'Al seleccionar al menos 1 boleta, la barra inferior roja se iluminará mostrando el monto acumulado.',
          'Presiona el botón "CONTINUAR" para pasar a la selección de tus asientos en sala.'
        ],
        tips: [
          'Si vas en pareja y pagas con tarjeta American Express, la opción "2X1 AMEX" te permite pagar solo 1 entrada.',
          'En la pestaña "CINEBONO" puedes canjear códigos corporativos o tarjetas de regalo.'
        ],
        hotspot: {
          x: 91,
          y: 73,
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
        stepNumber: 6,
        title: 'Selección de Asientos en la Sala',
        screenTitle: 'Ubicación en sala - Pacific Mall Sala 5',
        category: 'asientos',
        summary: 'Mapa interactivo de la sala para elegir tus butacas frente a la pantalla con cronómetro de retención.',
        actionRequired: 'Toca la silla disponible que prefieras (aparecerá en verde con tu código de butaca, ej: A6) y pulsa "CONTINUAR".',
        detailedInstructions: [
          'En la parte superior se ilustra la curva de la "Pantalla" para orientar la vista.',
          'Código de colores: Gris (Ocupada), Verde (Tu selección actual), Borde dorado (Sillas Premier).',
          'En la sección inferior se confirma tu butaca elegida (ej: A6).',
          'Tienes un contador regresivo de 10 minutos para finalizar antes de que los asientos se liberen al público.'
        ],
        tips: [
          'Las butacas de las filas centrales ofrecen la mejor simetría visual y acústica.',
          'Para personas con movilidad reducida existen espacios designados con rampa de acceso directo.'
        ],
        warnings: [
          '¡Atención al cronómetro! Si se agotan los 10 minutos asignados, el sistema liberará los asientos.'
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
        stepNumber: 7,
        title: 'Confitería y Alimentos Premier',
        screenTitle: 'Avengers: Endgame Bon - Confitería',
        category: 'confiteria',
        summary: 'Menú gastronómico para añadir hamburguesas gourmet, combos de crispetas, gaseosas o coleccionables a tu orden.',
        actionRequired: 'Si deseas snacks o comida, pulsa el botón (+) en el producto deseado (ej: Hamburguesa Callejera) o presiona "CONTINUAR".',
        detailedInstructions: [
          'Cinemark cuenta con categorías: MENU, COLECCIONABLES, COMBOS y CRISPETAS.',
          'En salas Premier se ofrece cocina caliente directa a tu asiento.',
          'Puedes aplicar un "Código promocional para confitería" si posees cupones.',
          'Este paso es opcional: si no deseas comida puedes simplemente presionar "CONTINUAR".'
        ],
        tips: [
          'Comprar comida desde la app te ahorra filas en la confitería tradicional.',
          'Al llegar a la sala Premier, el personal de atención lleva tu pedido a tu butaca.'
        ],
        hotspot: {
          x: 88,
          y: 47,
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
        stepNumber: 8,
        title: 'Resumen de Carrito y Cargos por Servicio',
        screenTitle: 'Carrito de compras - Pacific Mall',
        category: 'carrito',
        summary: 'Revisión final de ítems, fecha, hora, sala, sillas, cargos por servicio en línea y costo consolidado.',
        actionRequired: 'Verifica meticulosamente la fecha, hora, sala y asientos elegidos. Si todo es correcto, pulsa "CONTINUAR".',
        detailedInstructions: [
          'La ventana desglosa: Boleta XD Premier 3D ($32.250) + Hamburguesa ($38.000) = Subtotal $70.250.',
          'Transparencia tarifaria: Se detalla el cargo por servicio de confitería ($1.600) y de boleta ($1.600).',
          'El total consolidado es de $73.450 COP.',
          'Verifica dos veces la fecha y sala antes de proceder al pago.'
        ],
        tips: [
          'Una vez realizada la compra en línea, los cambios de función o cancelaciones quedan sujetos a políticas de taquilla.',
          'Asegúrate de haber seleccionado el complejo correcto (Pacific Mall).'
        ],
        hotspot: {
          x: 82,
          y: 97,
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
        stepNumber: 9,
        title: 'Datos de Facturación y Términos',
        screenTitle: 'Avengers: Endgame Bon - Pago (Facturación)',
        category: 'facturacion',
        summary: 'Ingreso obligatorio de datos del titular para emisión de factura legal y envío de las entradas QR al correo.',
        actionRequired: 'Diligencia tus nombres, cédula, dirección, teléfono y correo electrónico. Marca las dos casillas obligatorias y pulsa "CONTINUAR".',
        detailedInstructions: [
          'Selecciona tipo de persona: "Natural" o "Jurídica".',
          'Ingresa tus Nombres y Apellidos completos.',
          'Ingresa tu tipo y número de documento (Cédula de Ciudadanía).',
          'Completa Ciudad (Cali), Dirección física y Celular.',
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
          x: 4,
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
        stepNumber: 10,
        title: 'Selección del Medio de Pago',
        screenTitle: 'Medios de pago disponibles',
        category: 'pagos',
        summary: 'Menú con las alternativas autorizadas por Cinemark Colombia para procesar la transacción.',
        actionRequired: 'Toca sobre "Tarjeta crédito / débito" o sobre "PSE" según el método con el que desees pagar.',
        detailedInstructions: [
          'Cinemark ofrece dos opciones principales:',
          '1. "Tarjeta crédito / débito": Visa, Mastercard, American Express o Diners.',
          '2. "PSE": Para pagos directos con débito a cuentas de ahorros colombianas o billeteras (Nequi, Daviplata, Nu).',
          'Pulsa sobre PSE para transferir de forma rápida sin costo de tarjeta.'
        ],
        tips: [
          'PSE no genera costos bancarios de comisión adicionales.',
          'Si utilizas tarjeta de crédito puedes diferir el pago a cuotas en el siguiente formulario.'
        ],
        hotspot: {
          x: 50,
          y: 85,
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
          'Las tarjetas débito con código CVV al reverso también funcionan en este formulario.',
          'Tu entidad bancaria puede solicitarte una clave dinámica o código SMS de confirmación.'
        ],
        hotspot: {
          x: 82,
          y: 97,
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
          'Debes estar registrado previamente en el portal de PSE con tu correo electrónico personal.',
          'Ten a la mano la aplicación de tu banco o billetera en el teléfono.'
        ],
        hotspot: {
          x: 50,
          y: 89,
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
        stepNumber: 13,
        title: 'Selección de Banco o Billetera en PSE',
        screenTitle: 'Seleccionar Entidad Bancaria PSE',
        category: 'pse',
        summary: 'Listado de neobancos, billeteras y bancos colombianos (Nequi, Nu, Bancolombia, Davivienda, etc.).',
        actionRequired: 'Selecciona tu banco (ej: NEQUI o NU) y pulsa "PAGAR" para ser redirigido a la banca en línea y confirmar la transacción.',
        detailedInstructions: [
          'La lista incluye opciones como NEQUI, NU, LULO, BANCOLOMBIA, DAVIVIENDA, entre otros.',
          'Toca tu entidad para marcarla.',
          'Al pulsar el botón rojo "PAGAR", la app te redirige a tu banco o envía una notificación de débito a tu app móvil.',
          '¡Listo! Al aprobarse el pago, recibes en pantalla y en tu correo el código QR para entrar directo a la sala sin pasar por taquilla.'
        ],
        tips: [
          'En el caso de Nequi o Daviplata, aprueba la notificación push en tu celular dentro de los primeros 5 minutos.',
          'Guarda el código QR generado en tu galería o consúltalo en la sección "Mis Boletas" de la app.'
        ],
        hotspot: {
          x: 28,
          y: 57.5,
          label: 'Elegir NEQUI / NU',
          actionText: 'Tocar sobre la entidad y confirmar con PAGAR'
        },
        keyDetails: [
          { label: 'Entidades visibles', value: 'Nequi, Nu, Bancolombia, Davivienda...' },
          { label: 'Paso final', value: 'Aprobación en tu banco y descarga de Boleta QR' }
        ],
        imagePlaceholderName: '14.jpg'
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