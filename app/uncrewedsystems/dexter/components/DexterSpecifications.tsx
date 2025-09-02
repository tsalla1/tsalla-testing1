"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { ContentWrapper } from "@/components/ContentWrapper"

// --- Accordion Item Component ---
interface PayloadFeature {
  title: string
  whatItMeans: string
  keyBenefit: string
}

const PayloadAccordionItem = ({
  feature,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  feature: PayloadFeature
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => (
  <div
    className="border-b border-gray-300 py-4 cursor-pointer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-medium text-black">{feature.title}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Plus className="w-5 h-5 transition-transform text-black" />
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{ height: "auto", opacity: 1, marginTop: "16px" }}
          exit={{ height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="text-gray-700 space-y-2 text-sm">
            <p>
              <span className="font-semibold">What it means:</span>{" "}
              {feature.whatItMeans}
            </p>
            <p>
              <span className="font-semibold">Key benefit:</span>{" "}
              {feature.keyBenefit}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

// --- Data ---
const categories = {
  ISR: {
    title: "ISR (Intelligence, Surveillance, Reconnaissance)",
    headline: "Advanced ISR Capabilities",
    description: [
      {
        title: "EO Zoom Camera",
        whatItMeans:
          "A powerful daylight camera with smooth 40x zoom – combines 20x true optical zoom and 2x digital boost.",
        keyBenefit: "Wide-area coverage and stand-off detail with zero risk to the aircraft.",
      },
      {
        title: "Thermal Camera — 640x480",
        whatItMeans:
          "A high-resolution thermal sensor at the core of the gimbal – detects heat signatures invisible to the naked eye.",
        keyBenefit:
          "Reliable day/night situational awareness and thermal inspection in any environment.",
      },
      {
        title: "Stabilized Gimbal — Pitch/Yaw/Roll",
        whatItMeans:
          "Fully stabilized 3-axis gimbal with -45° to +135° pitch and continuous 360° yaw/roll rotation.",
        keyBenefit: "Accurate, smooth data capture from any angle with no blind spots.",
      },
      {
        title: "Compact & Lightweight",
        whatItMeans: "Compact build (40x40x65 mm) and weighs only 125 grams.",
        keyBenefit: "Maximizes mission-flexibility without trade-offs in flight time.",
      },
    ],
    image:
      "https://cdn.sanity.io/images/9w6n0tb6/production/1a0050c94832c75b0ce162c14d56ea20b0c736c6-310x297.png",
  },
  Mapping: {
    title: "High-Resolution Mapping",
    headline: "Precision Mapping & Surveying",
    description: [
      {
        title: "61MP Full-Frame Sensor",
        whatItMeans: "Ultra-high resolution – captures extremely detailed still images.",
        keyBenefit: "You can fly higher or cover more area without losing image quality.",
      },
      {
        title: "Remote Operation (USB-C / LAN)",
        whatItMeans:
          "You can control the camera from a distance – trigger, change settings, transfer data.",
        keyBenefit: "Full automation or remote piloting – efficient workflows.",
      },
      {
        title: "Compact & Lightweight Body",
        whatItMeans: "Small size and light weight make it easy to integrate.",
        keyBenefit: "More flight time, more mounting options, less power draw.",
      },
      {
        title: "E-Mount Lens Compatibility",
        whatItMeans:
          "Works with Sony’s wide range of interchangeable lenses (zoom, prime, wide-angle, telephoto).",
        keyBenefit: "One camera body, multiple use cases – just switch the lens.",
      },
    ],
    image:
      "https://cdn.sanity.io/images/9w6n0tb6/production/3efb323c85cf4b1583dc48c6cb043329901ebf22-688x546.png",
  },
  Multispectral: {
    title: "Multispectral & Agricultural Analytics",
    headline: "Crop Health & Environmental Monitoring",
    description: [
      {
        title: "Multi-Sensor Gimbal",
        whatItMeans:
          "A single, integrated payload combining a high-resolution RGB camera and a multispectral sensor.",
        keyBenefit:
          "Captures both visual and non-visible light data simultaneously, saving flight time and increasing efficiency.",
      },
      {
        title: "High-Resolution Capture",
        whatItMeans: "Captures clear, detailed images in both visual and multispectral bands.",
        keyBenefit:
          "Provides precise data for detailed crop analysis, disease detection, and plant counting.",
      },
      {
        title: "Seamless Integration",
        whatItMeans:
          "Designed to be easily mounted and integrated with the drone's flight control system.",
        keyBenefit:
          "Quick setup and automated data collection for efficient field operations.",
      },
    ],
    image:
      "https://cdn.sanity.io/images/9w6n0tb6/production/88fab3a74f0c1658a8e8e8d496f1ca06b00a05ac-616x726.png",
  },
}

export default function PayloadCategories() {
  const [active, setActive] = useState<keyof typeof categories>("Multispectral")
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const data = categories[active]

  return (
    <section className="font-clash-grotesk bg-white w-full min-h-screen py-12">
      <ContentWrapper>
        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex space-x-1 border border-black rounded-full p-1">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onMouseEnter={() => setActive(key as keyof typeof categories)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 ${
                  active === key ? "text-white" : "text-black hover:text-black/60"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {active === key && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-0 bg-black"
                    style={{ borderRadius: 9999 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {categories[key as keyof typeof categories].title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            {/* Left: Fixed Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="w-full h-[400px] flex items-center justify-center rounded-lg overflow-hidden"
            >
              <Image
                src={data.image}
                alt={data.headline}
                width={400}
                height={300}
                className="object-contain max-h-full"
              />
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                {data.headline}
              </h2>
              <div className="space-y-4">
                {(data.description as PayloadFeature[]).map(
                  (feature, index) => (
                    <PayloadAccordionItem
                      key={index}
                      feature={feature}
                      isOpen={hoverIndex === index}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                    />
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </ContentWrapper>
    </section>
  )
}
