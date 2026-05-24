/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let temp;
        let prev = null;

        if(!head.next){
            return head = null
        }
        
        for( let i = 0; i < n; i++){
            prev = curr;
            curr = curr.next
            temp = curr
            
        }

        
        prev.next = temp.next;
        curr.next = null
        return head;

    }
}
