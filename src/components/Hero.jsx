import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.png"
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0, opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex  items-center flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">

            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="uppercase pb-16 text-4xl font-thin tracking-tighter md:text-6xllg:mt-16 lg:text-7xl">Mostafizur Rahman</motion.h1>

            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-600 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent">Full Stack Developer</motion.span>

            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 mx-w-xl py-6 font-mono tracking-tighter text-justify">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:p-8">
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="w-[360px] rounded-lg shadow-purple-500 shadow-lg">
            <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="rounded-lg" src={profilePic} alt="Mostafiz" />
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Hero;