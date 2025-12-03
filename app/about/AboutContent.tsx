'use client'

import Image from "next/image";
import React from "react";
import { ArrowRight, BrainCircuit, CheckCircle, Target } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://placehold.co/400x400/E0F2FE/0EA5E9?text=CEO",
  },
  {
    name: "Jane Smith",
    role: "CTO & AI Lead",
    image: "https://placehold.co/400x400/F3E8FF/8B5CF6?text=CTO",
  },
  {
    name: "Peter Jones",
    role: "Head of Engineering",
    image: "https://placehold.co/400x400/D1FAE5/10B981?text=Engineer",
  },
  {
    name: "Samantha Lee",
    role: "Lead Product Designer",
    image: "https://placehold.co/400x400/FFE4E6/F43F5E?text=Designer",
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Arriva Soft: Your Trusted Software Development & AI Agency
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Since 2001, Arriva Soft has been a leading software builder firm, delivering top-tier web development,
                app development, and innovative AI agent products. We are the dedicated engineering partner you can trust to
                build your vision.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600">
                To be the best software builder agency by empowering businesses with innovative and scalable technology
                solutions. We are committed to transforming complex challenges into elegant, high-performance web and mobile
                applications, driving growth and efficiency for our clients.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BrainCircuit className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                To lead the future of digital innovation by pioneering next-generation AI agent products and custom software
                solutions. We aim to be the most sought-after software development firm for companies looking to build reliable,
                intelligent, and user-centric technology.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://placehold.co/600x450/F0F9FF/0B69FF?text=Innovation"
                alt="Arriva Soft - Innovation in Software Development"
                fill
                className="rounded-2xl object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Story: 23+ Years of Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Founded in 2001, Arriva Soft began with a simple goal: to be the best software builder firm for businesses of all
              sizes. Over two decades, we have grown into a global team of 850+ tech professionals, delivering over 200
              successful projects in web development, app development, and enterprise software. Today, we are at the forefront of
              the AI revolution, developing cutting-edge AI agent products that redefine business automation.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The driving force behind our success as a top software development agency.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={`Photo of ${member.name}, ${member.role} at Arriva Soft`}
                      width={192}
                      height={192}
                      className="rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Arriva Soft is the Best Software Builder Firm for You
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise in Web & App Development",
                  description:
                    "From complex web platforms to engaging mobile apps, our developers deliver high-quality, scalable solutions.",
                },
                {
                  title: "Pioneers in AI Agent Products",
                  description: "We are at the forefront of AI, building intelligent agents that automate tasks and provide valuable insights.",
                },
                {
                  title: "ISO 27001 Certified Quality",
                  description: "Our commitment to security and quality is proven, ensuring your project is in safe hands.",
                },
                {
                  title: "Dedicated Development Teams",
                  description: "Scale your capabilities with our pre-vetted, dedicated software development teams.",
                },
                {
                  title: "Proven Track Record",
                  description: "With over 200 successful projects, we have a history of delivering results.",
                },
                {
                  title: "Client-Centric Approach",
                  description: "We partner with you to understand your goals and deliver solutions that provide real business value.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="ml-9 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Partner with a Top Software Development Agency
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Ready to build your next project? Contact Arriva Soft today for a free consultation and discover why we are the best
              software builder firm for your needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors hover:bg-gray-100"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
