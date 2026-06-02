import { SiteConfig } from '@/lib/sites'

export const config: SiteConfig = {
  slug: 'constructora-vargas',
  name: 'Constructora Vargas',
  seo: {
    title: 'Constructora Vargas - Proyectos de Construcción',
    description:
      'Constructora con más de 20 años de experiencia en proyectos residenciales, comerciales e industriales. Calidad y compromiso en cada obra.',
    keywords: 'constructora, proyectos, construcción, obras, edificación',
  },
  theme: {
    primary: '#1e3a5f',
    secondary: '#f59e0b',
  },
  menu: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footer: {
    company: 'Constructora Vargas S.A.',
    address: 'Av. Los Constructores 1234, Santiago, Chile',
    phone: '+56 2 2345 6789',
    email: 'contacto@constructoravargas.cl',
  },
  pixels: {
    // meta: '123456789012345',
    // ga: 'G-XXXXXXXXXX',
    // tiktok: 'XXXXXXX',
    // linkedin: 'XXXXXXX',
    // clarity: 'XXXXXXX',
    // gads: 'AW-XXXXXXXXXX',
  },
}
