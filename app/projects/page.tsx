import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsFilter } from "@/components/projects/projects-filter"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Marawan Mokhtar's portfolio of software engineering projects, including AI applications, full-stack web development, and innovative solutions.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
    </div>
  )
}
