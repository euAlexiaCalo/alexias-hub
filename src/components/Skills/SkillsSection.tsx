import './SkillsSection.css';
import { SkillBar } from './SkillBar';

function SkillsSection() {
    return (
        <div className="Skills">
            <section id='Habilidades' className="Skills-container">
                <h1 className="Skills-title">Habilidades</h1>
                <p className='skills-text'>Dois mundos conectados: construindo aplicações e extraindo inteligência dos dados</p>
                <div className="Skills-cards-container">
                    <div className='skills-cards card-build'>
                        <h2 className="skills-card-title title-build">Construção</h2>
                        <p className='skills-card-text'>Desenvolvimento Full-Stack</p>
                        <SkillBar label="HTML" targetValue={70} color="var(--bar-html)" />
                        <SkillBar label="CSS" targetValue={65} color="var(--bar-css)" />
                        <SkillBar label="JavaScript" targetValue={60} color="var(--bar-js)" />
                        <SkillBar label="React" targetValue={50} color="var(--bar-react)" />
                        <SkillBar label="TypeScript" targetValue={40} color="var(--bar-ts)" />
                        <SkillBar label=".NET" targetValue={40} color="var(--bar-dotnet)" />
                        <SkillBar label="C#" targetValue={45} color="var(--bar-csharp)" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg>
                    <div className='skills-cards card-data'>
                        <h2 className='skills-card-title title-data'>Análises</h2>
                        <p className='skills-card-text'>Business Intelligence</p>
                        <SkillBar label="SQL Server" targetValue={50} color="var(--bar-sql)" />
                        <SkillBar label="Power BI" targetValue={40} color="var(--bar-pbi)" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SkillsSection