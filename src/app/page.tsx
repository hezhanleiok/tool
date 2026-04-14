import Link from 'next/link';

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 英雄头图区：极简风格，直击痛点 */}
      <section className="bg-white border-b border-gray-200 pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
            Smart Financial Tools.<br/>
            <span className="text-blue-600">Zero Bullshit.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            No pop-up ads, no required sign-ups, and no confusing jargon. Just lightning-fast, highly accurate financial calculators built for real people.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#tools" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1 shadow-lg text-lg">
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* 工具导航卡片区 */}
      <section id="tools" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Choose Your Calculator</h2>
          <p className="text-gray-500 mt-2">100% free. Always updated.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 房贷工具卡片 */}
          <Link href="/mortgage" className="group block bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition duration-300 transform hover:-translate-y-2">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">Mortgage Calculator</h3>
            <p className="text-gray-600 leading-relaxed">
              Instantly estimate your monthly home payments. Adjust principal, down payment, and interest rates to see how they impact your 15 or 30-year loan.
            </p>
            <div className="mt-6 text-blue-600 font-bold flex items-center gap-2 uppercase tracking-wide text-sm">
              Calculate Now <span className="group-hover:translate-x-2 transition">→</span>
            </div>
          </Link>

          {/* 汇率工具卡片 */}
          <Link href="/currency" className="group block bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition duration-300 transform hover:-translate-y-2">
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-3xl">💱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">Live Currency Converter</h3>
            <p className="text-gray-600 leading-relaxed">
              Convert between 30+ global currencies in real-time. We use live mid-market exchange rate API data to ensure your conversions are perfectly accurate.
            </p>
            <div className="mt-6 text-blue-600 font-bold flex items-center gap-2 uppercase tracking-wide text-sm">
              Convert Now <span className="group-hover:translate-x-2 transition">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 首页全局 FAQ (增加内容厚度，应付 AdSense) */}
      <section className="bg-gray-900 py-24 px-4 text-white mt-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">General FAQ</h2>
            <p className="text-gray-400">Everything you need to know about Finance Tool Pro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Are these tools really free?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Yes. 100% free forever. We don't believe in charging people to do basic math. We keep the servers running through carefully placed, non-intrusive advertisements.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Do you save my financial data?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Absolutely not. All calculations are performed directly in your browser. We do not store, track, or sell the numbers you input into our calculators. Read our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link> for details.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">How accurate is the currency data?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Our Currency Converter pulls data from enterprise-grade financial APIs. It uses the "mid-market" rate, which is the exact midpoint between global buy and sell prices.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Who built this site?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">This project is maintained by an independent developer based in California, USA, who was tired of clunky finance websites. Learn more on our <Link href="/about" className="underline hover:text-white">About page</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}