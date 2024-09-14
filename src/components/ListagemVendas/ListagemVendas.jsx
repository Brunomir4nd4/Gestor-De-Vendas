import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './ListagemVendas.css';
import { DataEhIgual } from '../../modelos/DataEhIgual';

export default function ListagemVendas() {
  const CHAVE_CLIENTES = 'clientes';
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const storedClientes = localStorage.getItem(CHAVE_CLIENTES);
    if (storedClientes) {
      setClientes(JSON.parse(storedClientes));
    }
  }, []);

  function AoClicarFecharAbrirTabelaDoDia(index) {
    const rows = document.querySelectorAll('.row');
    console.log(rows.length);
    rows.forEach((row) => {
      const idDataClicada = parseInt(row.getAttribute('data-index'));
      if (index === idDataClicada) {
        row.classList.toggle("hide");
      }
    });
  }

  function RenderizarTabela(cliente, index) {
    return (
      <>
        {index == 0 ? (
          <>
            <h3 className='data' onClick={() => AoClicarFecharAbrirTabelaDoDia(index)}>Data: {clientes[0].data}</h3>
            <div className="thead row" data-index={index}>
                <p className='cell'>Cliente</p>
                <p className='cell'>Litragem</p>
                <p className='cell'>Valor Cobrado</p>
            </div>
            <div className="row" data-index={index}>
              <p className='cell'>{cliente.nome}</p>
              <p className='cell'>{cliente.totalLitros}</p>
              <p className='cell'>{cliente.valorTotal}</p>
            </div>
          </>
        ) : (
          DataEhIgual(clientes, index) 
          ? 
          <div className="row" data-index={index}>
              <p className='cell'>{cliente.nome}</p>
              <p className='cell'>{cliente.totalLitros}</p>
              <p className='cell'>{cliente.valorTotal}</p>
            </div>
          : 
          <>
            <h3 className='data' onClick={() => AoClicarFecharAbrirTabelaDoDia(index)}>Data: {cliente.data}</h3>
            <div className="thead row" data-index={index}>
                <p className='cell'>Nome</p>
                <p className='cell'>Litros</p>
                <p className='cell'>Valor Total</p>
            </div>
            <div className="row" data-index={index}>
              <p className='cell'>{cliente.nome}</p>
              <p className='cell'>{cliente.totalLitros}</p>
              <p className='cell'>{cliente.valorTotal}</p>
            </div>
          </>
        )}
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
            {clientes.map((cliente, index) => RenderizarTabela(cliente, index))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}