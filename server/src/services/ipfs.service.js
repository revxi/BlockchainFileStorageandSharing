import axios from 'axios';
import FormData from 'form-data';
import { ipfsConfig } from '../config/ipfs.js';

export const ipfsService = {
  /**
   * Pins a file to IPFS via Pinata
   * @param {Buffer} fileBuffer - The file content
   * @param {string} fileName - Name for Pinata dashboard
   */
  pinFileToIPFS: async (fileBuffer, fileName) => {
    try {
      const formData = new FormData();
      formData.append('file', fileBuffer, { filename: fileName });

      const response = await axios.post(
        `${ipfsConfig.pinata.baseUrl}/pinning/pinFileToIPFS`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            pinata_api_key: ipfsConfig.pinata.apiKey,
            pinata_secret_api_key: ipfsConfig.pinata.secretKey,
          },
        }
      );

      return {
        cid: response.data.IpfsHash,
        timestamp: response.data.Timestamp,
        size: response.data.PinSize,
      };
    } catch (error) {
      console.error('IPFS Pinning Error:', error.response?.data || error.message);
      throw new Error('Failed to upload to IPFS');
    }
  },

  unpinFile: async (cid) => {
    try {
      await axios.delete(`${ipfsConfig.pinata.baseUrl}/pinning/unpin/${cid}`, {
        headers: {
          pinata_api_key: ipfsConfig.pinata.apiKey,
          pinata_secret_api_key: ipfsConfig.pinata.secretKey,
        },
      });
      return true;
    } catch (error) {
      console.error('IPFS Unpin Error:', error.message);
      return false;
    }
  }
};