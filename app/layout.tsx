import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "Marwan Mokhtar - Software Engineer",
    template: "%s | Marwan Mokhtar"
  },
  description: "Professional software engineer specializing in AI model evaluation, full-stack development, and modern web technologies. Expert in Python, C#, TypeScript, and AI systems.",
  keywords: [
    "Software Engineer",
    "AI Specialist", 
    "Full Stack Developer",
    "Python Developer",
    "TypeScript",
    "Next.js",
    "React",
    "AI Coding Evaluator",
    "Computer Science"
  ],
  authors: [{ name: "Marwan Mokhtar Kamel" }],
  creator: "Marwan Mokhtar Kamel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marawanmokhtar.dev",
    title: "Marwan Mokhtar - Software Engineer",
    description: "Software Engineer specializing in AI, full-stack development, and modern web technologies.",
    siteName: "Marwan Mokhtar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Mokhtar - Software Engineer",
    description: "Software Engineer specializing in AI, full-stack development, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
