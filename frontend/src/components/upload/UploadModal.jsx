import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import DropZone from './DropZone';
import UploadProgress from './UploadProgress';

const UploadModal = ({ isOpen, onClose, onStartUpload }) => {
  const [file, setFile] = useState(null);
  const [uploadStage, setUploadStage] = useState('idle'); // idle, encrypt, ipfs, blockchain, success

  const handleUpload = async () => {
    setUploadStage('encrypt');
    // Actual logic will go in useUpload hook
    await onStartUpload(file, setUploadStage);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Secure New Upload">
      <div className="space-y-6">
        {uploadStage === 'idle' ? (
          <>
            <DropZone 
              selectedFile={file} 
              onFileSelect={setFile} 
              onClear={() => setFile(null)} 
            />
            <Button 
              className="w-full py-4" 
              disabled={!file} 
              onClick={handleUpload}
            >
              Start Secure Upload
            </Button>
          </>
        ) : (
          <div className="py-6">
             <UploadProgress stage={uploadStage} />
             {uploadStage === 'success' && (
               <div className="text-center space-y-4">
                  <p className="text-emerald-600 font-bold">Successfully Stored!</p>
                  <Button variant="secondary" onClick={onClose} className="w-full">Close Vault</Button>
               </div>
             )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default UploadModal;