import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { featuredPosts } from "@/lib/blog-data"

export function FeaturedArticles() {
    const [mainFeatured, ...otherFeatured] = featuredPosts

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-balance mb-4">Featured Articles</h2>
                    <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Discover our most popular and impactful articles, carefully curated for modern developers and engineers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Main featured article */}
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 glass-card">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={mainFeatured.thumbnail || "/placeholder.svg"}
                                alt={mainFeatured.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                {mainFeatured.category}
                            </Badge>
                        </div>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(mainFeatured.publishedAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {mainFeatured.readTime} min read
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-balance mb-3 group-hover:text-primary transition-colors">
                                <Link href={`/articles/${mainFeatured.id}`}>{mainFeatured.title}</Link>
                            </h3>
                            <p className="text-muted-foreground text-pretty mb-4 leading-relaxed">{mainFeatured.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={mainFeatured.author.avatar || "/placeholder.svg"}
                                        alt={mainFeatured.author.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <span className="text-sm font-medium">{mainFeatured.author.name}</span>
                                </div>
                                <Link href={`/articles/${mainFeatured.id}`}>
                                    <Button variant="ghost" size="sm" className="group/btn">
                                        Read more
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Other featured articles */}
                    <div className="space-y-6">
                        {otherFeatured.map((post) => (
                            <Card
                                key={post.id}
                                className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 glass-card"
                            >
                                <CardContent className="p-0">
                                    <div className="flex gap-4 items-center">
                                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-l-lg">
                                            <Image
                                                src={post.thumbnail || "/placeholder.svg"}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex-1 p-4">
                                            <Badge variant="secondary" className="mb-2 text-xs bg-purple-700">
                                                {post.category}
                                            </Badge>
                                            <h4 className="font-semibold text-balance mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                <Link href={`/articles/${post.id}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-sm text-muted-foreground text-pretty mb-3 line-clamp-2">{post.excerpt}</p>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <span>{post.author.name}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime} min</span>
                                                </div>
                                                <span>
                                                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                      month: "short",
                                                      day: "numeric",
                                                  })}
                                               </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center ">
                    <Link href="/articles">
                        <Button variant="outline" size="lg" className="group bg-transparent hover:!bg-purple-500 hover:!text-white hover:!border-purple-500 transition-all">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
