import { env } from './env.js';

export const ipfsConfig = {
  pinata: {
    apiKey: env.PINATA_API_KEY,
    secretKey: env.PINATA_SECRET_KEY,
    baseUrl: 'https://api.pinata.cloud'
  },
  // Gateway used to view/retrieve files
  gateway: 'https://gateway.pinata.cloud/ipfs/'
};

// Header helper for Pinata API calls
export const getPinataHeaders = () => ({
  pinata_api_key: ipfsConfig.pinata.apiKey,
  pinata_secret_api_key: ipfsConfig.pinata.secretKey,
});