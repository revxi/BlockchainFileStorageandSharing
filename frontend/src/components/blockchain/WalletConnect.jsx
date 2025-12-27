import React from 'react';
import { useWallet } from '../../context/WalletContext';
import { shortenHash } from '../../utils/shortenHash';
import { Wallet, ChevronDown, LogOut, Copy } from 'lucide-react';
import Button from '../common/Button';

const WalletConnect = () => {
  const { account, connectWallet, disconnectWallet, isConnecting } = useWallet();

  if (!account) {
    return (
      <Button 
        variant="primary" 
        onClick={connectWallet} 
        isLoading={isConnecting}
        className="rounded-full px-6"
      >
        <Wallet size={18} />
        Connect Wallet
      </Button>
    );
  }

  return (
    <div className="group relative">
      <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 hover:border-indigo-300 transition-all cursor-pointer shadow-sm">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm font-semibold text-slate-700">{shortenHash(account)}</span>
        <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform" />
      </div>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
        <div className="px-4 py-3 border-b border-slate-50 mb-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connected Wallet</p>
          <p className="text-xs text-slate-600 truncate">{account}</p>
        </div>
        
        <button 
          onClick={() => navigator.clipboard.writeText(account)}
          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
        >
          <Copy size={16} /> Copy Address
        </button>

        <button 
          onClick={disconnectWallet}
          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-xl transition-colors mt-1"
        >
          <LogOut size={16} /> Disconnect
        </button>
      </div>
    </div>
  );
};

export default WalletConnect;