import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { DeviceMobile, Desktop, GameController } from 'phosphor-react'

const Hero = () => {
  const theme = useSelector((state) => state.theme)

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
          alt="Gaming Background" 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent`}></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-500/30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ]
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-24">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={theme.accentColor}>GAME DEVELOPMENT<br />& ART PRODUCTION</span>
            
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting immersive gaming experiences with cutting-edge technology and artistic excellence
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#services" 
              className={`px-6 py-3 rounded-md font-medium ${theme.buttonBg ? "white" : theme.accentColor} text-white flex items-center gap-2 transition-transform`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
            <motion.a 
              href="#portfolio" 
              className="px-6 py-3 rounded-md font-medium bg-transparent border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <DeviceMobile size={32} weight="bold" className={theme.accentColor} />
              <span className="mt-2 font-medium">MOBILE</span>
            </div>
            <div className="flex flex-col items-center">
              <Desktop size={32} weight="bold" className={theme.accentColor} />
              <span className="mt-2 font-medium">DESKTOP</span>
            </div>
            <div className="flex flex-col items-center">
              <GameController size={32} weight="bold" className={theme.accentColor} />
              <span className="mt-2 font-medium">CONSOLE</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/70"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero