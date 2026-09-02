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
  actualizado: '2026-08-21',
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
  direccion: 'Mendoza 2290, Timbre negro, Rosario',
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

export const stats = [
  { k: 'ISAK II',      v: 'Antropometrista certificado' },
  { k: "2022–23",      v: "Newell's Old Boys · 1ra División" },
  { k: '2023–hoy',     v: 'Club Universitario de Rosario' },
  { k: 'Mat. 1883/2',  v: 'Lic. en Nutrición' },
];

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
    desc: 'La antropometría es el estudio de la composición corporal bajo el protocolo internacional ISAK: pliegues cutáneos, perímetros y diámetros óseos, todo medido con instrumental certificado. La antropometría factoriza el cuerpo en 5 componentes: músculo, grasa, huesos, residuos y piel. De esta forma, y evaluando periódicamente, podemos conocer a profundidad cómo está compuesto tu cuerpo y ajustar la alimentación para mejorar el rendimiento.',
    puntos: [
      'Perfil completo de pliegues, perímetros y diámetros óseos',
      'Fraccionamiento de masas y cálculo de somatotipo',
      'Informe con la evolución medición a medición',
      'Control cada 20 a 30 días para ajustar el plan',
    ],
    video: '/videos/antropometria.mp4',
    href: cta.antropometria,
    cta: 'Turno de antropometría',
  },
  {
    n: '02',
    titulo: 'Nutrición deportiva',
    subtitulo: 'Plan alimentario para máximo rendimiento',
    claim: 'El plan se adapta al entrenamiento, no al revés.',
    desc: 'La nutrición deportiva organiza tu alimentación en función de tu entrenamiento y tus objetivos. Planifico qué, cuánto y cuándo comer, periodizo la ingesta semana a semana y diseño estrategias de alimentación, hidratación y suplementación para cada etapa del entrenamiento y la competencia. Es el mismo enfoque que apliqué trabajando con fútbol de primera división y planteles de rugby de selección, adaptado a tu deporte, tus necesidades y tu calendario.',
    puntos: [
      'Plan alimentario digital ajustado a tu deporte y tus horarios',
      'Infografía educativa y recetario saludable',
      'Lista de supermercado lista para usar',
      'Presencial en Rosario u online a todo el país',
    ],
    video: '/videos/nutricion.mp4',
    href: cta.presencial,
    cta: 'Turno de consulta',
  },
];

export const galeria = [
  { src: '/nob4.jpeg',  alt: "El nutricionista Facundo Sena en el campo de juego durante su etapa en Newell's Old Boys", pie: "Newell's Old Boys · 1ra División" },
  { src: '/uni1.jpeg',  alt: 'Colación post entrenamiento armada por el nutricionista deportivo Facundo Sena para el plantel de rugby del Club Universitario de Rosario', pie: 'Club Universitario de Rosario' },
  { src: '/cenn3.jpeg', alt: 'Lic. Facundo Sena disertando sobre nutrición deportiva en el congreso CENN, Entre Ríos', pie: 'Disertante en el CENN, Entre Ríos' },
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
    dur: '60 min',
    desc: 'Entrevista nutricional completa, antropometría de partida y las pautas a sostener hasta que llegue el plan.',
  },
  {
    n: '02',
    titulo: 'Plan alimentario',
    dur: 'Entrega digital',
    desc: 'Llega a los pocos días de la consulta e incluye infografía educativa, recetario saludable y lista de supermercado.',
  },
  {
    n: '03',
    titulo: 'Controles',
    dur: '30 min · cada 20 a 30 días',
    desc: 'Nueva antropometría, reajuste del plan según lo que muestren los números y educación alimentaria continua.',
  },
];

export const horarios = [
  { dia: 'Lunes',     hora: '15:00 — 20:00' },
  { dia: 'Miércoles', hora: '15:00 — 20:00' },
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
    a: 'Un nutricionista deportivo planifica la alimentación en función de la carga de entrenamiento y del calendario de competencia, no sólo del peso o la salud general. Define cuántos hidratos, proteínas y grasas necesitás cada día según lo que entrenás, qué comer antes, durante y después del estímulo, cómo hidratarte y cómo llegar a la competencia. En Nutrición FS ese plan se apoya siempre en una antropometría, para trabajar con datos de composición corporal y no con estimaciones.',
  },
  {
    q: '¿Qué es la antropometría ISAK y para qué sirve?',
    a: 'La antropometría ISAK es un protocolo internacional estandarizado para medir la composición corporal. Con calibre e instrumental certificado se toman pliegues cutáneos, perímetros musculares y diámetros óseos, y con esos datos se calcula el fraccionamiento de masas y el somatotipo. Sirve para saber con precisión cuánto de tu peso es músculo, grasa y hueso, y cuánto cambió cada componente entre una medición y la siguiente. Es más preciso y más reproducible que una balanza de bioimpedancia.',
  },
  {
    q: '¿Cuánto dura y qué incluye la primera consulta?',
    a: 'La primera consulta dura una hora e incluye la entrevista nutricional completa, la antropometría de partida y las pautas alimentarias a sostener hasta que se entregue el plan. Días después recibís el plan alimentario en formato digital, junto con una infografía educativa, un recetario saludable y la lista de supermercado. Después se hacen controles de 30 minutos cada 20 a 30 días.',
  },
  {
    q: '¿Atendés online o sólo presencial en Rosario?',
    a: 'Las dos modalidades. La consulta presencial es en el consultorio de Mendoza 2290, Rosario, los lunes y miércoles de 15 a 20 y los jueves de 9 a 15. La consulta online se coordina por videollamada, día y horario a convenir, y llega a deportistas de todo el país y del exterior. El plan alimentario, el seguimiento y los materiales educativos son los mismos en ambos casos.',
  },
  {
    q: '¿Hay que ser deportista de alto rendimiento para hacer una consulta?',
    a: 'No. Atiendo desde jugadores de selección y futbolistas profesionales hasta personas que corren su primera maratón, entrenan en el gimnasio tres veces por semana o juegan al rugby los fines de semana. El método es el mismo (medir, planificar y volver a medir); lo que cambia es la exigencia del plan. También trabajo con quienes buscan mejorar su composición corporal sin competir.',
  },
  {
    q: '¿Cada cuánto conviene repetir la antropometría?',
    a: 'Cada 20 a 30 días. Ese es el plazo en el que los cambios de masa muscular y masa grasa se vuelven medibles de forma confiable con protocolo ISAK. Medir más seguido suele mostrar variaciones que responden a hidratación o a la hora del día, no a cambios reales de composición corporal. En etapas de pretemporada o de puesta a punto para una competencia el control puede acortarse.',
  },
  {
    q: '¿Qué deportes atendés?',
    a: 'Trabajo con deportes de conjunto y de resistencia. Hoy acompaño deportistas de rugby (incluidos seleccionados nacionales), fútbol profesional en Argentina y en Italia, maratón y ultra trail. Antes fui nutricionista de la primera división de Newell’s Old Boys y actualmente del plantel de rugby del Club Universitario de Rosario. Cualquier disciplina con carga de entrenamiento planificada se beneficia del mismo enfoque.',
  },
  {
    q: '¿Cómo saco un turno?',
    a: 'Por WhatsApp al 341 562-9177. Elegí la modalidad (antropometría, consulta nutricional presencial o consulta online), contame tus objetivos y qué actividad física hacés, y coordinamos día y horario. Si no podés asistir a un turno ya reservado, avisá con 48 horas de anticipación; de lo contrario se abona la mitad del valor de la consulta.',
  },
];
