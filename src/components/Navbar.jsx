import { useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();


    const navItems = [
        {
            label: 'Inicio',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'Acerca',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Proyectos',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reseñas',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contacto',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a href={link} key={key} ref={ref} className={className} onClick={null}>
                        {label}
                    </a>
                ))
            }
            <div className="active-box" ref={activeBox}>

            </div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar
