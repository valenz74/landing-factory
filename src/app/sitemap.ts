import type { MetadataRoute } from 'next'
import { getSiteSlugs } from '@/lib/sites'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixelhub.cl'

  const sitePages = getSiteSlugs().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sitePages,
  ]
}
