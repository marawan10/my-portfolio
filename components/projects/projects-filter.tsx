"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "ai", label: "AI & ML" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ]

  const technologies = [
    "Next.js", "TypeScript", "React", "Node.js", "Python", "C#", "SQL", 
    "PostgreSQL", "Tailwind CSS", "Prisma", "ASP.NET Core", "JavaScript"
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Category Filters */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="transition-all duration-300"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
