class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
          let hash = {};



  for (let i of nums) {
    hash[i] = 1 + (hash[i] || 0);
  }

    for (let key in hash){
        if (hash[key] >= nums.length/2) return key
    }


    }
}
