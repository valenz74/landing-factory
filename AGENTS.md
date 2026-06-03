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

## Comandos
```bash
npm run dev      # Desarrollo en http://localhost:3000 (o 3001 si ocupado)
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

## Repositorio
- **GitHub:** https://github.com/valenz74/landing-factory
- **Rama principal:** `main`
- **Origin:** `git@github.com:valenz74/landing-factory.git`

## Deploy (pendiente)
- [x] Hacer commit de los cambios actuales
- [x] Push a GitHub
- [ ] Conectar Cloudflare Pages con el repo de GitHub
- [ ] Configurar `NEXT_PUBLIC_*` en dashboard de Cloudflare Pages
- [ ] Definir dominio personalizado (opcional)

## Estructura del proyecto
```
src/
├── app/
│   ├── layout.tsx          ← Layout raíz (html/body + favicon + TrackingPixels)
│   ├── page.tsx            ← Landing principal "PixelHub" (~999 líneas)
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
- `SectionRevealMotion` — Wrapper de sección con fade-in
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

## Lo implementado (sesión actual — Junio 2026)
### Infraestructura
- [x] Framer Motion instalado y configurado
- [x] Animación `animate-pulse-slow` agregada en tailwind.config.ts
- [x] Migrado a Cloudflare Pages (static export)

### Hero
- [x] Canvas de partículas (80 puntos, líneas de conexión, rebote en bordes)
- [x] Mesh gradient animado (3 burbujas de colores en movimiento lento)
- [x] Texto y botones con entrada staggered (título → subtítulo → botones)
- [x] Imagen lateral con `animate-pulse-slow` + glow difuso
- [x] CTA "Quiero mi minisitio" → WhatsApp con mensaje predefinido
- [x] Texto "En muy poco tiempo" (reemplazado "En 48 horas")

### Problem / Solution
- [x] Slide-in desde izquierda (Problema) y derecha (Solución) al hacer scroll

### Benefits
- [x] Diseño alternado: cards 1 y 3 en `bg-deep-contrast`, cards 2 y 4 en `bg-primary-container`
- [x] Label numerado ("01", "02", "03", "04") tracking-widest
- [x] Glow hover (box-shadow + border iluminado)
- [x] Icono escala 1.15 en hover
- [x] Stagger entrance (0.15s)

### Portfolio
- [x] 3 proyectos: Clínica Medisalud, Consultores Asociados, Constructora Vargas
- [x] Constructora Vargas con link interno a /constructora-vargas
- [x] Cascade fadeIn+scale al hacer scroll
- [x] Modal con mockup responsive: móvil = teléfono, desktop = full-width
- [x] Botón flotante cerrar (X) siempre visible
- [x] Imágenes webp locales en `public/images/portfolio/`

### Sectors
- [x] 8 íconos con stagger (0.08s) al entrar
- [x] Cada ícono flota (sube/baja) con delay aleatorio

### Process (Opción A — Timeline/Roadmap)
- [x] Desktop: línea horizontal conectando 3 círculos numerados
- [x] Puntos intermedios entre segmentos
- [x] Mobile: timeline vertical con línea izquierda + círculo + card
- [x] Stagger entrance

### Pricing
- [x] "10 Cuotas mensuales de" y "Un solo pago (10% desc.)"
- [x] Tiempos de entrega: Básico 10d, Pro 7d, Premium 5d
- [x] Pop-in cards con stagger (0.15s), hover levanta 10-12px
- [x] Cada plan con su propio mensaje WhatsApp
- [x] Facebook Ads: Básico 0, Pro 2, Premium 4

### Testimonials
- [x] AnimatePresence con slide horizontal al cambiar
- [x] 7 testimonios con avatar (5 locales webp, 2 externos pendientes de localizar)

### FAQ
- [x] Acordeón animado con AnimatePresence + rotación chevron

### CTA Contact
- [x] Botón verde con pulse infinito (scale 1↔1.04)
- [x] Enlace a WhatsApp con mensaje genérico

### Footer
- [x] FadeIn + slide up al hacer scroll
- [x] Teléfono, email, redes sociales (LinkedIn, YouTube, Instagram, TikTok)

### WhatsApp (todos los botones)
- [x] Hero CTA → mensaje genérico
- [x] Navbar "Comenzar ahora" → mensaje genérico
- [x] Pricing Básico/Pro/Premium → mensajes personalizados por plan
- [x] CTA Contact → mensaje genérico
- [x] Footer teléfono → mensaje genérico
- [x] Botón flotante WhatsAppButton → mensaje genérico

### Cookie Consent
- [x] Banner con "Aceptar todas" (bg-primary-container) y "Rechazar" (naranja)
- [x] Reaparece cada 15 días si el usuario rechazó
- [x] TrackingPixels respeta el consentimiento
- [x] Recarga la página al aceptar/rechazar

### Tracking Pixels
- [x] Sistema genérico en `src/lib/pixels.ts` (Meta, GA4, Google Ads, TikTok, LinkedIn, Clarity)
- [x] `SiteConfig.pixels` opcional en cada mini-sitio
- [x] `TrackingPixels.tsx` con `next/script afterInteractive`
- [x] `usePixelEvent.ts` hook para trackear eventos
- [x] Landing (`/`) usa píxeles desde ENV; mini-sitios desde config.ts
- [x] `.env` / `.env.example` documentado

## Pendientes / Próximos pasos
- [ ] Localizar 2 avatares externos de testimonios (Miguel y María Sofía)
- [ ] Self-hostear Material Symbols font (opcional)
- [ ] Agregar más mini-sitios

## Notas de la sesión (Junio 2026)
- Migración de Vercel → Cloudflare Pages en proceso
- Favicon movido de `public/` a `app/` para manejo automático de Next.js
- `.gitignore` corregido: `.env*` → `.env` para permitir trackear `.env.example`
- URLs actualizadas de `hubdelandings.vercel.app` → `landing-factory.pages.dev` (placeholder)
- `robots.ts` y `sitemap.ts` en `app/` fueron eliminados; reemplazados por `public/robots.txt` y `public/sitemap.xml` estáticos

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
