"use client"

import { useEffect, useRef } from "react"
import { resumeData } from "@/data/resume"
import { SkillIcon } from "./skill-icon"

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
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">technical skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            technologies and tools I work with to build modern applications
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {resumeData.skills[0].items.map((skill, index) => (
            <div
              key={skill}
              className="skill-item opacity-0 translate-y-4 duration-500 ease-out flex items-center gap-1.5 px-2.5 py-1 border border-border rounded-md hover:border-foreground hover:bg-muted transition-colors cursor-default"
              style={{ transitionDelay: `${index * 50}ms` }}
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
