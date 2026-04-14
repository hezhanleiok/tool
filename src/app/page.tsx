import Link from 'next/link';

export const runtime = 'edge';

export const metadata = {
  title: 'Free Mortgage Calculator & Live Currency Exchange Converter',
  description: '100% free, real-time financial tools. Calculate your mortgage payments instantly or convert 40+ global currencies with live mid-market rates. No sign-up required.',
  keywords: ['free mortgage calculator', 'live currency converter', 'exchange rate calculator', 'finance tools 2026', 'home loan calculator'],
};

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
            Free Financial Tools.<br/>
            <span className="text-blue-600">No Sign-up Required.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fast, highly accurate financial calculators built for everyday use. Get live currency rates or estimate your mortgage in seconds.
          </p>
          <Link href="#tools" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition shadow-lg text-lg">
            Start Calculating
          </Link>
        </div>
      </section>

      <section id="tools" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/mortgage" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition transform hover:-translate-y-1 block">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🏠</span></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Mortgage Calculator</h3>
            <p className="text-gray-600 mb-6">Instantly estimate your monthly home payments with adjustable interest rates and down payments.</p>
            <span className="text-blue-600 font-bold">Calculate Now →</span>
          </Link>
          <Link href="/currency" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition transform hover:-translate-y-1 block">
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">💱</span></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Live Currency Converter</h3>
            <p className="text-gray-600 mb-6">Convert between 40+ global fiat currencies in real-time. We use live mid-market exchange rates.</p>
            <span className="text-blue-600 font-bold">Convert Now →</span>
          </Link>
        </div>
      </section>

      {/* 邮件订阅区域 (Email Subscription) */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join 10,000+ Smart Investors</h2>
          <p className="text-blue-100 mb-8">Subscribe to our weekly newsletter for the latest mortgage rate trends and global currency insights. No spam, ever.</p>
          <form className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-blue-300" required />
            <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}