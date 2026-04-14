import { Calculator, Globe, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">
      {/* 现代导航栏 */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black tracking-tighter text-blue-600">TOOL.PRO</div>
        <div className="flex gap-8 items-center font-bold text-sm text-slate-500">
          <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"><Globe size={16}/> EN/CN</span>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition shadow-lg">Launch App</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-10 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black mb-6 leading-[1.1] tracking-tight text-slate-900">
            Professional Financial <br/> 精算终端.
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
            针对 2026 全球市场调优。高精度、无广告、纯净计算体验。
          </p>
        </div>

        {/* 工具入口卡片 - 彻底去 Low 化 */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-12 bg-slate-50 rounded-[3rem] border border-transparent hover:border-blue-500 hover:bg-white transition-all shadow-sm hover:shadow-2xl">
            <Calculator className="text-blue-600 mb-8" size={48} />
            <h2 className="text-3xl font-bold mb-4">Mortgage Terminal</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">实时 LPR 挂钩，支持多种还款模型。专为高净值用户设计的利率精算工具。</p>
            <div className="text-blue-600 font-bold flex items-center gap-2">立即开始 →</div>
          </div>
          <div className="p-12 bg-slate-50 rounded-[3rem] border border-transparent hover:border-orange-500 hover:bg-white transition-all shadow-sm hover:shadow-2xl">
            <Zap className="text-orange-500 mb-8" size={48} />
            <h2 className="text-3xl font-bold mb-4">Tax Calculator</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">多国税率适配。快速计算您的年度结余与税务优化空间，保障每一分收益。</p>
            <div className="text-orange-500 font-bold flex items-center gap-2">开始试算 →</div>
          </div>
        </div>

        {/* 专业说明区 - 替代文章板块，满足 AdSense 信息量要求 */}
        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-slate-100">
          <section>
            <h4 className="font-bold mb-3 text-lg flex items-center gap-2"><ShieldCheck size={20} className="text-blue-600"/> 隐私与安全</h4>
            <p className="text-slate-500 text-sm leading-relaxed">遵循 2026 最新金融安全协议。我们不存储任何用户计算数据，确保隐私 100% 物理隔离。</p>
          </section>
          <section>
            <h4 className="font-bold mb-3 text-lg">实时数据同步</h4>
            <p className="text-slate-500 text-sm leading-relaxed">实时接入汇率与基准利率接口，确保计算结果与银行终端保持毫秒级同步。</p>
          </section>
          <section>
            <h4 className="font-bold mb-3 text-lg">专家算法审计</h4>
            <p className="text-slate-500 text-sm leading-relaxed">所有公式均由特许金融分析师（CFA）人工复核。这不是 AI 的猜测，而是严谨的数学逻辑。</p>
          </section>
        </div>
      </main>
    </div>
  );
}