"use client"

import { useEffect, useState } from "react"
import { FileText, Hash, User } from "lucide-react"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { blogPosts, authors, categories } from "@/lib/blog-data"

export function CommandPalette() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Search articles, authors, categories..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Articles">
                    {blogPosts.slice(0, 5).map((post) => (
                        <CommandItem key={post.id} className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <div className="flex flex-col">
                                <span className="font-medium">{post.title}</span>
                                <span className="text-xs text-muted-foreground">{post.category}</span>
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Categories">
                    {categories.map((category) => (
                        <CommandItem key={category.name} className="flex items-center gap-2">
                            <Hash className="h-4 w-4" />
                            <span>{category.name}</span>
                            <span className="text-xs text-muted-foreground">({category.count} articles)</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Authors">
                    {authors.map((author) => (
                        <CommandItem key={author.id} className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{author.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
