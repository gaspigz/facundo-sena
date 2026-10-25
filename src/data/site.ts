/**
 * Dominio de producción. Cambialo acá una sola vez: lo usan el canonical,
 * las Open Graph, el JSON-LD, el sitemap, el robots.txt y el llms.txt.
 */
export const SITE = 'https://nutricionfs.com.ar';

export const seo = {
  title: 'Nutricionista Deportivo en Rosario · Lic. Facundo Sena',
  description:
    'Nutricionista deportivo en Rosario. Antropometría ISAK II, estudio de composición corporal y plan alimentario para máximo rendimiento. Consultorio en Mendoza 2290 y consultas online. Mat. 1883/2.',
  keywords: [
    'nutricionista deportivo Rosario',
    'nutrición deportiva Rosario',
    'nutricionista Rosario',
    'antropometría Rosario',
    'antropometrista ISAK II Rosario',
    'composición corporal Rosario',
    'plan alimentario para deportistas',
    'nutricionista deportivo online',
  ],
  /** Última revisión del contenido. Actualizalo cuando edites textos. */
  actualizado: '2026-10-25',
};

export const WA = 'https://wa.me/543415629177';

export const waLink = (texto: string) => `${WA}/?text=${encodeURIComponent(texto)}`;

export const cta = {
  antropometria: 'https://wa.me/543415629177/?text=Hola,%20quisiera%20solicitar%20un%20turno%20para%20una%20antropometr%C3%ADa.%20Muchas%20Gracias',
  presencial:    'https://wa.me/543415629177/?text=Hola,%20quisiera%20solicitar%20un%20turno%20para%20una%20consulta%20nutricional%20presencial.%20Muchas%20Gracias',
  online:        'https://wa.me/543415629177/?text=Hola,%20quisiera%20solicitar%20un%20turno%20para%20una%20consulta%20nutricional%20online.%20Muchas%20Gracias',
};

export const perfil = {
  nombre: 'Facundo Sena',
  titulo: 'Lic. en Nutrición',
  matricula: 'Mat. 1883/2',
  isak: 'Antropometrista ISAK II',
  instagram: 'https://instagram.com/nutricion.facundosena',
  instagramHandle: '@nutricion.facundosena',
  seguidores: '4.5K',
  direccion: 'Mendoza 2290, Rosario',
  ciudad: 'Rosario, Santa Fe',
  telefono: '+54 341 562-9177',
  telefonoE164: '+543415629177',
  cp: 'S2000',
  geo: { lat: -32.9442, lng: -60.6505 },
  /** Zonas desde las que llegan la mayoría de las consultas presenciales. */
  zonas: [
    'Rosario',
    'Funes',
    'Roldán',
    'Granadero Baigorria',
    'Villa Gobernador Gálvez',
    'San Lorenzo',
  ],
};

/** Agencia de representación de jugadores con la que trabaja el consultorio. */
export const futbolCracks = {
  nombre: 'Fútbol Cracks',
  rol: 'Agencia de representación de jugadores',
  instagram: 'https://www.instagram.com/fcagentes',
  handle: '@fcagentes',
};

export type Servicio = {
  n: string;
  titulo: string;
  subtitulo: string;
  claim: string;
  desc: string;
  puntos: string[];
  video: string;
  href: string;
  cta: string;
};

