# PixelHub — Contexto para AI

> **Codebase:** `landing-factory` | **Marca:** PixelHub | **Servicio:** Mini-sitios web profesionales

## Entrada rápida (nueva sesión)

Para retomar contexto rápidamente en una sesión nueva:

1. **Leer este archivo** — contexto de arquitectura, reglas y negocio
2. **`CHANGELOG.md`** — últimos cambios y decisiones
3. **`src/lib/sites.ts`** — registro de mini-sitios activos
4. **`package.json`** — scripts disponibles
5. **`git log --oneline -10`** — commits recientes

## Propósito

Generador y host de mini-sitios web estáticos profesionales, optimizados para conversión.
Un mismo codebase Next.js sirve:

- **Landing principal (PixelHub)** — vende el servicio de creación de mini-sitios
- **Mini-sitios de clientes** — bajo rutas `/[slug]`, cada uno con layout, SEO, colores y tracking propios

## Dueño / Contacto

- **Jose Valenzuela** — josevalenzuelamolina@proton.me
- **WhatsApp:** +57 323 364 4603
- **GitHub:** https://github.com/valenz74/landing-factory
- **URL:** https://landing-factory.pages.dev

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **CSS:** Tailwind CSS v3
- **Animaciones:** Framer Motion
- **Node.js:** 20.x (usar `nvm use`)
- **Deploy:** Cloudflare Pages (static export, carpeta `out/`)
  - Auto-deploy desde GitHub: cada push a `main` ejecuta `npm run build` y publica `out/`
  - Dashboard: Cloudflare Pages → landing-factory → builds
  - URL: https://landing-factory.pages.dev
- **URL base configurable:** `NEXT_PUBLIC_BASE_URL` en env

## Comandos

```bash
npm run dev      # Desarrollo en http://localhost:3000
npm run build    # Build SSG (static export para Cloudflare)
npm run lint     # Linter
npx tsc --noEmit # Type check
```

## Reglas para el agente

- **No editar** `src/app/[slug]/page.tsx` (es genérico y carga dinámicamente los mini-sitios)
- **Favicon** debe estar en `src/app/favicon.ico` (manejo automático de Next.js), **no** referenciarlo manualmente en `<head>`
- **URL base**: usar `NEXT_PUBLIC_BASE_URL` en ENV para sobreescribir; fallback en `src/lib/metadata.ts`
- **Archivos estáticos** (`robots.txt`, `sitemap.xml`) están en `public/` y deben actualizarse manualmente si cambia la URL
- **Siempre verificar** con `npx tsc --noEmit` después de cambios
- **Build de prueba** con `npm run build` antes de commitear (se genera `out/`)
- **No committear** archivos `.env` (están en `.gitignore`), pero **sí** `.env.example`
- **No llamar `setState` dentro de `useEffect`** — ESLint lo rechaza en el build de Cloudflare. Usar inicializador lazy de `useState` en su lugar.
- **Usar export default puro** — funciones helper definidas dentro del mismo archivo pueden quedar sin usar y romper el build de ESLint. Eliminarlas si no se referencian.
- **Headers de archivo**: los comentarios `// PixelHub — ...` al inicio de archivos son solo contexto para desarrollo, no afectan el build.
- **Assets de mini-sitios**: cada mini-sitio tiene sus propios archivos estáticos en `public/images/{slug}/` (logo, fotos, etc.). No mezclar assets de diferentes sitios. En componentes se referencian como `/images/{slug}/archivo.webp`.

## Identidad del proyecto

| Ámbito | Nombre | Uso |
|--------|--------|-----|
| Repo / codebase | `landing-factory` | package.json, GitHub, despliegue |
| Marca visual | **PixelHub** | Navbar, UI, comunicación visual |
| SEO / servicio | **PixelHub** | Metadata, title, description |

Todo está unificado bajo **PixelHub** como marca principal. El SEO ya no usa "Minisitios".

## Estructura del proyecto

