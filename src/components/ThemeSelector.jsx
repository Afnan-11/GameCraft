import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { setTheme } from '../store'
import { Palette } from 'phosphor-react'

const themes = [
  { id: 'dark', name: 'Dark', color: 'bg-gray-900' },
  { id: 'light', name: 'Light', color: 'bg-white' },
  { id: 'cyberpunk', name: 'Cyberpunk', color: 'bg-purple-900' },
  { id: 'retro', name: 'Retro', color: 'bg-slate-900' },
  { id: 'fantasy', name: 'Fantasy', color: 'bg-emerald-900' },
]

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const currentTheme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  
  const handleThemeChange = (themeId) => {
    dispatch(setTheme(themeId))
    setIsOpen(false)
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        className={`p-3 rounded-full shadow-lg ${currentTheme.buttonBg} text-white`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Palette size={24} weight="bold" />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute bottom-16 right-0 p-4 rounded-lg shadow-lg ${currentTheme.cardBg} w-48`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-sm font-medium mb-3">Select Theme</h3>
            <div className="space-y-2">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  className={`flex items-center p-2 rounded-md cursor-pointer ${
                    currentTheme.name === theme.id ? 'bg-gray-700/20' : 'hover:bg-gray-700/10'
                  }`}
                  onClick={() => handleThemeChange(theme.id)}
                >
                  <div className={`w-5 h-5 rounded-full ${theme.color} border border-gray-400 mr-3`}></div>
                  <span>{theme.name}</span>
                  {currentTheme.name === theme.id && (
                    <motion.div 
                      className="ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeSelector