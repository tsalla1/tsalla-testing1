"use client"

import type React from "react"

import { useState, useMemo } from "react"
import PageWrapper from "@/components/PageWrapper"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

interface NewsArticle {
  title: string
  date: string
  image: string
  readMoreLink: string
  category: string
}

const newsCategories = [
  { name: "All", value: "all" },
  { name: "News", value: "news" },
  { name: "Tsalla Life", value: "Tsalla-life" },
  { name: "Engineering", value: "engineering" },
  { name: "Policy", value: "policy" },
  { name: "Products", value: "products" },
]

const featuredNews = {
  title: "Tsalla Awarded $99.6M for Indian. Army Next Generation Command and Control Prototype",
  date: "7/18/2025",
  image: "https://cdn.sanity.io/images/z5s3oquj/production/abb6bab613d7d967786b922562d07d61f60f873e-3840x2160.jpg?auto=format&fit=max&w=1920&q=90",
  readMoreLink: "/newsroom/anduril-awarded-army-contract",
  category: "news",
}

const allNewsArticles: NewsArticle[] = [
  {
    title: "Barracuda-100M Completes Another Successful Flight Test for Army High Speed Maneuverable Missile Program",
    date: "7/16/2025",
    image: "/placeholder.svg?height=200&width=300&text=Barracuda+Flight+Test",
    readMoreLink: "/newsroom/barracuda-flight-test",
    category: "products",
  },
  {
    title:
      "Saab Chooses Anduril Rocket Motor Systems to Design and Produce Solid Rocket Motors for the Ground-Launched Small...",
    date: "6/20/2025",
    image: "/placeholder.svg?height=200&width=300&text=Anduril+Saab+Partnership",
    readMoreLink: "/newsroom/saab-partnership",
    category: "news",
  },
  {
    title:
      "Anduril Industries and Rheinmetall Partner to Design and Manufacture Barracuda, Fury & Solid Rocket Motors for...",
    date: "6/19/2025",
    image: "/placeholder.svg?height=200&width=300&text=Rheinmetall+Partnership",
    readMoreLink: "/newsroom/rheinmetall-partnership",
    category: "news",
  },
  {
    title: "Advanced Manufacturing Processes Revolutionize Defense Production",
    date: "6/15/2025",
    image: "/placeholder.svg?height=200&width=300&text=Manufacturing+Partnership",
    readMoreLink: "/newsroom/manufacturing-partnership",
    category: "engineering",
  },
  {
    title: "Riverside Research and Anduril Collaborate to Cyber Harden Critical Defense Capabilities",
    date: "6/12/2025",
    image: "/placeholder.svg?height=200&width=300&text=Riverside+Collaboration",
    readMoreLink: "/newsroom/riverside-collaboration",
    category: "policy",
  },
  {
    title: "Anduril and Meta Team Up to Transform XR for the American Military",
    date: "6/10/2025",
    image: "/placeholder.svg?height=200&width=300&text=Meta+Partnership",
    readMoreLink: "/newsroom/meta-partnership",
    category: "products",
  },
  {
    title: "Advanced Autonomous Systems Integration for Next-Gen Defense Applications",
    date: "6/8/2025",
    image: "/placeholder.svg?height=200&width=300&text=Autonomous+Systems",
    readMoreLink: "/newsroom/autonomous-systems",
    category: "engineering",
  },
  {
    title: "Life at Anduril: Building the Future of Defense Technology",
    date: "6/5/2025",
    image: "/placeholder.svg?height=200&width=300&text=Facility+Expansion",
    readMoreLink: "/newsroom/facility-expansion",
    category: "anduril-life",
  },
  {
    title: "Strategic Partnership Announced for Counter-UAS Technology Development",
    date: "6/1/2025",
    image: "/placeholder.svg?height=200&width=300&text=Counter+UAS",
    readMoreLink: "/newsroom/counter-uas-partnership",
    category: "policy",
  },
]

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    // The search is already working through the searchTerm state
    // This function can be used for additional search logic if needed
    console.log("Searching for:", searchTerm)
  }

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const filteredArticles = useMemo(() => {
    let filtered = allNewsArticles

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((article) => article.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.date.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }, [activeCategory, searchTerm])

  const shouldShowFeatured =
    (activeCategory === "all" || featuredNews.category === activeCategory) &&
    (!searchTerm.trim() || featuredNews.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 font-clash">
        <div className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Featured News Section */}
            {shouldShowFeatured && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-clash">Featured news</h2>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={featuredNews.image || "/placeholder.svg"}
                        alt={featuredNews.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-4">
                    <div className="text-sm text-gray-600 mb-3 font-medium font-clash">{featuredNews.date}</div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight font-clash">
                      {featuredNews.title}
                    </h3>
                    <Link
                      href={featuredNews.readMoreLink}
                      className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors group font-clash text-xs"
                    >
                      <span className="mr-2 font-medium text-sm">Read More</span>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors text-xs">
                        <ArrowRight size={16} className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Categories */}
            <div className="flex flex-wrap gap-6 mb-8 items-center">
              <div className="flex flex-wrap gap-6">
                {newsCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category.value)}
                    className={`text-sm font-medium transition-colors font-clash ${
                      activeCategory === category.value
                        ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                    // Added text-gray-900 to ensure the font is black
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent font-clash"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label="Search"
                  >
                    <Search size={14} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* News Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="group">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="text-sm text-gray-600 mb-2 font-medium font-clash">{article.date}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug font-clash">{article.title}</h3>
                    <Link
                      href={article.readMoreLink}
                      className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors group font-clash"
                    >
                      <span className="mr-2 font-medium text-sm">Read More</span>
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                        <ArrowRight size={12} className="text-white" />
                      </div>
                    </Link>
                    <div className="w-full h-px bg-gray-300 mt-6" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg font-clash">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchTerm("")
                  }}
                  className="mt-4 text-gray-900 font-semibold hover:text-gray-700 transition-colors font-clash"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
