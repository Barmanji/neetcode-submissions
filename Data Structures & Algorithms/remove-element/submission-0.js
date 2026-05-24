class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
   let k = [];

  for (let num of nums) {
    if ((val ^ num )!== 0) {
      k.push(num);
    }
  }
  return k.length;

}}
