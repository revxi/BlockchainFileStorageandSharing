import React from 'react';
import { Loader2, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { shortenHash } from '../../utils/shortenHash';

const TxStatus = ({ status, hash }) => {
  // status: 'idle' | 'mining' | 'success' | 'error'
  
  if (status === 'idle') return null;

  const config = {
    mining: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      icon: <Loader2 size={18} className="animate-spin" />,
      label: 'Transaction Mining...'
    },
    success: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      icon: <CheckCircle2 size={18} />,
      label: 'Transaction Confirmed'
    },
    error: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      icon: <AlertCircle size={18} />,
      label: 'Transaction Failed'
    }
  };

  const current = config[status];

  return (
    <div className={`fixed bottom-8 right-8 flex items-center gap-4 px-5 py-4 rounded-2xl shadow-2xl border ${current.bg} ${current.text} border-opacity-20 z-50 animate-in slide-in-from-bottom-5`}>
      {current.icon}
      <div>
        <p className="text-sm font-bold leading-none">{current.label}</p>
        {hash && (
          <a 
            href={`https://polygonscan.com/tx/${hash}`} 
            target="_blank" 
            className="text-[11px] underline opacity-70 flex items-center gap-1 mt-1"
          >
            {shortenHash(hash)} <ExternalLink size={10} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TxStatus;