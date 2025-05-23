
import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      <Outlet/>
    </div>
  )
}

export default App
