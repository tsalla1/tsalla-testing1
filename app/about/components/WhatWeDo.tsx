"use client"

import Image from "next/image"
import ContentWrapper from "@/components/ContentWrapper"

export default function WhatWeDo() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-16 md:py-24 font-clash">
      <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
          {/* Left: Text */}
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-10">What We Do</h2>
            <p className="text-white/80 text-base sm:text-[0.9375rem] md:text-lg leading-relaxed tracking-wide max-w-xl">
              When disasters strike or borders need protection, our UAVs rise to the challenge. Engineered for both
              civil missions and combat-ready roles, they carry more than technology — they carry trust. Through vision
              and design excellence, we're helping India own its place in the skies.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <div className="relative w-full aspect-square md:h-[31.25rem] md:aspect-auto overflow-hidden">
              <Image
                src="https://quantum-systems.com/wp-content/uploads/2025/05/QS_Blackned_03-scaled.jpg"
                alt="City Aerial"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}
