'use client'

import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="about" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-8 text-center gradient-text glow">About Me</motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.h3 variants={itemVariants} className="text-3xl font-semibold mb-4 text-center text-primary glow">
            "Crafting Creativity Through Innovation"
          </motion.h3>
          <motion.h4 variants={itemVariants} className="text-xl mb-6 text-center text-accent">
            "Bringing Ideas to Life with Design, Animation, and Strategy"
          </motion.h4>
          <motion.p variants={itemVariants} className="text-lg mb-6 text-foreground">
            Hi, I'm Muhammad Umar, a versatile designer and creator passionate about turning concepts into stunning visuals and functional designs. I specialize in 3D modeling, animations, product design, web development, and social media management.
          </motion.p>
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-primary glow">Meet Muhammad Umar: A Visionary Designer</motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-foreground">
            I have years of experience in creative fields, blending technology and art to deliver impactful designs and innovative solutions. My approach combines meticulous attention to detail with a deep understanding of client needs to produce results that inspire and impress.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

