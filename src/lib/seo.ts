import { siteUrl } from '@/content/business';

export function canonical(slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean === '' ? siteUrl : `${siteUrl}/${clean}`;
}
