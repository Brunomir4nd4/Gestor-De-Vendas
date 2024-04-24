import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './controleDosClientes.css';
import { DataEhIgual } from '../../funcoes/DataEhIgual';

export default function ControleDosClientes() {
  const CHAVE_CLIENTES = 'clientes';
  let clientes;

  if (localStorage.getItem(CHAVE_CLIENTES)) {
    clientes = JSON.parse(localStorage.getItem(CHAVE_CLIENTES));
  } else {
    return (
      <div id='body'>
        <NavBar />
        <div id='tabela-clientes' >
          <h1>Não ha clientes</h1>
        </div>
        <Footer />
      </div>
    );
  }

  function AbreFechaDiv (id) {
    const conteudo = document.getElementsByClassName('conteudo');
    conteudo[id].classList.toggle("hide");

  }
    const clienteElements = clientes.map((cliente, index) => (
      <>
        { DataEhIgual(clientes, index) ?
          <div>
              <h3 class='conteudo'>ID: {cliente.id} | Nome: {cliente.nome} | totalLitros: {cliente.totalLitros} | 
              valorTotal: {cliente.valorTotal}</h3>
          </div>  :

          <div>
            <h3 class='data' onClick={() => AbreFechaDiv(cliente.id)}>Data: {cliente.data}</h3>
            <h3 class='conteudo'>ID: {cliente.id} | Nome: {cliente.nome} | totalLitros: {cliente.totalLitros} | 
            valorTotal: {cliente.valorTotal}</h3>
          </div>

        }
      </>
    ));

  return (
    <div id='body'>
      <NavBar />
      <div id='tabela-clientes' >
        <h3 class='data' onClick={() => AbreFechaDiv(clientes[0].id)}>Data: {clientes[0].data}</h3>
        {clienteElements}
      </div>
      <Footer />
    </div>
  );
}