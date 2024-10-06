import { Link } from "react-router-dom"

Link

export const Social = () => {
  return (
    <div className="home__social">
        <Link to='https://www.linkedin.com/in/thanh-hang-nguyen93/?locale=es_ES' className="home__social-icon"  target="_blank">
        <i className="uil uil-linkedin"></i>
        </Link>

        <Link to='https://github.com/ZizieNguyen' className="home__social-icon" target="_blank">
        <i className="uil uil-github"></i>
        </Link>

    </div>
  )
}