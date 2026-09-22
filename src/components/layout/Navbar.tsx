import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bell, ChevronDown, LogOut, LayoutDashboard, Settings } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { LoginModal } from '@/components/ui/LoginModal'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Galeria', href: '/#galeria' },
  { label: 'Contato', href: '/#contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const { user, profile, signOut } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'glass-solid py-3 border-b border-white/5' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5">
            <span className="font-display text-3xl gold-text-animate leading-none">DJ</span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl text-white tracking-widest leading-none">LUIZINN</span>
              <span className="text-[9px] text-white/30 tracking-[0.3em] uppercase leading-none mt-0.5">Eventos & Entretenimento</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-[#2563eb]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 glass border border-white/10 rounded-xl px-3 py-2 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <img
                    src={profile?.avatar_url || `https://ui-avatars.com/api/?name=${profile?.nome}&background=a855f7&color=fff`}
                    alt={profile?.nome || ''}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className="text-sm text-white/80">{profile?.nome?.split(' ')[0]}</span>
                  <ChevronDown size={14} className="text-white/40" />
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 w-52 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <Link to="/dashboard" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors">
                        <LayoutDashboard size={15} /> Meu Painel
                      </Link>
                      <Link to="/dashboard/notificacoes" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors">
                        <Bell size={15} /> Notificações
                      </Link>
                      {profile?.role === 'admin' && (
                        <Link to="/admin" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-[#2563eb] hover:bg-white/10 transition-colors">
                          <Settings size={15} /> Admin
                        </Link>
                      )}
                      <button onClick={() => { signOut(); setProfileOpen(false) }} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-white/10 transition-colors cursor-pointer">
                        <LogOut size={15} /> Sair
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setLoginOpen(true)}>Entrar</Button>
                <Button size="sm" onClick={() => setLoginOpen(true)}>Contratar DJ</Button>
              </>
            )}
          </div>

          {/* Mobile: contratar + menu */}
          <div className="md:hidden flex items-center gap-2">
            {!user && (
              <button
                onClick={() => setLoginOpen(true)}
                className="gold-gradient text-black text-xs font-bold px-4 py-2 rounded-xl"
              >
                Contratar
              </button>
            )}
            <button
              className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-[64px] bg-[#05050f]/98 backdrop-blur-xl z-50"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="px-6 py-8 space-y-1">
                {/* Waveform decorativo */}
                <div className="waveform mb-8">
                  {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
                </div>

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-white/80 hover:text-[#2563eb] py-4 text-2xl font-display tracking-wider border-b border-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-8 space-y-3">
                  {user ? (
                    <>
                      <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-white/70 py-3 text-sm">
                        <LayoutDashboard size={16} /> Meu Painel
                      </Link>
                      <button onClick={() => { signOut(); setMobileOpen(false) }} className="flex items-center gap-3 text-red-400 text-sm py-3 cursor-pointer">
                        <LogOut size={16} /> Sair
                      </button>
                    </>
                  ) : (
                    <Button className="w-full" size="lg" onClick={() => { setLoginOpen(true); setMobileOpen(false) }}>
                      Contratar DJ LUIZINN
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
