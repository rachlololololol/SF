import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  WineGlass,
  CoffeeCup,
  HandsToasting,
  Divider,
  BistroTable,
  Fork,
} from "@/components/illustrations";
import { categories } from "@/data/recommendations";

export default function HomePage() {
  const featured = [
    categories[0].recommendations[0], // Lazy Bear
    categories[2].recommendations[4], // Tartine
    categories[3].recommendations[0], // Verjus
    categories[1].recommendations[0], // La Taqueria
    categories[0].recommendations[2], // Kokkari
    categories[1].recommendations[2], // Zuni Café
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream">
        <WineGlass className="absolute top-12 right-[8%] w-16 h-24 text-navy/15 hidden lg:block" />
        <CoffeeCup className="absolute bottom-20 left-[5%] w-20 h-20 text-terracotta/15 hidden lg:block" />
        <HandsToasting className="absolute top-32 left-[12%] w-24 h-20 text-navy/10 hidden xl:block" />

        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-terracotta mb-6">
            A curated San Francisco food &amp; travel guide
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brown-dark leading-[1.1] mb-6">
            The only SF guide
            <br />
            <span className="text-terracotta italic">you&rsquo;ll ever need</span>
          </h1>
          <p className="text-lg sm:text-xl text-brown-medium/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hand-picked restaurants, cafés, bars, and hidden gems from people
            who eat in San Francisco every single day. No sponsored picks, no
            filler — just the spots we actually love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream text-base font-semibold rounded-full hover:bg-terracotta-bright transition-colors shadow-lg shadow-terracotta/20"
            >
              Subscribe for $5/month
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brown-dark/20 text-brown-dark text-base font-semibold rounded-full hover:border-terracotta hover:text-terracotta transition-colors"
            >
              Preview the guide
            </Link>
          </div>
        </div>
      </section>

      <Divider className="text-brown-dark my-4" />

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-full bg-blush/40 border-2 border-terracotta/20">
            <BistroTable className="w-20 h-20 text-terracotta" />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-dark mb-4">
              Why trust this guide?
            </h2>
            <p className="text-brown-medium/80 leading-relaxed mb-4">
              We&rsquo;re a small group of SF food obsessives who have spent years
              eating our way through every neighborhood. This isn&rsquo;t a list
              scraped from Yelp or sponsored by restaurants — it&rsquo;s the honest
              recs we give our best friends when they visit.
            </p>
            <p className="text-brown-medium/80 leading-relaxed">
              Every spot is personally vetted, revisited, and loved. We update the
              guide monthly with new finds and seasonal picks so you always have
              something fresh to try.
            </p>
          </div>
        </div>
      </section>

      <Divider className="text-brown-dark" />

      {/* Featured Spots Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-navy mb-3">
            A taste of what&rsquo;s inside
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-dark">
            Featured picks
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((spot) => (
            <div
              key={spot.name}
              className="bg-cream-light rounded-2xl p-6 border border-brown-dark/8 hover:shadow-lg hover:shadow-terracotta/5 transition-all group"
            >
              <span className="category-tag text-terracotta bg-terracotta/8 px-2 py-1 rounded">
                {spot.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-brown-dark mt-3 mb-2 group-hover:text-terracotta transition-colors">
                {spot.name}
              </h3>
              <p className="text-sm text-brown-medium/70 leading-relaxed">
                {spot.blurb}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 text-terracotta font-semibold text-sm hover:text-terracotta-bright transition-colors"
          >
            Unlock all {categories.reduce((acc, c) => acc + c.recommendations.length, 0)} picks
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <Divider className="text-brown-dark" />

      {/* Testimonials */}
      <section className="bg-navy text-cream py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Fork className="w-6 h-16 text-cream/30 mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              What subscribers say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I thought I knew SF food. This guide proved me wrong — found three new favorites in my first week.",
                name: "Sarah K.",
                detail: "Marina District",
              },
              {
                quote:
                  "Sent this to every friend visiting from out of town. It's the only rec list they need.",
                name: "James T.",
                detail: "Brooklyn, NY",
              },
              {
                quote:
                  "The monthly updates keep it fresh. Just tried San Ho Won on their recommendation — incredible.",
                name: "Priya M.",
                detail: "SOMA",
              },
            ].map((t) => (
              <blockquote
                key={t.name}
                className="bg-navy-light/30 rounded-2xl p-6 border border-cream/10"
              >
                <p className="text-cream/80 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-cream/50 text-xs">
                  <strong className="text-cream/70">{t.name}</strong> &mdash;{" "}
                  {t.detail}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <WineGlass className="w-12 h-16 text-terracotta/40 mx-auto mb-6" />
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-dark mb-4">
          Ready to eat like a local?
        </h2>
        <p className="text-brown-medium/70 mb-8 max-w-xl mx-auto">
          Get instant access to the full guide plus monthly updates with new
          picks and seasonal favorites.
        </p>
        <Link
          href="/subscribe"
          className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream text-base font-semibold rounded-full hover:bg-terracotta-bright transition-colors shadow-lg shadow-terracotta/20"
        >
          Subscribe for $5/month
        </Link>
      </section>
    </>
  );
}
