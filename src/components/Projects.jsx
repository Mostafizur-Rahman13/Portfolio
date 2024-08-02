import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl text-neutral-400">Projects</motion.h2>

      <div className="grid grid-cols lg:grid-cols-2 gap-x-10 items-center">
        {PROJECTS.map((project, index) => (


          <div key={index} className="mb-8  ">

            <a href={project.deploy}>
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full">
                <img width={350} height={350} className="mb-6 rounded shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" src={project.image} alt={project.title}
                />
              </motion.div>
            </a>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-600 ">{tech}</span>
              ))}
            </motion.div>
          </div>
        ))
        }
      </div >
    </div >
  )
}

export default Projects