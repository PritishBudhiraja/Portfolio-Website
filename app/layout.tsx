import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Sans, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      <body className={`${inter.variable} ${instrumentSans.variable} ${sourceSerif.variable} font-sans`}>
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
