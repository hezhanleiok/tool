import Link from 'next/link';

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
          The Finance Tools <br/><span className="text-blue-600 underline decoration-4 underline-offset-8">You Actually Need.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
          I built these because I was tired of clunky, ad-stuffed sites. No accounts, no ads, just math that works.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/mortgage" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-blue-700 transition">Try Mortgage</Link>
          <Link href="/currency" className="bg-slate-900 text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-slate-800 transition">Try Currency</Link>
        </div>
      </section>

      {/* 邮件订阅区域 */}
      <section className="bg-slate-100 py-16 px-4 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 uppercase italic">Get Weekly Insights</h2>
          <p className="text-slate-600 mb-8">No spam. Only deep analysis on global market trends and mortgage rates.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" placeholder="Your best email..." className="flex-1 px-6 py-4 rounded-2xl border-2 border-slate-300 focus:border-blue-600 outline-none" />
            <button className="bg-blue-600 text-white font-black px-8 py-4 rounded-2xl hover:bg-blue-700 transition shadow-lg">SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  );
}