export const servicios: Servicio[] = [
  {
    n: '01',
    titulo: 'Antropometría',
    subtitulo: 'Estudio de composición corporal ISAK II en Rosario',
    claim: 'Lo que no se mide, no se ajusta.',
    desc: 'La antropometría es el estudio de la composición corporal bajo el protocolo internacional ISAK: pliegues cutáneos, perímetros y diámetros óseos, todo medido con instrumental certificado. La antropometría factoriza el cuerpo en 5 componentes: músculo, grasa, huesos, residuos y piel. De esta forma y evaluando periódicamente, podemos establecer objetivos y conocer cómo está compuesto tu cuerpo, ajustar la alimentación y modificar conductas que nos lleven a mejorar el rendimiento.',
    puntos: [
      'Perfil completo de pliegues, perímetros y diámetros óseos',
      'Fraccionamiento de masas y cálculo de somatotipo',
      'Informe con la evolución medición a medición',
      'Controles y evaluaciones mensuales que permiten dar nuevos ajustes a tus comidas',
    ],
    video: '/videos/antropometria.mp4',
    href: cta.antropometria,
    cta: 'Turno de antropometría',
  },
  {
    n: '02',
    titulo: 'Nutrición deportiva',
    subtitulo: 'Alimentación para un máximo rendimiento',
    claim: 'Un plan que se adapta a tu entrenamiento.',
    desc: 'La nutrición deportiva adapta tu alimentación en función a tu entrenamiento y objetivos. Voy a planificar qué, cuánto y cuándo comer, periodizando ingestas según intensidades de entrenamiento y diseñando estrategias alimentarias, de hidratación y suplementación adaptadas a cada etapa de tu vida deportiva. El mismo enfoque que apliqué trabajando en fútbol de primera división, en rugby y con atletas amateurs y profesionales, adaptado a tu deporte, tus necesidades y tu calendario deportivo.',
    puntos: [
      'Plan alimentario digital ajustado a tu deporte y necesidades',
      'Infografía educativa',
      'Lista de compras, ideal para evitar errores',
      'Presencial y a domicilio en Rosario, online en todo el mundo',
    ],
    video: '/videos/nutricion.mp4',
    href: cta.presencial,
    cta: 'Turno de consulta',
  },
];

export const galeria = [
  { src: '/nob11.jpeg', alt: "El nutricionista Facundo Sena en el campo de juego durante su etapa en Newell's Old Boys", pie: "Newell's Old Boys · 1ra División" },
  { src: '/uni1.jpeg',  alt: 'Colación post entrenamiento armada por el nutricionista deportivo Facundo Sena para el plantel de rugby del Club Universitario de Rosario', pie: 'Club Universitario de Rosario' },
  { src: '/cenn3.jpeg', alt: 'Lic. Facundo Sena disertando sobre nutrición deportiva en el congreso CENN, Entre Ríos', pie: 'Disertante en el CENN, Entre Ríos' },
];

export type Institucion = {
  nombre: string;
  /**
   * Logo en public/logos, versión para fondo oscuro: conserva sus colores y lo
   * negro pasa a hueso. Sin logo, el nombre se muestra como marca tipográfica.
   */
  logo?: string;
  forma?: 'escudo' | 'horizontal';
  bajada?: string;
};

/** Clubes e instituciones de la trayectoria, en el orden en que pasan por el carrusel. */
export const instituciones: Institucion[] = [
  { nombre: "Newell's Old Boys",             logo: '/logos/newells.png',       forma: 'escudo' },
  { nombre: 'Fútbol Cracks',                 logo: '/logos/futbol-cracks.png', forma: 'escudo' },
  { nombre: 'Club Universitario de Rosario', logo: '/logos/universitario.png', forma: 'escudo' },
  { nombre: 'Sociedad Tiro Suizo Rosario',   logo: '/logos/tiro-suizo.png',    forma: 'escudo' },
  { nombre: 'Unión de Rugby de Rosario',     logo: '/logos/urr.png',           forma: 'horizontal' },
  { nombre: 'CENN',                          bajada: 'Congreso 2022' },
  { nombre: 'Cafeteros Pro',                 logo: '/logos/cafeteros-pro.png', forma: 'escudo' },
];

export type Deportista = {
  nombre: string;
  disciplina: string;
  puesto?: string;
  foto: string;
  logros: { anio?: string; texto: string }[];
};

