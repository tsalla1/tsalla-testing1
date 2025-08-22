"use client";

import React from 'react';

// Define the props interface for the FeatureCard component for type safety.
interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
}

// Helper component for individual feature cards.
// It now includes a top border to create the separator line as seen in the image.
const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 px-5">
    <div className="pt-6 border-t border-gray-300">
      <h3 className="text-base font-medium mb-3 text-black tracking-tight">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

// Main component that lays out the key features section.
// The styles have been updated for a full-page layout and more accurate text sizes.
export default function DexterSpecifications(): JSX.Element {
  return (
    <>
      {/*
        The link to the "Clash Grotesk" font is included here.
        In a real-world application, this would typically be placed in the <head> of your main HTML file.
      */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>
      <div className="font-clash-grotesk bg-white text-black antialiased flex items-center justify-center min-h-screen w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Header Section */}
          <div className="text-left max-w-4xl mb-20">
            <h1 className="text-8xl font-medium tracking-tight mb-5">
              Key Features
            </h1>
            <p className="text-xl text-gray-600">
              Each feature unlocks new possibilities — precision, power, and performance built into every flight.
            </p>
          </div>

          {/* Features Grid Section */}
          <div className="flex flex-wrap -mx-5">
            <FeatureCard title="Vertical Take-Off & Landing">
              True VTOL freedom: launch from confined spaces and rough terrain with zero setup.
            </FeatureCard>
            <FeatureCard title="Intelligent Autonomy">
              AI-driven navigation and decision-making for missions that adapt in real time.
            </FeatureCard>
            <FeatureCard title="Compact Heavy-Lift">
              Minimal form, maximum payload — engineered to move more with less.
            </FeatureCard>
            <FeatureCard title="Rapid Mission Ready">
              Always ready: deploy in minutes, operate with ease, recover with zero hassle.
            </FeatureCard>
          </div>

        </div>
      </div>
    </>
  );
}
