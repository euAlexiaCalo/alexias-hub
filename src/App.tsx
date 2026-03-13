import InitialSection from './components/Initial/InitialSection'
import SkillsSection from './components/Skills/SkillsSection'
import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <InitialSection />
        <SkillsSection />
      </main>
    </>
  )
}

export default App
