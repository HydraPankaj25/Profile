"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, Download } from "lucide-react"
import { motion } from "motion/react"
import { Scene3D } from "./3d-scene"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <Scene3D />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Info */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={textVariants} custom={0} className="space-y-2">
              <motion.p
                className="text-primary font-mono text-sm tracking-wider uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Full Stack Developer
              </motion.p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <TypewriterText text="Pankaj Mishra" />
              </h1>
            </motion.div>

            <motion.p
              variants={textVariants}
              custom={2}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty"
            >
              I build accessible, user-focused web applications with modern technologies. Passionate about creating
              seamless experiences that bridge design and engineering.
            </motion.p>

            <motion.div
              variants={textVariants}
              custom={3}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
            >
              <motion.a
                href="mailto:pm2582001@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>pm2582001@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+918810672258"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+91 8810672258</span>
              </motion.a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Delhi, India</span>
              </span>
            </motion.div>

            <motion.div variants={textVariants} custom={4} className="flex gap-4 pt-4">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:pm2582001@gmail.com", icon: Mail, label: "Email" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-lg bg-secondary/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group border border-border/50"
                  aria-label={item.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 border border-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Download className="w-4 h-4" />
                <span>Hire Me</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <nav className="space-y-4">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span
                    className="w-8 h-px bg-muted-foreground group-hover:bg-primary transition-all duration-300"
                    whileHover={{ width: 64 }}
                  />
                  <span className="text-sm font-medium tracking-wider uppercase">{item.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  )
}
