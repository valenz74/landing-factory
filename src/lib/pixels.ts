// PixelHub — Tracking pixel types and configuration
// Owner: Jose Valenzuela — josevalenzuelamolina@proton.me

export type PixelProvider = 'meta' | 'tiktok' | 'linkedin' | 'ga' | 'gads' | 'clarity'

export type PixelConfig = Partial<Record<PixelProvider, string>>
