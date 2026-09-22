import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import bannerDj from '@/assets/banner-dj.png'
import { Button } from '@/components/ui/Button'
import { LoginModal } from '@/components/ui/LoginModal'
import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function HeroSection() {
  const [loginOpen, setLoginOpen] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  const particles = useMemo(() =>
    Array.from({ length: 30 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() > 0.7 ? 2 : 1,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 4,
    })), [])

  function handleCTA() {
    if (user) navigate('/dashboard/criar-evento')
    else setLoginOpen(true)
  }

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden scanlines">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a] z-10" />
          <img
            src={bannerDj}
            alt=""
            className="w-full h-full object-cover object-top opacity-50"
          />
        </div>

        {/* Glow central */}
        <div className="absolute inset-0 hero-gradient z-10 pointer-events-none" />

        {/* Glow extra inferior */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563eb]/15 blur-[100px] z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#06b6d4]/10 blur-[120px] z-10 pointer-events-none" />

        {/* Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#2563eb]"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [-15, 15, -15], opacity: [0.1, p.size > 1 ? 0.9 : 0.5, 0.1] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        {/* Waveform bottom */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-40">
          <div className="waveform">
            {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-5 max-w-4xl mx-auto pt-20">
          {/* Badge localização */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6"
          >
            <MapPin size={12} className="text-[#2563eb]" />
            <span className="text-[#2563eb] text-xs font-semibold tracking-widest uppercase">DJ Profissional • Rio de Janeiro</span>
          </motion.div>

          {/* Nome em destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
          >
            <span className="font-rage text-[clamp(3.5rem,13vw,8rem)] text-white leading-none block">
              DJ LUIZINN
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5"
          >
            A festa que você merece<br />
            <span className="gold-text">começa com o DJ certo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/55 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Casamentos, formaturas, aniversários e corporativos. Cada batida pensada pra fazer sua noite inesquecível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" onClick={handleCTA} className="group w-full sm:w-auto min-h-[52px]">
              Quero minha festa
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[52px]"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver serviços
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-8 mt-14"
          >
            {[
              { value: '200+', label: 'Eventos' },
              { value: '10+', label: 'Anos de exp.' },
              { value: '100%', label: 'Satisfação' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl gold-text-animate">{s.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#2563eb] rounded-full" />
          </div>
        </motion.div>
      </section>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