```
src/
├── app/
│   ├── favicon.ico
│   ├── layout.tsx          ← Layout raíz (html/body + TrackingPixels)
│   ├── page.tsx            ← Landing principal PixelHub (~975 líneas)
│   └── [slug]/
│       ├── layout.tsx      ← Layout dinámico (carga config del mini-sitio)
│       └── page.tsx        ← Renderiza el mini-sitio (generateStaticParams)
├── sites/
│   └── constructora-vargas/  ← Demo de mini-sitio
│       ├── index.ts
│       ├── config.ts
│       ├── layout.tsx
│       ├── page.tsx
│       └── components/       ← Hero, Servicios, Proyectos
├── lib/
│   ├── pixels.ts           ← Tipos genéricos de píxeles
│   ├── sites.ts            ← Registro de sitios + SiteConfig interface
│   └── metadata.ts         ← buildMetadata() global con baseUrl configurable
├── hooks/
│   ├── usePixelEvent.ts
│   └── useScrollReveal.ts
└── components/
    └── ui/
        ├── CookieConsent.tsx
        ├── TrackingPixels.tsx
        └── WhatsAppButton.tsx

public/
├── images/
│   ├── portfolio/             ← Portadas para la landing (card modal)
│   ├── constructora-vargas/   ← Assets del mini-sitio (logo, fotos, etc.)
│   ├── dentisteria-munoz/     ← Cada mini-sitio tiene su propia carpeta
│   └── ...
├── robots.txt
└── sitemap.xml
```

### Helpers internos (dentro de `page.tsx`)
- `HeroParticles`, `MeshGradient`, `TestimonialCarousel`, `FAQAccordion`
- `PricingRow`, `renderCell`, `useIsMobile`, `PortfolioModal`

### Archivos de configuración raíz
- `next.config.ts` — output: 'export' + imágenes sin optimizar
- `tailwind.config.ts` — Paleta oscura + espaciado + animaciones
- `eslint.config.mjs` — Configuración ESLint
- `tsconfig.json` — Path alias @/* → ./src/*
- `postcss.config.mjs` — PostCSS con Tailwind
- `.nvmrc` — Node 20

## Funcionalidades implementadas

### Infraestructura
- Framer Motion instalado y configurado
- Migrado a Cloudflare Pages (static export) — auto-deploy desde GitHub en cada push a `main`
- Cookie Consent con persistencia de 15 días
- Tracking Pixels desacoplado (Meta, GA4, Google Ads, TikTok, LinkedIn, Clarity)

### Landing page (PixelHub)
Hero con partículas, mesh gradient, entrada staggered, CTA a WhatsApp. Secciones: Problem/Solution, Benefits (4 cards), Portfolio (3 proyectos con modal), Sectors (8 íconos), Process (timeline), Pricing (3 planes), Testimonials (carrusel), FAQ, CTA Contact, Footer.

### Mini-sitio (constructora-vargas)
Config: SEO, colores, menú, footer, pixels. Layout propio. Componentes: Hero, Servicios, Proyectos.

## Cómo agregar un nuevo mini-sitio

1. Crear carpeta `src/sites/tu-sitio/`
2. Crear `config.ts`, `layout.tsx`, `page.tsx`, e `index.ts`
3. Agregar en `src/lib/sites.ts` el registro: `'tu-sitio': () => import('@/sites/tu-sitio')`
4. Colocar sus assets (logo, fotos, etc.) en `public/images/tu-sitio/` — se referencian como `/images/tu-sitio/archivo.webp`
5. Ejecutar `npm run build` → la ruta `/[slug]` se genera automáticamente

## Pendientes

- [ ] Configurar `NEXT_PUBLIC_META_PIXEL`, `NEXT_PUBLIC_GA_ID`, etc. en Cloudflare Pages
- [ ] Localizar 2 avatares externos de testimonios (Miguel y María Sofía)
- [ ] Self-hostear Material Symbols font (opcional)
- [ ] Agregar más mini-sitios

## Notas importantes

- El error `cz-shortcut-listen` en hidratación es por extensiones del navegador. Ya está manejado con `suppressHydrationWarning`.
- Usar siempre Node 20 (`nvm use 20`).
- El build genera una carpeta `out/` para subir a Cloudflare Pages.
- Las imágenes webp de los mini-sitios se generan con capturas de pantalla.
- Las portadas de las cards se nombran como `{slug}-portada.webp`.
- Con `output: 'export'` no se usa el servidor de Next.js, el sitio es 100% estático.
- Las variables de entorno (`NEXT_PUBLIC_*`) se configuran en el dashboard de Cloudflare Pages.
- Los builds de Cloudflare usan ESLint estricto de Next.js 15. No usar `setState` dentro de `useEffect`, eliminar funciones/variables no usadas, o el build falla.
- La terminal puede mostrar códigos ANSI como caracteres extraños si el emulador no soporta 256 colores. Solución: `export TERM=xterm-256color` o `export NO_COLOR=1`.
