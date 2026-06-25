class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n =  s.length 
        let hn = Math.floor(n/2)
        for (let i = 0; i < hn; i++ ){
            let temp = s[i]
            s[i] = s[n-i-1]
            s[n-i-1] = temp
        }
        return s;
    }
}
