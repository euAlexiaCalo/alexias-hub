import './InitialSection.css';
import Alexia from '../../assets/alexia-foto.svg';

function About() {
    return (
        <div className="initial">
            <section id="Inicio" className="initial-container">
                <div className="initial-content">
                    <div className="initial-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-stars" viewBox="0 0 16 16">
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                        </svg>
                        <p className="initial-badge-text">Full-Stack • BI Analyst</p>
                    </div>
                    <h1 className="initial-title">Transformando <br /> Ideias em <span className='inicial-title-gradient-one'>Sistemas</span> <br />e Dados <br />em <span className='inicial-title-gradient-two'>Estratégia</span></h1>
                    <p className="initial-text">Transformando código em soluções e dados em decisões. Em constante evolução na criação de aplicações e na geração de insights para negócios.</p>
                    <div className="initial-buttons-container">
                        <a href="#Projetos" className="initial-button-projects">Ver Projetos
                            <svg xmlns="http://www.w3.org/2000/svg"className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                        <a href="#Contato" className="initial-button-contact">Entre em Contato</a>
                    </div>
                </div>
                <img className="initial-img" src={Alexia} alt="Foto de Aléxia Caló" />
            </section>
        </div>
    );
}

export default About;