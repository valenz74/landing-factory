# Landing Factory - Resumen del Proyecto

## Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **CSS:** Tailwind CSS v3
- **Animaciones:** Framer Motion
- **Node.js:** 20.x (usar `nvm use`)

## Comandos
```bash
npm run dev      # Desarrollo en http://localhost:3000 (o 3001 si ocupado)
npm run build    # Build producción (SSG - Static Generation)
npm start        # Servir build de producción
npm run lint     # Linter
```

## Estructura del proyecto
```
src/
├── app/
│   ├── layout.tsx          ← Layout raíz (solo html/body)
│   ├── page.tsx            ← Landing principal "PixelHub" (~870 líneas)
│   ├── robots.ts           ← SEO: robots.txt
│   ├── sitemap.ts          ← SEO: sitemap.xml
│   └── [slug]/
│       ├── layout.tsx      ← Layout dinámico (carga config del mini-sitio)
│       └── page.tsx        ← Renderiza el mini-sitio
├── sites/
│   └── constructora-vargas/  ← Demo de mini-sitio
│       ├── index.ts          ← Re-exporta config, Layout, Page
│       ├── config.ts         ← SEO, colores, menú, footer
│       ├── layout.tsx        ← Menú + footer propios
│       ├── page.tsx          ← Contenido del sitio
│       └── components/       ← Componentes únicos del sitio
├── lib/
│   ├── pixels.ts           ← Tipos genéricos de píxeles (meta, ga, tiktok, etc.)
│   ├── sites.ts            ← Registro de sitios + utilidades
│   └── metadata.ts         ← Helpers SEO globales
├── hooks/
│   ├── usePixelEvent.ts    ← Hook para trackear eventos en píxeles
│   └── useScrollReveal.ts  ← Hook fade-in con Intersection Observer
└── components/
    └── ui/                 ← Componentes reutilizables
        ├── TrackingPixels.tsx  ← Inyecta scripts de tracking según config
        └── WhatsAppButton.tsx  ← Botón flotante WhatsApp con mensaje predefinido
```

## Lo implementado (sesión actual — Junio 2026)
### Infraestructura
- [x] Framer Motion instalado y configurado
- [x] Animación `animate-pulse-slow` agregada en tailwind.config.ts

### Hero
- [x] Canvas de partículas (80 puntos, líneas de conexión, rebote en bordes)
- [x] Mesh gradient animado (3 burbujas de colores en movimiento lento)
- [x] Texto y botones con entrada staggered (título → subtítulo → botones)
- [x] Imagen lateral con `animate-pulse-slow` + glow difuso
- [x] CTA "Quiero mi minisitio" → WhatsApp con mensaje predefinido
- [x] Texto "En 48 horas" reemplazado por "En muy poco tiempo"

### Problem / Solution
- [x] Slide-in desde izquierda (Problema) y derecha (Solución) al hacer scroll

### Benefits
- [x] Diseño alternado: cards 1 y 3 en `bg-deep-contrast`, cards 2 y 4 en `bg-primary-container`
- [x] Label numerado ("01", "02", "03", "04") tracking-widest (estilo problema/solución)
- [x] Glow hover (box-shadow + border iluminado)
- [x] Icono escala 1.15 en hover
- [x] Stagger entrance (0.15s)

### Portfolio
- [x] Reemplazados "Tornillos López" → "Clínica Medisalud"
- [x] Reemplazados "Pinturas El Color" → "Consultores Asociados"
- [x] Constructora Vargas se mantiene con link a /constructora-vargas
- [x] Cascade fadeIn+scale al hacer scroll
- [x] Modal con mockup smartphone: al hacer clic abre modal con imagen webp del sitio
- [x] Modal responsive: móvil = mockup teléfono, desktop = imagen full-width con scroll vertical
- [x] Botón flotante cerrar (X) siempre visible en móvil
- [x] Imágenes locales en `public/images/portfolio/`: medisalud.webp, consultores-asociados.webp, constructora-vargas.webp
- [x] Portadas para miniaturas: clinica-medisalud-portada.webp, consultores-asociados-portada.webp

