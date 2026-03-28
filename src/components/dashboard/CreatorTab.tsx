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