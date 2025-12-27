import CryptoJS from 'crypto-js';

/**
 * Encrypts a file locally using a secret key.
 * @param {File} file - The raw file object from input
 * @param {string} secretKey - The user's derived key
 */
export const encryptFile = async (file, secretKey) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const b64 = e.target.result.split(',')[1]; // Get Base64 portion
      const encrypted = CryptoJS.AES.encrypt(b64, secretKey).toString();
      
      // Create a new Blob of the encrypted string to upload
      const encryptedBlob = new Blob([encrypted], { type: 'text/plain' });
      resolve(encryptedBlob);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Decrypts the encrypted string back into a downloadable file.
 */
export const decryptFile = (encryptedData, secretKey, originalFileName, originalType) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
  const byteCharacters = atob(decrypted);
  const byteNumbers = new Array(byteCharacters.length);
  
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  
  const byteArray = new Uint8Array(byteNumbers);
  return new File([byteArray], originalFileName, { type: originalType });
};