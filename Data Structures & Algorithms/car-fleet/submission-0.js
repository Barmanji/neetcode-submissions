class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
  const time = [];
  for (let i = 0; i < position.length; i++) {
    // Fixed: Ensure the division happens before any rounding
    time.push([position[i], (target - position[i]) / speed[i]]);
  }
  
  // Sort by position ascending
  time.sort((a, b) => a[0] - b[0]);

  let fleet = 0;
  let maxTime = 0; // Tracks the slowest car in front

  // Walk backwards from the car closest to the target
  while (time.length) {
    let top = time.pop();
    // If this car takes LONGER than the fleets in front, it starts a new fleet
    if (top[1] > maxTime) {
      fleet++;
      maxTime = top[1]; // This car is now the "lead" bottleneck
    }
  }
  return fleet;
};
    
}
