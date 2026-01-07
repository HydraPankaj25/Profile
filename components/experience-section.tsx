"use client"

import { Briefcase, ArrowUpRight, Calendar, MapPin } from "lucide-react"
import { motion } from "motion/react"
import { useInView } from "@/hooks/use-in-view"

const experiences = [
  {
    company: "Gseven Computer Business Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Azadpur, Delhi",
    period: "04/2025 - Present",
    highlights: [
      "Collaborated with cross-functional teams to design and develop user-friendly interfaces",
      "Implemented performance optimization techniques to enhance website speed and responsiveness",
      "Utilized both frontend and backend technologies to create seamless user experiences",
      "Conducted code reviews and provided constructive feedback to improve code quality",
      "Integrated third-party APIs to enhance website functionality",
      "Actively participated in agile development processes to deliver high-quality software solutions",
    ],
  },
  {
    company: "PimSoftech Pvt. Ltd.",
    role: "Developer Executive",
    location: "Gurgaon, Haryana",
    period: "09/2023 - 04/2025",
    highlights: [
      "Conducted in-depth code reviews and refactoring to enhance application performance",
      "Collaborated with stakeholders to define and prioritize project requirements",
      "Implemented database optimization strategies to ensure data integrity and performance",
      "Led cross-functional teams in the seamless integration of new features",
      "Communicated technical specifications to clients to align with business goals",
      "Achieved a 25% reduction in load times through optimization efforts",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Experience</h2>
          <motion.div
            className="flex-1 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.3 }}
                />

                <motion.div
                  className="md:ml-20 p-6 sm:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Briefcase className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-muted-foreground">{exp.company}</span>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.span
                      className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + i * 0.05 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"
                          whileHover={{ scale: 2 }}
                        />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
