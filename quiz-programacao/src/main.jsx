import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider, Router} from 'react-router-dom'
import Home from './routes/Home.jsx'
import Categoria from './routes/Categoria.jsx'
import HtmlForm from './routes/HtmlForm.jsx'
import CssForm from './routes/CssForm.jsx'
import JavascriptForm from './routes/JavscriptForm.jsx'
let router  = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: 'categoria',
    element: <Categoria/>
  },
  {
    path: 'htmlform',
    element: <HtmlForm/>
  },
  {
    path: 'cssform',
    element: <CssForm/>
  },
  {
    path: 'javascriptform',
    element: <JavascriptForm/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
