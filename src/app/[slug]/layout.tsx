// PixelHub — Dynamic layout for client mini-sites
// Owner: Jose Valenzuela — josevalenzuelamolina@proton.me

import { buildSiteMetadata, getSiteLoader } from '@/lib/sites'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import TrackingPixels from '@/components/ui/TrackingPixels'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return buildSiteMetadata(slug)
}

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loader = getSiteLoader(slug)

  if (!loader) notFound()

  const { config, Layout } = await loader()

  return (
    <>
      <Layout>{children}</Layout>
      <TrackingPixels pixels={config.pixels} />
    </>
  )
}
