# PixelHub (landing-factory)

**Creador de mini-sitios web profesionales y optimizados para conversión.**

Proyecto de Jose Valenzuela — josevalenzuelamolina@proton.me

Un mismo codebase Next.js sirve:
- **Landing principal (PixelHub)** — vende el servicio de creación de mini-sitios
- **Mini-sitios de clientes** — bajo rutas `/[slug]`, cada uno con layout, SEO, colores y tracking propios

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **CSS:** Tailwind CSS v3
- **Animaciones:** Framer Motion
- **Node.js:** 20.x
- **Deploy:** Cloudflare Pages (static export)

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build SSG → carpeta out/
npm run lint     # Linter
npx tsc --noEmit # Type check
```

## Estructura

- `src/app/page.tsx` — Landing principal PixelHub
- `src/app/[slug]/` — Rutas dinámicas para mini-sitios de clientes
- `src/sites/` — Código fuente de cada mini-sitio
- `src/lib/` — Utilidades compartidas (píxeles, SEO, registro de sitios)
- `src/hooks/` — Custom hooks
- `src/components/ui/` — Componentes reutilizables

## Agregar un nuevo mini-sitio

1. Crear carpeta `src/sites/tu-sitio/`
2. Crear `config.ts`, `layout.tsx`, `page.tsx`, e `index.ts`
3. Agregar en `src/lib/sites.ts` el registro
4. Ejecutar `npm run build`

## Deploy

```bash
npm run build
# Subir carpeta out/ a Cloudflare Pages
```

Deploy automático: push a `main` dispara build en Cloudflare Pages.

## Licencia

Uso privado.
