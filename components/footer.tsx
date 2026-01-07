"use client"

import { motion } from "motion/react"
import { Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Pankaj Mishra. All rights reserved.
        </motion.p>

        <motion.p
          className="text-sm text-muted-foreground flex items-center gap-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Built with{" "}
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
            <Heart className="w-4 h-4 text-red-500 inline mx-1" fill="currentColor" />
          </motion.span>
          using <span className="text-primary ml-1">React</span>, <span className="text-primary">Next.js</span> &{" "}
          <span className="text-primary">Three.js</span>
        </motion.p>

        <motion.button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
        </motion.button>
      </div>
    </footer>
  )
}
