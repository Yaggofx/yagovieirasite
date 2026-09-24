# Yago Vieira — Portfólio

Site do portfólio em [Next.js](https://nextjs.org) (App Router) + Tailwind CSS, construído a partir do design **Meu Site** no Figma.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app` — páginas: Home, Work, About, Playground e os cases (`/work/odonto-metrics`, `/work/thera`)
- `src/components` — componentes compartilhados (menu flutuante, hero, seções, cards)
- `src/data/projects.ts` — lista de projetos exibida nos cards
- `public/images` — imagens do site

## Deploy

O projeto fica na raiz do repositório, então a Vercel detecta o Next.js automaticamente (Root Directory vazio / `./`).
