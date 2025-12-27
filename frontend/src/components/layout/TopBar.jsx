import React from 'react';
import { Search, Plus } from 'lucide-react';
import WalletConnect from '../blockchain/WalletConnect';
import Button from '../common/Button';

const TopBar = ({ onUploadClick }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
      {/* Search Input */}
      <div className="relative w-96 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search files, hashes..."
          className="w-full bg-slate-100/50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-100 transition-all outline-none"
        />
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <Button onClick={onUploadClick} variant="primary" size="sm" className="rounded-full shadow-lg shadow-indigo-100">
          <Plus size={18} />
          <span>New Upload</span>
        </Button>
        <div className="h-8 w-px bg-slate-200 mx-2" />
        <WalletConnect />
      </div>
    </header>
  );
};

export default TopBar;