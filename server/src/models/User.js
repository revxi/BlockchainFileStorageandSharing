import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  nonce: {
    type: Number,
    default: () => Math.floor(Math.random() * 1000000)
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;