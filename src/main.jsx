import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//pages
import Pocetna from './pages/Pocetna.jsx'
import Onama from './pages/Onama.jsx'
import Meni from './pages/Meni.jsx'
import Proslave from './pages/Proslave.jsx'
import Galerija from './pages/Galerija.jsx'
import Desert from './pages/Desert.jsx'
import Dorucak from './pages/Dorucak.jsx'

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
      path: '/proslave',
      element: <Proslave />,
    },
    {
      path: '/galerija',
      element: <Galerija />,
    },
    {
      path: '/desert',
      element: <Desert />,
    },
    {
      path: '/dorucak',
      element: <Dorucak />,
    }
  ]
}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
