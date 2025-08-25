"use client"

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Shield, Zap, TrendingUp, Calendar, DollarSign,
  AlertCircle, CheckCircle, ArrowRight, Play, Pause, RefreshCw,
  Layers, Target, Award, Users, Building, CreditCard, PiggyBank,
  Activity, BarChart3, Clock, Lock, Sparkles, ChevronDown
} from 'lucide-react';

const TrinityLandingPage = () => {
  const [activeRule, setActiveRule] = useState(1);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);
  const [demoDay, setDemoDay] = useState(1);
  const [demoRunning, setDemoRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    if (demoRunning && demoDay < 30) {
      const demoInterval = setTimeout(() => {
        setDemoDay(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(demoInterval);
    }
  }, [demoRunning, demoDay]);

  const rules = [
    {
      id: 1,
      title: "Save Up For It",
      icon: PiggyBank,
      description: "Like a digital piggy bank, Trinity automatically reserves daily income for upcoming expenses.",
      example: "£2,000 rent due in 20 days? Trinity blocks £100/day for 20 days. Simple."
    },
    {
      id: 2,
      title: "Find Another Way",
      icon: RefreshCw,
      description: "Can't save in time? Trinity offers smart alternatives with clear trade-offs.",
      example: "Need £3,000 in 5 days but can only save £500? Choose: savings withdrawal, loan, or reschedule."
    },
    {
      id: 4,
      title: "Adapt to Change",
      icon: Zap,
      description: "Priorities shift? Trinity instantly recalculates everything like a financial Tetris master.",
      example: "Emergency AC repair? Trinity reshuffles all expenses to accommodate it immediately."
    },
    {
      id: 5,
      title: "The Subscription Model",
      icon: Layers,
      description: "For distant expenses, take small daily 'subscriptions' instead of blocking huge chunks.",
      example: "£3,000 needed in 90 days? Allocate 15% daily for all 90 days instead of blocking 30 full days."
    },
    {
      id: 6,
      title: "Keep the Lights On",
      icon: Shield,
      description: "Run multiple subscriptions while always maintaining emergency cash reserves.",
      example: "Trinity ensures you never drop below survival money, canceling lowest-priority subscriptions if needed."
    },
    {
      id: 7,
      title: "Everything Connected",
      icon: Activity,
      description: "Every financial decision ripples through your entire cash flow - Trinity tracks it all.",
      example: "Pay off a loan? More daily capacity. Take a penalty? Temporarily reduced flow. All automatic."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      business: "Digital Marketing Agency",
      quote: "Before Trinity, I was constantly stressed about cash flow. Now I can see 30 days ahead and never worry about making payroll.",
      metric: "Zero missed payments in 18 months"
    },
    {
      name: "Marcus Johnson",
      business: "Construction Company",
      quote: "Trinity saved my business. It caught a cash crunch 3 weeks early and gave me options. Without it, I'd have defaulted on a major supplier.",
      metric: "£45,000 in avoided emergency loans"
    },
    {
      name: "Emma Williams",
      business: "Retail Chain",
      quote: "The subscription model for distant expenses is genius. I'm funding expansion without blocking operational cash.",
      metric: "3 new locations opened with optimal cash flow"
    }
  ];

  const faqs = [
    {
      question: "How is this different from regular budgeting software?",
      answer: "Traditional budgeting tells you what you've spent. Trinity tells you what you CAN spend today while guaranteeing future obligations are met. It's predictive, not reactive."
    },
    {
      question: "What if my revenue fluctuates?",
      answer: "Trinity recalculates everything in real-time. Revenue spike? More capacity. Slow week? It adjusts allocations to keep you safe."
    },
    {
      question: "How do penalties work?",
      answer: "Think of penalties like a financial hangover - they reduce your daily capacity but fade over time. A £10/day penalty might drop to £5/day after 6 months."
    },
    {
      question: "Can I override Trinity's suggestions?",
      answer: "Absolutely. Trinity provides options and recommendations, but you always make the final decision. It's your advisor, not your boss."
    },
    {
      question: "What businesses benefit most?",
      answer: "Any business with irregular expenses and regular income: agencies, consultancies, retail, construction, restaurants - if cash flow keeps you up at night, Trinity helps."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Never Run Out of
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Cash Again
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Trinity sees 30 days into your financial future, automatically juggling expenses 
              so you always have money when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Watch 2-Min Demo
              </button>
            </div>
            <p className="mt-6 text-gray-400">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur rounded-3xl p-12 border border-red-500/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Hidden Business Killer
                </h2>
                <p className="text-gray-300 mb-4 text-lg">
                  <span className="text-red-400 font-bold">82% of businesses fail</span> due to cash flow problems, 
                  not lack of profitability.
                </p>
                <p className="text-gray-300 mb-6">
                  You might have £50,000 coming next month, but if payroll is tomorrow and you're short £5,000, 
                  you're facing disaster. Traditional accounting shows you the past. 
                  Bank balances show you today. Neither shows you tomorrow.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-red-400" size={20} />
                    <span className="text-gray-300">Surprise expenses destroy planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-red-400" size={20} />
                    <span className="text-gray-300">Money tied up in wrong places</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-red-400" size={20} />
                    <span className="text-gray-300">Emergency loans eat profits</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-red-500/30">
                  <h3 className="text-white font-bold mb-4">Without Trinity:</h3>
                  <div className="space-y-4">
                    <div className="bg-red-500/10 rounded-lg p-4">
                      <div className="text-sm text-gray-400">Monday</div>
                      <div className="text-white">Bank Balance: £8,000</div>
                      <div className="text-green-400">Feeling good!</div>
                    </div>
                    <div className="bg-red-500/20 rounded-lg p-4">
                      <div className="text-sm text-gray-400">Friday</div>
                      <div className="text-white">Payroll Due: £6,000</div>
                      <div className="text-yellow-400">Getting nervous...</div>
                    </div>
                    <div className="bg-red-500/30 rounded-lg p-4">
                      <div className="text-sm text-gray-400">Next Monday</div>
                      <div className="text-white">Rent + Supplier: £4,000</div>
                      <div className="text-red-400">CRISIS! Only £2,000 left!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - The 7 Rules */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The 7 Smart Rules That
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Keep You Afloat
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trinity follows battle-tested financial principles that adapt to your unique situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.id}
                  onClick={() => setActiveRule(rule.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                    activeRule === rule.id 
                      ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500 scale-105' 
                      : 'bg-gray-900/50 border border-gray-700 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${
                      activeRule === rule.id 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
                        : 'bg-gray-800'
                    }`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Rule {rule.id}: {rule.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-3">{rule.description}</p>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-sm text-cyan-400 font-mono">{rule.example}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">See Trinity in Action</h2>
            <p className="text-xl text-gray-300">Watch how Trinity handles a typical month</p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Sarah's Marketing Agency</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setDemoRunning(!demoRunning)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  {demoRunning ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button 
                  onClick={() => {setDemoDay(1); setDemoRunning(false)}}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  <RefreshCw size={20} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Daily Capacity</div>
                <div className="text-2xl font-bold text-white">£100</div>
                <div className="text-sm text-green-400">After regular bills</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Available Today</div>
                <div className="text-2xl font-bold text-cyan-400">
                  £{Math.max(20, 100 - (demoDay * 3))}
                </div>
                <div className="text-sm text-gray-400">Min reserve: £20</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Day</div>
                <div className="text-2xl font-bold text-white">{demoDay} of 30</div>
                <div className="text-sm text-gray-400">Current month</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`bg-gradient-to-r ${demoDay >= 14 ? 'from-green-500/20 to-green-600/20' : 'from-yellow-500/20 to-orange-500/20'} rounded-lg p-4 transition-all duration-500`}>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold">Office Rent</div>
                    <div className="text-sm text-gray-400">Due: Day 14</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">£1,400</div>
                    <div className="text-sm text-green-400">
                      {demoDay >= 14 ? 'PAID' : `Accumulating: £${Math.min(1400, demoDay * 100)}`}
                    </div>
                  </div>
                </div>
                <div className="mt-2 bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${Math.min(100, (demoDay / 14) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold">New Laptop</div>
                    <div className="text-sm text-gray-400">Due: Day 30</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">£1,500</div>
                    <div className="text-sm text-yellow-400">Using savings (£2/day penalty)</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold">Client Event</div>
                    <div className="text-sm text-gray-400">Due: Day 45</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">£2,000</div>
                    <div className="text-sm text-purple-400">20% daily subscription active</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-cyan-400">
                {demoDay < 14 
                  ? "Trinity is accumulating £100/day for rent. Other expenses handled via alternatives."
                  : demoDay === 14
                  ? "Rent paid! Trinity now reallocates daily capacity to other needs."
                  : "With rent paid, Trinity focuses on rebuilding savings and maintaining subscriptions."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Cash Flow
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <CheckCircle className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Never Miss Payroll</h3>
              <p className="text-gray-300">Trinity ensures employee payments are always protected and prioritized.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
              <Target className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">30-Day Visibility</h3>
              <p className="text-gray-300">See exactly what you can spend today while guaranteeing future obligations.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <Shield className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Emergency Protected</h3>
              <p className="text-gray-300">Always maintains minimum operational cash for unexpected needs.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
              <TrendingUp className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Reduce Debt Costs</h3>
              <p className="text-gray-300">Avoid expensive emergency loans by planning weeks in advance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Growing Businesses
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl p-8 border border-purple-500/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-400">{testimonials[currentTestimonial].business}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Key Result</div>
                  <div className="text-lg font-bold text-cyan-400">{testimonials[currentTestimonial].metric}</div>
                </div>
              </div>
              <p className="text-xl text-gray-300 italic mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex gap-2 justify-center">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === idx ? 'w-8 bg-purple-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">For small businesses</p>
              <div className="text-4xl font-bold text-white mb-6">
                £49<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  Up to £10k monthly expenses
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  30-day forecasting
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 border-2 border-purple-500 scale-105">
              <div className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-300 mb-6">For growing companies</p>
              <div className="text-4xl font-bold text-white mb-6">
                £149<span className="text-lg text-gray-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle size={20} className="text-green-400" />
                  Up to £100k monthly expenses
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle size={20} className="text-green-400" />
                  90-day forecasting
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle size={20} className="text-green-400" />
                  Priority support
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle size={20} className="text-green-400" />
                  API access
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-xl transition">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large operations</p>
              <div className="text-4xl font-bold text-white mb-6">
                Custom
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  Unlimited expenses
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  365-day forecasting
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  Dedicated support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-green-400" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition"
                >
                  <span className="text-white font-semibold text-left">{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 py-4 border-t border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stop Losing Sleep Over Cash Flow
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that never worry about running out of money. 
              30-day free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <p className="mt-6 text-white/70">
              Average user saves £12,000/year in avoided emergency loans
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Trinity
              </h3>
              <p className="text-gray-400">
                The intelligent expense scheduling system that keeps your business afloat.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Trinity Expense Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrinityLandingPage;