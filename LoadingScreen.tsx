'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t / 4) / 2
    meshRef.current.rotation.y = Math.sin(t / 4) / 2
    meshRef.current.rotation.z = Math.sin(t / 1.5) / 2
    meshRef.current.position.y = Math.sin(t / 1.5) / 2
    meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = Math.max(1, Math.cos(t) * 1.5)
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial color="#9400FF" attach="material" distort={0.5} speed={2} roughness={0} />
    </Sphere>
  )
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <AnimatedSphere />
      </Canvas>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold gradient-text glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
      </motion.div>
    </div>
  )
}

