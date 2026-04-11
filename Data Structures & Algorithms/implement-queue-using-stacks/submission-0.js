class MyQueue {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        return this.stack.shift()
    }

    /**
     * @return {number}
     */
    peek() {
        return this.stack[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length > 0 ? false : true
    }
}