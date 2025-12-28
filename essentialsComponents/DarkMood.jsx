'use client'

import * as React from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <FiSun className={`h-5 w-5 transition-all ${theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
      <FiMoon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
