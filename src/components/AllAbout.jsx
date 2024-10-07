import { Home } from './home/Home';
import { About } from './about/About';
import { Skill } from './skills/Skill';
import { Education } from './education/Education';
import { ScrollUp } from './scrollUp/ScrollUp';


export const AllAbout = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Skill/>
        <Education/>
        <ScrollUp/>
    </div>
  )
}