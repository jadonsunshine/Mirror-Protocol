import { Navbar } from "@/components/fundx/Navbar"
import { Hero } from "@/components/fundx/Hero"
import { LogoStrip } from "@/components/fundx/LogoStrip"
import { Footer } from "@/components/fundx/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-100 font-sans">
      <Navbar />
      <Hero />

      {/* 3. The "Gallery" Layout */}
      <section id="campaigns" className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
        
        {/* Dot Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-[1400px] px-4">
          
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Trending Campaigns
            </h2>
            <p className="text-lg text-slate-500">
              Support verified builders on Stacks. Trustless & Transparent.
            </p>
          </div>

          {/* THE GALLERY ROW */}
          <div className="flex flex-col xl:flex-row justify-center items-center gap-6 xl:gap-8">
            
            {/* 1. LEFT CARD (Horizontal, Scaled Down) */}
            <div className="w-full max-w-xl transition-all duration-500 xl:scale-90 xl:opacity-60 xl:hover:scale-100 xl:hover:opacity-100 bg-white rounded-[1.5rem] shadow-soft-md border border-slate-100 overflow-hidden group">
               <div className="flex h-48">
                  {/* Image */}
                  <div className="w-40 relative bg-slate-100 shrink-0">
                     <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs font-bold">[Image]</div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Stacks School</h3>
                        <p className="text-sm text-slate-500 line-clamp-2">Teaching Clarity to 10k devs worldwide.</p>
                     </div>
                     <div className="flex justify-between items-center mt-4">
                        <div className="text-sm font-bold text-primary">$12,000</div>
                        <Button size="sm" className="rounded-lg bg-slate-900 text-white shadow-md hover:bg-primary transition-all">
                           Donate
                        </Button>
                     </div>
                  </div>
               </div>
            </div>

            {/* 2. CENTER CARD (THE STAR - Wide & Tall) */}
            <div className="w-full max-w-2xl relative z-20 shadow-2xl rounded-[2rem] border border-slate-100 bg-white hover:border-orange-200 transition-all duration-300 transform scale-100">
               {/* Badge */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-gradient-tush text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-soft-xl animate-pulse whitespace-nowrap">
                 🔥 Top Trending
               </div>
               
               <div className="flex flex-col md:flex-row h-full min-h-[320px]">
                  {/* Image Half */}
                  <div className="relative h-64 md:h-auto md:w-5/12 overflow-hidden rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none bg-slate-100">
                     <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold bg-slate-50">
                        [Hero Image]
                     </div>
                  </div>
                  
                  {/* Content Half */}
                  <div className="flex flex-col justify-between p-8 md:w-7/12">
                    <div>
                       <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">DeFi for Everyone</h3>
                       <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                         The first mobile-first yield aggregator on Stacks. Democratizing finance with simple UX.
                       </p>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                         <div className="bg-gradient-tush h-full w-[90%] rounded-full shadow-[0_0_15px_rgba(255,107,74,0.4)]" />
                      </div>
                      <div className="flex flex-wrap gap-4 justify-between items-end">
                         <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Raised</p>
                            <p className="text-2xl font-bold text-primary">$45,000</p>
                         </div>
                         <Button className="h-12 rounded-xl px-8 bg-slate-900 text-white shadow-lg hover:bg-primary hover:shadow-glow transition-all duration-300">
                            Donate Now
                         </Button>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* 3. RIGHT CARD (Horizontal, Scaled Down) */}
            <div className="w-full max-w-xl transition-all duration-500 xl:scale-90 xl:opacity-60 xl:hover:scale-100 xl:hover:opacity-100 bg-white rounded-[1.5rem] shadow-soft-md border border-slate-100 overflow-hidden group">
               <div className="flex h-48">
                  {/* Image */}
                  <div className="w-40 relative bg-slate-100 shrink-0">
                     <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs font-bold">[Image]</div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Green Mining</h3>
                        <p className="text-sm text-slate-500 line-clamp-2">Solar-powered Bitcoin mining in Texas.</p>
                     </div>
                     <div className="flex justify-between items-center mt-4">
                        <div className="text-sm font-bold text-primary">$5,000</div>
                        <Button size="sm" className="rounded-lg bg-slate-900 text-white shadow-md hover:bg-primary transition-all">
                           Donate
                        </Button>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <LogoStrip />
      <Footer />
    </main>
  )
}