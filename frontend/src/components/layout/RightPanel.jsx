import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, ShieldCheck, Download, Trash2 } from 'lucide-react';
import { shortenHash } from '../../utils/shortenHash';
import { formatFileSize } from '../../utils/formatFileSize';

const RightPanel = ({ selectedFile, onClose }) => {
  return (
    <AnimatePresence>
      {selectedFile && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-screen w-80 bg-white border-l border-slate-200 shadow-2xl z-40 p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <Info size={18} className="text-indigo-500" />
              File Details
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* File Preview Placeholder */}
          <div className="aspect-square w-full bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center mb-6 overflow-hidden">
             {/* Dynamic Icon/Thumbnail would go here */}
             <div className="text-slate-300">Preview not available</div>
          </div>

          {/* Metadata */}
          <div className="space-y-4 flex-1">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Filename</label>
              <p className="text-sm font-semibold text-slate-700 truncate">{selectedFile.name}</p>
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IPFS CID</label>
              <p className="text-xs font-mono text-indigo-600 bg-indigo-50 p-2 rounded-lg break-all mt-1">
                {selectedFile.cid}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Size</label>
                <p className="text-sm text-slate-600">{formatFileSize(selectedFile.size)}</p>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</label>
                <p className="text-sm text-slate-600 uppercase">{selectedFile.type}</p>
              </div>
            </div>
          </div>

          {/* Actions Footer */}
          <div className="mt-auto space-y-3 pt-6">
            <Button variant="secondary" className="w-full py-3">
              <Download size={18} />
              Download
            </Button>
            <Button variant="danger" className="w-full py-3">
              <Trash2 size={18} />
              Delete File
            </Button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default RightPanel;