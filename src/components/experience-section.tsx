"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { ChevronDown } from "lucide-react"
import { resumeData } from "@/data/resume"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
    <section ref={sectionRef} id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <SectionHeading eyebrow="Featured" title="My Experience" />

          <div className="divide-y divide-border rounded-xl border border-border overflow-hidden bg-card/40">
            {resumeData.experience.map((exp, index) => {
              const isOpen = openIndex === index

              return (
                <div key={`${exp.company}-${exp.position}`} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-muted/40 transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden border border-border">
                      {exp.imgUrl ? (
                        <Image
                          src={exp.imgUrl}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                          {exp.company.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-medium text-foreground">{exp.company}</h3>
                          <p className="text-sm text-muted-foreground">{exp.position}</p>
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground sm:whitespace-nowrap font-mono">
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 pl-[3.75rem] sm:pl-[4.75rem]">
                        {exp.description.filter((d) => d.trim() !== "").length > 0 && (
                          <ul className="space-y-1.5 mb-4">
                            {exp.description
                              .filter((d) => d.trim() !== "")
                              .map((desc) => (
                                <li key={desc} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                                  <span>{desc}</span>
                                </li>
                              ))}
                          </ul>
                        )}

                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="rounded-full text-xs font-normal bg-secondary/60 text-muted-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
