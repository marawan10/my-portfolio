"use client"

import { motion } from "framer-motion"
import { Download, MapPin, Calendar, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AboutHero() {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Al Minya, Egypt" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
    { icon: GraduationCap, label: "Education", value: "Computer Science Graduate" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold"
              >
                About <span className="text-gradient">Me</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Software Engineer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate software engineer with a strong foundation in computer science 
              and expertise in full-stack development. My journey combines academic excellence 
              with practical experience in building innovative solutions and training AI models.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {personalInfo.map((info, index) => (
                <Card key={info.label} className="hover-lift">
                  <CardContent className="p-4 text-center">
                    <info.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">{info.label}</p>
                    <p className="text-xs text-muted-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <Card className="relative max-w-sm">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                      <img
                        src="/assets/My_Image.png"
                        alt="Marwan Mokhtar"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Marwan Mokhtar Kamel</h3>
                    <p className="text-muted-foreground">Software Engineer</p>
                    <p className="text-sm text-muted-foreground">AI Coding Evaluator at Outlier.ai</p>
                  </div>
                  <div className="flex justify-center">
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                      Available for Work
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
