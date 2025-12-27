import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Tooltip from '../common/Tooltip';

const VerifiedBadge = ({ txHash, chainId }) => {
  const explorerUrl = `https://polygonscan.com/tx/${txHash}`; // Example for Polygon

  return (
    <Tooltip text="View Transaction on Block Explorer" position="top">
      <a 
        href={explorerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md hover:bg-emerald-100 transition-colors cursor-pointer"
      >
        <ShieldCheck size={14} strokeWidth={2.5} />
        <span className="text-[10px] font-bold uppercase tracking-wider">On-Chain</span>
      </a>
    </Tooltip>
  );
};

export default VerifiedBadge;