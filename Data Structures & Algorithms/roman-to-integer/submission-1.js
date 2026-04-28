class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
          const temp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (temp[s[i]] < temp[s[i + 1]]) {
      sum += temp[s[i + 1]] - temp[s[i]];
      i++;
    } else sum += temp[s[i]];
  }
  return sum
}
}
