"use client"

import { motion } from "framer-motion"
import { Download, FileText, Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function ExperienceSkills() {
  const professionalSkills = [
    { name: "Code Review & Quality Assurance", level: 95 },
    { name: "AI Model Evaluation", level: 90 },
    { name: "Technical Documentation", level: 90 },
    { name: "Problem Solving", level: 92 },
    { name: "Cross-functional Collaboration", level: 88 },
    { name: "Mentoring & Knowledge Sharing", level: 85 },
  ]

  const certifications = [
    {
      title: "AI Coding Evaluator Certification",
      issuer: "Outlier.ai",
      date: "2024",
      description: "Professional certification in AI model evaluation and code quality assessment"
    },
    {
      title: "Language Model Reviewer Certification", 
      issuer: "Outlier.ai",
      date: "2024",
      description: "Specialized training in language model assessment and improvement methodologies"
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
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Skills developed through professional experience and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="hover-lift h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Professional Competencies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Certifications */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="border-l-2 border-gradient-to-b from-blue-500 to-purple-500 pl-4 space-y-2"
                  >
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="glass">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Download Resume</h3>
                  <p className="text-sm text-muted-foreground">
                    Get a comprehensive overview of my experience and qualifications
                  </p>
                </div>
                <Button asChild variant="gradient" className="w-full group">
                  <a href="/assets/Marwan_Mokhtar.pdf" download="Marwan_Mokhtar_CV.pdf">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download PDF Resume
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="glass">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="font-semibold">Ready to Collaborate?</h3>
                <p className="text-sm text-muted-foreground">
                  Let's discuss how my experience can contribute to your next project
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="/contact">
                    Get In Touch
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
