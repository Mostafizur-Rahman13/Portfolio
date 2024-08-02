import { CONTACT } from "../constants";
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div className="border-b border-neutral-900">
      <div className="flex flex-col items-center ">
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className="my-5 text-center text-4xl">Get in Touch</motion.h2>

        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className="text-center tracking-tighter ">

          <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="my-4">{CONTACT.address}</motion.p>

          <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-4">{CONTACT.phoneNo}</motion.p>

          <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="my-4">{CONTACT.email}</motion.p>

        </motion.div>

        <div className="border-t border-neutral-800 w-full text-center">
          <motion.h6 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: - 100 }} transition={{ duration: 1 }}>© 2024 Mostafizur Rahman All rights reserved.</motion.h6>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact