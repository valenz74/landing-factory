export type PixelProvider = 'meta' | 'tiktok' | 'linkedin' | 'ga' | 'gads' | 'clarity'

export type PixelConfig = Partial<Record<PixelProvider, string>>
