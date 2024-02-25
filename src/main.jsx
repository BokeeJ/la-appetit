import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//pages
import Pocetna from './pages/Pocetna.jsx'
import Onama from './pages/Onama.jsx'
import Meni from './pages/Meni.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Galerija from './pages/Galerija.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <div>Error</div>,
  children: [
    {
      path: '/',
      element: <Pocetna />,
    },
    {
      path: '/Onama',
      element: <Onama />
    },
    {
      path: '/meni',
      element: <Meni />,
    },
    {
      path: '/kontakt',
      element: <Kontakt />,
    },
    {
      path: '/galerija',
      element: <Galerija />,
    },
  ],
},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
