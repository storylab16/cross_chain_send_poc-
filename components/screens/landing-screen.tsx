"use client"

import { motion } from "motion/react"
import { StatusBar } from "./status-bar"

interface LandingScreenProps {
  onStartSend: () => void
}

// USDC Icon
function USDCIcon() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="block size-full" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="2" fill="none" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="bold"
          fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif"
        >
          $
        </text>
      </svg>
    </div>
  )
}

export function LandingScreen({ onStartSend }: LandingScreenProps) {
  return (
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <StatusBar />

      {/* Main content container */}
      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[32px] py-[40px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
        <div className="basis-0 content-stretch flex flex-col grow h-full items-center min-h-px min-w-px relative shrink-0">
          {/* Network Visualization - Circular diagram with center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[280px] h-[280px] flex items-center justify-center mt-[60px]"
          >
            {/* Dashed circle */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
              <circle cx="140" cy="140" r="100" fill="none" stroke="#2a3548" strokeWidth="1" strokeDasharray="8 6" />
            </svg>

            {/* Center Shield Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute z-10 size-[72px] rounded-full bg-[#0d1421] border-2 border-white flex items-center justify-center"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 4L6 10v10c0 9.5 6 15.5 14 19 8-3.5 14-9.5 14-19V10L20 4z"
                  fill="#1a2538"
                  stroke="#4a90d9"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 18l4 4 8-8"
                  stroke="#4a90d9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* Red network icon - Top */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <div className="size-[48px] rounded-full bg-[#FF0420] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <circle cx="8" cy="12" r="2.5" />
                  <circle cx="16" cy="12" r="2.5" />
                </svg>
              </div>
            </motion.div>

            {/* Purple network icon - Left */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <div className="size-[48px] rounded-full bg-[#8B5CF6] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="3" />
                  <path d="M12 14v6" strokeWidth="2" stroke="white" />
                </svg>
              </div>
            </motion.div>

            {/* Blue network icon - Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <div className="size-[48px] rounded-full bg-[#0052FF] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="2" fill="#0052FF" />
                </svg>
              </div>
            </motion.div>

            {/* Light blue network icon - Bottom */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <div className="size-[48px] rounded-full bg-[#38BDF8] border-2 border-dashed border-[#38BDF8]/50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full mt-[40px]"
          >
            <h1 className="font-bold leading-[32px] relative shrink-0 text-white text-[24px] text-center">
              Cross-Chain Send PoC
            </h1>
            <p className="font-normal text-[14px] text-[#6b7a8f] text-center">Ver: Version 2025.18.01</p>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* START Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartSend}
              className="w-full bg-[#007FFF] h-[52px] relative rounded-[100px] cursor-pointer hover:bg-[#0070e0] transition-colors"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <p className="font-semibold tracking-wider leading-[22px] text-[16px] text-white">START</p>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
