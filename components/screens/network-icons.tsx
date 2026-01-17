"use client"

// Arbitrum icon from https://cryptologos.cc/logos/arbitrum-arb-logo.svg
export function ArbitrumIcon({ size = 20 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full overflow-hidden flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=040"
        alt="Arbitrum"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  )
}

// Optimism icon from https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg
export function OptimismIcon({ size = 20 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full overflow-hidden flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=040"
        alt="Optimism"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  )
}
