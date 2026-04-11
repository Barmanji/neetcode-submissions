class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
    const orderMap = new Map();
    for (let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }

    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);

        let sorted = false;
        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                // Look up directly in the Map
                if (orderMap.get(w1[j]) > orderMap.get(w2[j])) {
                    return false;
                }
                sorted = true;
                break;
            }
        }

        // If one word is a prefix of the other (e.g., "apple" vs "app")
        if (!sorted && w1.length > w2.length) return false;
    }

    return true;
    }
}
