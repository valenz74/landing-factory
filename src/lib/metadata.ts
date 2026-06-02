import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pixelhub.cl'

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Minisitios | Tu landing profesional en 48 horas',
      template: '%s | Minisitios',
    },
    description:
      'Creamos landing pages profesionales y optimizadas para convertir visitantes en clientes. Tu mini-sitio web listo en 48 horas.',
    openGraph: {
      type: 'website',
      siteName: 'Minisitios',
      title: 'Minisitios | Tu landing profesional en 48 horas',
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
