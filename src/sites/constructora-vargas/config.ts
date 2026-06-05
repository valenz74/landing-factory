import { SiteConfig } from '@/lib/sites'

export const config: SiteConfig = {
  slug: 'constructora-vargas',
  name: 'Constructora Vargas',
  seo: {
    title: 'Constructora Vargas | Construimos Confianza',
    description:
      'Constructora con más de 20 años de experiencia en proyectos residenciales, comerciales e industriales. Calidad y compromiso en cada obra.',
    keywords: 'constructora, proyectos, construcción, obras, edificación',
  },
  theme: {
    primary: '#944a00',
    secondary: '#e67e22',
  },
  menu: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footer: {
    company: 'Constructora Vargas S.A.S.',
    address: 'Av. Carrera 45 # 100-24, Bogotá, Colombia',
    phone: '+57 254 684 32 54',
    email: 'contacto@constructoravargas.co',
  },
  pixels: {},
}
