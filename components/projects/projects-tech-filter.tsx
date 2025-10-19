"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Filter, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectsTechFilterProps {
  selectedTechs: string[]
  onToggleTech: (tech: string) => void
  availableTechs: string[]
}

export function ProjectsTechFilter({ selectedTechs, onToggleTech, availableTechs }: ProjectsTechFilterProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Filter by Technology</h3>
          {selectedTechs.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => selectedTechs.forEach(tech => onToggleTech(tech))}
              className="ml-auto text-xs"
            >
              Clear All <X className="w-3 h-3 ml-1" />
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {availableTechs.map((tech) => {
            const isSelected = selectedTechs.includes(tech)
            return (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'hover:bg-primary/10'
                  }`}
                  onClick={() => onToggleTech(tech)}
                >
                  {tech}
                  {isSelected && <X className="w-3 h-3 ml-1" />}
                </Badge>
              </motion.div>
            )
          })}
        </div>
        
        <AnimatePresence>
          {selectedTechs.length > 0 && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-muted-foreground mt-3"
            >
              Filtering by: <span className="font-medium text-foreground">{selectedTechs.join(", ")}</span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