### Sectors
- [x] 8 íconos con stagger (0.08s) al entrar
- [x] Cada ícono flota (sube/baja) con delay aleatorio

### Process (Opción A — Timeline/Roadmap)
- [x] Desktop: línea horizontal conectando 3 círculos numerados (roadmap)
- [x] Puntos intermedios entre segmentos
- [x] Mobile: timeline vertical con línea izquierda + círculo + card
- [x] Número en badge circular `bg-primary-container`
- [x] Stagger entrance

### Pricing
- [x] "Cuota mensual" → "10 Cuotas mensuales de" (en 3 cards)
- [x] "Un solo pago" → "Un solo pago (10% desc.)" (en 3 cards)
- [x] Tiempos de entrega: Básico 10d, Pro 7d, Premium 5d
- [x] Pop-in cards con stagger (0.15s)
- [x] Hover levanta 10-12px
- [x] Cada plan tiene su propio mensaje WhatsApp personalizado
- [x] Navbar "Comenzar ahora" → WhatsApp con mensaje genérico
- [x] Facebook Ads (eventos): Básico 0, Pro 2, Premium 4

### Testimonials
- [x] AnimatePresence con slide horizontal al cambiar testimonios

### FAQ
- [x] Acordeón animado con AnimatePresence + rotación chevron

### CTA Contact
- [x] Botón verde con pulse infinito (scale 1↔1.04)
- [x] Enlace a WhatsApp con mensaje genérico

### Footer
- [x] FadeIn + slide up al hacer scroll
- [x] Teléfono enlazado a WhatsApp con mensaje genérico

### WhatsApp (todos los botones)
- [x] Hero CTA → mensaje genérico
- [x] Navbar "Comenzar ahora" → mensaje genérico
- [x] Pricing Básico → "Quiero el plan Básico, dame mas informacion por favor..."
- [x] Pricing Pro → "Quiero el plan Pro, dame más información por favor..."
- [x] Pricing Premium → "Quiero el plan Premium, dame mas informacion por favor..."
- [x] CTA Contact → mensaje genérico
- [x] Footer teléfono → mensaje genérico
- [x] Botón flotante WhatsAppButton → mensaje genérico

### Tracking Pixels
- [x] Sistema genérico de píxeles en `src/lib/pixels.ts` (soporta: Meta, GA4, Google Ads, TikTok, LinkedIn, Clarity)
- [x] `SiteConfig.pixels` opcional — cada mini-sitio configura sus propios píxeles
- [x] `TrackingPixels.tsx` — componente cliente que inyecta scripts con `next/script afterInteractive` (sin impacto en rendimiento)
- [x] `usePixelEvent.ts` — hook para trackear eventos desde cualquier componente
- [x] Landing principal (`/`) usa píxeles desde variables de entorno (`NEXT_PUBLIC_*`)
- [x] Mini-sitios (`/[slug]`) usan píxeles desde su `config.ts`
- [x] `.env` / `.env.example` con todas las variables documentadas

## Pendientes / Próximos pasos
- [ ] Skills / funcionalidades adicionales
- [ ] Hacer deploy en plataforma de hosting

## Cómo agregar un nuevo mini-sitio
1. Crear carpeta `src/sites/tu-sitio/`
2. Crear `config.ts`, `layout.tsx`, `page.tsx`, e `index.ts`
3. Agregar en `src/lib/sites.ts` el registro: `'tu-sitio': () => import('@/sites/tu-sitio')`
4. Ejecutar `npm run build` → la ruta `/[slug]` se genera automáticamente

## Notas importantes
- El error `cz-shortcut-listen` en hidratación es por extensiones del navegador. Ya está manejado con suppressHydrationWarning.
- Usar siempre Node 20 (`nvm use 20`).
- En desarrollo, la primera carga es lenta (compila en caliente). En producción con build es instantánea.
- `page.tsx` tiene directiva `'use client'` y usa Framer Motion; si hay errores de compilación, limpiar `.next/` y reiniciar.
- Las imágenes webp de los mini-sitios se generan con capturas de pantalla y se colocan en `public/images/portfolio/`.
- Las portadas de las cards se nombran como `{slug}-portada.webp`.