export const deportistas: Deportista[] = [
  {
    nombre: 'María Luján Cipettini',
    disciplina: 'Ultra Trail',
    foto: '/maria-lujan-cipettini.jpeg',
    logros: [
      { texto: 'UTACCH 134 km, Córdoba' },
      { texto: 'Ultra Trail de las 100 millas' },
    ],
  },
  {
    nombre: 'Eliana Schwindt',
    disciplina: 'Maratón',
    foto: '/eliana-schwindt.jpeg',
    logros: [
      { anio: '2023', texto: 'Maratón de la Bandera, Rosario · 3:58 h' },
      { anio: '2024', texto: 'Maratón de la Bandera, Rosario · 3:33 h' },
      { anio: '2024', texto: 'Maratón de Buenos Aires' },
      { anio: '2025', texto: 'Maratón de Berlín · 3:29 h' },
      { anio: '2026', texto: 'Maratón de San Juan · 3:16 h' },
    ],
  },
  {
    nombre: 'Bautista Córdoba',
    disciplina: 'Rugby',
    puesto: '3ra línea',
    foto: '/bautista-cordoba.jpeg',
    logros: [
      { anio: '2025', texto: 'Concentración nacional M17' },
      { anio: '2026', texto: 'Sudamericano M18' },
    ],
  },
  {
    nombre: 'Robertinio Lanziani',
    disciplina: 'Fútbol',
    puesto: 'Arquero',
    foto: '/robertinio-lanziani.jpeg',
    logros: [
      { anio: '23/24', texto: 'Locri, Italia' },
      { anio: '24/25', texto: 'Sambuceto, Italia' },
      { anio: '25/26', texto: 'San Salvo, Italia' },
      { anio: '26/27', texto: 'Vasto, Italia' },
    ],
  },
  {
    nombre: 'Ignacio Zabella',
    disciplina: 'Rugby',
    puesto: 'Medioscrum',
    foto: '/ignacio-zabella.jpeg',
    logros: [
      { anio: '2011—', texto: 'Club Universitario de Rosario' },
      { anio: '24/25', texto: 'Trial Pumitas' },
      { anio: '24/26', texto: 'Concentraciones Pumitas' },
      { anio: '2026', texto: 'Championship Pumitas · Capibaras' },
    ],
  },
  {
    nombre: 'Denis Pinto',
    disciplina: 'Fútbol',
    foto: '/denispinto.jpeg',
    logros: [
      { anio: '2024', texto: 'Blooming' },
    ],
  },
  {
    nombre: 'Manuel Todaro',
    disciplina: 'Rugby',
    puesto: '3ra línea',
    foto: '/manuel-todaro.jpeg',
    logros: [
      { anio: '20/21', texto: 'Seleccionado de Rosario' },
      { anio: '2022', texto: 'Pumitas M19' },
      { anio: '2023', texto: 'Dogos XV' },
      { anio: '2025', texto: 'Cobras XV' },
      { anio: '2026', texto: 'Yacaré XV' },
    ],
  },
];

export const proceso = [
  {
    n: '01',
    titulo: 'Primera consulta',
    dur: '40 min',
    desc: 'Entrevista nutricional completa, antropometría de partida y las pautas a sostener hasta que llegue el plan.',
  },
  {
    n: '02',
    titulo: 'Plan alimentario',
    dur: 'Entrega digital',
    desc: 'Llega a los pocos días de la consulta e incluye infografía educativa, recetario y lista de compras.',
  },
  {
    n: '03',
    titulo: 'Controles',
    dur: '30 min · cada 30 a 40 días',
    desc: 'Antropometría de control, ajuste del plan, recomendaciones y educación alimentaria continua.',
  },
];

export const horarios = [
  { dia: 'Lunes',     hora: '14:00 — 20:00' },
  { dia: 'Miércoles', hora: '14:00 — 20:00' },
  { dia: 'Jueves',    hora: '09:00 — 15:00' },
];

export const nav = [
  { href: '#servicios',    label: 'Servicios' },
  { href: '#trayectoria',  label: 'Trayectoria' },
  { href: '#deportistas',  label: 'Deportistas' },
  { href: '#turnos',       label: 'Turnos' },
  { href: '#preguntas',    label: 'Preguntas' },
];

export type Pregunta = { q: string; a: string };

