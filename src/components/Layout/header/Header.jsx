import { NavLink } from "react-router-dom";
import './Header.css'
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
export const Header = () => {
    const [toggle, showMenu] = useState(false)
  return (
    <div>
        <header className="header">
            <nav className="nav container">
                <HashLink to={'#home'} className='nav__logo'>Hang Nguyen</HashLink>
                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">                           
                            <HashLink className='nav__link active-link' to={'#home'}>
                                <span className="material-symbols-outlined  nav__icon">Home </span>Inicio
                            </HashLink>
                        </li>
                        <li>
                            <HashLink className='nav__link active-link' to={'#about'}>                               
                                    <span className="material-symbols-outlined nav__icon">person</span>
                                Sobre Mí
                            </HashLink>
                        </li>
                        <li>
                            <NavLink  to='/projects' className='nav__link active-link'>
                                
                                <span className="material-symbols-outlined nav__icon">terminal</span>Proyectos
                            </NavLink>
                        </li>
                        <li>
                            <HashLink className='nav__link active-link' to={'#contact'}>
                                
                                <span className="material-symbols-outlined nav__icon">send</span>Contacto
                            </HashLink>
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