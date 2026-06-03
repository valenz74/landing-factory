# Landing Factory - PixelHub

Creador de mini-sitios web profesionales y optimizados para conversión.

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
```

## Estructura

- `src/app/page.tsx` — Landing principal con Hero, Beneficios, Portafolio, Precios, FAQ
- `src/app/[slug]/` — Rutas dinámicas para mini-sitios de clientes
- `src/sites/` — Código fuente de cada mini-sitio
- `src/lib/` — Utilidades compartidas (píxeles, SEO, registro de sitios)
- `src/hooks/` — Custom hooks (scroll reveal, pixel events)
- `src/components/ui/` — Componentes reutilizables (TrackingPixels, CookieConsent, WhatsApp)

## Deploy

```bash
npm run build
# Subir carpeta out/ a Cloudflare Pages
```

## Licencia

Uso privado.
