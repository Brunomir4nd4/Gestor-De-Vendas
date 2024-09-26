import React, { useEffect, useMemo, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom' ;
import GerarFaturaDoCliente from '../../Servicos/GerarFaturaDoCliente';
import Table from '../Table/Table';
import './Detalhes.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Detalhes() {
    const NOME_DO_CLIENTE_DETALHADO = useParams().profileName.toUpperCase();
    const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';
    const [HISTORICO_DO_CLIENTE_DETALHADO, setHistoricoDoClientedetalhado] = useState([]);

    useEffect(() => {
        if (localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS)) {
            setHistoricoDoClientedetalhado(() => {
                const vemdas = JSON.parse(localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS));
                const vendasVinculadasAoClienteDetalhado = vemdas.filter((venda) => venda.nomeDoCliente.toUpperCase() === NOME_DO_CLIENTE_DETALHADO);
    
                return vendasVinculadasAoClienteDetalhado;
            });
        }
    }, [CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, NOME_DO_CLIENTE_DETALHADO]);

    const columns = useMemo(
        () => [{
            Header: "Histórico do Cliente - " + NOME_DO_CLIENTE_DETALHADO,
            columns: [
                {
                    Header: "Litragem",
                    accessor: "litragem"
                },
                {
                    Header: "Valor Cobrado",
                    accessor: "valor"
                },
                {
                    Header: "Data de Venda",
                    accessor: "data"
                }
            ]
        }],
    []);

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
                
                GerarFaturaDoCliente(HISTORICO_DO_CLIENTE_DETALHADO, dataInicial, dataFinal);
            } 
        });
        
        dialog2.show(); 
    }

    return (
        <>
            <NavBar />
            <div id="painel">
                <div className="historico">
                    <Table columns={columns} data={HISTORICO_DO_CLIENTE_DETALHADO} />
                </div>
                <div id="rodape-tabela-historico-do-cliente">
                    <button id="btn-pdf" className="btn btn-primary" onClick={() => AoClicarAbrirModalDeDefinirPeriodo()}>Gerar Fatura</button>
                </div>
            </div>
            <Footer />
        </>
    )
}
