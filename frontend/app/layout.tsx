import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Celestino Cumbiça — Desenvolvedor Full-Stack',
  description:
    'Engenheiro Informático e Transcender da 42 Luanda. Desenvolvedor full-stack com foco em backend, redes e segurança.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
