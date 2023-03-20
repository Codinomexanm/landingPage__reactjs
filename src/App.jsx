import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navlink/Navbar'
import Footer from './components/Footer/Footer'

function App() {
return (
    <div className="App">
      <div className='navs'>
      <Navbar/>
      </div>
      <Outlet/>
      <div className='foo'>
      <Footer/>
      </div>
    </div>
  )
}

export default App
