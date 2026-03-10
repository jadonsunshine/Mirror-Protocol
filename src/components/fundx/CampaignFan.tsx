"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Campaign, getHeroCampaign, getSideCampaigns } from "@/lib/data"

// ============================================================
// Types
// ============================================================

interface CampaignFanProps {
  deckSlotRef: React.RefObject<HTMLDivElement | null>
}

interface SideCardProps {
  campaign: Campaign
  progress: number
}

// ============================================================
// Component — SideCard
// ============================================================

function SideCard({ campaign, progress }: SideCardProps) {
  return (
    <>
      <div className="relative h-48 xl:h-1/2 bg-slate-100 overflow-hidden shrink-0">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1 bg-white">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
            {campaign.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2">{campaign.description}</p>
        </div>
        <div className="space-y-3 pt-4">
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-tush h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs font-semibold text-slate-400 block">RAISED</span>
              <span className="text-sm font-bold text-primary">
                ${campaign.raised.toLocaleString()}
              </span>
            </div>
            <Link href={`/campaigns/${campaign.id}`}>
              <Button
                size="sm"
                className="h-10 rounded-xl bg-slate-900 text-white shadow-md hover:bg-primary hover:shadow-glow transition-all px-6"
              >
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

// ============================================================
// Component — CenterCard
// ============================================================

function CenterCard() {
  const hero = getHeroCampaign()
  const getProgress = (raised: number, goal: number) =>
    Math.min((raised / goal) * 100, 100)

  return (
    <div className="w-full max-w-3xl xl:flex-1 relative z-20 shadow-2xl rounded-[2rem] border border-slate-100 bg-white hover:border-orange-200 transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
      <div className="absolute top-4 left-4 z-30 bg-gradient-tush text-white px-4 py-1 rounded-full text-xs font-bold shadow-soft-xl animate-pulse">
        🔥 Top Trending
      </div>
      <div className="relative h-64 md:h-full md:w-5/12 bg-slate-100 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex flex-col justify-between p-8 md:w-7/12 h-full bg-white">
        <div className="pt-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">
            {hero.title}
          </h3>
          <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
            {hero.description}
          </p>
        </div>
        <div className="space-y-6">
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-tush h-full rounded-full shadow-[0_0_15px_rgba(255,107,74,0.4)]"
              style={{ width: `${getProgress(hero.raised, hero.goal)}%` }}
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Raised</p>
              <p className="text-3xl font-bold text-primary">
                ${hero.raised.toLocaleString()}
              </p>
            </div>
            <Link href={`/campaigns/${hero.id}`}>
              <Button className="h-12 rounded-xl px-8 bg-slate-900 text-white shadow-lg hover:bg-primary hover:shadow-glow transition-all duration-300">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// Component — CampaignFan
// ============================================================

export function CampaignFan({ deckSlotRef }: CampaignFanProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [deckOffset, setDeckOffset] = useState(0)

  const sideCampaigns = getSideCampaigns()
  const leftCard = sideCampaigns[0]
  const rightCard = sideCampaigns[1]
  const getProgress = (raised: number, goal: number) =>
    Math.min((raised / goal) * 100, 100)

  // Measure the distance from the Campaign section to the HeroDeckSlot
  useEffect(() => {
    function measure() {
      if (!deckSlotRef.current || !containerRef.current) return
      const slotRect = deckSlotRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      // How far above the container the slot is (negative = above)
      const distance = slotRect.top - containerRect.top
      setDeckOffset(distance)
    }

    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [deckSlotRef])

  // Scroll progress tied to the campaign section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  // ── Phase 1: deck travels from hero slot down to campaign center (0 → 0.45)
  const deckY = useTransform(scrollYProgress, [0, 0.45], [deckOffset, 0])
  const deckScale = useTransform(scrollYProgress, [0, 0.45], [0.25, 1])

  // ── Phase 2: pause (0.45 → 0.55) — nothing changes

  // ── Phase 3: fan out (0.55 → 1)
  const leftX = useTransform(scrollYProgress, [0.55, 1], [0, -490])
  const leftScale = useTransform(scrollYProgress, [0.55, 1], [1, 0.92])

  const rightX = useTransform(scrollYProgress, [0.55, 1], [0, 190])
  const rightScale = useTransform(scrollYProgress, [0.55, 1], [1, 0.92])

  // ── Heading fades in during phase 3
  const headingOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])
  const headingY = useTransform(scrollYProgress, [0.6, 1], [40, 0])

  return (
    <div ref={containerRef} className="relative">

      {/* Heading — fades in during phase 3 */}
      <motion.div
        style={{ opacity: headingOpacity, y: headingY }}
        className="mb-20 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Trending Campaigns
        </h2>
        <p className="text-lg text-slate-500">
          Support verified builders on Stacks. Trustless & Transparent.
        </p>
      </motion.div>

      {/* Deck wrapper — moves as one unit in phases 1 and 2 */}
      <motion.div
        style={{ y: deckY, scale: deckScale }}
        className="flex flex-col xl:flex-row justify-center items-center xl:items-stretch gap-6 h-auto xl:h-[420px]"
      >

        {/* Left card — fans out in phase 3 */}
        <motion.div
          style={{ x: leftX, scale: leftScale, rotate: -6 }}
          className="w-full xl:w-[300px] bg-white rounded-[2rem] shadow-soft-md border border-slate-100 overflow-hidden group hover:border-orange-200 transition-all duration-500 ease-out flex flex-col hover:z-30"
        >
          <SideCard
            campaign={leftCard}
            progress={getProgress(leftCard.raised, leftCard.goal)}
          />
        </motion.div>

        {/* Center card — stays put */}
        <CenterCard />

        {/* Right card — fans out in phase 3 */}
        <motion.div
          style={{ x: rightX, scale: rightScale, rotate: 6 }}
          className="w-full xl:w-[300px] bg-white rounded-[2rem] shadow-soft-md border border-slate-100 overflow-hidden group hover:border-orange-200 transition-all duration-500 ease-out flex flex-col hover:z-30"
        >
          <SideCard
            campaign={rightCard}
            progress={getProgress(rightCard.raised, rightCard.goal)}
          />
        </motion.div>

      </motion.div>
    </div>
  )
}