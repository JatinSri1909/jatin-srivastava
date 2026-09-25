"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react"
import { resumeData } from "@/data/resume"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${resumeData.email}?subject=${subject}&body=${body}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <SectionHeading eyebrow="Featured" title="Get in Touch" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-in-left animate-delay-200">
              <div>
                <h3 className="text-xl font-medium mb-3">let&apos;s connect</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or
                  just want to chat about technology, feel free to reach out!
                </p>
              </div>

              <a
                href={`mailto:${resumeData.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span>{resumeData.email}</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={resumeData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={resumeData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={resumeData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-border bg-card/40 p-5 sm:p-6 animate-fade-in-up animate-delay-400"
            >
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-full rounded-full">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
