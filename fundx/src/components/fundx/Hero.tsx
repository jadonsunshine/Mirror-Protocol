"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isStacksMode, setIsStacksMode] = useState(false)
  const [displayStacks, setDisplayStacks] = useState(false) // what's visually shown during glitch
  const [glitching, setGlitching] = useState(false)
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 })
  const [glitchOpacity, setGlitchOpacity] = useState(1)
  const [glitchSkew, setGlitchSkew] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isGlitchingRef = useRef(false)

  const runGlitch = (targetIsStacks: boolean) => {
    if (isGlitchingRef.current) return
    isGlitchingRef.current = true
    setGlitching(true)

    const flips = 9 // number of rapid flips
    const baseDuration = 55 // ms per flip, gets slightly randomized
    let current = !targetIsStacks // start from opposite
    let count = 0

    const scheduleFlip = () => {
      if (count >= flips) {
        // Final settle — snap to target cleanly
        setDisplayStacks(targetIsStacks)
        setIsStacksMode(targetIsStacks)
        setGlitchOffset({ x: 0, y: 0 })
        setGlitchOpacity(1)
        setGlitchSkew(0)
        setGlitching(false)
        isGlitchingRef.current = false
        return
      }

      // Flip display
      current = !current
      setDisplayStacks(current)

      // Random jitter — heavier mid-glitch
      const intensity = count < flips - 2 ? 1 : 0.3 // calm down near the end
      setGlitchOffset({
        x: (Math.random() - 0.5) * 14 * intensity,
        y: (Math.random() - 0.5) * 8 * intensity,
      })
      setGlitchOpacity(count < flips - 2 ? 0.6 + Math.random() * 0.4 : 1)
      setGlitchSkew(count < flips - 2 ? (Math.random() - 0.5) * 12 * intensity : 0)

      count++
      // Slightly randomize each flip timing for chaotic feel
      const jitter = (Math.random() * 40 - 20)
      setTimeout(scheduleFlip, baseDuration + jitter)
    }

    scheduleFlip()
  }

  const toggle = () => {
    const next = !isStacksMode
    runGlitch(next)
  }

  const handleManualToggle = () => {
    if (isGlitchingRef.current) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    toggle()
    intervalRef.current = setInterval(() => {
      if (!isGlitchingRef.current) toggle()
    }, 4500)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isGlitchingRef.current) toggle()
    }, 4500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isStacksMode])

  const glitchStyle = {
    transform: glitching
      ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px) skewX(${glitchSkew}deg)`
      : "translate(0px, 0px) skewX(0deg)",
    opacity: glitchOpacity,
    transition: glitching ? "none" : "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
    willChange: "transform, opacity",
  }

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-gradient-to-r from-orange-50/50 to-white px-4 py-1.5 text-sm font-medium text-orange-600 mb-8 cursor-default backdrop-blur-sm"
          style={{ boxShadow: "0 1px 6px 0 rgba(0,0,0,0.04)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-[#FF6B4A] to-[#FF3D71]"></span>
          </span>
          <span className="tracking-wide">Live on Stacks Testnet</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
          Capital Formation
          <br />

          <span className="inline-flex items-center flex-wrap justify-center gap-x-4">
            on the

            {/* Icon box — glitches */}
            <span className="inline-flex align-middle">
              <div
                style={{
                  ...glitchStyle,
                  backgroundColor: displayStacks ? "#0f172a" : "#ffffff",
                  color: displayStacks ? "#ffffff" : "#0f172a",
                  boxShadow: displayStacks
                    ? "0 4px 24px 0 rgba(0,0,0,0.18)"
                    : "0 4px 24px 0 rgba(0,0,0,0.07)",
                  // smooth rotation only when NOT glitching
                  ...(glitching
                    ? { transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px) skewX(${glitchSkew}deg) rotate(${displayStacks ? "6deg" : "-6deg"})` }
                    : {
                        transform: `translate(0px, 0px) skewX(0deg) rotate(${isStacksMode ? "6deg" : "-6deg"})`,
                        transition: "transform 700ms cubic-bezier(0.4,0,0.2,1), background-color 600ms ease, box-shadow 600ms ease, opacity 300ms ease",
                      }
                  ),
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border border-slate-100 relative overflow-hidden"
              >
                {/* Bitcoin */}
                <span
                  style={{
                    position: "absolute",
                    opacity: !displayStacks ? 1 : 0,
                    transition: glitching ? "none" : "opacity 300ms ease",
                  }}
                >
                  <Image
                    src="/bitcoin-btc-logo.svg"
                    alt="Bitcoin"
                    width={50}
                    height={50}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </span>

                {/* Stacks */}
                <span
                  style={{
                    position: "absolute",
                    opacity: displayStacks ? 1 : 0,
                    transition: glitching ? "none" : "opacity 300ms ease",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 18 18" fill="none" className="w-10 h-10 md:w-12 md:h-12">
                    <path fill="currentColor" d="M6.04,5.834l-.003.007c-.02.045-.066.075-.128.075H1.446l-.012.002c-.272.038-.484.266-.484.556v.948c0,.3.235.558.551.558h14.998c.302,0,.551-.244.551-.558v-.948c0-.3-.235-.558-.551-.558h-4.407c-.056,0-.102-.025-.133-.084l-.003-.005c-.026-.046-.023-.105.008-.149l.004-.005,2.884-4.359c.095-.157.123-.368.024-.559-.092-.195-.293-.306-.49-.306h-1.121c-.172,0-.36.086-.464.255l-3.343,5.094c-.057.08-.144.127-.238.127h-.423c-.1,0-.183-.044-.236-.124L5.197.71v-.002c-.11-.159-.283-.251-.462-.251h-1.121c-.197,0-.386.101-.487.292-.101.182-.085.398.023.568l.002.003,2.88,4.344c.037.057.037.12.012.163l-.004.007Z" />
                    <path fill="currentColor" d="M9.613,12.45l3.197,4.838c.104.169.292.255.464.255h1.121c.203,0,.388-.115.486-.289.101-.18.089-.407-.024-.574h0s-2.87-4.343-2.87-4.343c-.035-.054-.039-.11-.01-.166.035-.06.086-.087.134-.087h4.39c.302,0,.551-.244.551-.558v-.948c0-.3-.235-.558-.551-.558H1.501c-.302,0-.551.244-.551.558v.948c0,.3.235.558.551.558h4.398c.069,0,.107.028.128.075l.004.009c.031.059.025.112-.005.154l-.004.005-2.884,4.359c-.095.158-.123.371-.022.563.097.185.283.302.488.302h1.121c.187,0,.353-.09.454-.244l3.363-5.09c.053-.081.136-.125.236-.125h.423c.095,0,.182.048.239.129l.171.228h0Z" />
                  </svg>
                </span>
              </div>
            </span>

            {/* Text label — also glitches */}
            <span
              style={{
                ...glitchStyle,
                display: "inline-block",
                minWidth: "240px",
                // offset the glitch slightly differently from icon for authenticity
                ...(glitching
                  ? { transform: `translate(${-glitchOffset.x * 0.6}px, ${glitchOffset.y * 0.4}px) skewX(${-glitchSkew * 0.5}deg)` }
                  : { transform: "translate(0px, 0px) skewX(0deg)", transition: "transform 400ms cubic-bezier(0.4,0,0.2,1), opacity 300ms ease" }
                ),
              }}
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                displayStacks ? "from-purple-600 to-indigo-600" : "from-[#FF6B4A] to-[#FF3D71]"
              }`}
            >
              {displayStacks ? "Stacks" : "Bitcoin"}
            </span>
          </span>

          <br />

          <span className="inline-flex items-center flex-wrap justify-center gap-x-4 gap-y-2">
            <span>Economy.</span>

            {/* Toggle — smooth, unaffected by glitch */}
            <span className="inline-flex align-middle ml-2">
              <button
                onClick={handleManualToggle}
                aria-label="Toggle between Bitcoin and Stacks"
                className="relative inline-flex items-center cursor-pointer focus:outline-none"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div
                  style={{
                    transition: "background 700ms ease",
                    background: isStacksMode
                      ? "#0f172a"
                      : "linear-gradient(to right, #FF6B4A, #FF3D71)",
                  }}
                  className="w-24 h-12 rounded-full p-1"
                >
                  <div
                    style={{
                      transition: "transform 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: isStacksMode ? "translateX(48px)" : "translateX(0px)",
                      boxShadow: "0 2px 10px 0 rgba(0,0,0,0.12)",
                    }}
                    className="w-10 h-10 bg-white rounded-full"
                  />
                </div>
              </button>
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Programmable escrow. Stable capital. Conditions enforced on-chain — funds release only when your terms are met.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/create">
            <Button
              size="lg"
              className="h-16 px-10 rounded-full text-lg"
              style={{
                transition: "opacity 250ms ease, transform 250ms ease",
                boxShadow: "0 4px 20px 0 rgba(255,61,113,0.22)",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.025)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(0.975)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1.025)")}
            >
              Start a Campaign
            </Button>
          </Link>

          <Link href="/explore">
            <Button
              variant="outline"
              size="lg"
              className="h-16 px-10 rounded-full text-lg border-2 border-slate-200 bg-white text-slate-700"
              style={{ transition: "border-color 250ms ease, background-color 250ms ease, transform 250ms ease" }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.025)"
                e.currentTarget.style.borderColor = "#cbd5e1"
                e.currentTarget.style.backgroundColor = "#f8fafc"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.borderColor = ""
                e.currentTarget.style.backgroundColor = ""
              }}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(0.975)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1.025)")}
            >
              Explore Campaigns
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}