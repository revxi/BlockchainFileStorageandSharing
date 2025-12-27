const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FileRegistry", function () {
  let FileRegistry;
  let registry;
  let owner;
  let addr1;
  let addr2;

  const MOCK_CID = "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco";

  beforeEach(async function () {
    // Get signers
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy contract
    FileRegistry = await ethers.getContractFactory("FileRegistry");
    registry = await FileRegistry.deploy();
  });

  describe("Anchoring", function () {
    it("Should set the right owner when a file is anchored", async function () {
      await registry.anchorFile(MOCK_CID);
      expect(await registry.getOwner(MOCK_CID)).to.equal(owner.address);
    });

    it("Should fail if the same CID is anchored twice", async function () {
      await registry.anchorFile(MOCK_CID);
      await expect(registry.anchorFile(MOCK_CID)).to.be.revertedWith(
        "File already registered"
      );
    });
  });

  describe("Sharing & Access", function () {
    beforeEach(async function () {
      await registry.anchorFile(MOCK_CID);
    });

    it("Should grant access to a guest user", async function () {
      await registry.shareFile(MOCK_CID, addr1.address);
      expect(await registry.hasAccess(MOCK_CID, addr1.address)).to.be.true;
    });

    it("Should NOT grant access to someone not shared with", async function () {
      expect(await registry.hasAccess(MOCK_CID, addr2.address)).to.be.false;
    });

    it("Should allow the owner to revoke access", async function () {
      await registry.shareFile(MOCK_CID, addr1.address);
      await registry.revokeAccess(MOCK_CID, addr1.address);
      expect(await registry.hasAccess(MOCK_CID, addr1.address)).to.be.false;
    });

    it("Should prevent non-owners from sharing the file", async function () {
      await expect(
        registry.connect(addr1).shareFile(MOCK_CID, addr2.address)
      ).to.be.revertedWith("Only the owner can share");
    });
  });
});