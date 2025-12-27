import React from 'react';
import { Download, Share2, Trash2, Edit3, ExternalLink } from 'lucide-react';

const FileActions = ({ file, onClose }) => {
  const actions = [
    { icon: ExternalLink, label: 'View on IPFS', color: 'text-slate-600' },
    { icon: Share2, label: 'Manage Access', color: 'text-slate-600' },
    { icon: Edit3, label: 'Rename', color: 'text-slate-600' },
    { icon: Download, label: 'Download', color: 'text-indigo-600' },
    { icon: Trash2, label: 'Move to Trash', color: 'text-rose-600' },
  ];

  return (
    <div className="w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50">
      {actions.map((action, i) => (
        <button
          key={i}
          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors ${action.color}`}
        >
          <action.icon size={16} />
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default FileActions;