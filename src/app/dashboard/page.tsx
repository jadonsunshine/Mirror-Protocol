"use client"
import { LayoutDashboard, Wallet, Clock, CheckCircle2, XCircle, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/fundx/Navbar"
import { Footer } from "@/components/fundx/Footer"
import { useStacks } from "@/components/fundx/StacksProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CreatorTab } from "@/components/dashboard/CreatorTab"


export default function DashboardPage() {
  const { isSignedIn, authenticate } = useStacks()


  if (!isSignedIn) {
    return (
      <main className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 pt-48 pb-20 text-center">
           <Wallet className="w-16 h-16 text-slate-300 mx-auto mb-6" />
           <h1 className="text-3xl font-bold text-slate-900 mb-4">Connect your wallet</h1>
           <p className="text-slate-500 mb-8">You need to connect your Stacks wallet to view your dashboard.</p>
           <Button onClick={authenticate} size="lg" className="h-12 px-8 rounded-xl bg-slate-900 text-white hover:scale-105 transition-transform">
             Connect Wallet
           </Button>
        </div>
        <Footer />
      </main>
    )
  }


  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
           <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
             <LayoutDashboard className="w-6 h-6 text-orange-500" />
           </div>
           <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Capital Hub</h1>
        </div>

        {/* The Tabs (Creator vs Backer) */}
        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="bg-transparent border-b border-slate-200 rounded-none w-full justify-start h-auto p-0 mb-8 overflow-x-auto no-scrollbar">
            <TabsTrigger value="campaigns" className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-600 px-6 py-3 text-base font-bold">
              My Campaigns
            </TabsTrigger>
            <TabsTrigger value="contributions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-600 px-6 py-3 text-base font-bold">
              My Contributions
            </TabsTrigger>
          </TabsList>
          
  {/* Creator View: My Campaigns */}
          <TabsContent value="campaigns" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             
             {/* 1. SUCCESSFUL CAMPAIGN (Ready to Withdraw) */}
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-green-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500" />
                <div className="flex-1 space-y-2 w-full">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-md bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">Successful</span>
                      <span className="text-slate-400 text-sm font-medium">Flexible Model</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">DeFi Yield Aggregator</h3>
                   <div className="flex items-center gap-4 text-sm mt-2">
                      <div className="font-semibold text-slate-700">Raised: <span className="text-green-600 font-bold">$55,000 USDCx</span></div>
                      <div className="text-slate-400">Goal: $50,000</div>
                   </div>
                </div>
                <div className="w-full md:w-auto shrink-0">
                   <Button className="w-full md:w-auto h-12 px-8 rounded-xl bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 font-bold text-base transition-all hover:scale-105">
                      Withdraw Funds
                   </Button>
                </div>
             </div>

             {/* 2. ACTIVE CAMPAIGN (Still running) */}
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-2 w-full">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                         <Clock className="w-3 h-3" /> Active
                      </span>
                      <span className="text-slate-400 text-sm font-medium">All-or-Nothing</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">Stacks Dev Bootcamp</h3>
                   <div className="flex items-center gap-4 text-sm mt-2">
                      <div className="font-semibold text-slate-700">Raised: <span className="text-blue-600 font-bold">4,500 STX</span></div>
                      <div className="text-slate-400">Goal: 10,000 STX</div>
                   </div>
                   {/* Progress Bar */}
                   <div className="w-full max-w-md bg-slate-100 rounded-full h-2 mt-4 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "45%" }} />
                   </div>
                </div>
                <div className="w-full md:w-auto shrink-0 text-left md:text-right">
                   <div className="text-2xl font-black text-slate-900">12 Days</div>
                   <div className="text-sm font-medium text-slate-400">Remaining</div>
                </div>
             </div>

             {/* 3. FAILED CAMPAIGN (Missed All-or-Nothing Goal) */}
             <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-inner flex flex-col md:flex-row items-center justify-between gap-6 opacity-75 grayscale hover:grayscale-0 transition-all">
                <div className="flex-1 space-y-2 w-full">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                         <XCircle className="w-3 h-3" /> Failed
                      </span>
                      <span className="text-slate-400 text-sm font-medium">All-or-Nothing</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-600 line-through decoration-slate-300">NFT Marketplace</h3>
                   <div className="flex items-center gap-4 text-sm mt-2">
                      <div className="font-semibold text-slate-500">Raised: 1,200 STX</div>
                      <div className="text-slate-400">Goal: 50,000 STX</div>
                   </div>
                </div>
                <div className="w-full md:w-auto shrink-0">
                   <Button variant="outline" disabled className="w-full md:w-auto h-12 px-8 rounded-xl border-slate-200 text-slate-400 font-bold">
                      Goal Not Met
                   </Button>
                </div>
             </div>

          </TabsContent>
          
          {/* Backer View Placeholder */}
          <TabsContent value="contributions">
             <div className="bg-white p-12 text-center rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-lg">We will build the Backer view here in Step 3!</p>
             </div>
          </TabsContent>
        </Tabs>

      </div>
      
      <Footer />
    </main>
  )
}