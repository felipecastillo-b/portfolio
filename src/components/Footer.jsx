import { ButtonPrimary } from './Button';

const sitemap = [
    {
        label: 'Inicio',
        href: '#home'
    },
    {
        label: 'Acerca',
        href: '#about'
    },
    {
        label: 'Proyectos',
        href: '#work'
    },
    {
        label: 'Reseñas',
        href: '#reviews'
    },
    {
        label: 'Contacto',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/felipecastillo-b'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/felipe-castillo-barraza'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/hardcode_dev'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/hardcode.developer'
    },
    {
        label: 'HardCode',
        href: '#home'
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">Empezemos a Trabajar!</h2>
                        <ButtonPrimary href="mailto:hardcode.contacto@gmail.com" label="Empezar Proyecto" icon="chevron_right" classes="reveal-up" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">
                                Secciones
                            </p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2 reveal-up">
                                Redes Sociales
                            </p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} target='_blank' className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img src="/images/logo.jpg" width={40} height={40} alt="Logo"/>
                    </a>
                    <p className="text-zinc-500 text-sm px-2 reveal-up">
                        &copy; 2025 <span className="text-zinc-200">HardCode | Felipe Castillo</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer