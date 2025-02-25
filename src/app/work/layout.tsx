import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: 'Luis Pomar: Porfolio | Luiso Pomar',
  description: 'Bienvenido al portafolio de Luis Pomar, diseñador gráfico, desarrollador web y programador. Explora mis proyectos en diseño UI/UX, branding, desarrollo front-end y back-end con tecnologías como React y Next.js.',
  keywords: [
    'Luiso Pomar',
    'Luis Pomar',
    'Wyno.p',
    'Wyno',
    'diseñador gráfico',
    'desarrollador web',
    'programador',
    'UI/UX',
    'branding',
    'front-end',
    'back-end',
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'freelancer diseño',
    'portafolio desarrollo web',
    'proyectos de programación',
    'diseño web moderno',
    'experto en tecnología',
    'creación de sitios web',
    'desarrollo de aplicaciones',
    'SEO y optimización web'
  ],
  icons: {
    icon: 'https://res.cloudinary.com/drskdhhht/image/upload/v1717415711/web-folio/icono_2_vynrfn.png',
  },

  applicationName: 'Luiso Pomar | Portfolio',
  authors: [{ name: 'Luis Pomar', url: 'https://www.w-studio.es/' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Luis Pomar | Porfolio | Luiso Pomar',
    description: 'Bienvenido al portafolio de Luis Pomar, diseñador gráfico, desarrollador web y programador. Explora mis proyectos en diseño UI/UX, branding, desarrollo front-end y back-end con tecnologías como React y Next.js.',
    url: 'https://www.w-studio.es/',
    siteName: 'Luiso Pomar',
    images: [
      {
        url: 'https://res.cloudinary.com/drskdhhht/image/upload/v1740416728/webfolio-preview_rdhzms.png',
        width: 1200,
        height: 630,
        alt: 'Luiso Pomar | Portfolio',
        type: 'image/png'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="master">
        {children}
        <Footer />
      </div>
    </>
  );
}
