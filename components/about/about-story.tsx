"use client"

import { motion } from "framer-motion"
import { Code, Brain, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutStory() {
  const journey = [
    {
      icon: Code,
      title: "Programming Foundation",
      description: "Started my journey with programming languages like Python, C++, and C#, building a strong foundation in software development principles.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Specialization",
      description: "Developed expertise in AI and machine learning, focusing on natural language processing and model evaluation techniques.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Professional Experience",
      description: "Currently working at Outlier.ai as an AI Coding Evaluator and Language Model Reviewer, contributing to AI system improvements.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Future Goals",
      description: "Focused on creating innovative software solutions that bridge the gap between AI capabilities and real-world applications.",
      color: "from-orange-500 to-red-500"
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
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a computer science student to an AI specialist, here's how my passion 
            for technology has shaped my career path.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {journey.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
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
          className="max-w-4xl mx-auto"
        >
          <Card className="glass">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">
                  What Drives Me
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gradient">Technical Excellence</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I believe in writing clean, efficient code and staying updated with the latest 
                      technologies. My experience spans from traditional programming to cutting-edge 
                      AI applications, always with a focus on quality and maintainability.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gradient">Problem Solving</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Every challenge is an opportunity to learn and grow. I approach problems 
                      systematically, combining analytical thinking with creative solutions to 
                      deliver results that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
