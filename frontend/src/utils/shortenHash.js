/**
 * Shortens a blockchain hash or address for UI display.
 * @param {string} hash 
 * @param {number} chars - number of characters to show at start/end
 */
export const shortenHash = (hash, chars = 4) => {
  if (!hash) return '';
  return `${hash.substring(0, chars + 2)}...${hash.substring(hash.length - chars)}`;
};