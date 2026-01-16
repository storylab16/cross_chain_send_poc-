"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import svgPaths from "@/imports/svg-rtos0dxgoh"

interface SendProgressScreenProps {
  amount: string
  toAddress: string
  onComplete: () => void
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

export function SendProgressScreen({ amount, toAddress, onComplete }: SendProgressScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    `${amount} USDC (ARB → OP) preparing....`,
    "Paymaster fee applied ...",
    "Bridge in progress (ensure enough funds)....",
    "Sending funds to Optimism. ....",
    `Success! ${amount} USDC received on Optimism.`,
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        } else {
          clearInterval(timer)
          setTimeout(() => onComplete(), 2000)
          return prev
        }
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [steps.length, onComplete])

  return (
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <div className="absolute contents left-[-1px] right-[-1px] top-[-1px]">
        <StatusBarComponent />
      </div>

      {/* Main content - dark navy background */}
      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[32px] py-[40px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
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
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
                  <p className="font-['SF_Pro:Bold',sans-serif] font-bold h-[24.241px] leading-[23.542px] relative shrink-0 text-white text-[20px] text-center w-full">
                    sending...
                  </p>

                  {/* Network Flow Visualization */}
                  <div className="content-center flex flex-wrap gap-[1px_11px] items-center relative">
                    {/* Arbitrum Icon */}
                    <motion.div
                      className="bg-[#2D374B] content-stretch flex items-center justify-center relative rounded-[120px] size-[24px]"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <img
                        src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=040"
                        alt="Arbitrum"
                        className="size-full"
                      />
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                      className="h-0 relative shrink-0 w-[32.191px]"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute inset-[-2.5px_-7.77%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.1914 5">
                          <path
                            d="M2.5 2.5H34.6914"
                            stroke="url(#paint0_linear_progress)"
                            strokeLinecap="round"
                            strokeWidth="5"
                          />
                          <defs>
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="paint0_linear_progress"
                              x1="2.5"
                              x2="34.6914"
                              y1="3"
                              y2="3"
                            >
                              <stop stopColor="#ffffff" />
                              <stop offset="1" stopColor="#3a3a3a" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </motion.div>

                    {/* Middle Circle */}
                    <motion.div
                      className="relative shrink-0 size-[22px]"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                      }}
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <circle cx="11" cy="11" fill="#2a3548" r="11" />
                      </svg>
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                      className="h-0 relative shrink-0 w-[32.191px]"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <div className="absolute inset-[-2.5px_-7.77%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.1914 5">
                          <path
                            d="M2.5 2.5H34.6914"
                            stroke="url(#paint0_linear_progress_2)"
                            strokeLinecap="round"
                            strokeWidth="5"
                          />
                          <defs>
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="paint0_linear_progress_2"
                              x1="2.5"
                              x2="34.6914"
                              y1="3"
                              y2="3"
                            >
                              <stop stopColor="#ffffff" />
                              <stop offset="1" stopColor="#3a3a3a" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </motion.div>

                    {/* Optimism Icon */}
                    <motion.div
                      className="bg-[#FF0420] content-stretch flex items-center justify-center relative rounded-[120px] size-[24px]"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <circle cx="8" cy="12" r="3" />
                        <circle cx="16" cy="12" r="3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="inline-grid leading-[0] place-items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start mt-[29.44px] relative w-full">
                  {steps.map((step, index) => {
                    const isCompleted = index < currentStep
                    const isCurrent = index === currentStep

                    return (
                      <motion.div
                        key={index}
                        className="content-stretch flex gap-[8px] items-center relative shrink-0"
                        animate={{
                          opacity: isCompleted ? 1 : isCurrent ? 0.9 : 0.5,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <motion.div
                          className="overflow-clip relative shrink-0 size-[24px]"
                          animate={{
                            scale: isCurrent ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: isCurrent ? Number.POSITIVE_INFINITY : 0,
                            ease: "easeInOut",
                          }}
                        >
                          {isCompleted ? (
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p320cb280} fill="#22c55e" />
                            </svg>
                          ) : (
                            <div className="absolute inset-[12.5%]">
                              <div className="absolute inset-[-5.56%]">
                                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                  <path
                                    d={svgPaths.p7c2b200}
                                    stroke={isCurrent ? "white" : "#4a5568"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </motion.div>
                        <p
                          className={`font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[12px] text-nowrap ${
                            isCompleted ? "text-white" : isCurrent ? "text-[#9ca3af]" : "text-[#4a5568]"
                          }`}
                        >
                          {step}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
