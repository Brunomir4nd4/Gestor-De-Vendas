import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './controleDosClientes.css';
import { DataEhIgual } from '../../funcoes/DataEhIgual';

export default function ControleDosClientes() {
  const CHAVE_CLIENTES = 'clientes';
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const storedClientes = localStorage.getItem(CHAVE_CLIENTES);
    if (storedClientes) {
      setClientes(JSON.parse(storedClientes));
    }
  }, []);

  function AbreFechaDiv(id) {
    const conteudo = document.getElementsByClassName('conteudo');
    conteudo[id].classList.toggle("hide");
  }

  function renderCliente(cliente, index) {
    return (
      <>
        {index == 0 ? (
          <>
            <h3 className='data' onClick={() => AbreFechaDiv(clientes[0].id)}>Data: {clientes[0].data}</h3>
            <div className="thead row">
                <p className='cell' id='teste'>Nome</p>
                <p className='cell'>Litros</p>
                <p className='cell'>Valor Total</p>
            </div>
            <div className="row">
              <p className='cell'>{cliente.nome}</p>
              <p className='cell'>{cliente.totalLitros}</p>
              <p className='cell'>{cliente.valorTotal}</p>
            </div>
          </>
        ) : (
          DataEhIgual(clientes, index) ? 
            <div className="row">
              <p className='cell'>{cliente.nome}</p>
              <p className='cell'>{cliente.totalLitros}</p>
              <p className='cell'>{cliente.valorTotal}</p>
            </div>
          : 
          <>
          <h3 className='data' onClick={() => AbreFechaDiv(cliente.id)}>Data: {cliente.data}</h3>
              <div className="thead row">
                <p className='cell'>Nome</p>
                <p className='cell'>Litros</p>
                <p className='cell'>Valor Total</p>
              </div>
              <div className="row">
                <p className='cell'>{cliente.nome}</p>
                <p className='cell'>{cliente.totalLitros}</p>
                <p className='cell'>{cliente.valorTotal}</p>
              </div>
            </>
        )
          }
      </>
    );
  }


  if (clientes.length === 0) {
    return (
      <div id='body'>
        <NavBar />
        <div id='tabela-clientes'>
          <h1>Não há clientes</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div id='body'>
      <NavBar />
      <div id='tabela-clientes'>
        <div className="table">
          <div>
            {clientes.map((cliente, index) => renderCliente(cliente, index))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}