import { config } from '../config'

const proyectos = [
  {
    title: 'Edificio Torres del Sol',
    category: 'Residencial',
    desc: 'Conjunto de 48 departamentos con áreas verdes y piscina.',
  },
  {
    title: 'Centro Comercial Plaza Norte',
    category: 'Comercial',
    desc: '30 locales comerciales con estacionamiento subterráneo.',
  },
  {
    title: 'Planta Industrial Alimentos',
    category: 'Industrial',
    desc: 'Nave de 5000 m² con estándares sanitarios internacionales.',
  },
  {
    title: 'Condominio Los Olivos',
    category: 'Residencial',
    desc: '20 casas con diseño moderno y eficiencia energética.',
  },
]

export function Proyectos() {
  return (
    <section id="proyectos" className="py-24 px-4" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-zinc-500 text-center max-w-xl mx-auto mb-16">
          Conoce algunos de los proyectos que hemos realizado para nuestros clientes.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {proyectos.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-zinc-100 p-6 hover:shadow-lg transition-all"
            >
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: `${config.theme.primary}15`, color: config.theme.primary }}
              >
                {p.category}
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 mt-3 mb-2">{p.title}</h3>
              <p className="text-zinc-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
