import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { GameController, FacebookLogo, TwitterLogo, InstagramLogo, YoutubeLogo, TwitchLogo } from 'phosphor-react'

const Footer = () => {
  const theme = useSelector((state) => state.theme)
  
  return (
    <footer className={`${theme.name === 'dark' ? 'bg-gray-900' :theme.cardBg}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <GameController size={32} weight="bold" className={theme.accentColor} />
              <span className="ml-2 text-2xl font-bold tracking-tight">GAMECRAFT</span>
            </div>
            <p className="opacity-80 mb-6">
              Creating exceptional gaming experiences that captivate and inspire players worldwide.
            </p>
            <div className="flex space-x-4">
              {[FacebookLogo, TwitterLogo, InstagramLogo, YoutubeLogo, TwitchLogo].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`p-2 rounded-full ${theme.name === 'dark' ? 'bg-gray-800' : 'bg-white'} ${theme.accentColor}`}
                  whileHover={{ y: -5 }}
                >
                  <Icon size={20} weight="bold" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Game Development', 'Art Production', 'Game Programming', 'VR/AR Development', 'Game QA & Testing', 'Game Marketing'].map((item) => (
                <li key={item}>
                  <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Portfolio', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="opacity-80 hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="opacity-80 mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and industry insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className={`w-[100%] flex px-4 py-2 rounded-l-md border ${theme.name === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r-md font-medium ${theme.buttonBg} text-white`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm">
            &copy; {new Date().getFullYear()} GAMECRAFT. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer