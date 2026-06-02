import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { buildMetadata } from "@/lib/metadata"
import TrackingPixels from "@/components/ui/TrackingPixels"
import CookieConsent from "@/components/ui/CookieConsent"
import type { PixelConfig } from "@/lib/pixels"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = buildMetadata()

const mainPixels: PixelConfig = {
  ...(process.env.NEXT_PUBLIC_META_PIXEL ? { meta: process.env.NEXT_PUBLIC_META_PIXEL } : {}),
  ...(process.env.NEXT_PUBLIC_GA_ID ? { ga: process.env.NEXT_PUBLIC_GA_ID } : {}),
  ...(process.env.NEXT_PUBLIC_TIKTOK_PIXEL ? { tiktok: process.env.NEXT_PUBLIC_TIKTOK_PIXEL } : {}),
  ...(process.env.NEXT_PUBLIC_LINKEDIN_PIXEL ? { linkedin: process.env.NEXT_PUBLIC_LINKEDIN_PIXEL } : {}),
  ...(process.env.NEXT_PUBLIC_CLARITY_ID ? { clarity: process.env.NEXT_PUBLIC_CLARITY_ID } : {}),
  ...(process.env.NEXT_PUBLIC_GADS_ID ? { gads: process.env.NEXT_PUBLIC_GADS_ID } : {}),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <TrackingPixels pixels={mainPixels} />
        <CookieConsent />
      </body>
    </html>
  )
}
