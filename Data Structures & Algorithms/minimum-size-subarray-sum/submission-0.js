class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
  let sortedDescArr = nums.sort((l, r) => r - l);

    // console.log(sortedDescArr)
  let res = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
        // console.log(sum)
    if (sum >= target) {
      return i+1;
    }
  }
    return 0;
};


    
}
