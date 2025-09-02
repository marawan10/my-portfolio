"use client"

import { motion } from "framer-motion"
import { Code2, Database, Brain, Languages, Globe, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsGrid() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90, description: "Data science, AI/ML, backend development" },
        { name: "C#", level: 100, description: "ASP.NET Core, desktop applications" },
        { name: "C++", level: 80, description: "System programming, algorithms" },
        { name: "TypeScript", level: 85, description: "Full-stack web development" },
        { name: "JavaScript", level: 85, description: "Frontend and Node.js development" },
      ]
    },
    {
      icon: Database,
      title: "Databases & Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "SQL", level: 100, description: "Complex queries, optimization, design" },
        { name: "PostgreSQL", level: 85, description: "Advanced features, performance tuning" },
        { name: "SQL Server", level: 90, description: "Enterprise applications, SSMS" },
        { name: "Prisma ORM", level: 80, description: "Type-safe database access" },
        { name: "Entity Framework", level: 85, description: "Code-first, migrations" },
      ]
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React", level: 85, description: "Hooks, context, performance optimization" },
        { name: "Next.js", level: 88, description: "SSR, SSG, App Router, deployment" },
        { name: "Tailwind CSS", level: 90, description: "Responsive design, custom components" },
        { name: "HTML5/CSS3", level: 95, description: "Semantic markup, modern CSS" },
        { name: "Responsive Design", level: 90, description: "Mobile-first, cross-browser" },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git", level: 85, description: "Version control, collaboration" },
        { name: "Docker", level: 70, description: "Containerization, deployment" },
        { name: "Vercel", level: 80, description: "Deployment, serverless functions" },
        { name: "VS Code", level: 95, description: "Extensions, debugging, productivity" },
        { name: "Postman", level: 85, description: "API testing, documentation" },
      ]
    },
    {
      icon: Languages,
      title: "Languages & Communication",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "English", level: 95, description: "Professional communication, documentation" },
        { name: "Arabic", level: 100, description: "Native language, technical translation" },
        { name: "Technical Writing", level: 90, description: "Documentation, tutorials, blogs" },
        { name: "Code Review", level: 85, description: "Quality assurance, mentoring" },
        { name: "Project Management", level: 75, description: "Planning, coordination, delivery" },
      ]
    }
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
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdown of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
