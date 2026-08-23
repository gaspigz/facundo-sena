import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

/**
 * Se permite explícitamente a los crawlers de búsqueda con IA (GPTBot,
 * OAI-SearchBot, ClaudeBot, PerplexityBot): son los que alimentan las
 * citas en ChatGPT, Claude y Perplexity.
 */
const body = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
