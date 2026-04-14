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
    if (principal <= 0) { setMonthlyPayment(0); return; }
    let payment = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(payment);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      
      {/* 头部标题区 */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Mortgage Calculator</h1>
        <p className="text-lg text-slate-500">A professional tool to estimate your monthly home loan payments accurately.</p>
      </div>

      {/* 高端计算器核心区块 (左右分栏设计) */}
      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 mb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 左侧：输入表单 */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Home Price ($)</label>
              <input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} 
                className="w-full text-xl font-bold px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Down Payment ($)</label>
              <input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} 
                className="w-full text-xl font-bold px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interest Rate (%)</label>
                <input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} 
                  className="w-full text-xl font-bold px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Loan Term</label>
                <select value={loanYears} onChange={e => setLoanYears(Number(e.target.value))} 
                  className="w-full text-xl font-bold px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 cursor-pointer appearance-none">
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>
            </div>
            <button onClick={calculateMortgage} 
              className="w-full mt-4 bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all transform active:scale-[0.99]">
              Calculate Output
            </button>
          </div>

          {/* 右侧：结果高亮 */}
          <div className="flex-1 bg-slate-50 rounded-3xl p-8 flex flex-col justify-center items-center border border-slate-100 text-center">
            {monthlyPayment !== null ? (
              <div className="animate-fade-in w-full">
                <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm mb-4">Estimated Monthly Payment</p>
                <p className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-3xl text-slate-400 mr-1">$</span>
                  {monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </p>
                <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-full text-left space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Principal Amount</span><span className="font-bold text-slate-800">${(homePrice - downPayment).toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Down Payment</span><span className="font-bold text-slate-800">${downPayment.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Note</span><span className="font-bold text-blue-600">Excludes Taxes & Insurance</span></div>
                </div>
              </div>
            ) : (
              <div className="text-slate-400 font-medium">Enter your details and click calculate to see your payment breakdown.</div>
            )}
          </div>
        </div>
      </div>

      {/* 📖 极度专业的金融使用指南与 FAQ (AdSense 核心得分点) */}
      <article className="max-w-4xl mx-auto prose prose-lg prose-slate bg-white p-10 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Comprehensive Guide to Your Mortgage</h2>
        <p className="text-slate-600">A mortgage is likely the largest financial commitment you will ever make. Our professional mortgage calculator uses the exact amortization mathematical models employed by major US and European banks to help you forecast your financial future with precision.</p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to Use This Tool</h3>
        <ul className="space-y-2 text-slate-600">
          <li><strong>Home Price:</strong> The total agreed-upon purchase price of the real estate.</li>
          <li><strong>Down Payment:</strong> The upfront cash you provide. A standard down payment is 20%, which typically allows you to avoid paying Private Mortgage Insurance (PMI).</li>
          <li><strong>Interest Rate:</strong> The annual cost of borrowing money from your lender. Even a 0.5% difference can mean tens of thousands of dollars over the life of a loan.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-slate-800">What is PITI?</h4>
            <p className="text-slate-600 mt-2">PITI stands for Principal, Interest, Taxes, and Insurance. Our calculator computes the <strong>Principal and Interest</strong>. When budgeting, remember that your actual monthly check to the bank will be higher because it will include local property taxes and homeowners insurance.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-800">15-Year vs. 30-Year Mortgage: Which is Better?</h4>
            <p className="text-slate-600 mt-2">A 30-year term is the industry standard because it spreads the debt over a longer period, resulting in a lower, more manageable monthly payment. A 15-year term will have significantly higher monthly payments, but you will own your home outright in half the time and save a massive amount on total interest paid.</p>
          </div>
        </div>
      </article>
    </div>
  );
}