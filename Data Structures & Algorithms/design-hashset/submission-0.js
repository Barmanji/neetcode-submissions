class MyHashSet {
    constructor() {
        this.data = new Array(1000001).fill(false);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.data[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.data[key] = false;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data[key];
    }
}