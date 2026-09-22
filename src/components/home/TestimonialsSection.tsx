import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Carolina',
    event: 'Casamento',
    text: 'O DJ LUIZINN fez nosso casamento ser perfeito. Leu a pista desde o início, todo mundo dançou até o fim. Simplesmente incrível!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Roberto Mendes',
    event: 'Formatura',
    text: 'Contratamos pra formatura da turma e foi outro nível. O set foi impecável, a galera não parou de dançar. Recomendo demais!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Fernanda Lima',
    event: '15 Anos',
    text: 'Minha filha ficou encantada. O DJ soube misturar os estilos perfeitamente, agradou todo mundo da festa. Profissional demais!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Carlos Eduardo',
    event: 'Evento Corporativo',
    text: 'Evento corporativo com mais de 300 pessoas. O LUIZINN dominou a noite inteira. Estrutura impecável e muita energia.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=7',
  },
  {
    name: 'Juliana Santos',
    event: 'Aniversário',
    text: 'Festa incrível do começo ao fim. O DJ entendeu exatamente o que eu queria e entregou muito mais. Já contratei de novo!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=9',
  },
]

import img1 from '@/assets/imagem-1.jpg'
import img2 from '@/assets/imagem-2.jpg'
import img3 from '@/assets/imagem-3.jpg'
import img4 from '@/assets/imagem-4.jpg'
import img5 from '@/assets/imagem-5.jpg'
import img6 from '@/assets/imagem-6.jpg'
import img7 from '@/assets/imagem-7.png'

const galleryImages = [
  { src: img1, href: 'https://www.instagram.com/p/DcHyWn4MlvZ/' },
  { src: img2, href: 'https://www.instagram.com/p/DdSXDPcRuqJ/' },
  { src: img3, href: 'https://www.instagram.com/p/C__4kEDO8O7/' },
  { src: img4, href: 'https://www.instagram.com/p/CzMUwnZLO2Z/' },
  { src: img5, href: 'https://www.instagram.com/p/CuQHVc8AtcO/' },
  { src: img6, href: 'https://www.instagram.com/p/CsTm8AsuZ5Z/' },
  { src: img7, href: 'https://www.instagram.com/p/CqTfgOkAIvw/' },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Quem foi, <span className="gold-text">aprovou</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass neon-border rounded-2xl p-6 h-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={13} className="text-[#2563eb] fill-[#2563eb]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#06b6d4] text-xs">{t.event}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase">Galeria</span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
          Momentos <span className="gold-text">inesquecíveis</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {galleryImages.map((img, i) => (
          <motion.a
            key={i}
            href={img.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
              i === 0 ? 'col-span-2 md:col-span-2 aspect-video' : 'aspect-square'
            }`}
          >
            <img
              src={img.src}
              alt={`Evento ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="waveform">
                {Array.from({ length: 8 }).map((_, j) => <span key={j} />)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
