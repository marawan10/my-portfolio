"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Globe, Database, Bot, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function ProjectsPreview() {
  const featuredProjects = [
    {
      id: "deepblue",
      title: "DeepBlue - Bilingual AI Learning Platform",
      description: "A production-ready bilingual (Arabic/English) AI learning platform with personalized learning paths, chatbot assistance, and comprehensive progress tracking.",
      icon: Bot,
      color: "from-blue-500 to-cyan-500",
      tech: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL"],
      features: ["Bilingual Support", "AI Chatbot", "Progress Tracking", "User Onboarding"],
      status: "In Development",
      links: {}
    },
    {
      id: "techquiz",
      title: "ITIverse - Technical Assessment Platform",
      description: "Modern, responsive MCQ assessment platform with multiple topics, real-time progress tracking, and detailed analytics for technical skill evaluation.",
      icon: HelpCircle,
      color: "from-purple-500 to-pink-500",
      tech: ["Vanilla JavaScript", "HTML5", "CSS3", "Local Storage"],
      features: ["Multiple Topics", "Real-time Timer", "Performance Analytics", "Responsive Design"],
      status: "Completed",
      image: "/assets/ITIverse.jpeg",
      links: {
        github: "https://github.com/marawan10/ITITech",
        live: "https://marawan10.github.io/ITITech/#welcome"
      }
    },
    {
      id: "homiee",
      title: "Homiee Real Estate Management System",
      description: "Comprehensive web-based platform for property transactions with dynamic price negotiation, contract management, and AI-powered assistance.",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      tech: ["ASP.NET Core", "SQL Server", "HTML/CSS/JS", "AI Chatbot"],
      features: ["Property Management", "Price Negotiation", "Contract System", "AI Assistant"],
      status: "Completed",
      image: "/assets/Homiee.jpeg",
      links: {
        live: "http://homiee.runasp.net/index.html"
      }
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, AI integration, and modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift group cursor-pointer border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === "Completed" 
                          ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    {/* Project Image */}
                    {project.image ? (
                      <div className="mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    ) : null}

                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-md">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-xs rounded-md border border-blue-500/20">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-xs rounded-md">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    {project.links.github && (
                      <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild variant="gradient" size="lg" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
