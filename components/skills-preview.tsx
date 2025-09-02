"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Database, Brain, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function SkillsPreview() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python (90%)", "C# (100%)", "C++ (80%)", "TypeScript", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Databases & Backend",
      skills: ["SQL (100%)", "PostgreSQL", "ASP.NET Core", "Node.js", "Prisma"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["NLP (85%)", "Model Evaluation (90%)", "Prompt Engineering (88%)", "AI Chatbots"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Languages,
      title: "Languages & Communication",
      skills: ["English (95%)", "Arabic (100%)", "Technical Writing (90%)"],
      color: "from-orange-500 to-red-500"
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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                        {skill}
                      </li>
                    ))}
                    {category.skills.length > 3 && (
                      <li className="text-sm text-muted-foreground">
                        +{category.skills.length - 3} more...
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/skills">
              View All Skills
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
