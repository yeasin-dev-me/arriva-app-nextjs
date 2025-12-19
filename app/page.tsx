'use client'

import { ArrowRight, CheckCircle } from "lucide-react";
import {
  EVENT_BANNERS,
  HOME_AUDIENCES,
  HOME_CAPABILITIES,
  HOME_CTA,
  HOME_HERO_CONTENT,
  HOME_WHY_POINTS,
} from "@/data";
import Header from "@/components/Header";
import EventBannerComponent from "@/components/EventBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {EVENT_BANNERS.filter((b) => b.isActive).map((banner) => (
        <EventBannerComponent key={banner.id} banner={banner} />
      ))}

      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-gray-50 py-16 md:py-24">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-200/20 blur-3xl" aria-hidden></div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                  {HOME_HERO_CONTENT.eyebrow}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {HOME_HERO_CONTENT.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
                  {HOME_HERO_CONTENT.description}
                </p>
                <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-gray-900 text-lg font-semibold">
                    {HOME_HERO_CONTENT.highlight}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={HOME_HERO_CONTENT.primaryCta.href}
                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition"
                  >
                    {HOME_HERO_CONTENT.primaryCta.label}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  {HOME_HERO_CONTENT.secondaryCta && (
                    <a
                      href={HOME_HERO_CONTENT.secondaryCta.href}
                      className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-blue-600 bg-white border border-blue-200 rounded-xl shadow hover:bg-blue-50 transition"
                    >
                      {HOME_HERO_CONTENT.secondaryCta.label}
                    </a>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 flex flex-col gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
                    Who We Work With
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {HOME_AUDIENCES.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-blue-600 text-white">
                    <p className="text-sm uppercase tracking-widest text-blue-100">Focus</p>
                    <p className="text-3xl font-bold mt-2">SaaS & Internal Systems</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-900 text-white">
                    <p className="text-sm uppercase tracking-widest text-gray-300">Approach</p>
                    <p className="text-3xl font-bold mt-2">Product-Driven Pods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Purpose-built software for every growth stage
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Startup product squads, industry-grade platforms, and high-converting digital experiences.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {HOME_CAPABILITIES.map((capability) => (
                <div
                  key={capability.title}
                  className="h-full rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {capability.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Arriva Soft */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                  Why Arriva Soft
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Ship faster, smarter, and with confidence
                </h2>
                <p className="text-blue-100 mt-4 text-lg">
                  We embed product thinking, architecture discipline, and support models built for long-term momentum.
                </p>
              </div>
              <div className="grid gap-4">
                {HOME_WHY_POINTS.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/20"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-300" />
                    <span className="text-lg font-semibold">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {HOME_CTA.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {HOME_CTA.description}
            </p>
            <a
              href={HOME_CTA.primaryCta.href}
              className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              {HOME_CTA.primaryCta.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
