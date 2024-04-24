import '../../css/index.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { DataAtual } from '../../funcoes/DataAtual'
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
                <label>Nome do cliente</label>
                <input type="text" id='nome-do-cliente' placeholder="Digite aqui..."/>

                <label>Quantidade de litros</label>
                <input type="number" id='quantidade-de-litros' placeholder="Digite aqui..."/>

                <label>Valor cobrado</label>
                <input type="number" id='valor-cobrado' placeholder="Digite aqui..."/>

                <button onClick={novoCliente}>Enviar</button>
            </div>
        </main>
        <Footer />
        </>
    )
}