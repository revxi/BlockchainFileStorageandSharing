import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import FileGrid from '../components/files/FileGrid';
import Button from '../components/common/Button';
import { Trash2, RotateCcw, AlertTriangle } from 'lucide-react';

const Trash = () => {
  // Mock deleted files
  const [deletedFiles] = useState([
    { id: 101, name: 'Old_Contract_v1.pdf', size: 1200000, type: 'pdf', uploadDate: 'Nov 12, 2025' }
  ]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <TopBar />
        
        <div className="p-8">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-rose-500 border border-slate-100">
                <Trash2 size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Trash</h1>
                <p className="text-slate-500 text-sm">Files here are scheduled for deletion from local cache.</p>
              </div>
            </div>
            
            {deletedFiles.length > 0 && (
              <Button variant="danger" size="sm">
                Empty Trash
              </Button>
            )}
          </header>

          {deletedFiles.length > 0 ? (
            <>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-8 flex items-start gap-3">
                <AlertTriangle className="text-amber-600 mt-0.5" size={18} />
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Files deleted from Reverie are removed from the index, but may persist on IPFS if pinned by other nodes.
                </p>
              </div>
              <FileGrid files={deletedFiles} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <Trash2 size={40} />
              </div>
              <h3 className="text-slate-800 font-semibold text-lg">Trash is empty</h3>
              <p className="text-slate-400 text-sm">No files found in your recycling bin.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Trash;