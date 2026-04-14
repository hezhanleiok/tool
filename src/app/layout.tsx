import './globals.css';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export const runtime = 'edge';

export const metadata = {
  title: 'Free Financial Tools | Live Currency & Mortgage Calculator',
  description: 'Pro-grade, free financial calculators including real-time currency conversion and mortgage payment estimates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 彻底移除了导致变形的 Google 翻译脚本 */}
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
        
        {/* 高端玻璃态 (Glassmorphism) 导航栏 */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
            
            <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <span className="text-gray-900">Finance<span className="text-blue-600">Tool</span></span>
            </Link>

            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8 font-semibold text-sm text-gray-600">
                <Link href="/mortgage" className="hover:text-blue-600 transition-colors">Mortgage</Link>
                <Link href="/currency" className="hover:text-blue-600 transition-colors">Currency</Link>
              </nav>
              
              {/* 精美的高端原生语言切换 UI (不依赖外部丑陋脚本) */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 transition cursor-pointer text-sm font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>EN</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 font-medium text-sm text-gray-500">
              <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
              <Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-blue-600 transition">Disclaimer</Link>
            </div>
            <p className="text-gray-400 text-xs">© 2026 Finance Tool Pro. All rights reserved.</p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}