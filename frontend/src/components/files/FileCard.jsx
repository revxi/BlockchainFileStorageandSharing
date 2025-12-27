import React from 'react';
import { MoreVertical, ShieldCheck, Share2, Download, Eye } from 'lucide-react';
import { getFileIcon } from '../../utils/FileIconMapper';
import { formatFileSize } from '../../utils/formatFileSize';
import Tooltip from '../common/Tooltip';

const FileCard = ({ file, onSelect, onAction }) => {
  const { name, size, type, isVerified, uploadDate } = file;

  return (
    <div 
      onClick={() => onSelect(file)}
      className="group relative bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-xl hover:shadow-slate-200/50 hover:border-indigo-200 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        {/* File Icon Container */}
        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
          {getFileIcon(type, 28)}
        </div>
        
        {/* Verification Status */}
        {isVerified && (
          <Tooltip text="Metadata verified on-chain" position="top">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full">
              <ShieldCheck size={14} strokeWidth={2.5} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
            </div>
          </Tooltip>
        )}
      </div>

      {/* File Info */}
      <div className="mb-4">
        <h3 className="text-slate-800 font-semibold text-sm truncate mb-1">{name}</h3>
        <p className="text-slate-400 text-xs font-medium">
          {formatFileSize(size)} • {uploadDate}
        </p>
      </div>

      {/* Quick Actions (Appear on Hover) */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-1">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-indigo-600 transition-colors">
            <Share2 size={16} />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-indigo-600 transition-colors">
            <Download size={16} />
          </button>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};

export default FileCard;