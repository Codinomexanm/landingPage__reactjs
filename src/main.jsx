import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Home from './routes/Home'
import Contact from './routes/Contact'
import ContactDetails from './routes/ContactDetails'
import About from './routes/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navlink/Navbar'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}>
          <Route path=':id' element={<ContactDetails />} />
        </Route>
        <Route path='/contact/:id' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
