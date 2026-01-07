"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp, Folder, Github } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    company: "Gseven Computer Business Pvt. Ltd.",
    projects: [
      {
        name: "BK Sales (Enterprise-Scale Business Platform)",
        description:
          "Managing the entire full-stack development lifecycle, from frontend to backend, ensuring smooth project operations.",
        highlights: [
          "Improved mailing system by integrating Google Service APIs for reliable communication",
          "Enhanced report generation modules for accurate and dynamic business insights",
          "Conducted bug fixing and code refactoring for system stability",
          "Utilized Swagger for API documentation",
        ],
        tech: ["Svelte", "Node.js", "Prisma", "MySQL"],
      },
      {
        name: "ERPNext Customization (Frappe Framework)",
        description:
          "Lead developer building multiple modules from scratch including HR management, Ticketing System, FMS, and Inventory Management.",
        highlights: [
          "Designed and customized workflows in ERPNext for business process alignment",
          "Contributed to Tally partnership by supporting sales and customizations",
          "Delivered end-to-end development from backend logic to UI customization",
        ],
        tech: ["Frappe", "ERPNext", "Python", "JavaScript"],
      },
      {
        name: "Flow Management System",
        description: "Enhanced project performance and scalability by optimizing backend logic and refactoring code.",
        highlights: [
          "Developed backend services using Node.js (Express), Prisma ORM, and MySQL",
          "Implemented Swagger documentation for REST APIs",
          "Contributed to backend architecture design for scalable solutions",
        ],
        tech: ["Node.js", "Express", "Prisma", "MySQL", "Swagger"],
      },
    ],
  },
  {
    company: "PimSoftech Pvt. Ltd.",
    projects: [
      {
        name: "CA Firm ERP",
        description: "Built a comprehensive ERP system for CA firms with multi-role access management.",
        highlights: [
          "Multi-role access management (Super Admin, CA Firm, Taxpayer) with secure authentication",
          "Client & document management features improving CA firm productivity",
          "Designed ERP workflows for seamless CA-taxpayer interaction",
        ],
        tech: ["React", "Express.js", "MySQL", "REST APIs"],
      },
      {
        name: "Real Estate Platform",
        description: "Full-stack application to simplify property listings, transactions, and communications.",
        highlights: [
          "Multi-role access for users, agents, executives, and superadmins",
          "Automated property management processes",
          "Improved user transparency and efficiency",
        ],
        tech: ["Angular 16", "Node.js", "MySQL"],
      },
      {
        name: "Web App for Electrical Solutions",
        description: "Platform for users to download technical documentation of electrical products.",
        highlights: [
          "Built platform for electrical, lighting, and earthing system documentation",
          "Integrated service request module reducing response time",
          "Improved customer service efficiency",
        ],
        tech: ["React", "Node.js", "MySQL"],
      },
    ],
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView()
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Projects</h2>
          <motion.div
            className="flex-1 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="space-y-12">
          {projects.map((company, companyIndex) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + companyIndex * 0.2 }}
            >
              <motion.h3
                className="text-lg font-semibold text-primary mb-6 flex items-center gap-2"
                whileHover={{ x: 10 }}
              >
                <Folder className="w-5 h-5" />
                {company.company}
              </motion.h3>

              <div className="grid gap-6">
                {company.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + companyIndex * 0.2 + projectIndex * 0.1 }}
                    onHoverStart={() => setHoveredProject(project.name)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group relative"
                  >
                    <AnimatePresence>
                      {hoveredProject === project.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg"
                        />
                      )}
                    </AnimatePresence>

                    <motion.div
                      className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <motion.h4
                              className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                              layoutId={`title-${project.name}`}
                            >
                              {project.name}
                            </motion.h4>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: hoveredProject === project.name ? 1 : 0, x: 0 }}
                              className="flex gap-2"
                            >
                              <ExternalLink className="w-4 h-4 text-muted-foreground" />
                              <Github className="w-4 h-4 text-muted-foreground" />
                            </motion.div>
                          </div>
                          <p className="text-muted-foreground mb-4">{project.description}</p>

                          <motion.button
                            onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-4"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {expandedProject === project.name ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Hide details
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Show details
                              </>
                            )}
                          </motion.button>

                          <AnimatePresence>
                            {expandedProject === project.name && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-2 mb-4 overflow-hidden"
                              >
                                {project.highlights.map((highlight, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-muted-foreground"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    <motion.span
                                      className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: i * 0.05 }}
                                    />
                                    <span>{highlight}</span>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
