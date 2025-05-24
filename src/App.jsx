
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Home from '../src/pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={ <Projects/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
