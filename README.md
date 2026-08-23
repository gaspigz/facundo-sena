# Nutrición FS — Lic. Facundo Sena

Landing page en **Astro** (sitio estático, sin frameworks de UI).

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/
  data/site.ts          ← TODO el contenido editable (textos, links, deportistas, horarios)
  layouts/Base.astro    ← <head>, SEO, JSON-LD, scripts de scroll/reveal
  components/           ← una sección por archivo
  styles/global.css     ← tokens de color, tipografía y utilidades
public/                 ← imágenes y videos
```

**Para cambiar textos, precios, horarios, deportistas o links de WhatsApp: editá
`src/data/site.ts`.** No hace falta tocar los componentes.

## Sistema visual

- Concepto: *el cuerpo como dato*. Reglas graduadas, numerales monoespaciados,
  jerarquía tipográfica fuerte.
- Paleta: carbón `#0A0A0B` + oro `#E4A50B` (tomado del logo `fs`) + hueso `#F1EEE7`.
- Tipografías (Google Fonts): **Archivo** (titulares y UI), **Newsreader**
  (textos editoriales), **IBM Plex Mono** (etiquetas y números).

## Escudos de las instituciones

El carrusel de trayectoria dibuja un monograma (`NOB`, `CUR`, `CENN`…) cuando no
hay archivo de escudo. Para usar los escudos reales:

1. Guardá el archivo en `public/escudos/` (PNG o SVG con fondo transparente).
2. En `src/data/site.ts`, agregá el campo `escudo` a esa institución:

```ts
{ sigla: 'NOB', nombre: "Newell's Old Boys", rol: '…', anios: '…',
  escudo: '/escudos/newells.png' },
```

El componente cambia solo de monograma a imagen.

## Videos

Los clips de fondo son de **Pexels** (licencia gratuita, sin atribución
obligatoria) y viven en `public/videos/`:

| Archivo | Uso |
|---|---|
| `hero-gym.mp4` | fondo del hero |
| `antropometria.mp4` | tarjeta de servicio 01 |
| `nutricion.mp4` | tarjeta de servicio 02 |
| `running.mp4` | fondo del bloque de reserva |
| `gym-dark.mp4` | de reserva, sin usar |

Todos menos el del hero cargan con `preload="none"` y sólo se reproducen cuando
entran en pantalla.

## SEO

Objetivo: posicionar para *nutricionista deportivo Rosario*, *nutrición
deportiva Rosario*, *antropometría Rosario* y *nutricionista Rosario*.

Lo que ya está implementado:

- **Title / meta description** con la query comercial al frente.
- **H1** con el término principal (`Nutricionista deportivo en Rosario`) integrado
  al bloque tipográfico del hero.
- **H2/H3 con carga semántica** y una sección de **preguntas frecuentes** con 8
  respuestas autocontenidas (40 a 90 palabras) apuntadas a búsquedas de cola larga.
- **JSON-LD `@graph`**: `MedicalBusiness` + `LocalBusiness` (con `geo`,
  `areaServed`, `openingHours`, `hasOfferCatalog`), `Person` con matrícula y
  certificación ISAK, dos `Service` y un `FAQPage`.
- **`/robots.txt`** que habilita a Googlebot, Bingbot y a los crawlers de IA
  (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Applebot) y apunta al sitemap.
- **`/sitemap.xml`** y **`/llms.txt`**, los tres generados desde `src/pages/`
  usando la constante `SITE`.
- **Alt text descriptivo** en todas las imágenes y fecha de actualización visible.

> **Antes de publicar: cambiá `SITE` en `src/data/site.ts`** por el dominio real.
> De ahí salen el canonical, las Open Graph, el JSON-LD, el sitemap y el robots.

### Lo que falta y no depende del código

El sitio cubre el on-page; el resto del posicionamiento local se juega afuera:

1. **Google Business Profile** en Mendoza 2290, categoría "Nutricionista",
   con fotos, horarios y el link al sitio. Es el factor más pesado del map pack.
2. **Reseñas** de pacientes en ese perfil (apuntar a 20+ con respuesta).
3. **NAP consistente** (nombre, dirección, teléfono idénticos) en Instagram,
   Google, y directorios locales.
4. **Google Search Console** y Analytics: dar de alta el dominio y enviar el sitemap.
5. **Menciones de marca** (notas, podcasts, clubes, colegio de nutricionistas):
   pesan más que los backlinks para que ChatGPT y Perplexity citen el sitio.

## Widget de WhatsApp

`src/components/WhatsappFab.astro`. Botón fijo abajo a la derecha que aparece
recién cuando el visitante pasó el 60% del hero, para no competir con los CTAs
de arriba. Abre un panel con las tres modalidades (antropometría, presencial,
online), cada una con su mensaje prearmado de `cta` en `src/data/site.ts`.

Cierra con Esc, con la X o haciendo click afuera, y maneja `aria-expanded` /
`aria-controls`. El avatar es `public/avatar-fs.jpg` (200×200, 8 KB, recortado
de `perfil4.jpeg`).

## Notas

- `public/` conserva todo el material original (`nob1-9`, `perfil2-4`, `cenn1-4`,
  `flyer-instagram`, `images/`). Lo que no se usa se copia igual al build: si
  querés un `dist/` más liviano, borrá lo que no vayas a necesitar.
- La navegación superior muestra sólo logo + CTA por debajo de 880px; los enlaces
  a las secciones siguen disponibles en el pie.
