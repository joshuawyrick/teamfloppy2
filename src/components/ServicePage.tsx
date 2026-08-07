import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';
import { useMeta } from '@/lib/useMeta';
import { JsonLd } from '@/components/JsonLd';

type ServicePageProps = {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
  ctaLabel?: string;
};

export function ServicePage({ title, tagline, description, bullets, image, ctaLabel = 'Book an Evaluation' }: ServicePageProps) {
  useMeta(`${title} | Team Floppy Ears`, description);
  return (
    <main>
      <section className="hero-grid overflow-hidden border-b border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">{tagline}</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-.04em] text-brand-navy sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book-evaluation" className="inline-flex min-h-13 items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-black text-white transition hover:bg-red-600">
                {ctaLabel}<ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/" className="inline-flex min-h-13 items-center rounded-full border-2 border-brand-blue px-7 py-3.5 font-black text-brand-blue transition hover:bg-brand-sky">
                Back to Home
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden rounded-[2.25rem] bg-brand-navy shadow-soft">
            <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 className="text-3xl font-black tracking-tight text-brand-navy">What&rsquo;s included</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
              <span className="leading-7 text-slate-700">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-[2rem] bg-brand-blue px-7 py-9 text-white sm:px-10">
          <h3 className="text-2xl font-black">Ready to get started?</h3>
          <p className="mt-2 leading-7 text-blue-50">Tell us about your dog&rsquo;s age, breed, behavior history and goals so we can recommend the right program.</p>
          <Link to="/book-evaluation" className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-black text-white transition hover:bg-red-600">
            {ctaLabel}<ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: title, provider: { '@type': 'LocalBusiness', name: 'Team Floppy Ears' } }} id={`service-${title}`} />
    </main>
  );
}
