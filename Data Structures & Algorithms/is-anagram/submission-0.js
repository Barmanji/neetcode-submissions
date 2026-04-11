class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
          if (s.length !== t.length) {
        return false;
    }

    const count = Array(26).fill(0);

    for (let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    for (let char of t) {
        if (count[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            return false;
        }
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
    }

    return true;    
};

}
