# Landing Factory - Contexto para AI

## Propósito
Proyecto "PixelHub" — generador y host de mini-sitios web estáticos profesionales, optimizados para conversión. Un mismo codebase Next.js sirve múltiples landing pages de clientes bajo rutas `/[slug]`.

## Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **CSS:** Tailwind CSS v3
- **Animaciones:** Framer Motion
- **Node.js:** 20.x (usar `nvm use`)
- **Deploy:** Cloudflare Pages (static export, carpeta `out/`)
- **URL:** https://landing-factory.pages.dev (pendiente de personalizar)
- **Base URL configurable:** `NEXT_PUBLIC_BASE_URL` en env

## Comandos
```bash
npm run dev      # Desarrollo en http://localhost:3000 (o 3001 si ocupado)
npm run build    # Build SSG (static export para Cloudflare)
npm run lint     # Linter
npx tsc --noEmit # Type check
```

## Repositorio
- **GitHub:** https://github.com/valenz74/landing-factory
- **Rama principal:** `main`
- **Origin:** `git@github.com:valenz74/landing-factory.git`

## Deploy
- [x] Repo creado y pusheado a GitHub
- [x] Cloudflare Pages conectado a GitHub
- [x] URL: https://landing-factory.pages.dev
- [ ] Configurar `NEXT_PUBLIC_*` en dashboard de Cloudflare Pages
- [ ] Definir dominio personalizado (opcional)

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

## Estructura del proyecto
```
src/
├── app/
│   ├── favicon.ico         ← Favicon automático (Next.js lo sirve sin <link> manual)
│   ├── layout.tsx          ← Layout raíz (html/body + TrackingPixels)
│   ├── page.tsx            ← Landing principal "PixelHub" (~975 líneas)
│   └── [slug]/
│       ├── layout.tsx      ← Layout dinámico (carga config del mini-sitio)
│       └── page.tsx        ← Renderiza el mini-sitio (generateStaticParams)
├── sites/
│   └── constructora-vargas/  ← Demo de mini-sitio
│       ├── index.ts          ← Re-exporta config, Layout, Page
│       ├── config.ts         ← SEO, colores, menú, footer, pixels
│       ├── layout.tsx        ← Menú + footer propios
│       ├── page.tsx          ← Contenido del sitio
│       └── components/       ← Hero, Servicios, Proyectos
├── lib/
│   ├── pixels.ts           ← Tipos genéricos de píxeles (meta, ga, tiktok, etc.)
│   ├── sites.ts            ← Registro de sitios + SiteConfig interface
│   └── metadata.ts         ← buildMetadata() global con baseUrl configurable
├── hooks/
│   ├── usePixelEvent.ts    ← Hook para trackear eventos en píxeles
│   └── useScrollReveal.ts  ← Hook fade-in con Intersection Observer
└── components/
    └── ui/                 ← Componentes reutilizables
        ├── CookieConsent.tsx   ← Banner de cookies con persistencia 15 días
        ├── TrackingPixels.tsx  ← Inyecta scripts de tracking según config
        └── WhatsAppButton.tsx  ← Botón flotante WhatsApp con mensaje predefinido
```

### Helpers internos (dentro de `page.tsx`)
- `HeroParticles` — Canvas de partículas animadas
- `MeshGradient` — Burbujas de colores con movimiento
- `TestimonialCarousel` — Carrusel con AnimatePresence
- `FAQAccordion` — Acordeón con animación de altura
- `PricingRow` — Fila de precio en cards
- `renderCell` — Celda de tabla de precios (check/cross/texto)
- `useIsMobile` — Hook de detección responsive
- `PortfolioModal` — Modal con mockup responsive

