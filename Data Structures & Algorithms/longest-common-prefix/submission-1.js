// class Solution {
//     /**
//      * @param {string[]} strs
//      * @return {string}
//      */
//     longestCommonPrefix(strs) {
//     let pref = strs[0];
//     let prefLen = pref.length;

//     for (let i = 2; i < strs.length; i++) {
//         let s = strs[i];
//         while (pref !== s.substring(0, prefLen)) {
//             prefLen--;
//             if (prefLen === 0) {
//                 return "";
//             }
//             pref = pref.substring(0, prefLen);
//         }
//     }

//     return pref;    
// };
//     }
    


class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let curr = strs[0],
        currLen = curr.length;


        for(let i = 1; i < strs.length; i++){
            let str = strs[i]

            while(curr !== str.substring(0, currLen)){
                currLen--;
                if(currLen === 0) return ""

                curr = curr.substring(0,currLen)
            }

        }
            return curr
    }
}
    
