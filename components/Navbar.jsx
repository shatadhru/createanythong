"use client"

import React, { useState, useEffect } from 'react'
import Logo from '@/essentialsComponents/Logo'
import Link from "next/link"

// Shadcn UI
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Button } from "@/components/ui/button"

// Clerk
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

// Icons
import { IoSearch, IoClose } from "react-icons/io5"
import { LuMenu } from "react-icons/lu"

// Animations
import { motion, AnimatePresence } from 'framer-motion'

// Custom
import { ModeToggle } from '@/essentialsComponents/DarkMood'
import { NAVBAR_CONFIG } from '@/config/site'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkColor = scrolled
    ? "text-white hover:text-[#ff9100]"
    : "text-gray-900 dark:text-white hover:text-[#ff9100]"

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins
        ${scrolled
          ? 'bg-black/95 dark:bg-black backdrop-blur-md border-b border-gray-800/50'
          : 'bg-white dark:bg-black'
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Nav */}
          <NavigationMenu>
            <NavigationMenuList>
              {NAVBAR_CONFIG.pc.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className={`px-3 py-2 transition-colors rounded-md cursor-pointer ${linkColor}`}
                  >
        <Link href={item.path}>{item.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search */}
          <div className="max-w-6xl">
            <InputGroup
              className={`border rounded-lg ${
                scrolled
                  ? "bg-white/10 border-gray-700"
                  : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              }`}
            >
              <InputGroupInput
                placeholder="Search..."
                className={`bg-transparent border-0 focus:ring-0 ${
                  scrolled ? "text-white placeholder-gray-400" : "text-gray-900 dark:text-white"
                }`}
              />
              <InputGroupAddon>
                <IoSearch className={scrolled ? "text-gray-400" : "text-gray-600 dark:text-gray-400"} />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            <SignedOut>
              <SignInButton>
                <Button size="sm" className="bg-[#ff9100] text-white">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button size="sm" variant="outline">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              {open ? <IoClose size={26} /> : <LuMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
      {/* Mobile Menu */}
<AnimatePresence>
  {open && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mobile-menu fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 z-50 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6 space-y-6">
          {NAVBAR_CONFIG.mobile.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block text-xl font-semibold text-gray-900 dark:text-white hover:text-[#ff9100] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth + Actions */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <SignedOut>
            <SignInButton>
              <Button
                className="w-full bg-[#ff9100] text-white"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <div className="flex flex-col items-center gap-4">
              <UserButton />
            </div>
          </SignedIn>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Theme
            </span>
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

      </div>
    </motion.header>
  )
}

export default Navbar
