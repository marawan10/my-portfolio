"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceHero() {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "1+" },
    { icon: Award, label: "Roles", value: "2" },
    { icon: Calendar, label: "Available", value: "2025" },
    { icon: MapPin, label: "Location", value: "Remote" },
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
            Professional <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey in software engineering, from academic foundations
            to professional experience in full-stack development and software solutions.
          </p>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Current Status</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">Full-Stack Software Engineer</p>
                <p className="text-primary font-medium">Available for Opportunities</p>
                <p className="text-muted-foreground">
                  Experienced in building scalable web applications, working with modern technologies,
                  and delivering high-quality software solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
