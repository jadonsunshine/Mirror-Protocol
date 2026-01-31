"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useStacks } from "@/components/fundx/StacksProvider"

export function ConnectWallet() {
  const { authenticate, signOut, isSignedIn, walletData } = useStacks()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button className="rounded-full bg-slate-900 text-white px-6 opacity-50">
        Loading...
      </Button>
    )
  }

  if (isSignedIn && walletData?.stxAddress) {
    const addr = walletData.stxAddress
    return (
      <Button 
        onClick={signOut}
        className="rounded-full bg-gradient-tush text-white shadow-glow hover:opacity-90 hover:scale-105 transition-all px-6 font-bold tracking-tight"
      >
        {addr.slice(0, 4)}...{addr.slice(-4)}
      </Button>
    )
  }

  return (
    <Button 
      onClick={authenticate}
      className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 px-6"
    >
      Connect Wallet
    </Button>
  )
}