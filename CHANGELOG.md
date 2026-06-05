# Changelog

## Sesión — Junio 2026 — Reimplementación constructora-vargas + auto-deploy Cloudflare Pages

### Reimplementación completa del mini-sitio constructora-vargas
Se reemplazó todo el mini-sitio siguiendo un diseño HTML dado, con 8 componentes nuevos y tema propio.

### Cloudflare Pages conectado a GitHub con auto-deploy
El repo `github.com/valenz74/landing-factory` ya está conectado a Cloudflare Pages.
Cada push a `main` ejecuta build automático y despliega en `https://landing-factory.pages.dev`.

### Convención de assets para mini-sitios
Se definió e incorporó en `AGENTS.md` que cada mini-sitio usa `public/images/{slug}/` para sus assets.

### Archivos modificados / creados
| Archivo | Cambio |
|---------|--------|
| `AGENTS.md` | Documentado auto-deploy Cloudflare Pages + asset convention |
| `CHANGELOG.md` | Nueva entrada de sesión |
| `src/sites/constructora-vargas/config.ts` | Datos reales (teléfono actualizado) |
| `src/sites/constructora-vargas/theme.ts` | Nuevo — design tokens (colores, fuentes, espaciado) |
| `src/sites/constructora-vargas/styles.css` | Nuevo — clases custom (hero-gradient, asymmetric-grid, etc.) |
| `src/sites/constructora-vargas/layout.tsx` | Header/footer con Material Symbols, logo, certificaciones |
| `src/sites/constructora-vargas/page.tsx` | Compone 8 secciones |
| `src/sites/constructora-vargas/components/Hero.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/Servicios.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/Proyectos.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/WhyUs.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/Testimonios.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/Process.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/Presence.tsx` | Nuevo |
| `src/sites/constructora-vargas/components/CtaForm.tsx` | Nuevo |
| `public/images/constructora-vargas/logo.png` | Nuevo — logo extraído del diseño original |

---

## Sesión — Junio 2026 — Convención de assets para mini-sitios

Se definió e incorporó en `AGENTS.md` la convención para organizar assets de mini-sitios:

- Cada mini-sitio almacena sus assets (logo, fotos, etc.) en `public/images/{slug}/`
- Se referencian en componentes como `/images/{slug}/archivo.webp`
- No se mezclan assets entre distintos mini-sitios
- El portfolio de la landing permanece en `public/images/portfolio/`

### Archivos modificados
| Archivo | Cambio |
|---------|--------|
| `AGENTS.md` | Agregada regla de assets, paso en "Cómo agregar", estructura `public/images/{slug}/` en el árbol |

---

## Sesión — Junio 2026 — Correcciones y deploy a Cloudflare Pages

### Problemas encontrados y soluciones aplicadas

#### 1. Favicon no cargaba
**Problema:** El favicon se había movido de `src/app/favicon.ico` (ruta automática de Next.js) a `public/` con un `<link>` manual en `layout.tsx`. Next.js 15 App Router sirve automáticamente `app/favicon.ico` sin necesidad de `<link>` en el `<head>`.

**Solución:** Copiar `public/favicon.ico` a `src/app/favicon.ico` y eliminar `<link rel="icon">` de `layout.tsx`.

#### 2. `.gitignore` bloqueaba `.env.example`
**Problema:** El patrón `.env*` ignoraba `.env.example`, impidiendo trackearlo en el repo.

**Solución:** Cambiar `.env*` → `.env` para ignorar solo `.env`, `.env.local`, etc., pero trackear `.env.example`.

#### 3. URLs apuntaban a Vercel
**Problema:** `metadata.ts`, `robots.txt`, `sitemap.xml` y `AGENTS.md` tenían URLs de `hubdelandings.vercel.app`.

**Solución:** Reemplazar por `landing-factory.pages.dev` en todos los archivos.

#### 4. Build fallaba en Cloudflare por ESLint
**Problema:** ESLint en modo estricto (Next.js 15 + React 19) bloqueaba el build con:
- `CookieConsent.tsx:40` — `setState` llamado dentro del cuerpo de `useEffect`
- `page.tsx` — 3 warnings por variables/funciones definidas pero no usadas

**Solución:**
- `CookieConsent`: reemplazar `useState(false)` + `useEffect` por `useState(() => { ... })` con inicializador lazy
- `page.tsx`: eliminar funciones `SectionReveal` y `SectionRevealMotion` (no usadas); limpiar parámetro `i`

#### 5. Deploy a Cloudflare Pages
**Proceso:** Crear cuenta en Cloudflare → Workers & Pages → Pages → Connect to Git → seleccionar repo → Build command: `npm run build` → Build output directory: `out` → Deploy.

### Archivos modificados
| Archivo | Cambio |
|---------|--------|
| `src/app/favicon.ico` | Copiado de `public/` |
| `src/app/layout.tsx` | Eliminado `<link rel="icon">` manual |
| `.gitignore` | `.env*` → `.env` |
| `src/lib/metadata.ts` | URL fallback: Vercel → `landing-factory.pages.dev` |
| `public/robots.txt` | URL del sitemap actualizada |
| `public/sitemap.xml` | URLs actualizadas |
| `src/components/ui/CookieConsent.tsx` | Eliminado `useEffect` con `setState`, reemplazado por inicializador lazy |
| `src/app/page.tsx` | Eliminadas `SectionReveal`, `SectionRevealMotion`; limpiados `(item, i)` → `(item)` |
| `AGENTS.md` | Documentación completa de la sesión |

---

## Sesión — Contextualización del proyecto
- `AGENTS.md` reestructurado: unificado como PixelHub, movido histórico a CHANGELOG
- `README.md` expandido con contexto de negocio
- `src/lib/metadata.ts`: SEO actualizado de "Minisitios" a "PixelHub"
- `package.json`: name cambiado a `pixelhub`
- Headers de contexto agregados a archivos fuente
