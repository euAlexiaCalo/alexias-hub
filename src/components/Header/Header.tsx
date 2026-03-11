// Menu de navegação do site com css aqui
import './Header.css'

function Header() {
    return (
        <header>
            <nav className="nav-container">
            <h1 className="nav-logo">Aléxia Caló</h1>
                <ul className="nav-menu">
                    <li><a href="#Sobre" className="nav-link">Sobre</a></li>
                    <li><a href="#Projetos" className="nav-link">Projetos</a></li>
                    <li><a href="#Portfolio" className="nav-link">Portfólio de dados</a></li>
                    <li><a href="#Contato" className="nav-link">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header