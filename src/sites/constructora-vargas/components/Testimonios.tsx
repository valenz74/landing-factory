const testimonios = [
  {
    name: 'Laura Martínez',
    role: 'Propietaria, Bogotá',
    text: '"Excelente cumplimiento de plazos. Mi casa quedó exactamente como la soñé, con acabados de primera calidad."',
  },
  {
    name: 'Carlos Pérez',
    role: 'Director de Proyectos, Medellín',
    text: '"Profesionalismo puro. La gerencia del proyecto comercial fue impecable, ahorrando costos sin sacrificar calidad."',
  },
  {
    name: 'Ana Gómez',
    role: 'Empresaria, Cali',
    text: '"Recomiendo a Vargas por su transparencia en el manejo del presupuesto y su acompañamiento constante."',
  },
]

export function Testimonios() {
  return (
    <section className="bg-cement py-[80px]">
      <div className="max-w-[1200px] mx-auto text-center" style={{ padding: '0 64px' }}>
        <h2 className="uppercase text-dark-gray mb-[80px]" style={{
          fontFamily: 'Bebas Neue',
          fontSize: '48px',
          lineHeight: '48px',
          letterSpacing: '0.02em',
          fontWeight: 400,
        }}>Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {testimonios.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#dde3e7] relative"
              style={{ padding: '48px', paddingTop: '64px' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#ffdcc5' }}>
                <span className="material-symbols-outlined text-4xl" style={{ color: '#944a00' }}>person</span>
              </div>
              <p className="italic mb-[24px]" style={{
                color: '#564337',
                fontFamily: 'Open Sans',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
              }}>{t.text}</p>
              <h4 className="text-dark-gray text-lg" style={{
                fontFamily: 'Montserrat',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
              }}>{t.name}</h4>
              <span style={{ color: '#e67e22', fontSize: '14px' }}>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
