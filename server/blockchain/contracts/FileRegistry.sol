// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title FileRegistry
 * @dev Manages decentralized file ownership and sharing permissions for Reverie Vault.
 */
contract FileRegistry {
    
    struct FileRecord {
        address owner;
        string cid;        // The IPFS Content Identifier
        uint256 timestamp;
        bool isExist;
    }

    // Mapping from CID to File metadata
    mapping(string => FileRecord) private vault;
    
    // Mapping for Sharing: CID -> Guest Address -> Has Access
    mapping(string => mapping(address => bool)) private sharedAccess;

    // Events for the Subgraph/Backend to listen to
    event FileAnchored(address indexed owner, string cid, uint256 timestamp);
    event AccessShared(string indexed cid, address indexed from, address indexed to);
    event AccessRevoked(string indexed cid, address indexed to);

    /**
     * @dev Anchors a file to the blockchain. 
     * This is the "Proof of Existence" for the file.
     */
    function anchorFile(string memory _cid) public {
        require(!vault[_cid].isExist, "File already registered");

        vault[_cid] = FileRecord({
            owner: msg.sender,
            cid: _cid,
            timestamp: block.timestamp,
            isExist: true
        });

        emit FileAnchored(msg.sender, _cid, block.timestamp);
    }

    /**
     * @dev Shares access to a file with another wallet.
     */
    function shareFile(string memory _cid, address _guest) public {
        require(vault[_cid].owner == msg.sender, "Only the owner can share");
        require(_guest != address(0), "Invalid address");

        sharedAccess[_cid][_guest] = true;
        
        emit AccessShared(_cid, msg.sender, _guest);
    }

    /**
     * @dev Revokes access from a previously shared user.
     */
    function revokeAccess(string memory _cid, address _guest) public {
        require(vault[_cid].owner == msg.sender, "Only the owner can revoke");
        
        sharedAccess[_cid][_guest] = false;
        
        emit AccessRevoked(_cid, _guest);
    }

    /**
     * @dev Checks if a user (caller) has access to a specific file.
     */
    function hasAccess(string memory _cid, address _user) public view returns (bool) {
        if (vault[_cid].owner == _user) return true;
        return sharedAccess[_cid][_user];
    }

    /**
     * @dev Returns the owner of a CID.
     */
    function getOwner(string memory _cid) public view returns (address) {
        require(vault[_cid].isExist, "File does not exist");
        return vault[_cid].owner;
    }
}