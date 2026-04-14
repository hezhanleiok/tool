import './globals.css';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export const runtime = 'edge';

export const metadata = {
  title: 'Free Mortgage Calculator & Live Currency Converter',
  description: '100% free financial calculators. Live exchange rates, mortgage payments, and more. No sign up required.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 引入 Google 官方的多语言翻译脚本 */}
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
        <script dangerouslySetInnerHTML={{
          __html: `function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element'); }`
        }}></script>
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
        
        {/* 全局顶部导航 */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            {/* 极简、去AI化的 Logo */}
            <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <span className="text-blue-600">Free</span>Calc
            </Link>
            
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-6 font-semibold text-sm text-gray-600">
                <Link href="/mortgage" className="hover:text-blue-600 transition">Mortgage</Link>
                <Link href="/currency" className="hover:text-blue-600 transition">Currency</Link>
              </nav>
              
              {/* 多语言切换器 (Google Translate 挂载点) */}
              <div className="hidden sm:block border-l border-gray-200 pl-6">
                 <div id="google_translate_element" className="text-sm"></div>
              </div>
            </div>
          </div>
        </header>

        {/* 核心功能区 */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 全局底部导航 */}
        <footer className="bg-white border-t border-gray-200 mt-16 py-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-sm text-gray-500 gap-6">
            <div className="flex flex-wrap justify-center gap-8 font-medium">
              <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
              <Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-blue-600 transition">Disclaimer</Link>
            </div>
            <p>© {new Date().getFullYear()} Free Financial Calculators. All rights reserved.</p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}