import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { businessInfo } from '@/content/business';

const navLinks = [
  { label: 'Board & Train', to: '/board-and-train' },
  { label: 'Aggression', to: '/aggressive-dog-training' },
  { label: 'Puppy Training', to: '/puppy-training' },
  { label: 'Dog Boarding', to: '/dog-boarding' },
  { label: 'Meet the Team', to: '/meet-the-team' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red text-base font-black text-white">TFE</span>
          <span className="text-lg font-black tracking-tight text-brand-navy">Team Floppy Ears</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-sm font-bold text-slate-700 transition hover:text-brand-blue ${isActive ? 'text-brand-blue' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-1.5 text-sm font-black text-brand-navy">
            <Phone className="h-4 w-4 text-brand-red" />{businessInfo.phone}
          </a>
          <Link to="/book-evaluation" className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-black text-white transition hover:bg-red-600">
            Book Evaluation
          </Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-brand-navy" /> : <Menu className="h-6 w-6 text-brand-navy" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-bold text-slate-700" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/book-evaluation" className="mt-2 rounded-full bg-brand-red px-5 py-2.5 text-center text-sm font-black text-white" onClick={() => setOpen(false)}>
              Book Evaluation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
