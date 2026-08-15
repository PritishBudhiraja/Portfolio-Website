import type { Metadata } from "next"
import { Instrument_Sans, Inter, Source_Serif_4, Work_Sans } from "next/font/google"
import type React from "react"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Pritish Budhiraja | Software Development Engineer",
  description:
    "Portfolio website of Pritish Budhiraja, a Software Development Engineer specializing in React, TypeScript, and cloud infrastructure.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSans.variable} ${sourceSerif.variable} ${workSans.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScrollProvider>
            <ScrollProgress />
            {children}
          </SmoothScrollProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
