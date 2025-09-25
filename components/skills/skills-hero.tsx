"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Database, Languages } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsHero() {
  const skillCategories = [
    { icon: Code2, label: "Programming", count: "5+" },
    { icon: Database, label: "Databases", count: "3+" },
    { icon: Brain, label: "AI & ML", count: "4+" },
    { icon: Languages, label: "Languages", count: "2" },
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
            Skills & <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, programming languages, 
            frameworks, and tools that I use to build innovative software solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="hover-lift text-center group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gradient mb-1">{category.count}</p>
                  <p className="text-sm text-muted-foreground">{category.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
