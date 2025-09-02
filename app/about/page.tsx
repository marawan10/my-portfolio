import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutEducation } from "@/components/about/about-education"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Marawan Mokhtar - Software Engineer, AI specialist, and full-stack developer with expertise in modern web technologies.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutEducation />
    </div>
  )
}
