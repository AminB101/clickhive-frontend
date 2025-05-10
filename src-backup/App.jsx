import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 text-center px-4 bg-indigo-50">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          One click fully optimized ecommerce listings
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          For drop-shippers, physical stores, and hand-crafters.
        </p>
        <p className="text-md text-gray-600 mt-4 max-w-xl mx-auto">
          Get fully populated and optimized product listings with 1 click — including metadata, metafields, meta objects, and categorization.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a
    href="#waitlist"
    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 text-lg text-center"
  >
    Join Free Waitlist
  </a>
  <button
    onClick={() =>
      fetch("https://clickhive.onrender.com/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: "price_XXXX_discounted_growth" }) // Replace with actual priceId
      })
        .then(res => res.json())
        .then(data => window.location.href = data.url)
        .catch(err => alert("Checkout failed"))
    }
    className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-indigo-100 text-lg text-center"
  >
    Pay Now & Save 25% for Life
  </button>
</div>

      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-16 px-6 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the Free Waitlist</h2>
          <p className="text-lg mb-6">
            or lock in a <strong>25% lifetime discount</strong> if you pay now.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-indigo-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Problem + Solution Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why This Tool?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Successful ecommerce demands precision. Listing a product with all its data perfectly aligned for search engines and customers takes over 60 clicks — and hours of time.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You also need to monitor keyword performance, detect underperforming listings, and stay on top of trends.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            What if you could do all of that — importing, enriching, syncing, optimizing — with one click?
          </p>
          <p className="text-xl font-semibold text-indigo-600">That’s exactly what we do.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Import from China</h3>
            <p className="text-gray-600 mt-2">
              Connect to Taobao, 1688, and Tmall with one click. No extension needed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Product Enrichment</h3>
            <p className="text-gray-600 mt-2">
              Auto-generate SEO titles, image alt text, compress images, and categorize for Shopify + Google.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Auto-Sync</h3>
            <p className="text-gray-600 mt-2">
              Sync stock and price up to 1,000x/month — fully automated background sync.
            </p>
          </div>
        </div>
      </section>

{/* Pricing Section */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Plans for Every Stage</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Free */}
      <div className="border rounded-lg p-6 bg-white">
        <h3 className="text-xl font-semibold text-indigo-700">Free</h3>
        <p className="text-gray-600 mt-2">Start for free</p>
        <p className="text-4xl font-bold mt-4">$0</p>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm text-left">
          <li>✔ 50 imports (first month)</li>
          <li>✔ 10 imports/month after</li>
          <li>✔ Auto-categorization</li>
          <li>✔ Live automatic tariff updates</li>
        </ul>
        <button
          onClick={() =>
            fetch("https://clickhive.onrender.com/api/stripe/create-checkout-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ priceId: "price_1RMvv8FVnpoD9imWKSAqlnHC" })
            })
              .then(res => res.json())
              .then(data => window.location.href = data.url)
              .catch(err => alert("Checkout failed"))
          }
          className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
        >
          Subscribe for Free
        </button>
      </div>

      {/* Starter */}
      <div className="border rounded-lg p-6 bg-white">
        <h3 className="text-xl font-semibold text-indigo-700">Starter</h3>
        <p className="text-gray-600 mt-2">For small stores</p>
        <p className="text-xl text-gray-400 line-through">$19</p>
        <p className="text-3xl font-bold text-green-600">Now $14.25</p>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm text-left">
          <li>✔ 150 product imports/month</li>
          <li>✔ 300 syncs/month</li>
          <li>✔ Alt text & compression</li>
          <li>✔ Manual sync control</li>
          <li>✔ Live automatic tariff updates</li>
        </ul>
        <button
          onClick={() =>
            fetch("https://clickhive.onrender.com/api/stripe/create-checkout-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ priceId: "price_1RMvtVFVnpoD9imWZRpvQ11m" })
            })
              .then(res => res.json())
              .then(data => window.location.href = data.url)
              .catch(err => alert("Checkout failed"))
          }
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Subscribe to Starter
        </button>
      </div>

      {/* Growth */}
      <div className="relative border-2 border-indigo-600 rounded-lg p-6 bg-white shadow-lg">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-full">Recommended</div>
        <h3 className="text-xl font-semibold text-indigo-700">Growth</h3>
        <p className="text-gray-600 mt-2">For scaling brands</p>
        <p className="text-xl text-gray-400 line-through">$49</p>
        <p className="text-3xl font-bold text-green-600">Now $36.75</p>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm text-left">
          <li>✔ 300 product imports/month</li>
          <li>✔ 500 syncs/month</li>
          <li>✔ Bulk enrichment tools</li>
          <li>✔ Enrich existing ranked products</li>
          <li>✔ Live automatic tariff updates</li>
        </ul>
        <button
          onClick={() =>
            fetch("https://clickhive.onrender.com/api/stripe/create-checkout-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ priceId: "price_1RMvttFVnpoD9imWaocSasHo" })
            })
              .then(res => res.json())
              .then(data => window.location.href = data.url)
              .catch(err => alert("Checkout failed"))
          }
          className="mt-6 w-full bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition"
        >
          Subscribe to Growth
        </button>
      </div>

      {/* Agency */}
      <div className="border rounded-lg p-6 bg-white">
        <h3 className="text-xl font-semibold text-indigo-700">Agency</h3>
        <p className="text-gray-600 mt-2">For pro sellers</p>
        <p className="text-xl text-gray-400 line-through">$89</p>
        <p className="text-3xl font-bold text-green-600">Now $66.75</p>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm text-left">
          <li>✔ 500 product imports/month</li>
          <li>✔ 1,000 syncs/month</li>
          <li>✔ Full automation</li>
          <li>✔ Priority queue + reporting</li>
          <li>✔ Live automatic tariff updates</li>
        </ul>
        <button
          onClick={() =>
            fetch("https://clickhive.onrender.com/api/stripe/create-checkout-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ priceId: "price_1RMvucFVnpoD9imWgDkUmLBW" })
            })
              .then(res => res.json())
              .then(data => window.location.href = data.url)
              .catch(err => alert("Checkout failed"))
          }
          className="mt-6 w-full bg-indigo-800 text-white py-2 px-4 rounded-md hover:bg-indigo-900 transition"
        >
          Subscribe to Agency
        </button>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
