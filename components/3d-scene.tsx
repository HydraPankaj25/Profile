"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei"
import type * as THREE from "three"
import { useTheme } from "./theme-provider"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  const color = theme === "dark" ? "#14b8a6" : "#3b82f6"

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 100, 200]} scale={1.2}>
        <MeshDistortMaterial color={color} attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </Sphere>
    </Float>
  )
}

function FloatingParticles() {
  const points = useRef<THREE.Points>(null)
  const { theme } = useTheme()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  const color = theme === "dark" ? "#14b8a6" : "#3b82f6"

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color={color} sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  const color = theme === "dark" ? "#0d9488" : "#2563eb"

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1} position={[3, -1, -2]}>
      <mesh ref={meshRef} scale={0.5}>
        <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
        <meshStandardMaterial color={color} wireframe opacity={0.6} transparent />
      </mesh>
    </Float>
  )
}

function Octahedron() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  const color = theme === "dark" ? "#5eead4" : "#60a5fa"

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.5} position={[-3, 1, -1]}>
      <mesh ref={meshRef} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe opacity={0.5} transparent />
      </mesh>
    </Float>
  )
}

export function Scene3D() {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color={theme === "dark" ? "#14b8a6" : "#3b82f6"} />

        <AnimatedSphere />
        <FloatingParticles />
        <TorusKnot />
        <Octahedron />

        <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  )
}
