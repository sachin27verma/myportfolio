import CryptoJS from 'crypto-js';

// Secret key for encryption/decryption - in a real app, this should be stored securely
// and not hardcoded in the source code
const SECRET_KEY = 'your-secret-key-for-encryption';

/**
 * Encrypts a string using AES encryption
 * @param {string} text - The text to encrypt
 * @returns {string} - The encrypted text
 */
export const encrypt = (text) => {
  if (!text) return '';
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

/**
 * Decrypts an encrypted string
 * @param {string} encryptedText - The encrypted text to decrypt
 * @returns {string} - The decrypted text
 */
export const decrypt = (encryptedText) => {
  if (!encryptedText) return '';
  const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

/**
 * Securely compares two strings by first encrypting them
 * @param {string} str1 - First string to compare
 * @param {string} str2 - Second string to compare
 * @returns {boolean} - True if the strings match after encryption
 */
export const secureCompare = (str1, str2) => {
  if (!str1 || !str2) return false;
  
  // Hash both strings before comparison to prevent timing attacks
  const hash1 = CryptoJS.SHA256(str1).toString();
  const hash2 = CryptoJS.SHA256(str2).toString();
  
  // Use a constant-time comparison algorithm
  let result = hash1.length === hash2.length;
  
  for (let i = 0; i < hash1.length && i < hash2.length; i++) {
    result &= hash1.charCodeAt(i) === hash2.charCodeAt(i);
  }
  
  return !!result;
};
