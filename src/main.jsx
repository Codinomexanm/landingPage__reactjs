import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
import ContactDetails from './routes/ContactDetails'
import About from './routes/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
       {
        path: "/contact",
        element: <Contact/>
      },
      //dinamic Routes
      {
        path:"/contact/:id",
        element: <ContactDetails/>
      },
      {
       path: "/about",
       element: <About/>
     }
    ]
  }
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
