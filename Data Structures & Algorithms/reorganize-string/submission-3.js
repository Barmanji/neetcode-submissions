class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const freq = new Array(26).fill(0);
        for (const char of s) {
            freq[char.charCodeAt(0) - 97]++;
        }

        // Use the object syntax with 'compare' for the modern datastructures-js version
        const maxHeap = new MaxPriorityQueue({
            compare: (a, b) => b[0] - a[0] // Max-heap: Higher frequency at the top
        });

        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                // Pre-check: If any char count > half length, it's impossible
                if (freq[i] > Math.ceil(s.length / 2)) {
                    return "";
                }
                maxHeap.enqueue([freq[i], String.fromCharCode(i + 97)]);
            }
        }

        let res = '';
        let prev = null;

        // While there are characters to process or a 'waiting' character (prev)
        while (!maxHeap.isEmpty() || prev) {
            // If we need to place a char but heap is empty, we can't finish
            if (prev && maxHeap.isEmpty()) {
                return '';
            }

            // In recent versions, dequeue() returns the element directly
            const [count, char] = maxHeap.dequeue();
            res += char;

            // If we have a 'prev' char waiting from the last step, put it back in the heap
            if (prev) {
                maxHeap.enqueue(prev);
                prev = null;
            }

            // If current char still has remaining count, set it as 'prev'
            // This prevents the same char from being picked twice in a row
            if (count > 1) {
                prev = [count - 1, char];
            }
        }

        return res;
    }
}