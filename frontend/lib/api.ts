import { FALLBACK_PROJECTS, Project } from '@/data/projects';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

/**
 * Vai buscar os projetos à API NestJS. Se a API estiver em baixo (por exemplo,
 * o Render "adormeceu" no plano gratuito) usa os dados locais como fallback,
 * para o site nunca ficar vazio.
 */
export async function getProjects(featuredOnly = false): Promise<{ data: Project[]; live: boolean }> {
  try {
    const qs = featuredOnly ? '?featured=1' : '';
    const res = await fetch(`${API_URL}/projects${qs}`, {
      // revalida a cada 60s em produção; em dev não guarda cache
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`API respondeu ${res.status}`);
    const data = (await res.json()) as Project[];
    return { data, live: true };
  } catch (err) {
    const data = featuredOnly ? FALLBACK_PROJECTS.filter((p) => p.featured) : FALLBACK_PROJECTS;
    return { data, live: false };
  }
}

export async function sendContact(payload: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const body = await res.json();
  if (!res.ok) {
    const msg = Array.isArray(body.message) ? body.message.join(' ') : body.message;
    throw new Error(msg || 'Não foi possível enviar a mensagem.');
  }
  return body as { success: boolean; message: string };
}
