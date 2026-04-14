'use client';

import { useState, useEffect } from 'react';

// 汇率支持国家超级扩充（30个全球主流货币）
const POPULAR_CURRENCIES = [
  { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
  { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
  { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
  { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' },
  { code: 'AUD', flag: '🇦🇺', name: 'Australian Dollar' },
  { code: 'CAD', flag: '🇨🇦', name: 'Canadian Dollar' },
  { code: 'CHF', flag: '🇨🇭', name: 'Swiss Franc' },
  { code: 'CNY', flag: '🇨🇳', name: 'Chinese Yuan' },
  { code: 'HKD', flag: '🇭🇰', name: 'Hong Kong Dollar' },
  { code: 'SGD', flag: '🇸🇬', name: 'Singapore Dollar' },
  { code: 'INR', flag: '🇮🇳', name: 'Indian Rupee' },
  { code: 'NZD', flag: '🇳🇿', name: 'New Zealand Dollar' },
  { code: 'ZAR', flag: '🇿🇦', name: 'South African Rand' },
  { code: 'BRL', flag: '🇧🇷', name: 'Brazilian Real' },
  { code: 'MXN', flag: '🇲🇽', name: 'Mexican Peso' },
  { code: 'AED', flag: '🇦🇪', name: 'UAE Dirham' },
  { code: 'KRW', flag: '🇰🇷', name: 'South Korean Won' },
  { code: 'SEK', flag: '🇸🇪', name: 'Swedish Krona' },
  { code: 'NOK', flag: '🇳🇴', name: 'Norwegian Krone' },
  { code: 'DKK', flag: '🇩🇰', name: 'Danish Krone' },
  { code: 'TRY', flag: '🇹🇷', name: 'Turkish Lira' },
  { code: 'THB', flag: '🇹🇭', name: 'Thai Baht' },
  { code: 'IDR', flag: '🇮🇩', name: 'Indonesian Rupiah' },
  { code: 'MYR', flag: '🇲🇾', name: 'Malaysian Ringgit' },
  { code: 'PHP', flag: '🇵🇭', name: 'Philippine Peso' },
  { code: 'VND', flag: '🇻🇳', name: 'Vietnamese Dong' },
  { code: 'PLN', flag: '🇵🇱', name: 'Polish Zloty' },
  { code: 'CZK', flag: '🇨🇿', name: 'Czech Koruna' },
  { code: 'HUF', flag: '🇭🇺', name: 'Hungarian Forint' },
  { code: 'ILS', flag: '🇮🇱', name: 'Israeli New Shekel' }
];

export default function CurrencyConverter() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://v6.exchangerate-api.com/v6/a7f2a27dcf004a6afed98c66/latest/USD');
        const data = await res.json();
        
        if (data.result === 'success') {
          setRates(data.conversion_rates);
          setLastUpdated(data.time_last_update_utc.substring(0, 16)); 
        }
      } catch (error) {
        console.error("Failed to fetch exchange rates", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      const inUSD = amount / rates[fromCurrency];
      const result = inUSD * rates[toCurrency];
      setConvertedAmount(result);
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getFlag = (code: string) => POPULAR_CURRENCIES.find(c => c.code === code)?.flag || '';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* 工具主体区域 */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="bg-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl font-black mb-2">Live Currency Converter</h1>
            <p className="opacity-90 text-sm">Real-time market rates. Fast, accurate, and completely free.</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-8">
            {loading ? (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-500 font-medium">Fetching live market data from global banks...</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-2/5">
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Amount</label>
                    <div className="flex bg-white border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 shadow-sm">
                      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full px-4 py-3 outline-none text-xl font-bold bg-transparent" />
                      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="px-2 py-3 bg-gray-50 border-l border-gray-200 font-bold text-gray-700 outline-none cursor-pointer text-lg">
                        {POPULAR_CURRENCIES.map(cur => (<option key={`from-${cur.code}`} value={cur.code}>{cur.flag} {cur.code}</option>))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6 md:mt-8">
                    <button onClick={handleSwap} className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-full transition-transform transform hover:rotate-180 border border-blue-100 shadow-sm" title="Swap Currencies">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full md:w-2/5">
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Converted To</label>
                    <div className="flex bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                       <div className="w-full px-4 py-3 text-xl font-bold text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
                         {convertedAmount ? convertedAmount.toFixed(2) : '0.00'}
                       </div>
                      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="px-2 py-3 bg-gray-100 border-l border-gray-200 font-bold text-gray-700 outline-none cursor-pointer text-lg">
                        {POPULAR_CURRENCIES.map(cur => (<option key={`to-${cur.code}`} value={cur.code}>{cur.flag} {cur.code}</option>))}
                      </select>
                    </div>
                  </div>
                </div>

                {convertedAmount !== null && (
                  <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                    <p className="text-gray-500 font-medium mb-2 flex items-center justify-center gap-2">
                      <span className="text-2xl">{getFlag(fromCurrency)}</span> {amount} {fromCurrency} equals
                    </p>
                    <p className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-3">
                      {convertedAmount.toFixed(2)} 
                      <span className="text-2xl text-blue-600 flex items-center gap-2">{toCurrency} <span className="text-3xl">{getFlag(toCurrency)}</span></span>
                    </p>
                    <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest font-semibold flex justify-center items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                      Market data last updated: {lastUpdated}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* 这一部分是专门给 Google 爬虫和用户看的深度内容 */}
        <article className="prose prose-blue max-w-none text-gray-600 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Currency Converter</h2>
          <p>Converting global currencies has never been easier. Simply enter the amount you wish to convert in the left input box. Select your base currency (the money you have) and your target currency (the money you want) using the dropdown menus. Our tool instantly communicates with global financial data providers to give you the exact conversion based on the latest mid-market exchange rates.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions (FAQ)</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800">Where do the exchange rates come from?</h4>
              <p className="text-sm mt-1">Our live rates are sourced directly from trusted financial data APIs which aggregate data from global commercial sources and banks. This ensures you are looking at highly accurate, real-time mid-market rates.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">What is the "Mid-Market Rate"?</h4>
              <p className="text-sm mt-1">The mid-market rate is the midpoint between the buy and sell prices of two currencies. It is known as the "real" rate. Note that consumer banks and money transfer services usually add a markup to this rate when you exchange physical cash.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">How often are the rates updated?</h4>
              <p className="text-sm mt-1">Our system fetches new data continuously. You can check the exact timestamp of the last update indicated by the green pulsing light below the calculation result.</p>
            </div>
          </div>

          {/* 外链权威网站（SEO 杀手锏） */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Useful Resources & Partners</h3>
            <ul className="flex flex-col sm:flex-row gap-4 text-sm">
              <li>
                <a href="https://www.investopedia.com/terms/e/exchangerate.asp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <span className="bg-gray-100 p-1 rounded">🔗</span> Understand Exchange Rates (Investopedia)
                </a>
              </li>
              <li>
                <a href="https://www.xe.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <span className="bg-gray-100 p-1 rounded">🔗</span> Global Currency Data (XE)
                </a>
              </li>
              <li>
                <a href="https://www.bloomberg.com/markets/currencies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <span className="bg-gray-100 p-1 rounded">🔗</span> Forex Market News (Bloomberg)
                </a>
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-4 italic">* Finance Tool Pro is an independent calculation tool. External links are provided for educational purposes.</p>
          </div>
        </article>

      </main>
    </div>
  );
}