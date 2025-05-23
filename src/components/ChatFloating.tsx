import { useState, useEffect } from 'react';

const steps = [
  {
    key: 'nome',
    question: 'Qual seu nome?',
    placeholder: 'Digite seu nome',
    type: 'text',
  },
  {
    key: 'email',
    question: 'Qual seu e-mail?',
    placeholder: 'Digite seu e-mail',
    type: 'email',
  },
  {
    key: 'mensagem',
    question: 'Conte um pouco sobre seu projeto ou desafio!',
    placeholder: 'Digite sua mensagem',
    type: 'textarea',
  },
];

export default function ChatFloating() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(-1); // -1 = hook inicial
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Abrir automaticamente ao carregar após 10 segundos
    setTimeout(() => setOpen(true), 10000);
  }, []);

  function handleInput(e) {
    setForm({ ...form, [steps[step].key]: e.target.value });
  }

  function handleNext(e) {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
      // Aqui você pode integrar com backend, zapier, etc.
    }
  }

  function handleRestart() {
    setStep(-1);
    setForm({ nome: '', email: '', mensagem: '' });
    setSubmitted(false);
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}>
      {!open && (
        <button
          aria-label="Abrir chat"
          onClick={() => setOpen(true)}
          className="rounded-full shadow-lg bg-gradient-to-r from-[#DB2337] to-[#F47F44] p-0.5 flex items-center justify-center w-16 h-16 hover:scale-105 transition"
        >
          <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="14" /><path d="M8 16h8M8 12h12M8 20h6" /></svg>
        </button>
      )}
      {open && (
        <div className="w-[340px] max-w-[95vw] rounded-2xl shadow-2xl bg-[#181818] flex flex-col overflow-hidden animate-fadeInUp" style={{boxShadow: '0 8px 32px 0 rgba(0,0,0,0.32)'}}>
          <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#DB2337] to-[#F47F44]">
            <img src="/images/jordano.png" alt="Jordano Gonzatto" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <div className="flex-1">
              <div className="font-bold text-white text-base leading-tight">Jordano Gonzatto</div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span> Online agora
              </div>
            </div>
            <button aria-label="Fechar chat" onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-xl ml-2">
              ×
            </button>
          </div>
          <div className="flex-1 bg-white p-4 flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <img src="/images/jordano.png" alt="Jordano Gonzatto" className="w-8 h-8 rounded-full object-cover" />
              <div className="bg-gray-100 rounded-xl px-4 py-2 text-gray-900 text-sm">Olá, tudo bem?</div>
            </div>
            {step === -1 && !submitted && (
              <div className="bg-gray-100 rounded-2xl px-4 py-4 mt-2 flex flex-col gap-2 items-center">
                <div className="text-gray-900 text-base mb-2 text-center">Vamos conversar e tirar <b>seu projeto do papel</b>?</div>
                <button onClick={() => setStep(0)} className="mt-2 bg-gradient-to-r from-[#DB2337] to-[#F47F44] text-white font-bold rounded-xl px-6 py-2 flex items-center gap-2 text-base shadow hover:scale-105 transition">
                  Começar <span style={{fontSize: 18}}>→</span>
                </button>
                <div className="text-xs text-gray-500 mt-2">Clicando acima você aceita as Políticas de privacidade deste site.</div>
              </div>
            )}
            {step >= 0 && !submitted && (
              <form onSubmit={handleNext} className="bg-gray-100 rounded-2xl px-4 py-4 mt-2 flex flex-col gap-2">
                <div className="text-gray-900 text-base mb-2">
                  {steps[step].question}
                </div>
                {steps[step].type === 'textarea' ? (
                  <textarea
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DB2337] resize-none"
                    placeholder={steps[step].placeholder}
                    value={form[steps[step].key]}
                    onChange={handleInput}
                    rows={3}
                    required
                  />
                ) : (
                  <input
                    type={steps[step].type}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DB2337]"
                    placeholder={steps[step].placeholder}
                    value={form[steps[step].key]}
                    onChange={handleInput}
                    required
                  />
                )}
                <button type="submit" className="mt-2 bg-gradient-to-r from-[#DB2337] to-[#F47F44] text-white font-bold rounded-xl px-6 py-2 flex items-center gap-2 text-base shadow hover:scale-105 transition">
                  {step < steps.length - 1 ? 'Avançar' : 'Enviar'} <span style={{fontSize: 18}}>→</span>
                </button>
                <div className="text-xs text-gray-500 mt-2">Clicando acima você aceita as Políticas de privacidade deste site.</div>
              </form>
            )}
            {submitted && (
              <div className="bg-gray-100 rounded-2xl px-4 py-6 mt-2 flex flex-col items-center">
                <div className="text-green-700 font-bold text-lg mb-2">Obrigado, {form.nome.split(' ')[0] || 'amigo'}! 🎉</div>
                <div className="text-gray-800 text-base mb-2 text-center">Recebemos suas informações e entraremos em contato em breve.</div>
                <button onClick={handleRestart} className="mt-2 text-[#DB2337] font-bold underline text-sm">Enviar outro</button>
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.4s cubic-bezier(0.4,0.2,0.2,1) both;
        }
      `}</style>
    </div>
  );
} 