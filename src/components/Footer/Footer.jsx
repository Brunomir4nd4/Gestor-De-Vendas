import './footer.css';
import bandeiraBrasil from '../../img/brazil.png';

export default function Footer() {
    return (
        <footer>
            <div id="container-do-rodape">
                <ul id="footer-menu">
                    <h3>Contatos da Empresa</h3>
                    <li class="footer-menu-item">Tel 99 9 9999-9999</li>
                    <li class="footer-menu-item">Email algumemail@gmail.com</li>
                </ul>
                <div id="rights">
                    <div id="country">
                        <p>Brasil</p>
                        <img src={bandeiraBrasil} alt="Bandeiro do Brasil" id="bandeira"/>
                    </div>
                    <p id="Copy">&copy; Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}