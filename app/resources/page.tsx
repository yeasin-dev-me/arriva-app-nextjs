'use client'

import React from "react";
import { ArrowRight, BookOpen, FileText, Video, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      name: "Blog Posts",
      icon: BookOpen,
      count: "50+",
      description: "Industry insights, best practices, and technology trends",
      color: "blue"
    },
    {
      name: "Case Studies",
      icon: FileText,
      count: "30+",
      description: "Real-world success stories from our clients",
      color: "green"
    },
    {
      name: "Video Tutorials",
      icon: Video,
      count: "20+",
      description: "Step-by-step guides and technology walkthroughs",
      color: "purple"
    },
    {
      name: "Whitepapers",
      icon: Download,
      count: "15+",
      description: "In-depth technical documentation and research",
      color: "orange"
    }
  ];

  const featuredResources = [
    {
      category: "Blog",
      title: "Building Scalable Fintech Applications: A Complete Guide",
      description: "Learn the best practices for developing secure and compliant financial technology solutions.",
      date: "Dec 2025",
      readTime: "10 min read",
      image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Fintech+Guide"
    },
    {
      category: "Case Study",
      title: "How We Helped a Healthcare Provider Digitalize Patient Records",
      description: "Discover how our HIPAA-compliant solution improved patient care and reduced operational costs by 40%.",
      date: "Nov 2025",
      readTime: "8 min read",
      image: "https://placehold.co/600x400/10B981/FFFFFF?text=Healthcare+Case"
    },
    {
      category: "Whitepaper",
      title: "The Future of E-commerce: AI-Powered Personalization",
      description: "Explore how artificial intelligence is transforming online shopping experiences.",
      date: "Nov 2025",
      readTime: "15 min read",
      image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=AI+Ecommerce"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Resources & Insights
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Expert knowledge, industry insights, and practical guides to help you succeed. 
                Learn from 23+ years of software development experience.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
                  green: "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white",
                  purple: "bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white",
                  orange: "bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white"
                };

                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
                  >
                    <div className={`w-14 h-14 ${colorClasses[category.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-3">{category.count}</p>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Featured Resources
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Handpicked content to help you stay ahead
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-semibold shadow-md">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{resource.date}</span>
                      <span>{resource.readTime}</span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-4 group/link"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                View All Resources
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest insights, case studies, and industry trends delivered to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Expert Guidance?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Our team is ready to help you navigate complex technology challenges and find the right solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-700 border-2 border-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
