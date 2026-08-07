import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs font-black uppercase tracking-[.2em] text-brand-red">404</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight text-brand-navy">We couldn&rsquo;t find that page.</h1>
      <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Try one of these popular destinations instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-brand-blue px-6 py-3 font-black text-white transition hover:bg-blue-800">Home</Link>
        <Link to="/board-and-train" className="rounded-full bg-brand-red px-6 py-3 font-black text-white transition hover:bg-red-600">Board &amp; Train</Link>
        <Link to="/dog-boarding" className="rounded-full bg-brand-sky px-6 py-3 font-black text-brand-blue transition hover:bg-blue-100">Dog Boarding</Link>
      </div>
    </main>
  );
}
