class MyStack {
    constructor() {
        this.storage = [];
    }

    push(x) {
        this.storage.push(x);
    }

    pop() {
        return this.empty() ? null : this.storage.pop();
    }

    top() {
        return this.empty() ? null : this.storage[this.storage.length - 1];
    }

    empty() {
        return this.storage.length === 0;
    }
}