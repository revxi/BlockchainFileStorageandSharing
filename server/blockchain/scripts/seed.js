const hre = require("hardhat");

async function main() {
  const [owner, user2] = await hre.ethers.getSigners();
  
  // Get the deployed contract instance
  // Note: Replace with your actual deployed address if not running on local node
  const DEPLOYED_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const registry = await hre.ethers.getContractAt("FileRegistry", DEPLOYED_ADDRESS);

  console.log("🌱 Seeding data to:", DEPLOYED_ADDRESS);

  const mockCIDs = [
    "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco", // Document 1
    "QmYwAPJzv9fBsnuA7tzrrz7G6fTvx9SPS9x27Yy8uN6PjG", // Image 1
    "QmZ4tjv7HSY35PY9xS9p9b8L8xS9x9b8L8xS9x9b8L8xS9"  // Secret 1
  ];

  for (const cid of mockCIDs) {
    const tx = await registry.anchorFile(cid);
    await tx.wait();
    console.log(`⚓ Anchored CID: ${cid}`);
  }

  // Simulate sharing the first file with User 2
  const shareTx = await registry.shareFile(mockCIDs[0], user2.address);
  await shareTx.wait();
  console.log(`🤝 Shared ${mockCIDs[0]} with ${user2.address}`);

  console.log("✅ Seeding complete!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});