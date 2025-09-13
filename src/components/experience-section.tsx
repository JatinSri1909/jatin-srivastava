"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">work experience</h2>

          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 sm:gap-4 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 border-2 border-background shadow-sm">
                  <img
                    src={exp.imgUrl || "/placeholder.svg"}
                    alt={exp.company}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      target.nextElementSibling!.classList.remove("hidden")
                    }}
                  />
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground hidden">
                    {exp.company.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{exp.position}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground sm:whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>

                  {exp.description && exp.description.length > 0 && exp.description.some(desc => desc.trim() !== "") && (
                    <ul className="mt-2 sm:mt-3 space-y-1">
                      {exp.description.filter(desc => desc.trim() !== "").map((desc, descIndex) => (
                        <li key={descIndex} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-secondary mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs px-1.5 sm:px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
