class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
            for(let i = 0; i <nums.length; i++){
        for (let j = i+1; j<nums.length; j++){
           if(nums[i] + nums[j] === target){
            // i could have done numOutputAnswer.push(i,j)
            //return numOutputAnswer; 
            return[i,j]
           }
         
        }
    }
      return -1;
    }
}
