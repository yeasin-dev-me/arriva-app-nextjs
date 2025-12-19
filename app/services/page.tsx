import { Metadata } from 'next';
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SERVICE_DETAIL_SECTIONS,
  SERVICES_HERO_CONTENT,
  SERVICES_SUPPORT_CONTENT,
} from "@/data";

export const metadata: Metadata = {
  title: 'Software Development Services | Web & App Development | Arriva Soft',
  description:
    'Arriva Soft builds SaaS products, industry-grade platforms, and internal tools for startups and growing businesses. Explore our end-to-end services across HealthTech, logistics, real estate, education, SMEs, and more.',
  keywords: [
    'software development services',
    'custom software development',
    'web application development',
    'web development services',
    'mobile app development',
    'app development services',
    'AI development services',
    'cloud and devops solutions',
    'dedicated development team',
    'software outsourcing',
    'enterprise software services',
    'UX/UI design services',
    'technology consulting',
    'Arriva Soft services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Software Development Services | Web & App Development | Arriva Soft',
    description:
      'End-to-end software development covering SaaS MVPs, HealthTech, real estate, logistics, education, SME automation, and custom websites.',
    url: '/services',
  },
  twitter: {
    title: 'Software Development Services | Arriva Soft',
    description:
      'SaaS MVPs, industry software, internal tools, and custom websites for startups and growing businesses.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              {SERVICES_HERO_CONTENT.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {SERVICES_HERO_CONTENT.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6">
              {SERVICES_HERO_CONTENT.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
              >
                Request a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-200 text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Software built for real operators
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                We blend SaaS product thinking with deep industry context to replace manual workflows and unlock scale.
              </p>
            </div>

            <div className="mt-12 space-y-10">
              {SERVICE_DETAIL_SECTIONS.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      {section.eyebrow && (
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-700 font-semibold">
                          {section.eyebrow}
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    {section.highlight && (
                      <span className="text-lg font-semibold text-blue-600">
                        {section.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                    {section.intro}
                  </p>

                  <div className="grid gap-8 mt-8 md:grid-cols-2">
                    {section.blocks.map((block) => (
                      <div key={block.label}>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold">
                          {block.label}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {section.outcome && (
                    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        Outcome
                      </p>
                      <p className="text-lg text-blue-900 mt-2">
                        {section.outcome}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {SERVICES_SUPPORT_CONTENT.title}
            </h2>
            <p className="text-lg text-gray-200 mt-4">
              {SERVICES_SUPPORT_CONTENT.description}
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
              {SERVICES_SUPPORT_CONTENT.items.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <CheckCircle className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={SERVICES_SUPPORT_CONTENT.cta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg mt-10 shadow-lg hover:bg-gray-100 transition"
            >
              {SERVICES_SUPPORT_CONTENT.cta.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Start Your Project
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Let’s discuss your idea, challenge, or system requirements and map the highest-impact software approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
              >
                Contact Arriva Soft
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 rounded-2xl font-semibold text-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
