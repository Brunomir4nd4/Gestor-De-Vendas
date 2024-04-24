import './NavBar.css';
import logoMarca from "../../img/logoMenor.jpeg";

export default function NavBar() {
    
    const currentUrl = window.location.href;
    return (
        <div id="container-da-barra-de-navegacao">
            <img src={logoMarca} alt="Logo" id='logoMarca'/>

            <div id="itens-da-barra-de-navegacao">
                {
                    currentUrl.includes('/controledosclientes') ? 
                    <a href="/">Painel</a> :
                    <a href="/controledosclientes">Clientes</a>
                }
            </div>
        </div>
    )
}