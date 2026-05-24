/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0
        intervals.sort((a, b) => {
            if(a.start !== b.start) a.start - b.start
            else a.end - b.end
        });
        let res = 1;
        let prevEnd = intervals[0].end;

        for (let i = 1; i < intervals.length; i++) {
            const start = intervals[i].start;
            const end = intervals[i].end;
            if (start >= prevEnd) {
                prevEnd = end;
            } else {
                res++;
                prevEnd = Math.min(end, prevEnd);
            }
        }
        return res;
    }
}
