export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-6">About Finance Tool Pro</h1>
      
      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
          <p>
            Welcome to Finance Tool Pro. My name is Zhanlei, and I am the independent software developer behind this platform. Based in Los Angeles, California, I started this project in 2026 with a singular vision: to build the most accessible, accurate, and user-friendly financial calculators on the web.
          </p>
          <p>
            Unlike large corporate financial portals that are bogged down by aggressive tracking algorithms, forced account registrations, and biased affiliate links, Finance Tool Pro is built for the everyday user. Whether you are a first-time homebuyer trying to understand a 30-year fixed mortgage, or a traveler needing real-time foreign exchange rates, you will find exactly what you need here—fast and free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Our Mission & Core Values</h2>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li><strong>Uncompromising Accuracy:</strong> Our currency tools tap directly into real-time mid-market exchange rate APIs. Our mortgage algorithms follow the strict mathematical amortizations used by major global banking institutions.</li>
            <li><strong>100% Free & Open:</strong> Financial literacy shouldn't come with a subscription fee. Every tool on this website is free to use, and we will never put our calculators behind a paywall.</li>
            <li><strong>Data Privacy First:</strong> What you calculate is your business. All numeric inputs are processed locally in your browser. We do not store your financial data on our servers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">How We Make Money (Our Transparency Promise)</h2>
          <p>
            Operating high-speed servers and pulling live API data costs money. To keep Finance Tool Pro 100% free for all users, we monetize the website through carefully selected display advertising (such as Google AdSense). We believe this is the fairest way to provide premium tools to the public at zero cost. We do not sell user data, nor do we let advertisers manipulate our calculator results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Editorial & Technical Guidelines</h2>
          <p>
            The financial landscape changes rapidly. To maintain the highest standards of quality, I personally audit the codebase and the calculation logic monthly to ensure they reflect current 2026 global financial standards. However, please remember that these tools provide estimates for educational purposes. We always recommend consulting with a certified financial planner for definitive financial decisions.
          </p>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact the Developer</h2>
          <p className="mb-4">
            Finance Tool Pro thrives on user feedback. If you have discovered a bug, want to suggest a new calculator feature, or simply want to say hello, I am always available. As an independent developer, I read every single message.
          </p>
          <div className="space-y-2">
            <p className="font-bold">Email: <a href="mailto:hezhanleiok@gmail.com" className="text-blue-600 hover:underline font-normal">hezhanleiok@gmail.com</a></p>
            <p className="font-bold">Telegram: <a href="https://t.me/hezhanlwiok" target="_blank" className="text-blue-600 hover:underline font-normal">@hezhanlwiok</a></p>
            <p className="font-bold text-sm text-gray-500 mt-4">Expected response time: 24 - 48 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}