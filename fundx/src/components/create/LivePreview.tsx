import { CampaignCard } from "@/components/fundx/CampaignCard"
import { Globe, Twitter, Github } from "lucide-react"

export function LivePreview({ formData }: { formData: any }) {
  return (
    <div className="sticky top-32 space-y-6">
        <div className="text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Live Preview</p>
        </div>
        
        <div className="transform scale-110 origin-top">
            <CampaignCard 
                id="preview"
                title={formData.title || "Untitled Campaign"}
                description={formData.tagline || "Your campaign description will appear here..."}
                raised={0}
                goal={Number(formData.goal) || 10000}
                image={formData.image}
                // We will update CampaignCard later to handle "USDCx" label visually
            />
        </div>

        {/* Metadata Box */}
        <div className="bg-white/50 backdrop-blur border border-slate-200 p-4 rounded-xl text-sm space-y-2 max-w-[320px] mx-auto mt-4">
            <p className="font-bold text-slate-900">Metadata Preview:</p>
            <div className="flex items-center gap-2 text-slate-500">
                <span className="w-20 text-xs uppercase font-semibold">Creator:</span>
                <span className="text-slate-900">{formData.creatorName || "..."}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
                <span className="w-20 text-xs uppercase font-semibold">Stage:</span>
                <span className="text-slate-900">{formData.projectStage}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
                <span className="w-20 text-xs uppercase font-semibold">Asset:</span>
                <span className="text-blue-600 font-bold bg-blue-50 px-2 rounded-md">USDCx</span>
            </div>
        </div>
    </div>
  )
}