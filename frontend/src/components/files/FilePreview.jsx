import React from 'react';
import { getFileIcon } from '../../utils/FileIconMapper';

const FilePreview = ({ file }) => {
  // If file is an image, we could show an actual thumbnail
  const isImage = ['jpg', 'jpeg', 'png', 'svg'].includes(file.type);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
      {isImage && file.url ? (
        <img src={file.url} alt={file.name} className="max-h-full object-contain rounded-lg shadow-sm" />
      ) : (
        <div className="flex flex-col items-center">
          <div className="mb-4 p-6 bg-white rounded-3xl shadow-sm">
            {getFileIcon(file.type, 64)}
          </div>
          <span className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">
            {file.type} Document
          </span>
        </div>
      )}
    </div>
  );
};

export default FilePreview;