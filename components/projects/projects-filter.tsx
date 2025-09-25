"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

<<<<<<< HEAD
  const statusFilters = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "completed", label: "Completed", icon: "✅" },
    { id: "development", label: "In Development", icon: "⚡" },
    { id: "progress", label: "In Progress", icon: "🕒" },
    { id: "paused", label: "Paused", icon: "⏸️" },
=======
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "ai", label: "AI & ML" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
  ]

  const technologies = [
    "Next.js", "TypeScript", "React", "Node.js", "Python", "C#", "SQL", 
<<<<<<< HEAD
    "PostgreSQL", "Tailwind CSS", "Prisma", "ASP.NET Core", "JavaScript",
    "Framer Motion", "shadcn/ui", "Entity Framework", "Bootstrap"
  ]

  const scrollToCategory = (status: string) => {
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

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
=======
    "PostgreSQL", "Tailwind CSS", "Prisma", "ASP.NET Core", "JavaScript"
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
          className="space-y-6 sm:space-y-8"
        >
          {/* Status Filters */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Jump to Category</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {statusFilters.map((filter) => (
=======
          className="space-y-8"
        >
          {/* Category Filters */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
<<<<<<< HEAD
                  onClick={() => {
                    setActiveFilter(filter.id)
                    scrollToCategory(filter.id)
                  }}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">{filter.icon}</span>
=======
                  onClick={() => setActiveFilter(filter.id)}
                  className="transition-all duration-300"
                >
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Technologies I Use</h3>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto px-4">
=======
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:shadow-lg"
=======
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD

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
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </motion.div>
=======
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
        </motion.div>
      </div>
    </section>
  )
}
