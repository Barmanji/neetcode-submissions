class FreqStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    console.log(this.stack);
  }

  /**
   * @return {number}
   */
  pop() {
    const hashMap = {};
    for (const elem of this.stack) {
      hashMap[elem] = (hashMap[elem] || 0) + 1;
    }

    let maxKey = [];
    const maxValue = Math.max(...Object.values(hashMap));
    for (const [key, value] of Object.entries(hashMap)) {
      if (value === maxValue) {
        // Convert key back to a number since Object.entries turns keys into strings
        maxKey.push(Number(key));
      }
    }

    console.log(maxKey, hashMap);

    // FIX: Find the last occurrence (closest to top) of any value present in maxKey
    let indexToRemove = -1;
    for (let i = this.stack.length - 1; i >= 0; i--) {
      if (maxKey.includes(this.stack[i])) {
        indexToRemove = i;
        break;
      }
    }

    const poppedVal = this.stack.splice(indexToRemove, 1)[0];
    
    console.log(maxKey, hashMap);
    return poppedVal; // Added return to follow standard pop behavior
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
