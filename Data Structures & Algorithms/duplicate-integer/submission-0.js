class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
          if (nums.length == 1) return false;
  let hash = {};
  for (let n of nums) {
    hash[n] = 1 + (hash[n] || 0);
  }

  for (let key in hash){
   if (hash[key] >= 2) return true
  }
     return false

    }
}
