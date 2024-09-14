import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { DataAtual } from '../../model/DataAtual'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { CLIENTE } from '../../model/Cliente';

export default function Home() {
    let CHAVE_LOCAL_STORAGE_CLIENTES = 'clientes';
    
    const novoCliente = () =>{
        let clientes = [];
        const nome = document.querySelector('#nome-do-cliente').value;
        const quantidadeLitros = document.querySelector('#quantidade-de-litros').value;
        const valorCobrado = document.querySelector('#valor-cobrado').value;
        CLIENTE.nome = nome;
        CLIENTE.totalLitros = quantidadeLitros;
        CLIENTE.valorTotal = valorCobrado;
        CLIENTE.data = DataAtual();
        
        if (localStorage.getItem(CHAVE_LOCAL_STORAGE_CLIENTES)) {
            clientes = JSON.parse(localStorage.getItem(CHAVE_LOCAL_STORAGE_CLIENTES));
            CLIENTE.id = clientes[clientes.length-1].id + 1;
            clientes.push(CLIENTE);
            localStorage.setItem(CHAVE_LOCAL_STORAGE_CLIENTES, JSON.stringify(clientes));
        }
        else {
            clientes.push(CLIENTE);
            localStorage.setItem(CHAVE_LOCAL_STORAGE_CLIENTES, JSON.stringify(clientes));
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
                <button onClick={novoCliente} type="button" class="btn btn-primary">Vender</button>
            </div>
        </main>
        <Footer />
        </>
    )
}