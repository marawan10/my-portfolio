"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactHero() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "marawanmokhtar10@gmail.com",
      href: "mailto:marawanmokhtar10@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 106 745 3557",
      href: "tel:+201067453557",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Al Minya, Egypt",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? I'm always excited to discuss
            new opportunities, innovative ideas, and ways to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="hover-lift text-center group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <p className="text-sm text-muted-foreground break-words">{method.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">What I Can Help With</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-medium text-gradient">Development Services</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enterprise Software Development (.NET)</li>
                    <li>• AI-Enhanced Full-Stack Solutions</li>
                    <li>• Backend Architecture & API Design</li>
                    <li>• Database Optimization & Cloud Integration</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gradient">Collaboration</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Technical mentoring</li>
                    <li>• Project partnerships</li>
                    <li>• Freelance opportunities</li>
                    <li>• Open source contributions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
