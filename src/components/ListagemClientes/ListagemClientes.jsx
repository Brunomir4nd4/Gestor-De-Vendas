import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './ListagemClientes.css'
import { Link } from 'react-router-dom'

export default function ListagemClientes() {
    
    const [clientes, setClientes] = useState([]);
    const CHAVE_CLIENTES = 'clientes';

    useEffect(() => {
        if (localStorage.getItem(CHAVE_CLIENTES)) {
            setClientes(JSON.parse(localStorage.getItem(CHAVE_CLIENTES)));
        }
    }, []);

    function apresentaClientes(cliente, index) {
        return (
            <Link to={`../detalhes/${cliente.nome}`} className='Link-com-nome'>{cliente.nome}</Link>
        )
    }

  return (
    <>
        <NavBar />
        <div id="apresentacliente">
            {clientes.map((cliente, index) => apresentaClientes(cliente, index))}
        </div>
        <Footer />
    </>
  ) 
}
