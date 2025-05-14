import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { DeviceMobile, Desktop, GameController } from 'phosphor-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const theme = useSelector((state) => state.theme)
  const [isFlashing, setIsFlashing] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      // setIsSmallScreen(window.innerWidth < 840)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing(true)
      setTimeout(() => {
        setIsFlashing(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative min-h-screen  overflow-hidden  '>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
          alt='Gaming Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent'></div>
      </div>

      {/* Animated Particles */}
      <div className='absolute inset-0 z-10 '>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-emerald-500/30'
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      <div className='grid md:grid-cols-2 items-center'>
        {/* Main Content */}
        <div className=' absolute  w-[40%] text-center mt-9 lg:top-[50%] lg:left-[10%]  lg:transform lg:-translate-x-[10%] lg:-translate-y-1/2  top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] lg:text-left z-50 '>
          <div className='max-w-3xl '>
            <div className='mb-3'>
              <span className='text-xs'>Welcome to Sorftware District</span>
            </div>
            <motion.h1
              className='text-4xl md:text-5xl font-bold mb-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${theme.accentColor} leading-9`}>
                Turning Imagination into Reality
              </span>
            </motion.h1>

            <motion.p
              className='text-xs mb-8 opacity-90'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Software District, we believe every great idea deserves to be
              experienced. From captivating mobile games to console epics and
              immersive AR/VR worlds, we transform imagination into interactive
              realities. Powered by passion, driven by innovation—we bring
              vision to life.
            </motion.p>

            {/* <motion.div
            className='flex flex-wrap gap-4 mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href='#services'
              className={`px-6 py-3 rounded-md font-medium ${
                theme.buttonBg ? 'white' : theme.accentColor
              } text-white flex items-center gap-2 transition-transform`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
            <motion.a
              href='#portfolio'
              className='px-6 py-3 rounded-md font-medium bg-transparent border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </motion.div> */}

            {/* <motion.div
            className='flex gap-8 md:gap-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className='flex flex-col items-center'>
              <DeviceMobile
                size={32}
                weight='bold'
                className={theme.accentColor}
              />
              <span className='mt-2 font-medium'>MOBILE</span>
            </div>
            <div className='flex flex-col items-center'>
              <Desktop size={32} weight='bold' className={theme.accentColor} />
              <span className='mt-2 font-medium'>DESKTOP</span>
            </div>
            <div className='flex flex-col items-center'>
              <GameController
                size={32}
                weight='bold'
                className={theme.accentColor}
              />
              <span className='mt-2 font-medium'>CONSOLE</span>
            </div>

          </motion.div> */}
          {/* ------------ Hero Buttons ------------ */}
            {/* <div className='relative'> */}
              <div className='z-50 flex items-center   md:flex-row xs:flex-col  xs:gap-5 '>
                {/* Button 1 */}
                <div className=' sm:bottom-[2em]'>
                  <a
                    href='#services'
                    className={`
          relative px-6 py-3 text-[15px] font-semibold text-white bg-cyan-800 rounded-md
          transition-all duration-300 ease-in-out
          xs:px-6 xs:py-3 xs:text-[13px] whitespace-nowrap
          ${isFlashing ? 'animate-pulse' : ''}
        `}
                  >
                    <span className='relative z-10'>Explore Our Services</span>
                    <span
                      className={`
            absolute inset-0 rounded-md bg-cyan-400 opacity-0 blur-md
            transition-opacity duration-300
            ${isFlashing ? 'opacity-60' : 'opacity-30'}
          `}
                    />
                    <span className='absolute inset-0 rounded-md bg-cyan-400 opacity-20 blur-md' />
                    <span className='absolute inset-0 rounded-md border border-cyan-300 opacity-50' />
                  </a>
                </div>

                {/* Button 2 */}
                <div className='px-6 py-3 xs:px-6 xs:py-2 xs:text-[13px] text-[15px] whitespace-nowrap font-semibold bg-cyan-800 rounded-md'>
                  <a href='#portfolio' className='text-white'>
                    View Portfolio
                  </a>
                </div>

                {/* Button 3 */}
                <div className=' bottom-[2em]'>
                  <a
                    href='https://www.linkedin.com/company/softwaredistrict/'
                    target='_blank'
                    className={`
      relative px-6 py-3 text-[15px] font-semibold text-white bg-cyan-800 rounded-md
      transition-all duration-300 ease-in-out
      xs:px-6 xs:py-3 xs:text-[13px] whitespace-nowrap
      ${isFlashing ? 'animate-pulse' : ''}
    `}
                  >
                    <span className='relative z-10'>Get Free Consultation</span>
                    <span
                      className={`
        absolute inset-0 rounded-md bg-cyan-400 opacity-0 blur-md
        transition-opacity duration-300
        ${isFlashing ? 'opacity-60' : 'opacity-30'}
      `}
                    />
                    <span className='absolute inset-0 rounded-md bg-cyan-400 opacity-20 blur-md' />
                    <span className='absolute inset-0 rounded-md border border-cyan-300 opacity-50' />
                  </a>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>

        <div>
          {/* Floating Game Elements */}
          {!isSmallScreen && (
            <div className='absolute inset-0 z-20'>
              {/* ---------- Game Image ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 8.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-[5%] top-[3em] left-[40em]'
              />

              {/* ------------ play store ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 4.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-[5%] top-[7em] left-[37em]'
              />
              {/* ------------ box store ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 3.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-[5%] top-[12em] left-[42em]'
              />
              {/* --------------- A tag Images -------------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 6.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-12 top-[16em] left-[41em]'
              />
              {/* ---------- podium image ----------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/podium.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-12 top-[19em] left-[40em] '
              />
              {/* ---------- bhalu image ----------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/download.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-12 bottom-[8em] left-[42em] '
              />
              {/* ---------- fisbi image ----------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 2.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-12 bottom-[6em] left-[40em] '
              />
              {/* ----------- Boy AI image ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 11.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-[20%] top-[7em] right-[10rem] '
              />
              {/* ---------- tekken 6 image ----------  */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/tekken-6-tekken-5-death-by-degrees-nina-williams-others-2fa654aa4f1c719b5838413c7c93bbe3.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-[14%] top-[3em] right-[22em]  '
              />
              {/* ------------- Girl Robot Image ----------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/—Pngtree—character 3d cute female police_14135026.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-8 top-[13em] right-[5em] '
              />
              <motion.img
                src='/images/Rectangle 1.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-8 top-[22em] right-[10em] '
                // animate={{ y: [0, -20, 0] }}
                // transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* -------------- Robot image ------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 10.png'
                alt='Floating Girl'
                className='absolute w-40 md:w-9 bottom-[9em] right-[9em] '
              />
              {/* <motion.img
          src='/images/Layer 4.png'
          alt='Floating Girl'
          className='absolute w-40 md:w-16 top-10 left-1/2 '
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        /> */}

              {/* <motion.img
          src='/images/Layer 11.png'
          alt='VR Woman'
          className='absolute w-40 md:w-23 top-12 right-10'
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        /> */}
              {/* ------------ 3 robot cartoon images ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/image+20.png'
                alt='Dog on Scooter'
                className='absolute w-28 w-30 md:w-23   bottom-0 left-6 '
              />

              {/* --------------- fisbi image ----------- */}
              {/* <motion.img
          src='/images/Layer 2.png'
          alt='Car'
          className='absolute w-36 md:w-23 bottom-4 right-5'
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        /> */}

              {/* --------------- car image ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/hot-wheels-png-20195.png'
                alt='Car'
                className='absolute w-[17%] bottom-[2em] right-[14em] '
              />
              {/* -------------- spider robot image ---------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/vecteezy_3d-render-of-a-friendly-robot-spider_56260625.png'
                alt='Car'
                className='absolute w-16 bottom-[5em]  right-[17em] '
              />
              {/* -------- dog bike ------- */}
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    scale: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
                animate={isHovered ? { y: 0 } : { y: [0, -20, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                src='/images/Layer 1.png'
                alt='Spider'
                className='absolute w-24 md:w-[10%] bottom-[1em] right-[23em] '
              />
              {/* <motion.img
          src='/images/Layer 2.png'
          alt='Car'
          className='absolute w-36 bottom-4 right-5'
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        /> */}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className='w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2'>
          <div className='w-1 h-3 rounded-full bg-white/70'></div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
