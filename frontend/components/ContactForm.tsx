'use client';

import { useState } from 'react';
import { sendContact } from '@/lib/api';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      await sendContact(form);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Algo correu mal.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-[420px] flex-col gap-3 text-left">
      <input
        required
        placeholder="O teu nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="rounded-[3px] border border-line bg-surface2 px-4 py-2.5 font-mono text-sm text-text placeholder:text-faint focus:border-amber focus:outline-none"
      />
      <input
        required
        type="email"
        placeholder="O teu email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="rounded-[3px] border border-line bg-surface2 px-4 py-2.5 font-mono text-sm text-text placeholder:text-faint focus:border-amber focus:outline-none"
      />
      <textarea
        required
        rows={4}
        placeholder="A tua mensagem"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="resize-none rounded-[3px] border border-line bg-surface2 px-4 py-2.5 font-mono text-sm text-text placeholder:text-faint focus:border-amber focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-[3px] border border-amber bg-amber px-5 py-2.5 font-mono text-[13px] font-semibold text-[#12190f] transition-colors hover:bg-[#f2b458] disabled:opacity-60"
      >
        {status === 'sending' ? 'A enviar…' : 'Enviar mensagem'}
      </button>
      {status === 'sent' && (
        <p className="font-mono text-[12.5px] text-green">Mensagem enviada. Obrigado pelo contacto!</p>
      )}
      {status === 'error' && <p className="font-mono text-[12.5px] text-red">{errorMsg}</p>}
    </form>
  );
}
