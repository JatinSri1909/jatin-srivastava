import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react"
import { ThemeProvider } from "@/provider/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jatin Srivastava - Software Engineer",
  description:
    "Portfolio of Jatin Srivastava - Software Engineer",
  keywords: ["Jatin Srivastava", "Software Developer", "Full Stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Jatin Srivastava" }],
  openGraph: {
    title: "Jatin Srivastava - Software Engineer",
    description:
      "Portfolio of Jatin Srivastava - Software Engineer",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
