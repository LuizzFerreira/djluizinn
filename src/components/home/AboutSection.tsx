import { useState } from 'react'
import { motion } from 'framer-motion'
import { Music2, Headphones, Zap, Clock, VolumeX, Volume2 } from 'lucide-react'

const base = import.meta.env.BASE_URL

const differentials = [
  { icon: Music2, title: 'Sets Exclusivos', desc: 'Cada evento tem uma playlist única, criada especialmente pra você.' },
  { icon: Headphones, title: 'Leitura de Pista', desc: 'Sinto a energia do público e adapto o set em tempo real.' },
  { icon: Zap, title: 'Equipamento Pro', desc: 'Equipamentos de alta qualidade para um som impecável.' },
  { icon: Clock, title: 'Pontualidade Total', desc: 'Chego antes, monto tudo e garanto que a festa começa no horário.' },
]

export function AboutSection() {
  const [muted, setMuted] = useState(true)
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Quem é o DJ</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6 leading-tight">
            Mais que música,<br />
            <span className="gold-text">uma experiência.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Com mais de 10 anos na pista, o DJ LUIZINN é referência em eventos premium no Rio de Janeiro. De casamentos íntimos a grandes formaturas, cada evento recebe atenção total e um set pensado do zero.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            Não é só colocar música — é criar a trilha sonora dos momentos mais importantes da sua vida.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass neon-border rounded-xl p-4 group hover:bg-white/5 transition-colors"
              >
                <d.icon size={18} className="text-[#2563eb] mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">{d.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vídeo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#2563eb]/10 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl overflow-hidden neon-border">
            <video
              src={`${base}video-festa.mp4`}
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="none"
              className="w-full object-cover aspect-[4/5] sm:aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-gold rounded-xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="waveform">
                    {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
                  </div>
                  <img src={`${base}logo-dj.png`} alt="DJ LUIZINN" className="h-8 brightness-0 invert" />
                </div>
                <button
                  onClick={() => setMuted(m => !m)}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:text-[#06b6d4] transition-colors cursor-pointer flex-shrink-0"
                  aria-label={muted ? 'Ativar som' : 'Mutar'}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-[#06b6d4]" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
