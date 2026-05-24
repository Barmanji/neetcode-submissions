class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
getSum(a, b) {
  // Convert to arrays of bits (as numbers)
  let bitsA = a.toString(2).split("").reverse().map(Number);
  let bitsB = b.toString(2).split("").reverse().map(Number);
  
  let res = [];
  let carry = 0;
  let length = Math.max(bitsA.length, bitsB.length);

  for (let i = 0; i < length; i++) {
    // Use 0 if the bit doesn't exist (shorter number)
    let valA = bitsA[i] || 0;
    let valB = bitsB[i] || 0;

    // Sum logic: A XOR B XOR Carry
    let digit = valA ^ valB ^ carry;
    res.push(digit);

    // Carry logic: (A AND B) OR (Carry AND (A XOR B))
    carry = (valA & valB) | (carry & (valA ^ valB));
  }

  if (carry) res.push(1);

  // Reverse back and join to get the binary string, 
  // then parse back to a base-10 integer
  return parseInt(res.reverse().join(""), 2);
}
}
