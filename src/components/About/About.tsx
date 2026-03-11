import './About.css';
import Alexia from '../../assets/alexia-foto.svg';
import Skills from '../Skills/Skills';

function About() {
    return (
        <div className="about">
            <section id="Sobre" className="about-container">
                <img className="about-img" src={Alexia} alt="Foto de Aléxia Caló" />
                <div className="about-content">
                    <h2 className="about-title">Sobre mim</h2>
                    <p className="about-text">
                        Olá, eu sou Aléxia Caló, estudante de Análise e Desenvolvimento de Sistemas no Senac SP. Sou apaixonada por
                        tecnologia e estou sempre em busca de novos conhecimentos em programação.
                    </p>
                    <Skills />
                </div>
            </section>
        </div>
    );
}

export default About;