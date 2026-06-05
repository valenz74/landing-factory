export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBz794Sar_sduF73dHjnG6Uhzd2W00b-1L8ZXF1SZz9zaNRr8qb-IUtNMx20fuLzStl8g3h6hw-f9yvLrBzsTG6QZeVFj3_gkTLAcBqijQolmxtAIoCrDHgx45QD4mDpt6moLio-FFxR2ri6e-zUIkKp9MUpvUJTZadTphX_KQl0B8JGgSZHP_b8WAqg4XsA8Z7HWTFXRHzI5lLOVMzoyBrJ9jrxaqdXZv0BvSDKY361wUDySb4wWDWic7fSQSrOniYNExdmmOfOl0')",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 max-w-[1200px] w-full text-center text-white" style={{ padding: '0 64px' }}>
        <h1
          className="uppercase leading-none drop-shadow-md"
          style={{
            fontFamily: 'Bebas Neue',
            fontSize: '72px',
            lineHeight: '72px',
            letterSpacing: '0.02em',
            fontWeight: 400,
            marginBottom: '24px',
          }}
        >
          Construimos el hogar de tus sueños y los proyectos que transforman ciudades
        </h1>
        <p
          className="max-w-2xl mx-auto opacity-90"
          style={{
            fontFamily: 'Open Sans',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 400,
            marginBottom: '48px',
          }}
        >
          Con más de 20 años de experiencia, lideramos el sector con solidez, precisión técnica y un compromiso inquebrantable con la calidad constructiva.
        </p>
        <div className="flex flex-wrap justify-center gap-[24px]" style={{ marginBottom: '80px' }}>
          <button
            className="text-white uppercase shadow-tonal"
            style={{
              backgroundColor: '#e67e22',
              padding: '16px 48px',
              borderRadius: '4px',
              fontFamily: 'Montserrat',
              fontSize: '16px',
              lineHeight: '16px',
              fontWeight: 600,
            }}
          >
            Cotiza gratis
          </button>
          <button
            className="text-white uppercase border border-white/20"
            style={{
              backgroundColor: '#2C3E50',
              padding: '16px 48px',
              borderRadius: '4px',
              fontFamily: 'Montserrat',
              fontSize: '16px',
              lineHeight: '16px',
              fontWeight: 600,
            }}
          >
            Ver proyectos
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] border-t border-white/20 max-w-4xl mx-auto" style={{ paddingTop: '48px' }}>
          <div className="flex flex-col items-center">
            <span style={{
              fontFamily: 'Bebas Neue',
              fontSize: '48px',
              lineHeight: '48px',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}>20+ años</span>
            <span className="uppercase opacity-80" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>De Trayectoria</span>
          </div>
          <div className="flex flex-col items-center">
            <span style={{
              fontFamily: 'Bebas Neue',
              fontSize: '48px',
              lineHeight: '48px',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}>+500</span>
            <span className="uppercase opacity-80" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Viviendas Entregadas</span>
          </div>
          <div className="flex flex-col items-center">
            <span style={{
              fontFamily: 'Bebas Neue',
              fontSize: '48px',
              lineHeight: '48px',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}>10 Años</span>
            <span className="uppercase opacity-80" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>De Garantía</span>
          </div>
        </div>
      </div>
    </section>
  )
}
