const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting deployment of FileRegistry...");

  // Get the contract factory
  const FileRegistry = await hre.ethers.getContractFactory("FileRegistry");

  // Deploy the contract
  const registry = await FileRegistry.deploy();

  // Wait for the deployment to be mined
  await registry.waitForDeployment();

  const address = await registry.getAddress();

  console.log("-----------------------------------------------");
  console.log(`✅ FileRegistry deployed to: ${address}`);
  console.log("-----------------------------------------------");
  console.log("Update your .env files with this address!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});