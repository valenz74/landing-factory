import { config } from './config'

export default function ConstructoraVargasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight" style={{ color: config.theme.primary }}>
            {config.name}
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-600">
            {config.menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:opacity-80 transition-opacity"
                style={{ color: config.theme.primary }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            className="text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
            style={{ backgroundColor: config.theme.primary }}
          >
            Cotizar
          </a>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="py-12 px-4" style={{ backgroundColor: config.theme.primary }}>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="font-bold text-lg mb-3">{config.footer.company}</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Construyendo confianza desde hace más de 20 años. Calidad, seguridad y compromiso en cada proyecto.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>{config.footer.address}</li>
              <li>{config.footer.phone}</li>
              <li>{config.footer.email}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {config.menu.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:opacity-100 transition-opacity">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-60 text-white">
          © {new Date().getFullYear()} {config.footer.company}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
