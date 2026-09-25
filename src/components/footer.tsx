import { resumeData } from "@/data/resume"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
        <span>&copy; {new Date().getFullYear()} {resumeData.name}. all rights reserved.</span>
        <span>built with next.js &amp; tailwindcss</span>
      </div>
    </footer>
  )
}
