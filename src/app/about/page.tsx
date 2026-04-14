export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-gray-900 mb-8">The Story Behind This Site</h1>
      
      <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
        <p>
          Hi, my name is Zhanlei. I am a software developer based in <strong>Los Angeles, California</strong>, and I want to tell you why this website exists.
        </p>
        
        <p>
          A few years ago, I was looking to buy my first home. Like anyone else, I went online to figure out how much my monthly mortgage payments would be. But every "Free Mortgage Calculator" I clicked on was a nightmare. They were littered with intrusive video ads, required me to sign up for an account, or asked for my phone number so real estate agents could spam me with calls.
        </p>

        <p>
          The same thing happened when I traveled internationally and just wanted to quickly check the real-time exchange rate for USD to EUR. The tools were slow, outdated, or purposely confusing. 
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">I decided to build a better alternative.</h3>
        
        <p>
          I built this website with a very simple philosophy: <strong>Financial tools should be fast, accurate, and completely free.</strong> 
        </p>

        <p>
          I coded the mortgage formulas based on standard U.S. banking amortizations. For the currency converter, I integrated a premium API that fetches real-time, mid-market exchange rates directly from global financial markets. There are no paywalls, no hidden data harvesting, and no nonsense. You enter your numbers, and you get your results instantly.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Get In Touch</h3>
        <p>
          This website is a solo passion project. I actively maintain the code and update the algorithms to ensure compliance with 2026 financial standards. 
        </p>
        <p>
          If you encounter a bug, have a feature request, or simply want to reach out to a fellow developer, please email me directly at <a href="mailto:hezhanleiok@gmail.com" className="text-blue-600 hover:underline font-bold">hezhanleiok@gmail.com</a> or message me on Telegram at <a href="https://t.me/hezhanlwiok" target="_blank" className="text-blue-600 hover:underline font-bold">@hezhanlwiok</a>. I typically respond within 24-48 hours.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            * Disclaimer: While I strive for 100% mathematical accuracy in my code, I am a developer, not a licensed financial advisor. Please use these tools for educational and estimation purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}