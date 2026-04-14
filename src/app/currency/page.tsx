'use client';

import { useState, useEffect } from 'react';

// 扩充至 40 种主流货币，带全套国旗
const CURRENCIES = [
  { code: 'USD', flag: '🇺🇸', name: 'US Dollar' }, { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
  { code: 'GBP', flag: '🇬🇧', name: 'British Pound' }, { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' },
  { code: 'CNY', flag: '🇨🇳', name: 'Chinese Yuan' }, { code: 'AUD', flag: '🇦🇺', name: 'Australian Dollar' },
  { code: 'CAD', flag: '🇨🇦', name: 'Canadian Dollar' }, { code: 'CHF', flag: '🇨🇭', name: 'Swiss Franc' },
  { code: 'HKD', flag: '🇭🇰', name: 'Hong Kong Dollar' }, { code: 'SGD', flag: '🇸🇬', name: 'Singapore Dollar' },
  { code: 'SEK', flag: '🇸🇪', name: 'Swedish Krona' }, { code: 'KRW', flag: '🇰🇷', name: 'South Korean Won' },
  { code: 'NOK', flag: '🇳🇴', name: 'Norwegian Krone' }, { code: 'NZD', flag: '🇳🇿', name: 'New Zealand Dollar' },
  { code: 'INR', flag: '🇮🇳', name: 'Indian Rupee' }, { code: 'MXN', flag: '🇲🇽', name: 'Mexican Peso' },
  { code: 'TWD', flag: '🇹🇼', name: 'New Taiwan Dollar' }, { code: 'ZAR', flag: '🇿🇦', name: 'South African Rand' },
  { code: 'BRL', flag: '🇧🇷', name: 'Brazilian Real' }, { code: 'DKK', flag: '🇩🇰', name: 'Danish Krone' },
  { code: 'PLN', flag: '🇵🇱', name: 'Polish Zloty' }, { code: 'THB', flag: '🇹🇭', name: 'Thai Baht' },
  { code: 'ILS', flag: '🇮🇱', name: 'Israeli New Shekel' }, { code: 'IDR', flag: '🇮🇩', name: 'Indonesian Rupiah' },
  { code: 'CZK', flag: '🇨🇿', name: 'Czech Koruna' }, { code: 'AED', flag: '🇦🇪', name: 'UAE Dirham' },
  { code: 'TRY', flag: '🇹🇷', name: 'Turkish Lira' }, { code: 'HUF', flag: '🇭🇺', name: 'Hungarian Forint' },
  { code: 'CLP', flag: '🇨🇱', name: 'Chilean Peso' }, { code: 'SAR', flag: '🇸🇦', name: 'Saudi Riyal' },
  { code: 'PHP', flag: '🇵🇭', name: 'Philippine Peso' }, { code: 'MYR', flag: '🇲🇾', name: 'Malaysian Ringgit' },
  { code: 'COP', flag: '🇨🇴', name: 'Colombian Peso' }, { code: 'RUB', flag: '🇷🇺', name: 'Russian Ruble' },
  { code: 'RON', flag: '🇷🇴', name: 'Romanian Leu' }, { code: 'PEN', flag: '🇵🇪', name: 'Peruvian Sol' },
  { code: 'BHD', flag: '🇧🇭', name: 'Bahraini Dinar' }, { code: 'BGN', flag: '🇧🇬', name: 'Bulgarian Lev' },
  { code: 'ARS', flag: '🇦🇷', name: 'Argentine Peso' }, { code: 'VND', flag: '🇻🇳', name: 'Vietnamese Dong' }
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
        console.error("Fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length > 0 && rates[fromCurrency] && rates[toCurrency]) {
      const inUSD = amount / rates[fromCurrency];
      setConvertedAmount(inUSD * rates[toCurrency]);
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getFlag = (code: string) => CURRENCIES.find(c => c.code === code)?.flag || '';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
        <div className="bg-blue-600 p-8 text-white text-center">
          <h1 className="text-3xl font-black mb-2">Live Currency Converter</h1>
          <p className="opacity-90 text-sm">Real-time exchange rates for 40 global currencies.</p>
        </div>
        
        <div className="p-8 md:p-12">
          {loading ? (
            <div className="text-center py-10"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div></div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-2/5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                  <div className="flex bg-white border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 shadow-sm">
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full px-4 py-3 outline-none text-xl font-bold bg-transparent" />
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="px-2 py-3 bg-gray-50 border-l border-gray-200 font-bold text-gray-700 outline-none cursor-pointer text-lg">
                      {CURRENCIES.map(cur => <option key={`f-${cur.code}`} value={cur.code}>{cur.flag} {cur.code}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex justify-center mt-6 md:mt-8">
                  <button onClick={handleSwap} className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-full transition transform hover:rotate-180 border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                  </button>
                </div>

                <div className="w-full md:w-2/5">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Converted To</label>
                  <div className="flex bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                     <div className="w-full px-4 py-3 text-xl font-bold text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
                       {convertedAmount ? convertedAmount.toFixed(2) : '0.00'}
                     </div>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="px-2 py-3 bg-gray-100 border-l border-gray-200 font-bold text-gray-700 outline-none cursor-pointer text-lg">
                      {CURRENCIES.map(cur => <option key={`t-${cur.code}`} value={cur.code}>{cur.flag} {cur.code}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {convertedAmount !== null && (
                <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-500 font-medium mb-2 flex items-center justify-center gap-2">
                    <span className="text-2xl">{getFlag(fromCurrency)}</span> {amount} {fromCurrency} =
                  </p>
                  <p className="text-5xl font-black text-gray-900 flex items-center justify-center gap-3">
                    {convertedAmount.toFixed(2)} 
                    <span className="text-2xl text-blue-600 flex items-center gap-2">{toCurrency} <span className="text-3xl">{getFlag(toCurrency)}</span></span>
                  </p>
                  <p className="text-xs text-gray-400 mt-6 uppercase flex justify-center items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Last updated: {lastUpdated}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}