import aboutImg from '../assets/about.jpeg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>

      <div className='flex gap-2 my-20 items-center justify-center text-center text-4xl'>

        <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className=''>Introduction
        </motion.h2>

        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 1, y: -200 }} transition={{ duration: 1 }}><span className='text-neutral-500'>Myself</span>
        </motion.h2>

      </div>

      <div className='flex flex-wrap'>

        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100, }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2 lg:p8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={aboutImg} width={360} alt="aboutImg" />
          </div>
        </motion.div>

        <div className='w-full lg:w-1/2 lg:p8'>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 1, y: -200 }} transition={{ duration: 1 }} className='flex items-center justify-center'>
            <p className='my-2 max-w-xl px-6 text-justify'>{ABOUT_TEXT}</p>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default About