import File from '../models/File.js';
import AccessLog from '../models/AccessLog.js';

export const uploadFileMetadata = async (req, res) => {
  try {
    const newFile = await File.create({
      ...req.body,
      owner: req.user.id
    });
    
    await AccessLog.create({ 
      file: newFile._id, 
      user: req.user.id, 
      action: 'upload' 
    });

    res.status(201).json(newFile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMyFiles = async (req, res) => {
  try {
    const files = await File.find({ owner: req.user.id, isTrash: false }).sort({ createdAt: -1 });
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const moveToTrash = async (req, res) => {
  try {
    const file = await File.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { isTrash: true },
      { new: true }
    );
    res.json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};