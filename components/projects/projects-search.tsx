"use client"

import { motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { useState } from "react"

interface ProjectsSearchProps {
  onSearch: (query: string) => void
  searchQuery: string
}

export function ProjectsSearch({ onSearch, searchQuery }: ProjectsSearchProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-muted-foreground'}`} size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search projects by name, technology, or description..."
            className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => onSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Clear search"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {searchQuery && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mt-2 text-center"
          >
            Searching for: <span className="font-medium text-foreground">{searchQuery}</span>
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
