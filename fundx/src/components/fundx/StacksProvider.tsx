"use client"

import { ReactNode } from "react"
import { Connect } from "@stacks/connect-react"
import { UserSession, AppConfig } from "@stacks/connect"

// 1. Configure the session once
const appConfig = new AppConfig(["store_write", "publish_data"])
export const userSession = new UserSession({ appConfig })

export function StacksProvider({ children }: { children: ReactNode }) {
  // 2. Define auth options
  const authOptions = {
    appDetails: {
      name: "FundX",
      icon: typeof window !== "undefined" ? window.location.origin + "/logo.png" : "",
    },
    redirectTo: "/",
    userSession,
    onFinish: () => {
      window.location.reload()
    },
  }

  // 3. Wrap your app in the Connect provider
  return <Connect authOptions={authOptions}>{children}</Connect>
}