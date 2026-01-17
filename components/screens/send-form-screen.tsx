"use client"

import { useState } from "react"
import { StatusBar } from "./status-bar"
import { ArbitrumIcon, OptimismIcon } from "./network-icons"

interface SendFormScreenProps {
  onConfirm: (data: { amount: string; toAddress: string; selectedNetworks: string[] }) => void
}

// USDC Icon
function USDCIcon() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="block size-full" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="2" fill="none" />
        <text x="32" y="40" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
          $
        </text>
      </svg>
    </div>
  )
}

export function SendFormScreen({ onConfirm }: SendFormScreenProps) {
  const [amount, setAmount] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [showNetworkSelection, setShowNetworkSelection] = useState(false)
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])

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
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <StatusBar />

      {/* Main content container */}
      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[24px] py-[32px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            {/* Three dots indicator */}
            <div className="flex items-center gap-[6px]">
              <div className="size-[6px] rounded-full bg-white" />
              <div className="size-[6px] rounded-full bg-[#4a5568]" />
              <div className="size-[6px] rounded-full bg-[#4a5568]" />
            </div>
            {/* Close button - absolute positioned to right */}
            <button className="absolute right-0 shrink-0 size-[28px] rounded-full bg-[#1c2333] flex items-center justify-center hover:bg-[#252d40] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3.5 3.5L10.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
                  <p className="font-bold text-[20px] text-white text-center">Send</p>
                  <p className="font-normal text-[14px] text-[#6b7a8f] text-center">Cross-chain Send PoC</p>
                </div>
                <USDCIcon />
              </div>
            </div>

            {/* Input Cards */}
            <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
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
                        className="font-semibold h-full leading-none relative shrink-0 text-[56px] text-white text-center w-full bg-transparent outline-none border-none placeholder:text-[#2a3548]"
                        style={{ caretColor: "#007FFF" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#1e2a3d]" />

                {/* Network Balance Row */}
                <div className="relative rounded-b-[20px] shrink-0 w-full">
                  <div className="flex flex-col items-end justify-center size-full">
                    <div className="content-stretch flex flex-col items-end justify-center px-[20px] py-[14px] relative size-full">
                      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <ArbitrumIcon size={20} />
                          <p className="font-medium text-[14px] text-[#9ca3af]">Arbitrum</p>
                        </div>
                        <p className="font-medium text-[14px] text-[#9ca3af]">
                          Balance: {remainingBalance.toFixed(2)} USDC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#131a29] relative rounded-[20px] shrink-0 w-full border border-[#1e2a3d] transition-all"
                onClick={() => !toAddress && setShowNetworkSelection(true)}
              >
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full gap-[8px]">
                      <p className="font-semibold text-[14px] text-white">To</p>
                      <div className="flex gap-2 items-center w-full">
                        {/* Show selected network icons inline with address */}
                        {toAddress && selectedNetworks.length > 0 && (
                          <>
                            {selectedNetworks.map((network) =>
                              network === "Optimism" ? (
                                <OptimismIcon key={network} size={24} />
                              ) : (
                                <ArbitrumIcon key={network} size={24} />
                              ),
                            )}
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
                          onFocus={() => !toAddress && setShowNetworkSelection(true)}
                          placeholder="Wallet address or ENS name"
                          className="font-normal text-[14px] text-white bg-transparent outline-none border-none flex-1 placeholder:text-[#4a5568]"
                        />
                      </div>

                      {showNetworkSelection && !toAddress && (
                        <div className="mt-[12px]">
                          <p className="font-semibold text-[14px] mb-3 text-white">Select Networks</p>
                          <div className="flex gap-3">
                            {/* Arbitrum - disabled as source */}
                            <button
                              disabled
                              className="flex-1 p-3 rounded-[12px] border border-[#1e2a3d] opacity-50 cursor-not-allowed bg-[#1c2333]"
                            >
                              <div className="flex items-center gap-2">
                                <ArbitrumIcon size={28} />
                                <span className="font-medium text-[14px] text-[#9ca3af]">Arbitrum</span>
                              </div>
                            </button>

                            {/* Optimism - selectable */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleNetwork("Optimism")
                              }}
                              className={`flex-1 p-3 rounded-[12px] border transition-all ${
                                selectedNetworks.includes("Optimism")
                                  ? "border-[#007FFF] bg-[#007FFF]/10"
                                  : "border-[#1e2a3d] bg-[#1c2333]"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <OptimismIcon size={28} />
                                <span className="font-medium text-[14px] text-[#9ca3af]">Optimism</span>
                              </div>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-end relative shrink-0 w-full mt-auto">
            <button
              onClick={handleConfirm}
              disabled={!amount || !toAddress || selectedNetworks.length === 0}
              className="w-full bg-[#007FFF] h-[52px] relative rounded-[100px] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0070e0] transition-colors"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <p className="font-medium text-[16px] text-white/90">Confirm</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
