import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SF Eats — A Curated San Francisco Food & Travel Guide",
  description:
    "Discover the best restaurants, cafés, bars, and hidden gems in San Francisco. A hand-picked guide by locals who live and breathe SF food culture.",
  openGraph: {
    title: "SF Eats — A Curated San Francisco Food & Travel Guide",
    description:
      "Discover the best restaurants, cafés, bars, and hidden gems in San Francisco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col paper-texture font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-brown-dark text-cream py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-cream mb-4">SF Eats</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              A curated guide to the best food, drink, and stays in San
              Francisco. Made with love by people who eat here every day.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-cream/40 mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/guide"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  The Guide
                </a>
              </li>
              <li>
                <a
                  href="/subscribe"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-cream/40 mb-4">
              Contact
            </h4>
            <p className="text-cream/60 text-sm">
              Questions? Drop us a line at{" "}
              <a
                href="mailto:hello@sfeats.guide"
                className="text-blush hover:text-cream transition-colors underline underline-offset-2"
              >
                hello@sfeats.guide
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} SF Eats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
