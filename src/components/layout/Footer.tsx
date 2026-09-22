import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'

const base = import.meta.env.BASE_URL

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030310]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={`${base}logo-dj.png`} alt="DJ LUIZINN" className="h-14 brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Cada batida, uma memória. Transformando festas em experiências inesquecíveis desde 2014.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-[#2563eb] transition-all">
                <FaInstagram size={17} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-[#06b6d4] transition-all">
                <FaYoutube size={17} />
              </a>
              <a href="https://wa.me/5521995575988" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-[#25D366] transition-all">
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Galeria', href: '/#galeria' },
                { label: 'Contato', href: '/#contato' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/50 hover:text-[#2563eb] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={13} className="text-[#2563eb] flex-shrink-0" /> (21) 99557-5988
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Mail size={13} className="text-[#06b6d4] flex-shrink-0" /> luizgferreira13@gmail.com
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={13} className="text-[#2563eb] flex-shrink-0" /> Rio de Janeiro, RJ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2025 DJ LUIZINN. Todos os direitos reservados.</p>
          <p className="text-white/20 text-xs">Cada batida, uma memória. 🎵</p>
        </div>
      </div>
    </footer>
  )
}
