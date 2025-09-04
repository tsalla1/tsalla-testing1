"use client"

import { useState } from "react"
import Image from "next/image"

interface Person {
  name: string
  role: string
  description: string
  image: string
}

const people: Person[] = [
  {
    name: "Dr. Martine Rothblatt",
    role: "Director",
    description:
      "Founder of Sirius XM radio and United Therapeutics. Progressive technologist and green energy advocate. Helicopter, fixed wing and seaplane pilot.",
    image: "https://via.placeholder.com/300x400.png?text=Person+1",
  },
  {
    name: "John Doe",
    role: "Advisor",
    description:
      "Experienced entrepreneur and advisor in aerospace and clean tech sectors.",
    image: "https://via.placeholder.com/300x400.png?text=Person+2",
  },
  {
    name: "Jane Smith",
    role: "Director",
    description:
      "Leader in sustainability and innovation with 20+ years in renewable energy.",
    image: "https://via.placeholder.com/300x400.png?text=Person+3",
  },
]

export default function DirectorsPage() {
  return (
    <section className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Text */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-gray-900">
            BETA Directors and Advisors
          </h2>
          <p className="mt-4 text-gray-600">
            Mouse over a portrait for more information.
          </p>
        </div>

        {/* People Grid */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {people.map((person, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              {/* Image */}
              <Image
                src={person.image}
                alt={person.name}
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-start p-4 text-white rounded-lg">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm italic">{person.role}</p>
                <p className="mt-2 text-sm">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
