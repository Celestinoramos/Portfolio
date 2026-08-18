# Portfólio de Celestino Cumbiça — Next.js + NestJS

Projeto full-stack: frontend em **Next.js 14** (App Router + Tailwind) e backend em **NestJS**
que serve os projetos via API e recebe mensagens do formulário de contacto.

```
celestino-portfolio/
├── backend/   ← API NestJS  (GET /api/projects, POST /api/contact)
└── frontend/  ← Site Next.js (consome a API, com fallback para dados locais)
```

## Correr localmente

Abre dois terminais.

**1) Backend**
```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
# fica em http://localhost:3001/api
```

**2) Frontend**
```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
# fica em http://localhost:3000
```

Abre `http://localhost:3000`. Se o backend não estiver a correr, o site continua a funcionar
com os dados de reserva (ficheiro `frontend/data/projects.ts`) e mostra um aviso discreto.

## Endpoints da API

| Método | Rota                     | Descrição                              |
|--------|--------------------------|-----------------------------------------|
| GET    | `/api/projects`          | Todos os projetos                       |
| GET    | `/api/projects?featured=1` | Só os projetos em destaque            |
| GET    | `/api/projects/:slug`    | Um projeto específico                   |
| POST   | `/api/contact`           | `{ name, email, message }` → guarda a mensagem |

O `POST /api/contact` valida os dados e, por agora, apenas regista a mensagem em memória
(`backend/src/contact/contact.service.ts`). Antes de publicar, troca isso por um envio de
email real — há um exemplo comentado no código a usar o [Resend](https://resend.com), mas
funciona com qualquer serviço (Nodemailer, SendGrid, etc.).

## Publicar (deploy)

**Backend → Render ou Railway**
1. Cria um novo Web Service a apontar para a pasta `backend`.
2. Build command: `npm install && npm run build`
3. Start command: `npm run start:prod`
4. Variável de ambiente `FRONTEND_URL` = o domínio do teu site Vercel (para o CORS aceitar pedidos).

**Frontend → Vercel**
1. Importa o repositório, define o "Root Directory" como `frontend`.
2. Variável de ambiente `NEXT_PUBLIC_API_URL` = o URL da API no Render/Railway + `/api`
   (ex: `https://celestino-api.onrender.com/api`).
3. Deploy.

⚠️ Nota sobre o plano gratuito do Render: o servidor "adormece" ao fim de alguns minutos sem
tráfego, e o primeiro pedido depois disso demora ~30s a acordar. O fallback local do frontend
cobre esse cenário, mas se preferires respostas sempre rápidas considera o Railway (também tem
plano gratuito, sem "sleep") ou fazer upgrade do plano no Render.

## Próximos passos sugeridos

- Ligar o `ContactService` a um envio de email real.
- Trocar os dados em memória (`project.data.ts`) por uma base de dados (ex: Postgres + Prisma)
  se quiseres editar os projetos sem voltar a fazer deploy do backend.
- Adicionar o link de LinkedIn (está como placeholder `#` em `ContactSection.tsx`).
