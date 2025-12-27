import { useState } from 'react';
import { encryptFile } from '../utils/encryptFile';
import { fileService } from '../services/file.service';
import { useBlockchain } from './useBlockchain';

export const useUpload = () => {
  const [uploadStage, setUploadStage] = useState('idle'); 
  const { registerFile } = useBlockchain();

  const startUpload = async (file, secretKey) => {
    try {
      // Step 1: Local Encryption
      setUploadStage('encrypt');
      const encryptedBlob = await encryptFile(file, secretKey);

      // Step 2: IPFS Upload
      setUploadStage('ipfs');
      const { cid } = await fileService.uploadToIPFS(encryptedBlob);

      // Step 3: Blockchain Registration
      setUploadStage('blockchain');
      const txHash = await registerFile(cid, file.name, file.size);

      // Step 4: Finalize in DB
      setUploadStage('finishing');
      await fileService.saveMetadata({
        cid,
        name: file.name,
        size: file.size,
        txHash,
        type: file.type.split('/')[1]
      });

      setUploadStage('success');
    } catch (err) {
      setUploadStage('error');
      throw err;
    }
  };

  return { startUpload, uploadStage };
};