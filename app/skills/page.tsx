import { Metadata } from "next"
import { SkillsHero } from "@/components/skills/skills-hero"
import { SkillsGrid } from "@/components/skills/skills-grid"
import { SkillsChart } from "@/components/skills/skills-chart"

export const metadata: Metadata = {
  title: "Skills",
  description: "Explore Marawan Mokhtar's technical skills and expertise in programming languages, frameworks, AI/ML, and software engineering tools.",
}

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <SkillsHero />
      <SkillsGrid />
      <SkillsChart />
    </div>
  )
}