/**
 * FAQ orientada a búsquedas de cola larga. Cada respuesta es autocontenida
 * (40 a 90 palabras) para que buscadores y motores de IA la puedan citar sola.
 */
export const faq: Pregunta[] = [
  {
    q: '¿Qué hace un nutricionista deportivo y en qué se diferencia de un nutricionista clínico?',
    a: 'Un nutricionista deportivo planifica la alimentación en función de la carga de entrenamiento y del calendario de competencia, no sólo del peso o la salud general. Define cuántos hidratos, proteínas y grasas necesitás cada día según lo que entrenás, qué comer antes, durante y después del estímulo, cómo hidratarte y cómo llegar a la competencia. En Nutrición FS ese plan se acompaña siempre con una antropometría, para trabajar con datos de composición corporal y no con estimaciones.',
  },
  {
    q: '¿Qué es la antropometría ISAK y para qué sirve?',
    a: 'La antropometría es un protocolo de medición internacional estandarizado por ISAK para conocer la composición corporal. Se utilizan calibres e instrumental certificado, se toman pliegues cutáneos, perímetros musculares y diámetros óseos, y con esos datos se calcula el fraccionamiento de masas y somatotipo. Sirve para saber aproximadamente cuánto de tu peso es músculo, grasa y hueso, y cuánto cambió cada componente entre una medición y la siguiente.',
  },
  {
    q: '¿Cuánto dura y qué incluye la primera consulta?',
    a: 'La primera consulta dura 40 minutos e incluye la entrevista nutricional completa, la antropometría de partida y las pautas alimentarias a sostener hasta que se entregue el plan. Días después recibís el plan alimentario en formato digital, junto con una infografía educativa, un recetario y la lista de compras. Después se hacen controles de 30 minutos cada 30 a 40 días.',
  },
  {
    q: '¿Atendés online o sólo presencial en Rosario?',
    a: 'Las dos modalidades. La consulta presencial es en el consultorio ubicado en el centro de la ciudad de Rosario, los días lunes y miércoles de 14 a 20, y jueves de 9 a 15. La consulta online se coordina por videollamada, día y horario a convenir, y llega a deportistas de todo el país y del exterior. El plan alimentario, el seguimiento y los materiales educativos son los mismos en ambos casos. También realizo consultas a domicilio, donde traslado mi consultorio a tu ubicación, trabajando bajo el mismo protocolo que utilizo día tras día.',
  },
  {
    q: '¿Hay que ser deportista de alto rendimiento para hacer una consulta?',
    a: 'No. Atiendo desde jugadores de selección y futbolistas profesionales hasta personas que corren su primera maratón, entrenan en el gimnasio tres veces por semana o juegan al rugby los fines de semana. El método es el mismo (medir, planificar y volver a medir); lo que cambia es la exigencia del plan. También trabajo con quienes buscan mejorar su composición corporal sin competir.',
  },
  {
    q: '¿Cada cuánto conviene repetir la antropometría?',
    a: 'Cada 30 a 40 días. Ese es el plazo en el que usualmente se suelen hacer registros antropométricos de control. La situación cambia en etapas de pretemporada o de puesta a punto para una competencia, ahí el control puede acortarse.',
  },
  {
    q: '¿Qué deportes atendés?',
    a: 'Trabajo tanto en deportes de equipo como individuales. Hoy acompaño deportistas de rugby, fútbol, maratón, futsal, natación, deportes de contacto, atletismo, ultra trail y más. Básicamente cualquier disciplina con carga de entrenamiento es mi enfoque.',
  },
  {
    q: '¿Cómo saco un turno?',
    a: 'Por WhatsApp al 341 562-9177. Elegí la modalidad (antropometría, consulta nutricional presencial o consulta online), contame tus objetivos y qué actividad física hacés, y coordinamos día y horario. Si no podés asistir a un turno ya reservado, avisá con 48 horas de anticipación; de lo contrario se abona la mitad del valor de la consulta.',
  },
];
