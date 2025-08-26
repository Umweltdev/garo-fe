import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Brain, TrendingUp, BarChart3 } from "lucide-react";
import CoreFunctionality from "./core-functionality";

gsap.registerPlugin(ScrollTrigger);

const steps = [
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
];

interface Step {
  step: number;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CardProps {
  item: Step;
  i: number;
}

const Card = ({ item, i }: CardProps) => {


    const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={cardRef} className="relative group">
      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/30 transition-all duration-300">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-md">
          <span className="font-bold text-lg text-white">{item.step}</span>
        </div>
        <item.icon className="w-8 h-8 text-purple-300 mb-4 group-hover:text-purple-200 transition-colors duration-300" />
        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-purple-100 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-indigo-200/80 text-sm group-hover:text-indigo-100 transition-colors duration-300">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

//
// -------- Variant A (Dark Gradient Background Only) --------
//
export const HowGaroWorksFade = () => {
  return (
    <section className="relative py-20 mt-10 px-6 overflow-hidden">
      {/* Only dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-100 bg-clip-text text-transparent">
          How GARO Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <Card key={i} item={item} i={i} />
          ))}
        </div>
      </div>
      <CoreFunctionality />
    </section>
  );
};

//
// -------- Variant B (Island Card) --------
//
export const HowGaroWorksCard = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Dark background inside the card */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950" />

        <div className="relative z-10 p-12">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-100 bg-clip-text text-transparent">
            How GARO Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <Card key={i} item={item} i={i} />
            ))}
          </div>
          <CoreFunctionality />
        </div>
      </div>
    </section>
  );
};

export default HowGaroWorksFade; // 👈 default export (fade version)
