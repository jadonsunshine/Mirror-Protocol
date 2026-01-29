import { Navbar } from "@/components/fundx/Navbar"
import { Hero } from "@/components/fundx/Hero"
import { CampaignCard } from "@/components/fundx/CampaignCard"
import { LogoStrip } from "@/components/fundx/LogoStrip"
import { Footer } from "@/components/fundx/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-100 font-sans">
      {/* 1. The Floating Navigation */}
      <Navbar />

      {/* 2. The Creative "Big Text" Hero */}
      <Hero />

      {/* 3. The "Bento" Grid Section (The Spice) */}
      <section id="campaigns" className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
        
        {/* THE SPICE: Technical Dot Background */}
        {/* This creates the faint 'blockchain architecture' grid effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Trending Campaigns
            </h2>
            <p className="text-lg text-slate-500">
              Support verified builders on Stacks. All donations are held in trustless Clarity smart contracts until goals are met.
            </p>
          </div>

          {/* THE BENTO GRID LAYOUT */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[auto]">
            
            {/* CARD 1: THE HERO (Spans 2 cols, Horizontal Layout) */}
            <div className="group relative lg:col-span-2 overflow-hidden rounded-[2rem] bg-white shadow-soft-xl border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row h-full min-h-[400px]">
              {/* Image Half */}
              <div className="relative h-64 md:h-full md:w-1/2 overflow-hidden bg-slate-100">
                 {/* Placeholder for real image */}
                 <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold bg-slate-50 group-hover:scale-105 transition-transform duration-700">
                    [Campaign Image]
                 </div>
                 {/* Floating Badge */}
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm border border-orange-100">
                    🔥 Trending #1
                 </div>
              </div>
              
              {/* Content Half */}
              <div className="flex flex-col justify-between p-8 md:w-1/2">
                <div>
                   <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">DeFi for Everyone</h3>
                   <p className="text-slate-500 leading-relaxed mb-6 text-base">
                     Building the first mobile-first yield aggregator on Stacks. Democratizing finance for the 99% with simple UX and trustless strategies.
                   </p>
                </div>
                
                <div className="space-y-5">
                  {/* Progress Bar with Tush Gradient */}
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                     <div className="bg-gradient-tush h-full w-[90%] rounded-full shadow-[0_0_15px_rgba(255,107,74,0.4)]" />
                  </div>
                  
                  <div className="flex justify-between items-end">
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

            {/* CARD 2: VERTICAL STANDARD (Using Component) */}
            <div className="h-full">
              <CampaignCard 
                title="Stacks School"
                description="An educational platform to teach Clarity smart contract development to 10,000 developers worldwide."
                raised={12000}
                goal={100000}
                image="/campaign-2.jpg"
              />
            </div>
            
            {/* CARD 3: VERTICAL STANDARD (Using Component) */}
            <div className="h-full">
               <CampaignCard 
                title="Green Bitcoin Mining"
                description="Solar-powered mining initiative in Texas. Carbon neutral Bitcoin production."
                raised={5000}
                goal={25000}
                image="/campaign-3.jpg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. The "Ghost" Logo Strip */}
      <LogoStrip />

      {/* 5. The Clean Footer */}
      <Footer />
    </main>
  )
}