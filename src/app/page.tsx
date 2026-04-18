'use client';
import { useState } from 'react';
import Link from 'next/link';

export const runtime = 'edge';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // 修复订阅没反应的问题，增加真实的前端交互反馈
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    // 模拟提交成功后，3秒恢复原状
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col relative overflow-hidden">
      
      {/* 极其微妙的背景光晕，增加高级感 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent blur-3xl -z-10 pointer-events-none"></div>

      {/* 🚀 Hero Section: 极致干净的排版 */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Smart Financial Tools. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Zero Complications.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Access highly accurate, real-time financial calculators without annoying ads or sign-ups. Built for modern investors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/mortgage" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
            Mortgage Calculator
          </Link>
          <Link href="/currency" className="bg-white text-slate-700 font-bold py-4 px-10 rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 hover:-translate-y-0.5 transition-all">
            Currency Converter
          </Link>
        </div>
      </section>

      {/* 🚀 工具入口卡片：悬浮、无边框、弥散阴影 */}
      <section className="px-6 max-w-5xl mx-auto mb-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/mortgage" className="group bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Mortgage Calculator</h3>
            <p className="text-slate-500 leading-relaxed font-medium">Instantly estimate your monthly principal and interest. Adjust down payments and rates to find your perfect home budget.</p>
          </Link>

          <Link href="/currency" className="group bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Live Currency Converter</h3>
            <p className="text-slate-500 leading-relaxed font-medium">Convert between 40+ global currencies. We use real-time, mid-market exchange rates directly from official APIs.</p>
          </Link>
        </div>
      </section>

      {/* 🚀 订阅区：抛弃廉价的横向色块，改为极其优雅的居中悬浮卡片 */}
      <section className="px-6 pb-32 z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-12 md:p-16 text-center relative overflow-hidden">
          {/* 卡片内部的极简装饰光晕 */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 relative z-10">Get Financial Insights</h2>
          <p className="text-slate-500 mb-10 max-w-lg mx-auto relative z-10 font-medium">
            Join thousands of smart users. We send a monthly digest covering global exchange trends and mortgage rate shifts. No spam, ever.
          </p>
          
          <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3 relative z-10" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..." 
              className="flex-1 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" 
              required 
            />
            <button 
              type="submit" 
              disabled={subscribed}
              className={`font-bold py-4 px-8 rounded-2xl transition-all shadow-lg ${
                subscribed 
                ? 'bg-emerald-500 text-white shadow-emerald-500/30' 
                : 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-slate-800'
              }`}
            >
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
