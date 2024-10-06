import'./about.css';
import ProfileImg from '../../assets/profile.jpg'
import CV from '../../assets/CV-ThanhHangNguyen.pdf'
import { Projects } from './Projects';


export const About = () => {
  return (
    <section className='about section'id='about'>
        <h2 className="section__title">Sobre Mí</h2>
        <span className="section__subtitle">Un poco de mí...</span>

        <div className="about__container container grid">
            <img src={ProfileImg} alt="foto de perfil" className='about__img'/>
            <div className='about__data'>

                <h3>HTML | CSS 🎨 |JAVASCRIPT | SQL📊 | NODE.JS | REACT</h3>
                <p className='about__description'>Tras completar un intensivo Bootcamp en desarrollo web fullstack en HACK A BOSS, he seguido perfeccionando mis habilidades, aplicando lo aprendido en proyectos reales.</p>

                <a download='' href={CV} className='button'> Mi Currículum 
                    <i className="uil uil-import"></i>
                </a>
                <Projects/>

            </div>
        </div>
    </section>
  )
}