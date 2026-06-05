import { config } from './config'
import './styles.css'

export default function ConstructoraVargasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Open Sans, sans-serif', color: '#161c20', backgroundColor: '#f4fafe' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full bg-[#f4fafe]/95 backdrop-blur-sm border-b border-[#dcc1b1]" style={{ padding: '8px 64px' }}>
      <div className="flex items-center gap-[8px]">
        <img
          alt="Constructora Vargas"
          className="h-12 w-auto"
          src="/images/constructora-vargas/logo.png"
        />
      </div>
      <nav className="hidden md:flex items-center gap-[48px]">
        {config.menu.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={item.href === '/' ? 'font-bold border-b-2' : 'hover:text-[#944a00] transition-colors'}
            style={{
              borderColor: item.href === '/' ? '#944a00' : undefined,
              color: item.href === '/' ? '#944a00' : '#564337',
              fontFamily: 'Montserrat',
              fontSize: '16px',
              lineHeight: '16px',
              fontWeight: 600,
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-[24px]">
        <div className="hidden lg:flex flex-col items-end">
          <span style={{
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 600,
            color: '#564337',
          }}>
            {config.footer.phone}
          </span>
        </div>
        <button
          className="text-white uppercase shadow-tonal active:scale-95 duration-150"
          style={{
            backgroundColor: '#e67e22',
            padding: '12px 24px',
            borderRadius: '4px',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: 600,
          }}
        >
          Cotiza tu proyecto
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1200px] mx-auto" style={{ padding: '48px 64px' }}>
        <div className="mb-[48px] md:mb-0 max-w-sm">
          <img
            alt="Constructora Vargas"
            className="h-12 w-auto mb-[24px] brightness-0 invert"
            src="/images/constructora-vargas/logo.png"
          />
          <p className="italic opacity-80" style={{
            fontFamily: 'Open Sans',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            color: '#d1e4fb',
          }}>
            &ldquo;Construimos confianza ladrillo a ladrillo.&rdquo;
          </p>
          <div className="flex gap-[24px] mt-[24px]">
            <a href="#" className="hover:text-[#944a00] transition-colors">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a href="#" className="hover:text-[#944a00] transition-colors">
              <span className="material-symbols-outlined">retweet</span>
            </a>
            <a href="#" className="hover:text-[#944a00] transition-colors">
              <span className="material-symbols-outlined">link</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[48px]">
          <div>
            <h4 className="uppercase mb-[24px] text-white" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Compañía</h4>
            <nav className="flex flex-col gap-2">
              {['Inicio', 'Sobre nosotros', 'Servicios'].map((l) => (
                <a key={l} href="#" className="text-[#d1e4fb] hover:text-[#944a00] transition-colors" style={{
                  fontFamily: 'Open Sans',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 400,
                }}>{l}</a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="uppercase mb-[24px] text-white" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Legal</h4>
            <nav className="flex flex-col gap-2">
              {['Políticas de Privacidad', 'Términos de Servicio'].map((l) => (
                <a key={l} href="#" className="text-[#d1e4fb] hover:text-[#944a00] transition-colors" style={{
                  fontFamily: 'Open Sans',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 400,
                }}>{l}</a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="uppercase mb-[24px] text-white" style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: 600,
            }}>Certificaciones</h4>
            <div className="flex flex-col gap-2 opacity-60">
              <span className="text-xs font-bold border border-white/40 px-2 py-1 inline-block">CAMACOL AFILIADO</span>
              <span className="text-xs font-bold border border-white/40 px-2 py-1 inline-block">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-[#d1e4fb]" style={{ padding: '8px 64px' }}>
        &copy; 2024 Constructora Vargas. Todos los derechos reservados.
      </div>
    </footer>
  )
}
