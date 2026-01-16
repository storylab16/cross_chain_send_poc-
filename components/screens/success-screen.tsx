"use client"

import { motion } from "motion/react"
import { StatusBar } from "./status-bar"

interface SuccessScreenProps {
  amount: string
  onBackToSend: () => void
  onViewHistory?: () => void
}

export function SuccessScreen({ amount, onBackToSend, onViewHistory }: SuccessScreenProps) {
  const providerFee = Number.parseFloat(amount) * 0.1
  const gasFee = 0.2343434
  const fee = (providerFee + gasFee).toFixed(2)

  return (
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <StatusBar />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[32px] py-[40px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]"
      >
        <div className="basis-0 content-stretch flex flex-col gap-[21px] grow h-full items-start min-h-px min-w-px relative shrink-0">
          {/* Close Button */}
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
            <div className="relative shrink-0 size-[28px] rounded-full bg-[#1c2333] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3.5 3.5L10.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="basis-0 content-stretch flex flex-col gap-[60px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
            {/* Header */}
            <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-bold h-[24.241px] leading-[23.542px] relative shrink-0 text-white text-[20px] text-center w-full"
                  >
                    Success
                  </motion.p>

                  {/* Check Icon with Animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className="relative shrink-0 size-[76.513px]"
                  >
                    <svg className="block size-full" fill="none" viewBox="0 0 77 77">
                      <motion.circle
                        cx="38.5"
                        cy="38.5"
                        r="34"
                        stroke="#0E9E34"
                        strokeWidth="6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M25 38L35 48L52 28"
                        stroke="#0E9E34"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="font-medium leading-[23.542px] relative shrink-0 text-[#9ca3af] text-[14px] text-center w-full"
              >
                Sent ${amount} USDC to OP, with a ${fee} fee applied.
              </motion.p>
            </div>

            {/* Bottom Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full mt-auto"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewHistory || onBackToSend}
                className="w-full bg-[#007FFF] h-[52px] relative rounded-[100px] cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <p className="font-medium leading-[22px] text-[16px] text-white/90">Check history</p>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
