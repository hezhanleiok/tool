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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* 工具主体区域 */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="bg-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl font-black mb-2">Mortgage Payment Calculator</h1>
            <p className="opacity-90 text-sm">Estimate your monthly house payments instantly.</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Home Price ($)</label>
                <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-500 outline-none transition text-xl font-bold bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Down Payment ($)</label>
                <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-500 outline-none transition text-xl font-bold bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Interest Rate (%)</label>
                <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-500 outline-none transition text-xl font-bold bg-gray-50" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Loan Term</label>
                <select value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-500 outline-none transition text-xl font-bold bg-gray-50 cursor-pointer">
                  <option value={15}>15 Years Fixed</option>
                  <option value={20}>20 Years Fixed</option>
                  <option value={30}>30 Years Fixed</option>
                </select>
              </div>
            </div>

            <button onClick={calculateMortgage} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-4 rounded-xl transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculate Monthly Payment
            </button>

            {monthlyPayment !== null && (
              <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-500 font-medium mb-2 uppercase tracking-widest text-sm">Estimated Monthly Payment</p>
                <p className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
                  <span className="text-3xl text-blue-600 align-top">$</span>{monthlyPayment.toFixed(2)}
                </p>
                <p className="text-xs text-gray-400 mt-4 uppercase tracking-wide">Principal & Interest Only. Taxes and Insurance not included.</p>
              </div>
            )}
          </div>
        </div>

        {/* 房贷深度内容与 FAQ (SEO 杀手锏) */}
        <article className="prose prose-blue max-w-none text-gray-600 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Mortgage</h2>
          <p>Buying a home is one of the largest financial decisions you will ever make. Our free mortgage calculator helps you estimate your monthly payments based on standard amortization formulas used by banks and lenders worldwide.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Mortgage FAQ</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800">What is Principal and Interest?</h4>
              <p className="text-sm mt-1"><strong>Principal</strong> is the actual amount of money you borrowed to buy the home. <strong>Interest</strong> is the cost of borrowing that money. In the early years of a 30-year mortgage, the majority of your monthly payment goes toward interest.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">How much down payment do I need?</h4>
              <p className="text-sm mt-1">While 20% is considered the traditional standard to avoid Private Mortgage Insurance (PMI), many first-time buyer programs allow down payments as low as 3% to 5%.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Should I choose a 15-year or 30-year term?</h4>
              <p className="text-sm mt-1">A 30-year term offers lower monthly payments, making it easier to afford day-to-day. A 15-year term has higher monthly payments but saves you tens of thousands of dollars in interest over the life of the loan.</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">External Resources</h3>
            <ul className="flex flex-col sm:flex-row gap-4 text-sm">
              <li>
                <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <span className="bg-gray-100 p-1 rounded">🔗</span> Guide to Owning a Home (CFPB)
                </a>
              </li>
              <li>
                <a href="https://www.bankrate.com/mortgages/mortgage-rates/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <span className="bg-gray-100 p-1 rounded">🔗</span> Today's Mortgage Rates (Bankrate)
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}