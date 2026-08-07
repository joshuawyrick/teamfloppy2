import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { siteUrl } from '@/content/business';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Dog Training & Boarding in Corona, CA | Team Floppy Ears', template: '%s' },
  description: 'Team Floppy Ears provides dog training, Board & Train and dog boarding in Corona, California.',
  applicationName: 'Team Floppy Ears',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={localBusinessSchema()} /><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold">Skip to content</a><Header /><div id="main-content">{children}</div><Footer /></body></html>;
}
