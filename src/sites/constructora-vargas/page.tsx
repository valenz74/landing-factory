import { config } from './config'
import { Hero } from './components/Hero'
import { Servicios } from './components/Servicios'
import { Proyectos } from './components/Proyectos'

export default function ConstructoraVargasPage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Proyectos />
      <section id="contacto" className="py-24 px-4" style={{ backgroundColor: config.theme.primary }}>
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="opacity-90 mb-8 max-w-lg mx-auto">
            Solicita una cotización sin compromiso. Te responderemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href={`tel:${config.footer.phone.replace(/\s/g, '')}`}
              className="bg-white px-8 py-3 rounded-full font-semibold transition-colors"
              style={{ color: config.theme.primary }}
            >
              {config.footer.phone}
            </a>
            <a
              href={`mailto:${config.footer.email}`}
              className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {config.footer.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
