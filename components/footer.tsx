"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/marawanmokhtar/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/marawanmokhtar",
      icon: Github,
    },
    {
      name: "Email",
      href: "mailto:marawanmokhtar10@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-xl font-bold text-gradient font-mono">MM</div>
              <span className="font-semibold">Marwan Mokhtar</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Software Engineer specializing in AI, full-stack development, and modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>marawanmokhtar10@gmail.com</p>
              <p>+20 106 745 3557</p>
              <p>Al Minya, Egypt</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Marwan Mokhtar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
          </p>
        </div>
      </div>
    </footer>
  )
}
