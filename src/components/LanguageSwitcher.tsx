'use client';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // 初始化时，读取当前的翻译 Cookie，让下拉框显示正确的语言
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match && match[1]) {
      setLang(match[1]);
    }

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,zh-CN,es,ja,fr,de', autoDisplay: false },
          'google_translate_element'
        );
      };
    }
  }, []);

  // 核心修复：通过写入 Cookie 强制 Google 翻译生效
  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);

    if (newLang === 'en') {
      // 选英文时，清除 Cookie 恢复原状
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
    } else {
      // 写入目标语言 Cookie
      document.cookie = `googtrans=/en/${newLang}; path=/;`;
      document.cookie = `googtrans=/en/${newLang}; domain=${window.location.hostname}; path=/;`;
    }
    // 刷新页面，让 Google 脚本无缝接管，100% 成功
    window.location.reload();
  };

  return (
    <div className="relative flex items-center">
      <div id="google_translate_element" className="hidden"></div>
      {/* 极简高端的下拉框 UI */}
      <div className="relative flex items-center bg-white border border-gray-200/80 rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
        <select value={lang} onChange={handleLangChange} className="bg-transparent text-sm font-semibold text-gray-700 outline-none cursor-pointer appearance-none pr-4 z-10">
          <option value="en">English</option>
          <option value="zh-CN">中文 (繁/简)</option>
          <option value="es">Español</option>
          <option value="ja">日本語</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400 absolute right-2.5 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </div>
    </div>
  );
}

declare global {
  interface Window { googleTranslateElementInit: () => void; google: any; }
}
