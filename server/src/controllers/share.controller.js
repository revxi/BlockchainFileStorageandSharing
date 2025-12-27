import File from '../models/File.js';

export const shareFile = async (req, res) => {
  const { fileId, targetAddress, permission } = req.body;
  try {
    const file = await File.findOne({ _id: fileId, owner: req.user.id });
    if (!file) return res.status(404).json({ message: "File not found" });

    // Add to shared list if not already present
    const alreadyShared = file.sharedWith.find(s => s.walletAddress === targetAddress.toLowerCase());
    if (!alreadyShared) {
      file.sharedWith.push({ walletAddress: targetAddress.toLowerCase(), permission });
      await file.save();
    }
    
    res.json({ message: `File shared with ${targetAddress}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};