// PixelHub — Mini-site generator & landing page factory
// Owner: Jose Valenzuela — josevalenzuelamolina@proton.me

import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://landing-factory.pages.dev'

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'PixelHub | Tu mini-sitio profesional en muy poco tiempo',
      template: '%s | PixelHub',
    },
    description:
      'Creamos mini-sitios web profesionales y optimizados para convertir visitantes en clientes. Tu landing page lista en muy poco tiempo.',
    openGraph: {
      type: 'website',
      siteName: 'PixelHub',
      title: 'PixelHub | Tu mini-sitio profesional en muy poco tiempo',
      description:
        'Creamos una página única para tu empresa, optimizada para convertir visitantes en clientes reales.',
      url: baseUrl,
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  }
}
