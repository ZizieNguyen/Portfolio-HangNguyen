import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skill } from './components/skills/Skill';
import { Education } from './components/education/Education';

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
          <Skill/>
          <Education/>

        </Layout>
      </BrowserRouter>        
    </>
  )
}

export default App
