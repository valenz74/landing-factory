const steps = [
  { num: '01', title: 'Reunión inicial', desc: 'Definimos tus necesidades, presupuesto y visión del proyecto.' },
  { num: '02', title: 'Diseño y presupuesto', desc: 'Elaboramos planos técnicos y una propuesta económica detallada.' },
  { num: '03', title: 'Construcción', desc: 'Ejecutamos la obra con supervisión técnica diaria y reportes.' },
  { num: '04', title: 'Entrega y postventa', desc: 'Entrega formal de llaves y acompañamiento de garantía.' },
]

export function Process() {
  return (
    <section className="py-[80px] overflow-hidden" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="uppercase text-dark-gray text-center mb-[80px]" style={{
          fontFamily: 'Bebas Neue',
          fontSize: '48px',
          lineHeight: '48px',
          letterSpacing: '0.02em',
          fontWeight: 400,
        }}>Nuestro Proceso</h2>
        <div className="relative flex flex-col md:flex-row justify-between gap-[24px]">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-cement -translate-y-1/2 hidden md:block" />
          {steps.map((s) => (
            <div key={s.num} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-4 flex items-center justify-center mb-[24px] group-hover:bg-[#944a00] group-hover:text-white transition-all" style={{
                borderColor: '#944a00',
                color: '#944a00',
                fontFamily: 'Montserrat',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
              }}>
                {s.num}
              </div>
              <h4 className="uppercase mb-[8px] text-dark-gray" style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
              }}>{s.title}</h4>
              <p className="max-w-[200px]" style={{
                color: '#564337',
                fontFamily: 'Open Sans',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
