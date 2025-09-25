"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Brain, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function AboutPreview() {
  const stats = [
    { icon: Code, label: "Years Experience", value: "3+" },
    { icon: Brain, label: "Programming Languages", value: "5+" },
    { icon: Users, label: "Projects Completed", value: "10+" },
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Computer Science graduate with expertise in full-stack development, 
            modern web technologies, and software engineering practices.
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
              <h3 className="text-2xl font-semibold">Full-Stack Software Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science graduate from Minya University with a strong foundation 
                in mathematics and programming. I have experience working with AI model evaluation 
                and specialize in building modern web applications and software solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans full-stack development, modern web technologies, and creating 
                innovative software solutions. I'm passionate about building scalable, 
                user-centric applications that solve real-world problems.
              </p>
            </div>

            <Button asChild variant="gradient" className="group">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="hover-lift glow-effect group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
