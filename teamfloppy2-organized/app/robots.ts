import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/business';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent:'*', allow:'/', disallow:['/api/'] },
      { userAgent:'Googlebot', allow:'/' },
      { userAgent:'Bingbot', allow:'/' },
      { userAgent:'OAI-SearchBot', allow:'/' },
      { userAgent:'Claude-SearchBot', allow:'/' },
      { userAgent:'Claude-User', allow:'/' },
      { userAgent:'PerplexityBot', allow:'/' },
      // Search visibility is allowed above. Model-training crawlers can be handled separately.
      { userAgent:'GPTBot', disallow:'/' },
      { userAgent:'ClaudeBot', disallow:'/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
