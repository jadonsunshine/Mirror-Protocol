"use client"

import { useState } from "react"
import { Navbar } from "@/components/fundx/Navbar"
import { Footer } from "@/components/fundx/Footer"
import { CampaignCard } from "@/components/fundx/CampaignCard" // Reusing your card!
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, Rocket, Wallet, CheckCircle2 } from "lucide-react"
import { useStacks } from "@/components/fundx/StacksProvider"
import { toast } from "sonner"

export default function CreateCampaign() {
  const { isSignedIn, authenticate } = useStacks()
  const [step, setStep] = useState(1)
  
  // FORM STATE
  const [formData, setFormData] = useState({
    title: "",
    tagline: "Your short tagline appears here...",
    category: "DeFi",
    description: "",
    goal: "10000",
    duration: "30",
    image: "/campaign-1.jpg" // Default placeholder
  })

  // HANDLERS
  const handleNext = () => {
    if (step === 1 && !formData.title) return toast.error("Please enter a title")
    setStep(step + 1)
  }
  
  const handleBack = () => setStep(step - 1)

  const handleSubmit = () => {
    if (!isSignedIn) {
      toast.error("Connect Wallet", { description: "You need a Stacks wallet to deploy a campaign." })
      authenticate()
      return
    }
    // CONTRACT CALL WOULD GO HERE
    toast.success("Campaign Created!", { 
      description: "Your smart contract is being deployed to Stacks Testnet." 
    })
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-orange-100">
      <Navbar />

      <div className="container mx-auto max-w-7xl px-4 pt-32 pb-20">
        
        {/* PAGE HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Launch your Vision</h1>
          <p className="text-slate-500 text-lg">Create a trustless crowdfunding campaign on Bitcoin.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: THE WIZARD */}
          <div className="space-y-8">
            
            {/* Progress Steps */}
            <div className="flex gap-4 mb-8">
               {[1, 2, 3].map((num) => (
                 <div key={num} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${step >= num ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-300 border-slate-200"}`}>
                       {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
                    </div>
                    <div className={`h-1 w-12 rounded-full ${step > num ? "bg-slate-900" : "bg-slate-100"}`} />
                 </div>
               ))}
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 min-h-[500px] relative">
              
              {/* STEP 1: BASICS */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                   <h2 className="text-2xl font-bold text-slate-900">Let's start with the basics</h2>
                   
                   <div className="space-y-4">
                      <div className="space-y-2">
                         <Label>Campaign Title</Label>
                         <Input 
                            placeholder="e.g. Stacks DeFi Academy" 
                            className="h-14 text-lg rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                         />
                      </div>
                      <div className="space-y-2">
                         <Label>Category</Label>
                         <Select onValueChange={(val) => setFormData({...formData, category: val})} defaultValue={formData.category}>
                            <SelectTrigger className="h-14 rounded-xl bg-slate-50 border-slate-200">
                               <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                               <SelectItem value="DeFi">DeFi & Finance</SelectItem>
                               <SelectItem value="Mining">Mining & Infra</SelectItem>
                               <SelectItem value="Education">Education</SelectItem>
                               <SelectItem value="Gaming">Gaming</SelectItem>
                            </SelectContent>
                         </Select>
                      </div>
                      <div className="space-y-2">
                         <Label>Short Tagline</Label>
                         <Textarea 
                            placeholder="Explain it in one sentence..." 
                            className="resize-none rounded-xl bg-slate-50 border-slate-200 focus:bg-white h-24"
                            value={formData.tagline}
                            onChange={(e) => setFormData({...formData, tagline: e.target.value})}
                         />
                      </div>
                   </div>
                </div>
              )}

              {/* STEP 2: DETAILS */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                   <h2 className="text-2xl font-bold text-slate-900">Tell your story</h2>
                   
                   <div className="space-y-4">
                      <div className="space-y-2">
                         <Label>Full Description</Label>
                         <Textarea 
                            placeholder="What problem are you solving? Why should people fund you?" 
                            className="min-h-[250px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white p-4"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                         />
                      </div>
                   </div>
                </div>
              )}

              {/* STEP 3: FUNDING */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                   <h2 className="text-2xl font-bold text-slate-900">Funding Goals</h2>
                   
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <Label>Target Amount (STX)</Label>
                         <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">STX</span>
                            <Input 
                               type="number" 
                               className="pl-14 h-14 rounded-xl bg-slate-50 text-lg font-bold"
                               value={formData.goal}
                               onChange={(e) => setFormData({...formData, goal: e.target.value})}
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <Label>Duration (Days)</Label>
                         <Input 
                            type="number" 
                            className="h-14 rounded-xl bg-slate-50 text-lg font-bold"
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                         />
                      </div>
                   </div>

                   <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 flex gap-4 items-start mt-6">
                      <div className="p-2 bg-white rounded-full shadow-sm shrink-0">
                         <Rocket className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                         <h4 className="font-bold text-orange-900">Ready to Launch?</h4>
                         <p className="text-sm text-orange-700/80 mt-1">
                            This will deploy a smart contract on Stacks. Standard network fees apply (~0.5 STX).
                         </p>
                      </div>
                   </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS (Absolute Bottom) */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                {step > 1 ? (
                   <Button variant="ghost" onClick={handleBack} className="h-12 px-6 rounded-xl text-slate-500 hover:text-slate-900">
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                   </Button>
                ) : <div />} {/* Spacer */}

                {step < 3 ? (
                   <Button onClick={handleNext} className="h-12 px-8 rounded-xl bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all">
                      Next Step <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                ) : (
                   <Button onClick={handleSubmit} className="h-12 px-8 rounded-xl bg-gradient-tush text-white shadow-glow hover:scale-105 transition-all font-bold">
                      {isSignedIn ? "Deploy Campaign" : "Connect & Deploy"}
                   </Button>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: LIVE PREVIEW (Sticky) */}
          <div className="hidden lg:block relative">
             <div className="sticky top-32 space-y-6">
                <div className="text-center">
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Live Preview</p>
                </div>
                
                {/* THE CARD PREVIEW */}
                <div className="transform scale-110 origin-top">
                   <CampaignCard 
                      id="preview"
                      title={formData.title || "Untitled Campaign"}
                      description={formData.tagline || "Your campaign description will appear here..."}
                      raised={0}
                      goal={Number(formData.goal) || 10000}
                      image={formData.image}
                   />
                </div>

                <div className="text-center">
                   <p className="text-xs text-slate-300 mt-8">
                      This is how your campaign will appear on the Explore page.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
}