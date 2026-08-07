import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Dog, Chrome as HomeIcon, Target, GraduationCap, HeartHandshake, CircleCheck as CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { FAQList } from '@/components/FAQList';
import { useMeta } from '@/lib/useMeta';

const faqs = [
  { q: 'What dog training services does Team Floppy Ears offer?', a: 'Team Floppy Ears offers Board & Train, puppy training, private lessons, obedience training, off-leash training, group classes and behavior-focused training for issues including fear, reactivity and aggression.' },
  { q: 'Where is Team Floppy Ears located?', a: 'Team Floppy Ears is located in Corona, California. The current boarding agreement lists 21761 Knabe Rd., Corona, CA 92883; the address should be verified before production launch.' },
  { q: 'Does Team Floppy Ears work with aggressive dogs?', a: 'Yes. The current Team Floppy Ears site identifies fear and aggression rehabilitation as an area of experience and lists a behavior-focused residential program. Serious cases should be individually evaluated.' },
  { q: 'Does Team Floppy Ears offer dog boarding?', a: 'Yes. The current site lists overnight boarding, holiday boarding, selected aggressive-dog boarding and kennel-free daycare through the Jax Weller Arena.' },
  { q: 'Does Team Floppy Ears serve Orange County?', a: 'Yes. The facility is in Corona, and Team Floppy Ears can serve Orange County clients, especially for residential Board & Train and behavior programs.' },
];

const help = [
  ['Board & Train', 'Immersive daily training for obedience, manners and individual behavior goals.', '/board-and-train', GraduationCap],
  ['Aggression & Reactivity', 'Individual assessment and training for serious behavior, fear and intense reactions.', '/aggressive-dog-training', ShieldCheck],
  ['Puppy Training', 'Build socialization, confidence, routines and obedience foundations early.', '/puppy-training', HeartHandshake],
  ['Dog Boarding', 'Overnight care at the Corona facility with climate-controlled indoor kennel space and outdoor acreage.', '/dog-boarding', HomeIcon],
] as const;

const heroImg = 'https://images.pexels.com/photos/5763545/pexels-photo-5763545.jpeg?auto=compress&cs=tinysrgb&w=1200';
const fieldImg = 'https://images.pexels.com/photos/37107261/pexels-photo-37107261.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Home() {
  useMeta('Dog Training & Boarding in Corona, CA | Team Floppy Ears', 'Professional dog training, Board & Train, puppy training, behavior rehabilitation, dog boarding and daycare in Corona, CA.');

  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="hero-grid overflow-hidden border-b border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-sky px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-brand-blue">
              <MapPin className="h-4 w-4" />Corona, California
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[.98] tracking-[-.045em] text-brand-navy sm:text-6xl lg:text-7xl">
              Dog Training &amp; Boarding in Corona, California
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-bold leading-8 text-slate-700">
              Real-world dog training for puppies, family dogs and serious behavior challenges.
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Board &amp; Train &bull; Aggression &amp; Reactivity &bull; Puppy Training &bull; Private Training &bull; Dog Boarding &amp; Daycare
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book-evaluation" className="inline-flex min-h-13 items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-black text-white transition hover:bg-red-600">
                Tell Us About Your Dog<ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/board-and-train" className="inline-flex min-h-13 items-center rounded-full border-2 border-brand-blue px-7 py-3.5 font-black text-brand-blue transition hover:bg-brand-sky">
                View Board &amp; Train
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
              Family-owned dog training and boarding serving Corona, Riverside County, the Inland Empire, Orange County and surrounding Southern California communities.
            </p>
          </div>
          <div className="relative min-h-[470px] overflow-hidden rounded-[2.25rem] bg-brand-navy shadow-soft">
            <img src={heroImg} alt="Team Floppy Ears owners with their family and dogs" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/50 to-transparent p-7 pt-28 text-white">
              <p className="text-sm font-black uppercase tracking-[.18em] text-blue-200">Family owned &bull; Established 2019</p>
              <p className="mt-2 max-w-md text-lg font-bold">Training, behavior work and boarding from one Corona operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-100 bg-brand-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          <Trust icon={Dog} title="1,000+ dogs handled" text="Head Trainer Chad and the TFE team" />
          <Trust icon={ShieldCheck} title="Behavior experience" text="Fear and aggression rehabilitation" />
          <Trust icon={HomeIcon} title="Training + boarding" text="One Corona operation" />
          <Trust icon={Target} title="Owner transfer" text="Training must work beyond the trainer" />
        </div>
      </section>

      {/* Help cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">Start with the problem</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">What does your dog need help with?</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The site routes visitors by buying intent instead of burying every service on one generic page. Choose the closest match and see the program, process, pricing context and next step.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {help.map(([title, text, href, Icon]) => (
            <Link to={href} key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-brand-navy">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-black text-brand-blue">
                Explore service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Board & Train */}
      <section className="bg-brand-mist py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem]">
            <img src={fieldImg} alt="Group dog training at the Team Floppy Ears outdoor training area in Corona" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">Highest-value training program</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">Board &amp; Train in Corona</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Team Floppy Ears&rsquo; service menu centers on immersive Board &amp; Train for puppies, adult dogs, serious behavior cases and off-leash goals. The program explains what the dog works on, who it&rsquo;s for, what owner transfer requires and how regional clients can use a residential program.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-700">
              {['Adult and puppy residential programs', 'Obedience, manners, recall and loose-leash work', 'Behavior-specific customization', 'Lifetime support and refresher lessons', 'Orange County and Inland Empire residential market'].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" /><span>{x}</span></li>
              ))}
            </ul>
            <Link to="/board-and-train" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-black text-white transition hover:bg-blue-800">
              Explore Board &amp; Train <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Aggression vs reactivity */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">Serious behavior</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-brand-navy">Aggression and reactivity are not the same problem</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              The site gives aggression and reactivity separate high-intent landing pages because dog owners search for both&mdash;and because the behavior, risk and training plan can differ. Head Trainer Chad specializes in obedience, fear and aggression rehabilitation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/aggressive-dog-training" className="rounded-full bg-brand-red px-5 py-3 font-black text-white transition hover:bg-red-600">Aggressive Dog Training</Link>
              <Link to="/reactive-dog-training" className="rounded-full bg-brand-sky px-5 py-3 font-black text-brand-blue transition hover:bg-blue-100">Reactive Dog Training</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boarding */}
      <section className="bg-brand-navy py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-blue-200">Boarding + daycare</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">A separate path for customers who need care&mdash;not training</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Boarding is a different buying decision than Board &amp; Train. The site gives overnight boarding, daycare and selected difficult-dog boarding their own conversion paths, with direct answers about environment, exercise, rates and required care information.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/dog-boarding" className="rounded-full bg-white px-5 py-3 font-black text-brand-navy transition hover:bg-slate-100">Dog Boarding</Link>
              <Link to="/dog-daycare" className="rounded-full border border-white/40 px-5 py-3 font-black transition hover:bg-white/10">Dog Daycare</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15">
            <h3 className="text-2xl font-black">Current facility facts surfaced clearly</h3>
            <ul className="mt-5 space-y-4 text-slate-200">
              {['Climate-controlled indoor kennel room', 'Outdoor acreage for exercise and supervised activity', 'Minimum two hours of daily exercise for boarding dogs', 'Dog-friendly dogs socialize; difficult dogs get individual management', 'Emergency veterinary authorization documented in the boarding contract'].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team + facility */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">Trust + entity authority</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-brand-navy">Make the trainers and facility part of the proof</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Search engines and AI systems can verify a real business more confidently when the website clearly connects the company, trainers, location, methods, pricing, facility and real case studies. The rebuild turns those facts into crawlable pages rather than leaving them isolated.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/meet-the-team" className="rounded-full bg-brand-blue px-5 py-3 font-black text-white transition hover:bg-blue-800">Meet the Team</Link>
              <Link to="/facility" className="rounded-full bg-brand-sky px-5 py-3 font-black text-brand-blue transition hover:bg-blue-100">See the Facility</Link>
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem]">
            <img src={heroImg} alt="Team Floppy Ears family and dogs" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-mist py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">AEO / GEO direct answers</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-brand-navy">Frequently asked questions</h2>
          <p className="mt-4 leading-7 text-slate-600">These answers are written so people&mdash;and AI answer engines&mdash;can understand the business without guessing from vague marketing copy.</p>
          <FAQList faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-[2rem] bg-brand-blue px-7 py-11 text-white sm:px-11 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-blue-100">Your next step</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Tell Team Floppy Ears what you want to change.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-blue-50">Age, breed, bite history, triggers and goals help the team recommend the right training format before you spend money on the wrong program.</p>
          </div>
          <Link to="/book-evaluation" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-red px-6 font-black text-white transition hover:bg-red-600 lg:mt-0">
            Get My Training Recommendation<ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Trust({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5 text-blue-200" />
      </div>
      <div>
        <p className="font-black">{title}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-300">{text}</p>
      </div>
    </div>
  );
}
