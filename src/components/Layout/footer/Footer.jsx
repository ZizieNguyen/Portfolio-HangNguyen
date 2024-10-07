import { HashLink } from 'react-router-hash-link'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer__container'>
          <h1 className='footer__title'>Hang Nguyen</h1> 

          <ul className='footer__list'>
            <li>
                <HashLink className='footer__link' to={'/allAbout'}>                               
                  <span className="material-symbols-outlined nav__icon">person</span>
                    Sobre Mí
                </HashLink>
            </li>
            <li>
                <NavLink  to='/projects' className='footer__link'>
                    
                    <span className="material-symbols-outlined nav__icon">terminal</span>Proyectos
                </NavLink>
            </li>
            <li>
                <NavLink className='footer__link' to={'/contact'}>
                    
                    <span className="material-symbols-outlined nav__icon">send</span>Contacto
                </NavLink>
            </li>
          </ul>

          <div className='footer__social'>
              <Link to='https://www.linkedin.com/in/thanh-hang-nguyen93/?locale=es_ES' className="footer__social-link"  target="_blank">
            <i className="bx bxl-linkedin"></i>
            </Link>

            <Link to='https://github.com/ZizieNguyen' className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
            </Link>
          </div>

          <span className='footer__copy'>&copy; Thanh Hang Nguyen - Portafolio 2024</span>
        </div>
    </footer>
  )
}