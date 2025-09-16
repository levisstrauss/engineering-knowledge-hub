import Link from "next/link"
import { ArrowRight, Brain, Database, Code, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/blog-data"

const categoryIcons = {
    "AI/ML": Brain,
    "Data Science": Database,
    "Software Engineering": Code,
    "Web Development": Globe,
}

const categoryDescriptions = {
    "AI/ML": "Explore the latest in artificial intelligence, machine learning, and deep learning technologies.",
    "Data Science": "Dive into data analysis, statistical modeling, and data visualization techniques.",
    "Software Engineering": "Learn about software architecture, design patterns, and engineering best practices.",
    "Web Development": "Master modern web technologies, frameworks, and development methodologies.",
}

export function CategoriesSection() {
    return (
        <section className="py-12 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-balance mb-4">Explore by Category</h2>
                    <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Discover articles organized by your areas of interest and expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category.name as keyof typeof categoryIcons]
                        const description = categoryDescriptions[category.name as keyof typeof categoryDescriptions]

                        return (
                            <Card
                                style={{ backgroundColor: '#0E1520' }}
                                key={category.name}
                                className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 glass-card"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground text-pretty mb-4 leading-relaxed">{description}</p>
                                    <div className="text-sm font-medium text-primary mb-4">{category.count} articles</div>
                                    <Link href={`/categories/${category.name.toLowerCase().replace(/\//g, "-")}`}>
                                        <Button variant="ghost" size="sm" className="group/btn">
                                            Explore
                                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="text-center">
                    <Link href="/categories">
                        <Button variant="outline" size="lg" className="group bg-transparent hover:!bg-purple-500 hover:!text-white hover:!border-purple-500 transition-all">
                            View All Categories
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
