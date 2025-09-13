import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react"
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
  title: "Jatin Srivastava - Software Developer",
  description:
    "Portfolio of Jatin Srivastava - Full-stack developer specializing in React, Next.js, and modern web technologies",
  keywords: ["Jatin Srivastava", "Software Developer", "Full Stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Jatin Srivastava" }],
  openGraph: {
    title: "Jatin Srivastava - Software Developer",
    description:
      "Portfolio of Jatin Srivastava - Full-stack developer specializing in React, Next.js, and modern web technologies",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
