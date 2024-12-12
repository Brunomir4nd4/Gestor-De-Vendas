import React, { useState, useEffect, useMemo } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
import './ListagemVendas.css';

export default function ListagemVendas() {
  const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    let vendas = JSON.parse(localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS));
    if (vendas) {
      setVendas(vendas);
    }
  }, []);

  if (vendas.length === 0) {
    return (
      <div id='body'>
        <NavBar />
        <div id='tabela-vendas'>
          <h1>Não há vendas</h1>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div id='body'>
      <NavBar />
      <div id='tabela-vendas'>
        <Table itens={vendas} />
      </div>
      <Footer />
    </div>
  );
}