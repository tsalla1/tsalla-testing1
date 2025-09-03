"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Plus, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const megaMenuData = {
  "/uncrewedsystems": {
    title: "HANGAR",
    description:
      "Revolutionary uncrewed systems that think, adapt, and execute missions with unprecedented autonomy. Real-time decision making where delay means defeat.",
    links: [
      {
        name: "DEXTER ",
        href: "/uncrewedsystems/dexter",
        description: "Multi-Role Single Solution",
        details: {
          headline: "DEXTER",
          subheadline: "Multirole <br /> Single Solution",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/d1d0466a1d875feae95036da6f497302a537d9ca-1707x1207.png",
        },
      },
      {
        name: "FENIX",
        href: "/uncrewedsystems/fenix",
        description: "Fast Entry Navigational Intrusion eXplorer",
        details: {
          headline: "FENIX",
          subheadline: "Fast Entry Navigational <br /> Intrusion eXplorer",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/4c840367c7d0ff1e0d69011e86932a7730a8c4f3-1707x1207.png",
        },
      },
      {
        name: "BAT",
        href: "/uncrewedsystems/bat",
        description: "Battlefield Aerial Tactical UAS",
        details: {
          headline: "BAT",
          subheadline: "Battlefield Aerial <br /> Tactical UAS",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/59638385bd840eeec0d9986948452b0046ef63a7-1707x1207.png",
        },
      },
      {
        name: "STORM",
        href: "/uncrewedsystems/storm",
        description: "Smart Transport Operations for Rugged Missions",
        details: {
          headline: "STORM",
          subheadline: "Smart Transport Operations <br /> for Rugged Missions",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/42b4a626568836e203e5376d9b9765bcf0333a85-1707x1207.png",
        },
      },
      {
        name: "RAVEN",
        href: "/uncrewedsystems/raven",
        description: "Reconnaissance and Aerial Vehicle for Extreme Navigation",
        details: {
          headline: "RAVEN",
          subheadline: "Reconnaissance and Aerial Vehicle <br /> for Extreme Navigation",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/d45089e909a32c2f6d0a7a00f2e82f7e7a93a207-1707x1207.png",
        },
      },
      {
        name: "GRIFFIN",
        href: "/uncrewedsystems/griffin",
        description: "Ground Reconnaissance and Interdiction Force",
        details: {
          headline: "GRIFFIN",
          subheadline: "Ground Reconnaissance and <br /> Interdiction Force",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/07d4b0f9f8e4e9a0c1a7e4e0b0e5c9f5e4c0d0c8-1707x1207.png",
        },
      },
      {
        name: "VULCAN",
        href: "/uncrewedsystems/vulcan",
        description: "Versatile Unmanned Logistics and Combat Aircraft",
        details: {
          headline: "VULCAN",
          subheadline: "Versatile Unmanned Logistics <br /> and Combat Aircraft",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/a0f3d9f0f9b6e8d1a1f0a1f0a1f0a1f0a1f0a1f0-1707x1207.png",
        },
      },
      {
        name: "ORION",
        href: "/uncrewedsystems/orion",
        description: "Orbital Reconnaissance and Interdiction Operations Network",
        details: {
          headline: "ORION",
          subheadline: "Orbital Reconnaissance and <br /> Interdiction Operations Network <br />",
          droneImage:
            "https://cdn.sanity.io/images/9w6n0tb6/production/b2f6e6b4f7a7c1b5b4e7e6d1c2d0c1d2e1f2f3f4-1707x1207.png",
        },
      },
    ],
  },
  "/hardware": {
    title: "SPACE SYSTEMS",
    description:
      "Advanced unmanned systems engineered for superiority in the field. Every component designed for reliability, performance, and tactical advantage.",
    links: [
      { name: "Phantom X1", href: "/hardware#phantom", description: "Advanced reconnaissance drone" },
      { name: "Sentinel Pro", href: "/hardware#sentinel", description: "Long-range surveillance system" },
      { name: "Hardware Overview", href: "/hardware", description: "Complete systems catalog" },
      { name: "Technical Specs", href: "/hardware#specs", description: "Detailed specifications" },
    ],
  },
  "/maverick": {
    title: "MAVERICK",
    description:
      "Comprehensive mission planning and execution systems for complex autonomous operations. Seamless coordination of multiple systems for mission-critical operations.",
    links: [
      { name: "Mission Planning", href: "/maverick#planning", description: "Advanced operation design" },
      { name: "Execution Systems", href: "/maverick#execution", description: "Real-time mission control" },
      { name: "Analysis Tools", href: "/maverick#analysis", description: "Post-mission intelligence" },
      { name: "Integration", href: "/maverick#integration", description: "Multi-system coordination" },
    ],
  },
  "/countersystems": {
    title: "COUNTER SYSTEMS",
    description:
      "Comprehensive counter-drone and defensive systems for complex autonomous operations. Advanced protection against aerial threats.",
    links: [
      { name: "ANTI-DRONE", href: "/countersystems/anti-drone", description: "Advanced counter-drone systems" },
      { name: "Detection Systems", href: "/countersystems/detection", description: "Early threat identification" },
      { name: "Jamming Technology", href: "/countersystems#jamming", description: "Signal disruption capabilities" },
      { name: "Kinetic Solutions", href: "/countersystems#kinetic", description: "Physical threat neutralization" },
    ],
  },
  "/contact": {
    title: "CONTACT US",
    description:
      "Ready to discuss the future of autonomous systems? Connect with our team to explore partnerships, demonstrations, and custom solutions.",
    links: [
      { name: "General Inquiries", href: "/contact", description: "Get in touch with our team" },
      { name: "Partnership", href: "/contact#partnership", description: "Strategic collaborations" },
      { name: "Demo Request", href: "/contact#demo", description: "See our systems in action" },
      { name: "Support", href: "/contact#support", description: "Technical assistance" },
    ],
  },
  "/about": {
    title: "ABOUT",
    description:
      "Learn about Tsalla Aerospace's mission to revolutionize autonomous systems and create unfair advantages in modern warfare and exploration.",
    links: [
      { name: "Our Mission", href: "/about#mission", description: "Building the future of autonomous systems" },
      { name: "Leadership", href: "/leadership", description: "Meet our visionary team" },
      { name: "Company Culture", href: "/about#culture", description: "Innovation without compromise" },
      { name: "History", href: "/about#history", description: "Our journey to excellence" },
    ],
  },
  "/careers": {
    title: "JOIN THE MISSION",
    description:
      "Join a team of innovators, engineers, and visionaries pushing the boundaries of what's possible in autonomous systems and aerospace technology.",
    links: [
      { name: "Open Positions", href: "/careers", description: "Current opportunities" },
      { name: "Engineering", href: "/careers#engineering", description: "Build the future" },
      { name: "Research", href: "/careers#research", description: "Advance the science" },
      { name: "Culture", href: "/careers#culture", description: "Our work environment" },
    ],
  },
}

