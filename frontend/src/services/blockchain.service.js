import { ethers } from 'ethers';

const CONTRACT_ABI = [...]; // Your ABI
const CONTRACT_ADDRESS = "0x...";

export const blockchainService = {
  // Check if a CID is already registered
  isFileRegistered: async (provider, cid) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    return await contract.isRegistered(cid);
  },

  // Get file ownership details from contract
  getFileOwner: async (provider, cid) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    return await contract.getOwner(cid);
  },

  // Format error messages from the EVM
  parseError: (error) => {
    if (error.code === 'ACTION_REJECTED') return 'User denied transaction.';
    return error.message || 'Blockchain transaction failed.';
  }
};