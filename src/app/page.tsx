'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Image from 'next/image'

interface PortfolioItem {
  id: string
  thumbSrc: string
  src: string
  name: string
  link?: string
}

function SectionReveal({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  )
}

export default function PixelHubLanding() {
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-deep-contrast text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#09122F]">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-[95px] max-w-container-max mx-auto">
          <Image src="/logo-web.webp" alt="Minisitios" width={188} height={118} className="object-contain" />
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium" href="#beneficios">Beneficios</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium" href="#portafolio">Portafolio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium" href="#proceso">Proceso</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium" href="#precios">Precios</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium" href="#faq">FAQ</a>
        </div>
        <a href="https://wa.me/573233644603?text=Hola%20Jos%C3%A9%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20mini-sitios" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white px-8 py-3 rounded-lg font-bold hover:scale-95 active:scale-90 transition-transform">
          Comenzar ahora
        </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[90vh] flex items-center pt-32 pb-stack-xl bg-deep-contrast overflow-hidden">
        <HeroParticles />
        <MeshGradient />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter grid lg:grid-cols-2 items-center gap-stack-md w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="z-10"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="text-headline-lg-mobile md:text-[40px] font-bold text-white mb-6 leading-tight"
            >
              Tu negocio merece una landing profesional. <span className="text-primary">En muy poco tiempo</span> y sin complicaciones.
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="text-[20px] text-on-surface-variant mb-10 max-w-xl"
            >
              Creamos una página única para tu empresa, optimizada para convertir visitantes en clientes reales. Rápido, elegante y efectivo.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://wa.me/573233644603?text=Hola%20Jos%C3%A9%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20mini-sitios" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 group hover:shadow-lg transition-all">
                Quiero mi minisitio <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a href="#portafolio" className="bg-surface-container-high text-white border border-primary/20 px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-colors">
                Ver ejemplos
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative lg:h-[600px] flex justify-center"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse-slow" />
            <Image
              alt="Workspace featuring a sleek landing page design"
              className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover max-w-2xl transform lg:rotate-3 border border-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBc_SS7J7ni4O6V1vvZWkVjiibkTCJVnw5xOFWXpZgvGtYYrqjEUNKMQGLQ7GDP-Y9c1Ic_I7LUxICfDHt02iIpUh_6oZBb_nrQ0zcW8ivzphrMQhy2Tjgdm_ZHj_f5-i6pX6MgW7Nl1MRERmGlXtHr0qSbA4aiNLwKKLFBSS7xDMAnAakzMXGglcCoVrcYNTlH1hFEXjvd5KS0dnqKKST3VTmqXlTUZpB0wA_Iy4H67PWJFh_Ai3_27qjU0vqbcjjmVIfxTHu1wo"
              width={1200}
              height={800}
              unoptimized
            />
          </motion.div>
        </div>
      </header>

      {/* Problem / Solution */}
      <section className="bg-surface-container-lowest py-stack-xl">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid md:grid-cols-2 gap-stack-lg items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="p-stack-md bg-deep-contrast rounded-xl border border-primary/10"
            >
              <span className="text-primary font-bold text-xs mb-4 block uppercase tracking-widest">El Problema</span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg mb-6 text-on-surface">¿Crees que tener página web es caro, lento y complicado?</h2>
              <p className="text-[18px] text-on-surface-variant">
                Muchos negocios pierden ventas porque su presencia digital es nula o deficiente. Las agencias tradicionales tardan meses y cobran fortunas por herramientas que nunca aprendes a usar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="p-stack-md bg-primary-container text-white rounded-xl shadow-xl transform md:translate-x-4 border border-white/10"
            >
              <span className="text-white/80 font-bold text-xs mb-4 block uppercase tracking-widest">La Solución</span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg mb-6">Minisitios listos en 15 días con todo resuelto.</h2>
              <p className="text-[18px]">
                Simplificamos todo el proceso. Entregamos landing pages de alto impacto, diseñadas para vender, en un tiempo récord y con una inversión transparente que incluye mantenimiento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-stack-xl bg-deep-contrast" id="beneficios">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="text-headline-lg font-bold mb-4 text-on-surface">Todo lo que necesitas para vender más</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              { icon: 'brush', title: 'Diseño a medida', desc: 'Nada de plantillas genéricas. Tu marca tendrá un estilo único y profesional.' },
              { icon: 'bolt', title: 'Velocidad extrema', desc: 'Optimizamos cada elemento para que tu sitio cargue en milisegundos.' },
              { icon: 'trending_up', title: 'Enfocada en conversión', desc: 'Estructura diseñada psicológicamente para guiar al usuario al botón de compra.' },
              { icon: 'link', title: 'Link fácil', desc: 'Tu propio dominio o un link corto ideal para tus biografías de redes sociales.' },
            ].map((item, i) => {
              const isBlue = i % 2 === 1
              return (
                <motion.div
                  key={item.icon}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`relative p-stack-md rounded-xl border transition-all duration-300 group cursor-pointer overflow-hidden ${isBlue ? 'bg-primary-container text-white border-white/10' : 'bg-deep-contrast border-primary/10'}`}
                  style={{ boxShadow: '0 0 0px rgba(4, 92, 211, 0)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(4, 92, 211, 0.35)'; e.currentTarget.style.borderColor = isBlue ? 'rgba(255,255,255,0.4)' : 'rgba(176, 198, 255, 0.5)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0px rgba(4, 92, 211, 0)'; e.currentTarget.style.borderColor = isBlue ? 'rgba(255,255,255,0.1)' : 'rgba(176, 198, 255, 0.1)' }}
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <span className={`font-bold text-xs mb-4 block uppercase tracking-widest ${isBlue ? 'text-white/80' : 'text-primary'}`}>
                      {['01', '02', '03', '04'][i]}
                    </span>
                    <motion.span
                      className={`material-symbols-outlined text-4xl mb-4 inline-block ${isBlue ? 'text-white' : 'text-primary'}`}
                      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                    >
                      {item.icon}
                    </motion.span>
                    <h3 className={`text-title-md font-bold mb-3 ${isBlue ? 'text-white' : 'text-on-surface'}`}>{item.title}</h3>
                    <p className={`text-[18px] ${isBlue ? 'text-white/80' : 'text-on-surface-variant'}`}>{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery / Portfolio */}
      <section className="py-stack-xl bg-surface-container-lowest" id="portafolio">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="text-headline-lg font-bold mb-stack-md text-center text-on-surface">Ellos ya tienen el suyo</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              { id: 'medisalud', thumbSrc: '/images/portfolio/clinica-medisalud-portada.webp', src: '/images/portfolio/medisalud.webp', name: 'Clínica Medisalud' },
              { id: 'consultores', thumbSrc: '/images/portfolio/consultores-asociados-portada.webp', src: '/images/portfolio/consultores-asociados.webp', name: 'Consultores Asociados' },
              { id: 'constructora', thumbSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkRmUko_Zok7hV-ubyG_l4npoXbgNnSlppoIArakZMEdo3x9y1zmacJyhCdKDOWuP3wIBasDs9Aj6BRWW6JFkOm3D2k8kV2C144sS_Dw5YVRg4_prWgSUUXKf-iLlJcUluzoAzymAcJ-gZBvUT4RgslhUknwGZ1Nrd14NL856pup9Nb8M9YNKfTVICHa-fCryx7kDBh3yGBvYTLpfwWLV5oOqiiBLfgylbyKxEwlcenJ9GE-hYkv-mYy4-DAbNHLGa0yucR8VJ2SA', src: '/images/portfolio/constructora-vargas.webp', name: 'Constructora Vargas', link: '/constructora-vargas' },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="overflow-hidden rounded-xl group relative border border-primary/10 cursor-pointer"
                onClick={() => setModalItem(item)}
              >
                <Image alt={`${item.name} Showcase`} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" src={item.thumbSrc} width={600} height={400} unoptimized />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-deep-contrast to-transparent">
                  <p className="text-white font-bold text-title-md">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-stack-xl bg-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <h2 className="text-headline-lg font-bold mb-stack-md text-white">Ideal para cualquier sector</h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              { icon: 'storefront', label: 'Comercios locales' },
              { icon: 'engineering', label: 'Servicios profesionales' },
              { icon: 'medical_services', label: 'Clínicas' },
              { icon: 'restaurant', label: 'Gastronomía' },
              { icon: 'school', label: 'Educación' },
              { icon: 'event', label: 'Eventos' },
              { icon: 'apartment', label: 'Inmobiliaria' },
              { icon: 'add_circle', label: 'Cualquier sector' },
            ].map((item) => (
              <motion.div
                key={item.icon}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-deep-contrast flex items-center justify-center mb-4 border border-white/5"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                >
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                </motion.div>
                <p className="text-on-surface font-medium text-[18px]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-stack-xl bg-deep-contrast" id="proceso">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="text-headline-lg font-bold mb-stack-lg text-center text-on-surface">Nuestro Proceso</h2>

          {/* Desktop: horizontal roadmap */}
          <motion.div
            className="hidden md:block relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
          >
            <div className="absolute top-7 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-[2px] bg-primary/20" />
            {[
              { num: '01', title: 'Cuéntanos', desc: 'Agendamos una breve llamada para entender tu negocio y tus objetivos.' },
              { num: '02', title: 'Diseñamos', desc: 'Nuestro equipo creativo crea tu landing optimizada y personalizada.' },
              { num: '03', title: 'Publicamos', desc: 'Lanzamos tu sitio al mundo y empezamos a captar leads.' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="inline-block w-1/3 align-top"
              >
                <div className="flex flex-col items-center px-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center text-2xl font-bold relative z-10 shadow-lg">
                      {item.num}
                    </div>
                    {i < 2 && (
                      <div className="absolute top-1/2 -right-[calc(50%+7px)] w-3 h-3 rounded-full bg-primary z-10" />
                    )}
                  </div>
                  <div className="mt-8 bg-surface-container-high border border-primary/10 rounded-xl p-6 text-center w-full">
                    <h3 className="text-title-md font-bold mb-3 text-on-surface">{item.title}</h3>
                    <p className="text-on-surface-variant text-[18px]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: vertical timeline */}
          <motion.div
            className="md:hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-primary/20" />
            {[
              { num: '01', title: 'Cuéntanos', desc: 'Agendamos una breve llamada para entender tu negocio y tus objetivos.' },
              { num: '02', title: 'Diseñamos', desc: 'Nuestro equipo creativo crea tu landing optimizada y personalizada.' },
              { num: '03', title: 'Publicamos', desc: 'Lanzamos tu sitio al mundo y empezamos a captar leads.' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } } }}
                className="relative flex items-start gap-5 pb-10 last:pb-0"
              >
                <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center text-lg font-bold shrink-0 relative z-10 shadow-md">
                  {item.num}
                </div>
                <div className="bg-surface-container-high border border-primary/10 rounded-xl p-5 flex-1">
                  <h3 className="text-title-md font-bold mb-2 text-on-surface">{item.title}</h3>
                  <p className="text-on-surface-variant text-[16px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-stack-xl bg-surface-container-low" id="precios">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="text-headline-lg font-bold mb-4 text-white">Elige el plan que mejor se adapte</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Sin costos ocultos, con todo lo necesario para despegar.</p>
          </div>

          {/* Pricing Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-gutter items-stretch mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Básico */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } } }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-deep-contrast p-8 rounded-2xl border border-primary/10 flex flex-col"
            >
              <h3 className="text-title-md font-bold mb-6 text-white">Básico</h3>
              <div className="space-y-4 mb-8">
                <PricingRow label="10 Cuotas mensuales de" value="$33.000" />
                <PricingRow label="Pago inicial (2 cuotas)" value="$66.000" className="text-on-surface" />
                <div className="flex justify-between items-center border-t border-primary/10 pt-4">
                  <span className="text-on-surface-variant">Total anual</span>
                  <span className="text-on-surface">$396.000</span>
                </div>
                <div className="flex justify-between items-center font-bold text-primary">
                  <span className="text-primary">Un solo pago (10% desc.)</span>
                  <span>$356.400</span>
                </div>
              </div>
              <motion.a
                href="https://wa.me/573233644603?text=Quiero%20el%20plan%20B%C3%A1sico%2C%20dame%20mas%20informacion%20por%20favor..." target="_blank" rel="noopener noreferrer"
                className="w-full py-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors font-bold text-primary text-center block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Elegir Plan
              </motion.a>
            </motion.div>

            {/* Pro (popular) */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 } } }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className="bg-primary-container p-8 rounded-2xl transform scale-105 shadow-2xl z-10 flex flex-col relative overflow-hidden border border-white/10"
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-yellow-400 text-[10px] px-3 py-1 rounded-full text-black font-bold uppercase tracking-widest">Más vendido</span>
                <span className="bg-white/20 text-[10px] px-3 py-1 rounded-full text-white font-bold uppercase tracking-widest">Popular ⭐</span>
              </div>
              <h3 className="text-title-md font-bold mb-6 text-white">Pro</h3>
              <div className="space-y-4 mb-8">
                <PricingRow label="10 Cuotas mensuales de" value="$50.000" className="text-white" />
                <PricingRow label="Pago inicial (2 cuotas)" value="$100.000" className="text-white" />
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-white/80">Total anual</span>
                  <span className="text-white">$600.000</span>
                </div>
                <div className="flex justify-between items-center font-bold text-white">
                  <span className="text-white">Un solo pago (10% desc.)</span>
                  <span>$540.000</span>
                </div>
              </div>
              <motion.a
                href="https://wa.me/573233644603?text=Quiero%20el%20plan%20Pro%2C%20dame%20mas%20informaci%C3%B3n%20por%20favor..." target="_blank" rel="noopener noreferrer"
                className="w-full py-4 rounded-lg bg-white text-primary-container hover:bg-on-surface transition-colors font-bold text-center block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Elegir Plan
              </motion.a>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 } } }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-deep-contrast p-8 rounded-2xl border border-primary/10 flex flex-col"
            >
              <h3 className="text-title-md font-bold mb-6 text-white">Premium</h3>
              <div className="space-y-4 mb-8">
                <PricingRow label="10 Cuotas mensuales de" value="$73.000" />
                <PricingRow label="Pago inicial (2 cuotas)" value="$146.000" className="text-on-surface" />
                <div className="flex justify-between items-center border-t border-primary/10 pt-4">
                  <span className="text-on-surface-variant">Total anual</span>
                  <span className="text-on-surface">$876.000</span>
                </div>
                <div className="flex justify-between items-center font-bold text-primary">
                  <span className="text-primary">Un solo pago (10% desc.)</span>
                  <span>$788.400</span>
                </div>
              </div>
              <motion.a
                href="https://wa.me/573233644603?text=Quiero%20el%20plan%20Premium%2C%20dame%20mas%20informacion%20por%20favor..." target="_blank" rel="noopener noreferrer"
                className="w-full py-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors font-bold text-primary text-center block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Elegir Plan
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Pricing Table */}
          <div className="pricing-table-container bg-deep-contrast rounded-2xl border border-primary/10 overflow-hidden shadow-xl">
            <table className="text-on-surface">
              <thead className="bg-surface-container-high">
                <tr>
                  <th className="font-bold">Característica</th>
                  <th className="font-bold text-center">Básico</th>
                  <th className="font-bold text-primary text-center">Pro (⭐ recomendado)</th>
                  <th className="font-bold text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Landing onepage', b: true, p: true, pm: true },
                  { label: 'Slug personalizado ( /tunegocio )', b: true, p: true, pm: true },
                  { label: null, header: 'Número de secciones', b: '4', p: '7', pm: '10', isBold: true },
                  { label: 'Enlace a WhatsApp', b: true, p: true, pm: true },
                  { label: 'Galería de imágenes', b: true, p: true, pm: true },
                  { label: 'Mapa de ubicación', b: false, p: true, pm: true },
                  { label: 'Testimonios', b: false, p: true, pm: true },
                  { label: 'Integración con redes sociales', b: '✓(1)', p: '✓(3)', pm: '✓(5)' },
                  { label: 'Facebook Ads (eventos)', b: false, p: '✓(2)', pm: '✓(4)' },
                  { label: 'SEO básico (meta tags)', b: true, p: true, pm: true },
                  { label: 'Soporte por email', b: 'Estándar', p: 'Prioritario', pm: 'WhatsApp directo', pClass: 'text-primary font-bold' },
                  { label: null, header: 'Revisiones gratuitas', b: '1 ronda', p: '2 rondas', pm: '3 rondas', isBold: true },
                  { label: null, header: 'Tiempo de entrega', b: '10 días', p: '7 días', pm: '5 días', isBold: true },
                ].map((row, i) => (
                  <tr key={i}>
                    {row.header ? (
                      <td className="text-sm font-bold">{row.header}</td>
                    ) : (
                      <td className="text-sm">{row.label}</td>
                    )}
                    <td className="text-center">{renderCell(row.b, false)}</td>
                    <td className="text-center">{renderCell(row.p, true)}</td>
                    <td className="text-center">{renderCell(row.pm, false)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-stack-xl bg-deep-contrast">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="text-headline-lg font-bold mb-stack-lg text-center text-on-surface">Nuestros clientes dicen</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-stack-xl bg-primary-container" id="faq">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter max-w-3xl">
          <h2 className="text-headline-lg font-bold mb-stack-lg text-center text-white">Preguntas Frecuentes</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Contact */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-stack-xl bg-deep-contrast"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <h2 className="text-headline-lg font-bold mb-6 text-white">¿Tienes dudas o comentarios?</h2>
          <p className="text-[18px] text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Contáctame para resolver todas tus inquietudes, trabajamos sobre cupos máximos mensuales.
          </p>
          <motion.a
            href="https://wa.me/573233644603?text=Hola%20Jos%C3%A9%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20mini-sitios" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-lg font-bold text-[18px] hover:scale-105 active:scale-95 transition-transform shadow-lg"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
          >
            Contactar a José
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full px-margin-mobile md:px-margin-desktop py-lg bg-surface-container-low border-t border-primary/10"
      >
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-stack-md">
          <div className="max-w-md md:-ml-5">
            <Image src="/logo-web.webp" alt="Minisitios" width={140} height={88} className="object-contain mb-4" />
            <p className="text-white text-[16px]">
              Me llamo José Valenzuela y me dedico al diseño web. Ayudo a emprendedores, independientes y empresas a tener una página moderna y atractiva que mejore su presencia online y venda más.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-white text-[16px] md:-mr-5">
            <a href="https://wa.me/573233644603?text=Hola%20Jos%C3%A9%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20mini-sitios" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">phone</span> +57 323 364 4603
            </a>
            <a href="mailto:josevalenzuelamolina@proton.me" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">mail</span> josevalenzuelamolina@proton.me
            </a>
            <a href="mailto:josevalenzuelamolina.co@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">mail</span> josevalenzuelamolina.co@gmail.com
            </a>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
              <a href="https://www.linkedin.com/in/josevalenzuelaweb/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@josevalenzuelaweb" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                YouTube
              </a>
              <a href="https://www.instagram.com/josevalenzuelaweb/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@josevalenzuela.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Portfolio Modal */}
      <AnimatePresence>
        {modalItem && (
          <PortfolioModal item={modalItem} onClose={() => setModalItem(null)} />
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    const count = Math.min(80, Math.floor((w * h) / 12000))

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(176, 198, 255, 0.4)'
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(176, 198, 255, ${0.08 * (1 - dist / 150)})`
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
}

function MeshGradient() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-full max-h-full z-0 pointer-events-none opacity-40">
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-[#045CD3] blur-[100px]"
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#b0c6ff] blur-[120px]"
        animate={{ x: [0, -40, 50, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '5%', right: '10%' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-[#0058cb] blur-[80px]"
        animate={{ x: [0, 30, -50, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '40%', right: '20%' }}
      />
    </div>
  )
}

function SectionRevealMotion({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}

function TestimonialCarousel() {
  const [startIdx, setStartIdx] = useState(0)
  const testimonials = [
    {
      quote: '"Pensé que me iba a llevar meses tener mi tienda online. Con Minisitios, en 3 días ya estaba recibiendo pedidos por WhatsApp. La mejor inversión para mi negocio."',
      name: 'Laura Stivenson',
      role: 'Dueña de Clínica Estética',
      avatar: '/images/testimonials/LauraG.webp',
    },
    {
      quote: '"Excelente trato y profesionalismo. Mi constructora ahora tiene una cara digital que proyecta la confianza que necesitamos para cerrar grandes contratos."',
      name: 'Roberto Hernan Calderón',
      role: 'Director Constructora',
      avatar: '/images/testimonials/Roberto-T.webp',
    },
    {
      quote: '"Desde que tengo mi landing, los pedidos por WhatsApp no paran. Mis clientes me encuentran al instante y eso se nota en las ventas."',
      name: 'Carlos Mauricio Valderrama',
      role: 'Dueño de Restaurante',
      avatar: '/images/testimonials/Carlos-M.webp',
    },
    {
      quote: '"La velocidad con la que entregaron el proyecto me sorprendió. En menos de una semana ya tenía mi sitio funcionando y captando leads."',
      name: 'Ana Patricia Guerrero',
      role: 'CEO Agencia Digital',
      avatar: '/images/testimonials/Ana-P.webp',
    },
    {
      quote: '"Finalmente puedo mostrar mi portafolio de forma profesional. Mis clientes quedan impresionados y eso me ha ayudado a cerrar más proyectos."',
      name: 'Miguel Hernando Perez',
      role: 'Arquitecto Independiente',
      avatar: 'https://i.pravatar.cc/80?u=miguel',
    },
    {
      quote: '"Comparado con otras opciones del mercado, la relación calidad-precio es imbatible. Y el soporte siempre está disponible cuando lo necesito."',
      name: 'María Sofía Jimenez',
      role: 'Directora de Marketing',
      avatar: 'https://i.pravatar.cc/80?u=sofia',
    },
    {
      quote: '"Arrancar mi negocio digital era un dolor de cabeza hasta que encontré este servicio. Ahora tengo una página profesional sin complicaciones."',
      name: 'Diego Hernando Sanchez',
      role: 'Emprendedor Tech',
      avatar: '/images/testimonials/Diego-H.webp',
    },
  ]
  const visible = testimonials.slice(startIdx, startIdx + 3)
  const maxStart = testimonials.length - 3

  return (
    <div className="relative">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={startIdx}
          className="grid grid-cols-1 md:grid-cols-3 gap-[34px]"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {visible.map((item) => (
            <div key={item.name} className="bg-[#045CD3] p-8 rounded-2xl italic relative border border-white/20 flex flex-col">
              <span className="material-symbols-outlined absolute top-5 left-5 text-[#09122F]/30 text-5xl">format_quote</span>
              <p className="text-body-lg mb-6 relative z-10 text-white flex-grow">{item.quote}</p>
              <div className="flex items-center gap-4 mt-auto">
                <Image src={item.avatar} alt={item.name} width={48} height={48} className="rounded-full object-cover" unoptimized />
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      {startIdx > 0 && (
        <button onClick={() => setStartIdx(startIdx - 1)} className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container-high border border-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors shadow-lg">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      )}
      {startIdx < maxStart && (
        <button onClick={() => setStartIdx(startIdx + 1)} className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container-high border border-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors shadow-lg">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      )}
    </div>
  )
}

function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const items = [
    { q: '¿Incluyen el dominio?', a: 'Si, tu web se llama PixelHub/TuSitioWeb.' },
    { q: '¿Hay costos de mantenimiento?', a: 'El costo mensual cubre el hosting premium, soporte técnico y actualizaciones de seguridad constantes. Hay un pequeño costo adicional, si despues de las revisiones, quieres cambiar algo mas.' },
    { q: '¿Puedo cambiar de plan después?', a: '¡Claro! Puedes escalar o reducir tu plan en cualquier momento según las necesidades de tu negocio.' },
    { q: '¿Cómo recibo los contactos?', a: 'Configuramos el sitio para que los leads lleguen directamente a tu WhatsApp de ventas.' },
    { q: '¿Puedo editar el contenido yo mismo después?', a: 'No, ya que todo el desarrollo está hecho 100% en código, si quieres algo ya muy personalizado, donde tu mismo puedes cambiar cosas, es porque necesitas escalar tu proyecto, cuando llegue ese momento contactame y te apoyo en ello.' },
    { q: '¿Qué pasa si necesito un cambio después del lanzamiento?', a: 'Puedo ofrecerte un mantenimiento mensual o cobrarte por horas. Hablamos y lo dejamos claro desde el principio.' },
  ]
  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <motion.div
            key={item.q}
            layout
            className="bg-deep-contrast rounded-xl border border-white/5 p-6 group cursor-pointer"
            onClick={() => setOpenIdx(isOpen ? null : i)}
          >
            <div className="flex justify-between items-center text-title-md font-bold text-white">
              {item.q}
              <motion.span
                className="material-symbols-outlined"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                expand_more
              </motion.span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-4 text-on-surface-variant overflow-hidden"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

function PricingRow({ label, value, className = 'text-on-surface' }: { label: string; value: string; className?: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-on-surface-variant">{label}</span>
      <span className={`text-xl font-bold ${className}`}>{value}</span>
    </div>
  )
}

function renderCell(value: boolean | string, isPro: boolean) {
  if (typeof value === 'boolean') {
    return (
      <span className={`material-symbols-outlined ${value ? 'check-icon' : 'cross-icon'}`}>
        {value ? 'check_box' : 'close'}
      </span>
    )
  }
  if (typeof value === 'string' && value.startsWith('✓')) {
    const num = value.replace('✓', '')
    const tips: Record<string, string> = { '(1)': 'Una red social vinculada a tu pagina', '(2)': 'Dos eventos de Facebook Ads configurados', '(3)': 'Tres redes sociales vinculadas a tu pagina', '(4)': 'Cuatro eventos de Facebook Ads configurados', '(5)': 'Cinco redes sociales vinculadas a tu pagina' }
    return (
      <span className="inline-flex items-center gap-1 justify-center" title={tips[num] || ''}>
        <span className="material-symbols-outlined check-icon">check_box</span>
        <span className={`text-sm ${isPro ? 'text-primary font-bold' : ''}`}>{num}</span>
      </span>
    )
  }
  return <span className={`text-sm ${isPro ? 'text-primary font-bold' : ''}`}>{value}</span>
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}

function PortfolioModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {isMobile ? (
        <>
          <button
            className="fixed top-4 right-4 z-[110] w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <motion.div
          className="flex flex-col items-center justify-center gap-4 h-full p-4"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#1a1a2e] rounded-[40px] p-2.5 shadow-2xl shadow-black/50">
            <div className="bg-white rounded-[32px] overflow-hidden relative w-[clamp(240px,35vw,300px)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center gap-2">
                <div className="w-[100px] h-[24px] bg-[#1a1a2e] rounded-b-[14px] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#2a2a3e]" />
                </div>
              </div>
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[100px] h-[4px] bg-black/20 rounded-full" />
              </div>
              <Image
                src={item.src}
                alt={item.name}
                width={300}
                height={650}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-white font-bold text-lg">{item.name}</p>
          </div>
          <button className="text-white/60 hover:text-white transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </motion.div>
        </>
      ) : (
        /* Desktop: full-width scrollable image */
        <motion.div
          className="h-full flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <p className="text-white font-bold text-lg">{item.name}</p>
            </div>
            <button className="text-white/60 hover:text-white transition-colors" onClick={onClose}>
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          {/* Scrollable image */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="max-w-5xl mx-auto">
              <Image
                src={item.src}
                alt={item.name}
                width={390}
                height={844}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
