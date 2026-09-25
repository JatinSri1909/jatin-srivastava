"use client"

import { useEffect, useRef } from "react"
import { resumeData } from "@/data/resume"
import { SkillIcon } from "./skill-icon"
import { SectionHeading } from "./section-heading"

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillItems = sectionRef.current?.querySelectorAll(".skill-item")
    skillItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="My Complete" title="Skills & Techstack" align="center" />

        <div className="flex flex-wrap gap-2.5 justify-center">
          {resumeData.skills[0].items.map((skill, index) => (
            <div
              key={skill}
              className="skill-item opacity-0 translate-y-4 duration-500 ease-out flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-full hover:border-foreground/40 hover:bg-muted transition-colors cursor-default"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <SkillIcon name={skill} className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
