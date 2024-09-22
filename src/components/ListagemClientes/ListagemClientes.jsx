import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './ListagemClientes.css'

export default function ListagemClientes() {
    
    const [nomeDosClientes, setNomeDosClientes] = useState([]);
    const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';

    useEffect(() => {
        if (localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS)) {
            setNomeDosClientes(() => {
                const vendas = JSON.parse(localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS));
                return obterNomesFiltrados(vendas);
            });
        }
    }, []);

    function obterNomesFiltrados(vendas) {
        const nomes = [];
        nomes.push(vendas[0].nomeDoCliente.toUpperCase());
        
        vendas.forEach((venda) => {
            let flag = true;
            nomes.forEach((nome) => {
                if (venda.nomeDoCliente.toUpperCase() === nome)
                    flag = false;
            })

            if (flag)
                nomes.push(venda.nomeDoCliente.toUpperCase());
        })

        return nomes.sort();
    }

    function apresentarClientes(nomeDoCliente) {
        return (
            <Link to={`../detalhes/${nomeDoCliente}`} className='nome'>
                <li>{nomeDoCliente}</li>
            </Link>
        )
    }

  return (
    <>
        <NavBar />
        <div id="listaDeClientes">
            <ul>
                {nomeDosClientes.map((nome) => apresentarClientes(nome))}
            </ul>
        </div>
        <Footer />
    </>
  ) 
}
