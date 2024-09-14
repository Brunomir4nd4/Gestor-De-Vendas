import './NavBar.css';
import logoMarca from "../../img/logoMenor.jpeg";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const currentUrl = window.location.href;
    
    return (
        <div id="container-da-barra-de-navegacao">
            <img src={logoMarca} alt="Logo" id='logoMarca'/>

            <div id="itens-da-barra-de-navegacao">
                {
                    currentUrl.includes('/listagemVendas') 
                        ? <Link to={'/'}>Início</Link> 
                        : <Link to={'/listagemVendas'}>Vendas</Link>
                }
                {
                    currentUrl.includes('/listagemClientes') 
                        ? <Link to={'/'}>Início</Link>
                        : <Link to={'/listagemClientes'}>Clientes</Link>
                }
            </div>
        </div>
    )
}