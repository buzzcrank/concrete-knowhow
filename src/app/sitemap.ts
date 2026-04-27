import type { MetadataRoute } from 'next'

const BASE = 'https://concrete.mrknowitall.net'
const LAST_MODIFIED = new Date('2026-04-27')

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = ['/concrete', '/gravel', '/mulch', '/topsoil', '/sand', '/sod']
  const staticPages = ['/about', '/contact', '/disclaimer', '/privacy', '/terms']

  return [
    {
      url: `${BASE}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...calculators.map((route) => ({
      url: `${BASE}${route}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...staticPages.map((route) => ({
      url: `${BASE}${route}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ]
}
