import React from 'react';
import { User, ShieldAlert, X } from 'lucide-react';
import { shortenHash } from '../../utils/shortenHash';
import PermissionBadge from './PermissionBadge';

const AccessList = ({ collaborators, onRevoke }) => {
  return (
    <div className="space-y-3 mt-6">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
        Who has access
      </h4>
      <div className="bg-slate-50 rounded-2xl p-2 border border-slate-100">
        {collaborators.map((user, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 hover:bg-white hover:shadow-sm rounded-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">
                <User size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">
                  {shortenHash(user.address)}
                </p>
                <PermissionBadge role={user.role} />
              </div>
            </div>
            
            {user.role !== 'owner' && (
              <button 
                onClick={() => onRevoke(user.address)}
                className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                title="Revoke Access"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessList;