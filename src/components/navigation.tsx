"use client"

import { useState, useEffect } from "react"
import { Github, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { resumeData } from "@/data/resume"

const NAV_ITEMS = ["projects", "experience", "skills", "contact"]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("hero")}
            className="md:hidden font-serif italic text-lg text-foreground"
          >
            {resumeData.name.split(" ")[0]}
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={resumeData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
            </a>

            <ThemeToggle />

            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-1 pt-1 pb-4 space-y-1 border-t border-border bg-background/95 backdrop-blur-md">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
