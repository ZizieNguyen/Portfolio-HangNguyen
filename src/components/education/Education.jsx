import './education.css'
export const Education = () => {
  return (
    <section className="education section" id='education'>
        <h2 className="section__title">Educación</h2>
        <span className="section__subtitle">Mis Datos Académicos</span>
            <div className='.education__container'>
                <div className="education__item">
                    <h3 className="qualification__title">Bootcamp en Desarrollo Web</h3>
                    <span className="qualification__subtitle">HACK A BOSS</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>Marzo 2024 - Julio 2024
                    </div>
                </div>
                <div className="education__item">
                    <h3 className="qualification__title">Administración y Dirección de Empresas</h3>
                    <span className="qualification__subtitle">Universidad de A Coruña</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2017 - 2023
                    </div>
                </div>
            </div>
    </section>
  )
}