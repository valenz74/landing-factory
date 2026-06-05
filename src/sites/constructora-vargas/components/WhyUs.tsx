const reasons = [
  {
    icon: 'check_circle',
    title: '500+ obras terminadas',
    desc: 'Experiencia comprobable en proyectos de toda escala y complejidad.',
  },
  {
    icon: 'groups',
    title: 'Ingenieros expertos',
    desc: 'Equipo multidisciplinario certificado y en constante actualización.',
  },
  {
    icon: 'security',
    title: 'Normas de seguridad',
    desc: 'Cumplimiento estricto de NSR-10 y protocolos de seguridad industrial.',
  },
  {
    icon: 'eco',
    title: 'Materiales sostenibles',
    desc: 'Uso eficiente de recursos y proveedores con sellos ambientales.',
  },
  {
    icon: 'gavel',
    title: 'Acompañamiento legal',
    desc: 'Gestión de licencias, permisos y trámites notariales sin complicaciones.',
  },
]

export function WhyUs() {
  return (
    <section className="py-[80px]" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="asymmetric-grid items-center">
          <div className="order-2 md:order-1">
            <span className="uppercase tracking-widest" style={{
              color: '#944a00',
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Nuestra Promesa</span>
            <h2 className="text-dark-gray mb-[48px]" style={{
              fontFamily: 'Bebas Neue',
              fontSize: '48px',
              lineHeight: '48px',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}>Construimos con integridad y pasión</h2>
            <ul className="space-y-[24px]">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-[24px] items-start">
                  <span className="material-symbols-outlined p-2 rounded" style={{
                    color: '#944a00',
                    backgroundColor: '#ffdcc5',
                    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  }}>
                    {r.icon}
                  </span>
                  <div>
                    <h4 className="text-dark-gray" style={{
                      fontFamily: 'Montserrat',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: 600,
                    }}>{r.title}</h4>
                    <p style={{
                      color: '#564337',
                      fontFamily: 'Open Sans',
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: 400,
                    }}>{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 h-full min-h-[500px] relative">
            <img
              alt="Nuestro Equipo"
              className="w-full h-full object-cover rounded-lg shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF5ijpLYoGOliE7LlJjHzP2d_Ea4BckRfl21jHXk2zx9S5QROhvJDeir88YErftXtU_BXd5GN1XaGv4OjSau9Pd5LXpkkaR556pky95YoXaJ1vXWZj-29AGHXsoz016nfsSicAu6h2yN9vfuMEsJUS0DHD1Gkjh4ZnCPBS5Q-GjbmBHly7jpyUDD7f71rEVsJup55tu7UeM1sdjLqFZa_oZLB7qnp2ytm7dYc9BEmXio-R37EAdVjmt1qFEkYOPcuePdzkfzoewWE"
            />
            <div className="absolute -bottom-6 -left-6 text-white border-4 border-white hidden lg:block" style={{
              backgroundColor: '#e67e22',
              padding: '24px',
            }}>
              <p style={{
                fontFamily: 'Bebas Neue',
                fontSize: '72px',
                lineHeight: '72px',
                letterSpacing: '0.02em',
                fontWeight: 400,
              }}>100%</p>
              <p className="uppercase" style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
              }}>Calidad Certificada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
