import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
