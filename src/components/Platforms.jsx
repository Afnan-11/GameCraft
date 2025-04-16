import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const platformLogos = [
  { name: 'PlayStation', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png' },
  { name: 'Steam', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png' },
  { name: 'Apple', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' },
  { name: 'Android', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png' },
  { name: 'Oculus', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Oculus_VR_logo.svg/1200px-Oculus_VR_logo.svg.png' },
  { name: 'Unity', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png' },
  { name: 'Unreal', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Unreal_Engine_logo.svg/1200px-Unreal_Engine_logo.svg.png' },
]

const Platforms = () => {
  const theme = useSelector((state) => state.theme)
  
  return (
    <div className={`py-12 ${theme.cardBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {platformLogos.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.2 }}
            >
              <img 
                src={platform.icon || "/placeholder.svg"} 
                alt={platform.name} 
                className={`max-w-full max-h-full ${theme.name === 'light' ? 'brightness-0' : 'brightness-200 contrast-200'} opacity-70 hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Platforms