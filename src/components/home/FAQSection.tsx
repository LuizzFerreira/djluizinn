import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Quais estilos musicais você toca?',
    a: 'Toco de tudo: funk, pagode, sertanejo, eletrônico, pop, anos 80/90, axé e muito mais. O set é montado de acordo com o perfil do seu evento e do seu público.',
  },
  {
    q: 'Você traz o equipamento?',
    a: 'Sim! Trabalho com equipamento profissional próprio: caixas de som, mesa de mixagem, controladora e iluminação básica. Para estruturas maiores, posso indicar parceiros de confiança.',
  },
  {
    q: 'Qual o raio de atendimento?',
    a: 'Atendo principalmente Rio de Janeiro e região metropolitana. Para eventos fora do estado, entre em contato para verificar disponibilidade e logística.',
  },
  {
    q: 'Como funciona a contratação?',
    a: 'Simples! Crie sua conta, monte seu evento escolhendo os serviços, e solicite um orçamento. Entro em contato em até 24h para confirmar tudo.',
  },
  {
    q: 'Qual o prazo mínimo para contratar?',
    a: 'Recomendo pelo menos 30 dias de antecedência para garantir a data. Para eventos maiores como casamentos e formaturas, 90 dias é o ideal.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Trabalhamos com entrada de 50% na confirmação e o restante até o dia do evento. Aceito PIX, transferência e cartão de crédito.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Dúvidas</span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
          Perguntas <span className="gold-text">frequentes</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'neon-border' : ''}`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer min-h-[56px]"
            >
              <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} className="text-[#2563eb] flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="glass-gold rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        {/* Waveform decorativo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
          <div className="waveform scale-150">
            {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Bora fazer acontecer</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 mb-6">
            Sua festa começa<br />
            <span className="gold-text">com uma mensagem.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Me chama no WhatsApp ou manda um e-mail. Respondo rápido e a gente planeja tudo juntos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5521995575988"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 gold-gradient text-black font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto min-h-[52px]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="mailto:luizgferreira13@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-[#2563eb] text-[#2563eb] font-semibold px-8 py-4 rounded-xl hover:bg-[#2563eb]/10 transition-colors w-full sm:w-auto min-h-[52px]"
            >
              Enviar e-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
