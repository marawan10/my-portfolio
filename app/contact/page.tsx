import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Marawan Mokhtar for collaboration opportunities, project discussions, or professional inquiries.",
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  )
}
