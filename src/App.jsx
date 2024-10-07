import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Contact } from './components/contact/Contact';
import { Projects } from './components/projects/Projects';
import { AllAbout } from './components/allAbout';
import { PageNotFound } from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>       
          
          <main className="main">
            <Routes>
              <Route path='/' element={<AllAbout />} />
              <Route path='/allAbout' element={<AllAbout />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </main>

        </Layout>
      </BrowserRouter>        
    </>
  )
}

export default App
