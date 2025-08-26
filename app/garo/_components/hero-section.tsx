import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import FeatureSection from "./features-section";

const HeroSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    waste: 0,
    cost: 0,
    stockouts: 0,
  });

  useEffect(() => {
    // Animate stats after component mounts
    setAnimatedStats({
      waste: 42,
      cost: 28,
      stockouts: 91,
    });
  }, []);

  return (
    <section className="pt-40 md:pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden 0 min-h-screen flex items-center">
      {/* Animated background blobs with parallax */}

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Decorative gradient line with subtle animation */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] rounded-full opacity-90 animate-pulse"></div>

        {/* Headline with text reveal animation */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#6E3EF4] to-[#409AFF] bg-clip-text text-transparent leading-tight tracking-tight">
          Evolve Your Restocking. Cut Waste <br /> Reduce Stockouts.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Genetic Algorithm Restocking Optimisation with SquareUp API
          Integration — the intelligent evolution engine that transforms your
          inventory management
        </p>

        {/* CTA Buttons with shine effect and tilt */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <button
              className="relative px-8 py-4 h-16 sm:h-auto rounded-xl text-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden flex items-center justify-center"
              style={{
                background: "linear-gradient(90deg, #6E3EF4 0%, #409AFF 100%)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Simulate My Strategy
                <svg
                  className="inline ml-2 w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:left-full transition-all duration-500"></div>
            </button>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <button className="relative px-8 py-4 h-16 sm:h-auto border-2 border-[#6E3EF4] rounded-xl text-lg font-semibold text-[#6E3EF4] hover:bg-[#6E3EF4]/10 hover:text-[#409AFF] transition-all duration-300 group overflow-hidden flex items-center justify-center">
              <span className="relative z-10">
                {" "}
                Book Consultation (€40-€75)
              </span>
              <div className="absolute inset-0 bg-[#6E3EF4]/5 group-hover:bg-[#6E3EF4]/15 transition-colors duration-300"></div>
            </button>
          </Tilt>
        </div>

        {/* Animated Stats with CountUp and Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16">
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#6E3EF4]/20 hover:border-[#6E3EF4] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-4xl font-bold text-[#6E3EF4]">
                <CountUp
                  start={0}
                  end={animatedStats.waste}
                  duration={2.5}
                  suffix="%"
                />
              </div>
              <div className="text-gray-700 mt-2">Waste Reduction</div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#409AFF]/20 hover:border-[#409AFF] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-4xl font-bold text-[#409AFF]">
                <CountUp
                  start={0}
                  end={animatedStats.cost}
                  duration={2.5}
                  suffix="%"
                />
              </div>
              <div className="text-gray-700 mt-2">Lower Supplier Cost</div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#6E3EF4]/20 hover:border-[#6E3EF4] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <div className="text-4xl font-bold text-[#6E3EF4]">
                <CountUp
                  start={0}
                  end={animatedStats.stockouts}
                  duration={2.5}
                  suffix="%"
                />
              </div>
              <div className="text-gray-700 mt-2">Fewer Stockouts</div>
            </div>
          </Tilt>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hero-title {
          background-size: 200% auto;
          animation: textShine 5s ease-in-out infinite alternate;
        }
        @keyframes textShine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
