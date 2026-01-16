"use client"

import { motion } from "motion/react"
import svgPaths from "@/imports/svg-dqk4842qto"

interface LandingScreenProps {
  onStartSend: () => void
}

function StatusBarComponent() {
  return (
    <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] right-0 top-0">
      <div className="basis-0 content-stretch flex grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0">
        <p
          className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-white text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          9:41
        </p>
      </div>
      <div className="basis-0 content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0">
        <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
            <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" />
          </svg>
        </div>
        <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
            <path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" />
          </svg>
        </div>
        <div className="h-[13px] relative shrink-0 w-[27.328px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
            <g>
              <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
              <path d={svgPaths.p3bbd9700} fill="white" opacity="0.4" />
              <rect fill="white" height="9" rx="2.5" width="21" x="2" y="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

// USDC Icon matching mockup
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
          fontFamily="SF Pro, sans-serif"
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
      <div className="absolute contents left-[-1px] right-[-1px] top-[-1px]">
        <StatusBarComponent />
      </div>

      {/* Main content container - dark navy background matching mockup */}
      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[32px] py-[40px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
        <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
          >
            <h1 className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-white text-[22px] text-center">
              Send
            </h1>
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal text-[14px] text-[#6b7a8f] text-center">
              Cross-chain Send PoC
            </p>
            <USDCIcon />
          </motion.div>

          {/* Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[280px] flex items-center justify-center"
          >
            <svg width="100%" height="100%" viewBox="0 0 320 280" className="absolute inset-0">
              {/* Connecting Lines from Arbitrum to other chains */}
              <motion.line
                x1="80"
                y1="140"
                x2="240"
                y2="80"
                stroke="#007FFF"
                strokeWidth="2"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.line
                x1="80"
                y1="140"
                x2="240"
                y2="140"
                stroke="#007FFF"
                strokeWidth="2"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.line
                x1="80"
                y1="140"
                x2="240"
                y2="200"
                stroke="#007FFF"
                strokeWidth="2"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />

              {/* Arrow indicators */}
              <motion.polygon
                points="235,78 240,80 235,82"
                fill="#007FFF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.5 }}
              />
              <motion.polygon
                points="235,138 240,140 235,142"
                fill="#007FFF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.6 }}
              />
              <motion.polygon
                points="235,198 240,200 235,202"
                fill="#007FFF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.7 }}
              />
            </svg>

            {/* Arbitrum - Left (Source) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-1/2 left-[40px] -translate-y-1/2 flex flex-col items-center gap-1"
            >
              <div className="bg-[#1c2333] border-2 border-[#007FFF]/40 p-2 rounded-full size-[72px] flex items-center justify-center">
                <div className="bg-[#2D374B] rounded-full p-2 size-[56px] flex items-center justify-center">
                  <img
                    src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=040"
                    alt="Arbitrum"
                    className="size-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Optimism - Top Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-[50px] right-[40px] flex flex-col items-center gap-1"
            >
              <div className="bg-[#1c2333] border-2 border-[#007FFF]/30 p-2 rounded-full size-[56px] flex items-center justify-center">
                <div className="bg-[#FF0420] rounded-full p-2 size-[40px] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <circle cx="8" cy="12" r="3" />
                    <circle cx="16" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Polygon - Middle Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 right-[40px] flex flex-col items-center gap-1"
            >
              <div className="bg-[#1c2333] border-2 border-[#007FFF]/30 p-2 rounded-full size-[56px] flex items-center justify-center">
                <div className="bg-[#8247E5] rounded-full p-2 size-[40px] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 4L16 7V13L12 16L8 13V7L12 4Z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* BSC - Bottom Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-[50px] right-[40px] flex flex-col items-center gap-1"
            >
              <div className="bg-[#1c2333] border-2 border-[#007FFF]/30 p-2 rounded-full size-[56px] flex items-center justify-center">
                <div className="bg-[#F3BA2F] rounded-full p-2 size-[40px] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <rect x="10" y="10" width="4" height="4" />
                    <rect x="4" y="10" width="4" height="4" />
                    <rect x="16" y="10" width="4" height="4" />
                    <rect x="10" y="4" width="4" height="4" />
                    <rect x="10" y="16" width="4" height="4" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Send Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full mt-auto"
          >
            <div className="content-stretch flex gap-[3px] h-[52.55px] items-center relative shrink-0 w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartSend}
                className="basis-0 bg-[#007FFF] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white/90">
                      Send
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
