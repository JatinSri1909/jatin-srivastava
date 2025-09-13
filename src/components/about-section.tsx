"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume"

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="animate-slide-in-left animate-delay-200">
                <h3 className="text-2xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate software developer currently pursuing B.Tech in Computer Science at KIET Group of
                  Institutions. With hands-on experience in full-stack development, I specialize in building scalable
                  web applications using modern technologies.
                </p>
              </div>

              <div className="animate-slide-in-left animate-delay-300">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 animate-fade-in-up animate-delay-400">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills[0].items.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
