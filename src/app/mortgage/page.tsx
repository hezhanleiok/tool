'use client';
import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<number>(350000);
  const [downPayment, setDownPayment] = useState<number>(70000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanYears, setLoanYears] = useState<number>(30);

  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
    principal: number;
    yearlySchedule: Array<{ year: number; principal: number; interest: number; balance: number }>;
  } | null>(null);

  // 核心亮点：数据变动即时触发计算，无需点击按钮
  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, loanYears]);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const r = (interestRate / 100) / 12;
    const n = loanYears * 12;

    if (principal <= 0 || homePrice <= 0) {
      setResult(null);
      return;
    }

    let monthly = 0;
    if (r === 0) {
      monthly = principal / n;
    } else {
      monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalPayment = monthly * n;
    const totalInterest = totalPayment - principal;

    // 核心杀手锏：生成专业年度摊销表 (Amortization Schedule)
    let balance = principal;
    const schedule = [];
    for (let year = 1; year <= loanYears; year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      for (let month = 1; month <= 12; month++) {
        const interestPayment = balance * r;
        const principalPayment = monthly - interestPayment;
        yearlyInterest += interestPayment;
        yearlyPrincipal += principalPayment;
        balance -= principalPayment;
      }
      schedule.push({
        year,
        principal: yearlyPrincipal,
        interest: yearlyInterest,
        balance: balance > 0 ? balance : 0,
      });
    }

    setResult({
      monthlyPayment: monthly,
      totalInterest: totalInterest,
      totalPayment: totalPayment,
      principal: principal,
      yearlySchedule: schedule
    });
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans pb-20">
      
      {/* 🚀 机构级顶栏：深邃的海军蓝背景 */}
      <div className="bg-[#0B1E36] pt-16 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Mortgage Calculator</h1>
          <p className="text-lg text-blue-200 font-medium max-w-2xl">
            Estimate your monthly payments, view your complete amortization schedule, and understand the true cost of your home loan.
          </p>
        </div>
      </div>

      {/* 🚀 核心控制台：紧凑的金融表单风格 */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200 p-8 md:p-10 mb-12 flex flex-col lg:flex-row gap-12">
          
          {/* 左侧：输入区域 */}
          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Loan Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Home Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} 
                    className="w-full text-xl font-bold pl-10 pr-4 py-4 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-sm text-slate-900" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                  <span>Down Payment</span>
                  <span className="text-blue-600">{(downPayment / homePrice * 100).toFixed(1)}%</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} 
                    className="w-full text-xl font-bold pl-10 pr-4 py-4 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-sm text-slate-900" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interest Rate</label>
                <div className="relative">
                  <input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} 
                    className="w-full text-xl font-bold pl-4 pr-10 py-4 bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-sm text-slate-900" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Loan Term</label>
                <div className="relative">
                  <select value={loanYears} onChange={e => setLoanYears(Number(e.target.value))} 
                    className="w-full pl-4 pr-10 py-4 bg-white border border-slate-300 rounded-xl font-bold text-xl outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all appearance-none cursor-pointer shadow-sm text-slate-900">
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：专业数据透视分析 */}
          <div className="flex-1 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col justify-center">
            {result ? (
              <div className="w-full animate-fade-in">
                <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm mb-2">Estimated Monthly Payment</p>
                <p className="text-5xl md:text-6xl font-black text-[#0B1E36] tracking-tight mb-8">
                  <span className="text-3xl text-slate-400 mr-1">$</span>
                  {result.monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </p>
                
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-600"></div><span className="text-slate-600 font-medium">Principal Amount</span></div>
                    <span className="font-bold text-slate-900">${result.principal.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><span className="text-slate-600 font-medium">Total Interest Paid</span></div>
                    <span className="font-bold text-slate-900">${result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-200 border-dashed">
                    <span className="text-slate-800 font-bold">Total Cost of Loan</span>
                    <span className="font-black text-slate-900">${result.totalPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-6 font-medium">* Principal and interest only. Excludes taxes, HOA, and insurance.</p>
              </div>
            ) : (
              <div className="text-center text-slate-400 font-medium">Please enter valid property details to see the calculation.</div>
            )}
          </div>
        </div>

        {/* 🚀 大杀器：年度摊销表 (Amortization Schedule) */}
        {result && result.yearlySchedule && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-16">
            <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-lg">Yearly Amortization Schedule</h3>
              <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{loanYears}-Year Fixed Rate</span>
            </div>
            <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="text-xs text-slate-500 uppercase bg-white sticky top-0 shadow-sm">
                  <tr>
                    <th className="px-8 py-4 font-semibold">Year</th>
                    <th className="px-8 py-4 font-semibold text-right">Principal Paid</th>
                    <th className="px-8 py-4 font-semibold text-right">Interest Paid</th>
                    <th className="px-8 py-4 font-semibold text-right">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearlySchedule.map((row) => (
                    <tr key={row.year} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-4 font-bold text-slate-900">Year {row.year}</td>
                      <td className="px-8 py-4 font-medium text-blue-600 text-right">${row.principal.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                      <td className="px-8 py-4 font-medium text-red-500 text-right">${row.interest.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                      <td className="px-8 py-4 font-bold text-slate-700 text-right">${row.balance.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 📖 严肃金融房贷百科 (强化 E-E-A-T 评分) */}
        <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0B1E36] mb-6">
            Understanding Your Mortgage Amortization
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            When you take out a mortgage, your monthly payments are split between paying off the original amount you borrowed (the principal) and the cost of borrowing that money (the interest). The <strong>Amortization Schedule</strong> provided above mathematically models this process, illustrating why making extra principal payments early in your loan can save you tens of thousands of dollars.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Home Loan FAQ</h3>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-bold text-slate-900">Why does the interest seem so high at the beginning?</h4>
              <p className="text-slate-600 mt-2">Mortgages use a standard amortization formula where interest is calculated based on the <em>remaining balance</em>. Since your balance is highest in Year 1, the interest portion of your monthly payment is also at its peak. Over time, as you pay down the principal, the interest portion shrinks.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-bold text-slate-900">What is Private Mortgage Insurance (PMI)?</h4>
              <p className="text-slate-600 mt-2">If your down payment is less than 20% of the home's purchase price, conventional lenders will require you to pay PMI. This insurance protects the lender—not you—in case you default on the loan. PMI adds a monthly premium to your payment until you reach 20% equity.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-bold text-slate-900">Are Property Taxes and Insurance included?</h4>
              <p className="text-slate-600 mt-2">Our calculator computes the core "P&I" (Principal and Interest). Your total monthly housing expense will also include property taxes, homeowners insurance, and potentially HOA (Homeowners Association) fees. Lenders refer to this complete package as <strong>PITI</strong>.</p>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
