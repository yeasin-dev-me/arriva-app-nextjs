import { Metadata } from 'next';
import React from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { industriesData } from "@/data";

export const metadata: Metadata = {
  title: 'Industries We Serve | Arriva Soft',
  description: 'Arriva Soft provides expert software development for Fintech, Healthcare, E-commerce, and Enterprise sectors. Discover our industry-specific solutions and success stories.',
  keywords: [
    'fintech software development',
    'healthcare software solutions',
    'e-commerce platform development',
    'enterprise software firm',
    'logistics software',
    'edtech solutions',
    'real estate software',
    'industry-specific software',
    'Arriva Soft industries',
  ],
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries We Serve | Arriva Soft',
    description: 'Expert software solutions for Fintech, Healthcare, E-commerce, and more. See how we drive success in your industry.',
    url: '/industries',
  },
  twitter: {
    title: 'Industries We Serve | Arriva Soft',
    description: 'Proven expertise across multiple sectors with 200+ successful projects delivered.',
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Proven expertise across multiple sectors with 200+ successful projects delivered. 
                We understand the unique challenges and opportunities in each industry.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {industriesData.map((industry, index) => (
                <div
                  key={index}
                  className={`group ${industry.bgColor} rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
                >
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>

                  {/* Industry Name */}
                  <h3 className={`text-2xl md:text-3xl font-bold ${industry.textColor} mb-4`}>
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Projects Count Badge */}
                  <div className={`inline-block px-4 py-2 ${industry.bgColor.replace("50", "100")} ${industry.textColor} rounded-full text-sm font-semibold mb-6`}>
                    {industry.projects}
                  </div>

                  {/* Case Study Link */}
                  <a
                    href={industry.caseStudy}
                    className={`inline-flex items-center gap-2 ${industry.textColor} font-semibold hover:opacity-80 transition-opacity group/link`}
                  >
                    <span>View case studies</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Track Record
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Numbers that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</p>
                <p className="text-gray-600 font-medium">Total Projects</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">98%</p>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">850+</p>
                <p className="text-gray-600 font-medium">Tech Professionals</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">23+</p>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Whatever your industry, we have the expertise and experience to deliver exceptional results.
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
