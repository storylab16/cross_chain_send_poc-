import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';

interface TransactionPreviewProps {
  amount: string;
  toAddress: string;
  selectedNetworks: string[];
  onBack: () => void;
  onSign: () => void;
}

export function TransactionPreview({
  amount,
  toAddress,
  selectedNetworks,
  onBack,
  onSign
}: TransactionPreviewProps) {
  const senderAddress = 'vitalik.eth';
  const senderWallet = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb';
  const fee = (parseFloat(amount) * 0.002).toFixed(4);
  const estimatedTime = '~3 minutes';

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <Card className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-semibold">Preview Transaction</h2>
            <p className="text-sm text-gray-500">Review before signing</p>
          </div>
        </div>

        {/* Transaction Summary */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">You're sending</p>
            <p className="text-4xl font-bold">{amount} ETH</p>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="space-y-4">
          {/* From */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-500">From</label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">{senderAddress}</p>
              <p className="text-xs text-gray-500 font-mono mt-1">
                {senderWallet}
              </p>
            </div>
          </div>

          {/* To */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-500">To</label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">{toAddress}</p>
            </div>
          </div>

          {/* Networks & Fees */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-500">Networks</label>
            <div className="space-y-2">
              {selectedNetworks.map((network) => (
                <div
                  key={network}
                  className="p-3 bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                        network === 'Arbitrum' ? 'bg-blue-500' : 'bg-red-500'
                      }`}
                    >
                      {network[0]}
                    </div>
                    <div>
                      <p className="font-medium">{network}</p>
                      <p className="text-xs text-gray-500">Fee: {fee} ETH</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Estimated Time */}
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-900">
                  Estimated Time
                </p>
                <p className="text-xs text-amber-700">{estimatedTime}</p>
              </div>
            </div>
          </div>

          {/* Total Summary */}
          <div className="pt-4 border-t space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Amount</span>
              <span className="font-medium">{amount} ETH</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Network Fee</span>
              <span className="font-medium">{fee} ETH</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">
                {(parseFloat(amount) + parseFloat(fee)).toFixed(4)} ETH
              </span>
            </div>
          </div>
        </div>

        {/* Sign Button */}
        <Button onClick={onSign} className="w-full h-12 text-base" size="lg">
          Sign Once to Send
        </Button>

        <p className="text-xs text-center text-gray-500">
          You'll sign this transaction once to send across all selected networks
        </p>
      </Card>
    </div>
  );
}
