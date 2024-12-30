import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/my image.jpg"
              alt="Piyush Agarwal"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Hi, I’m Dinesh Kottakota, an aspiring Full Stack Developer passionate about crafting innovative and efficient digital solutions. With a strong foundation in both frontend and backend development, I enjoy exploring new technologies and solving complex problems.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            As a student, I actively contribute to open-source projects and strive to enhance my skills. Whether it's designing intuitive user interfaces or developing scalable backend systems, I’m dedicated to learning, growing, and sharing knowledge with the developer community.
            </motion.p>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
