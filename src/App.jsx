import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skill } from './components/skills/Skill';
import { Education } from './components/education/Education';
import { Contact } from './components/contact/Contact';
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>       
          {/* <Routes>
            <Route path='/' element={<Home />}/>
          </Routes> */}
          <Home/>
          <About/>
          <Routes>
            <Route path='/proyectos' element={<Projects/>}/>
          </Routes>
          <Skill/>
          <Education/>
          <Contact/>

        </Layout>
      </BrowserRouter>        
    </>
  )
}

export default App
