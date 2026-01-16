"use client"

import { useState } from "react"
import svgPaths from "@/imports/svg-gbevjh1ze5"

interface SendFormScreenProps {
  onConfirm: (data: { amount: string; toAddress: string; selectedNetworks: string[] }) => void
}

function Time() {
  return (
    <div
      className="basis-0 content-stretch flex grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Time"
    >
      <p
        className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-white text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        9:41
      </p>
    </div>
  )
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="white" id="Cap" opacity="0.4" />
          <rect fill="white" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  )
}

function Levels() {
  return (
    <div
      className="basis-0 content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0"
      data-name="Levels"
    >
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  )
}

function StatusBar() {
  return (
    <div
      className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] right-0 top-0"
      data-name="Status Bar"
    >
      <Time />
      <Levels />
    </div>
  )
}

// USDC Icon Component
function USDCIcon() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="block size-full" viewBox="0 0 64 64" fill="none">
        {/* Outer circle */}
        <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" fill="none" />
        {/* Inner circle with $ */}
        <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="2" fill="none" />
        {/* Dollar sign */}
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

// Arbitrum icon
function ArbitrumIcon() {
  return (
    <div className="relative shrink-0 size-[20px] rounded-full overflow-hidden bg-[#2D374B] flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#28A0F0" />
        <path d="M12 22l10-5v-4l-10 5-10-5v4l10 5z" fill="#96BEDC" />
      </svg>
    </div>
  )
}

