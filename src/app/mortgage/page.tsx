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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-16">
        
        {/* 🚀 高端计算器卡片 - 彻底告别 Low 版黑边框 */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-16">
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 md:p-12 text-white">
            <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
              Mortgage Calculator
            </h1>
            <p className="text-blue-100 font-medium opacity-90">Calculate your estimated monthly payment instantly.</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 输入框组：极简高亮风格 */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Home Price ($)</label>
                <input 
                  type="number" 
                  value={homePrice} 
                  onChange={(e) => setHomePrice(Number(e.target.value))} 
                  className="w-full text-2xl font-bold px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Down Payment ($)</label>
                <input 
                  type="number" 
                  value={downPayment} 
                  onChange={(e) => setDownPayment(Number(e.target.value))} 
                  className="w-full text-2xl font-bold px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))} 
                  className="w-full text-2xl font-bold px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Loan Term</label>
                <select 
                  value={loanYears} 
                  onChange={(e) => setLoanYears(Number(e.target.value))} 
                  className="w-full text-xl font-bold px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 cursor-pointer appearance-none"
                >
                  <option value={15}>15 Years Fixed</option>
                  <option value={20}>20 Years Fixed</option>
                  <option value={30}>30 Years Fixed</option>
                </select>
              </div>
            </div>

            <button 
              onClick={calculateMortgage} 
              className="w-full bg-blue-600 text-white font-bold text-xl py-5 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-700/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Calculate Payment
            </button>

            {monthlyPayment !== null && (
              <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">Estimated Monthly Payment</p>
                <p className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                  <span className="text-3xl text-blue-500 align-top mr-1 font-bold">$</span>
                  {monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </p>
                <p className="text-gray-500 text-xs mt-4 font-medium">
                  Principal & Interest Only. Taxes and Insurance not included.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 📚 SEO 深度内容区 - 保持优雅排版 */}
        <article className="bg-white rounded-[2rem] p-10 md:p-14 border border-gray-100 shadow-xl shadow-gray-200/40">
          <div className="prose prose-blue max-w-none">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Understanding Your Mortgage</h2>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              Buying a home is the most significant financial commitment most people will ever make. Our professional-grade <strong>Mortgage Calculator</strong> is designed to provide absolute clarity using standard bank amortization formulas.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Essential FAQ</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-gray-900 mb-2">What is Principal and Interest?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Principal</strong> is the original amount you borrowed. <strong>Interest</strong> is what the lender charges you to use that money.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-gray-900 mb-2">How much down payment do I need?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  While 20% is traditional, many programs allow as little as 3% or 5% down in today's market.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full font-semibold text-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 transition">🔗 Home Buying Guide (CFPB)</a>
              <a href="https://www.bankrate.com/mortgages/mortgage-rates/" target="_blank" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full font-semibold text-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 transition">🔗 Today's Rates (Bankrate)</a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}