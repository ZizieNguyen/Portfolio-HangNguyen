import './project.css'
import { projects } from "../../data/projects.js"
import { Link } from 'react-router-dom'

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
         <h2 className="section__title">Proyectos</h2>
        <span className="section__subtitle">HTML | CSS 🎨 |JAVASCRIPT | SQL📊 | NODE.JS | REACT</span>
        
        <div className="projects__caja container">
            {
                projects.map(project => {
                    const {id, name, tecnologies,url, github} = project;
                    return (
                        <article key={id} className="project__item">
                            <div className="project__mask">
                                <img src={new URL(`../../assets/${id}.png`, import.meta.url).href}  alt={name} />
                            </div>
                            <h4 className="project__titulo">{name}</h4>
                            <span className="project__subtitulo">{tecnologies}</span>
                            <div className='button__container'>
                                {url && (<Link className="proyect__button" to={url} target="_blank">
                                Web &nbsp;<i className="uil uil-external-link-alt"></i>
                                </Link>
                                )}
                                <Link className="proyect__button" to={github} target="_blank">
                                Github  &nbsp;
                                <i className="uil uil-github"></i> 
                                </Link>
                            </div>
                        </article>
                        
                    )
                })

            }
        </div>
    </section>
  )
}