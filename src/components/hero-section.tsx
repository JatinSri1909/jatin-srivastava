"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import { resumeData } from "@/data/resume"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            {resumeData.name}
          </h1>

          <p className="text-lg sm:text-2xl text-muted-foreground mb-3 sm:mb-4 animate-fade-in-up animate-delay-200">
            {resumeData.title}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-300 px-2">
            {resumeData.bio}
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6 sm:mb-8 animate-fade-in-up animate-delay-400">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{resumeData.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up animate-delay-400 px-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border hover:bg-muted transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6 animate-fade-in-up animate-delay-400">
            <a
              href={resumeData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110 p-2"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href={resumeData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110 p-2"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href={resumeData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110 p-2"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110 p-2"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
