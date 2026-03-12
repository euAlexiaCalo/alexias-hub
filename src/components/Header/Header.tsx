// Menu de navegação do site com css aqui
import './Header.css'

function Header() {
    return (
        <header>
            <nav className="nav-container">
            <h1 className="nav-logo">Portfólio</h1>
                <ul className="nav-menu">
                    <li><a href="#Início" className="nav-link">Início</a></li>
                    <li><a href="#Habilidades" className="nav-link">Habilidades</a></li>
                    <li><a href="#Projetos" className="nav-link">Projetos</a></li>
                    <li><a href="#Dados" className="nav-link">Dados</a></li>
                    <li><a href="#Contato" className="nav-link">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header