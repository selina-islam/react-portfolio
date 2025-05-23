import { createRoot } from 'react-dom/client'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </BrowserRouter>
)
