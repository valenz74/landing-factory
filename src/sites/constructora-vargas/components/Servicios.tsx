const servicios = [
  {
    icon: 'home',
    title: 'Construcción de viviendas',
    desc: 'Desarrollamos proyectos residenciales personalizados con los más altos estándares de calidad y diseño.',
  },
  {
    icon: 'apartment',
    title: 'Proyectos comerciales',
    desc: 'Infraestructura comercial robusta diseñada para la eficiencia operativa y el impacto visual corporativo.',
  },
  {
    icon: 'upgrade',
    title: 'Remodelaciones',
    desc: 'Transformamos espacios existentes integrando modernidad, funcionalidad y eficiencia energética.',
  },
  {
    icon: 'engineering',
    title: 'Gerencia de obra',
    desc: 'Supervisión técnica y administrativa integral para garantizar plazos, costos y calidad estructural.',
  },
]

export function Servicios() {
  return (
    <section className="py-[80px]" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-[48px] border-l-4 pl-[8px]" style={{ borderColor: '#944a00' }}>
          <div>
            <span className="uppercase tracking-widest" style={{
              color: '#944a00',
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Nuestra Experiencia</span>
            <h2 className="text-dark-gray" style={{
              fontFamily: 'Bebas Neue',
              fontSize: '48px',
              lineHeight: '48px',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}>Soluciones constructivas para cada necesidad</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="bg-white p-[48px] border border-[#dde3e7] hover:border-[#944a00] transition-all group flex flex-col h-full"
            >
              <span className="material-symbols-outlined text-5xl mb-[24px]" style={{ color: '#944a00' }}>
                {s.icon}
              </span>
              <h3 className="text-dark-gray mb-[12px]" style={{
                fontFamily: 'Montserrat',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
              }}>{s.title}</h3>
              <p className="flex-grow" style={{
                color: '#564337',
                fontFamily: 'Open Sans',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
                marginBottom: '24px',
              }}>{s.desc}</p>
              <a
                href="#"
                className="uppercase flex items-center gap-2 group-hover:gap-4 transition-all"
                style={{
                  color: '#944a00',
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                  lineHeight: '16px',
                  fontWeight: 600,
                }}
              >
                Saber más <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
