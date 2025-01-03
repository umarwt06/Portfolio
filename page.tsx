'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import ExpertiseSection from './components/ExpertiseSection'
import PortfolioGallery from './components/PortfolioGallery'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="min-h-screen bg-gradient-to-br from-background via-secondary to-background"
        >
          <Header />
          <main className="container mx-auto px-4 py-8">
            <About />
            <ExpertiseSection
              title="3D Modeling & Product Design"
              description="I specialize in creating detailed and lifelike 3D models for diverse industries, with expertise in designing commercial products and animations."
              skills={["Detailed 3D modeling", "Product design", "Concept art", "Rendering"]}
            />
            <ExpertiseSection
              title="Animations"
              description="I'm specialized in creating funny 2D animations and storytelling for YouTube and other platforms, crafting immersive and dynamic animated experiences."
              skills={["2D animation", "Character design", "Storyboarding", "Motion graphics"]}
            />
            <ExpertiseSection
              title="Web Designing & Development"
              description="I build cutting-edge websites with sleek designs and seamless user experiences, ensuring responsive designs across all devices."
              skills={["HTML", "CSS", "JavaScript", "Webflow", "Responsive design"]}
            />
            <ExpertiseSection
              title="Social Media Management"
              description="I create comprehensive strategies to grow your brand presence, including high-quality graphics and content tailored for engagement."
              skills={["Content strategy", "Social media marketing", "Graphic design", "Analytics"]}
            />
            <PortfolioGallery />
            <Services />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

