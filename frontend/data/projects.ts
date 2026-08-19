export type ProjectStatus = 'active' | 'shipped' | 'school' | 'core';

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const FALLBACK_PROJECTS: Project[] = [
  {
    slug: 'mado',
    title: 'Mado — Plataforma de Cibersegurança (SIEM)',
    status: 'shipped',
    statusLabel: 'Deploy ativo',
    description:
      'Plataforma de Security Information and Event Management para monitorização, deteção e resposta a eventos de segurança, pensada para organizações angolanas em telecomunicações, banca e governo.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Celestinoramos/MADO',
    demoUrl: 'https://mado-pi.vercel.app',
    featured: true,
  },
  {
    slug: 'madoagent',
    title: 'MadoAgent — CLI de Análise de Vulnerabilidades',
    status: 'active',
    statusLabel: 'Em desenvolvimento ativo',
    description:
      'Agente que corre scanners reais (Semgrep, Bandit, Gitleaks, pip-audit/npm audit, ZAP + Nuclei), normaliza os achados, cruza-os com uma base RAG de OWASP/CWE e usa um motor LLM para gerar explicações claras e acionáveis.',
    tags: ['Python', 'RAG', 'SAST / DAST'],
    repoUrl: 'https://github.com/Celestinoramos/MADOAGENT',
    featured: true,
  },
  {
    slug: 'kwanza-erp',
    title: 'Kwanza ERP — Reconciliação Contabilística',
    status: 'shipped',
    statusLabel: 'Projeto próprio',
    description:
      'Sistema ERP orientado à reconciliação contabilística, automatizando o cruzamento e validação de registos financeiros.',
    tags: ['TypeScript', 'PostgreSQL', 'ERP'],
    featured: true,
  },
  {
    slug: 'agriconecta',
    title: 'AgriConecta — Marketplace Agrícola de Angola',
    status: 'shipped',
    statusLabel: 'Deploy ativo',
    description:
      'Marketplace digital que liga produtores agrícolas a compradores, facilitando a comercialização de produtos do campo.',
    tags: ['Next.js 14', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/Celestinoramos/agriconecta',
    demoUrl: 'https://agriconecta.vercel.app',
    featured: true,
  },
  {
    slug: '42chess',
    title: 'ft_transcendence — 42chess',
    status: 'school',
    statusLabel: '42 Luanda · Projeto de equipa',
    description:
      'Aplicação web full-stack de xadrez multiplayer desenvolvida em equipa: back-end em NestJS, base de dados PostgreSQL, front-end em Next.js, autenticação de utilizadores e ambiente containerizado com Docker.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Docker'],
    featured: true,
  },
  {
    slug: 'ft_irc',
    title: 'ft_irc — Servidor IRC',
    status: 'school',
    statusLabel: '42 Luanda · aprovado com bónus',
    description:
      'Servidor IRC compatível com RFC, com comunicação cliente-servidor multi-utilizador construída sobre sockets TCP em C++98.',
    tags: ['C++98', 'Sockets TCP', 'Protocolo RFC'],
    featured: true,
  },
  {
    slug: 'inception',
    title: 'Inception',
    status: 'school',
    statusLabel: '42 Luanda',
    description:
      'Infraestrutura containerizada numa VM própria, com serviços web seguros (NGINX/SSL, WordPress, MariaDB) e persistência de dados via Docker Compose.',
    tags: ['Docker Compose', 'NGINX/SSL', 'WordPress'],
    featured: true,
  },
  {
    slug: 'born2beroot',
    title: 'Born2beroot',
    status: 'school',
    statusLabel: '42 Luanda · aprovado com bónus',
    description: 'Configuração e hardening de segurança de um servidor Linux em ambiente virtualizado.',
    tags: ['Virtualização', 'Linux Hardening'],
    featured: true,
  },
  {
    slug: 'minishell',
    title: 'Minishell',
    status: 'core',
    statusLabel: '42 Luanda',
    description: 'Shell Unix compatível com Bash: gestão de processos, pipes, redirecionamentos e sinais.',
    tags: ['C', 'Processos Unix'],
    featured: true,
  },
  {
    slug: 'netpractice',
    title: 'NetPractice',
    status: 'school',
    statusLabel: '42 Luanda',
    description:
      'Resolução de 10 níveis progressivos de configuração e diagnóstico de redes: TCP/IP, subnetting e routing.',
    tags: ['TCP/IP', 'Subnetting', 'Routing'],
    featured: false,
  },
  {
    slug: 'philosophers',
    title: 'The Philosophers',
    status: 'school',
    statusLabel: '42 Luanda',
    description: 'Threads, mutexes, deadlocks & race conditions.',
    tags: ['C', 'Concorrência'],
    repoUrl: 'https://github.com/Celestinoramos/The_philos',
    featured: false,
  },
  {
    slug: 'minirt',
    title: 'MiniRT',
    status: 'school',
    statusLabel: '42 Luanda',
    description: 'Ray tracer em C com MinilibX.',
    tags: ['C', 'MinilibX'],
    featured: false,
  },
  {
    slug: 'push_swap',
    title: 'Push_swap',
    status: 'school',
    statusLabel: '42 Luanda',
    description: 'Algoritmos de ordenação em C sobre duas stacks.',
    tags: ['C', 'Algoritmos'],
    featured: false,
  },
  {
    slug: 'fractol',
    title: 'Fractol',
    status: 'school',
    statusLabel: '42 Luanda',
    description: 'Exploração de fractais (Mandelbrot e Julia) com MinilibX.',
    tags: ['C', 'MinilibX'],
    featured: false,
  },
  {
    slug: 'mappzzz',
    title: 'MappZZZ',
    status: 'school',
    statusLabel: 'Hackathon',
    description: 'Dashboard de zonas de risco, com gestão de utilizadores por papel e alertas.',
    tags: ['React', 'Next.js'],
    featured: false,
  },
];
