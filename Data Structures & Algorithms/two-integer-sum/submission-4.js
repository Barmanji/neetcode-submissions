class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
  let hash = {};
    for(let i = 0; i<nums.length; i++){
        hash[nums[i]] = 1 + (hash[nums[i]] || 0)
    }

for (let keyStr in hash) {
        const key = parseInt(keyStr);
        const complement = target - key;

        if (complement === key) {
            // We need a count of 2 or more to form the pair
            if (hash[key] >= 2) {
                return [nums.indexOf(key), nums.indexOf(complement,nums.indexOf(key)+1)]; // A pair exists
            }
        // Case 2: The two required numbers are DIFFERENT (e.g., target=5, numbers=2 and 3)
        } else {
            // Note: hash[complement] is truthy (not undefined or 0) if it exists.
            if (hash[complement]) {
                return [nums.indexOf(key), nums.indexOf(complement)
                ]; // A pair exists
            }
        }
    }

    }}