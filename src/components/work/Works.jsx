import { worksData } from "../../data/works.js";
import { WorkItems } from "./WorkItems";

export const Works = () => {
  return (
    <div className="work__container container grid">
        {worksData.map((item) => {
            return <WorkItems key={item.id} item={item}/>
                       
            })}
    </div>
  )
}