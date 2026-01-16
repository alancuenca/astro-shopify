# Astro + Shopify Headless Storefront

A high-performance headless ecommerce storefront built with Astro, Svelte 5, and Tailwind CSS v4 — powered by Shopify's Storefront API.

## ✨ Features

- **Headless Architecture** — Decoupled frontend with full creative control
- **Server-Side Rendering** — Fast initial page loads with Astro's SSR
- **Edge Deployment** — Optimized for Netlify Edge Functions
- **Cart Persistence** — Client-side cart state with Nanostores
- **Type-Safe** — Full TypeScript support with Zod schema validation
- **SEO Optimized** — Automatic sitemap, meta tags, and Open Graph support
- **Responsive Design** — Mobile-first with Tailwind CSS v4

## 🛠 Tech Stack

| Technology                                                         | Version | Purpose                        |
| :----------------------------------------------------------------- | :------ | :----------------------------- |
| [Astro](https://astro.build)                                          | 5.x     | Static site generator with SSR |
| [Svelte](https://svelte.dev)                                          | 5.x     | Interactive components         |
| [Tailwind CSS](https://tailwindcss.com)                               | 4.x     | Utility-first styling          |
| [Shopify Hydrogen React](https://shopify.dev/docs/api/hydrogen-react) | 2025.x  | Shopify primitives & hooks     |
| [Nanostores](https://github.com/nanostores/nanostores)                | 1.x     | Lightweight state management   |
| [Zod](https://zod.dev)                                                | 4.x     | Runtime schema validation      |
| [Netlify](https://netlify.com)                                        | —      | Hosting & edge functions       |

## 📋 Prerequisites

- Node.js 20+
- npm, yarn, or pnpm
- Shopify store with Headless channel enabled

## 🧑‍🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd astro-shopify
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   PUBLIC_SHOPIFY_SHOP=your-store.myshopify.com
   PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_public_token
   PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_private_token
   ```
4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🔐 Shopify Configuration

### Setting Up the Headless Channel

1. Log in to your Shopify admin at [accounts.shopify.com](https://accounts.shopify.com/store-login)
2. Install the [Shopify Headless channel](https://apps.shopify.com/headless)
3. Click **Add Storefront** to generate API credentials
4. Copy both `public` and `private` access tokens to your `.env` file

### Required API Scopes

At minimum, enable these Storefront API scopes:

- `unauthenticated_read_product_listings`
- `unauthenticated_read_product_inventory`
- `unauthenticated_write_checkouts`
- `unauthenticated_read_checkouts`

### Troubleshooting

| Issue                 | Solution                                                                                 |
| :-------------------- | :--------------------------------------------------------------------------------------- |
| `401 Unauthorized`  | Verify API scopes and ensure you're using the**Storefront API**, not the Admin API |
| Empty cart sidebar    | Add an image to your test products in Shopify admin                                      |
| `403 Access Denied` | Check that your access token matches the correct environment (public vs private)         |

## 🚀 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── CartDrawer.svelte
│   │   └── ...
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── NotFoundLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── collections/
│   │   │   └── [handle].astro
│   │   └── products/
│   │       └── [...handle].astro
│   ├── stores/
│   │   └── cart.ts
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── config.ts
│       ├── graphql.ts
│       ├── schemas.ts
│       └── shopify.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Key Directories

| Directory           | Purpose                                                    |
| :------------------ | :--------------------------------------------------------- |
| `src/pages/`      | File-based routing — each `.astro` file becomes a route |
| `src/components/` | Reusable Astro and Svelte components                       |
| `src/utils/`      | Shopify API client, GraphQL queries, and helpers           |
| `src/stores/`     | Nanostores for client-side state (cart, UI)                |
| `src/assets/`     | Images and videos processed by Astro's build pipeline      |
| `public/`         | Static assets served as-is (favicon, robots.txt)           |

## 🧞 Commands

All commands are run from the project root:

| Command               | Action                                 |
| :-------------------- | :------------------------------------- |
| `npm install`       | Install dependencies                   |
| `npm run dev`       | Start dev server at `localhost:4321` |
| `npm run build`     | Build production site to `./dist/`   |
| `npm run preview`   | Preview production build locally       |
| `npm run typecheck` | Run TypeScript type checking           |
| `npm run astro ...` | Run Astro CLI commands                 |

## 🌐 Deployment

This project is configured for **Netlify** deployment:

1. Connect your repository to Netlify
2. Set environment variables in Netlify dashboard:
   - `PUBLIC_SHOPIFY_SHOP`
   - `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
   - `PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
3. Deploy — Netlify will auto-detect the Astro framework

### Build Settings

| Setting           | Value             |
| :---------------- | :---------------- |
| Build command     | `npm run build` |
| Publish directory | `dist`          |
| Node version      | `20`            |

## ⚡️ Performance

Built for Core Web Vitals excellence:

## 📄 License

MIT — see [LICENSE](LICENSE) for details.
