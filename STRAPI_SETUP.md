# Strapi CMS – Blog setup

This project loads blog posts from **Strapi**. When Strapi is configured and returning articles, the `/blog` page shows them; otherwise it shows default static cards.

**Full step-by-step guide:** [docs/STRAPI_BLOG_SETUP.md](docs/STRAPI_BLOG_SETUP.md)

That guide covers:

1. **Create the Strapi project** – `npx create-strapi@latest strapi --quickstart`
2. **Create the Blog API** – Article content type (title, slug, excerpt, content, cover) and permissions
3. **Add content** – Create and publish articles in Content Manager
4. **Connect Next.js** – Set `STRAPI_URL` (and optional `STRAPI_API_TOKEN`) in `.env.local` and restart
5. **Where data is used** – `lib/strapi.js`, `/blog`, `/blog/[slug]`

### Quick env (project root)

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

### Scripts (root package.json)

- `npm run strapi:dev` – run Strapi from `strapi` folder
- `npm run strapi:build` – build Strapi
