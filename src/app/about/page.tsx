export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">The Story Behind Finance Tool Pro</h1>
      
      <div className="prose prose-blue lg:prose-xl text-gray-700 space-y-7 leading-relaxed">
        <p className="text-xl font-medium text-gray-900">
          Let’s be real: Most financial calculators on the web today are just plain terrible. 
        </p>
        
        <p>
          I’m a solo software developer currently based in <strong>Los Angeles, CA</strong>. Like many of you, I spent years bouncing between clunky finance websites that were either stuck in 2005, overloaded with pop-up ads, or hidden behind a "create an account" wall just to do a simple mortgage calculation.
        </p>
        
        <p>
          I got tired of it. So, I decided to build my own.
        </p>
        
        <p>
          <strong>Finance Tool Pro</strong> is my personal response to that frustration. Every line of code here was hand-written to ensure one thing: <strong>speed</strong>. I wanted a place where I could get a mortgage estimate or convert currency in seconds, with zero friction and 100% transparency.
        </p>
        
        <p>
          This isn't a massive corporate project. It’s a one-man operation fueled by a lot of coffee and a passion for clean, functional design. I’m constantly tweaking the algorithms to match current 2026 financial standards because I use these tools for my own finances, too.
        </p>
        
        {/* 真人联系方式卡片 */}
        <div className="bg-white border-2 border-blue-600 p-8 rounded-3xl mt-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Let's Connect</h2>
          <p className="mb-6">
            If you find a bug, have an idea for a new feature, or just want to chat about personal finance, I’m actually reachable. No automated bots—just me.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-blue-600">Email:</span>
              <a href="mailto:hezhanleiok@gmail.com" className="hover:underline text-gray-900">hezhanleiok@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-blue-600">Telegram:</span>
              <a href="https://t.me/hezhanlwiok" target="_blank" className="hover:underline text-gray-900">@hezhanlwiok</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
              Personal Note
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              Note: I am a developer, not a licensed financial advisor. These tools are for educational and planning purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}