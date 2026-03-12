import './SkillsSection.css';
import DotnetLogo from '../../assets/dotnet.svg';
import HtmlLogo from '../../assets/html.svg';
import CssLogo from '../../assets/css.svg';
import JsLogo from '../../assets/javascript.svg';
import ReactLogo from '../../assets/react.svg';
import TsLogo from '../../assets/typescript.svg';
import GitLogo from '../../assets/git.svg';
import GithubLogo from '../../assets/github.svg';
import SqlLogo from '../../assets/sql.svg';
import PowerbiLogo from '../../assets/powerbi.svg';

function SkillsSection() {
    return (
        <section id="Habilidades" className="skills-container">
            <h2 className="skills-title">Habilidades</h2>
            <ul className="skills-list">
                <li className="skills-item">
                    <img src={DotnetLogo} alt='Logo do .NET' className='skills-logo' />
                    <span className='skills-name'>.NET</span>
                </li>
                <li className="skills-item">
                    <img src={HtmlLogo} alt="Logo do HTML" className='skills-logo' />
                    <span>HTML</span>
                </li>
                <li className="skills-item">
                    <img src={CssLogo} alt="Logo do CSS" className='skills-logo' />
                    <span className='skills-name'>CSS</span>
                </li>
                <li className="skills-item">
                    <img src={JsLogo} alt="Logo do JavaScript" className='skills-logo' />
                    <span className='skills-name'>JavaScript</span>
                </li>
                <li className="skills-item">
                    <img src={ReactLogo} alt="Logo do React" className='skills-logo' />
                    <span className='skills-name'>React</span>
                </li>
                <li className="skills-item">
                    <img src={TsLogo} alt="Logo do TypeScript" className='skills-logo' />
                    <span className='skills-name'>TypeScript</span>
                </li>
                <li className="skills-item">
                    <img src={GitLogo} alt="Logo do Git" className='skills-logo' />
                    <span className='skills-name'>Git</span>
                </li>
                <li className="skills-item">
                    <img src={GithubLogo} alt="Logo do GitHub" className='skills-logo' />
                    <span className='skills-name'>GitHub</span>
                </li>
                <li className="skills-item">
                    <img src={SqlLogo} alt="Logo do SQL" className='skills-logo' />
                    <span className='skills-name'>SQL</span>
                </li>
                <li className="skills-item">
                    <img src={PowerbiLogo} alt="Logo do Power BI" className='skills-logo' />
                    <span className='skills-name'>Power BI</span>
                </li>
            </ul>
        </section>
    );
}

export default SkillsSection