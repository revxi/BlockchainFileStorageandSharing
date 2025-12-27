import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  fileType: String,
  fileSize: Number,
  cid: { 
    type: String, 
    required: true, 
    unique: true 
  },
  txHash: {
    type: String,
    required: true
  },
  isTrash: {
    type: Boolean,
    default: false
  },
  encryptionAlgorithm: {
    type: String,
    default: 'AES-256-GCM'
  },
  sharedWith: [{
    walletAddress: String,
    permission: { type: String, enum: ['view', 'edit'], default: 'view' }
  }]
}, { timestamps: true });

// Create an index for faster searching by owner and trash status
fileSchema.index({ owner: 1, isTrash: 1 });

const File = mongoose.model('File', fileSchema);
export default File;