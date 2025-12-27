import React from 'react';
import { CheckCircle2, Loader2, Database, ShieldCheck, Globe } from 'lucide-react';

const UploadProgress = ({ stage }) => {
  const stages = [
    { id: 'encrypt', label: 'Securing File', icon: ShieldCheck },
    { id: 'ipfs', label: 'Uploading to IPFS', icon: Globe },
    { id: 'blockchain', label: 'Registering on Chain', icon: Database },
  ];

  const getStatus = (currentId) => {
    const currentIndex = stages.findIndex(s => s.id === stage);
    const stepIndex = stages.findIndex(s => s.id === currentId);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <div className="space-y-4 py-4">
      {stages.map((step) => {
        const status = getStatus(step.id);
        const Icon = step.icon;

        return (
          <div key={step.id} className={`flex items-center gap-4 transition-opacity ${status === 'pending' ? 'opacity-40' : 'opacity-100'}`}>
            <div className={`p-2 rounded-lg ${status === 'active' ? 'bg-indigo-600 text-white animate-pulse' : 'bg-slate-100 text-slate-500'}`}>
              {status === 'completed' ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Icon size={18} />}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${status === 'active' ? 'text-slate-900' : 'text-slate-500'}`}>
                {step.label}
              </p>
            </div>
            {status === 'active' && <Loader2 size={16} className="animate-spin text-indigo-600" />}
          </div>
        );
      })}
    </div>
  );
};

export default UploadProgress;