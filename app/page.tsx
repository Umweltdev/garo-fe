import Link from 'next/link';
import { Brain, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Choose Your Solution
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          Select which product you'd like to explore
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/garo">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex justify-center mb-6">
                <Brain className="w-16 h-16 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">GARO</h2>
              <p className="text-slate-300 mb-4">
                Genetic Algorithm Restocking Optimisation
              </p>
              <p className="text-sm text-slate-400">
                Intelligent inventory management for restaurants, hotels, and
                manufacturing
              </p>
            </div>
          </Link>

          <Link href="/trinity">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-16 h-16 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Trinity</h2>
              <p className="text-slate-300 mb-4">Expense Management System</p>
              <p className="text-sm text-slate-400">
                Never run out of cash with intelligent expense scheduling
              </p>
            </div>
          </Link>
        </div>

        <p className="mt-12 text-slate-400">
          You can navigate between these pages using the links above or browser
          navigation
        </p>
      </div>
    </main>
  );
}