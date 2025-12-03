import { Metadata } from 'next';
import React from "react";
import { ArrowRight, Code, Zap, Shield, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Our Products | Arriva Soft',
  description: 'Discover innovative SaaS products from Arriva Soft, including our Enterprise Suite and AI Assistant Platform. Built with cutting-edge technology to transform your business.',
  keywords: [
    'SaaS products',
    'AI assistant platform',
    'enterprise software suite',
    'business management software',
    'cloud security solutions',
    'Arriva Soft products',
    'AI agent products',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Our Products | Arriva Soft',
    description: 'Innovative SaaS products including our Enterprise Suite and AI Assistant Platform, designed to transform business operations.',
    url: '/products',
  },
  twitter: {
    title: 'Our Products | Arriva Soft',
    description: 'Discover our upcoming suite of innovative SaaS products designed to transform how businesses operate.',
  },
};

export default function ProductsPage() {
  const products = [
    {
      name: "Enterprise Suite",
      description: "Comprehensive business management platform with CRM, ERP, and analytics",
      status: "Coming Soon",
      icon: Code,
      color: "blue"
    },
    {
      name: "AI Assistant Platform",
      description: "Intelligent automation and AI-powered business solutions",
      status: "In Development",
      icon: Zap,
      color: "purple"
    },
    {
      name: "SecureCloud",
      description: "Enterprise-grade cloud security and compliance management",
      status: "Beta",
      icon: Shield,
      color: "green"
    },
    {
      name: "Global Connect",
      description: "Multi-region deployment and collaboration platform",
      status: "Planning",
      icon: Globe,
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our Products
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Innovative SaaS products designed to transform how businesses operate. 
                Built with cutting-edge technology and backed by 23+ years of software development expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {products.map((product, index) => {
                const Icon = product.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600",
                  purple: "bg-purple-100 text-purple-600",
                  green: "bg-green-100 text-green-600",
                  orange: "bg-orange-100 text-orange-600"
                };

                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 ${colorClasses[product.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                            {product.status}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {product.description}
                        </p>
                        <button
                          disabled
                          className="inline-flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be the first to know when our products launch. Subscribe to our newsletter for exclusive updates and early access.
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

        {/* Custom Development CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              While our products are in development, we&apos;re ready to build custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-700 border-2 border-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
