/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
  const arr = Array.from({ length: n }, (_, i) => (i += 1));

  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (guess(arr[mid]) === 0) {
      return arr[mid];
    } else if (guess(arr[mid]) === -1) {
      r = mid - 1;
    } else if (guess(arr[mid]) === 1) {
      l = mid + 1;
    }
  }

    }
}
