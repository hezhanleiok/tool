'use client';

import { useState } from 'react';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<number>(350000);
  const [downPayment, setDownPayment] = useState<number>(70000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanYears, setLoanYears] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const r = (interestRate / 100) / 12;
    const n = loanYears * 12;
    
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }
    
    let payment = 0;
    if (r === 0) {
      payment = principal / n;
    } else {
      payment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    setMonthlyPayment(payment);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-16">
        
        {/* 🚀 计算器主体卡片 - 强化版 UI */}
        <div className="bg-white border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-[40px] overflow-hidden mb-16">
          <div className="bg-blue-600 p-10 text-white border-b-4 border-slate-900">
            <h1 className="text-4xl md:text-5xl font-black mb-3 uppercase italic tracking-tighter">
              Mortgage Calculator
            </h1>
            <p className="text-blue-100 font-bold tracking-widest uppercase text-sm">Professional Grade Payment Estimator</p>
          </div>
          
          <div className="p-8 md:p-14 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Home Price */}
              <div>
                <label className="block text-xs font-black uppercase mb-3 ml-2 text-slate-500 tracking-widest">Home Price ($)</label>
                <input 
                  type="number" 
                  value={homePrice} 
                  onChange={(e) => setHomePrice(Number(e.target.value))} 
                  className="w-full text-3xl font-black p-6 border-4 border-slate-900 rounded-3xl outline-none focus:bg-blue-50 transition shadow-inner" 
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-xs font-black uppercase mb-3 ml-2 text-slate-500 tracking-widest">Down Payment ($)</label>
                <input 
                  type="number" 
                  value={downPayment} 
                  onChange={(e) => setDownPayment(Number(e.target.value))} 
                  className="w-full text-3xl font-black p-6 border-4 border-slate-900 rounded-3xl outline-none focus:bg-blue-50 transition shadow-inner" 
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-xs font-black uppercase mb-3 ml-2 text-slate-500 tracking-widest">Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))} 
                  className="w-full text-3xl font-black p-6 border-4 border-slate-900 rounded-3xl outline-none focus:bg-blue-50 transition shadow-inner" 
                />
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-xs font-black uppercase mb-3 ml-2 text-slate-500 tracking-widest">Loan Term</label>
                <select 
                  value={loanYears} 
                  onChange={(e) => setLoanYears(Number(e.target.value))} 
                  className="w-full p-6 border-4 border-slate-900 rounded-3xl font-black text-2xl bg-white appearance-none cursor-pointer hover:bg-slate-50 transition"
                >
                  <option value={15}>15 Years Fixed</option>
                  <option value={20}>20 Years Fixed</option>
                  <option value={30}>30 Years Fixed</option>
                </select>
              </div>
            </div>

            <button 
              onClick={calculateMortgage} 
              className="w-full bg-blue-600 text-white font-black text-2xl py-6 rounded-[30px] border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none"
            >
              CALCULATE MONTHLY PAYMENT
            </button>

            {monthlyPayment !== null && (
              <div className="mt-12 p-10 bg-slate-900 text-white border-4 border-blue-600 rounded-[35px] shadow-[8px_8px_0px_0px_rgba(37,99,235,0.3)] text-center">
                <p className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Estimated Monthly Payment</p>
                <p className="text-7xl md:text-8xl font-black tracking-tighter">
                  <span className="text-3xl md:text-4xl align-top mr-1 font-black text-blue-500">$</span>
                  {monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </p>
                <p className="text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest">
                  Principal & Interest Only. Taxes and Insurance not included.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 📚 房贷深度内容与 FAQ (SEO 核心板块 - 已完全保留并增强) */}
        <article className="bg-white rounded-[40px] p-8 md:p-14 border-2 border-slate-200 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 mb-6 underline decoration-blue-500 underline-offset-8">Understanding Your Mortgage Payments</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Buying a home is the most significant financial commitment most people will ever make. Our professional-grade <strong>Mortgage Calculator</strong> is designed to provide clarity. It uses standard bank amortization formulas to help you visualize your financial future. In the complex market of 2026, knowing exactly where every dollar goes is your best strategy.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Essential Mortgage FAQ</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 shadow-inner">
                <h4 className="text-xl font-bold text-blue-600 mb-3">What is Principal and Interest?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Principal</strong> is the original amount you borrowed. <strong>Interest</strong> is what the lender charges you to use that money. During the early years of a 30-year term, most of your payment covers interest rather than the principal.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 shadow-inner">
                <h4 className="text-xl font-bold text-blue-600 mb-3">How much down payment do I need?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  While 20% is the gold standard to avoid Private Mortgage Insurance (PMI), many modern loan programs allow for as little as 3% or 5% down. Note that a smaller down payment increases your monthly cost.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 shadow-inner md:col-span-2">
                <h4 className="text-xl font-bold text-blue-600 mb-3">15-Year vs. 30-Year: Which is better?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A 30-year mortgage offers lower monthly payments, which is great for cash flow. However, a 15-year mortgage allows you to build equity twice as fast and saves you tens of thousands of dollars in total interest paid over the life of the loan.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t-2 border-slate-100">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest">Authority Financial Resources</h3>
              <ul className="flex flex-wrap gap-4 text-sm font-bold">
                <li>
                  <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition">
                    <span>🔗</span> Home Buying Guide (CFPB)
                  </a>
                </li>
                <li>
                  <a href="https://www.bankrate.com/mortgages/mortgage-rates/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition">
                    <span>🔗</span> Today's Market Rates (Bankrate)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}