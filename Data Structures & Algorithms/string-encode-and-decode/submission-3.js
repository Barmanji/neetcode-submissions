class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        const encodedStr = strs.join()
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
                if ( str.length === 0) return str.split('')

        const decodeStr = str.split(',')
        return decodeStr
    }
}
