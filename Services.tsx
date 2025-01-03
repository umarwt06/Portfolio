'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: "Custom 3D Modeling",
    description: "Tailored 3D models for products and industries, bringing your concepts to life with precision and creativity."
  },
  {
    title: "2D Animation",
    description: "Funny and engaging 2D animation videos for YouTube or promotional content, perfect for captivating your audience."
  },
  {
    title: "Website Design & Development",
    description: "Unique website design and development tailored to your needs, ensuring a seamless user experience and stunning visuals."
  },
  {
    title: "Social Media Management",
    description: "Comprehensive social media strategies and content creation to enhance your brand's growth and engagement."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center gradient-text glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg shadow-lg neon-border"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary glow">{service.title}</h3>
              <p className="text-card-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