<section className="py-16 px-6 bg-white border-t border-gray-200">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-indigo-700">Can I use this with any Shopify store?</h3>
        <p className="text-gray-600 mt-1">Yes. You can connect any Shopify store and start importing from Taobao, 1688, and Tmall in seconds.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-700">Is this a Chrome extension?</h3>
        <p className="text-gray-600 mt-1">No. This works entirely through a web interface. You don’t need to install anything or use AliScraper-style tools.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-700">Will my products update automatically?</h3>
        <p className="text-gray-600 mt-1">Yes, depending on your plan, stock and price sync can run up to 1,000 times per month in the background.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-700">Do I need to know SEO?</h3>
        <p className="text-gray-600 mt-1">No — we auto-generate your titles, image alt text, Google taxonomy, and Shopify categories using AI and product context.</p>
      </div>
    </div>
  </div>
</section>

{/* Roadmap Section */}
<section className="py-20 px-6 bg-gray-100 border-t border-gray-200">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Roadmap</h2>
    <p className="text-gray-600 mb-10">Here’s what we’ve already built — and what’s coming next.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
      <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
        <h3 className="text-lg font-semibold text-green-700 mb-2">✅ Live</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>One-click imports from Taobao, 1688, and Tmall</li>
          <li>Stock and price synchronization</li>
          <li>Auto image compression and alt text generation</li>
          <li>Automatic product categorization (Shopify + Google)</li>
          <li>Enrichments: metafields, metadata, meta objects</li>
          <li>Keyword performance tracking (basic)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold text-yellow-700 mb-2">🚧 Coming Soon</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Photo-to-listing app (physical product listing from pictures)</li>
          <li>One click blog post generator using store data, images and products as well as the latest gpt image generation to blend your product pitches into the blog posts you write. All fully enriched in 1 click.</li>
          <li>Etsy, Amazon, eBay, and Pinterest marketplace insights</li>
          <li>Social media & ecommerce content generation</li>
          <li>Review importer (AliExpress, Etsy, CSV)</li>
          <li>Automatic multilingual store translation with keyword research</li>
        </ul>
      </div>
    </div>
  </div>
</section>


{/* About the Founder */}
<section className="py-16 px-6 bg-indigo-50 border-t border-gray-200">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Built by a Real Dropshipper</h2>
    <p className="text-lg text-gray-700 mb-4">
      I'm Amin Boulabaim, the founder of Clickhive. I've been on ecommerce since 2021 building and optimizing my own ecommerce stores — importing from China, struggling with syncs, writing SEO by hand. I created this tool because I needed it myself internally. Now it’s yours. The best thing is that is made from an ecommerce owner for ecommerce owners, if there's something that could make our lives easier i will know it because im the first user.
    </p>
    <p className="text-gray-600">No fluff, no VC, just real tools for real stores.</p>
  </div>
</section>

{/* Email Waitlist Section */}
<section className="py-16 px-6 bg-white border-t border-gray-200">
  <div className="max-w-md mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Be the First to Use It</h2>
    <p className="text-gray-600 mb-6">Sign up to join the early access list and get notified as soon as we go live.</p>
    <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
      >
        Join Waitlist
      </button>
    </form>
  </div>
</section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        &copy; {new Date().getFullYear()} Clickhive. All rights reserved.
      </footer>
    </div>
  );
}