export const dynamic = "force-dynamic"

import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { dark } from '@clerk/themes'
import { ThemeProvider } from "@/app/theme-provider"



function Providor({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider appearance={{
        theme: dark,
      }}>

        {children}

      </ClerkProvider>
    </ThemeProvider>
  )
}

export default Providor
