import type { MetadataRoute } from 'next';
import { pageDefinitions } from '@/content/pages';
import { canonical } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const high = new Set(['board-and-train','dog-training','dog-boarding','aggressive-dog-training','reactive-dog-training','puppy-training','private-dog-training']);
  const routes: MetadataRoute.Sitemap = [
    { url: canonical('/'), lastModified: new Date('2026-08-07'), changeFrequency:'weekly', priority:1 },
    ...Object.keys(pageDefinitions).map(slug => ({
      url: canonical(slug),
      lastModified: new Date('2026-08-07'),
      changeFrequency: slug.startsWith('resources/') ? 'monthly' as const : 'weekly' as const,
      priority: high.has(slug) ? .9 : slug.startsWith('service-areas/') ? .7 : .65,
    })),
    { url: canonical('book-evaluation'), lastModified:new Date('2026-08-07'), changeFrequency:'monthly', priority:.8 }
  ];
  return routes;
}
