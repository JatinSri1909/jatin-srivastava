"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { resumeData } from "@/data/resume"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 {resumeData.name}. Built with <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              using Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={resumeData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={resumeData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={resumeData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-200 hover:scale-110"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
