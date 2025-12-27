import { ethers } from 'ethers';
import { env } from '../config/env.js';

export const getTxDetails = async (req, res) => {
  try {
    const provider = new ethers.JsonRpcProvider(env.BLOCKCHAIN_RPC_URL);
    const tx = await provider.getTransaction(req.params.txHash);
    const receipt = await provider.getTransactionReceipt(req.params.txHash);
    
    res.json({
      confirmations: await receipt.confirmations(),
      status: receipt.status === 1 ? 'Success' : 'Failed',
      blockNumber: receipt.blockNumber
    });
  } catch (error) {
    res.status(500).json({ message: "Blockchain lookup failed" });
  }
};