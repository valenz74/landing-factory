export function Presence() {
  return (
    <section className="bg-dark-gray text-white py-[80px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center" style={{ padding: '0 64px' }}>
        <div>
          <h2 className="uppercase mb-[24px]" style={{
            fontFamily: 'Bebas Neue',
            fontSize: '48px',
            lineHeight: '48px',
            letterSpacing: '0.02em',
            fontWeight: 400,
          }}>Presencia Nacional</h2>
          <p className="opacity-80 mb-[48px]" style={{
            fontFamily: 'Open Sans',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 400,
          }}>
            Operamos en los principales centros urbanos de Colombia, llevando infraestructura de alto nivel a cada región.
          </p>
          <div className="space-y-[24px] mb-[48px]">
            <div className="flex items-center gap-[24px]">
              <span className="material-symbols-outlined" style={{ color: '#e67e22' }}>location_on</span>
              <span style={{
                fontFamily: 'Open Sans',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
              }}>Sede Principal: Av. Carrera 45 # 100-24, Bogotá.</span>
            </div>
            <div className="flex flex-wrap gap-[8px]">
              {['Bogotá', 'Medellín', 'Cali', 'Barranquilla'].map((city) => (
                <span key={city} className="px-3 py-1 text-sm border border-white/20" style={{ backgroundColor: 'rgba(222, 227, 231, 0.2)' }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
          <button className="text-white uppercase shadow-tonal" style={{
            backgroundColor: '#e67e22',
            padding: '16px 48px',
            borderRadius: '4px',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: 600,
          }}>
            Agendar una cita en obra
          </button>
        </div>
        <div className="h-[400px] border-4 border-white/10 relative">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSkMY5xxDflhn4lonnMDQZOadc_ukXfmmxtchsAcPUlqMmHTt2ImEScg2JiZ6oJkYxRLpiF9PoZhQgxqQuCTRIB2CrlcfAOS-CM95nzEVzIq9RcqbjNErl6Vbuup6k56Su7MD8Y6R1qzsc62LbheBsq381aZpeZEchCFE9XLq7NXCcSUyTEWISrBVnfYnvES9Sak8xod_J0fvUua85Uc4fMtK8u80T4jrsqcoXH0Aw5brMcIA2z2cwDxEnMe2Jrih1lw1GRBuN_1g')",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-[#e67e22] rounded-full animate-ping absolute" />
            <div className="w-8 h-8 bg-[#e67e22] rounded-full border-4 border-white relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
