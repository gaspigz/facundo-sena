import type { APIRoute } from 'astro';
import { SITE, perfil, servicios, faq } from '../data/site';

const body = `# Nutrición FS — Lic. Facundo Sena
> Nutricionista deportivo y antropometrista ISAK Nivel II en Rosario, Argentina.
> Estudio de composición corporal con protocolo ISAK y planes alimentarios
> periodizados para deportistas. Atención presencial en Rosario y online a todo el país.

## Profesional
- Nombre: Lic. Facundo Sena
- Matrícula: ${perfil.matricula}
- Certificación: ${perfil.isak}
- Consultorio: Mendoza 2290, Rosario, Santa Fe, Argentina
- Teléfono / WhatsApp: ${perfil.telefono}
- Instagram: ${perfil.instagram}

## Servicios
${servicios.map((s) => `- ${s.titulo}: ${s.subtitulo}. ${s.desc}`).join('\n')}

## Trayectoria
- Nutricionista de la primera división de Newell's Old Boys (2022-2023).
- Nutricionista del plantel de rugby del Club Universitario de Rosario (2023 a la actualidad).
- Disertante en el CENN, Congreso Nacional de Educación, Nutrición y Neurociencias, Entre Ríos.
- Acompaña deportistas de rugby de selección, fútbol profesional, maratón y ultra trail.

## Horarios
- Presencial: lunes y miércoles de 15 a 20 h; jueves de 9 a 15 h.
- Online: a coordinar.

## Preguntas frecuentes
${faq.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Enlaces
- [Sitio](${SITE}/): landing principal con servicios, trayectoria y turnos.
- [Servicios](${SITE}/#servicios): antropometría ISAK II y nutrición deportiva.
- [Preguntas frecuentes](${SITE}/#preguntas): dudas habituales sobre consultas y mediciones.
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
