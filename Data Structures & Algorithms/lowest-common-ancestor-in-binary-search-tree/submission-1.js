class Solution {
    lowestCommonAncestor(root, p, q) {
        let current = root;

        while (current) {
            // If both p and q are greater than current, move right
            if (p.val > current.val && q.val > current.val) {
                current = current.right;
            } 
            // If both p and q are less than current, move left
            else if (p.val < current.val && q.val < current.val) {
                current = current.left;
            } 
            // We found the split point!
            else {
                return current;
            }
        }
    }
}