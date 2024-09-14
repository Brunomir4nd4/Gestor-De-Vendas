import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Detalhes from './components/Detalhes/Detalhes'
import ListagemClientes from './components/ListagemClientes/ListagemClientes'
import ListagemVendas from './components/ListagemVendas/ListagemVendas'
import NoteFoudPage from './components/NotFoudPage/NoteFoudPage'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/listagemVendas', element: <ListagemVendas /> },
  { path: '/listagemClientes', element: <ListagemClientes /> }, 
  { path: '/detalhes/:profileName', element: <Detalhes /> },
  { path: '*', element: <NoteFoudPage /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
