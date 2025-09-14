"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.05
      ref.current.rotation.y = clock.getElapsedTime() * 0.075
    }
  })

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </points>
  )
}

const FloatingGeometry = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.3
      ref.current.rotation.y = clock.getElapsedTime() * 0.2
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.5
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color="#14b8a6" wireframe opacity={0.3} transparent />
    </mesh>
  )
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <ParticleField />
        
        <FloatingGeometry position={[-4, 2, -5]} />
        <FloatingGeometry position={[4, -2, -3]} />
        <FloatingGeometry position={[-2, -1, -8]} />
        <FloatingGeometry position={[3, 3, -6]} />
      </Canvas>
    </div>
  )
}

export default ThreeBackground