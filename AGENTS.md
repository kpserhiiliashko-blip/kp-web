# KP-web — Agent guidance

## Commands

| Command                 | Action                                                          |
| ----------------------- | --------------------------------------------------------------- |
| `npm run build-ghpages` | Build to `_site/` with `--pathprefix=/kp-web/` for GitHub Pages |
| `npm start`             | Dev server at `http://localhost:8080` (no prefix)               |
| `npm run start:prod`    | Build + serve `_site/` via `eleventy-dev-server`                |
| `npm run format`        | Prettier. No linter, typechecker, or test framework exists.     |

## Architecture

**Eleventy v3** static site for a Ukrainian utility company. Deployed to **GitHub Pages** via `.github/workflows/deploy.yml` (push to `main` → `npm ci` → `npm run build-ghpages`).

```
src/
├── _admin/         # Sveltia CMS (passthrough copy → _site/admin/)
│   ├── config.yml
│   └── index.html
├── _assets/        # Static files (passthrough copy → _site/assets/)
│   ├── style.css
│   ├── script.js
│   └── uploads/
├── _data/          # Global data: site.js (routes, navigation, org, tariffsUpdated)
├── _includes/      # Nunjucks layouts: app.njk (base), post.njk (news detail)
├── documents/      # Markdown, permalink: false (collection only, no pages)
├── news/           # Markdown with layout: post.njk, sorted by date desc
├── services/       # Markdown, permalink: false (collection only)
├── tariffs/        # Markdown, permalink: false (collection only)
├── pages/          # Static pages: contacts, documents, news, services, tariffs
└── index.html      # Homepage
```

- Data files are ESM (`*.js`), not JSON
- Navigation is manual — adding a page means updating `src/_data/site.js` (routes + navigation in one file)
- `site.js` uses `export default { routes, navigation, org, tariffsUpdated }` — accessible in templates via `{{ site.routes.* }}`, `{{ site.org.* }}`, `{{ site.navigation.* }}`, `{{ site.tariffsUpdated }}`. Template loop variables (`{% for navigation in site.navigation.items %}` → inner `{{ navigation.url }}`) shadow the outer `site.navigation`.
- `documents.11tydata.js`, `services.11tydata.js`, `tariffs.11tydata.js` set `permalink: false` — collections only, no rendered pages
- `eleventy.config.js` uses `11ty.ts` for type hints only; its `defineConfig` is a no-op

## Key quirks

- **pathPrefix**: GitHub Pages serves at `/kp-web/`. The `build-ghpages` script passes `--pathprefix=/kp-web/`. ALL absolute paths in templates must use the `| url` Nunjucks filter — raw `/path` strings won't get the prefix.
- **Passthrough**: `_assets/` and `_admin/` are in `src/` with `_` prefix (prevents template processing). They're remapped to `/assets/` and `/admin/` in output via `addPassthroughCopy` object form. `_admin` also has `eleventyConfig.ignores.add()` to prevent template engine from touching it.
- **CMS**: Sveltia CMS loaded from unpkg (version pinned in `admin/index.html`). GitHub backend, repo `kpserhiiliashko-blip/kp-web`. Media uploads stored in `src/_assets/uploads/`.
- **Dates**: Custom filter `dmyDateFormat` with `uk-UA` locale.
- **Script.js**: Handles nav burger + redirects GitHub OAuth tokens to `/admin/`. The "Повернутися на сайт" link derives site root from `window.location.pathname` (works with and without prefix).
- **Husky**: Pre-commit hook runs Prettier on staged files via `prettier --write`.
- **README is stale**: References CloudCannon CMS, wrong data file paths (`.json` vs `.js`). Trust configs and source code.

## CMS content editing

Collections managed via Sveltia CMS at `/admin/`:

- **news** (`src/news/`) — slug pattern `{{year}}-{{month}}-{{day}}-{{slug}}`
- **documents** (`src/documents/`) — slug pattern `{{year}}-{{month}}-{{day}}-{{slug}}`, not rendered as pages
- **services** (`src/services/`) — slug pattern `{{slug}}`, not rendered as pages; fields: name, icon, description
- **tariffs** (`src/tariffs/`) — slug pattern `{{slug}}`, not rendered as pages; fields: name, price, unit, category (water/hot)
