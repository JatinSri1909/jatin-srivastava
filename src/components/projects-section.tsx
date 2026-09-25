"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { ExternalLink, Github } from "lucide-react"
import { resumeData } from "@/data/resume"

function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <SectionHeading eyebrow="Featured" title="My Projects" />

          <div className="grid sm:grid-cols-2 gap-5">
            {resumeData.projects.map((project, index) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-dashed border-border overflow-hidden hover:border-foreground/30 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative h-28 sm:h-32 flex flex-col border-b border-dashed border-border overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border/60 bg-muted/40 flex-shrink-0">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <span className="ml-2 px-2.5 py-0.5 rounded-full bg-background/80 border border-border/60 text-[10px] font-mono text-muted-foreground truncate max-w-[80%]">
                      {getDomain(project.liveUrl)}
                    </span>
                  </div>
                  <div className="flex-1 dot-grid bg-gradient-to-br from-muted/30 to-transparent flex items-center justify-center">
                    <span className="font-serif italic text-lg sm:text-xl text-foreground/25 select-none">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {project.githubUrl !== "private" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View code"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live demo"
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full text-xs font-normal bg-secondary/60 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
