class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}


        for ( let i = 0; i < strs.length; i++){
             let key = Array(26).fill(0)
            // id -
            for ( let char of strs[i]){
                key[char.charCodeAt() - 'a'.charCodeAt()]++
                // act : 10010
            }
            const dummy = key.join(',')
            if(!res[dummy]) res[dummy] = []
            res[dummy].push(strs[i])

        }
        return Object.values(res)
    }
}


    
