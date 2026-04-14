import './globals.css';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export const runtime = 'edge';

// 这是给 Google 爬虫看的顶级 SEO 标签
export const metadata = {
  title: 'Finance Tool Pro | Professional Calculators',
  description: 'Free professional financial calculators including mortgage and real-time currency conversion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
        
        {/* 全局顶部导航 */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg">F</span>
              FinanceTool<span className="text-gray-800">Pro</span>
            </Link>
            <nav className="hidden md:flex gap-8 font-semibold text-sm text-gray-600">
              {/* 这里只保留了你确认需要的核心功能 */}
              <Link href="/mortgage" className="hover:text-blue-600 transition">Mortgage</Link>
              <Link href="/currency" className="hover:text-blue-600 transition">Currency</Link>
            </nav>
          </div>
        </header>

        {/* 核心功能区 */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 全局底部导航 */}
        <footer className="bg-white border-t border-gray-200 mt-16 py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© 2026 Finance Tool Pro. All rights reserved.</p>
            {/* 这里的底部合规链接已经为你完美配置 */}
            <div className="flex flex-wrap justify-center gap-6 font-medium">
              <Link href="/about" className="hover:text-blue-600 transition">About & Contact</Link>
              <Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-blue-600 transition">Disclaimer</Link>
            </div>
          </div>
        </footer>

        {/* 底部合规弹窗 */}
        <CookieBanner />
      </body>
    </html>
  )
}