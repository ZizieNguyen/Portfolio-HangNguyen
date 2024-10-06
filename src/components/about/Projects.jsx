import { Link } from "react-router-dom"


export const Projects = () => {
  return (
    <div className="projects__info">
      <h3>Proyectos</h3> 
      <br />
      <div className="projects__info grid">
        <Link className="project__box" >
            <h4 className="project__title">Portfolio-HangNguyen</h4>
            <span className="project__subtitle">React</span>
        </Link>
        <Link className="project__box" to='https://github.com/ZizieNguyen/ClockYou'>
            <h4 className="project__title">Clock You</h4>
            <span className="project__subtitle">MySQL, Node.js, React, TailwindCSS</span>
        </Link>
        <Link className="project__box" to='https://festivaldemusica-zizie.vercel.app/'>
            <h4 className="project__title">Festival De Música</h4>
            <span className="project__subtitle">HTML, CSS, JavaScript y npm</span>
        </Link>
        <Link className="project__box" to='https://blogdecafe-zie.vercel.app/'>
            <h4 className="project__title">Blog de Café</h4>
            <span className="project__subtitle">HTML, CSS y JavaScript</span>
        </Link>
      </div>
      <Link  to='/projects' className='button'> Más detalle ... 
      </Link>
    </div>
  )
}