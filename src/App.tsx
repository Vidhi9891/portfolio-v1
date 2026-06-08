import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsMap from './components/SkillsMap'
import AboutSection from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-[#0b132b] text-slate-300 font-sans antialiased selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero/>
      <AboutSection />
      <SkillsMap />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
