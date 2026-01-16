"use client"

import { useState } from "react"
import { LandingScreen } from "@/components/screens/landing-screen"
import { SendFormScreen } from "@/components/screens/send-form-screen"
import { SignPreviewScreen } from "@/components/screens/sign-preview-screen"
import { SendProgressScreen } from "@/components/screens/send-progress-screen"
import { SuccessScreen } from "@/components/screens/success-screen"
import { HistoryScreen, type Transaction } from "@/components/screens/history-screen"

type Screen = "landing" | "form" | "preview" | "progress" | "success" | "history"

interface TransactionData {
  amount: string
  toAddress: string
  selectedNetworks: string[]
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing")
  const [transactionData, setTransactionData] = useState<TransactionData | null>(null)
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([])

  const handleStartSend = () => {
    setCurrentScreen("form")
  }

  const handleConfirm = (data: TransactionData) => {
    setTransactionData(data)
    setCurrentScreen("preview")
  }

  const handleSign = () => {
    setCurrentScreen("progress")
  }

  const handleBack = () => {
    setCurrentScreen("form")
  }

  const handleComplete = () => {
    if (transactionData) {
      const newTransaction: Transaction = {
        id: `tx-${Date.now()}`,
        asset: "USDC",
        amount: transactionData.amount,
        fromNetwork: "Arbitrum",
        toNetwork: "Optimism",
        toAddress: transactionData.toAddress,
        timestamp: new Date(),
        status: "success",
      }
      setTransactionHistory((prev) => [newTransaction, ...prev])
    }
    setCurrentScreen("success")
  }

  const handleBackToSend = () => {
    setCurrentScreen("form")
    setTransactionData(null)
  }

  const handleViewHistory = () => {
    setCurrentScreen("history")
  }

  const handleBackFromHistory = () => {
    setCurrentScreen("form")
  }

  return (
    <div className="dark size-full min-h-screen flex items-center justify-center bg-[#0a0e17]">
      <div className="w-[393px] h-[852px]">
        {currentScreen === "landing" && <LandingScreen onStartSend={handleStartSend} />}

        {currentScreen === "form" && <SendFormScreen onConfirm={handleConfirm} />}

        {currentScreen === "preview" && transactionData && (
          <SignPreviewScreen
            amount={transactionData.amount}
            toAddress={transactionData.toAddress}
            selectedNetworks={transactionData.selectedNetworks}
            onSign={handleSign}
            onBack={handleBack}
          />
        )}

        {currentScreen === "progress" && transactionData && (
          <SendProgressScreen
            amount={transactionData.amount}
            toAddress={transactionData.toAddress}
            onComplete={handleComplete}
          />
        )}

        {currentScreen === "success" && transactionData && (
          <SuccessScreen
            amount={transactionData.amount}
            onBackToSend={handleBackToSend}
            onViewHistory={handleViewHistory}
          />
        )}

        {currentScreen === "history" && (
          <HistoryScreen transactions={transactionHistory} onBack={handleBackFromHistory} />
        )}
      </div>
    </div>
  )
}
