"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
    // Create mailto link with form data
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
    <section ref={sectionRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">get in touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-in-left animate-delay-200">
              <div>
                <h3 className="text-2xl font-semibold mb-4">let&apos;s connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or
                  just want to chat about technology, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors duration-200 group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{resumeData.email}</span>
                </a>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={resumeData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={resumeData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={resumeData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in-up animate-delay-400">
              <CardHeader>
                <CardTitle>send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-secondary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-secondary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-secondary transition-all duration-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 hover:scale-105"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
