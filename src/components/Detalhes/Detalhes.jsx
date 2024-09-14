import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { json, useParams } from 'react-router-dom' 
import './Detalhes.css'
import { GerarFaturaDoCliente } from '../../modelos/GerarFaturaDoCliente'

export default function Detalhes() {
    const CHAVE_CLIENTES = 'clientes';
    const [CLIENTE_DETALHADO, setClienteDetalhado] = useState([]);
    const NOME_DO_CLIENTE_DETALHADO = useParams().profileName;

    useEffect(() => {
        if (localStorage.getItem(CHAVE_CLIENTES)) {
            setClienteDetalhado(() => {
                const clientes = JSON.parse(localStorage.getItem(CHAVE_CLIENTES));
                const clientesEncontrados = clientes.filter((cliente) => cliente.nome === NOME_DO_CLIENTE_DETALHADO);
    
                return clientesEncontrados;
            });
        }
    }, [CHAVE_CLIENTES, NOME_DO_CLIENTE_DETALHADO]);
    
    function apresentaDados(cliente) {
        return (
            <div className='historico-conteudo'>
                <p className='celula'>R$ {cliente.valorTotal}</p>
                <p className='celula'>{cliente.totalLitros}</p>
                <p className='celula'>{cliente.data}</p>
            </div>
        )
    }

    function AoClicarAbrirModalDeDefinirPeriodo(){
        let dialog2 = xdialog.create({
            title: 'Período de Venda', 
            body: `
                <p>Escolha um Período de venda que deseja cobrar do cliente.</p>
                <div style="display: flex; flex-direction: column; align-items: center;">                    
                    <div style="display: flex; margin-bottom: 10px; flex-direction: column;">
                        <label style="color: black;">Data Inicial</label>
                        <input type="date" id="dataInicial" name="dataInicial">
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <label style="color: black;">Data Final</label>
                        <input type="date" id="dataFinal" name="dataFinal">
                    </div>
                </div>
            `,
            onok: function(param) {
                let dataInicial = document.getElementById('dataInicial').value;
                let dataFinal = document.getElementById('dataFinal').value;
                
                GerarFaturaDoCliente(CLIENTE_DETALHADO, dataInicial, dataFinal);
            } 
        });
        
        dialog2.show(); 
    }

    return (
        <>
            <NavBar />
            <div id="painel">
                <div id='container-nome-e-pdf'>
                    <h2 id='h2-nome-cliente'>Cliente: {NOME_DO_CLIENTE_DETALHADO}</h2>
                    <button id="button-pdf" onClick={() => AoClicarAbrirModalDeDefinirPeriodo()}>Gerar Fatura</button>
                </div>
                <div className="historico">
                    <div className="table">
                        <div className='historico-conteudo thead'>
                            <p className='celula'>Valor Cabrado</p>
                            <p className='celula'>Litragem</p>
                            <p className='celula'>Data da Venda</p>
                        </div>
                            {CLIENTE_DETALHADO.map((cliente) => apresentaDados(cliente))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
      )
}
