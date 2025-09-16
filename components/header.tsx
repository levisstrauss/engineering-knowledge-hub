"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 glass supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                                <BookOpen className="h-4 w-4" />
                            </div>
                            <span className="text-xl font-bold text-foreground">Engineering Insights</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="h-9 w-9 hover:bg-accent/10"
                            >
                                <Search className="h-4 w-4" />
                                <span className="sr-only">Search</span>
                            </Button>

                            {isSearchOpen && (
                                <div className="absolute right-0 top-12 w-80 glass-card rounded-lg p-4 shadow-lg">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input placeholder="Search articles..." className="pl-10 pr-4" autoFocus />
                                    </div>
                                    <div className="mt-2 text-xs text-muted-foreground">
                                        Press <kbd className="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">⌘K</kbd> for quick search
                                    </div>
                                </div>
                            )}
                        </div>

                        <ThemeToggle />

                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-9 w-9">
                            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-border/40 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="pt-4 border-t border-border/40">
                                <div className="relative mb-4">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input placeholder="Search articles..." className="pl-10 pr-4" />
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
