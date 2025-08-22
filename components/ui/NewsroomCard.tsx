"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NewsroomCardProps {
  imageUrl: string
  publicationDate: string
  title: string
  readMoreLink: string
}

const NewsroomCard: React.FC<NewsroomCardProps> = ({
  imageUrl,
  publicationDate,
  title,
  readMoreLink,
}) => {
  return (
    <div className="newsroom-card flex flex-col bg-transparent text-black group">
      {/* Image */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden mb-4 rounded-md">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Publication Date */}
      <p className="text-gray-600 text-sm mb-2 font-medium">{publicationDate}</p>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold leading-snug mb-4 text-black">
        {title}
      </h3>

      {/* Read More Link with underline animation */}
      <Link
        href={readMoreLink}
        className="relative inline-flex items-center text-sm font-medium text-black group"
      >
        <span className="relative z-10 mr-2">
          Read More
          <span className="block h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowRight
          size={16}
          className="transition-transform duration-200 transform group-hover:translate-x-1"
        />
      </Link>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mt-6 opacity-50" />
    </div>
  )
}

export default NewsroomCard
