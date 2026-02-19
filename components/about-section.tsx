"use client"

import { GraduationCap, Award, Code, Rocket, Download } from "lucide-react"
import { motion } from "motion/react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { label: "Years Experience", value: "2.5+", icon: Rocket },
  { label: "Projects Delivered", value: "10+", icon: Code },
  { label: "CGPA Score", value: "9.4", icon: Award },
]

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About</h2>
          <motion.div
            className="flex-1 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <motion.p
                className="text-3xl font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a Full Stack Developer with strong knowledge of modern web technologies. I'm passionate about creating
              user-focused solutions, streamlining processes, and enhancing system performance.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Currently working at{" "}
              <span className="text-foreground font-medium">Gseven Computer Business Pvt. Ltd.</span>, I collaborate
              with cross-functional teams to design and develop user-friendly interfaces, implement performance
              optimization techniques, and integrate third-party APIs to enhance website functionality.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I actively participate in agile development processes and conduct code reviews to maintain high-quality
              software solutions. My work spans frontend and backend technologies to create seamless user experiences.
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 rounded-lg bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <p className="font-medium text-foreground">BCA</p>
              <p className="text-sm text-muted-foreground">SGTBIMIT, Delhi</p>
              <p className="text-sm text-muted-foreground">Graduated 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 rounded-lg bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground">Achievement</h3>
              </div>
              <p className="font-medium text-foreground">9.4/10 CGPA</p>
              <p className="text-sm text-muted-foreground">BCA Batch Topper</p>
              <p className="text-sm text-muted-foreground">Outstanding Academic Performance</p>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              download="Pankaj-Mishra-Resume.pdf"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 cursor-pointer group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
