"use client";

import React, { useRef, useEffect, useState } from "react";

export default function Missions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Import for the 'Pontano Sans' font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pontano+Sans&display=swap');
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      >
        {/* Background Image and Overlay Container */}
       <div className="absolute inset-0 z-0">
  <img
    src="https://cdn.sanity.io/images/9w6n0tb6/production/df19db700657bdf0225835a8744254a57f3b9613-1536x1024.webp"
    alt="Mission Background"
    className="w-full h-full object-cover object-center brightness-110"
  />
  {/* This overlay darkens the background image to make the text more readable. */}
  <div className="absolute inset-0 bg-black bg-opacity-60" />
</div>
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-4 text-center max-w-4xl">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 font-sans transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ fontFamily: "'Pontano Sans', 'Inter', sans-serif" }}
          >
            The Mantle Behind the Mission
          </h2>
          <div className="max-w-7xl w-full mx-auto sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%] px-4 sm:px-6 md:px-8">
            <p
              className={`text-[13px] sm:text-[18px] md:text-[20px] leading-normal text-white font-semibold tracking-wide font-sans transition-all duration-700 ease-out transform ${
                isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                fontFamily: "'Pontano Sans', 'Inter', sans-serif",
                transitionDelay: "150ms",
              }}
            >
              By Turning Algorithms Into Fearless Pilots, We Empower Manned And Unmanned Systems To Fly, Fight, And Decide On Their Own, Bringing Order To Chaos And Mission-Critical Support Where Humans And Satellites Can't. Our Adversaries Are Evolving. And So Must We.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
