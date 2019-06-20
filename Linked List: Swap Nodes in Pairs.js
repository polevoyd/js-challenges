/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // Given 1->2->3->4, you should return the list as 2->1->4->3.
 
var swapPairs = function(head, current = head, it = 0) {

        if (!head) return null
        if (!current.next) return head
        head = !it ? current.next : head
        
        const c = current.next.next
        const d = c ? current.next.next.next : null
        current.next.next = current
        current.next = d ? d : c

        return c ? swapPairs(head, c, it + 1) : head
};
