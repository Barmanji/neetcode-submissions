class ListNode {
    /**
     * @param {number} key
     */
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    /**
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % this.set.length; // index -> // essentially adding two number with same index with inbound 0 - 9999 
        // ex: 5 and 100005 will go into index 5, node(5) -> 5 -> 100005
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let cur = this.set[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.set[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let cur = this.set[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
}