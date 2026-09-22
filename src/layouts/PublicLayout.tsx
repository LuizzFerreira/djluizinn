import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FaWhatsapp } from 'react-icons/fa'

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp flutuante — mobile only */}
      <a
        href="https://wa.me/5521995575988"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float md:hidden"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </div>
  )
}
