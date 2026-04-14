'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
      <p className="mb-4 sm:mb-0 opacity-90">
        We use cookies to personalize content, serve targeted advertisements, and analyze our traffic. By continuing to use our site, you consent to our privacy practices.
        <a href="/privacy" className="underline ml-2 text-blue-300 hover:text-blue-200">Learn more</a>
      </p>
      <button 
        onClick={accept} 
        className="bg-blue-600 hover:bg-blue-500 px-8 py-2.5 rounded-lg font-bold transition whitespace-nowrap"
      >
        Accept All
      </button>
    </div>
  );
}