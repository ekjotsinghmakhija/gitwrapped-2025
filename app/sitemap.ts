import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // FIX: Update the base URL
  const baseUrl = 'https://gitwrapped.ekjot.me'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
