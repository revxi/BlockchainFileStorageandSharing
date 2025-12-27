import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = process.env.DB_ENCRYPTION_KEY; // 32 chars
const IV_LENGTH = 16;

export const encryptionService = {
  // Generates a SHA-256 hash of a file for blockchain verification
  generateFileHash: (buffer) => {
    return crypto.createHash('sha256').update(buffer).digest('hex');
  },

  // Encrypts sensitive metadata for DB storage
  encryptText: (text) => {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  },

  decryptText: (text) => {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
};