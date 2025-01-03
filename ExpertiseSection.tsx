'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ExpertiseSectionProps {
  title: string;
  description: string;
  skills: string[];
}

export default function ExpertiseSection({ title, description, skills }: ExpertiseSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="my-20"
    >
      <h2 className="text-3xl font-bold mb-6 gradient-text glow">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-card p-6 rounded-lg shadow-lg neon-border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary glow">Overview</h3>
          <p className="text-card-foreground">{description}</p>
        </motion.div>
        <motion.div
          className="bg-card p-6 rounded-lg shadow-lg neon-border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary glow">Skills</h3>
          <ul className="list-disc list-inside text-card-foreground">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      {isHovered && (
        <motion.div
          className="mt-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hover over skills to see more details!
        </motion.div>
      )}
    </motion.section>
  )
}

