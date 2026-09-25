"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SkillIcon } from "@/components/skill-icon"
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowRight } from "lucide-react"
import { resumeData } from "@/data/resume"

function TechPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 mx-1 px-2.5 py-1 rounded-md border border-border bg-secondary/60 text-foreground text-sm sm:text-base align-middle whitespace-nowrap">
      <SkillIcon name={name} className="h-3.5 w-3.5" />
      {name}
    </span>
  )
}

const socialLinks = [
  { href: (data: typeof resumeData) => data.socialLinks.github, icon: Github, label: "GitHub" },
  { href: (data: typeof resumeData) => data.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: (data: typeof resumeData) => data.socialLinks.twitter, icon: Twitter, label: "Twitter" },
]

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] radial-glow" />

      <div className="relative max-w-2xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border border-border">
              <Image src="/jatin.jpeg" alt={resumeData.name} fill sizes="112px" className="object-cover" priority />
            </div>
          </div>

          <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 text-balance leading-tight">
            {resumeData.name}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-2 animate-fade-in-up animate-delay-200 leading-relaxed">
            {resumeData.bio}
          </p>

          <p className="text-base sm:text-lg text-foreground/90 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animate-delay-300 leading-loose">
            i&apos;m a <TechPill name="TypeScript" /> {resumeData.title}, building with{" "}
            <TechPill name="Next.js" /> and <TechPill name="Node.js" />, backed by{" "}
            <TechPill name="MongoDB" /> and <TechPill name="Docker" />.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 sm:mb-10 animate-fade-in-up animate-delay-400">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{resumeData.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 animate-fade-in-up animate-delay-400">
            <Button
              onClick={() => scrollToSection("projects")}
              className="rounded-full w-full sm:w-auto group"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="rounded-full w-full sm:w-auto"
            >
              Get in touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 animate-fade-in-up animate-delay-400">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href(resumeData)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={`mailto:${resumeData.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
