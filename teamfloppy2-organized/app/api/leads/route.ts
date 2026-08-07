import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== 'object') return NextResponse.json({ error:'Invalid payload' }, { status:400 });

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error:'Lead delivery is not configured. Set LEAD_WEBHOOK_URL.' }, { status:503 });
  }

  const response = await fetch(webhook, {
    method:'POST',
    headers:{ 'content-type':'application/json' },
    body:JSON.stringify({ source:'teamfloppyears.com', receivedAt:new Date().toISOString(), ...payload }),
    cache:'no-store'
  });
  if (!response.ok) return NextResponse.json({ error:'Lead destination rejected request' }, { status:502 });
  return NextResponse.json({ ok:true });
}
