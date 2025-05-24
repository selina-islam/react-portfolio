
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
     <Navbar/>
      <Outlet />
    </div>
  )
}

export default App
