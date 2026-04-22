import type { MetadataRoute } from 'next'

const BASE = 'https://concrete.mrknowitall.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2024-04-01')

  const routes = [
    '',
    '/concrete',
    '/gravel',
    '/mulch',
    '/topsoil',
    '/sand',
    '/sod',
    '/about',
    '/contact',
    '/disclaimer',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${BASE}${route}/`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.length < 10 ? 0.8 : 0.5,
  }))
}
