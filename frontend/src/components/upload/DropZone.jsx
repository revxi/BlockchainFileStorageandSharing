import React, { useCallback, useState } from 'react';
import { UploadCloud, File, X } from 'lucide-react';

const DropZone = ({ onFileSelect, selectedFile, onClear }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    setIsDragging(e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`
        relative border-2 border-dashed rounded-3xl p-10 transition-all duration-200
        flex flex-col items-center justify-center text-center
        ${isDragging ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-200 bg-slate-50/30'}
        ${selectedFile ? 'border-emerald-200 bg-emerald-50/10' : ''}
      `}
    >
      {!selectedFile ? (
        <>
          <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 text-indigo-600">
            <UploadCloud size={32} />
          </div>
          <p className="text-slate-700 font-semibold mb-1">Click or drag file to upload</p>
          <p className="text-slate-400 text-xs">PDF, JPG, PNG or DOCX (max. 50MB)</p>
          <input 
            type="file" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
        </>
      ) : (
        <div className="flex items-center gap-4 w-full">
          <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-600">
            <File size={24} />
          </div>
          <div className="flex-1 text-left truncate">
            <p className="text-sm font-semibold text-slate-800 truncate">{selectedFile.name}</p>
            <p className="text-xs text-slate-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
          </div>
          <button onClick={onClear} className="p-2 hover:bg-rose-50 hover:text-rose-500 rounded-full transition-colors">
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DropZone;