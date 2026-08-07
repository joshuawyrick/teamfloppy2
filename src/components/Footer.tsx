import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { businessInfo, siteUrl } from '@/content/business';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red text-base font-black text-white">TFE</span>
            <span className="text-lg font-black tracking-tight text-white">Team Floppy Ears</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Family-owned dog training and boarding in Corona, California. Serving the Inland Empire, Orange County and surrounding Southern California communities.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[.2em] text-blue-200">Services</h3>
          <ul className="mt-4 grid gap-2.5 text-sm">
            <li><Link to="/board-and-train" className="font-bold hover:text-white">Board & Train</Link></li>
            <li><Link to="/aggressive-dog-training" className="font-bold hover:text-white">Aggressive Dog Training</Link></li>
            <li><Link to="/reactive-dog-training" className="font-bold hover:text-white">Reactive Dog Training</Link></li>
            <li><Link to="/puppy-training" className="font-bold hover:text-white">Puppy Training</Link></li>
            <li><Link to="/dog-boarding" className="font-bold hover:text-white">Dog Boarding</Link></li>
            <li><Link to="/dog-daycare" className="font-bold hover:text-white">Dog Daycare</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[.2em] text-blue-200">Contact</h3>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" /><span>{businessInfo.street}, {businessInfo.city}, {businessInfo.state} {businessInfo.zip}</span></li>
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0 text-brand-red" /><a href={`tel:${businessInfo.phone}`} className="font-bold hover:text-white">{businessInfo.phone}</a></li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-brand-red" /><a href={`mailto:${businessInfo.email}`} className="font-bold hover:text-white">{businessInfo.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p>{siteUrl}</p>
        </div>
      </div>
    </footer>
  );
}
