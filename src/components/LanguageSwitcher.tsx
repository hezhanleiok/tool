'use client';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,zh-CN,es,ja', autoDisplay: false },
          'google_translate_element'
        );
      };
    }
  }, []);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="relative flex items-center">
      <div id="google_translate_element" className="hidden"></div>
      <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 hover:bg-slate-100 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
        <select value={lang} onChange={handleLangChange} className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer appearance-none pr-4">
          <option value="en">English</option>
          <option value="zh-CN">中文</option>
          <option value="es">Español</option>
          <option value="ja">日本語</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-400 absolute right-2 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </div>
    </div>
  );
}

declare global {
  interface Window { googleTranslateElementInit: () => void; google: any; }
}