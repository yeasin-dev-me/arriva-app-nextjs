import React from "react";
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, BrainCircuit } from "lucide-react";

const SEOContentSection: React.FC = () => {
  return (
    <>
      {/* Why Choose Arriva Soft - SEO Content Block */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                Why Choose Arriva Soft
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                AI-Native Software Studio for Bold Startups
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Arriva Soft</strong> is a world-class <strong>software development company</strong> and <strong>AI product studio</strong> launched in 2025 to help founders ship faster. We specialize in <strong>custom software development</strong>, <strong>web application development</strong>, <strong>mobile app development</strong>, and next-gen <strong>AI agent products</strong> crafted by startup-native squads.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built by veteran builders from high-growth companies, our <strong>software development agency</strong> embeds multi-disciplinary pods that launch MVPs, scale platforms, and guide product strategy for venture-backed founders across Fintech, Healthcare, E-commerce, and Enterprise.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">ISO 27001 Certified</p>
                    <p className="text-sm text-gray-600">Enterprise-grade security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">150+ Product Engineers</p>
                    <p className="text-sm text-gray-600">Full-stack, mobile, and AI talent</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">98% Client Satisfaction</p>
                    <p className="text-sm text-gray-600">Founder-obsessed delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Global Launch Cities</p>
                    <p className="text-sm text-gray-600">SF · London · Singapore hubs</p>
                  </div>
                </div>
              </div>

              <a
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group mt-4"
              >
                Learn more about Arriva Soft
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right - Service Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Code className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">Custom web applications built with React, Next.js, and modern technologies.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Smartphone className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">App Development</h3>
                <p className="text-sm text-gray-600">Native iOS, Android, and cross-platform mobile applications.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Globe className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Software Development</h3>
                <p className="text-sm text-gray-600">Enterprise-grade custom software solutions for your business.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <BrainCircuit className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Agent Products</h3>
                <p className="text-sm text-gray-600">Intelligent AI agents and automation solutions for modern businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Content Block */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Leading Software Development Company &amp; AI Solutions Provider
            </h2>
            
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>Arriva Soft</strong> is a globally distributed <strong>software development agency</strong> headquartered in Bangladesh with hybrid teams across North America, Europe, and Asia. Founded in 2025, we blend product strategy, design, and engineering to help startups launch faster without sacrificing quality.
              </p>

              <p>
                Our expertise spans <strong>web application development</strong>, <strong>mobile app development</strong>, <strong>enterprise software solutions</strong>, and breakthrough <strong>AI agent products</strong>. Whether you need a market-ready MVP, a native mobile experience, or intelligent automation, our product strategists and 150+ engineers deliver measurable outcomes.
              </p>

              <p>
                As a trusted <strong>software builder firm</strong>, we create scalable solutions for <strong>Fintech</strong>, <strong>Healthcare</strong>, <strong>E-commerce</strong>, <strong>EdTech</strong>, and <strong>Enterprise</strong> teams. ISO 27001 controls and modern DevSecOps practices keep every release secure from day one.
              </p>

              <p>
                Looking for a reliable <strong>software development company</strong> to bring your vision to life? Whether it&apos;s <strong>web development</strong>, <strong>app development</strong>, or <strong>AI development</strong>, Arriva Soft is the startup-friendly partner that helps you validate, iterate, and scale with confidence.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Next Software Project?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Arriva Soft—a leading <strong className="text-white">software development agency</strong> trusted by 100+ companies worldwide for <strong className="text-white">web development</strong>, <strong className="text-white">app development</strong>, and <strong className="text-white">AI solutions</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://calendly.com/meeting-brainstation-23/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOContentSection;
