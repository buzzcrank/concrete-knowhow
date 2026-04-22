import type { MetadataRoute } from 'next'

const BASE = 'https://concrete.mrknowitall.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const calculators = ['/concrete', '/gravel', '/mulch', '/topsoil', '/sand', '/sod']
  const staticPages = ['/about', '/contact', '/disclaimer', '/privacy', '/terms']

  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...calculators.map((route) => ({
      url: `${BASE}${route}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...staticPages.map((route) => ({
      url: `${BASE}${route}/`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ]
}
