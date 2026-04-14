'use client';

import { useState, useEffect } from 'react';

const CURRENCIES = [
  { code: 'USD', flag: 'https://flagcdn.com/w40/us.png' }, { code: 'EUR', flag: 'https://flagcdn.com/w40/eu.png' },
  { code: 'GBP', flag: 'https://flagcdn.com/w40/gb.png' }, { code: 'JPY', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'CNY', flag: 'https://flagcdn.com/w40/cn.png' }, { code: 'HKD', flag: 'https://flagcdn.com/w40/hk.png' },
  { code: 'TWD', flag: 'https://flagcdn.com/w40/tw.png' }, { code: 'CAD', flag: 'https://flagcdn.com/w40/ca.png' },
  { code: 'AUD', flag: 'https://flagcdn.com/w40/au.png' }, { code: 'SGD', flag: 'https://flagcdn.com/w40/sg.png' },
  { code: 'KRW', flag: 'https://flagcdn.com/w40/kr.png' }, { code: 'INR', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'NZD', flag: 'https://flagcdn.com/w40/nz.png' }, { code: 'CHF', flag: 'https://flagcdn.com/w40/ch.png' },
  { code: 'ZAR', flag: 'https://flagcdn.com/w40/za.png' }, { code: 'BRL', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'MXN', flag: 'https://flagcdn.com/w40/mx.png' }, { code: 'TRY', flag: 'https://flagcdn.com/w40/tr.png' },
  { code: 'THB', flag: 'https://flagcdn.com/w40/th.png' }, { code: 'IDR', flag: 'https://flagcdn.com/w40/id.png' }
  // 精简展示，你可以后续按需补全
];

export default function CurrencyConverter() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [amount, setAmount] = useState<number>(100);
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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-16">
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 text-white">
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Live Currency Converter</h1>
            <p className="text-blue-100 font-medium opacity-90">Real-time mid-market exchange rates.</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full text-2xl font-bold px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">From</label>
                  <select value={from} onChange={e => setFrom(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl font-bold text-xl outline-none focus:ring-4 focus:ring-blue-500/20 appearance-none">
                    {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">To</label>
                  <select value={to} onChange={e => setTo(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl font-bold text-xl outline-none focus:ring-4 focus:ring-blue-500/20 appearance-none">
                    {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {result && (
              <div className="mt-12 p-8 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                <p className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">{result.toFixed(2)}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="font-bold text-blue-600 uppercase text-lg">{to}</span>
                  <img src={CURRENCIES.find(c => c.code === to)?.flag} className="w-8 h-auto rounded shadow-sm border border-gray-200" alt="flag" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/40">
          <h2 className="text-2xl font-extrabold mb-4">How it works</h2>
          <p className="text-gray-600 leading-relaxed mb-6">We use live data directly from interbank APIs to ensure your conversions are accurate to the minute.</p>
          <div className="flex gap-4">
            <a href="https://www.xe.com" target="_blank" className="text-sm font-semibold text-blue-600 hover:underline">🔗 XE Currency</a>
          </div>
        </div>
      </main>
    </div>
  );
}