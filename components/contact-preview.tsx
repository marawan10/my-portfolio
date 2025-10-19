"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export function ContactPreview() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "marawanmokhtar10@gmail.com",
      href: "mailto:marawanmokhtar10@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 106 745 3557",
      href: "tel:+201067453557",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "+20 106 745 3557",
      href: "https://wa.me/201067453557",
      color: "from-green-600 to-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Al Minya, Egypt",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/marawanmokhtar/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/marawanmokhtar",
      color: "hover:text-gray-800 dark:hover:text-white"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/marawan_mokhtar10/",
      color: "hover:text-pink-600"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always interested in 
            new opportunities and exciting challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for a software engineer, need help with an AI project, 
                or just want to connect, I'd love to hear from you. Let's discuss how we can 
                work together to bring your ideas to life.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="hover-lift group cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 bg-gradient-to-br ${contact.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <a 
                            href={contact.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        </div>
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
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <h4 className="font-medium">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    asChild
                    variant="ghost"
                    size="icon"
                    className={`${social.color} transition-colors`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-8 glass">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Ready to Start?</h3>
                  <p className="text-muted-foreground">
                    Let's discuss your project and see how I can help bring your vision to life.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button asChild variant="gradient" size="lg" className="w-full group">
                    <Link href="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href="mailto:marawanmokhtar10@gmail.com">
                      Quick Email
                    </a>
                  </Button>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Available for freelance projects and full-time opportunities
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-600 dark:text-green-400">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
