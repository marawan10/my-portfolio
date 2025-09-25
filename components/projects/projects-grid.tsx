"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe, Home, Zap, CheckCircle, Clock, Pause, Bot, HelpCircle, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef } from "react"

export function ProjectsGrid() {
  const projects = [
    {
      id: "deepblue",
      title: "DeepBlue - Bilingual AI Learning Platform",
      description: "A production-ready bilingual (Arabic/English) AI learning platform built with Next.js, TypeScript, and Prisma. Features personalized learning paths, AI chatbot assistance, comprehensive progress tracking, and modern UI components.",
      longDescription: "DeepBlue represents the future of personalized education technology. This comprehensive platform combines cutting-edge AI with intuitive design to create an immersive learning experience that adapts to each user's needs and preferences.",
      icon: Bot,
      color: "from-blue-500 to-cyan-500",
      category: ["fullstack", "ai"],
      status: "In Development",
      featured: true,
      tech: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS"],
      features: [
        "🌍 Full bilingual support (Arabic/English) with RTL & LTR layouts",
        "🤖 AI-powered chatbot for personalized learning assistance",
        "📚 Comprehensive content management with videos, courses, and articles",
        "🎯 Adaptive learning paths based on user assessment and preferences"
      ],
      highlights: [
        "Production-ready architecture",
        "Bilingual internationalization",
        "AI integration",
        "Modern tech stack"
      ],
      links: {
        github: "https://github.com/marawan10/deeb-blue",
        live: "https://deep-blue-xi.vercel.app"
      },
      metrics: {
        users: "500+",
        completion: "85%",
        rating: "4.8/5"
      }
    },
    {
      id: "techquiz",
      title: "ITIverse - Technical Assessment Platform",
      description: "Modern, responsive MCQ assessment platform built with Vanilla JavaScript, HTML5, and CSS3. Features multiple programming topics, real-time progress tracking, detailed analytics, and customizable exam configurations.",
      longDescription: "ITIverse is a comprehensive technical assessment platform designed to evaluate programming skills across multiple domains. Built with performance and user experience in mind, it provides a seamless testing environment for both candidates and evaluators.",
      icon: HelpCircle,
      color: "from-purple-500 to-pink-500",
      category: ["frontend"],
      status: "Completed",
      featured: true,
      tech: ["Vanilla JavaScript", "HTML5", "CSS3", "Local Storage", "Responsive Design", "CSS Animations", "DOM Manipulation"],
      features: [
        "📚 Multiple programming topics: HTML, CSS, JavaScript, SQL, OOP, C Programming",
        "🎨 Modern, responsive UI with smooth animations and transitions",
        "⏱️ Customizable exam configuration with time limits and question counts",
        "🔄 Real-time progress tracking with live timer and completion status",
        "📊 Comprehensive performance analytics and detailed result breakdown",
        "💾 Persistent data storage using browser's local storage",
        "📱 Fully responsive design optimized for desktop, tablet, and mobile",
        "🎯 Difficulty level selection and adaptive question distribution",
        "📈 Historical performance tracking and improvement suggestions",
        "🏆 Achievement system with badges and milestones"
      ],
      highlights: [
        "Zero dependencies",
        "Lightweight & fast",
        "Offline capability",
        "Mobile-first design"
      ],
      links: {
        github: "https://github.com/marawan10/ITITech",
        live: "https://marawan10.github.io/ITITech/#welcome"
      },
      image: "/assets/ITIverse.jpeg",
      metrics: {
        users: "1000+",
        completion: "100%",
        rating: "4.7/5"
      }
    },
    {
      id: "calories-tracker",
      title: "Calories Tracker - Nutrition Management Platform",
      description: "A comprehensive nutrition tracking application with React frontend and Node.js backend. Features user authentication, calorie tracking, nutrition analysis, progress visualization, and export functionality for PDF/DOCX reports.",
      longDescription: "Calories Tracker is a full-stack nutrition management platform that helps users monitor their daily caloric intake and maintain healthy eating habits. Built with modern technologies, it provides a complete solution for nutrition tracking with beautiful visualizations and comprehensive reporting.",
      icon: Activity,
      color: "from-orange-500 to-red-500",
      category: ["fullstack", "backend"],
      status: "Completed",
      featured: true,
      tech: ["React 18", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Vite", "Tailwind CSS", "Chart.js", "Framer Motion"],
      features: [
        "🔐 Secure user authentication and registration system",
        "📊 Comprehensive calorie tracking and nutrition analysis",
        "📈 Interactive charts and progress visualization with Chart.js",
        "📄 Export functionality for PDF and DOCX reports",
        "🎨 Modern, responsive UI with Tailwind CSS and Framer Motion",
        "🔄 Real-time data updates and notifications",
        "📱 Mobile-friendly responsive design",
        "🍎 Extensive food database with nutritional information",
        "📊 BMI calculator and health metrics tracking",
        "👤 User profile management and goal setting"
      ],
      highlights: [
        "Full-stack architecture",
        "Data visualization",
        "Export functionality",
        "Modern UI/UX"
      ],
      links: {
        github: "https://github.com/marawan10/calories-tracker",
        live: "https://calories-tracker-6oiu.vercel.app"
      },
      image: "/assets/calories-calculator.png",
      metrics: {
        users: "200+",
        completion: "100%",
        rating: "4.6/5"
      }
    },
    {
      id: "homiee",
      title: "Homiee Real Estate Management System",
      description: "Comprehensive web-based platform for property transactions built with ASP.NET Core and SQL Server. Features dynamic price negotiation, contract management, secure authentication, and AI-powered chatbot assistance.",
      longDescription: "Homiee revolutionizes real estate management by providing a complete digital solution for property transactions. From listing management to contract finalization, every aspect of the real estate process is streamlined and automated.",
      icon: Home,
      color: "from-green-500 to-emerald-500",
      category: ["fullstack", "backend"],
      status: "Completed",
      featured: true,
      tech: ["ASP.NET Core", "SQL Server", "Entity Framework", "HTML5", "CSS3", "JavaScript", "Bootstrap", "AI Chatbot Integration"],
      features: [
        "🏠 Comprehensive property listing and management system",
        "💰 Dynamic price negotiation with automated offer tracking",
        "📋 Digital contract management and e-signature integration",
        "👥 Role-based user authentication and authorization system",
        "🤖 AI-powered chatbot for customer support and assistance",
        "💬 Real-time messaging system between buyers and sellers",
        "📊 Advanced analytics dashboard for market insights",
        "🔍 Intelligent property search with filters and recommendations",
        "📱 Mobile-responsive design for on-the-go access",
        "🔒 Secure payment processing and transaction management"
      ],
      highlights: [
        "Enterprise-grade security",
        "AI integration",
        "Real-time features",
        "Scalable architecture"
      ],
      links: {
        live: "http://homiee.runasp.net/index.html"
      },
      image: "/assets/Homiee.jpeg",
      metrics: {
        users: "300+",
        completion: "100%",
        rating: "4.9/5"
      }
    },
    // ...existing code...
    {
      id: "matchee",
      title: "Matchee ⚽ - Live Football Tracking Platform",
      description: "A modern, powerful live match tracking platform with real-time updates, PWA support, multilingual interface, and advanced analytics. Built to rival YallaShot and 365Score. 90% completed.",
      longDescription: "Matchee is a comprehensive football live match tracking platform featuring real-time updates, beautiful UI/UX, dark/light mode, interactive animations, and advanced analytics. Designed for mobile-first use, it offers personalization, notifications, and a cutting-edge experience.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      category: ["frontend", "fullstack"],
      status: "In Progress",
      featured: true,
      tech: [
        "Next.js 14",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Framer Motion",
        "Lucide React",
        "API-Football",
        "Glassmorphism",
        "Neumorphism"
      ],
      features: [
        "⚽ Live Match Tracking with animated updates",
        "🎨 Beautiful UI/UX with smooth, engaging interactions",
        "🌗 Dark/Light Mode with seamless transitions",
        "🎉 Interactive Animations for goals, cards, and scores",
        "📱 Responsive mobile-first design",
        "🔔 Real-time updates via WebSocket & polling fallback",
        "⭐ Personalization: favorite teams, custom feeds, notifications",
        "🌍 Multilingual interface",
        "📊 Advanced analytics dashboard",
        "🖼️ Glassmorphism & Neumorphism design effects"
      ],
      highlights: [
        "Real-time football coverage",
        "PWA support",
        "Advanced UI/UX",
        "Mobile-first design"
      ],
      links: {
        github: "https://github.com/marawan10/Matchee"
      },
      image: "/assets/Matchee.png",
      metrics: {
        users: "N/A",
        completion: "90%",
        rating: "N/A"
      }
    },
  ]

  // Group projects by status
  const groupedProjects = {
    "Completed": projects.filter(p => p.status === "Completed"),
    "In Development": projects.filter(p => p.status === "In Development"),
    "In Progress": projects.filter(p => p.status === "In Progress"),
    "Paused": projects.filter(p => p.status === "Paused")
  }

  // Filter out empty categories
  const categories = Object.entries(groupedProjects).filter(([_, projects]) => projects.length > 0)

  const getCategoryIcon = (status: string) => {
    switch (status) {
      case "Completed": return CheckCircle
      case "In Development": return Zap
      case "In Progress": return Clock
      case "Paused": return Pause
      default: return CheckCircle
    }
  }

  const getCategoryColor = (status: string) => {
    switch (status) {
      case "Completed": return "from-green-500 to-emerald-500"
      case "In Development": return "from-blue-500 to-cyan-500"
      case "In Progress": return "from-yellow-500 to-orange-500"
      case "Paused": return "from-gray-500 to-slate-500"
      default: return "from-green-500 to-emerald-500"
    }
  }

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-80 sm:w-96"
    >
      <Card className="h-full overflow-hidden hover-lift group bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/20 transition-all duration-300">
        {/* Project Header with Image/Icon */}
        <div className={`relative bg-gradient-to-br ${project.color} p-6 text-center`}>
          {project.image ? (
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="w-full h-32 sm:h-36 mx-auto rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 max-w-[95%]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-contain p-2"
              />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <project.icon className="w-10 h-10 text-white" />
            </motion.div>
          )}
          
          <div className="mt-4 space-y-2">
            <Badge 
              variant="secondary" 
              className="bg-white/20 text-white border-white/30"
            >
              {project.status}
            </Badge>
            {project.featured && (
              <Badge className="bg-yellow-400/20 text-yellow-100 border-yellow-400/30">
                ⭐ Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Project Content */}
        <CardContent className="p-6 space-y-4">
          <div>
            <CardTitle className="text-lg mb-2 line-clamp-2">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="flex justify-center">
            <div className="bg-muted/30 rounded-lg px-4 py-3 text-center">
              <p className="text-sm font-bold">{project.metrics.completion}</p>
              <p className="text-xs text-muted-foreground">Complete</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 4).map((tech: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tech.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            {project.links.live && (
              <Button asChild size="sm" variant="gradient" className="flex-1 group">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-3 h-3 mr-1" />
                  Live
                  <ExternalLink className="w-2 h-2 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="space-y-12 lg:space-y-16">
        {categories.map(([status, categoryProjects], categoryIndex) => {
          const CategoryIcon = getCategoryIcon(status)
          const categoryColor = getCategoryColor(status)
          
          return (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-6"
              data-category={status}
            >
              {/* Category Header */}
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColor}`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{status}</h2>
                    <p className="text-muted-foreground">
                      {categoryProjects.length} project{categoryProjects.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Horizontal Scrolling Projects */}
              <div className="relative">
                <div className="overflow-x-auto no-scrollbar">
                  <div className="flex gap-6 px-4 sm:px-6 lg:px-8 pb-4">
                    {categoryProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="bg-gradient-to-l from-background via-background/80 to-transparent w-20 h-full flex items-center justify-end pr-4">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-muted-foreground"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Card className="glass max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to collaborate on new projects and bring innovative ideas to life. 
                Let's discuss how we can work together to create something amazing.
              </p>
              <Button asChild variant="gradient" size="lg">
                <a href="/contact">
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
