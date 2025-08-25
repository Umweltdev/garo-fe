"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Check,
  TrendingUp,
  Package,
  Clock,
  Shield,
  Users,
  BarChart3,
  AlertCircle,
  ArrowRight,
  Zap,
  Database,
  Brain,
  RefreshCw,
} from "lucide-react";

const GAROLandingPage = () => {
  const [activeTab, setActiveTab] = useState("restaurants");
  const [scrolled, setScrolled] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    waste: 0,
    cost: 0,
    stockouts: 0,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Animate stats
    const interval = setInterval(() => {
      setAnimatedStats((prev) => ({
        waste: Math.min(prev.waste + 1, 30),
        cost: Math.min(prev.cost + 1, 15),
        stockouts: Math.min(prev.stockouts + 2, 40),
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const industries = {
    restaurants: {
      title: "Restaurants & Food Chains",
      icon: "🍴",
      description:
        "Slash food waste, extend shelf life, and keep kitchens stocked.",
      benefits: [
        "30% waste reduction",
        "Smart FIFO/FEFO",
        "Real-time demand prediction",
      ],
    },
    hotels: {
      title: "Hotels & Hospitality",
      icon: "🏨",
      description:
        "Manage perishables, amenities, and maintenance parts seamlessly.",
      benefits: [
        "Predictive maintenance",
        "Multi-location sync",
        "Automated reordering",
      ],
    },
    manufacturing: {
      title: "Service & Manufacturing",
      icon: "⚙️",
      description:
        "Predict equipment failures, optimise spare parts, and reduce downtime costs.",
      benefits: [
        "MTBF/MTTR tracking",
        "Criticality scoring",
        "Downtime prevention",
      ],
    },
  };

  const faqs = [
    {
      q: "What if I already use an ERP?",
      a: "GARO works alongside ERPs—enhancing decision quality, not replacing tools.",
    },
    {
      q: "Is it secure?",
      a: "Fully GDPR-compliant with role-based access & encryption.",
    },
    {
      q: "I'm a small business. Can I afford this?",
      a: "Built for SMEs — minimal SKU requirements, instant ROI tracking, and flexible pricing.",
    },
    {
      q: "How does GARO connect to my system?",
      a: "GARO integrates directly with SquareUp POS via API or CSV upload.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              GARO
            </span>
          </div>
          <div className="flex space-x-6">
            <button className="px-6 py-2 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300">
              Book Consultation
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
              Run Free Simulation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Evolve Your Restocking. Cut Waste. Reduce Stockouts.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Genetic Algorithm Restocking Optimisation with SquareUp API
              Integration — the intelligent evolution engine that transforms
              your inventory management
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Run a Free Simulation <ChevronRight className="inline ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-indigo-400 rounded-xl text-lg font-semibold hover:bg-indigo-400/20 transition-all duration-300">
                Book Consultation (€40-€75)
              </button>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-indigo-400">
                {animatedStats.waste}%
              </div>
              <div className="text-slate-300 mt-2">Waste Reduction</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-400">
                {animatedStats.cost}%
              </div>
              <div className="text-slate-300 mt-2">Lower Supplier Cost</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-pink-400">
                {animatedStats.stockouts}%
              </div>
              <div className="text-slate-300 mt-2">Fewer Stockouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-5 h-5 text-blue-400" />
              <span>No Code Change Needed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>CSV/API Integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-purple-400" />
              <span>100+ Strategies Simulated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Who Is GARO For?
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(industries).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {industries[key].icon} {industries[key].title}
              </button>
            ))}
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold mb-4">
              {industries[activeTab].title}
            </h3>
            <p className="text-slate-300 mb-6">
              {industries[activeTab].description}
            </p>
            <div className="space-y-3">
              {industries[activeTab].benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-indigo-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border-2 border-indigo-400 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </div>
              <h3 className="text-2xl font-bold mb-4">Early Adopter Special</h3>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                €2,500
              </div>
              <p className="text-slate-400 mb-6">Now (Regular €5,000)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>GARO™ Inventory Optimisation Platform</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>SquareUp POS & Payments Integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Full Analytics Admin Dashboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Complete Onboarding & Support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Purchase Now
              </button>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Consultation Options</h3>
              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">30-Minute Session</span>
                    <span className="text-2xl font-bold text-indigo-400">
                      €40
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Quick assessment & recommendations
                  </p>
                  <button className="w-full mt-4 py-2 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400/20 transition-all duration-300">
                    Book 30 Minutes
                  </button>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">1-Hour Deep Dive</span>
                    <span className="text-2xl font-bold text-purple-400">
                      €75
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Comprehensive analysis & strategy
                  </p>
                  <button className="w-full mt-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300">
                    Book 1 Hour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How GARO Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Connect SquareUp",
                desc: "Import sales/inventory data",
                icon: Package,
              },
              {
                step: 2,
                title: "Evolution Engine",
                desc: "Simulate 1000s of strategies",
                icon: Brain,
              },
              {
                step: 3,
                title: "Best Plan Selected",
                desc: "AI picks optimal strategy",
                icon: TrendingUp,
              },
              {
                step: 4,
                title: "Execute & Save",
                desc: "Approve & pay suppliers",
                icon: BarChart3,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="font-bold text-lg">{item.step}</span>
                  </div>
                  <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-indigo-400 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-indigo-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Core Functionality
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Genetic Algorithm",
                desc: "Evolutionary computation simulates thousands of restocking strategies",
                icon: Brain,
              },
              {
                title: "Multi-Supplier Management",
                desc: "Balance vendor lead times, costs, and reliability",
                icon: Users,
              },
              {
                title: "Perishable Optimisation",
                desc: "Shelf life, spoilage rates, and rotation strategies",
                icon: Clock,
              },
              {
                title: "Demand Forecasting",
                desc: "Learn seasonality & volatility patterns",
                icon: TrendingUp,
              },
              {
                title: "Auto Reorder Points",
                desc: "Dynamic thresholds based on real consumption",
                icon: RefreshCw,
              },
              {
                title: "Predictive Maintenance",
                desc: "MTBF/MTTR tracking for equipment",
                icon: AlertCircle,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-400 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-400 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-indigo-400">
                  {faq.q}
                </h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-indigo-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Evolve Your Inventory?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let GARO simulate thousands of strategies for your business — and
            discover how much you can save.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Simulate My Strategy <Zap className="inline ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-indigo-400 rounded-xl text-lg font-semibold hover:bg-indigo-400/20 transition-all duration-300">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Brain className="w-6 h-6 text-indigo-400" />
            <span className="text-lg font-semibold">
              GARO - Genetic Algorithm Restocking Optimisation
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 GARO. Built for SMEs ready to evolve.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GAROLandingPage;
