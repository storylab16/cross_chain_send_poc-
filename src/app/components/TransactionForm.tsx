import { useState } from 'react';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ArrowDown, Info } from 'lucide-react';

interface TransactionFormProps {
  onConfirm: (data: {
    amount: string;
    toAddress: string;
    selectedNetworks: string[];
  }) => void;
}

export function TransactionForm({ onConfirm }: TransactionFormProps) {
  const [amount, setAmount] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [showNetworkSelection, setShowNetworkSelection] = useState(false);
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>(['Arbitrum']);
  
  const fee = amount ? (parseFloat(amount) * 0.002).toFixed(4) : '0';
  const totalWithFee = amount ? (parseFloat(amount) + parseFloat(fee)).toFixed(4) : '0';

  const toggleNetwork = (network: string) => {
    setSelectedNetworks(prev => 
      prev.includes(network) 
        ? prev.filter(n => n !== network)
        : [...prev, network]
    );
  };

  const handleConfirm = () => {
    if (amount && toAddress && selectedNetworks.length > 0) {
      onConfirm({ amount, toAddress, selectedNetworks });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Send</h2>
          <p className="text-sm text-gray-500">Cross-chain transaction</p>
        </div>

        {/* Amount Input */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="amount">Amount</Label>
            <span className="text-xs text-gray-500">Balance: 100.00 ETH</span>
          </div>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-2xl h-14 pr-16"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="text-sm font-medium">ETH</span>
            </div>
          </div>
          
          {/* Fee Display */}
          {amount && (
            <div className="space-y-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Network Fee
                </span>
                <span className="font-medium">{fee} ETH</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-blue-200">
                <span className="font-medium">Total</span>
                <span className="font-semibold">{totalWithFee} ETH</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* To Address Input */}
        <div className="space-y-3">
          <Label htmlFor="toAddress">To</Label>
          <Input
            id="toAddress"
            type="text"
            placeholder="Enter ENS address or wallet"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            onFocus={() => setShowNetworkSelection(true)}
            className="h-12"
          />
        </div>

        {/* Network Selection */}
        {showNetworkSelection && (
          <div className="space-y-3">
            <Label>Select Networks</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => toggleNetwork('Arbitrum')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedNetworks.includes('Arbitrum')
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <span className="font-medium">Arbitrum</span>
                </div>
              </button>
              
              <button
                onClick={() => toggleNetwork('Optimism')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedNetworks.includes('Optimism')
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold">
                    O
                  </div>
                  <span className="font-medium">Optimism</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Confirm Button */}
        <Button
          onClick={handleConfirm}
          disabled={!amount || !toAddress || selectedNetworks.length === 0}
          className="w-full h-12"
        >
          Confirm
        </Button>
      </Card>
    </div>
  );
}
