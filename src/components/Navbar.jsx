import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { GameController } from 'phosphor-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const theme = useSelector((state) => state.theme)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full  z-50 transition-all duration-300 ${
        scrolled
          ? `${theme.navBg} backdrop-blur-md shadow-lg`
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <motion.div className='flex items-center' whileHover={{ scale: 1.05 }}>
          <GameController
            size={32}
            weight='bold'
            className={theme.accentColor}
          />
          <span className='ml-2 text-2xl font-bold tracking-tight'>
            GAMECRAFT
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8'>
          {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='font-medium hover:text-emerald-500 transition-colors'
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='p-2'
          >
            <div className='w-6 flex flex-col gap-1'>
              <span
                className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className={`md:hidden ${theme.cardBg} py-4`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='container mx-auto px-4 flex flex-col space-y-4'>
            {[
              'Services',
              'Portfolio',
              'About',
              'Careers',
              'Blog',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='font-medium py-2 hover:text-emerald-500 transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
