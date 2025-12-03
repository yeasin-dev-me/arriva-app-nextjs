'use client'

import { useState, useEffect, useCallback } from "react";
import { HERO_SLIDES, EVENT_BANNERS } from "@/data";
import Header from "@/components/Header";
import EventBannerComponent from "@/components/EventBanner";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-cycle the carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Function to handle manual slide change
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlideIndex(index);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Render Active Event Banners */}
      {EVENT_BANNERS.filter((b) => b.isActive).map((banner) => (
        <EventBannerComponent key={banner.id} banner={banner} />
      ))}

      <Header />
      <main>
        {/* Hero Section with Dashboard Carousel */}
        <Hero
          slide={HERO_SLIDES[currentSlideIndex]}
          onSlideChange={handleSlideChange}
        />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Technology Stack */}
        <TechStack />

        {/* Products Section Placeholder */}
        <section id="products" className="py-16 md:py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Coming soon - Innovative products designed to transform your business
            </p>
          </div>
        </section>

        {/* Resources Section Placeholder */}
        <section id="resources" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Resources
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Blog posts, case studies, and guides to help you succeed
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
