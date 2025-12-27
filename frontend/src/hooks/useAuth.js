import { useState, useEffect } from 'react';
import { authService } from '../services/auth.service';
import { useWallet } from './useWallet';

export const useAuth = () => {
  const { getSigner, account } = useWallet();
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginWithWallet = async () => {
    setIsAuthenticating(true);
    try {
      const signer = await getSigner();
      const message = `Sign this message to access your Reverie Vault: ${Date.now()}`;
      const signature = await signer.signMessage(message);
      
      const session = await authService.verifyWallet(account, signature);
      setUser(session.user);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return { user, loginWithWallet, logout, isAuthenticating, isAuthenticated: !!user };
};