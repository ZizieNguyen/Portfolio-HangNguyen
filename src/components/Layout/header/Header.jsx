import { NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Logotipo from '../../../assets/Logotipo.png'
export const Header = () => {
    const [toggle, showMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => {
        showMenu(false);
        window.scrollTo(0, 0);
    }

  return (
    <div>
        <header className="header">
            <nav className="nav container">
                <NavLink to={'/'} className='nav__logo' onClick={closeMenu}>
                <img 
               className="logo__img" src={Logotipo} alt="logotipo" />
                </NavLink>
                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li>
                            <HashLink className='nav__link active-link' to={'/allAbout'} onClick={closeMenu}>                               
                                    <span className="material-symbols-outlined nav__icon">person</span>
                                Sobre Mí
                            </HashLink>
                        </li>
                        <li>
                            <NavLink  to='/projects' className='nav__link active-link' onClick={closeMenu}>
                                
                                <span className="material-symbols-outlined nav__icon">terminal</span>Proyectos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav__link active-link' to={'/contact'} onClick={closeMenu}>
                                
                                <span className="material-symbols-outlined nav__icon">send</span>Contacto
                            </NavLink>
                        </li>
                    </ul>

                    <span className="material-symbols-outlined nav__close" onClick={() => showMenu(!toggle)}>close</span>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <span className="material-symbols-outlined">grid_view</span>
                </div>
            </nav>
        </header>
    </div>
  )
}