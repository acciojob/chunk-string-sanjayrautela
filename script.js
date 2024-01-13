function stringChop(str, size) {
  // Check if the input string is null or empty
  if (str === null || str.length === 0) {
    return [];
  }

  const chunks = [];
  let index = 0;

  while (index < str.length) {
    // Extract a chunk of the specified size
    const chunk = str.substring(index, index + size);
    chunks.push(chunk);
    index += size;
  }

  return chunks;
}

// Test cases
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
