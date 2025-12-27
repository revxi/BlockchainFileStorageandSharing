require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { 
  PRIVATE_KEY, 
  SEPOLIA_RPC_URL, 
  ETHERSCAN_API_KEY, 
  POLYGON_AMOY_RPC_URL 
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Local node for development
    hardhat: {
      chainId: 1337,
    },
    // Ethereum Testnet
    sepolia: {
      url: SEPOLIA_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    // Polygon Testnet (often cheaper/faster for dev)
    amoy: {
      url: POLYGON_AMOY_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // Used for verifying contract source code
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};