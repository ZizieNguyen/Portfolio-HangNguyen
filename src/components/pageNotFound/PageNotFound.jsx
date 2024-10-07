import { Link } from "react-router-dom"
import './pageNotFound.css'


export const PageNotFound = () => {
  return (
    <div className="pageNotFound">
        <h2 className="section__title">No se encuentra la ruta - Error 404</h2>
        <Link to={'/'}>Vuelve a la página principal</Link>
    </div>
  )
}