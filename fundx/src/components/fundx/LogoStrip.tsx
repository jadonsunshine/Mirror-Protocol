export function LogoStrip() {
  return (
    <div className="w-full border-t border-slate-100 bg-slate-50/50 py-16">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        {/* Text Container */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* 1. STX */}
          <span className="text-4xl md:text-5xl font-black tracking-tighter text-slate-300 cursor-default transition-colors duration-300 hover:text-[#5546FF]">
            STX
          </span>
          {/* 2. BITCOIN */}
          <span className="text-4xl md:text-5xl font-black tracking-tighter text-slate-300 cursor-default transition-colors duration-300 hover:text-[#F7931A]">
            BITCOIN
          </span>

          {/* 3. USDCX */}
          <span className="text-4xl md:text-5xl font-black tracking-tighter text-slate-300 cursor-default transition-colors duration-300 hover:text-[#2775CA]">
            USDCX
          </span>

        </div>
      </div>
    </div>
  )
}