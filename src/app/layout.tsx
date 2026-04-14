import './globals.css';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const runtime = 'edge';

export const metadata = {
  title: 'Finance Tool Pro | Professional Mortgage & Currency Calculators',
  description: 'Ad-free, real-time financial calculators built for accuracy. Estimate your mortgage payments or convert global currencies instantly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-500 selection:text-white">
        
        {/* 高端悬浮毛玻璃导航 */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            
            <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-black text-lg">F</span>
              </div>
              <span className="text-slate-900">Finance<span className="text-blue-600">Tool</span></span>
            </Link>

            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8 font-semibold text-[15px] text-slate-600">
                <Link href="/mortgage" className="hover:text-blue-600 transition-colors">Mortgage</Link>
                <Link href="/currency" className="hover:text-blue-600 transition-colors">Currency</Link>
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-white border-t border-slate-200/60 pt-20 pb-12 mt-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-8 font-semibold text-sm text-slate-500">
              <Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-slate-900 transition-colors">Disclaimer</Link>
            </div>
            <p className="text-slate-400 text-sm mt-4">© {new Date().getFullYear()} Finance Tool Pro. Independent & Accurate.</p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}