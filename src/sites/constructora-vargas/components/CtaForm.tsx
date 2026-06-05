'use client'

export function CtaForm() {
  return (
    <section className="py-[80px]" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
      <div className="max-w-[900px] mx-auto bg-white border-l-[12px] shadow-xl" style={{
        borderColor: '#944a00',
        padding: '48px',
      }}>
        <h2 className="uppercase text-dark-gray mb-[12px]" style={{
          fontFamily: 'Bebas Neue',
          fontSize: '48px',
          lineHeight: '48px',
          letterSpacing: '0.02em',
          fontWeight: 400,
        }}>¿Tienes un proyecto en mente?</h2>
        <p className="mb-[48px]" style={{
          color: '#564337',
          fontFamily: 'Open Sans',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 400,
        }}>
          Solicita una cotización profesional sin compromiso. Nuestro equipo técnico te contactará en menos de 24 horas.
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"
          onSubmit={(e) => {
            e.preventDefault()
            alert('¡Gracias por contactarnos! Un asesor se comunicará contigo pronto.')
          }}
        >
          <div className="flex flex-col gap-1">
            <label className="text-dark-gray" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Nombre completo</label>
            <input className="border-[#dde3e7] p-3" placeholder="Ej: Juan Pérez" type="text" style={{ border: '1px solid #dde3e7', borderRadius: '4px' }} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-dark-gray" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Teléfono</label>
            <input className="border-[#dde3e7] p-3" placeholder="+57 300 000 00 00" type="tel" style={{ border: '1px solid #dde3e7', borderRadius: '4px' }} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-dark-gray" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Tipo de proyecto</label>
            <select className="border-[#dde3e7] p-3" style={{ border: '1px solid #dde3e7', borderRadius: '4px' }}>
              <option>Vivienda nueva</option>
              <option>Local comercial</option>
              <option>Remodelación</option>
              <option>Consultoría</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-dark-gray" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>M2 Estimados</label>
            <input className="border-[#dde3e7] p-3" placeholder="Ej: 120" type="number" style={{ border: '1px solid #dde3e7', borderRadius: '4px' }} />
          </div>
          <div className="md:col-span-2">
            <button
              className="w-full text-white uppercase flex items-center justify-center gap-2"
              type="submit"
              style={{
                backgroundColor: '#2C3E50',
                padding: '16px',
                borderRadius: '4px',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              Cotizar ahora <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
