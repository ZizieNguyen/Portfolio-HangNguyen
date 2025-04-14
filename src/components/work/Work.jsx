import "./work.css";
import { Works } from "./Works";

export const Work = () => {
  return (
    <section className='work section' id='work'>
        <h2 className='section__title'>Experiencia Laboral</h2>
        <span className='section__subtitle'>Los trabajos más recientes</span>

        <Works/>
    </section>
  )
}