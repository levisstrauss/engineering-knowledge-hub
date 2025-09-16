import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";
import {HeroSection} from "@/components/hero-section";
import {FeaturedArticles} from "@/components/featured-articles"
import {CategoriesSection} from "@/components/categories-section"
import { LatestPosts } from "@/components/latest-posrts";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
        <Header />
        <CommandPalette />
        <main>
            <HeroSection />
            <FeaturedArticles />
            <CategoriesSection />
            <LatestPosts />
        </main>
    </div>
  );
}
