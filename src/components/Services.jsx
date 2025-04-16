import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { GameController, PaintBrush, Code, Headset, Trophy, Rocket } from 'phosphor-react'

const services = [
  {
    title: 'Game Development',
    description: 'Full-cycle game development from concept to launch across multiple platforms.',
    icon: GameController,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Art Production',
    description: 'High-quality 2D and 3D art assets, character design, and animation.',
    icon: PaintBrush,
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80'
  },
  {
    title: 'Game Programming',
    description: 'Robust game mechanics, AI systems, and performance optimization.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
  },
  {
    title: 'VR/AR Development',
    description: 'Immersive virtual and augmented reality experiences for gaming and beyond.',
    icon: Headset,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Game QA & Testing',
    description: 'Comprehensive quality assurance to ensure polished, bug-free experiences.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Game Marketing',
    description: 'Strategic marketing services to maximize your games reach and impact.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
  }
]

const Services = () => {
  const theme = useSelector((state) => state.theme)
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-80">
            Comprehensive game development and art production services to bring your vision to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group rounded-lg overflow-hidden ${theme.cardBg} shadow-lg hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className={`p-2 rounded-full ${theme.buttonBg} text-white mr-3`}>
                    <service.icon size={24} weight="bold" />
                  </div>
                  <h3 className="text-white text-xl font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="opacity-80">{service.description}</p>
                <motion.a 
                  href="#contact" 
                  className={`mt-4 inline-block ${theme.accentColor} font-medium`}
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services