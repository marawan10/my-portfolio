"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Instagram, Calendar, Clock, Globe, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export function ContactInfo() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/marawanmokhtar/",
      color: "hover:text-blue-600",
      description: "Professional network"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/marawanmokhtar",
      color: "hover:text-gray-600",
      description: "Code repositories"
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/MarawanMokhtar101",
      color: "hover:text-blue-500",
      description: "Social updates"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/marawan_mokhtar10/",
      color: "hover:text-pink-500",
      description: "Behind the scenes"
    }
  ]

  const availability = [
    {
      icon: Clock,
      title: "Working Hours",
      description: "Sunday - Thursday, 9:00 AM - 6:00 PM (GMT+2)",
      note: "Flexible for urgent projects"
    },
    {
      icon: Calendar,
      title: "Availability",
      description: "Open for new projects and collaborations",
      note: "Currently accepting freelance work"
    },
    {
      icon: Globe,
      title: "Time Zone",
      description: "Egypt Standard Time (GMT+2)",
      note: "Can accommodate global meetings"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-lift h-full">
              <CardHeader>
                <CardTitle>Connect on Social Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Follow my journey, see my latest projects, and stay updated with my professional growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-auto p-4 group hover:border-primary/50"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center space-y-2"
                        >
                          <social.icon className={`w-6 h-6 transition-colors duration-200 ${social.color}`} />
                          <div className="text-center">
                            <p className="font-medium text-sm">{social.name}</p>
                            <p className="text-xs text-muted-foreground">{social.description}</p>
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Quick Connect</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="gradient" className="flex-1">
                      <a href="mailto:marawanmokhtar10@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Me
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="https://wa.me/201067453557" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <Button asChild variant="outline" className="flex-1">
                      <a href="https://www.linkedin.com/in/marawanmokhtar/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="tel:+201067453557">
                        <Clock className="w-4 h-4 mr-2" />
                        Call Me
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Availability Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover-lift h-full">
              <CardHeader>
                <CardTitle>Availability & Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm committed to clear communication and timely responses for all professional inquiries.
                </p>

                <div className="space-y-4">
                  {availability.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="text-xs text-primary font-medium">{item.note}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-sm">Response Commitment</h4>
                    <p className="text-sm text-muted-foreground">
                      I guarantee a response within 24 hours for all professional inquiries. 
                      For urgent matters, please mention "URGENT" in your subject line.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="glass max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a full-stack web application, AI integration, or technical consultation, 
                I'm here to help transform your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <a href="mailto:marawanmokhtar10@gmail.com?subject=Project Inquiry">
                    Start a Project
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/projects">
                    View My Work
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
