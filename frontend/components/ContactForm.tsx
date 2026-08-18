'use client';

import { useState } from 'react';
import { sendContact } from '@/lib/api';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const INPUT_CLS =
  'rounded-[2px] border border-line bg-surface px-4 py-2.5 font-mono text-sm text-text placeholder:text-faint focus:border-blue focus:outline-none transition-colors';

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
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-[440px] flex-col gap-3 text-left">
      <input
        required
        placeholder="O teu nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={INPUT_CLS}
      />
      <input
        required
        type="email"
        placeholder="O teu email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={INPUT_CLS}
      />
      <textarea
        required
        rows={4}
        placeholder="A tua mensagem"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`resize-none ${INPUT_CLS}`}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-[2px] border border-blue bg-blue px-5 py-2.5 font-mono text-[13px] font-semibold text-[#0A0F1C] transition-colors hover:border-cyan hover:bg-cyan disabled:opacity-60"
      >
        {status === 'sending' ? 'A enviar…' : '[ Enviar mensagem ]'}
      </button>
      {status === 'sent' && (
        <p className="font-mono text-[12.5px] text-cyan">✓ Mensagem enviada. Obrigado pelo contacto!</p>
      )}
      {status === 'error' && <p className="font-mono text-[12.5px] text-faint">✗ {errorMsg}</p>}
    </form>
  );
}