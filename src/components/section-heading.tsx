interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: "left" | "center"
}

export function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === "center" ? "text-center" : ""}`}>
      <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">{eyebrow}</p>
      <div className={`flex items-center gap-4 sm:gap-6 ${align === "center" ? "justify-center" : ""}`}>
        <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
          {title}
        </h2>
        {align === "left" && <span className="hidden sm:block flex-1 h-px bg-border" />}
      </div>
    </div>
  )
}
