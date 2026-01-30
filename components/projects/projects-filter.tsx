"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const statusFilters = [
  { id: "all", label: "All Projects", icon: "🎯" },
  { id: "completed", label: "Completed", icon: "✅" },
  { id: "development", label: "In Development", icon: "⚡" },
  { id: "progress", label: "In Progress", icon: "🕒" },
  { id: "paused", label: "Paused", icon: "⏸️" },
]

const allTags = [
  // Backend & Core (.NET Focus)
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Entity Framework",
  "SQL Server",
  "Web API",
  "LINQ",
  "Microservices",
  "SQL",
  "PostgreSQL",
  "Python",
  // Frontend
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "shadcn/ui",
  "Bootstrap",
  "Prisma"
]

function scrollToCategory(status: string) {
  if (status === "all") {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const categoryMap: { [key: string]: string } = {
    "completed": "Completed",
    "development": "In Development",
    "progress": "In Progress",
    "paused": "Paused"
  }

  const targetStatus = categoryMap[status]
  const element = document.querySelector(`[data-category="${targetStatus}"]`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleFilterClick(event: React.MouseEvent<HTMLButtonElement>, filterId: string) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('[data-filter-button]')
  buttons.forEach(btn => {
    btn.classList.remove('bg-primary', 'text-primary-foreground')
    btn.classList.add('border', 'border-input', 'bg-background')
  })

  // Add active class to clicked button
  const target = event.currentTarget
  target.classList.remove('border', 'border-input', 'bg-background')
  target.classList.add('bg-primary', 'text-primary-foreground')

  // Scroll to category
  scrollToCategory(filterId)
}

export function ProjectsFilter() {

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Status Filters */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Jump to Category</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {statusFilters.map((filter, index) => (
                <button
                  key={filter.id}
                  data-filter-button
                  onClick={(e) => handleFilterClick(e, filter.id)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 h-9 px-3 ${index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                    }`}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto px-4">
              {allTags.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:shadow-lg"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
