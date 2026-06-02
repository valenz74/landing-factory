import { config } from '../config'

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, ${config.theme.primary} 0%, transparent 50%)`,
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-16">
        <div
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          style={{ backgroundColor: `${config.theme.primary}15`, color: config.theme.primary }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: config.theme.secondary }} />
          +20 años de experiencia
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Construimos los espacios que{' '}
          <span style={{ color: config.theme.primary }}>transforman tu futuro</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Proyectos residenciales, comerciales e industriales con los más altos estándares de calidad, seguridad y compromiso.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="text-white px-8 py-3 rounded-full text-base font-semibold transition-colors shadow-lg"
            style={{ backgroundColor: config.theme.primary }}
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 rounded-full text-base font-semibold border transition-colors"
            style={{ borderColor: config.theme.primary, color: config.theme.primary }}
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  )
}
