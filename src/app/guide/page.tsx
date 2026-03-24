"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { RecommendationCard } from "@/components/recommendation-card";
import { categories } from "@/data/recommendations";
import { Divider } from "@/components/illustrations";

const categoryIcons: Record<string, string> = {
  dinner: "🍝",
  casual: "🍜",
  coffee: "☕",
  bars: "🍷",
  hotels: "🏨",
  "worth-a-stop": "🛍️",
};

export default function GuidePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  const filteredCategories = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  async function handleAccessCheck(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    setError("");

    try {
      const res = await fetch("/api/check-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.hasAccess) {
        setIsUnlocked(true);
      } else {
        setError("No active subscription found for this email. Please subscribe first.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setChecking(false);
    }
  }

  // Show preview mode with blurred content
  if (!isUnlocked) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
              The Full Guide
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-4">
              SF Eats Guide
            </h1>
            <p className="text-brown-medium/70 max-w-xl mx-auto">
              {categories.reduce((acc, c) => acc + c.recommendations.length, 0)}{" "}
              hand-picked spots across {categories.length} categories.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="px-4 py-2 rounded-full text-sm font-medium border border-brown-dark/15 text-brown-medium/60 cursor-default"
              >
                {categoryIcons[cat.id]} {cat.name}
              </button>
            ))}
          </div>

          {/* Blurred preview */}
          <div className="relative">
            <div className="blur-sm pointer-events-none select-none opacity-60">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[0].recommendations.slice(0, 6).map((rec) => (
                  <RecommendationCard key={rec.name} rec={rec} />
                ))}
              </div>
            </div>

            {/* Access overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-cream border-2 border-terracotta/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-brown-dark/10">
                <h3 className="font-serif text-2xl font-bold text-brown-dark text-center mb-2">
                  Unlock the full guide
                </h3>
                <p className="text-sm text-brown-medium/60 text-center mb-6">
                  Already subscribed? Enter your email to access. Otherwise,{" "}
                  <a href="/subscribe" className="text-terracotta underline underline-offset-2">
                    subscribe here
                  </a>
                  .
                </p>
                <form onSubmit={handleAccessCheck} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brown-dark/15 bg-cream-light text-brown-dark placeholder:text-brown-medium/40 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta"
                  />
                  {error && (
                    <p className="text-sm text-terracotta-bright">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={checking}
                    className="w-full px-6 py-3 bg-terracotta text-cream font-semibold rounded-xl hover:bg-terracotta-bright transition-colors disabled:opacity-50"
                  >
                    {checking ? "Checking..." : "Access the guide"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
            The Full Guide
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-4">
            SF Eats Guide
          </h1>
          <p className="text-brown-medium/70 max-w-xl mx-auto">
            {categories.reduce((acc, c) => acc + c.recommendations.length, 0)}{" "}
            hand-picked spots across {categories.length} categories. Enjoy!
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === null
                ? "bg-terracotta text-cream border-terracotta"
                : "border-brown-dark/15 text-brown-medium hover:border-terracotta hover:text-terracotta"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat.id
                  ? "bg-terracotta text-cream border-terracotta"
                  : "border-brown-dark/15 text-brown-medium hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {categoryIcons[cat.id]} {cat.name}
            </button>
          ))}
        </div>

        {/* Recommendations by category */}
        {filteredCategories.map((cat) => (
          <section key={cat.id} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{categoryIcons[cat.id]}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-dark">
                {cat.name}
              </h2>
              <span className="text-xs font-semibold text-brown-medium/40 bg-brown-dark/5 px-2 py-1 rounded-full">
                {cat.recommendations.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.recommendations.map((rec) => (
                <RecommendationCard key={rec.name} rec={rec} />
              ))}
            </div>
            <Divider className="text-brown-dark mt-12" />
          </section>
        ))}
      </div>
    </>
  );
}
