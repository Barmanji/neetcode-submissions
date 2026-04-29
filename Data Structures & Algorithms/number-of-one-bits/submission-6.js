class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        /**
         * @param {number} n - a positive integer
         * @return {number}
         */
        let res = 0;
        for (let i = 0; i < 32; i++) {
            if ((1 << i) & n) { // essentially increasing 1's place ahead like 001 -> 010 -> 100 to & with n if 1 returns which is true means resulat add simple
                res++;
            } // note n & (n-1)
        }
        return res;
    }
}
