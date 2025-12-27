import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import FileGrid from '../components/files/FileGrid';
import { Users } from 'lucide-react';

const Shared = () => {
  // Logic to fetch files where user address is in 'collaborators' list
  const sharedFiles = []; 

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1">
        <TopBar />
        <div className="p-8">
          <header className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-slate-100">
              <Users size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Shared with Me</h1>
              <p className="text-slate-500 text-sm">Files shared with your wallet address via smart contract.</p>
            </div>
          </header>
          
          <FileGrid files={sharedFiles} />
        </div>
      </main>
    </div>
  );
};

export default Shared;