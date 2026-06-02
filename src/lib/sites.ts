import type { Metadata } from 'next'
import { ReactNode } from 'react'
import type { PixelConfig } from './pixels'

export interface SiteConfig {
  slug: string
  name: string
  seo: {
    title: string
    description: string
    keywords?: string
  }
  theme: {
    primary: string
    secondary: string
  }
  menu: { label: string; href: string }[]
  footer: {
    company: string
    address: string
    phone: string
    email: string
  }
  pixels?: PixelConfig
}

export interface SiteModule {
  config: SiteConfig
  Layout: (props: { children: ReactNode }) => ReactNode
  Page: () => ReactNode
}

type SiteLoader = () => Promise<SiteModule>

const siteModules: Record<string, SiteLoader> = {
  'constructora-vargas': () => import('@/sites/constructora-vargas'),
}

export function getSiteSlugs(): string[] {
  return Object.keys(siteModules)
}

export function getSiteLoader(slug: string): SiteLoader | null {
  return siteModules[slug] ?? null
}

export function registerSite(slug: string, loader: SiteLoader): void {
  siteModules[slug] = loader
}

export async function getSiteConfig(slug: string): Promise<SiteConfig | null> {
  const loader = getSiteLoader(slug)
  if (!loader) return null
  const mod = await loader()
  return mod.config
}

export async function buildSiteMetadata(slug: string): Promise<Metadata> {
  const config = await getSiteConfig(slug)
  if (!config) return {}

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      type: 'website',
    },
  }
}
