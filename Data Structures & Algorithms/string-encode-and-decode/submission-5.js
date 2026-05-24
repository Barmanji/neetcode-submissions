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
                 if ( str = []) return str.split('')
        if ( str = [""]) return str.split(' ')

        const decodeStr = str.split(',')
        return decodeStr
    }
}
