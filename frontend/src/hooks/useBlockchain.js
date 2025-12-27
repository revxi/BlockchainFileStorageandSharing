import { useState } from 'react';
import { blockchainService } from '../services/blockchain.service';
import { useWallet } from './useWallet';

export const useBlockchain = () => {
  const { provider } = useWallet();
  const [txStatus, setTxStatus] = useState('idle'); // idle, signing, mining, success, error
  const [lastTxHash, setLastTxHash] = useState(null);

  const registerFile = async (cid, name, size) => {
    try {
      setTxStatus('signing');
      const tx = await blockchainService.registerFileOnChain(provider, { cid, name, size });
      
      setTxStatus('mining');
      setLastTxHash(tx.hash);
      
      await tx.wait(); // Wait for confirmation
      setTxStatus('success');
      return tx.hash;
    } catch (error) {
      setTxStatus('error');
      console.error(blockchainService.parseError(error));
      throw error;
    }
  };

  return { registerFile, txStatus, lastTxHash };
};