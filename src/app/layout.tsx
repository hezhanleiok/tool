import './globals.css';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export const runtime = 'edge';

// 🚨 2026 顶级 SEO 标题，精准打击搜索词
export const metadata = {
  title: 'Free Mortgage Calculator & Live Currency Converter (Real-time)',
  description: 'Hand-coded financial tools for modern users. Instant mortgage estimates and live exchange rates for 40+ currencies. No sign-up, no hidden fees.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google 翻译引擎脚本 */}
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
        <script dangerouslySetInnerHTML={{
          __html: `function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element'); }`
        }}></script>
      </head>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
        <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            <Link href="/" className="text-2xl font-black flex items-center gap-2">
              <span className="text-blue-600 tracking-tighter">Finance</span>Tool
            </Link>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8 font-bold text-sm">
                <Link href="/mortgage" className="hover:text-blue-600 transition">Mortgage</Link>
                <Link href="/currency" className="hover:text-blue-600 transition">Currency</Link>
              </nav>
              {/* 语言切换挂载点 */}
              <div id="google_translate_element" className="text-sm"></div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-slate-50 border-t py-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 font-bold text-slate-500">
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
              <Link href="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
            </div>
            <p className="text-slate-400 text-sm italic">© 2026 Finance Tool Pro - Los Angeles, CA.</p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}