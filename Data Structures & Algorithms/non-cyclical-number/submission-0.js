class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
          let seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    // Convert n to string to iterate through digits
    for (const char of String(n)) {
      const digit = Number(char);
      sum += digit * digit;
    }
    n = sum;
  }

  return n === 1;

    }
}
