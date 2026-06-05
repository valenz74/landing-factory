export function Proyectos() {
  return (
    <section className="bg-dark-gray py-[80px]">
      <div className="max-w-[1200px] mx-auto text-white" style={{ padding: '0 64px' }}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-[48px]">
          <h2 className="uppercase mb-[24px] md:mb-0" style={{
            fontFamily: 'Bebas Neue',
            fontSize: '48px',
            lineHeight: '48px',
            letterSpacing: '0.02em',
            fontWeight: 400,
          }}>Proyectos destacados</h2>
          <button className="border border-white/30 px-[48px] py-3 hover:bg-white hover:text-dark-gray transition-all uppercase" style={{
            fontFamily: 'Montserrat',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: 600,
          }}>
            Ver todos los proyectos
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
          <ProjectCard
            colSpan="md:col-span-8"
            title="Altos del Sol - Bogotá"
            subtitle="Residencial Premium | Finalizado"
            height="400px"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSG5hBUmjcjjWC5FLl-dTDj3FcWFZA5M0PUGAZe_6zo58pmZU8j0PMA5e5Oa5i21Y1zaAmjMuOfdlqYLRXCH116MTNsdpT7SoHas0j5NNbamQqm2pJvUdFpxHLneJ3pIUoLoupX-bB4tByXNlBh88R3lVvY7W2td6sZqEYGy7NgfHFArzpNQfuWNSU8daqfKGOGZWLFCOozrETgAmEF-fzm73qd_TG4seYSqlTzMmLvuRrWoJET9C95qjgMu6O752F_k2pQtULeI"
          />
          <ProjectCard
            colSpan="md:col-span-4"
            title="Plaza Mayor - Medellín"
            subtitle="Comercial | En Desarrollo"
            height="400px"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAslcZIyZrXLb9u4aclqsrm1oy2P_xHZ-hng_vQt3RGUwJOBGCttklbhvwXiA5BTWgs3xoPdbw5i28pOjVa969H12pcnrraGGDmOxUGkJr12UJKGs0VFrdm8ozyVjUhdTjyk1fNlXeL7ymxF4QqymCtgRgc-RtcRttda0Jf3CHx_ntr1olz6Qsc-vd-LTvknFr614FLLzjZvvxnTjQjfxzahVGVigDBG-by9jNOtPfZhT5SciDXuDXf8J3ZlqPVtSd8dcaBFyz9ihQ"
          />
          <ProjectCard
            colSpan="md:col-span-12"
            title="Villa El Bosque - Cali"
            subtitle="Residencial de Lujo | Finalizado"
            height="300px"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWurIAwORLwxWJ1Ni0qf6oGrETbzfa3Cd2N0SXx5CvEK5JW_mt83bDJOXw1-MLsbRHXUGPxket9rBv4iVzBZ0OGOfRpFWROfdbTz-6oQg8HZoG0uz0YEFEK2-j3hmLDdI-PMt1gKz8iq4npryUfx2BPf9LZYzvzbYLVA2GaAMl84rr7tHtj5ntBTv8qZ9Hrai6tcWkKddO7j4PITyg-xTVBAJMDFrf4HjeJ2ocXoDVb97o4jtkGaZ3GWgWfCiP17G9iNGl0U-U1xg"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  colSpan,
  title,
  subtitle,
  height,
  src,
}: {
  colSpan: string
  title: string
  subtitle: string
  height: string
  src: string
}) {
  return (
    <div className={`${colSpan} group relative overflow-hidden`} style={{ height }}>
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={src}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-dark-gray/90 transform translate-y-2 group-hover:translate-y-0 transition-all border-l-4" style={{ borderColor: '#944a00', padding: '24px' }}>
        <h4 style={{
          fontFamily: 'Montserrat',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 700,
        }}>{title}</h4>
        <p className="uppercase opacity-80" style={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 600,
        }}>{subtitle}</p>
      </div>
    </div>
  )
}
