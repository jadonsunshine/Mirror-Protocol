import { Navbar } from "@/components/fundx/Navbar"
import { Hero } from "@/components/fundx/Hero"
import { CampaignCard } from "@/components/fundx/CampaignCard"
import { LogoStrip } from "@/components/fundx/LogoStrip"
import { Footer } from "@/components/fundx/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-100 font-sans">
      <Navbar />
      <Hero />

      {/* 3. The "Fan" Layout Section */}
      <section id="campaigns" className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Trending Campaigns
            </h2>
            <p className="text-lg text-slate-500">
              Support verified builders on Stacks. All donations are held in trustless Clarity smart contracts.
            </p>
          </div>

          {/* THE FAN LAYOUT */}
       
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8 pt-10 pb-10">
            
            {/* 1. LEFT CARD (Tilted Left) */}
            <div className="w-full max-w-md transition-all duration-500 ease-out md:transform md:-rotate-6 md:translate-y-12 md:hover:rotate-0 md:hover:translate-y-0 md:hover:z-30 hover:scale-105 origin-bottom-right">
              <CampaignCard 
                title="Stacks School"
                description="Teaching Clarity to 10,000 developers."
                raised={12000}
                goal={100000}
                image="/campaign-2.jpg"
              />
            </div>

            {/* 2. MIDDLE CARD (The Star: Straight, Larger, On Top) */}
            <div className="w-full max-w-md relative z-20 md:transform md:scale-110 shadow-2xl rounded-[2rem]">
               {/* We add a 'Trending' badge specifically to this wrapper */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-gradient-tush text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                 🔥 Top Trending
               </div>
               <CampaignCard 
                title="DeFi for Everyone"
                description="The first mobile-first yield aggregator on Stacks. Democratizing finance."
                raised={45000}
                goal={50000}
                image="/campaign-1.jpg"
              />
            </div>
            
            {/* 3. RIGHT CARD (Tilted Right) */}
            <div className="w-full max-w-md transition-all duration-500 ease-out md:transform md:rotate-6 md:translate-y-12 md:hover:rotate-0 md:hover:translate-y-0 md:hover:z-30 hover:scale-105 origin-bottom-left">
               <CampaignCard 
                title="Green Mining"
                description="Solar-powered Bitcoin production in Texas."
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