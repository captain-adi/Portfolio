import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ContactForm from './Components/ContactForm.jsx'
import Project from './Components/Project.jsx'
import Home from './Components/Home.jsx'
import Skills from './Components/Skills.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter([
{
  element:<App/>,
  path:"/",
  children:[
  
    {
      path:"",
      element:<Home/>
    },
    {
      path:"/contact",
      element: <ContactForm/>
    },

    {
      path:"/projects",
      element:<Project/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/skills",
      element:<Skills/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
