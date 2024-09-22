import React, { useState, useEffect, useMemo } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
import './ListagemVendas.css';

export default function ListagemVendas() {
  const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    const vendas = localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS);
    if (vendas) {
      setVendas(JSON.parse(vendas));
    }
  }, []);

  // Colunas da nossa tabela
  const columns = useMemo(
    () => [
      {
        Header: "Vendas",
        columns: [
          {
            Header: "Cliente",
            accessor: "nomeDoCliente"
          },
          {
            Header: "Litragem",
            accessor: "litragem"
          },
          {
            Header: "Valor Cobrado",
            accessor: "valor"
          },
          {
            Header: "Data",
            accessor: "data"
          }
        ]
      }
    ],
    []
  );

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
        <Table columns={columns} data={vendas} />
      </div>
      <Footer />
    </div>
  );
}