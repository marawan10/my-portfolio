"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Code, Brain, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ExperienceTimeline() {
  const experiences = [
    {
      id: "outlier-coding",
      title: "AI Coding Evaluator",
      company: "Outlier.ai",
      location: "Remote",
<<<<<<< HEAD
      period: "2024",
      type: "Contract",
=======
      period: "2024 - Present",
      type: "Full-time",
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Evaluating and improving AI-generated code across multiple programming languages and frameworks, focusing on functionality, readability, and best practices.",
      responsibilities: [
        "Review and assess AI-generated code for functionality, readability, and accuracy across various programming tasks",
        "Provide targeted feedback to improve model performance on software development prompts",
        "Collaborate with teams to refine evaluation standards and improve model alignment with human expectations",
        "Analyze code quality metrics and contribute to training data optimization",
        "Develop evaluation frameworks for different programming paradigms and languages"
      ],
      skills: ["Python", "JavaScript", "Code Review", "AI Model Evaluation", "Quality Assurance"],
      achievements: [
        "Evaluated 500+ AI-generated code samples with 95% accuracy",
        "Improved model performance by 15% through detailed feedback",
        "Developed standardized evaluation criteria for multiple programming languages"
      ]
    },
    {
      id: "outlier-language",
      title: "AI Language Model Reviewer",
      company: "Outlier.ai",
      location: "Remote", 
<<<<<<< HEAD
      period: "2024",
      type: "Contract",
=======
      period: "2024 - Present",
      type: "Full-time",
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Specializing in evaluating AI-generated content in mathematics and programming contexts, ensuring clarity, logic, and instructional value.",
      responsibilities: [
        "Evaluate AI-generated text in both math and programming contexts for accuracy and clarity",
        "Focus on clarity, logic, and instructional value of model outputs",
        "Contribute to training data pipelines with high-quality annotations and performance evaluations",
        "Analyze language model responses for technical accuracy and pedagogical effectiveness",
        "Provide bilingual evaluation support for Arabic and English content"
      ],
      skills: ["NLP", "Technical Writing", "Mathematics", "Prompt Engineering", "Bilingual Analysis"],
      achievements: [
        "Processed 1000+ language model evaluations with exceptional quality scores",
        "Contributed to significant improvements in mathematical explanation generation",
        "Established bilingual evaluation protocols for Arabic-English content"
      ]
    },
    {
      id: "education",
      title: "Computer Science Student",
      company: "Minya University",
      location: "Al Minya, Egypt",
      period: "2021 - 2025",
      type: "Education",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      description: "Comprehensive computer science education with focus on programming, mathematics, and AI fundamentals.",
      responsibilities: [
        "Completed coursework in algorithms, data structures, and software engineering",
        "Specialized in artificial intelligence and machine learning concepts",
        "Developed strong mathematical foundation including discrete mathematics and calculus",
        "Participated in programming competitions and collaborative projects",
        "Maintained excellent academic performance throughout the program"
      ],
      skills: ["Algorithm Design", "Data Structures", "Mathematics", "Research", "Academic Writing"],
      achievements: [
        "Graduated with Bachelor's Degree in Computer Science (June 2025)",
        "Specialized in AI and machine learning applications",
        "Completed multiple software engineering projects"
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
            Career <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
<<<<<<< HEAD
            My professional journey from computer science student to full-stack software engineer
=======
            My professional journey from computer science student to AI specialist
>>>>>>> a5f1d4e4e88306745a301519cac4e0bd541ae528
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 mt-6" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="hover-lift group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="space-y-1">
                        <p className="font-medium text-primary">{exp.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, 3).map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Used */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Skills & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
