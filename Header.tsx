'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['About', 'Expertise', 'Portfolio', 'Services', 'Contact']

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed w-full z-10 glass-effect"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/" className="text-foreground text-2xl font-bold gradient-text glow">
              Portfolio
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={`#${item.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors duration-300">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden glass-effect"
      >
        {menuItems.map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-foreground hover:text-primary transition-colors duration-300">
            {item}
          </Link>
        ))}
      </motion.div>
    </motion.header>
  )
}

