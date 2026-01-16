"use client"

import svgPaths from "@/imports/svg-lru3gl41e7"

interface SignPreviewScreenProps {
  amount: string
  toAddress: string
  selectedNetworks: string[]
  onSign: () => void
  onBack: () => void
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

// Optimism icon
function OptimismIcon() {
  return (
    <div className="relative shrink-0 size-[16px] rounded-full overflow-hidden bg-[#FF0420] flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
        <circle cx="8" cy="12" r="3" />
        <circle cx="16" cy="12" r="3" />
      </svg>
    </div>
  )
}

export function SignPreviewScreen({ amount, toAddress, selectedNetworks, onSign, onBack }: SignPreviewScreenProps) {
  const providerFee = Number.parseFloat(amount) * 0.1
  const providerFeeUSD = (providerFee * 0.999).toFixed(2)
  const fee = providerFee.toFixed(2)
  const gasFee = 0.2343434
  const gasFeeUSD = (gasFee * 0.999).toFixed(2)
  const amountNum = Number.parseFloat(amount)
  const amountUSD = (amountNum * 0.999).toFixed(2)
  const feeNum = Number.parseFloat(fee)

  const totalMin = (amountNum + feeNum + gasFee).toFixed(2)
  const totalMax = (amountNum + feeNum + gasFee + 0.5).toFixed(2)
  const totalMinUSD = (Number.parseFloat(totalMin) * 0.999).toFixed(2)
  const totalMaxUSD = (Number.parseFloat(totalMax) * 0.999).toFixed(2)

  return (
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <div className="absolute contents left-[-1px] right-[-1px] top-[-1px]">
        <StatusBarComponent />
      </div>

      {/* Main content - dark navy background */}
      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[24px] py-[32px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
        <div className="basis-0 content-stretch flex flex-col gap-[21px] grow h-full items-start min-h-px min-w-px relative shrink-0">
          {/* Close Button */}
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
            <button
              onClick={onBack}
              className="relative shrink-0 size-[28px] rounded-full bg-[#1c2333] flex items-center justify-center hover:bg-[#252d40] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3.5 3.5L10.5 10.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Header */}
          <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold h-[24.241px] leading-[23.542px] relative shrink-0 text-white text-[20px] text-center w-full">
                  Sign Preview
                </p>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
                    <p className="font-['SF_Pro:Semibold',sans-serif] font-semibold leading-[23.542px] relative shrink-0 text-white text-[14px] text-center text-nowrap">
                      Cross-chain send
                    </p>
                  </div>
                </div>
              </div>

              {/* Amount Card */}
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-end relative rounded-[20px] shrink-0 w-full bg-[#131a29] border border-[#1e2a3d]">
                  {/* Amount */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col items-end justify-center size-full">
                      <div className="rounded-t-[20px] content-stretch flex flex-col gap-[10px] items-end justify-center px-[20px] py-[24px] relative w-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[32px]">
                            <svg className="block size-full" viewBox="0 0 32 32" fill="none">
                              <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" fill="none" />
                              <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                              <text x="16" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                                $
                              </text>
                            </svg>
                          </div>
                          <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[48px] text-white text-nowrap text-right">
                            <p className="leading-[23.542px]">-{amount} USDC</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7a8f] text-[16px] text-right w-full">
                          <p className="leading-[23.542px]">${amountUSD}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-[#1e2a3d]" />

                  {/* To Section */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col items-end justify-center size-full">
                      <div className="rounded-b-[20px] content-stretch flex flex-col gap-[10px] items-end justify-center p-[20px] relative w-full">
                        <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
                          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[23.542px] relative shrink-0 text-[14px] text-white text-center text-nowrap">
                            To
                          </p>
                          <div className="bg-[#1c2333] content-stretch flex gap-[4px] items-center px-[9px] py-[4px] relative rounded-[100px] shrink-0">
                            <OptimismIcon />
                            <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] text-nowrap text-right tracking-[0.0048px]">
                              <p className="leading-[1.3]">Optimism</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="basis-0 content-stretch flex gap-[8px] grow h-[22px] items-center min-h-px min-w-px relative shrink-0">
                              <div className="relative shrink-0 size-[22px] rounded-full bg-[#2a3548]" />
                              <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-white text-center text-nowrap">
                                {toAddress}
                              </p>
                            </div>
                            <div className="relative shrink-0 size-[12px]">
                              <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                                <path
                                  d={svgPaths.p32607400}
                                  stroke="#6b7280"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path d="M8 1.5H10.5V4" stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                  d="M10.25 1.75L6 5.75"
                                  stroke="#6b7280"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-end relative shrink-0 w-full mt-auto">
            {/* Review Details */}
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
              {/* Sender */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[2px] relative w-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[23.542px] relative shrink-0 text-[#6b7a8f] text-[14px] text-center text-nowrap">
                      Sender
                    </p>
                    <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-white text-[14px]">
                      alice.eth@arb
                    </p>
                  </div>
                </div>
              </div>

              {/* Network */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[2px] relative w-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[23.542px] relative shrink-0 text-[#6b7a8f] text-[14px] text-center text-nowrap">
                      Network
                    </p>
                    <div className="flex items-center gap-2">
                      <ArbitrumIcon />
                      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-white text-[14px]">
                        Arbitrum
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gas fee */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[2px] relative w-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[23.542px] relative shrink-0 text-[#6b7a8f] text-[14px] text-center text-nowrap">
                      Gas fee
                    </p>
                    <div className="content-stretch flex gap-[2px] items-start justify-end leading-[22px] relative shrink-0 text-[14px] text-nowrap">
                      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-white">
                        0.2343434 USDC
                      </p>
                      <p className="font-['SF_Pro:Medium',sans-serif] font-medium relative shrink-0 text-[#6b7a8f] text-center">
                        (${gasFeeUSD})
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Provider fee */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[2px] relative w-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[23.542px] relative shrink-0 text-[#6b7a8f] text-[14px] text-center text-nowrap">
                      Provider fee
                    </p>
                    <div className="content-stretch flex gap-[2px] items-start justify-end leading-[22px] relative shrink-0 text-[14px] text-nowrap">
                      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-white">
                        {fee} USDC
                      </p>
                      <p className="font-['SF_Pro:Medium',sans-serif] font-medium relative shrink-0 text-[#6b7a8f] text-center">
                        (${providerFeeUSD})
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expiry */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[2px] relative w-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[23.542px] relative shrink-0 text-[#6b7a8f] text-[14px] text-center text-nowrap">
                      Expiry time
                    </p>
                    <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#6b7a8f] text-[14px]">
                      04/23/28 04:34:22
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#1e2a3d] my-1" />

              {/* Total */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[2px] relative w-full">
                    <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[23.542px] relative shrink-0 text-white text-[14px] text-center text-nowrap">
                      Total
                    </p>
                    <div className="content-stretch flex gap-[2px] items-start justify-end leading-[22px] relative shrink-0 text-[14px] text-nowrap">
                      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-white">
                        {totalMin} ~ {totalMax} USDC
                      </p>
                      <p className="font-['SF_Pro:Medium',sans-serif] font-medium relative shrink-0 text-[#6b7a8f] text-center">
                        (${totalMinUSD} ~ ${totalMaxUSD})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign Button */}
            <div className="content-stretch flex gap-[3px] h-[52px] items-center relative shrink-0 w-full">
              <button
                onClick={onSign}
                className="basis-0 bg-[#007FFF] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0 hover:bg-[#0070e0] transition-colors"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                    <p className="font-['SF_Pro:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white/90">
                      Sign
                    </p>
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
