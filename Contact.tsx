'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, projectType, message })
  }

  const inputVariants = {
    focus: { scale: 1.05 },
    blur: { scale: 1 }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text glow">Let's Create Something Amazing Together!</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-foreground mb-2">Name</label>
              <motion.input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-foreground bg-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary neon-border"
                required
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-foreground mb-2">Email</label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-foreground bg-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary neon-border"
                required
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectType" className="block text-foreground mb-2">Project Type</label>
              <motion.select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3 py-2 text-foreground bg-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary neon-border"
                required
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
              >
                <option value="">Select a project type</option>
                <option value="3D Modeling">3D Modeling</option>
                <option value="Animation">Animation</option>
                <option value="Web Design">Web Design</option>
                <option value="Social Media">Social Media</option>
              </motion.select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-foreground mb-2">Message</label>
              <motion.textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-foreground bg-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary neon-border"
                rows={4}
                required
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors neon-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

