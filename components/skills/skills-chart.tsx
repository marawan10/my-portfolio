"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

export function SkillsChart() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="glass">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold">
                  Continuous Learning Journey
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-gradient">Current Focus</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional Web Development & BI with .NET, advanced ASP.NET Core features
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-gradient">Learning Goals</h4>
                    <p className="text-muted-foreground text-sm">
                      Microservices architecture, DevOps practices, and cloud deployment strategies
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
