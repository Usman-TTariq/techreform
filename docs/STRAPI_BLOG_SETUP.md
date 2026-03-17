# Strapi Blog – Complete Setup Guide

Step-by-step guide to create a Strapi project, build the Blog API, and load that data in the Next.js site.

**Supported Strapi content types:** The Next.js app works with:
- **`blog`** (plural: `blogs`) – API: `/api/blogs`. Fields: `blogTitle`, `blogDesc`. Post URLs use Strapi’s `documentId`.
- **`article`** (plural: `articles`) – API: `/api/articles`. Fields: `title`, `slug`, `excerpt`, `content`, `cover`. Post URLs use `slug`.

---

## Part 1: Create the Strapi project

### Step 1.1 – Generate the Strapi app

From the **project root** (folder that contains `package.json` and the `app` folder), run:

```bash
npx create-strapi@latest strapi --quickstart
```

- When asked **“Please log in or sign up”**, choose **Skip** (arrow keys + Enter).
- Wait for the CLI to create the `strapi` folder and install dependencies (SQLite is used by default).

### Step 1.2 – Start Strapi and create admin user

```bash
cd strapi
npm run develop
```

- In the browser, open **http://localhost:1337/admin**.
- Fill in **First name**, **Last name**, **Email**, **Password** and create the first admin user.
- Log in to the Strapi Admin Panel.

---

## Part 2: Create the Blog API (Article content type)

### Step 2.1 – Open Content-Type Builder

1. In the left sidebar, click **Content-Type Builder**.
2. Click **Create new collection type**.

### Step 2.2 – Name the collection type

1. **Display name:** type `Article` (this will create the API route `/api/articles`).
2. Click **Continue**.

### Step 2.3 – Add fields

Add these fields one by one (click **Add another field** for each):

| # | Field name | Type | Settings |
|---|------------|------|----------|
| 1 | **title** | **Text** → Short text | Required: ON |
| 2 | **slug** | **UID** | Attached field: `title`, Required: ON |
| 3 | **excerpt** | **Text** → Long text | Required: OFF |
| 4 | **content** | **Rich text** (or **Text** → Long text) | Required: OFF |
| 5 | **cover** | **Media** → Single image | Required: OFF |

- After adding each field, click **Finish** (or **Add another field**).
- When all five are added, click **Save**.
- Strapi will restart; wait for it to come back.

### Step 2.4 – Enable Draft & Publish (optional but recommended)

- In **Content-Type Builder**, click **Article**.
- Open **Advanced settings** (tab or section).
- Enable **Draft & Publish** so articles can be saved as draft and only shown when **Published**.
- Save if prompted.

---

## Part 3: Allow the Next.js app to call the Blog API

### Step 3.1 – Open Public role permissions

1. Left sidebar → **Settings** (gear icon).
2. Under **Users & Permissions**, click **Roles**.
3. Click the **Public** role.

### Step 3.2 – Enable Blog/Article API for Public

1. In the **Permissions** list, find **Article** (or **Blog**, if your collection type is named “blog”).
2. Enable:
   - **find** – list posts (used for `/blog` page).
   - **findOne** – get one post by id/documentId (used for `/blog/[slug]` page).
3. Click **Save** (top right).

Your Blog API is then available at:

- **If you use “Article”:** `GET http://localhost:1337/api/articles`
- **If you use “Blog”:** `GET http://localhost:1337/api/blogs` (list), `GET http://localhost:1337/api/blogs/:documentId` (single)

(Optional: test in browser: **http://localhost:1337/api/articles** – you should get `{"data":[]}` until you add content.)

---

## Part 4: Add blog posts in Strapi

### Step 4.1 – Open Content Manager

1. Left sidebar → **Content Manager**.
2. Under **Collection types**, click **Article**.

### Step 4.2 – Create an article

1. Click **Create new entry**.
2. Fill in:
   - **title** – e.g. `My First Blog Post`
   - **slug** – auto-filled from title, or edit (e.g. `my-first-blog-post`)
   - **excerpt** – short summary (optional)
   - **content** – full post body (optional)
   - **cover** – click to upload an image (optional)
3. Click **Save** (draft) or **Publish** (only published articles appear on the site).
4. Create one or two more entries if you like.

Only **published** entries are returned by the API and shown on the Next.js blog.

---

## Part 5: Connect Next.js to Strapi and get the data

### Step 5.1 – Set environment variables

In the **project root** (same folder as the Next.js `package.json`), create or edit **`.env.local`**:

```env
# Strapi (blog API)
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

- **Local Strapi:** Use `http://localhost:1337` and leave `STRAPI_API_TOKEN` empty (Public permissions are enough).
- **Strapi hosted (e.g. Strapi Cloud):** Use your live URL, e.g. `https://your-app.strapiapp.com`, and add an API token if you did not enable Public `find`/`findOne`.

### Step 5.2 – Restart Next.js

Stop the dev server (Ctrl+C) and start again:

```bash
npm run dev
```

### Step 5.3 – Where the data is used in the project

| What | Where |
|------|--------|
| Fetch articles | `lib/strapi.js` – `getArticles()`, `getArticleBySlug(slug)` |
| Blog listing page | `app/blog/page.jsx` – calls `getArticles()` and passes to `BlogContentSection` |
| Blog post page | `app/blog/[slug]/page.jsx` – calls `getArticleBySlug(slug)` |
| Display cards | `app/components/blog-content-section/index.jsx` – renders `articles` prop |

- Open **http://localhost:3000/blog** – you should see your Strapi articles as cards.
- Click **Read More** on an article – you should see the single post at **http://localhost:3000/blog/[slug]**.

---

## Quick reference

### Strapi API (Blog)

- Base URL: value of `STRAPI_URL` (e.g. `http://localhost:1337`).
- List published articles: `GET {STRAPI_URL}/api/articles?populate=cover`
- Single article by slug: `GET {STRAPI_URL}/api/articles?filters[slug][$eq]=your-slug&populate=cover`

### Env vars (Next.js root)

| Variable | Description |
|----------|-------------|
| `STRAPI_URL` | Strapi server URL (no trailing slash). |
| `STRAPI_API_TOKEN` | Optional. Use if you don’t use Public `find`/`findOne`. |

### Running both apps

- **Terminal 1 – Strapi:** `cd strapi && npm run develop` (or from root: `npm run strapi:dev`).
- **Terminal 2 – Next.js:** `npm run dev`.

If Strapi is not running or `STRAPI_URL` is wrong, the `/blog` page falls back to the default static cards.
