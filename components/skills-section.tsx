"use client"

import { motion } from "motion/react"
import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Angular", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Prisma ORM", "RESTful APIs", "ERPNext (Frappe)"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB"],
  },
  {
    name: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "Swagger API Documentation"],
  },
  {
    name: "Other Expertise",
    icon: "🚀",
    skills: [
      "Performance Optimization",
      "Debugging & Refactoring",
      "Dynamic Report Generation",
      "Tally Customization & Integration",
    ],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView()
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Skills</h2>
          <motion.div
            className="flex-1 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.03 }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 cursor-default ${
                      hoveredSkill === skill
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground text-sm">Always learning and exploring new technologies</p>
          <div className="flex justify-center gap-4 mt-4">
            {["TypeScript", "Next.js", "Docker", "AWS"].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2 text-sm rounded-full border border-dashed border-primary/50 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, borderStyle: "solid" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
