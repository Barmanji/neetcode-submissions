class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let n = asteroids.length;
        let j = -1;

        for (let a of asteroids) {
            while (j >= 0 && asteroids[j] > 0 && a < 0) {
                if (asteroids[j] > Math.abs(a)) {
                    a = 0;
                    break;
                } else if (asteroids[j] === Math.abs(a)) {
                    j--;
                    a = 0;
                    break;
                } else {
                    j--;
                }
            }
            if (a !== 0) {
                asteroids[++j] = a;
            }
        }

        return asteroids.slice(0, j + 1);
    }
}