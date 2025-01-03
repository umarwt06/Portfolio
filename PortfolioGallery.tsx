'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: '3D Product Render', category: '3D Modeling', image: '/placeholder.svg' },
  { id: 2, title: 'Funny YouTube Animation', category: 'Animations', image: '/placeholder.svg' },
  { id: 3, title: 'N11 Pictures Website', category: 'Web Design', image: '/placeholder.svg' },
  { id: 4, title: 'Social Media Campaign', category: 'Social Media', image: '/placeholder.svg' },
  { id: 5, title: 'Character Design', category: 'Animations', image: '/placeholder.svg' },
  { id: 6, title: 'Product Concept Art', category: '3D Modeling', image: '/placeholder.svg' },
]

export default function PortfolioGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="my-20">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text glow">Portfolio</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary glow">{project.title}</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={`project-${selectedId}`}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card p-6 rounded-lg max-w-2xl w-full m-4 shadow-xl neon-border"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary glow">{projects.find(p => p.id === selectedId)?.title}</h2>
              <Image
                src={projects.find(p => p.id === selectedId)?.image || '/placeholder.svg'}
                alt={projects.find(p => p.id === selectedId)?.title || 'Project'}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-64 mb-4"
              />
              <p className="text-card-foreground mb-4">Detailed description of the project goes here...</p>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

