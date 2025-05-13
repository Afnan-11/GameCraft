import { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { EnvelopeSimple, Phone, MapPin } from 'phosphor-react'

const Contact = () => {
  const theme = useSelector((state) => state.theme)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Form submitted! (This is just a demo)')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">CONTACT US</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-80">
            Ready to bring your game idea to life? Get in touch with our team today.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className={`${theme.cardBg} p-8 rounded-lg shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${theme.buttonBg} text-white mr-4`}>
                  <MapPin size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="opacity-80">123 Game Street, Digital City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${theme.buttonBg} text-white mr-4`}>
                  <EnvelopeSimple size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="opacity-80">thesoftwaredistrict@gmail.com</p>
                  {/* <p className="opacity-80">support@gamecraft.com</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${theme.buttonBg} text-white mr-4`}>
                  <Phone size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="opacity-80">+923706180386</p>
                  {/* <p className="opacity-80">+1 (555) 987-6543</p> */}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className={`${theme.cardBg} p-8 rounded-lg shadow-lg md:col-span-2`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${theme.name === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${theme.name === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${theme.name === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-md border ${theme.name === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className={`px-8 py-3 rounded-md font-medium ${theme.buttonBg} text-white`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact