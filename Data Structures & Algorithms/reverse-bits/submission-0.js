class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
   reverseBits(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        // 1. Move res to the left to make a "hole" at the end
        res = res << 1;
        
        // 2. Grab the last bit of n and put it in that hole
        res = res | (n & 1);
        
        // 3. Throw away the bit we just used from n
        n >>= 1;
    }
    return res >>> 0; // The "make it positive" trick
}
}