const navigationItems = [
  { name: "MAVERICK", href: "/maverick" },
  { name: "UNCREWED SYSTEMS", href: "/uncrewedsystems" },
  { name: "COUNTER SYSTEMS", href: "/countersystems" },
  { name: "SPACE SYSTEMS", href: "/hardware" },
  { name: "COMPANY", href: "/about" },
  { name: "JOIN THE MISSION", href: "/careers" },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [hoveredNavLinkIndex, setHoveredNavLinkIndex] = useState<number | null>(null)
  const [hoveredUncrewedSystemDetails, setHoveredUncrewedSystemDetails] = useState<any>(null)
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
        setActiveMegaMenu(null)
        setHoveredUncrewedSystemDetails(null)
      } else {
        setIsVisible(true)
      }
      setIsScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMegaMenu(null)
    setHoveredUncrewedSystemDetails(null)
  }, [pathname])

  const handleMouseEnterNav = (href: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }
    setActiveMegaMenu(href)
    if (href !== "/uncrewedsystems") {
      setHoveredUncrewedSystemDetails(null)
    }
  }

  const handleMouseLeaveNav = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
      setHoveredUncrewedSystemDetails(null)
    }, 150)
  }

  const handleMouseEnterMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }
  }

  const handleMouseLeaveMegaMenu = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
      setHoveredUncrewedSystemDetails(null)
    }, 150)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
    ${isScrolled || !isHomePage ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"}
  `}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-20 border-b border-white/100 px-4">
            <Link href="/" className="flex items-center z-50 pl-4 lg:ml-12">
              <Image
                src="/tsalla_main.svg"
                alt="Tsalla Aerospace"
                width={260}
                height={70}
                className="h-12 sm:h-14 md:h-16 w-auto brightness-150 contrast-125"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center h-full border-l border-white/30 pr-14">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative h-full"
                  onMouseEnter={() => handleMouseEnterNav(item.href)}
                  onMouseLeave={handleMouseLeaveNav}
                >
                  <Link
                    href={item.href}
                    className={`
                      px-6 text-sm font-medium tracking-wider transition-colors h-full flex items-center
                      ${index < navigationItems.length - 1 ? "border-r border-white/30" : ""}
                      ${activeMegaMenu === item.href ? "bg-white/10" : ""}
                    `}
                  >
                    <span
                      className={`animated-underline font-orbit font-normal ${
                        pathname === item.href ? "text-blue-400" : "text-white hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="lg:hidden pr-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

            <AnimatePresence>
          {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
            <motion.div
              key={activeMegaMenu}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 bg-black border-b border-white/20 shadow-2xl z-40"
              onMouseEnter={handleMouseEnterMegaMenu}
              onMouseLeave={handleMouseLeaveMegaMenu}
            >
              <div className="flex w-full min-h-[450px]">
                <div className="w-1/2 max-w-7xl mx-auto pl-4 pr-0 py-8 md:pl-6 lg:pl-8 xl:pl-10">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-gray-400 mb-6 tracking-wider font-orbit">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].title}
                    </h3>
                    <div
                      className={cn(
                        "space-y-1",
                        activeMegaMenu === "/uncrewedsystems" && "max-h-[328px] overflow-y-auto pr-2 custom-scrollbar",
                      )}
                    >
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          onMouseEnter={() => {
                            setHoveredNavLinkIndex(index)
                            if (activeMegaMenu === "/uncrewedsystems" && link.details) {
                              setHoveredUncrewedSystemDetails({ ...link.details, href: link.href })
                            }
                          }}
                          onMouseLeave={() => {
                            setHoveredNavLinkIndex(null)
                          }}
                          className={cn(
                            "group block p-3 rounded-lg hover:bg-white/5 transition-all duration-300 ease-out",
                            hoveredNavLinkIndex !== null && hoveredNavLinkIndex !== index && "blur-sm scale-[0.98]",
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors font-orbit">
                                {link.name}
                              </div>
                              <div className="text-gray-400 text-sm mt-1 font-orbit">{link.description}</div>
                            </div>
                            <ArrowRight
                              className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={cn(
                    "w-1/2 py-8 px-8 transition-all duration-500  ease-in-out relative overflow-hidden flex flex-col",
                    activeMegaMenu === "/uncrewedsystems"
                      ? "bg-[linear-gradient(rgba(0,0,0,0.3),_rgba(0,0,0,0.3)),url('/blueprint-background.png')] bg-cover bg-center text-white"
                      : "bg-white text-black",
                  )}
                >
                  {activeMegaMenu === "/uncrewedsystems" && hoveredUncrewedSystemDetails ? (
                    <>
                      <div className="flex-1">
                        <h2 className="text-4xl font-bold leading-tight tracking-wide font-orbit mb-4">
                          {hoveredUncrewedSystemDetails.headline}
                        </h2>
                        <p 
                          className="text-lg leading-relaxed mb-6 font-orbit"
                          dangerouslySetInnerHTML={{ __html: hoveredUncrewedSystemDetails.subheadline }}
                        />
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={hoveredUncrewedSystemDetails.href || "#"}
                          className="inline-block px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors text-base font-orbit"
                        >
                          Explore
                        </Link>
                      </div>
                      <AnimatePresence mode="wait">
                        {hoveredUncrewedSystemDetails.droneImage && (
                          <motion.div
                            key={hoveredUncrewedSystemDetails.droneImage}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute bottom-0 right-[-2px] w-[500px] max-w-none h-auto object-contain opacity-80 invert brightness-200 z-10"
                          >
                            <Image
                              src={hoveredUncrewedSystemDetails.droneImage || "/placeholder.svg"}
                              alt={`${hoveredUncrewedSystemDetails.headline} drone`}
                              width={650}
                              height={500}
                              priority
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold leading-tight font-orbit mb-4">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData]?.title}
                      </h2>
                      <p className="text-lg leading-relaxed font-orbit">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData]?.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-20 left-0 right-0 bg-black/95 border-t border-white/20">
            <div className="flex flex-col">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-4 text-base font-medium border-b border-white/10 transition-colors flex justify-between items-center font-orbit
                    ${
                      pathname === item.href
                        ? "text-blue-400 bg-white/5"
                        : "text-white hover:text-blue-400 hover:bg-white/5"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="animated-underline font-orbit">{item.name}</span>
                  <Plus className="w-4 h-4 transform rotate-45" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
