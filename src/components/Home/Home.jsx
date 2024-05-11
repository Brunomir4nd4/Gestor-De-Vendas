import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { DataAtual } from '../../funcoes/DataAtual'
import BotaoDownload from '../BotaoDowload'
import CompartilharWhatsApp from '../CompartilharWhatsApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

export default function Home() {
    let CLIENTES = {
        id: 0,
        nome: "",
        totalLitros: 0.0,
        valorTotal: 0.0,
        data: ""
    }
    let CHAVE_CLIENTES = 'clientes';
    
    const novoCliente = () =>{
        let clientes = [];
        const nome = document.querySelector('#nome-do-cliente').value;
        const quantidadeLitros = document.querySelector('#quantidade-de-litros').value;
        const valorCobrado = document.querySelector('#valor-cobrado').value;
        CLIENTES.nome = nome;
        CLIENTES.totalLitros = quantidadeLitros;
        CLIENTES.valorTotal = valorCobrado;
        CLIENTES.data = DataAtual();
        
        if (localStorage.getItem(CHAVE_CLIENTES)) {
            clientes = JSON.parse(localStorage.getItem(CHAVE_CLIENTES));
            CLIENTES.id = clientes[clientes.length-1].id + 1;
            clientes.push(CLIENTES);
            localStorage.setItem(CHAVE_CLIENTES, JSON.stringify(clientes));

        }
        else {
            clientes.push(CLIENTES);
            localStorage.setItem(CHAVE_CLIENTES, JSON.stringify(clientes));
        }
    }

    return (
        <>
        <NavBar />
        <main id="main-pagina-painel">
            <div id="container-do-formulario">
                <label>Cliente</label>
                <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" id='nome-do-cliente' placeholder="nome do cliente" aria-describedby="addon-wrapping"/>
                </div>

                <label>Litros</label>
                <div class="input-group flex-nowrap">
                    <input type="number" class="form-control" id='quantidade-de-litros' placeholder="quantidade em litros" aria-describedby="addon-wrapping"/>
                </div>

                <label>Valor Total</label>
                <div class="input-group flex-nowrap">
                    <input type="number" class="form-control" id='valor-cobrado' placeholder="valor total" aria-describedby="addon-wrapping"/>
                </div>
                <button onClick={novoCliente} type="button" class="btn btn-primary">Enviar!</button>
            </div>
            {/* <BotaoDownload />
            <CompartilharWhatsApp /> */}
        </main>
        <Footer />
        </>
    )
}