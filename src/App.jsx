import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Platforms from './components/Platforms'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeSelector from './components/ThemeSelector'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const theme = useSelector((state) => state.theme)
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.bgColor} ${theme.name === 'light' ? theme.accentColor : theme.textColor}`}>
      <Navbar />
      <Hero />
      <Platforms />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ThemeSelector />
    </div>
  )
}

export default App