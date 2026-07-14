import type { MetadataRoute } from 'next'

const BASE = 'https://concrete.mrknowitall.net'
// Content pages were substantially expanded on 2026-07-14; utility pages unchanged.
const CONTENT_MODIFIED = new Date('2026-07-14')
const LAST_MODIFIED = new Date('2026-06-03')

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = ['/concrete', '/gravel', '/mulch', '/topsoil', '/sand', '/sod']

  return [
    {
      url: `${BASE}/`,
      lastModified: CONTENT_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...calculators.map((route) => ({
      url: `${BASE}${route}/`,
      lastModified: CONTENT_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${BASE}/about/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE}/contact/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE}/disclaimer/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${BASE}/privacy/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${BASE}/terms/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ]
}
