'use client';
import { useState, useEffect } from 'react';

const CURRENCIES = [
  { code: 'USD', flag: 'https://flagcdn.com/w40/us.png', name: 'US Dollar' },
  { code: 'EUR', flag: 'https://flagcdn.com/w40/eu.png', name: 'Euro' },
  { code: 'GBP', flag: 'https://flagcdn.com/w40/gb.png', name: 'British Pound' },
  { code: 'JPY', flag: 'https://flagcdn.com/w40/jp.png', name: 'Japanese Yen' },
  { code: 'CNY', flag: 'https://flagcdn.com/w40/cn.png', name: 'Chinese Yuan' },
  { code: 'AUD', flag: 'https://flagcdn.com/w40/au.png', name: 'Australian Dollar' },
  { code: 'CAD', flag: 'https://flagcdn.com/w40/ca.png', name: 'Canadian Dollar' },
  { code: 'CHF', flag: 'https://flagcdn.com/w40/ch.png', name: 'Swiss Franc' },
  { code: 'HKD', flag: 'https://flagcdn.com/w40/hk.png', name: 'Hong Kong Dollar' },
  { code: 'SGD', flag: 'https://flagcdn.com/w40/sg.png', name: 'Singapore Dollar' }
  // (演示精简，你可随时在数组中继续添加更多国家)
];

export default function CurrencyConverter() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [amount, setAmount] = useState<number>(1000);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/a7f2a27dcf004a6afed98c66/latest/USD')
      .then(r => r.json()).then(d => {
        if (d.result === 'success') setRates(d.conversion_rates);
      });
  }, []);

  useEffect(() => {
    if (rates[from] && rates[to]) setResult((amount / rates[from]) * rates[to]);
  }, [amount, from, to, rates]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Live Currency Converter</h1>
        <p className="text-lg text-slate-500">Check real-time mid-market exchange rates securely and instantly.</p>
      </div>

      {/* 高级汇率转换卡片 */}
      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 mb-24 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-end mb-10">
          
          <div className="flex-1 w-full">
            <label className="block text-sm font-bold text-slate-700 mb-2">Amount</label>
            <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} 
              className="w-full text-2xl font-bold px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" />
          </div>
          
          <div className="flex-1 w-full">
            <label className="block text-sm font-bold text-slate-700 mb-2">From</label>
            <div className="relative">
              <img src={CURRENCIES.find(c => c.code === from)?.flag} className="absolute left-4 top-1/2 -translate-y-1/2 w-6 rounded-sm shadow-sm" alt="" />
              <select value={from} onChange={e => setFrom(e.target.value)} 
                className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-900">
                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
              </select>
            </div>
          </div>

          <div className="flex-1 w-full">
            <label className="block text-sm font-bold text-slate-700 mb-2">To</label>
            <div className="relative">
              <img src={CURRENCIES.find(c => c.code === to)?.flag} className="absolute left-4 top-1/2 -translate-y-1/2 w-6 rounded-sm shadow-sm" alt="" />
              <select value={to} onChange={e => setTo(e.target.value)} 
                className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-900">
                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        {result && (
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 text-center animate-fade-in">
            <p className="text-slate-500 font-medium mb-3 text-lg">
              {amount} {from} =
            </p>
            <p className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
              {result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span className="text-3xl text-blue-600">{to}</span>
            </p>
            <p className="text-sm text-green-600 font-semibold mt-6 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Mid-Market Rate Data
            </p>
          </div>
        )}
      </div>

      {/* 📖 金融专栏级：外汇知识大全 */}
      <article className="max-w-4xl mx-auto prose prose-lg prose-slate bg-white p-10 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">About Real-Time Currency Conversion</h2>
        <p className="text-slate-600">The foreign exchange market is the largest and most liquid financial market in the world. Our tool empowers individuals and businesses by bypassing traditional bank markup rates and displaying the true cost of money.</p>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Forex FAQ & Terminology</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-slate-800">What is the "Mid-Market Rate"?</h4>
            <p className="text-slate-600 mt-2">The mid-market rate (also known as the interbank rate) is the exact midpoint between the buy and sell prices of any two currencies. It is the "real" rate. When you exchange money at an airport or retail bank, they typically offer you a worse rate and keep the difference as a hidden fee. Our calculator shows the honest, untampered mid-market rate.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-800">Why are exchange rates constantly changing?</h4>
            <p className="text-slate-600 mt-2">Unlike traditional stock markets that have closing bells, the global Forex market operates 24 hours a day, 5 days a week. Currency values fluctuate by the second based on geopolitical events, inflation data, central bank interest rate decisions, and global economic stability.</p>
          </div>
        </div>
      </article>
    </div>
  );
}