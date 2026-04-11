class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor(l+(r - l) / 2);
            if (target === nums[mid]) {
                return true;
            }

            if (nums[l] < nums[mid]) {
                if (target < nums[mid] && target >= nums[l]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else if(nums[l] > nums[mid]){
                if (target <= nums[r] && target > nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }else {
                    l++
                }
        }
        return false;
    }
}