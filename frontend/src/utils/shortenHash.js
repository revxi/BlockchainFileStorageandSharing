/**
 * Shortens a wallet address or transaction hash
 * Example: 0x1234567890abcdef1234567890abcdef12345678 -> 0x1234...5678
 */
export const shortenHash = (hash) => {
  if (!hash) return "";
  return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
};