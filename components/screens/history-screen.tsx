"use client"

import { motion } from "motion/react"
import { StatusBar } from "./status-bar"
import { ArbitrumIcon, OptimismIcon } from "./network-icons"

export interface Transaction {
  id: string
  asset: string
  amount: string
  fromNetwork: string
  toNetwork: string
  toAddress: string
  timestamp: Date
  status: "success" | "pending" | "failed"
}

interface HistoryScreenProps {
  transactions: Transaction[]
  onBack: () => void
}

function TransactionCard({ transaction }: { transaction: Transaction }) {
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`

    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const statusColors = {
    success: "text-green-400",
    pending: "text-yellow-400",
    failed: "text-red-400",
  }

  const statusBgColors = {
    success: "bg-green-900/30",
    pending: "bg-yellow-900/30",
    failed: "bg-red-900/30",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#131a29] border border-[#1e2a3d] rounded-2xl p-4 space-y-3"
    >
      {/* Header: Asset & Amount */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#007FFF] flex items-center justify-center">
            <span className="text-white text-sm font-bold">$</span>
          </div>
          <div>
            <p className="text-base font-bold text-white">
              {transaction.amount} {transaction.asset}
            </p>
            <p className="text-xs font-medium text-[#6b7a8f]">{formatDate(transaction.timestamp)}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full ${statusBgColors[transaction.status]}`}>
          <p className={`text-xs font-bold capitalize ${statusColors[transaction.status]}`}>{transaction.status}</p>
        </div>
      </div>

      {/* Route */}
      <div className="flex items-center gap-2 bg-[#1c2333] rounded-lg p-2">
        <div className="flex items-center gap-1.5">
          <ArbitrumIcon size={20} />
          <span className="text-xs font-bold text-[#9ca3af]">{transaction.fromNetwork}</span>
        </div>

        <svg className="w-4 h-4 text-[#6b7a8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>

        <div className="flex items-center gap-1.5">
          <OptimismIcon size={20} />
          <span className="text-xs font-bold text-[#9ca3af]">{transaction.toNetwork}</span>
        </div>
      </div>

      {/* To Address */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-[#6b7a8f]">To</span>
        <span className="font-bold text-white">{transaction.toAddress}</span>
      </div>
    </motion.div>
  )
}

export function HistoryScreen({ transactions, onBack }: HistoryScreenProps) {
  return (
    <div className="bg-[#0a0e17] border border-[#1a2030] border-solid overflow-clip relative rounded-[60px] size-full">
      <StatusBar />

      <div className="absolute bg-[#0d1421] content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[24px] py-[32px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
        <div className="basis-0 content-stretch flex flex-col gap-[21px] grow h-full items-start min-h-px min-w-px relative shrink-0">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <button
              onClick={onBack}
              className="relative shrink-0 size-[28px] rounded-full bg-[#1c2333] flex items-center justify-center hover:bg-[#252d40] transition-colors"
            >
              <svg className="block size-[16px]" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#9ca3af"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <p className="font-bold leading-[23.542px] text-white text-[20px] text-center">Transaction History</p>

            <div className="w-[28px]" />
          </div>

          {/* Total Transactions Counter */}
          <div className="bg-[#131a29] border border-[#1e2a3d] rounded-2xl p-4 w-full">
            <div className="flex items-center justify-between">
              <p className="font-medium text-sm text-[#6b7a8f]">Total Transactions</p>
              <p className="font-bold text-2xl text-white">{transactions.length}</p>
            </div>
          </div>

          {/* Transactions List */}
          <div className="flex-1 overflow-y-auto w-full space-y-3 pr-1">
            {transactions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-[#1c2333] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#6b7a8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="font-bold text-white">No transactions yet</p>
                <p className="font-medium text-sm text-[#6b7a8f]">Your transaction history will appear here</p>
              </div>
            ) : (
              transactions.map((transaction) => <TransactionCard key={transaction.id} transaction={transaction} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
