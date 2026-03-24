import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { HandsToasting } from "@/components/illustrations";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <HandsToasting className="w-28 h-24 text-terracotta mx-auto mb-8" />

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-dark mb-4">
          You&rsquo;re in!
        </h1>

        <p className="text-lg text-brown-medium/70 mb-4 leading-relaxed">
          Welcome to the SF Eats community. Your payment was successful and you
          now have full access to the guide.
        </p>

        <p className="text-brown-medium/60 mb-10 leading-relaxed">
          We&rsquo;ll send updates to your email with new picks and seasonal
          favorites each month. Keep an eye on your inbox!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guide"
            className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream text-base font-semibold rounded-full hover:bg-terracotta-bright transition-colors"
          >
            Open the full guide
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-brown-dark/20 text-brown-dark text-base font-semibold rounded-full hover:border-terracotta hover:text-terracotta transition-colors"
          >
            Back to home
          </Link>
        </div>

        <div className="mt-16 p-6 bg-cream-light rounded-2xl border border-brown-dark/8">
          <h3 className="font-serif text-lg font-bold text-brown-dark mb-2">
            What to expect
          </h3>
          <ul className="text-sm text-brown-medium/70 space-y-2 text-left max-w-md mx-auto">
            <li className="flex gap-2">
              <span className="text-terracotta">•</span>
              Access the guide anytime at sfeats.guide/guide with your email
            </li>
            <li className="flex gap-2">
              <span className="text-terracotta">•</span>
              New picks and seasonal updates emailed monthly
            </li>
            <li className="flex gap-2">
              <span className="text-terracotta">•</span>
              Reply to any email to share your own finds with us
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
