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

      

        {/* The Premium Segmented Tabs */}
        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="bg-slate-100/80 p-1.5 rounded-2xl inline-flex mb-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-slate-200/50">
            <TabsTrigger 
               value="campaigns" 
               className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-slate-500 px-8 py-3 text-sm font-bold transition-all duration-300"
            >
              My Campaigns
            </TabsTrigger>
            <TabsTrigger 
               value="contributions" 
               className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-slate-500 px-8 py-3 text-sm font-bold transition-all duration-300"
            >
              My Contributions
            </TabsTrigger>
          </TabsList>
          
          {/* 🚨 PLUGGED IN HERE */}
          <CreatorTab />
          
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