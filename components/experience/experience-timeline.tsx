"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Code, Brain, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ExperienceTimeline() {
  const experiences = [
    {
      id: "thought-craft",
      title: ".NET Developer / AI",
      company: "Thought Craft Egypt",
      location: "Cairo, Egypt",
      period: "Jan 2026 - Present",
      type: "Full-time",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Developing enterprise-grade applications and integrating AI tools into solutions.",
      responsibilities: [
        "Develop and maintain enterprise-grade applications using C# and .NET Core, following best practices and scalable architecture principles",
        "Integrate AI tools and LLM-powered features into internal and client-facing solutions",
        "Collaborate with cross-functional teams to analyze requirements, design features, and implement solutions",
        "Participate in code reviews and contribute to technical documentation for development processes"
      ],
      skills: ["C#", ".NET Core", "AI Integration", "LLMs", "Architecture"],
      achievements: [
        "Integrated AI tools into enterprise solutions",
        "Contributed to scalable architecture design"
      ]
    },
    {
      id: "outlier",
      title: "AI Data Trainer",
      company: "Outlier AI",
      location: "Remote (California, USA)",
      period: "Dec 2024 – Oct 2025",
      type: "Contract",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Evaluated and improved AI and language models through structured code and reasoning reviews.",
      responsibilities: [
        "Evaluated and improved AI and language models through structured code and reasoning reviews",
        "Provided high-quality feedback to enhance model clarity, accuracy, and reliability",
        "Prepared, labeled, and validated diverse datasets for machine learning",
        "Ensured consistency and compliance with data annotation standards across large-scale projects"
      ],
      skills: ["AI Model Training", "RLHF", "Code Analysis", "Data Annotation"],
      achievements: [
        "Evaluated AI models for clarity and accuracy",
        "Validated diverse datasets for machine learning"
      ]
    },
    {
      id: "education",
      title: "Computer Science Student",
      company: "Minia University",
      location: "Al Minya, Egypt",
      period: "Oct 2021 – Jun 2025",
      type: "Education",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      description: "Bachelor of Science in Computer Science. Major: Computer Science | Minor: Mathematics.",
      responsibilities: [
        "Ranked 1st in Department (Major & Minor) (Class of 2025)",
        "GPA: 2.68 / 4.00",
        "Completed coursework in algorithms, data structures, and software engineering",
        "Specialized in artificial intelligence and machine learning concepts"
      ],
      skills: ["Algorithm Design", "Data Structures", "Mathematics", "Academic Writing"],
      achievements: [
        "Ranked 1st in Department",
        "Graduated with Bachelor's Degree in Computer Science"
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
            My professional journey from computer science student to full-stack software engineer
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
