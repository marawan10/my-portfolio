"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Zap, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutValues() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches to solve complex problems creatively.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing that the best solutions come from diverse perspectives and teamwork.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Delivering high-quality solutions quickly without compromising on excellence.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely caring about the impact of technology on people's lives and experiences.",
      color: "from-red-500 to-pink-500"
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
            Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my work and shape my approach to software engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift group text-center">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
