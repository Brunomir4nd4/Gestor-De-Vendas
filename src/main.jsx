import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import ControleDosClientes from './components/ControleDosClientes/ControleDosClientes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/controledosclientes',
    element: <ControleDosClientes />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
