import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import FileCard from '../components/files/FileCard';
import RightPanel from '../components/layout/RightPanel';
import { History, Clock } from 'lucide-react';

const Recent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Example of grouping logic for recent files
  const recentSections = [
    {
      title: "Today",
      files: [
        { id: 1, name: 'Project_Final_v2.pdf', size: 4500000, type: 'pdf', isVerified: true, uploadDate: '2 hours ago', cid: 'QmX...' }
      ]
    },
    {
      title: "Yesterday",
      files: [
        { id: 2, name: 'Branding_Assets.zip', size: 12400000, type: 'zip', isVerified: true, uploadDate: 'Dec 25, 2025', cid: 'QmY...' },
        { id: 3, name: 'Contract_Draft.docx', size: 850000, type: 'doc', isVerified: false, uploadDate: 'Dec 25, 2025', cid: 'QmZ...' }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <TopBar />
        
        <div className="p-8 flex-1 overflow-y-auto">
          <header className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-slate-100">
              <History size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Recent Activity</h1>
              <p className="text-slate-500 text-sm">Jump back into your most recently modified files.</p>
            </div>
          </header>

          {recentSections.length > 0 ? (
            <div className="space-y-12">
              {recentSections.map((section) => (
                <section key={section.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock size={16} className="text-slate-400" />
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {section.title}
                    </h2>
                    <div className="h-px bg-slate-200 flex-1 ml-2" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {section.files.map((file) => (
                      <FileCard 
                        key={file.id} 
                        file={file} 
                        onSelect={setSelectedFile} 
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-slate-800 font-semibold text-lg">No recent files</h3>
              <p className="text-slate-400 text-sm">Upload or view files to see them listed here.</p>
            </div>
          )}
        </div>
      </main>

      <RightPanel 
        selectedFile={selectedFile} 
        onClose={() => setSelectedFile(null)} 
      />
    </div>
  );
};

export default Recent;