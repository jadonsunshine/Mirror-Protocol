"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { AppConfig, UserSession, UserData } from "@stacks/connect"

interface StacksContextValue {
  userSession: UserSession
  userData: UserData | null
  authenticate: () => void
  signOut: () => void
  isSignedIn: boolean
}

const StacksContext = createContext<StacksContextValue | undefined>(undefined)

// Configure the app once
const appConfig = new AppConfig(["store_write", "publish_data"])
export const userSession = new UserSession({ appConfig })

export function StacksProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData())
      setIsSignedIn(true)
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData)
        setIsSignedIn(true)
      })
    }
  }, [])

  // THE FIX: Import 'showConnect' dynamically at runtime
  const authenticate = async () => {
    try {
      // This bypasses the bundler issue by loading the module only when clicked
      const { showConnect } = await import("@stacks/connect")
      
      showConnect({
        appDetails: {
          name: "FundX",
          icon: typeof window !== "undefined" ? window.location.origin + "/logo.png" : "",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload()
        },
        userSession,
      })
    } catch (error) {
      console.error("Failed to load wallet connect:", error)
    }
  }

  const signOut = () => {
    userSession.signUserOut()
    setUserData(null)
    setIsSignedIn(false)
    window.location.reload()
  }

  return (
    <StacksContext.Provider value={{ userSession, userData, authenticate, signOut, isSignedIn }}>
      {children}
    </StacksContext.Provider>
  )
}

export function useStacks() {
  const context = useContext(StacksContext)
  if (!context) {
    throw new Error("useStacks must be used within a StacksProvider")
  }
  return context
}