import { Metadata } from "next"
import { ExperienceHero } from "@/components/experience/experience-hero"
import { ExperienceTimeline } from "@/components/experience/experience-timeline"
import { ExperienceSkills } from "@/components/experience/experience-skills"

export const metadata: Metadata = {
  title: "Experience",
  description: "Explore Marawan Mokhtar's professional experience, career journey, and achievements in software engineering and AI development.",
}

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceSkills />
    </div>
  )
}
