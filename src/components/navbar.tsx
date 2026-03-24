"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-brown-dark/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-2xl font-bold text-terracotta tracking-tight">
          SF Eats
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-brown-dark/70 hover:text-terracotta transition-colors"
          >
            Home
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium text-brown-dark/70 hover:text-terracotta transition-colors"
          >
            The Guide
          </Link>
          <Link
            href="/subscribe"
            className="inline-flex items-center px-5 py-2 bg-terracotta text-cream text-sm font-semibold rounded-full hover:bg-terracotta-bright transition-colors"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brown-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <path d="M6 6L18 18" />
                <path d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M4 7H20" />
                <path d="M4 12H20" />
                <path d="M4 17H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-brown-dark/10 px-6 py-4 space-y-3">
          <Link
            href="/"
            className="block text-sm font-medium text-brown-dark/70 hover:text-terracotta"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/guide"
            className="block text-sm font-medium text-brown-dark/70 hover:text-terracotta"
            onClick={() => setMobileOpen(false)}
          >
            The Guide
          </Link>
          <Link
            href="/subscribe"
            className="block text-sm font-semibold text-terracotta"
            onClick={() => setMobileOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      )}
    </nav>
  );
}
