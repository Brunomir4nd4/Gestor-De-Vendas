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
                    currentUrl.includes('/controledosclientes') ? 
                    <Link to={'/'}>Painel</Link> :
                    <Link to={'/controledosclientes'}>Clientes</Link>
                }
            </div>
        </div>
    )
}