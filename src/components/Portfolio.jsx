import { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Mobile', 'PC', 'Console', 'VR/AR']

const projects = [
  {
    id: 1,
    title: 'Cyber Nexus',
    category: 'PC',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A cyberpunk open-world RPG with immersive storytelling and action-packed gameplay.'
  },
  {
    id: 2,
    title: 'Stellar Quest',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A space exploration adventure game with stunning visuals and strategic gameplay.'
  },
  {
    id: 3,
    title: 'Fantasy Realms',
    category: 'Console',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'An epic fantasy RPG with vast open worlds and deep character customization.'
  },
  {
    id: 4,
    title: 'Virtual Architect',
    category: 'VR/AR',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80',
    description: 'A VR architectural design tool that revolutionizes how spaces are visualized.'
  },
  {
    id: 5,
    title: 'Tactical Warfare',
    category: 'PC',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80',
    description: 'A strategic military simulation with realistic physics and advanced AI.'
  },
  {
    id: 6,
    title: 'Pocket Heroes',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'A casual hero collection game with vibrant art style and engaging progression.'
  }
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const theme = useSelector((state) => state.theme)
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR PORTFOLIO</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-80">
            Explore our diverse collection of gaming projects across multiple platforms
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category 
                  ? theme.buttonBg + ' text-white' 
                  : `bg-transparent border border-gray-500 hover:border-gray-300`
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`group rounded-lg overflow-hidden ${theme.cardBg} shadow-lg cursor-pointer`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${theme.buttonBg} text-white`}>
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="opacity-80 line-clamp-2">{project.description}</p>
                  <motion.span 
                    className={`mt-4 inline-block ${theme.accentColor} font-medium`}
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className={`max-w-4xl w-full ${theme.cardBg} rounded-lg overflow-hidden`}
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80">
                  <img 
                    src={selectedProject.image || "/placeholder.svg"} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme.buttonBg} text-white`}>
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="opacity-80 mb-6">{selectedProject.description}</p>
                  <div className="flex gap-4">
                    <button className={`px-6 py-3 rounded-md font-medium ${theme.buttonBg} text-white`}>
                      View Demo
                    </button>
                    <button className="px-6 py-3 rounded-md font-medium bg-transparent border border-gray-500">
                      Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio