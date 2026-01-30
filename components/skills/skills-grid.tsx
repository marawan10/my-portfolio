"use client"

import { motion } from "framer-motion"
import { Code2, Database, Brain, Languages, Globe, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsGrid() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Core Technologies",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C# & .NET 8", description: "Advanced language features, performance optimization" },
        { name: "ASP.NET Core Web API", description: "RESTful services, Middleware, Authentication" },
        { name: "Entity Framework Core", description: "Code-first, LINQ, performance tuning" },
        { name: "Microservices", description: "Distributed systems, Message Queues (RabbitMQ)" },
        { name: "System Architecture", description: "Clean Architecture, DDD, SOLID Principles" },
      ]
    },
    {
      icon: Database,
      title: "Data & Cloud",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "SQL Server", description: "Complex queries, Stored Procedures, Indexing" },
        { name: "PostgreSQL", description: "Relational database management" },
        { name: "Redis", description: "Caching strategies, Pub/Sub" },
        { name: "Azure", description: "App Services, Azure functions, Blob Storage" },
        { name: "Docker", description: "Containerization, Docker Compose" },
      ]
    },
    {
      icon: Globe,
      title: "Modern Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React & Next.js", description: "Server Components, Hooks, State Management" },
        { name: "TypeScript", description: "Type safety, Interfaces, Generics" },
        { name: "Tailwind CSS", description: "Responsive design, Modern styling" },
        { name: "State Management", description: "Redux Toolkit, Context API, React Query" },
        { name: "UI/UX", description: "Responsive layouts, Framer Motion" },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Practices",
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "Git & GitHub", description: "Version control, CI/CD Actions" },
        { name: "Testing", description: "xUnit, Moq, Integration Testing" },
        { name: "Agile/Scrum", description: "Jira, Sprint planning, Daily standups" },
        { name: "Code Quality", description: "Code reviews, SonarQube, Documentation" },
        { name: "Security", description: "OAuth2, JWT, IdentityServer" },
      ]
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset focused on building scalable enterprise solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-muted hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group flex items-start justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
