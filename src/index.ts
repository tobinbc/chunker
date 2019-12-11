export const chunker = <T = any>(
  largeArray: any[],
  chunkSize: number
): T[][] => {
  // if largeArray typeerror, typescript will sort it out
  // chunkSize needs to be an integer > 0 though so do at runtime.
  if (chunkSize > 0 && Number.isInteger(chunkSize)) {
    const chunks = [];
    for (let i = 0; i < largeArray.length; i += chunkSize) {
      chunks.push(largeArray.slice(i, i + chunkSize));
    }
    return chunks;
  }
  throw new TypeError("Chunk size must be a number > 0");
};
