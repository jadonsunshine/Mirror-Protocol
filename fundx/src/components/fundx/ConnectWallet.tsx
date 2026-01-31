"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useStacks } from "@/components/fundx/StacksProvider"

export function ConnectWallet() {
  const { authenticate, signOut, isSignedIn, userData } = useStacks()
  const [mounted, setMounted] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    if (isSignedIn && userData) {
      // Use Testnet address for dev, Mainnet for prod
      setAddress(userData.profile.stxAddress.testnet) 
    }
  }, [isSignedIn, userData])

  if (!mounted) {
    return (
      <Button className="rounded-full bg-slate-900 text-white px-6 opacity-50">
        Loading...
      </Button>
    )
  }

  // 1. Logged In -> Show Address
  if (address) {
    return (
      <Button 
        onClick={signOut}
        className="rounded-full bg-gradient-tush text-white shadow-glow hover:opacity-90 hover:scale-105 transition-all px-6 font-bold tracking-tight"
      >
        {address.slice(0, 4)}...{address.slice(-4)}
      </Button>
    )
  }

  // 2. Logged Out -> Show Connect
  return (
    <Button 
      onClick={authenticate}
      className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 px-6"
    >
      Connect Wallet
    </Button>
  )
}