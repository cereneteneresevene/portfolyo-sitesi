import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TechMarquee } from './components/TechMarquee'
import { WorkExperience } from './components/WorkExperience'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
