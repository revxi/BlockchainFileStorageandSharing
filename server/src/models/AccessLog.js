import mongoose from 'mongoose';

const accessLogSchema = new mongoose.Schema({
  file: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  action: {
    type: String,
    enum: ['upload', 'download', 'delete', 'restore', 'share'],
    required: true
  },
  ipAddress: String,
  userAgent: String,
  status: {
    type: String,
    enum: ['success', 'failure'],
    default: 'success'
  }
}, { timestamps: true });

const AccessLog = mongoose.model('AccessLog', accessLogSchema);
export default AccessLog;