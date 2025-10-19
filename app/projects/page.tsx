"use client"

import { useState } from "react"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsFilter } from "@/components/projects/projects-filter"
import { ProjectsSearch } from "@/components/projects/projects-search"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="pt-16">
      <ProjectsHero />
      <ProjectsSearch onSearch={setSearchQuery} searchQuery={searchQuery} />
      <ProjectsFilter />
      <ProjectsGrid searchQuery={searchQuery} />
    </div>
  )
}
