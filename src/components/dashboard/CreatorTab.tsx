import { Clock, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabsContent } from "@/components/ui/tabs"

export function CreatorTab() {
  return (
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
  )
}