export function SendFormScreen({ onConfirm }: SendFormScreenProps) {
  const [amount, setAmount] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [showNetworkSelection, setShowNetworkSelection] = useState(false)
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])
  const [isAmountFocused, setIsAmountFocused] = useState(false)

  const initialBalance = 200
  const numericAmount = Number.parseFloat(amount) || 0
  const remainingBalance = initialBalance - numericAmount

  const toggleNetwork = (network: string) => {
    setSelectedNetworks((prev) => (prev.includes(network) ? prev.filter((n) => n !== network) : [...prev, network]))
  }

  const handleConfirm = () => {
    if (amount && toAddress && selectedNetworks.length > 0) {
      onConfirm({ amount, toAddress, selectedNetworks })
    }
  }

  return (
    <div
      className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full"
      data-name="screen"
    >
      <div className="absolute contents left-[-1px] right-[-1px] top-[-1px]" data-name="status_bar">
        <StatusBar />
      </div>

      {/* Main content container - dark navy background */}
      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[24px] py-[32px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0">
          {/* Close button */}
          <div
            className="content-stretch flex items-center justify-end relative shrink-0 w-full"
            data-name="controller"
          >
            <button className="relative shrink-0 size-[28px] rounded-full bg-[#1c2333] flex items-center justify-center hover:bg-[#252d40] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3.5 3.5L10.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="header">
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
                  <p className="font-['SF_Pro:Bold',sans-serif] font-bold text-[20px] text-white text-center">Send</p>
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal text-[14px] text-[#6b7a8f] text-center">
                    Cross-chain Send PoC
                  </p>
                </div>
                <USDCIcon />
              </div>
            </div>

            {/* Input Cards */}
            <div
              className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center min-h-px min-w-px relative shrink-0 w-full"
              data-name="input"
            >
              {/* Amount Input Card */}
              <div className="bg-[#131a29] content-stretch flex flex-col items-end relative rounded-[20px] shrink-0 w-full border border-[#1e2a3d]">
                {/* Amount Input */}
                <div className="relative rounded-t-[20px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[10px] py-[40px] relative w-full">
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9.]/g, "")
                          setAmount(val)
                        }}
                        placeholder="0.00"
                        className="font-['SF_Pro:Semibold',sans-serif] font-semibold h-full leading-none relative shrink-0 text-[56px] text-white text-center w-full bg-transparent outline-none border-none placeholder:text-[#2a3548]"
                        style={{ caretColor: "#007FFF" }}
                        onFocus={() => setIsAmountFocused(true)}
                        onBlur={() => setIsAmountFocused(false)}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#1e2a3d]" />

                {/* Network Balance Row */}
                <div className="relative rounded-b-[20px] shrink-0 w-full" data-name="list">
                  <div className="flex flex-col items-end justify-center size-full">
                    <div className="content-stretch flex flex-col items-end justify-center px-[20px] py-[14px] relative size-full">
                      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <ArbitrumIcon />
                          <p className="font-['SF_Pro:Medium',sans-serif] font-medium text-[14px] text-[#9ca3af]">
                            Arbitrum
                          </p>
                        </div>
                        <p className="font-['SF_Pro:Medium',sans-serif] font-medium text-[14px] text-[#9ca3af]">
                          Balance: {remainingBalance.toFixed(2)} USDC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* To Address Input */}
              <div className="bg-[#131a29] h-[94px] relative rounded-[20px] shrink-0 w-full border border-[#1e2a3d]">
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full gap-[8px]">
                      <p className="font-['SF_Pro:Semibold',sans-serif] font-semibold text-[14px] text-white">To</p>
                      <div className="flex gap-2 items-center w-full">
                        {selectedNetworks.length > 0 && (
                          <>
                            {selectedNetworks.map((network) => (
                              <div
                                key={network}
                                className="min-w-[24px] w-6 min-h-[24px] h-6 rounded-full bg-[#2a3548] flex items-center justify-center text-white text-xs font-medium"
                              >
                                {network.charAt(0)}
                              </div>
                            ))}
                          </>
                        )}
                        <input
                          type="text"
                          value={toAddress}
                          onChange={(e) => {
                            if (e.target.value) {
                              setToAddress("bob.eth@op")
                              if (!selectedNetworks.includes("Optimism")) {
                                setSelectedNetworks((prev) => [...prev, "Optimism"])
                              }
                              setShowNetworkSelection(false)
                            } else {
                              setToAddress("")
                            }
                          }}
                          onFocus={() => setShowNetworkSelection(true)}
                          placeholder="Wallet address or ENS name"
                          className="font-['SF_Pro:Regular',sans-serif] font-normal text-[14px] text-white bg-transparent outline-none border-none flex-1 placeholder:text-[#4a5568]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Selection Modal */}
            {showNetworkSelection && (
              <div
                className="absolute top-[420px] left-0 right-0 px-[24px] z-10"
                onClick={() => setShowNetworkSelection(false)}
              >
                <div
                  className="bg-[#131a29] p-4 rounded-[20px] border border-[#1e2a3d]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-semibold text-[14px] mb-3 text-white">
                    Select Networks
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      disabled
                      className="p-3 rounded-[12px] border border-[#1e2a3d] opacity-50 cursor-not-allowed bg-[#1c2333]"
                    >
                      <div className="flex items-center gap-2">
                        <ArbitrumIcon />
                        <span className="font-['SF_Pro:Medium',sans-serif] font-medium text-[14px] text-[#9ca3af]">
                          Arbitrum
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        toggleNetwork("Optimism")
                        setShowNetworkSelection(false)
                      }}
                      className={`p-3 rounded-[12px] border transition-all ${
                        selectedNetworks.includes("Optimism")
                          ? "border-[#007FFF] bg-[#007FFF]/10"
                          : "border-[#1e2a3d] bg-[#1c2333]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="min-w-[20px] w-5 min-h-[20px] h-5 rounded-full bg-[#FF0420] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                            <circle cx="8" cy="12" r="3" />
                            <circle cx="16" cy="12" r="3" />
                          </svg>
                        </div>
                        <span className="font-['SF_Pro:Medium',sans-serif] font-medium text-[14px] text-[#9ca3af]">
                          Optimism
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Button - fixed at bottom */}
          <div
            className="content-stretch flex flex-col gap-[20px] items-start justify-end relative shrink-0 w-full mt-auto"
            data-name="bottom"
          >
            <div
              className="content-stretch flex gap-[3px] h-[52px] items-center relative shrink-0 w-full"
              data-name="button"
            >
              <button
                onClick={handleConfirm}
                disabled={!amount || !toAddress || selectedNetworks.length === 0}
                className="basis-0 bg-[#007FFF] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0070e0] transition-colors"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium text-[16px] text-white/90">Confirm</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