### Archivos de configuración raíz
- `next.config.ts` — output: 'export' + imágenes sin optimizar
- `tailwind.config.ts` — Paleta oscura + espaciado + animaciones
- `eslint.config.mjs` — Configuración ESLint
- `tsconfig.json` — Path alias @/* → ./src/*
- `postcss.config.mjs` — PostCSS con Tailwind
- `.nvmrc` — Node 20

## Funcionalidades implementadas

### Infraestructura
- [x] Framer Motion instalado y configurado
- [x] Animación `animate-pulse-slow` agregada en tailwind.config.ts
- [x] Migrado a Cloudflare Pages (static export)
- [x] Cookie Consent con persistencia de 15 días
- [x] Tracking Pixels desacoplado (Meta, GA4, Google Ads, TikTok, LinkedIn, Clarity)

### Landing page (PixelHub)
- [x] Hero con partículas, mesh gradient, entrada staggered, CTA a WhatsApp
- [x] Problem/Solution con slide-in al scroll
- [x] Benefits: 4 cards alternadas con glow hover, staggered entrance
- [x] Portfolio: 3 proyectos con modal responsive y link interno a mini-sitio
- [x] Sectors: 8 íconos con float animado y stagger
- [x] Process: Timeline horizontal (desktop) y vertical (mobile)
- [x] Pricing: 3 planes con pop-in, precios, WhatsApp por plan
- [x] Testimonials: carrusel con AnimatePresence, 7 testimonios
- [x] FAQ: acordeón animado
- [x] CTA Contact: botón verde con pulse infinito
- [x] Footer: fadeIn + slide up, redes sociales
- [x] WhatsApp: botón flotante + botones en Hero/Navbar/Pricing/CTA/Footer

### Mini-sitio (constructora-vargas)
- [x] Config: SEO, colores, menú, footer, pixels
- [x] Layout: menú + footer propios
- [x] Componentes: Hero, Servicios, Proyectos

## Sesión actual (Junio 2026) — Correcciones y deploy

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
- `CookieConsent.tsx:40` — `setState` llamado dentro del cuerpo de `useEffect` (`react-hooks/set-state-in-effect`)
- `page.tsx` — 3 warnings por variables/funciones definidas pero no usadas

**Solución:**
- `CookieConsent`: reemplazar `useState(false)` + `useEffect` por `useState(() => { ... })` con inicializador lazy, eliminando el `useEffect`
- `page.tsx`: eliminar funciones `SectionReveal` y `SectionRevealMotion` (no usadas); limpiar parámetro `i` donde no se usaba

#### 5. Deploy a Cloudflare Pages
**Proceso:** Crear cuenta en Cloudflare → Workers & Pages → Pages → Connect to Git → seleccionar repo → Build command: `npm run build` → Build output directory: `out` → Deploy.

### Archivos modificados en esta sesión
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

### Deploy
- **Plataforma:** Cloudflare Pages
- **URL:** https://landing-factory.pages.dev
- **Build output:** `out/`
- **Deploy automático:** push a `main` dispara build en Cloudflare

## Pendientes / Próximos pasos
- [ ] Configurar `NEXT_PUBLIC_META_PIXEL`, `NEXT_PUBLIC_GA_ID`, etc. en Cloudflare Pages (Settings → Environment variables)
- [ ] Localizar 2 avatares externos de testimonios (Miguel y María Sofía)
- [ ] Self-hostear Material Symbols font (opcional)
- [ ] Agregar más mini-sitios

## Cómo agregar un nuevo mini-sitio
1. Crear carpeta `src/sites/tu-sitio/`
2. Crear `config.ts`, `layout.tsx`, `page.tsx`, e `index.ts`
3. Agregar en `src/lib/sites.ts` el registro: `'tu-sitio': () => import('@/sites/tu-sitio')`
4. Ejecutar `npm run build` → la ruta `/[slug]` se genera automáticamente

## Notas importantes
- El error `cz-shortcut-listen` en hidratación es por extensiones del navegador. Ya está manejado con suppressHydrationWarning.
- Usar siempre Node 20 (`nvm use 20`).
- El build genera una carpeta `out/` para subir a Cloudflare Pages.
- Las imágenes webp de los mini-sitios se generan con capturas de pantalla.
- Las portadas de las cards se nombran como `{slug}-portada.webp`.
- Con `output: 'export'` no se usa el servidor de Next.js, el sitio es 100% estático.
- Las variables de entorno (`NEXT_PUBLIC_*`) se configuran en el dashboard de Cloudflare Pages.
- Los builds de Cloudflare usan ESLint estricto de Next.js 15. No usar `setState` dentro de `useEffect`, eliminar funciones/variables no usadas, o el build falla.
- La terminal puede mostrar códigos ANSI como caracteres extraños si el emulador no soporta 256 colores. Solución: `export TERM=xterm-256color` o `export NO_COLOR=1`.
