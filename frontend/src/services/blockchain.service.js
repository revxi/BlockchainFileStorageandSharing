import { ethers } from 'ethers';

// Replace with your actual deployed contract address and ABI
const CONTRACT_ADDRESS = "0x..."; 
const CONTRACT_ABI = [
  "function isRegistered(string cid) public view returns (bool)",
  "function getOwner(string cid) public view returns (address)"
];

export const blockchainService = {
  /**
   * Helper to get a contract instance
   */
  getContract: async (providerOrSigner) => {
    if (!providerOrSigner) throw new Error("No provider or signer provided");
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, providerOrSigner);
  },

  // Check if a CID is already registered
  isFileRegistered: async (provider, cid) => {
    try {
      const contract = await blockchainService.getContract(provider);
      return await contract.isRegistered(cid);
    } catch (error) {
      console.error("Error checking registration:", error);
      throw error;
    }
  },

  // Get file ownership details from contract
  getFileOwner: async (provider, cid) => {
    try {
      const contract = await blockchainService.getContract(provider);
      return await contract.getOwner(cid);
    } catch (error) {
      console.error("Error fetching owner:", error);
      throw error;
    }
  },

  // Format error messages from the EVM
  parseError: (error) => {
    // Ethers v6 uses different error codes
    if (error.code === 'ACTION_REJECTED' || error.info?.error?.code === 4001) {
      return 'User denied transaction.';
    }
    if (error.code === 'INSUFFICIENT_FUNDS') {
      return 'You do not have enough gas (ETH/MATIC) to complete this.';
    }
    return error.reason || error.message || 'Blockchain transaction failed.';
  }
};