import { useEffect } from 'react';

export function JsonLd({ data, id = 'jsonld' }: { data: object; id?: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, [data, id]);
  return null;
}
