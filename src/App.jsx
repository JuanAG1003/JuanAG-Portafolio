import './App.css'
import { BoardProvider } from './context/board.jsx'
import { SkillsRefProvider } from './context/skillsRef.jsx'
import { Contact } from './features/contact/Contact.jsx'
import { Hero } from './features/hero/Hero.jsx'
import { Projects } from './features/projects/Projects.jsx'
import { Skills } from './features/skills/Skills.jsx'
import { Footer } from './shared/components/Footer/Footer.jsx'
import { Header } from './shared/components/Header/Header.jsx'

function App () {
  return (
    <>
      <Header />
      <Hero />
      <SkillsRefProvider>
        <Skills />
      </SkillsRefProvider>
      <BoardProvider>
        <Projects />
      </BoardProvider>
      <Contact />
      <Footer />
    </>
  )
}

export default App
