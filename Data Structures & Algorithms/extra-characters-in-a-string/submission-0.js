class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
        curr.isWord = true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const trie = new Trie();
        for (const word of dictionary) {
            trie.addWord(word);
        }

        const n = s.length;
        const dp = new Int32Array(n + 1);
        for (let i = n - 1; i >= 0; i--) {
            dp[i] = 1 + dp[i + 1];
            let curr = trie.root;

            for (let j = i; j < n; j++) {
                if (!curr.children[s[j]]) break;
                curr = curr.children[s[j]];
                if (curr.isWord) {
                    dp[i] = Math.min(dp[i], dp[j + 1]);
                }
            }
        }

        return dp[0];
    }
}