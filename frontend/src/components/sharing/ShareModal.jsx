import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import AccessList from './AccessList';
import { UserPlus, Globe, Lock } from 'lucide-react';

const ShareModal = ({ isOpen, onClose, file, onShare, currentCollaborators }) => {
  const [targetAddress, setTargetAddress] = useState('');
  const [role, setRole] = useState('viewer');

  const handleShare = () => {
    onShare(targetAddress, role);
    setTargetAddress(''); // Reset after sharing
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Document">
      <div className="space-y-6">
        {/* Address Input Area */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-700">Invite by Wallet Address</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="0x..."
                value={targetAddress}
                onChange={(e) => setTargetAddress(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 text-sm font-medium text-slate-600 outline-none"
            >
              <option value="viewer">Viewer</option>
              <option value="editor">Editor</option>
            </select>
          </div>
          <Button 
            onClick={handleShare} 
            disabled={!targetAddress}
            className="w-full py-3"
          >
            Grant Access
          </Button>
        </div>

        {/* Global Access Toggle (Optional Hook) */}
        <div className="flex items-center justify-between p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg text-indigo-600 shadow-sm">
              <Globe size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-900">Public Link</p>
              <p className="text-xs text-indigo-600">Anyone with the CID can view</p>
            </div>
          </div>
          <div className="w-10 h-5 bg-slate-200 rounded-full relative">
             <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all" />
          </div>
        </div>

        {/* List of current access */}
        <AccessList collaborators={currentCollaborators} onRevoke={(addr) => console.log('Revoking', addr)} />
      </div>
    </Modal>
  );
};

export default ShareModal;