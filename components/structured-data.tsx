"use client"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marawan Mokhtar Kamel",
    "jobTitle": "Software Engineer",
    "description": "Professional software engineer specializing in AI model evaluation, full-stack development, and modern web technologies.",
    "url": "https://marawanmokhtar.dev",
    "email": "marawanmokhtar10@gmail.com",
    "telephone": "+20 106 745 3557",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Al Minya",
      "addressCountry": "Egypt"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Minya University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Al Minya",
        "addressCountry": "Egypt"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Outlier.ai",
      "description": "AI Coding Evaluator and Language Model Reviewer"
    },
    "knowsAbout": [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Python Programming",
      "TypeScript",
      "Next.js",
      "AI Model Evaluation"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/marawanmokhtar/",
      "https://github.com/marawanmokhtar",
      "https://www.facebook.com/MarawanMokhtar101",
      "https://www.instagram.com/marawan_mokhtar10/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
