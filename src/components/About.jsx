import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Users, Trophy, Rocket, Clock } from 'phosphor-react'

const stats = [
  { value: '10+', label: 'Years Experience', icon: Clock },
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '200+', label: 'Projects Completed', icon: Trophy },
  { value: '30+', label: 'Global Clients', icon: Rocket },
]

const About = () => {
  const theme = useSelector((state) => state.theme)
  
  return (
    <section id="about" className={`py-20 ${theme.cardBg}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">ABOUT US</h2>
            <div className="w-24 h-1 bg-emerald-500 mb-6"></div>
            <p className="text-lg mb-6 opacity-80">
              We are a passionate team of game developers, artists, and designers dedicated to creating exceptional gaming experiences that captivate and inspire players worldwide.
            </p>
            <p className="mb-8 opacity-80">
              With over a decade of experience in the gaming industry, we've mastered the art of blending cutting-edge technology with creative storytelling to deliver games that stand out in today's competitive market.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="opacity-80">To create innovative and immersive gaming experiences that push the boundaries of technology and storytelling.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="opacity-80">To become the leading game development studio known for quality, creativity, and player-focused experiences.</p>
              </div>
            </div>
            <motion.a 
              href="#careers" 
              className={`mt-8 inline-block px-6 py-3 rounded-md font-medium ${theme.buttonBg} text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Team
            </motion.a>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-lg bg-emerald-500/20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-lg bg-emerald-500/10 -z-10"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`p-6 rounded-lg ${theme.name === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${theme.buttonBg} text-white`}>
                  <stat.icon size={24} weight="bold" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="opacity-70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About