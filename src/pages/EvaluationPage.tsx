import { useState } from 'react';
import { ArrowRight, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from 'lucide-react';
import { useMeta } from '@/lib/useMeta';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function EvaluationPage() {
  useMeta('Book an Evaluation | Team Floppy Ears', 'Tell us about your dog and request a training evaluation with Team Floppy Ears.');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">Your next step</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">Tell us about your dog</h1>
      <p className="mt-4 max-w-xl leading-7 text-slate-600">
        Age, breed, bite history, triggers and goals help us recommend the right training format before you spend money on the wrong program.
      </p>

      {status === 'success' && (
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <div>
            <p className="font-black text-green-800">Thank you — your request was received.</p>
            <p className="mt-1 text-sm leading-6 text-green-700">A member of the Team Floppy Ears team will reach out within one business day.</p>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div>
            <p className="font-black text-red-800">Something went wrong.</p>
            <p className="mt-1 text-sm leading-6 text-red-700">Please try again or call us directly.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Dog's name" name="dogName" type="text" required />
          <Field label="Dog's age" name="age" type="text" />
          <Field label="Breed" name="breed" type="text" />
        </div>
        <div>
          <label className="block text-sm font-black text-brand-navy">Primary concern</label>
          <select name="concern" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky">
            <option>Aggression</option>
            <option>Reactivity</option>
            <option>Obedience</option>
            <option>Puppy training</option>
            <option>Boarding</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-black text-brand-navy">Goals &amp; behavior history</label>
          <textarea name="goals" rows={4} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Bite history, triggers, what you want to change..." />
        </div>
        <button type="submit" disabled={status === 'submitting'} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-black text-white transition hover:bg-red-600 disabled:opacity-60">
          {status === 'submitting' ? 'Sending...' : <>Get My Training Recommendation <ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
    </main>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-black text-brand-navy">{label}{required && <span className="text-brand-red"> *</span>}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky" />
    </div>
  );
}
