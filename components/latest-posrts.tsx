import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { latestPosts } from "@/lib/blog-data"

export function LatestPosts() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-balance mb-4">Latest Articles</h2>
                    <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Stay up-to-date with the newest insights, tutorials, and industry trends from our expert contributors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {latestPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 glass-card"
                            style={{ backgroundColor: '#0E1520' }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.thumbnail || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <Badge className="absolute top-3 left-3 bg-background/90 text-foreground text-xs">
                                    {post.category}
                                </Badge>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 text-sm text-gray-300 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {post.readTime} min
                                    </div>
                                </div>
                                <h3 className="font-semibold text-balance mb-3 group-hover:text-primary transition-colors line-clamp-2 text-white">
                                    <Link href={`/articles/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-sm text-gray-300 text-pretty mb-4 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={post.author.avatar || "/placeholder.svg"}
                                            alt={post.author.name}
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <span className="text-sm font-medium text-white">{post.author.name}</span>
                                    </div>
                                    <Link href={`/articles/${post.id}`}>
                                        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-white hover:bg-white/10">
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/articles">
                        <Button size="lg" className="group hover:!bg-purple-500 hover:!text-white hover:!border-purple-500 transition-all">
                            Explore All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
