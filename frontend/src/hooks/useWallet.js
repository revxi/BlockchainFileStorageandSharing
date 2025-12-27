import { useWallet as useWalletContext } from '../context/WalletContext';
import { useEffect } from 'react';

export const useWallet = () => {
  const context = useWalletContext();

  // Listen for account/network changes from the browser extension
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => window.location.reload());
      window.ethereum.on('chainChanged', () => window.location.reload());
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, []);

  return { ...context };
};