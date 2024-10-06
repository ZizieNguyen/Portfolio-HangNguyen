import { Backend } from './Backend';
import { Frontend } from './Frontend';
import { Methodology } from './Methodology';
import './skill.css';

export const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Mis Técnicas y Metodologías</span>
        <div className="skills__container container grid">
            <Frontend/>

            <Backend/>

            <Methodology/>
        </div>
    </section>
  )
}