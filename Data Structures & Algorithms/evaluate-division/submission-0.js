class UnionFind {
    constructor() {
        this.parent = new Map();
        this.weight = new Map();
    }

    /**
     * @param {string} x
     * @return {void}
     */
    add(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.weight.set(x, 1.0);
        }
    }

    /**
     * @param {string} x
     * @return {string}
     */
    find(x) {
        if (x !== this.parent.get(x)) {
            const origParent = this.parent.get(x);
            this.parent.set(x, this.find(origParent));
            this.weight.set(
                x,
                this.weight.get(x) * this.weight.get(origParent),
            );
        }
        return this.parent.get(x);
    }

    /**
     * @param {string} x
     * @param {string} y
     * @param {number} value
     * @return {number}
     */
    union(x, y, value) {
        this.add(x);
        this.add(y);
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            this.parent.set(rootX, rootY);
            this.weight.set(
                rootX,
                (value * this.weight.get(y)) / this.weight.get(x),
            );
        }
    }

    /**
     * @param {string} x
     * @param {string} y
     * @return {number}
     */
    getRatio(x, y) {
        if (
            !this.parent.has(x) ||
            !this.parent.has(y) ||
            this.find(x) !== this.find(y)
        ) {
            return -1.0;
        }
        return this.weight.get(x) / this.weight.get(y);
    }
}

class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const uf = new UnionFind();

        for (let i = 0; i < equations.length; i++) {
            const [a, b] = equations[i];
            uf.union(a, b, values[i]);
        }

        return queries.map(([a, b]) => uf.getRatio(a, b));
    }
}