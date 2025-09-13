"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { resumeData } from "@/data/resume"

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
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">projects</h2>

          <div className="space-y-8">
            {resumeData.projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-secondary transition-colors duration-200 flex-1">
                      {project.title}
                    </CardTitle>
                    
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      {project.githubUrl === "private" ? (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-muted flex items-center justify-center opacity-60 cursor-not-allowed">
                          <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                        </div>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-muted hover:bg-muted-foreground/10 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                          title="View Code"
                        >
                          <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground hover:text-foreground" />
                        </a>
                      )}

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      </a>
                    </div>
                  </div>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
