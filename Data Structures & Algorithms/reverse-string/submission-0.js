class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
  let len = s.length - 1;
  let mid = Math.floor(len);
  for (let i = 0; i < mid / 2; i++) {
    [s[i], s[len - i]] = [s[len - i], s[i]];
  }
  return s;
};


    }

