class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals = intervals.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0]; // Primary sort
            }
            return a[1] - b[1]; // Secondary sort
        });
        console.log(intervals);
        const res = [];
        let output = 0;
        for (let interval of intervals) {
            if (res.length === 0 || res[res.length - 1][1] <= interval[0]) {
                res.push(interval);
            } else {
                output++;
            }
        }
        return output;
    }
}
