import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js"


export const Projects = () => {
  return (
    <div className="projects__info">
      <h3>Proyectos</h3> 
      <br />
      <div className="projects__info grid">
        {
          projects.slice(0, 4).map(project => {
            const { id,name, tecnologies,url, github} = project;
            const projectUrl = url || github;
            return (
              <>
                <Link className="project__box" to={projectUrl} target="_blank" key={id}>
                    <h4 className="project__title">{name}</h4>
                    <span className="project__subtitle">{tecnologies}</span>
                </Link>
              </>
            )
          })
        }
      </div>
      <Link  to='/projects' className='button'> Más detalle ... 
      </Link>
    </div>
  )
}