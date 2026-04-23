class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        const len1 = str1.length,
            len2 = str2.length;

        const isDivisor = (l) => {
            if (len1 % l !== 0 || len2 % l !== 0) {
                return false;
            }
            const sub = str1.slice(0, l);
            const f1 = len1 / l,
                f2 = len2 / l;
            return sub.repeat(f1) === str1 && sub.repeat(f2) === str2;
        };

        for (let l = Math.min(len1, len2); l > 0; l--) {
            if (isDivisor(l)) {
                return str1.slice(0, l);
            }
        }

        return '';
    }
}