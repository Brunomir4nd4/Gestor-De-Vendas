import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import DataAtual from '../../modelos/DataAtual'
import { VENDA } from '../../modelos/Venda';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

export default function Home() {
    const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';
    
    const novaVenda = function() {
        let vendas = [];
        const nome = document.querySelector('#nome-do-cliente').value;
        const quantidadeLitros = document.querySelector('#quantidade-de-litros').value;
        const valorCobrado = document.querySelector('#valor-cobrado').value;
        VENDA.nomeDoCliente = nome.toUpperCase();
        VENDA.litragem = parseFloat(quantidadeLitros);
        VENDA.valor = parseFloat(valorCobrado);
        VENDA.data = DataAtual();
        
        if (localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS)) {
            vendas = JSON.parse(localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS));
            VENDA.id = vendas[vendas.length-1].id + 1;
            vendas.unshift(VENDA);
            localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas));
        }
        else {
            vendas.push(VENDA);
            localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas));
        }
    }

    return (
        <>
        <NavBar />
        <main id="main-pagina-painel">
            <div id="container-do-formulario">
                <label>Cliente</label>
                <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" id='nome-do-cliente' placeholder="nome do cliente..." aria-describedby="addon-wrapping"/>
                </div>

                <label>Litragem</label>
                <div class="input-group flex-nowrap">
                    <input type="number" class="form-control" id='quantidade-de-litros' placeholder="quantidade em litros..." aria-describedby="addon-wrapping"/>
                </div>

                <label>Valor Cobrado</label>
                <div class="input-group flex-nowrap">
                    <input type="number" class="form-control" id='valor-cobrado' placeholder="valor total..." aria-describedby="addon-wrapping"/>
                </div>
                <button onClick={novaVenda} type="button" id="btn-Vender" className="btn btn-primary">Vender</button>
            </div>
        </main>
        <Footer />
        </>
    )
}