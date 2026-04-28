class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
  if (n === 0) return 1;
  let res = 1;
  const iterations = Math.abs(n);

  for (let i = 0; i < iterations; i++) {
    if (n > 0) {
      res *= x;
    } else {
      res /= x;
    }
  }
        return res

    }
}
