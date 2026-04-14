import './globals.css';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export const runtime = 'edge';

export const metadata = {
  title: 'Free Financial Tools | Live Currency & Mortgage Calculator',
  description: 'Pro-grade, free financial calculators including real-time currency conversion and mortgage payment estimates. 2026 Updated.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
        <script dangerouslySetInnerHTML={{
          __html: `function googleTranslateElementInit() { 
            new google.translate.TranslateElement({
              pageLanguage: 'en', 
              includedLanguages: 'zh-CN,ja,fr,en', 
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element'); 
          }`
        }}></script>
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <header className="border-b-[3px] border-slate-900 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
            <Link href="/" className="text-3xl font-black italic tracking-tighter">
              <span className="text-blue-600">Free</span>Calc
            </Link>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8 font-black uppercase italic text-sm tracking-widest">
                <Link href="/mortgage" className="hover:text-blue-600 transition">Mortgage</Link>
                <Link href="/currency" className="hover:text-blue-600 transition">Currency</Link>
              </nav>
              <div id="google_translate_element" className="border-2 border-slate-900 rounded-xl px-2 bg-slate-50 scale-90"></div>
            </div>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-8 font-black uppercase italic text-xs tracking-widest">
              <Link href="/about" className="hover:text-blue-400">About</Link>
              <Link href="/privacy" className="hover:text-blue-400">Privacy</Link>
              <Link href="/disclaimer" className="hover:text-blue-400">Disclaimer</Link>
            </div>
            <p className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase">© 2026 FreeCalc Studio - Crafted for Accuracy.</p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}