import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import RightPanel from '../components/layout/RightPanel';
import FileGrid from '../components/files/FileGrid';
import UploadModal from '../components/upload/UploadModal';
import EmptyStateView from '../components/common/EmptyStateView';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  
  // Mock data for initial layout testing
  const [files] = useState([
    { id: 1, name: 'Project_Proposal.pdf', size: 2400000, type: 'pdf', isVerified: true, uploadDate: 'Dec 20, 2025', cid: 'QmXoyp...789' },
    { id: 2, name: 'Vault_Backup.zip', size: 15600000, type: 'zip', isVerified: false, uploadDate: 'Dec 22, 2025', cid: 'QmTzQj...456' }
  ]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <TopBar onUploadClick={() => setIsUploadOpen(true)} />
        
        <div className="p-8 flex-1">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">My Vault</h1>
            <p className="text-slate-500 text-sm">Manage and secure your decentralized assets.</p>
          </header>

          {files.length > 0 ? (
            <FileGrid files={files} onFileSelect={setSelectedFile} />
          ) : (
            <EmptyStateView 
              title="Your vault is empty"
              description="Upload your first document to encrypt it and store it on the blockchain."
              onAction={() => setIsUploadOpen(true)}
            />
          )}
        </div>
      </main>

      <RightPanel 
        selectedFile={selectedFile} 
        onClose={() => setSelectedFile(null)} 
      />

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
        onStartUpload={(file) => console.log('Uploading:', file)}
      />
    </div>
  );
};

export default Dashboard;