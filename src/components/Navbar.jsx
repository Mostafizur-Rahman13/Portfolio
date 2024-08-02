import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const animateY = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shink-0 items-center' >
        <motion.h2
          variants={animateY(0.5)} initial="hidden" animate="visible"
          className='mx-2'>Mostafizur Rahman</motion.h2>
        {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
      </div >
      <motion.div variants={animateY(1.1)} initial="hidden" animate="visible" className='m8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/mostafizur-rahman13"><FaLinkedin /></a>
        <a href="https://github.com/Mostafizur-Rahman13"><FaGithub /></a>
        <a href="https://www.twitter.com/mostafiz.tarek"><FaSquareXTwitter /></a>
        <a href="https://www.facebook.com/mostafiz.tarek"><FaFacebook /></a>
        <a href="https://www.instagram.com/mostafiz.tarek"><FaInstagram /></a>

      </motion.div>
    </nav >
  )
}

export default Navbar