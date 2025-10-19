"use client";

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Globe, Home, Zap, CheckCircle, Clock, Pause, Bot, HelpCircle, Activity, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react"

const PROJECTS_DATA = [
    // In Development Projects
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
    // Completed Projects (Ordered as specified)
    {
      id: "al-hamd",
      title: "Al-Hamd Ceramics & Porcelain Management System",
      description: "Comprehensive business management platform for a ceramics and porcelain company. Features full inventory management, advanced invoicing system, employee management, and detailed analytics with RTL Arabic support.",
      longDescription: "Al-Hamd is a production-ready business management system designed specifically for the ceramics and porcelain industry. It streamlines inventory tracking, invoicing, employee management, and provides powerful analytics tools with full Arabic language support.",
      icon: Activity,
      color: "from-amber-500 to-orange-500",
      category: ["fullstack", "backend"],
      status: "Completed",
      featured: true,
      tech: ["Next.js 14", "React 18", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "jsPDF", "Framer Motion", "React Hot Toast"],
      features: [
        "📦 Complete inventory management with meter and carton tracking",
        "🧾 Advanced invoicing system with PDF generation and printing",
        "👥 Employee management with role-based permissions and attendance tracking",
        "📊 Detailed analytics dashboard with sales reports and inventory insights",
        "🌍 Full RTL Arabic language support with bilingual interface",
        "💾 Real-time database synchronization with Supabase",
        "🖨️ Professional PDF invoice generation with Arabic support",
        "📱 Responsive design for desktop and mobile management",
        "🔐 Secure authentication and authorization system",
        "📈 Sales tracking and performance metrics"
      ],
      highlights: [
        "Production-ready system",
        "Full RTL Arabic support",
        "Real-time inventory tracking",
        "Enterprise-grade security"
      ],
      links: {
        live: "https://al-hamd.vercel.app"
      },
      images: [
        "/assets/Al-Hamd/preview.png",
        "/assets/Al-Hamd/preview 2.png",
        "/assets/Al-Hamd/dashboard.png",
        "/assets/Al-Hamd/Products.png",
        "/assets/Al-Hamd/item preview.png",
        "/assets/Al-Hamd/new invoice.jpeg",
        "/assets/Al-Hamd/invoice preview.png",
        "/assets/Al-Hamd/statistics.png",
        "/assets/Al-Hamd/Employee management.png"
      ],
      metrics: {
        users: "Active",
        completion: "100%",
        rating: "5.0/5"
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
      images: [
        "/assets/Homiee/Home.png",
        "/assets/Homiee/units preview.png",
        "/assets/Homiee/owner dashboard.png",
        "/assets/Homiee/chatbot system.png",
        "/assets/Homiee/chat system.png",
        "/assets/Homiee/Login.png",
        "/assets/Homiee/Register.png"
      ],
      metrics: {
        users: "300+",
        completion: "100%",
        rating: "4.9/5"
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
      images: [
        "/assets/Calories-Calculator/login.png",
        "/assets/Calories-Calculator/register.png",
        "/assets/Calories-Calculator/user dashboard.png",
        "/assets/Calories-Calculator/food.png",
        "/assets/Calories-Calculator/smart watch.png",
        "/assets/Calories-Calculator/reports.png",
        "/assets/Calories-Calculator/BMI Calculator.png",
        "/assets/Calories-Calculator/data.png",
        "/assets/Calories-Calculator/settings.png",
        "/assets/Calories-Calculator/admin dashboard.png",
        "/assets/Calories-Calculator/food management.png"
      ],
      metrics: {
        users: "200+",
        completion: "100%",
        rating: "4.6/5"
      }
    },
    {
      id: "siraj",
      title: "Siraj - Islamic Prayer Companion",
      description: "Comprehensive Islamic prayer companion app with daily prayer tracking, complete Quran reading, Azkar & Dhikr, analytics, and multilingual support. Built with React 18, Firebase, and modern UI/UX design.",
      longDescription: "Siraj (Arabic: سراج, meaning 'lamp' or 'light') is a comprehensive Islamic prayer companion that helps Muslims maintain their daily prayers, read the Quran, perform Azkar, and track their spiritual journey. Features beautiful glassmorphism design, real-time data, and complete offline support.",
      icon: Calendar,
      color: "from-emerald-500 to-teal-500",
      category: ["fullstack", "frontend"],
      status: "Completed",
      featured: true,
      tech: ["React 18", "Vite", "Firebase", "Firestore", "Tailwind CSS", "i18next", "Recharts", "Lucide React"],
      features: [
        "🕐 Daily Prayer Tracking: Track all five daily prayers with congregation/individual/missed status",
        "📖 Complete Quran: Full Arabic text with audio recitation and bookmarks",
        "🤲 Azkar & Dhikr: Morning, evening, prayer, and sleep supplications with digital tasbih",
        "📊 Analytics & Statistics: Beautiful charts showing spiritual progress and insights",
        "🌍 Multilingual Support: Full Arabic/English interface with proper RTL support",
        "🎨 Modern UI/UX: Responsive design with glassmorphism, dark mode, and smooth animations",
        "📱 PWA Support: Offline functionality and mobile app experience",
        "🔔 Prayer Reminders: Customizable notifications for prayer times",
        "📈 Progress Tracking: Khatma plans (1, 2, or 3 months) with detailed monitoring",
        "🔐 Secure Authentication: Firebase Auth with profile management"
      ],
      highlights: [
        "Complete Islamic companion",
        "Real-time Firebase integration",
        "Multilingual RTL/LTR support",
        "Beautiful modern UI/UX",
        "Offline PWA support"
      ],
      links: {
        github: "https://github.com/marawan10/siraj",
        live : "https://siraj-10.vercel.app/"
      },
      images: [
        "/assets/Siraj/login.png",
        "/assets/Siraj/register.png",
        "/assets/Siraj/quote preview.png",
        "/assets/Siraj/prayer tracker.png",
        "/assets/Siraj/azkar system.png",
        "/assets/Siraj/Quran pages.png",
        "/assets/Siraj/khatma system.png",
        "/assets/Siraj/support arabic & english.png",
      ],
      metrics: {
        users: "N/A",
        completion: "100%",
        rating: "N/A"
      }
    },
    {
      id: "life-blocks",
      title: "Life Blocks | مربعات الحياة",
      description: "A minimalist web app that visualizes your life as a grid of weeks, inspired by mortality awareness. Each square represents one week of your life - make them count.",
      longDescription: "Life Blocks is a modern, responsive, and philosophy-driven application that represents your lifespan as a grid of weeks. It combines Islamic wisdom, motivational quotes, and data visualization to inspire clarity, urgency, and purpose. With multiple design themes, analytics, and export features, it transforms the awareness of time into motivation for living fully.",
      icon: Calendar, // Suggested icon
      color: "from-gray-700 to-black", // Minimalist gradient
      category: ["frontend"],
      status: "Completed",
      featured: true,
      tech: [
        "HTML5",
        "CSS3",
        "Vanilla JavaScript (ES6+)",
        "LocalStorage",
        "Canvas API",
        "Google Fonts",
        "PWA Standards",
        "Vercel Serverless"
      ],
      features: [
        "📅 Interactive life grid (75 rows × 52 columns)",
        "⏳ Real-time statistics of lived/remaining weeks",
        "🟥 Current week indicator with animation",
        "🎨 Multiple visual themes: Minimal, Poster, Digital",
        "📖 25+ authentic Quranic, Hadith, and wisdom quotes",
        "🌍 Multilingual support (Arabic/English)",
        "📊 Detailed export with age, expectancy, and metrics",
        "📱 Mobile-first, touch-friendly responsive design",
        "📈 Built-in privacy-first visitor counter",
        "⚡ PWA support for standalone installation"
      ],
      highlights: [
        "Motivational concept",
        "Islamic & universal wisdom",
        "Responsive design",
        "Export functionality",
        "No external dependencies"
      ],
      links: {
        github: "https://github.com/marawan10/Life-Blocks",
        live: "https://life-blocks.vercel.app/"
      },
      images: [
        "/assets/Life-Blocks/preview.png",
        "/assets/Life-Blocks/preview calendar remaining life blocks.png",
        "/assets/Life-Blocks/quotes.png",
        "/assets/Life-Blocks/pop up message.png"
      ],
      metrics: {
        users: "N/A",
        completion: "100%",
        rating: "N/A"
      }
    },
    {
      id: "wedding-invitation",
      title: "Wedding Invitation Website",
      description: "Beautiful, responsive Arabic wedding invitation website with elegant animations, interactive elements, and comprehensive guest experience including RSVP, location maps, gift registry, and wishes collection.",
      longDescription: "An elegant and interactive wedding invitation platform designed to create memorable experiences for couples and their guests. Features beautiful RTL Arabic design, smooth animations, background music, and all essential wedding website functionalities.",
      icon: Calendar,
      color: "from-pink-500 to-rose-500",
      category: ["frontend"],
      status: "Completed",
      featured: true,
      tech: ["React 18", "Vite 6", "Tailwind CSS", "Framer Motion", "React Router", "React Helmet", "Lucide React", "React Confetti"],
      features: [
        "💍 Elegant landing page with invitation reveal animation",
        "🎵 Background music with play/pause controls",
        "🎉 Celebratory confetti animations for special moments",
        "📅 Detailed event schedule with multiple venues",
        "📍 Interactive Google Maps integration for locations",
        "✉️ RSVP system for guest response collection",
        "🎁 Digital gift registry with bank account information",
        "💬 Guest wishes collection with real-time updates",
        "🌐 Full RTL Arabic language support",
        "📱 Fully responsive design optimized for all devices",
        "⚡ PWA-ready with offline capabilities",
        "🔍 SEO optimized with meta tags and Open Graph support"
      ],
      highlights: [
        "Beautiful RTL design",
        "Interactive animations",
        "PWA support",
        "SEO optimized"
      ],
      links: {
        github: "https://github.com/marawan10/wedding-invitation",
        live: "https://wedding-invitation-ma.vercel.app"
      },
      images: [
        "/assets/Wdding-Invitation/Home.png",
        "/assets/Wdding-Invitation/preview 1 .png",
        "/assets/Wdding-Invitation/preview 2.png",
        "/assets/Wdding-Invitation/preveiw 3.png",
        "/assets/Wdding-Invitation/preview 4.png",
        "/assets/Wdding-Invitation/preview 5.png"
      ],
      metrics: {
        users: "Live",
        completion: "100%",
        rating: "4.9/5"
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
      images: [
        "/assets/ITIVerse/preview.png",
        "/assets/ITIVerse/home.png",
        "/assets/ITIVerse/test Exam.png",
        "/assets/ITIVerse/night mode.png"
      ],
      metrics: {
        users: "1000+",
        completion: "100%",
        rating: "4.7/5"
      }
    },
    // In Progress Projects
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
      images: [],
      metrics: {
        users: "N/A",
        completion: "90%",
        rating: "N/A"
      }
    },
  ]

interface ProjectsGridProps {
  searchQuery?: string
}

// Define category order - Completed first (outside component for stability)
const STATUS_ORDER: Record<string, number> = {
  "Completed": 0,
  "In Development": 1,
  "In Progress": 2,
  "Paused": 3
}

const ProjectsGridComponent = ({ searchQuery = "" }: ProjectsGridProps) => {
  // Use the static projects data
  const projects = useMemo(() => PROJECTS_DATA, [])

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects
    
    const query = searchQuery.toLowerCase()
    return projects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some(tech => tech.toLowerCase().includes(query)) ||
      project.features.some(feature => feature.toLowerCase().includes(query)) ||
      project.status.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Group projects by status
  const groupedProjects = useMemo(() => {
    const grouped = filteredProjects.reduce((acc, project) => {
      if (!acc[project.status]) {
        acc[project.status] = []
      }
      acc[project.status].push(project)
      return acc
    }, {} as Record<string, typeof PROJECTS_DATA>)
    return grouped
  }, [filteredProjects])

  // Filter out empty categories and sort with Completed first
  const categories = useMemo(() => 
    Object.entries(groupedProjects)
      .filter(([_, projects]) => (projects as typeof PROJECTS_DATA).length > 0)
      .sort(([statusA], [statusB]) => {
        const orderA = STATUS_ORDER[statusA] ?? 999
        const orderB = STATUS_ORDER[statusB] ?? 999
        return orderA - orderB
      }) as [string, typeof PROJECTS_DATA][],
    [groupedProjects]
  )

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

  const ProjectCard = memo(({ project, index }: { project: any, index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false)
    const images = project.images || []
    const hasMultipleImages = images.length > 1

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden hover-lift group bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/20 transition-all duration-300">
          {/* Image Carousel Section - Large */}
          <div 
            className="relative aspect-video bg-gradient-to-br from-muted/50 to-background cursor-pointer group/image"
            onClick={() => setIsImagePreviewOpen(true)}
          >
            {images.length > 0 ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/image:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Click to expand indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover/image:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover/image:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {images.map((_: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(idx)
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? 'bg-white w-6'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Status Badge - Top Right */}
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <Badge className="bg-black/50 backdrop-blur-sm text-white border-white/20">
                    {project.status}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-yellow-500/80 backdrop-blur-sm text-black border-yellow-400/30">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>
              </>
            ) : (
              <div className={`flex items-center justify-center h-full bg-gradient-to-br ${project.color}`}>
                <project.icon className="w-20 h-20 text-white/80" />
              </div>
            )}
          </div>

          {/* Project Content */}
          <CardContent className="p-6 flex-1 flex flex-col">
            {/* All content sections wrapped */}
            <div className="space-y-4 flex-grow">
              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold line-clamp-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 5 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 5} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.map((highlight: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons - Always at bottom */}
            <div className="flex gap-2 pt-4 mt-auto">
              {project.links.live && (
                <Button 
                  asChild 
                  variant="gradient"
                  className="flex-1 group"
                >
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    View Live
                    <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline" className="flex-1">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Image Preview Modal - Outside Card to prevent hover conflicts */}
        <AnimatePresence>
          {isImagePreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={() => setIsImagePreviewOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="relative w-[95vw] h-[95vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Large Preview`}
                  fill
                  className="object-contain"
                  sizes="95vw"
                  priority
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setIsImagePreviewOpen(false)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-3 rounded-full transition-all z-10 border border-white/20"
                  aria-label="Close preview"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation arrows in modal */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-4 rounded-full transition-all z-10 border border-white/20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-4 rounded-full transition-all z-10 border border-white/20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </>
                )}
                
                {/* Image Title Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <p className="text-white text-sm font-medium">
                    {project.title} - {currentImageIndex + 1}/{images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  })

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

              {/* Responsive Grid Layout */}
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
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

export const ProjectsGrid = memo(ProjectsGridComponent)
