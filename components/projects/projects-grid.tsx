"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Users, Zap, Globe, Database, Bot, HelpCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover-lift group">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image/Icon Section */}
                  <div className={`relative bg-gradient-to-br ${project.color} p-12 flex items-center justify-center`}>
                    <div className="text-center space-y-6">
                      {project.image ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-40 h-40 mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={160}
                            height={160}
                            className="w-full h-full object-contain p-2"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                        >
                          <project.icon className="w-12 h-12 text-white" />
                        </motion.div>
                      )}
                      <div className="space-y-2">
                        <Badge 
                          variant="secondary" 
                          className={`${project.status === "Completed" 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                          }`}
                        >
                          {project.status}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
                            ⭐ Featured
                          </Badge>
                        )}
                      </div>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="space-y-1">
                          <p className="text-2xl font-bold text-white">{project.metrics.users}</p>
                          <p className="text-xs text-white/80">Users</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-2xl font-bold text-white">{project.metrics.completion}</p>
                          <p className="text-xs text-white/80">Complete</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-2xl font-bold text-white">{project.metrics.rating}</p>
                          <p className="text-xs text-white/80">Rating</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="p-8 space-y-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Key Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Key Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 6).map((tech, idx) => (
                            <Badge key={idx} className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 6 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.tech.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Features (First 4) */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {project.features.length > 4 && (
                            <li className="text-sm text-muted-foreground">
                              +{project.features.length - 4} more features...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-4 pt-4">
                        <Button asChild variant="gradient" className="group">
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                            <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                        {project.links.github && (
                          <Button asChild variant="outline" className="group">
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="glass max-w-2xl mx-auto">
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
