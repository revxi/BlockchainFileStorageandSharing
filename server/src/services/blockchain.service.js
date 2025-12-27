import { ethers } from 'ethers';
import { env } from '../config/env.js';

const provider = new ethers.JsonRpcProvider(env.BLOCKCHAIN_RPC_URL);

export const blockchainService = {
  /**
   * Validates if a transaction hash is actually confirmed on-chain
   */
  verifyTransaction: async (txHash) => {
    try {
      const receipt = await provider.getTransactionReceipt(txHash);
      if (!receipt) return { status: 'pending' };
      
      return {
        status: receipt.status === 1 ? 'confirmed' : 'failed',
        blockNumber: receipt.blockNumber,
        from: receipt.from,
      };
    } catch (error) {
      console.error('Blockchain Service Error:', error.message);
      return { status: 'error' };
    }
  },

  /**
   * Utility to format wallet addresses consistently
   */
  formatAddress: (address) => {
    return ethers.getAddress(address);
  }
};