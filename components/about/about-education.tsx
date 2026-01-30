"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutEducation() {
  const education = {
    degree: "Bachelor of Science in Computer Science",
    university: "Minia University",
    location: "Egypt",
    graduation: "June 2025",
    achievements: [
      "Major: Computer Science | Minor: Mathematics",
      "GPA: 2.68 / 4.00",
      "Ranked 1st in Department (Major & Minor) (Class of 2025)",
      "Specialized in AI and machine learning applications"
    ]
  }

  const certifications = [
    {
      title: "Web Development Using .NET – ITI Summer Training",
      issuer: "Information Technology Institute (ITI), Egypt",
      year: "Jul – Aug 2024",
      description: "60-hour intensive program covering ASP.NET Core, web architecture, and database integration. Achieved 100% score."
    },
    {
      title: "Computer Science Graduate",
      issuer: "Minia University",
      year: "2025",
      description: "Bachelor's degree with focus on software engineering and programming"
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
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications that shaped my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Education</CardTitle>
                    <p className="text-sm text-muted-foreground">Academic Foundation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{education.degree}</h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{education.university}, {education.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Graduated: {education.graduation}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Professional Certifications</CardTitle>
                    <p className="text-sm text-muted-foreground">Industry Recognition</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="border-l-2 border-gradient-to-b from-blue-500 to-purple-500 pl-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                    <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="glass">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    I believe in lifelong learning and staying updated with the latest
                    technologies and industry best practices. Currently exploring advanced
                    AI techniques and modern web development frameworks.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
