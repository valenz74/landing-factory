const servicios = [
  {
    icon: '🏗️',
    title: 'Construcción Residencial',
    desc: 'Casas, departamentos y conjuntos habitacionales con acabados de primera calidad.',
  },
  {
    icon: '🏢',
    title: 'Proyectos Comerciales',
    desc: 'Oficinas, locales comerciales y centros empresariales diseñados para funcionar.',
  },
  {
    icon: '🏭',
    title: 'Obras Industriales',
    desc: 'Bodegas, plantas de producción y naves industriales con estándares internacionales.',
  },
  {
    icon: '📐',
    title: 'Remodelaciones',
    desc: 'Transformamos espacios existentes con soluciones innovadoras y eficientes.',
  },
]

export function Servicios() {
  return (
    <section id="servicios" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-zinc-500 text-center max-w-xl mx-auto mb-16">
          Ofrecemos soluciones integrales de construcción para todo tipo de proyectos.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="bg-zinc-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all group"
            >
              <span className="text-3xl mb-3 block">{s.icon}</span>
              <h3 className="font-semibold text-zinc-900 mb-1">{s.title}</h3>
              <p className="text-sm text-zinc-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
