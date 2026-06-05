// PixelHub — Hook for tracking pixel events
// Owner: Jose Valenzuela — josevalenzuelamolina@proton.me

'use client'

import { useCallback } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void }
    lintrk?: ((action: string, params?: Record<string, unknown>) => void) & { q?: unknown[] }
    gtag?: (...args: unknown[]) => void
    clarity?: (action: string, ...args: unknown[]) => void
  }
}

export function usePixelEvent() {
  const track = useCallback(
    (provider: string, eventName: string, params?: Record<string, unknown>) => {
      try {
        switch (provider) {
          case 'meta':
            window.fbq?.('track', eventName, params)
            break
          case 'ga':
            window.gtag?.('event', eventName, params)
            break
          case 'gads':
            window.gtag?.('event', eventName, { ...params })
            break
          case 'tiktok':
            window.ttq?.track(eventName, params)
            break
          case 'linkedin':
            window.lintrk?.('track', { conversion_id: eventName, ...(params ?? {}) })
            break
        }
      } catch {
        // Silently fail
      }
    },
    []
  )

  return { track }
}
