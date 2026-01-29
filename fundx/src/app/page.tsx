import { Navbar } from "@/components/fundx/Navbar"
import { Hero } from "@/components/fundx/Hero"
import { CampaignCard } from "@/components/fundx/CampaignCard"
import { LogoStrip } from "@/components/fundx/LogoStrip"
import { Footer } from "@/components/fundx/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-100 font-sans">
      <Navbar />
      <Hero />

      {/* 3. The "Wide Fan" Layout */}
      <section id="campaigns" className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
        
        {/* Dot Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Trending Campaigns
            </h2>
            <p className="text-lg text-slate-500">
              Support verified builders on Stacks. Trustless & Transparent.
            </p>
          </div>

          {/* THE WIDE FAN */}
          <div className="flex flex-col xl:flex-row justify-center items-center gap-8 xl:gap-0 relative">
            
            {/* 1. LEFT CARD (Vertical, Tilted Left) */}
            <div className="w-full max-w-[320px] transition-all duration-700 ease-out xl:transform xl:-rotate-6 xl:translate-y-12 xl:translate-x-8 hover:z-30 hover:scale-105 hover:rotate-0 origin-bottom-right opacity-90 hover:opacity-100">
              <CampaignCard 
                title="Stacks School"
                description="Teaching Clarity to 10k devs."
                raised={12000}
                goal={100000}
                image="/campaign-2.jpg"
              />
            </div>

            {/* 2. CENTER CARD (WIDE HERO - BENTO STYLE) */}
            {/* Max-width is wider (2xl) to create that landscape look */}
            <div className="w-full max-w-3xl relative z-20 shadow-2xl rounded-[2rem] border border-slate-100 bg-white hover:border-orange-200 transition-all duration-300">
               {/* Badge */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-gradient-tush text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-soft-xl animate-pulse whitespace-nowrap">
                 🔥 Top Trending
               </div>
               
               {/* Manual Horizontal Layout (Restored from Bento) */}
               <div className="flex flex-col md:flex-row h-full">
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
                         The first mobile-first yield aggregator on Stacks. Democratizing finance for the 99% with simple UX and trustless strategies.
                       </p>
                    </div>
                    
                    <div className="space-y-5">
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                         <div className="bg-gradient-tush h-full w-[90%] rounded-full shadow-[0_0_15px_rgba(255,107,74,0.4)]" />
                      </div>
                      
                      <div className="flex flex-wrap gap-4 justify-between items-end">
                         <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Raised</p>
                            <p className="text-2xl font-bold text-primary">$45,000 <span className="text-sm text-slate-400 font-normal">/ $50k</span></p>
                         </div>
                         <Button className="h-12 rounded-xl px-8 bg-slate-900 text-white shadow-lg hover:bg-primary hover:shadow-glow transition-all duration-300">
                            Donate Now
                         </Button>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* 3. RIGHT CARD (Vertical, Tilted Right) */}
            <div className="w-full max-w-[320px] transition-all duration-700 ease-out xl:transform xl:rotate-6 xl:translate-y-12 xl:-translate-x-8 hover:z-30 hover:scale-105 hover:rotate-0 origin-bottom-left opacity-90 hover:opacity-100">
               <CampaignCard 
                title="Green Mining"
                description="Solar-powered Bitcoin mining."
                raised={5000}
                goal={25000}
                image="/campaign-3.jpg"
              />
            </div>

          </div>
        </div>
      </section>

      <LogoStrip />
      <Footer />
    </main>
  )
}