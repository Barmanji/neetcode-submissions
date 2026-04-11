class MinStack {
    constructor() {
            this.st = [];

    }

/** 
 * @param {number} val
 * @return {void}
 */

/**
 * @return {number}
 return this.st.length ? this.st[this.st.length - 1][1] : null;
};
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
         let min_val = this.getMin();
    if (min_val === null || min_val > val) {
      min_val = val;
    }
    this.st.push([val, min_val]);
    }

    /**
     * @return {void}
     */
    pop() {
            this.st.pop();

    }

    /**
     * @return {number}
     */
    top() {
            return this.st.length ? this.st[this.st.length - 1][0] : null;

    }

    /**
     * @return {number}
     */
    getMin() {
            return this.st.length ? this.st[this.st.length - 1][1] : null;

    }
}
