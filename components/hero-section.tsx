"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Facebook, Instagram , MapPin, Calendar, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const socialLinks = [
  { icon: Github, href: "https://github.com/marawan10", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/marawanmokhtar/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:marawanmokhtar10@gmail.com", label: "Email" },
  { icon: Facebook, href: "https://www.facebook.com/MarawanMokhtar101", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/marawan_mokhtar10", label: "Instagram" },
]

  // Fixed values to prevent hydration mismatch
  const floatingElements = [
    { id: 0, size: 120, x: 15, y: 20, duration: 25 },
    { id: 1, size: 80, x: 85, y: 70, duration: 18 },
    //{ id: 2, size: 100, x: 60, y: 10, duration: 22 },
    { id: 3, size: 90, x: 25, y: 85, duration: 20 },
    { id: 4, size: 110, x: 75, y: 45, duration: 28 },
    { id: 5, size: 70, x: 40, y: 60, duration: 15 },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        {/* Animated Background Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-2 text-sm text-muted-foreground"
              >
              

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                I'm{" "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Marwan
                </span>
                <br />
                <span className="text-3xl md:text-5xl text-muted-foreground">
                  Software Engineer
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <span> Software Engineer </span>
                  <span>•</span>
                  <span> Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span> AI Evaluator</span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                Passionate about building innovative solutions with modern technologies. 
                Currently working as an AI Coding Evaluator at Outlier.ai, providing solutions and 
                training AI models in programming, mathematics, and languages.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="gradient" size="lg" className="group">
                <Link href="/projects">
                  <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/contact">
                  Get In Touch
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="group">
                <a href="/assets/Marwan_Mokhtar.pdf" download="Marwan_Mokhtar_CV.pdf">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center space-x-6"
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <Card className="glass max-w-sm w-full hover-lift group">
              <CardContent className="p-8 text-center space-y-6">
                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <div className="w-40 h-40 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/My_Image.png"
                        alt="Marwan Mokhtar"
                        width={150}
                        height={150}
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Profile Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="space-y-3"
                >
                  <h3 className="font-bold text-xl">Marwan Mokhtar</h3>
                  <p className="text-sm text-primary font-medium">Software Engineer</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-3 h-3" />
                      <span>Al Minya, Egypt</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>Available for Projects</span>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="grid grid-cols-3 gap-4 pt-4 border-t border-border"
                >
                  <div className="text-center">
                    <p className="text-lg font-bold text-gradient">2+</p>
                    <p className="text-xs text-muted-foreground">Years Exp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gradient">10+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gradient">100%</p>
                    <p className="text-xs text-muted-foreground">Dedicated</p>
                  </div>
                </motion.div>

                <Button asChild variant="gradient" size="sm" className="w-full group">
                  <Link href="/about">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Discover More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
