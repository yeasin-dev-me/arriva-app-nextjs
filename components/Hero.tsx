import React from "react";
import { ArrowRight, Play, CheckCircle, Shield, Users } from "lucide-react";
import { HERO_SLIDES } from "@/data";
import type { HeroContent } from "@/types";

interface HeroProps {
  slide: HeroContent;
  onSlideChange: (index: number) => void;
}

const Hero: React.FC<HeroProps> = ({ slide, onSlideChange }) => {
  return (
    <div id="home" className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 overflow-hidden scroll-mt-20">
      {/* Subtle Background Elements - Very minimal */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content - 55% width */}
          <div className="space-y-6 md:space-y-8">
            {/* Trust Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700">
              <Shield className="w-4 h-4" />
              World-Class AI Product Studio • Founded 2025
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-2xl">
              {slide.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mt-4 md:mt-6">
              {slide.subtext}
            </p>

            {/* Value Propositions - Horizontal Layout */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base mt-6 md:mt-8">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Pre-vetted Talent
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Fast Onboarding
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Scalable Teams
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
              <a
                href="#book-demo"
                className="group inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Book A Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#watch-demo"
                className="group inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </a>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center gap-2 mt-8">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => onSlideChange(index)}
                  className={`transition-all duration-300 rounded-full ${
                    slide.id === index
                      ? "w-8 h-2 bg-blue-600"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Visual Elements - 45% width */}
          <div className="relative flex flex-col space-y-6">
            <div className="absolute top-4 right-4 z-10 px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-lg">
              Launched 2025
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-2xl shadow-2xl p-6 md:p-8 text-white border border-blue-500/40 relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
              <p className="text-xs tracking-[0.2em] uppercase text-blue-100/80 font-semibold mb-4">
                AI Product Studio
              </p>
              <h3 className="text-3xl font-bold leading-snug">
                World-class shipping squads for breakout founders.
              </h3>
              <p className="text-base text-blue-100/90 mt-4 leading-relaxed">
                We launch MVPs, scale AI stacks, and embed product leaders directly with your team within days.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-4xl font-bold">48h</p>
                  <p className="text-sm text-blue-100">Average kickoff</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">12</p>
                  <p className="text-sm text-blue-100">AI product pods</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-4xl font-bold text-gray-900 mb-1">150+</p>
                <p className="text-sm text-gray-600 font-medium">
                  Founding Engineers
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  ISO 27001
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Security Ready
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-lg bg-white/80 border border-gray-100 rounded-2xl p-5 shadow-lg">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-white shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-white">
                  +100
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Backed by tier-one accelerators
                </p>
                <p className="text-sm text-gray-600">
                  Partnering with venture-backed founders across SF, London, and Singapore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
