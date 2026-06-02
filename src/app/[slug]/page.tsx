import { getSiteLoader, getSiteSlugs } from '@/lib/sites'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export async function generateStaticParams() {
  return getSiteSlugs().map((slug) => ({ slug }))
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loader = getSiteLoader(slug)

  if (!loader) notFound()

  const { Page } = await loader()

  return <Page />
}
