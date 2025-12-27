import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PINATA_API_KEY: process.env.PINATA_API_KEY,
  PINATA_SECRET_KEY: process.env.PINATA_SECRET_KEY,
  BLOCKCHAIN_RPC_URL: process.env.BLOCKCHAIN_RPC_URL,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
};

// Simple validation to prevent runtime crashes
if (!env.MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI is not defined in .env file");
  process.exit(1);
}