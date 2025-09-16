"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail, TrendingUp, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail("")
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-purple-700 text-white">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Latest insights from industry experts
                    </Badge>

                    {/* Main headline */}
                    <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl mb-6">
                        Engineering{" "}
                        <span>
                           I<span className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 bg-clip-text text-transparent">nsigh</span>t
                        </span>s{" "}
                        for Modern Developers
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8 leading-relaxed">
                        Stay ahead of the curve with cutting-edge insights on AI/ML, Data Science, and Software Engineering. Learn
                        from industry experts and level up your technical skills.
                    </p>

                    {/* Newsletter signup */}
                    <div className="mx-auto max-w-md mb-12">
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <div className="relative flex-1">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 pr-4 h-12 text-base focus-visible:border-purple-500 focus-visible:ring-purple-500/50"
                                    required
                                />
                            </div>
                            <Button type="submit" size="lg" className="h-12 px-6">
                                {isSubscribed ? "Subscribed!" : "Subscribe"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                        <p className="text-sm text-muted-foreground mt-2">
                            Join 12,000+ developers getting weekly insights. No spam, unsubscribe anytime.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">150+</div>
                            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                Articles Published
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">12K+</div>
                            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                                <Users className="h-4 w-4" />
                                Active Readers
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">95%</div>
                            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                                <TrendingUp className="h-4 w-4" />
                                Reader Satisfaction
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
