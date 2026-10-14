// Datos FICTICIOS de demostración para carpinteria-metalica-1 «Medida».
// «Aluminis Rocamar» no existe: nombre, razón social, NIF, calle, personas y reseñas son inventados.
// Las marcas son reales y solo indican materiales con los que se trabaja (no distribución oficial).

import { defineSiteConfig } from "@andrei-leads/core";

export default defineSiteConfig({
  negocio: {
    nombre: "Aluminis Rocamar",
    nombreLegal: "Aluminis Rocamar SL",
    nif: "B00412387", // NIF FICTICIO: el código de provincia 00 no existe
    sector: "Carpintería de aluminio y PVC",
    descripcionCorta:
      "Taller en Alaquàs. Fabricamos e instalamos ventanas, cerramientos y persianas a medida, casi siempre sin obra. Medición sin coste.",
    anioFundacion: 2004,
    registroMercantil: "Inscrita en el Registro Mercantil de Valencia, tomo 0000, folio 00, hoja V-000000", // REGISTRO FICTICIO
    tipoSchema: ["HomeAndConstructionBusiness"],
  },
  contacto: {
    telefono: "+34643647915", // SUSTITUIR por el móvil de Ysst
    whatsapp: "+34643647915", // SUSTITUIR por el móvil de Ysst
    email: "hola@aluminisrocamar.example",
    direccion: { calle: "Calle de los Perfiladores 14, nave 3", cp: "46970", ciudad: "Alaquàs", provincia: "Valencia" },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "08:00", cierra: "14:00" },
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "15:30", cierra: "18:30" },
    ],
    mensajeWhatsapp: "Hola, os escribo desde la web. Quiero presupuesto para:",
  },
  zonas: ["Alaquàs", "Aldaia", "Torrent", "Xirivella", "Quart de Poblet", "Picanya", "Paiporta", "Manises", "Mislata", "Valencia"],
  valoracion: { media: 4.8, total: 76 },
  imagenesHero: [
    { src: "/ejemplo/hero.jpg", alt: "Salón con ventanal corredero de aluminio gris antracita abierto a una terraza" },
  ],
  servicios: [
    {
      titulo: "Ventanas correderas",
      descripcion: "Correderas de aluminio con rotura de puente térmico para salones y terrazas. Sin obra y en el día.",
      contenido: [
        "La corredera es la ventana que más montamos en pisos: no ocupa sitio al abrir y deja pasar mucha luz. La fabricamos en nuestro taller a la medida exacta del hueco, así que no hace falta picar ni tocar el alicatado.",
        "Usamos perfiles de aluminio con rotura de puente térmico y doble vidrio bajo emisivo con cámara. Si das a una calle con tráfico, te proponemos un vidrio laminado acústico: es lo que más se nota con el ruido.",
        "Las correderas antiguas suelen fallar por las ruedas y por los cepillos de las juntas. En las nuevas ponemos carros regulables y juntas de doble felpa, que cierran mejor y dejan pasar menos aire.",
      ],
      incluye: [
        "Medición en tu casa sin coste",
        "Fabricación a medida en nuestro taller",
        "Doble vidrio bajo emisivo",
        "Retirada y reciclaje de la ventana vieja",
        "Instalación y sellado",
        "Limpieza al terminar",
      ],
      imagenes: [{ src: "/ejemplo/servicio-corredera.jpg", alt: "Ventana corredera de aluminio en un salón luminoso" }],
      preguntas: [
        {
          pregunta: "¿Se puede cambiar sin obra?",
          respuesta: "Casi siempre. Quitamos la ventana vieja, colocamos la nueva en el mismo hueco y rematamos con tapajuntas. Si hace falta algún arreglo de albañilería, te lo decimos al medir.",
        },
        {
          pregunta: "¿Cuánto se tarda en cambiarlas?",
          respuesta: "Una ventana, una o dos horas. Un piso normal, de cinco a siete ventanas, en un día.",
        },
        {
          pregunta: "¿Aísla igual que una oscilobatiente?",
          respuesta: "Un poco menos, porque las hojas deslizan y la junta no aprieta igual. Con buen perfil y buen vidrio la diferencia es pequeña; en dormitorios que dan a la calle solemos recomendar oscilobatiente.",
        },
      ],
      mensajeWhatsapp: "Hola, quiero presupuesto para ventanas correderas. Os envío una foto del hueco con un metro:",
      precioDesde: "desde 320 €/ud", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Ventanas oscilobatientes",
      descripcion: "Abren hacia dentro y en abatible para ventilar. Son las que mejor cierran contra el ruido y el frío.",
      contenido: [
        "La oscilobatiente gira como una puerta para limpiarla y se inclina desde arriba para ventilar sin abrirla del todo. Al cerrar, el herraje aprieta la hoja contra las juntas en todo el contorno; por eso es la que mejor aísla.",
        "La fabricamos en aluminio con rotura de puente térmico o en PVC. Para dormitorios y para casas que dan a calles con tráfico es la que más recomendamos.",
        "Al medir comprobamos que la hoja pueda abrir hacia dentro sin chocar con muebles, radiadores o el grifo de la cocina.",
      ],
      incluye: [
        "Medición y consejo sin coste",
        "Herraje con cierre en todo el contorno",
        "Doble vidrio bajo emisivo o acústico",
        "Retirada de la ventana vieja",
        "Instalación y sellado",
      ],
      imagenes: [{ src: "/ejemplo/servicio-oscilobatiente.jpg", alt: "Ventana oscilobatiente blanca entreabierta en un dormitorio" }],
      preguntas: [
        {
          pregunta: "¿Aluminio o PVC?",
          respuesta: "Los dos aíslan bien con un perfil de calidad. El PVC suele salir algo más barato y aísla un poco más; el aluminio permite perfiles más finos y más colores. Te llevamos muestras de los dos.",
        },
        {
          pregunta: "¿Se puede poner en una cocina con poco espacio?",
          respuesta: "Sí, si la hoja no choca con el grifo o los muebles al abrir. Si choca, te proponemos una corredera o una hoja más pequeña.",
        },
      ],
      mensajeWhatsapp: "Hola, quiero presupuesto para ventanas oscilobatientes. Os envío una foto del hueco con un metro:",
      precioDesde: "desde 390 €/ud", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Cerramientos de terraza",
      descripcion: "Cierra la terraza o el balcón con correderas de aluminio y úsala todo el año.",
      contenido: [
        "Un cerramiento convierte la terraza en una parte más de la casa: sin polvo, sin viento y con uso también en invierno. Lo hacemos con correderas de aluminio de dos, tres o cuatro hojas, con o sin rotura de puente térmico según el uso que le vayas a dar.",
        "Antes de empezar te explicamos qué papeles hacen falta. Normalmente hay que contar con la comunidad y comunicarlo al ayuntamiento; te damos las medidas y la descripción técnica para presentarlo.",
        "Si la terraza da al sur, conviene un vidrio de control solar o un estor; si no, en verano se convierte en un horno. Lo vemos contigo al medir.",
      ],
      incluye: [
        "Estudio de la terraza y medición",
        "Correderas a medida",
        "Persiana o estor integrado, si lo quieres",
        "Carriles con desagüe y sellado contra filtraciones",
        "Descripción técnica para la comunidad y el ayuntamiento",
      ],
      imagenes: [{ src: "/ejemplo/servicio-cerramiento.jpg", alt: "Terraza cerrada con cristal y perfiles de aluminio" }],
      preguntas: [
        {
          pregunta: "¿Necesito permiso de la comunidad?",
          respuesta: "Normalmente sí, porque cambia la fachada. Muchas comunidades piden el mismo perfil y color que los cerramientos que ya hay; te lo hacemos igual.",
        },
        {
          pregunta: "¿Entra agua cuando llueve fuerte?",
          respuesta: "No, si el carril desagua hacia fuera y el sellado está bien hecho. Antes de irnos lo probamos con agua.",
        },
        {
          pregunta: "¿Cuánto se tarda?",
          respuesta: "Fabricarlo, unas cuatro semanas. Montarlo, uno o dos días según el tamaño.",
        },
      ],
      mensajeWhatsapp: "Hola, quiero cerrar mi terraza. Os envío fotos y las medidas aproximadas:",
      precioDesde: "desde 1.800 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Persianas y motorización",
      descripcion: "Persianas de aluminio a medida, cambio de lamas y cintas, y motores para subirlas con un botón.",
      contenido: [
        "Las persianas viejas de PVC se decoloran, se parten y acaban atascándose. Las cambiamos por lamas de aluminio rellenas de poliuretano, que pesan poco, aíslan del calor y aguantan años al sol.",
        "Si la persiana es grande o cuesta subirla, le ponemos un motor tubular dentro del eje. Se maneja con un pulsador en la pared o con un mando, y no hay que tocar la fachada.",
        "También arreglamos lo de siempre: la cinta rota, el recogedor que no recoge, las lamas partidas o la persiana que se descuelga por un lado.",
      ],
      incluye: [
        "Lamas de aluminio con poliuretano",
        "Cambio de eje, cinta y recogedor",
        "Motor tubular con pulsador o mando",
        "Revisión del cajón y de las guías",
      ],
      imagenes: [{ src: "/ejemplo/servicio-persiana.jpg", alt: "Persiana de aluminio a medio bajar en una fachada" }],
      preguntas: [
        {
          pregunta: "¿Se puede motorizar la persiana que ya tengo?",
          respuesta: "Casi siempre. Metemos el motor dentro del eje y ponemos un pulsador en la pared. Si el eje o las lamas están mal, te lo decimos antes.",
        },
        {
          pregunta: "¿Qué pasa si se va la luz?",
          respuesta: "La persiana se queda donde esté. Si la necesitas abrir sí o sí, hay motores con maniobra manual de emergencia.",
        },
      ],
      mensajeWhatsapp: "Hola, quiero cambiar o motorizar persianas. Os envío una foto:",
      precioDesde: "desde 180 € por motor", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Mosquiteras",
      descripcion: "Enrollables, correderas o plisadas, a la medida de cada ventana y del mismo color.",
      contenido: [
        "Hacemos mosquiteras a medida para cualquier ventana o puerta de terraza: enrollables para ventanas, plisadas para puertas de paso y correderas para huecos grandes.",
        "Las lacamos del mismo color que la ventana para que no se noten. Si cambias las ventanas con nosotros, las medimos y montamos a la vez.",
      ],
      incluye: [
        "Medición en casa",
        "Perfil lacado a juego con la ventana",
        "Malla de fibra de vidrio",
        "Instalación sin taladrar el marco, cuando se puede",
      ],
      imagenes: [{ src: "/ejemplo/servicio-mosquitera.jpg", alt: "Mosquitera enrollable instalada en una ventana" }],
      preguntas: [
        {
          pregunta: "¿Cuál va mejor en la puerta de la terraza?",
          respuesta: "La plisada: el perfil de abajo es muy bajo, no se tropieza con él y se recoge de lado.",
        },
        {
          pregunta: "¿Se puede cambiar solo la malla si se rompe?",
          respuesta: "Sí. Cambiamos la malla sin hacer la mosquitera nueva.",
        },
      ],
      precioDesde: "desde 65 €/ud", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Puertas de entrada",
      descripcion: "Puertas de aluminio a medida para chalets y casas de pueblo, con buen aislamiento y cierre de seguridad.",
      contenido: [
        "Fabricamos puertas de entrada de aluminio con rotura de puente térmico, con panel ciego o con vidrio laminado de seguridad. Las hacemos a medida del hueco, también con fijos laterales o montante.",
        "Llevan cerradura de seguridad de varios puntos y bombín antibumping. Si la puerta da a poniente, recomendamos un color claro: un lacado oscuro al sol se calienta y dilata más.",
      ],
      incluye: [
        "Medición y diseño de la puerta",
        "Panel ciego o vidrio laminado",
        "Cerradura de seguridad de varios puntos",
        "Retirada de la puerta vieja",
        "Instalación y remates",
      ],
      imagenes: [{ src: "/ejemplo/servicio-puerta.jpg", alt: "Puerta de entrada de aluminio gris en un chalet" }],
      preguntas: [
        {
          pregunta: "¿Cuánto se tarda en fabricar?",
          respuesta: "Entre cuatro y cinco semanas, según el panel y el color.",
        },
        {
          pregunta: "¿Vale para una casa antigua con el hueco torcido?",
          respuesta: "Sí. Medimos en varios puntos, ajustamos la puerta al hueco real y rematamos los descuadres con tapajuntas.",
        },
      ],
      precioDesde: "desde 1.400 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Cambio de vidrios",
      descripcion: "Cambiamos el cristal sencillo por doble vidrio aislante sin cambiar la ventana, si el marco está bien.",
      contenido: [
        "Si la ventana está en buen estado pero tiene un cristal sencillo, a veces basta con poner un doble vidrio con cámara. Sale más barato que cambiar la ventana y se nota mucho con el frío y con la condensación.",
        "Antes comprobamos que el perfil admite el grosor del vidrio nuevo y que la hoja cierra bien. Si no lo admite, te lo decimos y no te lo vendemos.",
      ],
      incluye: [
        "Revisión del marco y de las juntas",
        "Doble vidrio bajo emisivo a medida",
        "Junquillos nuevos si hace falta",
        "Retirada del vidrio viejo",
      ],
      imagenes: [], // FOTO PENDIENTE: servicio-vidrio.jpg (operario colocando un doble vidrio)
      preguntas: [
        {
          pregunta: "¿Vale para cualquier ventana?",
          respuesta: "No. Las ventanas antiguas de hierro o de aluminio muy fino no suelen admitir doble vidrio. Lo vemos con una foto o en la visita.",
        },
        {
          pregunta: "¿Y si el cristal está roto?",
          respuesta: "Lo cambiamos igual. Llámanos y te decimos cuándo podemos ir.",
        },
      ],
      precioDesde: "desde 90 €/m²", // PRECIO FICTICIO: borrar en la web del cliente
    },
  ],
  trabajos: [
    {
      titulo: "Cambio de ventanas en un piso de Aldaia",
      descripcion: "Seis correderas con rotura de puente térmico y vidrio acústico en un piso de 1975 junto a una avenida con mucho tráfico.",
      ubicacion: "Aldaia",
      anio: 2026,
      servicio: "ventanas-correderas",
      duracion: "1 día",
      precio: "entre 2.100 y 2.600 €", // PRECIO FICTICIO: borrar en la web del cliente
      contenido: [
        "Las ventanas de hierro originales dejaban pasar el ruido de la avenida y el frío por las juntas. En los dormitorios pusimos vidrio laminado acústico y en el salón, doble vidrio bajo emisivo.",
        "Fabricamos las seis en el taller en tres semanas y las cambiamos en un solo día, sin obra. Las mosquiteras se montaron la misma tarde.",
      ],
      imagenes: [{ src: "/ejemplo/trabajo-aldaia.jpg", alt: "Salón con ventanas correderas nuevas de aluminio blanco" }],
      antes: { src: "/ejemplo/trabajo-aldaia-antes.jpg", alt: "Las ventanas antiguas de hierro antes del cambio" },
      testimonio: {
        autor: "Amparo L.",
        texto: "Ahora no se oye la avenida y en invierno la casa coge otra temperatura. Vinieron a las ocho y a las cinco estaba todo recogido.",
      },
    },
    {
      titulo: "Cerramiento de terraza en Quart de Poblet",
      descripcion: "Cerramiento corredero de cuatro hojas en la terraza de un ático, con estor integrado para el sol de la tarde.",
      ubicacion: "Quart de Poblet",
      anio: 2025,
      servicio: "cerramientos-de-terraza",
      superficie: "9 m²",
      duracion: "2 días",
      precio: "entre 3.200 y 3.800 €", // PRECIO FICTICIO: borrar en la web del cliente
      contenido: [
        "La comunidad pedía el mismo color que el resto de áticos, así que lacamos el perfil en gris a juego. Los carriles desaguan hacia fuera y se probaron con manguera antes de terminar.",
      ],
      imagenes: [{ src: "/ejemplo/trabajo-quart.jpg", alt: "Terraza de ático cerrada con correderas de aluminio" }],
    },
    {
      titulo: "Ventanas oscilobatientes en un chalet de Manises",
      descripcion: "Ocho oscilobatientes de PVC blanco con persianas motorizadas en toda la casa.",
      ubicacion: "Manises",
      anio: 2025,
      servicio: "ventanas-oscilobatientes",
      duracion: "3 días",
      contenido: [
        "El chalet está cerca de la ruta de los aviones y la familia quería dormir con las ventanas cerradas sin oír nada. Elegimos PVC con vidrio acústico y motorizamos las ocho persianas.",
      ],
      imagenes: [
        { src: "/ejemplo/trabajo-manises.jpg", alt: "Fachada de chalet con ventanas oscilobatientes blancas" },
        { src: "/ejemplo/trabajo-manises-2.jpg", alt: "Detalle del herraje de una ventana oscilobatiente" },
      ],
    },
    {
      titulo: "Persianas motorizadas en Alaquàs",
      descripcion: "Cambio de cinco persianas de PVC por lamas de aluminio con poliuretano y motor con pulsador.",
      ubicacion: "Alaquàs",
      anio: 2026,
      servicio: "persianas-y-motorizacion",
      duracion: "1 día",
      imagenes: [{ src: "/ejemplo/servicio-persiana.jpg", alt: "Persiana de aluminio gris a medio bajar en una fachada blanca" }], // FOTO PENDIENTE: trabajo-alaquas.jpg (pulsador de persiana)
    },
    {
      titulo: "Mosquiteras en Xirivella",
      descripcion: "Cinco mosquiteras enrollables a medida en un piso, lacadas en blanco e instaladas en una mañana.",
      ubicacion: "Xirivella",
      anio: 2026,
      servicio: "mosquiteras",
      duracion: "1 mañana",
      imagenes: [{ src: "/ejemplo/trabajo-xirivella.jpg", alt: "Mosquitera enrollable bajada en una ventana de cocina" }],
    },
  ],
  resenas: [
    {
      autor: "Amparo L.",
      texto: "Cambiaron las seis ventanas del piso en un día y lo dejaron todo recogido. Vivimos al lado de la avenida y con todo cerrado casi no se oye nada.",
      puntuacion: 5,
      fecha: "2026-09-24",
      fuente: "google",
    },
    {
      autor: "Paco R.",
      texto: "Les mandé fotos de los huecos por WhatsApp con el metro puesto y esa misma tarde me dieron un precio aproximado. Luego vino Raquel a medir y el presupuesto final fue casi el mismo.",
      puntuacion: 5,
      fecha: "2026-08-30",
      fuente: "google",
    },
    {
      autor: "Vicenta M.",
      texto: "Muy formales. Me motorizaron tres persianas que ya no podía subir y me explicaron el mando con mucha paciencia.",
      puntuacion: 5,
      fecha: "2026-07-12",
      fuente: "google",
    },
    {
      autor: "Nuria G.",
      texto: "El cerramiento ha quedado muy bien y no entra nada de agua. Le quito una estrella porque la fabricación se retrasó una semana, aunque avisaron con tiempo.",
      puntuacion: 4,
      fecha: "2026-06-03",
      fuente: "google",
    },
    {
      autor: "Jordi M.",
      texto: "Buenos profesionales y muy limpios.",
      puntuacion: 5,
      fecha: "2026-04-18",
      fuente: "google",
    },
    {
      autor: "Lorena S.",
      texto: "Pedí tres presupuestos para cambiar las ventanas del chalet. No eran los más baratos, pero fueron los únicos que vinieron a medir con calma y me explicaron la diferencia entre perfiles sin liarme. Cumplieron la fecha y el montaje fue limpio. Repetiría.",
      puntuacion: 5,
      fecha: "2026-02-09",
      fuente: "google",
    },
    {
      autor: "Andrés P.",
      texto: "Mosquiteras bien hechas y a buen precio. A veces tardan en coger el teléfono; mejor escribirles por WhatsApp, que contestan rápido.",
      puntuacion: 4,
      fecha: "2025-11-21",
      fuente: "google",
    },
    {
      autor: "Carmen B.",
      texto: "Nos cambiaron el cristal de dos ventanas por doble vidrio y se acabó la condensación en el dormitorio.",
      puntuacion: 5,
      fecha: "2025-10-05",
      fuente: "google",
    },
  ],
  proceso: [
    { titulo: "Medición", texto: "Vamos a tu casa, medimos cada hueco y miramos el estado de las persianas. No cobramos la visita." },
    { titulo: "Presupuesto", texto: "En dos o tres días laborables te enviamos el presupuesto por escrito, ventana por ventana." },
    { titulo: "Fabricación", texto: "Cortamos y montamos las ventanas en nuestro taller en tres o cuatro semanas; con colores especiales, una más." },
    { titulo: "Instalación", texto: "Un piso normal se cambia en un día. Protegemos suelos y muebles y nos llevamos las ventanas viejas." },
    { titulo: "Limpieza y repaso", texto: "Sellamos, regulamos cada hoja y comprobamos contigo que todo abre y cierra bien." },
    { titulo: "Garantía", texto: "Si algo falla, nos llamas a nosotros: hemos fabricado y montado la ventana, así que respondemos de todo." },
  ],
  acreditaciones: [{ nombre: "Ventanas con marcado CE" }],
  garantias: [
    "Medición y presupuesto por escrito sin coste",
    "Fabricación propia en nuestro taller de Alaquàs",
    "10 años de garantía en la fabricación",
    "2 años de garantía en la instalación",
    "Retirada y reciclaje de las ventanas viejas",
    "Seguro de responsabilidad civil",
  ],
  marcas: ["Cortizo", "Strugal", "Veka", "Somfy"], // MARCAS DE EJEMPLO: en la web del cliente, solo las que use
  empresa: {
    historia: [
      "Toni empezó a trabajar el aluminio con diecisiete años en un taller de Torrent. En 2004 montó el suyo en Alaquàs y desde entonces somos un taller pequeño: cuatro personas que miden, fabrican y montan.",
      "Trabajamos sobre todo en pisos y casas de L'Horta y de Valencia. Lo más habitual es cambiar todas las ventanas de un piso en un día, sin obra, con las persianas y las mosquiteras incluidas.",
      "No tenemos exposición: preferimos ir a tu casa con las muestras de perfiles, colores y vidrios, y medir con calma. Si quieres ver el taller, avísanos y te lo enseñamos.",
    ],
    imagenes: [
      { src: "/ejemplo/empresa-taller.jpg", alt: "Taller de aluminio con perfiles y máquina de corte" },
      { src: "/ejemplo/empresa-perfiles.jpg", alt: "Perfiles de aluminio apilados por colores" },
    ],
    equipo: [
      { nombre: "Toni", cargo: "Fundador y jefe de taller" },
      { nombre: "Raquel", cargo: "Mediciones y presupuestos" },
      { nombre: "Iván", cargo: "Montaje" },
      { nombre: "Kike", cargo: "Montaje y persianas" },
    ],
  },
  preguntas: [
    {
      pregunta: "¿Cobráis por venir a medir?",
      respuesta: "No. Medimos en tu casa y te damos el presupuesto por escrito, sin compromiso.",
    },
    {
      pregunta: "¿Me podéis dar un precio por WhatsApp?",
      respuesta: "Uno aproximado, sí. Mándanos una foto de cada hueco con un metro extendido. El precio cerrado lo damos después de medir.",
    },
    {
      pregunta: "¿Aluminio o PVC?",
      respuesta: "Los dos aíslan bien con un buen perfil y un buen vidrio. Te explicamos las diferencias según tu casa y tu presupuesto, con las muestras delante.",
    },
    {
      pregunta: "¿Cuánto tardáis desde que acepto el presupuesto?",
      respuesta: "Entre tres y cinco semanas, según el producto y el color. La fecha de montaje te la damos al confirmar el pedido.",
    },
    {
      pregunta: "¿Venís a medir en sábado?",
      respuesta: "Sí, por la mañana y con cita. Llámanos o escríbenos por WhatsApp para reservar la hora.",
    },
    {
      pregunta: "¿Os lleváis las ventanas viejas?",
      respuesta: "Sí. Las retiramos y las llevamos a reciclar; el aluminio y el vidrio se aprovechan.",
    },
  ],
  marca: { colorPrimario: "#275d6e" },
  seo: {
    titulo: "Ventanas de aluminio y PVC en Alaquàs | Aluminis Rocamar",
    descripcion: "Taller en Alaquàs: ventanas de aluminio y PVC, cerramientos de terraza, persianas y mosquiteras a medida. Medición sin coste.",
    url: "https://ejemplo.com",
  },
});
