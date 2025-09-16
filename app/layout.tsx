import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"


export const metadata: Metadata = {
    title: "Engineering Insights | Modern Tech Blog",
    description:
        "Cutting-edge insights on AI/ML, Data Science, and Software Engineering. Stay ahead with expert analysis and practical tutorials.",
    generator: "v0.app",
    keywords: ["AI", "Machine Learning", "Data Science", "Software Engineering", "Web Development", "Technology"],
    authors: [{ name: "Engineering Insights Team" }],
    openGraph: {
        title: "Engineering Insights | Modern Tech Blog",
        description: "Cutting-edge insights on AI/ML, Data Science, and Software Engineering",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Engineering Insights | Modern Tech Blog",
        description: "Cutting-edge insights on AI/ML, Data Science, and Software Engineering",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </Suspense>
        <Analytics />
        </body>
        </html>
    )
}
