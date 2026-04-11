class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
         /**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
    const prereq = {};
    for (let i = 0; i < numCourses; i++) {
        prereq[i] = [];
    }
    for (const [crs, pre] of prerequisites) {
        prereq[crs].push(pre);
    }

    const output = [];
    const visit = new Set(); // Courses fully processed
    const cycle = new Set(); // Courses in current DFS path

    // 2. Define the DFS helper
    function dfs(crs) {
        // If course is in current path, we found a cycle
        if (cycle.has(crs)) return false;
        // If course is already visited, no need to process again
        if (visit.has(crs)) return true;

        cycle.add(crs);
        for (const pre of prereq[crs]) {
            if (dfs(pre) === false) return false;
        }
        
        cycle.delete(crs);
        visit.add(crs);
        output.push(crs);
        return true;
    }

    // 3. Execute DFS for every course
    for (let c = 0; c < numCourses; c++) {
        if (dfs(c) === false) return [];
    }

    return output;
};
}