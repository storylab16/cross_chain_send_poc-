"use client"

import { motion } from "motion/react"
import svgPaths from "@/imports/svg-dqk4842qto"

interface SuccessScreenProps {
  amount: string
  onBackToSend: () => void
  onViewHistory?: () => void
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

export function SuccessScreen({ amount, onBackToSend, onViewHistory }: SuccessScreenProps) {
  const providerFee = Number.parseFloat(amount) * 0.1
  const gasFee = 0.2343434
  const fee = (providerFee + gasFee).toFixed(2)

  return (
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <div className="absolute contents left-[-1px] right-[-1px] top-[-1px]">
        <StatusBarComponent />
      </div>

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
                    className="font-['SF_Pro:Bold',sans-serif] font-bold h-[24.241px] leading-[23.542px] relative shrink-0 text-white text-[20px] text-center w-full"
                  >
                    Success
                  </motion.p>

                  {/* Check Icon with Animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="relative shrink-0 size-[76.513px]"
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 76.5129 76.5129"
                    >
                      <motion.path
                        d={svgPaths.p530df40}
                        stroke="#0E9E34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="6.37608"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path
                        d={svgPaths.p25f51000}
                        stroke="#0E9E34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="6.37608"
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
                className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[23.542px] relative shrink-0 text-[#9ca3af] text-[14px] text-center w-full"
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
              <div className="content-stretch flex gap-[3px] h-[52.55px] items-center relative shrink-0 w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onViewHistory || onBackToSend}
                  className="basis-0 bg-[#007FFF] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0 cursor-pointer"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                      <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white/90">
                        Check history
                      </p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
